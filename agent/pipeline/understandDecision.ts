/**
 * Step 1 — Understand current decision.
 * Normalizes the raw form input into a FutureDecisionDraft the rest of
 * the pipeline can reason over.
 */
import type { FutureDecisionDraft } from "@/domain/futureDecision";

export async function understandDecision(
  rawInput: unknown
): Promise<FutureDecisionDraft> {
  // TODO: validate rawInput (zod schema) and normalize into
  // FutureDecisionDraft. No LLM call needed for this step necessarily —
  // may be pure parsing/validation.
  throw new Error("understandDecision() not implemented — scaffold placeholder.");
}
