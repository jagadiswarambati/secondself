/**
 * HindsightEvidence — the shape of a single piece of recalled memory
 * as it enters the agent's reasoning step, AFTER being pulled back from
 * Hindsight and joined with this app's own Decision/Reflection records.
 *
 * This is distinct from the raw Hindsight recall() response (see
 * memory/hindsight/types.ts) — this is the app-domain view the agent
 * pipeline and UI actually consume.
 */

import type { DecisionId } from "./decision";
import type { ReflectionVerdict } from "./reflection";

export interface HindsightEvidence {
  decisionId: DecisionId;
  situationSummary: string;
  reasoningAtTime: string;
  outcomeSummary: string | null;
  verdict: ReflectionVerdict | null;

  /** Why the recall/similarity layer thinks this is relevant —
   *  surfaced in the UI's "Intervention Detail" view for transparency. */
  similarityDimensions: string[];
  similarityScore: number; // 0–1
}
