/**
 * Recall operations — every place Second Self reads from Hindsight.
 *
 * The primary path is `recallSimilarDecisions`, called by
 * agent/pipeline/recallHindsight.ts whenever a new decision draft is
 * being entered. This is a PUSH from the agent's perspective (triggered
 * automatically on decision entry) even though it is technically a pull
 * from Hindsight's perspective — see docs/AGENT_WORKFLOW.md.
 *
 * Not implemented yet — interfaces + TODOs only.
 */

import type { FutureDecisionDraft } from "@/domain/futureDecision";
import type { HindsightEvidence } from "@/domain/hindsightEvidence";
import type { HindsightConfig } from "./config";

export async function recallSimilarDecisions(
  _draft: FutureDecisionDraft,
  _config: HindsightConfig
): Promise<HindsightEvidence[]> {
  // TODO: build the recall() query from the draft's situation +
  // reasoning-so-far, call client.recall(bankId, query, ...), then
  // join raw matches back against this app's own Decision/Reflection
  // records (by decision id / metadata) to produce HindsightEvidence —
  // confirm what identifying metadata recall() actually returns before
  // implementing this join.
  throw new Error("recallSimilarDecisions() not implemented — scaffold placeholder.");
}

export async function recallPatternSummary(
  _categoryId: string,
  _config: HindsightConfig
): Promise<unknown> {
  // TODO: decide whether the Pattern Dashboard reads purely from this
  // app's own computed Pattern records (domain/pattern.ts) or also
  // calls Hindsight's reflect() for a narrative summary — see the note
  // in memory/hindsight/types.ts about reflect() being deliberately
  // unused in the primary path.
  throw new Error("recallPatternSummary() not implemented — scaffold placeholder.");
}
