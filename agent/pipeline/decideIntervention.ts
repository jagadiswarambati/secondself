/**
 * Step 6 — Determine whether intervention is useful.
 * Applies the threshold rule from the product spec: fires only when
 * structural similarity + pattern confidence cross a defined bar.
 * Silence is a deliberate, tracked outcome of this step, not an
 * absence of behavior — see docs/AGENT_WORKFLOW.md.
 */
import type { Pattern } from "@/domain/pattern";
import type { HindsightEvidence } from "@/domain/hindsightEvidence";

export interface InterventionDecision {
  shouldIntervene: boolean;
  tone: "gentle" | "assertive" | null;
  reason: string;
}

export async function decideIntervention(
  _pattern: Pattern | null,
  _evidence: HindsightEvidence[]
): Promise<InterventionDecision> {
  // TODO: implement threshold logic (see docs/MEMORY_DESIGN.md once
  // confidence formula + threshold constants are finalized in
  // config/constants.ts).
  throw new Error("decideIntervention() not implemented — scaffold placeholder.");
}
