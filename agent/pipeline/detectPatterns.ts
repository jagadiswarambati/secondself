/**
 * Step 5 — Detect patterns.
 * Given scored evidence, determines/updates the relevant Pattern
 * (domain/pattern.ts) and its confidenceScore via
 * services/confidence/patternConfidence.ts.
 */
import type { HindsightEvidence } from "@/domain/hindsightEvidence";
import type { Pattern } from "@/domain/pattern";

export async function detectPatterns(
  _evidence: HindsightEvidence[]
): Promise<Pattern | null> {
  throw new Error("detectPatterns() not implemented — scaffold placeholder.");
}
