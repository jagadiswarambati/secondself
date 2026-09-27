/**
 * Step 9 — Capture reflection.
 * The user's verdict (regretted / good_call / mixed / too_early) plus
 * optional notes — this is what actually updates Pattern confidence.
 */
import type { Reflection } from "@/domain/reflection";

export async function captureReflection(_rawInput: unknown): Promise<Reflection> {
  throw new Error("captureReflection() not implemented — scaffold placeholder.");
}
