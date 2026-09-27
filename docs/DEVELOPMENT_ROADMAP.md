# Development Roadmap

This tracks what the current repository is (a scaffold) versus what remains to reach a demoable prototype. Ordered roughly by dependency, not by calendar time.

## Phase 0 — Foundation (this commit)
- [x] Repository structure, domain types, interfaces, placeholder screens
- [x] Hindsight boundary layer defined (typed, not yet wired to the real SDK)
- [x] Documentation set (architecture, memory design, agent workflow, domain model, Hindsight integration, demo scenario outline)

## Phase 1 — Hindsight wiring
- [ ] Confirm exact `@vectorize-io/hindsight-client` version, constructor signature, and `retain()`/`recall()` option/response shapes against current docs (do not assume quick-start snippets are exhaustive)
- [ ] Implement `memory/hindsight/client.ts`, `retain.ts`, `recall.ts` for real
- [ ] Stand up a local Hindsight instance (Docker) for development

## Phase 2 — Domain logic
- [ ] Finalize and implement the pattern confidence formula (`services/confidence/patternConfidence.ts`), including the saturation constant
- [ ] Finalize and implement structural similarity scoring + weighting (`services/similarity/structuralSimilarity.ts`)
- [ ] Implement the intervention threshold + tone-escalation logic (`agent/pipeline/decideIntervention.ts`)

## Phase 3 — Agent reasoning
- [ ] Choose and implement the LLM provider (`services/llm/providers/groq.ts` or alternative)
- [ ] Implement `identifyContext` classification
- [ ] Implement `surfaceHindsight` prompt template, enforcing non-directive framing rules

## Phase 4 — UI
- [ ] Implement `DecisionForm` with live (debounced) recall-on-input-change
- [ ] Implement `InterventionPanel` (inline, non-modal)
- [ ] Implement `ReflectionForm`, `PatternCard`, `DecisionTimeline`
- [ ] Implement Hindsight Explorer transparency view

## Phase 5 — Demo data & rehearsal
- [ ] Author real content for the three scenarios in `data/demo/scenarios/`
- [ ] Implement `scripts/seed-demo-data.ts` against a real Hindsight instance
- [ ] Fill in `docs/verification/HINDSIGHT_PROOF.md`, `MEMORY_FLOW.md`, `BEFORE_AFTER.md` with real evidence (screenshots/logs of actual retain/recall calls)
- [ ] Rehearse the full 5-act demo end-to-end against live data, not mocks

## Open design questions (not blocking, but tracked)
- Whether `categoryId` re-tagging (a decision's category being revised as more data comes in) is implemented for the hackathon or deferred — see `DOMAIN_MODEL.md`
- Whether `reflect()` is used anywhere in v1 (candidate: Pattern Dashboard narrative summaries) or deferred entirely
- Retry/backoff strategy for Hindsight calls in production (explicitly out of scope for the hackathon foundation — see `ARCHITECTURE.md`)
