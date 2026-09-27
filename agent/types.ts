/**
 * Shared types for the agent pipeline — the 10-step flow described in
 * docs/AGENT_WORKFLOW.md:
 *
 *   1. Understand current decision
 *   2. Identify context
 *   3. Recall relevant Hindsight
 *   4. Compare historical experiences
 *   5. Detect patterns
 *   6. Determine whether intervention is useful
 *   7. Surface relevant personal hindsight
 *   8. Capture outcome
 *   9. Capture reflection
 *  10. Retain the new learning
 *
 * Each step below is a placeholder function with a defined input/output
 * contract — no intelligence implemented yet.
 */

import type { FutureDecisionDraft } from "@/domain/futureDecision";
import type { HindsightEvidence } from "@/domain/hindsightEvidence";
import type { Intervention } from "@/domain/intervention";

export interface DecisionContext {
  category: string | null;
  pressureType: string | null;
  emotionalState: string | null;
}

export interface PipelineState {
  draft: FutureDecisionDraft;
  context: DecisionContext | null;
  evidence: HindsightEvidence[];
  shouldIntervene: boolean;
  intervention: Intervention | null;
}
