/**
 * Step 10 — Retain the new learning.
 * Final step of every cycle: writes the new Decision (and, later, its
 * Reflection) back into Hindsight via memory/hindsight/retain.ts, and
 * triggers Pattern recomputation. This step runs regardless of whether
 * an Intervention fired — every decision extends memory, not just the
 * ones that triggered a match.
 */
import type { Decision } from "@/domain/decision";
import type { Reflection } from "@/domain/reflection";
import type { Outcome } from "@/domain/outcome";

export async function retainNewDecision(_decision: Decision): Promise<void> {
  throw new Error("retainNewDecision() not implemented — scaffold placeholder.");
}

export async function retainNewReflection(
  _reflection: Reflection,
  _outcome: Outcome
): Promise<void> {
  throw new Error("retainNewReflection() not implemented — scaffold placeholder.");
}
