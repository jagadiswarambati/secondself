# Demo Scenario

Full narrative reference: see the finalized product spec, section 10 ("Complete Demo Storyline"). This document tracks build status against that storyline; it does not restate the full script — see `data/demo/scenarios/` for per-act outlines still to be filled in with real content.

## The five acts

| Act | Purpose | Status |
|---|---|---|
| 1 — Seed the past | Pre-loaded decision history showing an established pattern | Outline only — `data/demo/scenarios/scenario-1-negative-outcome.md` |
| 2 — The naive case | A new, unrelated-category decision produces **no** intervention, proving the system isn't just interrupting on everything | Not yet outlined |
| 3 — The payoff moment | A live decision matching the seeded pattern triggers a proactive Intervention citing specific past reasoning | Outline only — `data/demo/scenarios/scenario-2-recall-intervention.md` |
| 4 — Proof of accumulation | The same new decision, run against a persona/category with only weak evidence, produces a visibly gentler/absent intervention | Outline only — `data/demo/scenarios/scenario-3-repeated-pattern.md` |
| 5 — Close | One-line articulation of the without/with-Hindsight contrast | Not yet written — draft below |

## Draft closing line (to refine)

> "Remove Hindsight from this and it's a journal. With it, the journal starts talking back exactly when it matters."

## What the demo must prove, concretely

- [ ] The Act 3 intervention **quotes the persona's own past reasoning/reflection text**, not a generic restatement — this is what separates "personal hindsight" from generic AI advice.
- [ ] Act 4's contrast is driven by a genuinely different confidence score computed from different seed data — not a hardcoded UI difference — so a technical judge inspecting the Hindsight Explorer screen sees real evidence behind the difference.
- [ ] The full loop (retain on decision entry → recall on a later, different decision → confidence shift after a reflection) is demonstrable end-to-end against a real, running Hindsight instance during the live demo, not mocked.

## Before/after framing for the video (per the content guide)

- **Without accumulated memory:** log a first-time decision in a category with no history — system stays quiet, as expected (this is Act 2, reused).
- **With accumulated Hindsight:** the Act 3 moment — the same kind of decision, but now with history behind it, produces a specific, cited, non-generic intervention.

## Not yet decided

- Final demo persona and specific decision categories (draft direction: "saying yes under social/time pressure" per the product spec, but not locked)
- Whether the video walks through the Hindsight Explorer screen to show raw retain/recall calls, or keeps that for Q&A only
