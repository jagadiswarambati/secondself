/**
 * Structural similarity layer (see product spec section 7,
 * "Pattern-Detection Logic", layer 1).
 *
 * Deliberately NOT pure embedding/semantic similarity — this scores
 * along explicit, inspectable dimensions (category, pressure type,
 * emotional state, stakes level) so the resulting score can be shown
 * to a user/judge with a concrete explanation, feeding
 * domain/hindsightEvidence.ts#similarityDimensions.
 */
import type { FutureDecisionDraft } from "@/domain/futureDecision";
import type { Decision } from "@/domain/decision";

export interface SimilarityResult {
  score: number; // 0–1
  dimensions: string[]; // which factors contributed, for transparency
}

export function scoreStructuralSimilarity(
  _draft: FutureDecisionDraft,
  _candidate: Decision
): SimilarityResult {
  // TODO: implement weighted comparison across category, pressureType,
  // emotionalState, and a stakes heuristic. See docs/MEMORY_DESIGN.md
  // for the intended weighting once finalized.
  throw new Error("scoreStructuralSimilarity() not implemented — scaffold placeholder.");
}
