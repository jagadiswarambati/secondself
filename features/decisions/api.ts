// Placeholder API layer for the decisions feature — will call into
// app route handlers once the Next.js API routes are implemented.
// Kept as an explicit boundary so components never import agent/ or
// memory/ code directly.

import type { NewDecisionFormValues } from "./types";

export async function submitNewDecision(_values: NewDecisionFormValues): Promise<void> {
  throw new Error("submitNewDecision() not implemented — scaffold placeholder.");
}
