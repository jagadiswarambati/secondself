/**
 * Reflection — the user's own verdict on a Decision + Outcome pair.
 * This is the single most important artifact in the system: it is what
 * turns a logged event into a piece of usable personal hindsight.
 */

import type { DecisionId } from "./decision";

export type ReflectionVerdict =
  | "regretted"
  | "good_call"
  | "mixed"
  | "too_early";

export interface Reflection {
  decisionId: DecisionId;
  recordedAt: string; // ISO timestamp
  verdict: ReflectionVerdict;

  /** Optional free-text elaboration — "what I'd do differently", etc.
   *  This text is what the agent quotes back during an intervention,
   *  so it should be retained close to verbatim. */
  notes?: string;
}
