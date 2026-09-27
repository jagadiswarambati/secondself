/**
 * Types specific to the Hindsight SDK boundary.
 *
 * These mirror concepts from the official Hindsight API/SDK
 * (@vectorize-io/hindsight-client): banks, retain, recall, reflect.
 * Reference: https://github.com/vectorize-io/hindsight
 *
 * Second Self scopes ONE Hindsight memory bank per user
 * (see config.ts — bankIdForUser) so that one person's decision
 * history never leaks into another's recall results.
 */

export type HindsightBankId = string;

/** What we pass into client.retain(bankId, content, options?).
 *  `content` is natural-language text describing the memory —
 *  Hindsight extracts structured facts/entities from it internally,
 *  so this should read as a clear, complete statement, not a JSON blob. */
export interface RetainInput {
  bankId: HindsightBankId;
  content: string;
  /** Optional tags to aid later filtering — TODO: confirm exact
   *  retain() options shape against current SDK version before wiring up. */
  tags?: string[];
  metadata?: Record<string, string>;
}

export interface RetainResult {
  /** TODO: confirm exact shape returned by client.retain() in the
   *  installed SDK version — placeholder until implementation. */
  success: boolean;
  raw?: unknown;
}

/** What we pass into client.recall(bankId, query, options?). */
export interface RecallInput {
  bankId: HindsightBankId;
  query: string;
  /** TODO: confirm supported recall() options (e.g. result limits,
   *  fact type filters) against current SDK/API docs before wiring up. */
  maxResults?: number;
}

/** A single memory returned by recall() — TODO: confirm exact field
 *  names against the current SDK response shape; this is our best-guess
 *  placeholder based on the public quick-start examples. */
export interface RecallMatch {
  content: string;
  score?: number;
  raw?: unknown;
}

export interface RecallResult {
  matches: RecallMatch[];
  raw?: unknown;
}

/** client.reflect(bankId, query) — used sparingly, if at all, for
 *  Second Self: reflect() synthesizes a disposition-aware narrative
 *  answer, which may be useful for the Pattern Dashboard's plain-language
 *  summaries but is NOT the primary recall path for interventions
 *  (interventions need discrete, attributable past decisions, not a
 *  blended narrative). Kept here as a documented, deliberately-unused
 *  option rather than omitted. */
export interface ReflectInput {
  bankId: HindsightBankId;
  query: string;
}

export interface ReflectResult {
  text: string;
  raw?: unknown;
}
