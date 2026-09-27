/**
 * Step 4 — Compare historical experiences.
 * Runs structural similarity scoring (services/similarity) over the
 * recalled evidence against the current draft, producing ranked,
 * scored matches — this is the "defensible, inspectable" layer
 * described in the product spec, distinct from raw LLM judgment.
 */
import type { FutureDecisionDraft } from "@/domain/futureDecision";
import type { HindsightEvidence } from "@/domain/hindsightEvidence";

export async function compareExperiences(
  _draft: FutureDecisionDraft,
  _candidates: HindsightEvidence[]
): Promise<HindsightEvidence[]> {
  // TODO: call services/similarity/structuralSimilarity.ts, attach
  // similarityScore + similarityDimensions to each HindsightEvidence,
  // return sorted descending by score.
  throw new Error("compareExperiences() not implemented — scaffold placeholder.");
}
