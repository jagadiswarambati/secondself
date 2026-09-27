/**
 * Outcome — what actually happened after a Decision, captured later,
 * once enough time has passed for a result to be knowable.
 *
 * A Decision without an Outcome is inert: it cannot inform a future
 * intervention, because Second Self has no basis to say whether the
 * choice made was, in hindsight, a good one.
 */

import type { DecisionId } from "./decision";

export interface Outcome {
  decisionId: DecisionId;
  recordedAt: string; // ISO timestamp

  /** Free-text description of what actually happened. */
  outcomeSummary: string;
}
