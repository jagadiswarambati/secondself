/**
 * Tunable constants for pattern detection / intervention thresholds.
 * Deliberately centralized and named so these can be justified in a
 * judge Q&A and adjusted without hunting through the pipeline code.
 *
 * Values below are DRAFT placeholders — finalize during implementation
 * once real demo data is seeded and behavior can be tuned by feel.
 */

export const SIMILARITY_INTERVENTION_THRESHOLD = 0.6; // 0–1
export const PATTERN_CONFIDENCE_SATURATION_COUNT = 5; // reflections at which confidence maxes out
export const ASSERTIVE_TONE_MIN_INSTANCES = 3; // instances before tone escalates from gentle -> assertive
