/**
 * Step 8 — Capture outcome.
 * Handles the (later, separate-session) submission of what actually
 * happened after a past Decision. Triggered by a reflection prompt,
 * not by the decision-entry flow.
 */
import type { Outcome } from "@/domain/outcome";

export async function captureOutcome(_rawInput: unknown): Promise<Outcome> {
  throw new Error("captureOutcome() not implemented — scaffold placeholder.");
}
