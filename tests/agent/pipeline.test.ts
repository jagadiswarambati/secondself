import { describe, it, expect } from "vitest";

describe("agent pipeline", () => {
  it.todo("decideIntervention returns shouldIntervene=false below similarity threshold");
  it.todo("decideIntervention escalates tone to 'assertive' at ASSERTIVE_TONE_MIN_INSTANCES");
  it.todo("retainNewDecision is called for every decision regardless of intervention outcome");
});
