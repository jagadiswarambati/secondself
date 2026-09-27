/**
 * Pattern — the accumulating, evolving record of how a specific
 * Decision category has actually played out for this specific user
 * over time. This is the core "memory that gets smarter" artifact.
 *
 * confidenceScore is intentionally a transparent, explainable function
 * (see services/confidence/patternConfidence.ts) rather than an opaque
 * ML score — judges and users should both be able to see WHY it moved.
 */

import type { CategoryId, DecisionId } from "./decision";

export interface Pattern {
  categoryId: CategoryId;
  label: string; // human-readable, e.g. "Saying yes under social/time pressure"

  linkedDecisionIds: DecisionId[];
  reflectedCount: number;
  regrettedCount: number;
  goodCallCount: number;
  mixedCount: number;

  /** 0–1, recomputed on every new Reflection in this category.
   *  See docs/MEMORY_DESIGN.md for the exact formula and rationale. */
  confidenceScore: number;

  lastUpdatedAt: string;
}
