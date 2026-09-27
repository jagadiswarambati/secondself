# Domain Model

Source of truth: [`domain/`](../domain/). This document is a narrative companion, not a duplicate of the type definitions — read the TSDoc comments in each file for field-level detail.

## Entity relationship overview

```
User
 └─ Decision (1..N)
     ├─ Outcome (0..1, added later)
     ├─ Reflection (0..1, added later, requires Outcome)
     └─ belongs to → Pattern (by categoryId)

Pattern (per category, per user)
 ├─ aggregates → many Decisions' outcomes/verdicts
 ├─ has → confidenceScore (recomputed on each new Reflection)
 └─ may produce → Lesson (shown to user for confirmation)

FutureDecisionDraft (transient, not persisted until finalized into a Decision)
 └─ evaluated against → HindsightEvidence (recalled, scored Decisions)
     └─ if threshold met → produces → Intervention
```

## Entities

| Entity | Defined in | Lifecycle |
|---|---|---|
| `Decision` | `domain/decision.ts` | Created once, immutable core fields; `status` transitions `pending_reflection` → `reflected` |
| `Outcome` | `domain/outcome.ts` | Created once, later than its Decision |
| `Reflection` | `domain/reflection.ts` | Created once, alongside or after its Outcome |
| `Lesson` | `domain/lesson.ts` | Proposed by the agent, requires `confirmedByUser` before being treated as established |
| `Pattern` | `domain/pattern.ts` | Recomputed (not recreated) on every new Reflection in its category |
| `HindsightEvidence` | `domain/hindsightEvidence.ts` | Transient — constructed per recall, not persisted independently (the underlying Decision/Reflection are the persisted source of truth) |
| `FutureDecisionDraft` | `domain/futureDecision.ts` | Transient, exists only during Flow A until finalized into a `Decision` |
| `Intervention` | `domain/intervention.ts` | Created when `decideIntervention` fires; persisted (via `retainIntervention`) to support the second-order "was this useful" loop |

## Why `HindsightEvidence` is a separate type from `Decision`

`HindsightEvidence` is the *view* of a past decision as it enters the agent's reasoning for a *specific* new draft — it carries `similarityScore` and `similarityDimensions`, which are properties of the comparison, not of the original Decision itself. Conflating the two would make it unclear which fields are stable facts about the past decision versus computed relevance-to-right-now.

## Why `Lesson` requires `confirmedByUser`

The product spec is explicit that Second Self supports decisions, it does not dictate them. A `Lesson` is the closest thing in the domain model to the agent making a claim about the user ("you tend to..."), so it is modeled as a proposal requiring confirmation rather than an asserted fact — this is a deliberate domain-level enforcement of the product's non-directive principle, not just a UI convention.
