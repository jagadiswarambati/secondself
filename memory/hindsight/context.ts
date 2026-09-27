/**
 * Memory context construction — turns raw HindsightEvidence into the
 * shape the LLM reasoning layer needs to draft an Intervention.
 *
 * This is deliberately a separate step from recall.ts: recall answers
 * "what's relevant", context.ts answers "how should this be framed for
 * the model that will write the actual message the user sees."
 */

import type { HindsightEvidence } from "@/domain/hindsightEvidence";

export interface MemoryContext {
  evidence: HindsightEvidence[];
  /** Plain-language framing hints derived from confidence/consistency,
   *  e.g. "3 of 3 past instances were regretted" — computed here so the
   *  LLM prompt in agent/pipeline/surfaceHindsight.ts doesn't need to
   *  re-derive statistics itself. */
  summaryHint: string | null;
}

export function buildMemoryContext(evidence: HindsightEvidence[]): MemoryContext {
  // TODO: implement the confidence/consistency summarization once
  // services/confidence/patternConfidence.ts is implemented.
  return { evidence, summaryHint: null };
}
