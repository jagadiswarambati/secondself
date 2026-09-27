/**
 * Step 3 — Recall relevant Hindsight.
 * Thin orchestration wrapper around memory/hindsight/recall.ts —
 * kept separate so the pipeline step can be unit-tested against a
 * mocked recall function without touching the real Hindsight client.
 */
import type { FutureDecisionDraft } from "@/domain/futureDecision";
import type { HindsightEvidence } from "@/domain/hindsightEvidence";

export async function recallHindsight(
  _draft: FutureDecisionDraft
): Promise<HindsightEvidence[]> {
  // TODO: call memory/hindsight/recall.ts#recallSimilarDecisions with
  // config sourced from memory/hindsight/config.ts.
  throw new Error("recallHindsight() not implemented — scaffold placeholder.");
}
