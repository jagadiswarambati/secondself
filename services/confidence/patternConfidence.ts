/**
 * Pattern confidence scoring (see product spec section 4 & 7).
 *
 * confidence = f(reflectedCount, verdictConsistency)
 * Deliberately simple and explainable — NOT a black-box ML model —
 * because judges and users both need to be able to see why a
 * confidence score moved after a new Reflection.
 */
import type { Pattern } from "@/domain/pattern";

export function computePatternConfidence(
  _pattern: Pick<Pattern, "reflectedCount" | "regrettedCount" | "goodCallCount" | "mixedCount">
): number {
  // TODO: implement the exact formula. Draft intent (finalize in
  // docs/MEMORY_DESIGN.md before implementing):
  //   consistency = max(regrettedCount, goodCallCount) / reflectedCount
  //   confidence = consistency * min(1, reflectedCount / SATURATION_COUNT)
  throw new Error("computePatternConfidence() not implemented — scaffold placeholder.");
}
