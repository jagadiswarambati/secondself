# Architecture

## Layering

```
┌───────────────────────────────────────────────────────────┐
│  app/ (Next.js routes)                                      │
│  Home · New Decision · Decision Detail · Reflection ·       │
│  Patterns · Hindsight Explorer · Settings                   │
└───────────────────────────┬───────────────────────────────┘
                             │
┌───────────────────────────▼───────────────────────────────┐
│  components/ + features/                                    │
│  UI components + view-layer DTOs + API boundary              │
│  (components never import agent/ or memory/ directly)        │
└───────────────────────────┬───────────────────────────────┘
                             │
┌───────────────────────────▼───────────────────────────────┐
│  agent/ — 10-step orchestration pipeline                    │
│  understandDecision → identifyContext → recallHindsight →   │
│  compareExperiences → detectPatterns → decideIntervention →  │
│  surfaceHindsight → captureOutcome → captureReflection →     │
│  retainLearning                                              │
└──────────┬───────────────────────────────┬─────────────────┘
           │                               │
┌──────────▼─────────────┐   ┌─────────────▼─────────────────┐
│  memory/hindsight/       │   │  services/                     │
│  client · config ·       │   │  llm/ (provider-agnostic) ·     │
│  retain · recall ·       │   │  similarity/ (structural) ·     │
│  context · types · errors│   │  confidence/ (pattern scoring)  │
└──────────┬─────────────┘   └─────────────┬─────────────────┘
           │                               │
┌──────────▼───────────────────────────────▼─────────────────┐
│  domain/ — Decision, Outcome, Reflection, Lesson, Pattern,   │
│  HindsightEvidence, FutureDecisionDraft, Intervention         │
└───────────────────────────────────────────────────────────┘
```

## Why this shape

- **`domain/` has no dependencies on anything else.** Every other layer depends inward on it. This means the core business concepts (what a Decision, Pattern, or Intervention *is*) can be reasoned about, tested, and reviewed without touching Hindsight, an LLM, or React at all.
- **`memory/hindsight/` is a dedicated boundary, not a generic "memory" folder.** Hindsight is mandatory to this product, not a swappable detail — see [`HINDSIGHT_INTEGRATION.md`](./HINDSIGHT_INTEGRATION.md) for why. Isolating it here means every retain/recall call has one place to be reviewed, mocked in tests, and eventually hardened (retries, error classification — see `memory/hindsight/errors.ts`).
- **`agent/` is pure orchestration.** It composes the pipeline steps but should contain minimal business logic itself — the actual similarity math lives in `services/similarity/`, confidence math in `services/confidence/`, and message drafting logic in the `surfaceHindsight` step's prompt template. This keeps each concern independently testable.
- **`services/llm/` is provider-agnostic on purpose.** Second Self's own reasoning LLM (drafting interventions, classifying context) is a separate concern from whatever LLM Hindsight's server is configured with internally — conflating the two would make the Hindsight-dependency story confusing to explain.
- **`features/` is the only place UI code is allowed to call into the backend**, via a small API surface (`features/*/api.ts`) — this keeps `components/` free of business logic and easy to restyle without risk.

## Data flow: a new decision

```
User fills New Decision form
  → features/decisions/api.ts#submitNewDecision (as draft is entered)
    → agent pipeline: understandDecision → identifyContext → recallHindsight
      → memory/hindsight/recall.ts (Hindsight recall())
    → compareExperiences (services/similarity)
    → detectPatterns (services/confidence)
    → decideIntervention
      → if yes: surfaceHindsight (services/llm) → <InterventionPanel /> renders inline
      → if no: nothing shown, silently continues
  → on final submit: retainLearning
    → memory/hindsight/retain.ts (Hindsight retain())
```

## Data flow: a later reflection

```
User opens Reflection screen for a pending decision
  → captureOutcome + captureReflection
    → retainLearning#retainNewReflection
      → memory/hindsight/retain.ts (Hindsight retain(), updating standing memory)
      → services/confidence recomputes the relevant Pattern's confidenceScore
```

## Deliberately out of scope for the hackathon foundation

- Multi-user auth/accounts beyond a single `userId` string threaded through
- Real-time collaborative features
- Mobile app (web-responsive only)
- Production-grade retry/backoff on Hindsight calls (tracked as a roadmap item, not ignored — see `memory/hindsight/errors.ts` for the error taxonomy this will hang off of)
