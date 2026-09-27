/**
 * Retain operations — everything Second Self ever writes into Hindsight.
 *
 * Three distinct retain events (see docs/HINDSIGHT_INTEGRATION.md for
 * the full rationale of each):
 *   1. retainDecision   — when a Decision is first logged
 *   2. retainReflection — when a Reflection (+ Outcome) is submitted,
 *                         which should also update the Decision's
 *                         standing memory, not just append a new fact
 *   3. retainIntervention — logging that an Intervention was shown,
 *                           enabling the second-order "was this
 *                           actually useful" loop later
 *
 * Not implemented yet — interfaces + TODOs only.
 */

import type { Decision } from "@/domain/decision";
import type { Reflection } from "@/domain/reflection";
import type { Outcome } from "@/domain/outcome";
import type { Intervention } from "@/domain/intervention";
import type { HindsightConfig } from "./config";

export async function retainDecision(
  _decision: Decision,
  _config: HindsightConfig
): Promise<void> {
  // TODO: compose a natural-language retain() content string from the
  // Decision fields (situation, options, choice, reasoning, emotional
  // state) — Hindsight extracts structured facts from natural text,
  // so avoid retaining raw JSON. Confirm content-shaping conventions
  // against current Hindsight docs before implementing.
  throw new Error("retainDecision() not implemented — scaffold placeholder.");
}

export async function retainReflection(
  _reflection: Reflection,
  _outcome: Outcome,
  _config: HindsightConfig
): Promise<void> {
  // TODO: this retain call should make clear it is UPDATING the
  // standing memory of an existing decision, not just adding an
  // unrelated fact — confirm whether Hindsight supports linking new
  // retains to prior ones, or whether this app layer must do that
  // linking itself via the domain model (see domain/pattern.ts).
  throw new Error("retainReflection() not implemented — scaffold placeholder.");
}

export async function retainIntervention(
  _intervention: Intervention,
  _config: HindsightConfig
): Promise<void> {
  throw new Error("retainIntervention() not implemented — scaffold placeholder.");
}
