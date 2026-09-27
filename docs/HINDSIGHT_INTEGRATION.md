# Hindsight Integration

Reference: [Hindsight (Vectorize)](https://github.com/vectorize-io/hindsight) · [docs](https://hindsight.vectorize.io/) · [`@vectorize-io/hindsight-client`](https://www.npmjs.com/package/@vectorize-io/hindsight-client)

## Why Hindsight is essential, not optional

Second Self's entire value proposition — "your own hindsight becomes an AI decision-making capability" — depends on three properties that a generic vector-search-over-notes system does not provide:

1. **Standing, updatable memory.** A `Decision`'s memory isn't static once written — a later `Reflection` needs to update the standing understanding of that decision (see [`MEMORY_DESIGN.md`](./MEMORY_DESIGN.md)), and the category's `Pattern` confidence needs to shift accordingly. Plain RAG treats documents as immutable chunks; it has no native concept of a memory being *revised* by new experience.
2. **Structured extraction, not just embedding.** Hindsight extracts facts/entities/observations from retained natural-language content (per the [Hindsight architecture overview](https://github.com/vectorize-io/hindsight)) rather than only indexing it for similarity search — this is what makes it plausible to later query "what has this person experienced in situations like X," not just "what text is similar to X."
3. **A recall step that can be triggered proactively by the app**, not only in response to a user's explicit question — Second Self's `recallHindsight` pipeline step (see [`AGENT_WORKFLOW.md`](./AGENT_WORKFLOW.md)) calls Hindsight the moment a new decision draft is being entered, before the user has asked anything.

**If Hindsight is removed:** Second Self degrades to a static decision journal with no way to surface anything unprompted, no way to build a confidence score that changes over time, and no way to connect a new decision to old ones except by the user manually re-reading their own history. The proactive intervention — the core demo moment — is not possible.

## What Second Self retains

Three kinds of retain events (see `memory/hindsight/retain.ts`):

| Event | Triggered by | Content (conceptually) |
|---|---|---|
| `retainDecision` | New decision logged (Flow A, step 10) | Situation, options considered, choice made, reasoning at the time, emotional state, pressure type |
| `retainReflection` | Reflection submitted (Flow B, step 10) | Outcome + verdict + notes, linked back to the original decision's standing memory |
| `retainIntervention` | An Intervention is shown | Which past decisions were cited, the tone used, and (later, if captured) whether the user reported it changed or confirmed their choice |

Per the [Hindsight quick-start](https://github.com/vectorize-io/hindsight), `retain()` takes natural-language `content`, not structured JSON — Hindsight performs its own fact/entity extraction internally. Second Self's retain functions are therefore responsible for composing clear, complete natural-language statements from the structured `Decision`/`Reflection` domain objects, not for shaping the storage format directly.

## What Second Self recalls

The primary recall path (`recallSimilarDecisions` in `memory/hindsight/recall.ts`) is called on every new decision draft, using the situation + reasoning-so-far as the query. Recalled matches are joined back against this app's own `Decision`/`Reflection` records (by identifying metadata — **TODO:** confirm exactly what identifying metadata `recall()` returns in the current SDK version before implementing this join) to produce `HindsightEvidence` objects the agent pipeline can reason over.

`reflect()` (Hindsight's third primitive, alongside retain/recall) is deliberately **not** used in the primary intervention path — it produces a synthesized narrative answer, which is well-suited to a "tell me about my patterns" style query but not to the discrete, attributable, per-decision evidence an Intervention needs to cite. It remains a documented candidate for the Pattern Dashboard's plain-language summaries later.

## How recalled memory enters the agent

```
recallHindsight (raw Hindsight matches)
  → compareExperiences (structural similarity scoring, services/similarity/)
  → detectPatterns (pattern confidence, services/confidence/)
  → buildMemoryContext (memory/hindsight/context.ts — shapes evidence + a
    summaryHint for the LLM prompt)
  → surfaceHindsight (LLM drafts the actual Intervention message)
```

This multi-step shaping is what lets Second Self show a similarity score and explicit dimensions in the Hindsight Explorer screen, rather than an opaque "the AI thought this was relevant."

## Longitudinal memory

Because `Pattern.confidenceScore` is recomputed (not just appended to) on every new `Reflection`, the system's behavior for the *same* category of decision is expected to visibly change as more history accumulates — see [`DEMO_SCENARIO.md`](./DEMO_SCENARIO.md) Act 4 for how this is proven live in the demo, by contrasting a well-evidenced category against a weakly-evidenced one.

## Setup requirements

```bash
# Run Hindsight locally (Docker)
export OPENAI_API_KEY=sk-...
docker run --rm -it --pull always -p 8888:8888 -p 9999:9999 \
  -e HINDSIGHT_API_LLM_API_KEY=$OPENAI_API_KEY \
  -v $HOME/.hindsight-docker:/home/hindsight/.pg0 \
  ghcr.io/vectorize-io/hindsight:latest

# Install the client
npm install @vectorize-io/hindsight-client
```

Set `HINDSIGHT_BASE_URL` in `.env.local` (see `.env.example`). Second Self scopes **one Hindsight memory bank per user** (`bankIdForUser` in `memory/hindsight/config.ts`) so recall never crosses between users — this is an app-level design decision, not a Hindsight requirement.

## Implementation status

Interfaces and typed placeholders only (`memory/hindsight/client.ts`, `retain.ts`, `recall.ts`). Before writing real SDK calls: confirm the exact `HindsightClient` constructor signature, `retain()`/`recall()` option shapes, and response shapes against the currently installed `@vectorize-io/hindsight-client` version's own docs/types — do not assume the public quick-start snippets are exhaustive. See TODOs inline in each file.

## Future demo usage

The seed script (`scripts/seed-demo-data.ts`) will retain the scenario data in `data/demo/` into a dedicated demo Hindsight bank before a live run, so the demo's recall/intervention moment reflects real accumulated memory rather than a scripted UI state. See [`DEMO_SCENARIO.md`](./DEMO_SCENARIO.md).
