/**
 * Intervention — a proactive surfacing of past HindsightEvidence to the
 * user while they are mid-way through logging a new/FutureDecision.
 *
 * Interventions are always framed as reflection, never instruction —
 * see agent/pipeline/surfaceHindsight.ts for the framing rules this
 * type is designed to support.
 */

import type { DecisionId } from "./decision";
import type { HindsightEvidence } from "./hindsightEvidence";

export type InterventionTone = "gentle" | "assertive"; // scales with pattern confidence

export interface Intervention {
  id: string;
  triggeredByDecisionId: DecisionId | null; // null while decision is still a draft
  matchedEvidence: HindsightEvidence[];
  tone: InterventionTone;
  message: string; // LLM-drafted, reflection-framed text shown to the user
  shownAt: string;

  /** Captured after the fact, if the user tells us — closes the
   *  second-order loop of "did surfacing this memory actually help?" */
  userReportedInfluence?: "changed_my_choice" | "confirmed_my_choice" | "no_influence";
}
