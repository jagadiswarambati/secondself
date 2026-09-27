/**
 * Step 2 — Identify context.
 * Infers category/pressure-type/emotional-state tags for the draft,
 * used both for structural similarity (services/similarity) and for
 * shaping the Hindsight recall query.
 */
import type { FutureDecisionDraft } from "@/domain/futureDecision";
import type { DecisionContext } from "../types";

export async function identifyContext(
  _draft: FutureDecisionDraft
): Promise<DecisionContext> {
  // TODO: lightweight LLM classification call, or rule-based heuristics
  // as a first pass before adding LLM classification.
  throw new Error("identifyContext() not implemented — scaffold placeholder.");
}
