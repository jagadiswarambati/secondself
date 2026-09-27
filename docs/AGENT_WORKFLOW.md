# Agent Workflow

Second Self's agent runs as two distinct flows, sharing the same 10 conceptual steps described in the product spec:

## Flow A — Decision entry (steps 1–7, then 10)

```
1. understandDecision    — normalize raw form input into a FutureDecisionDraft
2. identifyContext       — infer category / pressureType / emotionalState tags
3. recallHindsight       — query Hindsight for structurally similar past decisions
4. compareExperiences    — score structural similarity, rank candidates
5. detectPatterns        — resolve/update the relevant Pattern + its confidence
6. decideIntervention    — threshold check: fire, and at what tone, or stay silent
7. surfaceHindsight      — (if firing) LLM drafts the reflection-framed message
10. retainLearning        — persist the new Decision into Hindsight, regardless
                            of whether an intervention fired
```

Steps 3–6 are intended to run **live**, as the user is filling out the New Decision form (debounced on meaningful input change), not only after final submit — this is what makes the intervention feel like a proactive interruption rather than a post-hoc search result. Step 10 (retaining the decision itself) happens on final submit.

## Flow B — Reflection (steps 8–10)

```
8. captureOutcome      — user records what actually happened
9. captureReflection   — user records their verdict + optional notes
10. retainLearning       — update the decision's standing memory in Hindsight,
                          recompute the relevant Pattern's confidence
```

This flow is deliberately decoupled from Flow A in time — reflections are expected to happen in a separate session, often weeks or months after the original decision, once an outcome is actually knowable.

## Failure & degradation

Because Flow A's recall step is in the critical path of the user filling out a form, its failure modes matter:

| Failure | Behavior |
|---|---|
| Hindsight recall times out / errors | Proceed without intervention — never block decision entry on memory issues. Log via `HindsightConnectionError` / `HindsightRecallError` (see `memory/hindsight/errors.ts`). |
| No matches above similarity threshold | Correct, expected behavior — silently proceed. This is not a failure. |
| LLM drafting step (`surfaceHindsight`) fails | Fall back to a plain, templated citation of the matched decision(s) rather than showing nothing — the evidence itself is more important than the polish of its framing. |
| Retain (step 10) fails | Should surface to the user that the decision may not have been saved — silent data loss is worse here than an explicit error, since the whole product's value depends on decisions actually being retained. |

**Status:** this table describes intended behavior; the actual retry/fallback implementation is not yet built.

## Why steps 3–6 are separated instead of one LLM call

Recall, similarity scoring, pattern confidence, and the intervention threshold are each independently testable and independently explainable — see [`MEMORY_DESIGN.md`](./MEMORY_DESIGN.md). A single "ask the LLM if this is similar and if we should intervene" call would be faster to build but impossible to defend in a technical Q&A about why a particular intervention fired or didn't.
