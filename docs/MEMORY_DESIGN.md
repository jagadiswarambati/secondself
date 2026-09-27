# Memory Design

## What Second Self remembers (and what it deliberately does not)

Second Self remembers **decisions and their outcomes**, not conversations. There is no chat transcript in the memory model. Every memory unit traces back to one of:

- `Decision` — a situation, options, a choice, and the reasoning at the time
- `Outcome` — what actually happened, recorded later
- `Reflection` — the user's own verdict, and optional notes
- `Pattern` — the accumulating record of how a category of decision has gone, over time, for this specific person
- `Lesson` — an explicit generalization the agent proposes once a pattern has enough consistent evidence (always shown for confirmation, never asserted silently)

See [`DOMAIN_MODEL.md`](./DOMAIN_MODEL.md) for full field-level detail on each.

## Why this is not "chat memory"

A chat-memory system remembers *that a conversation happened*. Second Self remembers *that a judgment was made, and whether it held up* — a fundamentally different unit of memory, structured around decision → outcome → verdict rather than turn → turn. This distinction is the basis of the "not ChatGPT memory" positioning in the product spec.

## Pattern confidence (draft formula)

```
consistency     = max(regrettedCount, goodCallCount) / reflectedCount
confidenceScore = consistency * min(1, reflectedCount / SATURATION_COUNT)
```

Where `SATURATION_COUNT` (see `config/constants.ts`) is the number of reflected instances at which confidence is treated as "fully established" — a single instance should never produce high confidence, regardless of how clear-cut its verdict was, because the entire premise of Second Self is that *repetition* is what turns an experience into a pattern.

This formula is deliberately simple, transparent, and explainable — a judge or user can be shown exactly why a confidence score is what it is. This is a design choice, not a limitation: an opaque ML-derived confidence score would undermine the "your own hindsight" framing, which depends on the user trusting and understanding what the system is telling them about their own history.

**Status:** formula is a draft intent, not yet implemented — see `services/confidence/patternConfidence.ts`. Finalize exact constants once real seed data is authored and the demo scenarios can be tuned by feel.

## Structural similarity (draft dimensions)

Rather than relying purely on semantic/embedding similarity (which risks false-positive matches that are topically similar but structurally unrelated — e.g. two decisions that both mention "money" but involve completely different dynamics), Second Self scores similarity along explicit dimensions:

- `categoryId` (exact or inferred-close match)
- `pressureType` (social / time / financial / authority / none / other)
- `emotionalStateAtTime`
- a stakes-level heuristic (TBD — draft idea: derived from LLM classification during `identifyContext`, not user-entered directly, to avoid asking the user to self-rate stakes)

Each contributing dimension is retained in `HindsightEvidence.similarityDimensions` so the Hindsight Explorer screen can show *why* a match was made, not just that one was.

**Status:** weighting scheme not yet finalized — see `services/similarity/structuralSimilarity.ts`.

## Category assignment and re-tagging

A `Decision`'s `categoryId` is assigned at creation as a best guess (from `identifyContext`). It may later be revised by the agent if a stronger pattern match emerges across the corpus of a user's decisions — this is intentionally left as a documented open design question rather than implemented speculatively; see [`DEVELOPMENT_ROADMAP.md`](./DEVELOPMENT_ROADMAP.md).

## Why memory is scoped per-user, one Hindsight bank each

See [`HINDSIGHT_INTEGRATION.md`](./HINDSIGHT_INTEGRATION.md) for the full rationale — in short, cross-user recall would violate the entire premise that this is *your own* hindsight, not aggregated or benchmarked advice from other people's decisions.
