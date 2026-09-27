/**
 * Agent entry point — will eventually compose the 10 pipeline steps
 * into the two real orchestrated flows:
 *
 *   runDecisionEntryFlow()  — steps 1–7 (+ 10 for the decision itself)
 *   runReflectionFlow()     — steps 8–10
 *
 * Left unimplemented deliberately: composing this correctly depends on
 * decisions not yet made about sync vs. async retain, and how failures
 * in one step (e.g. a slow recall) should degrade rather than block the
 * user. See docs/AGENT_WORKFLOW.md "Failure & degradation" section.
 */

export {};
