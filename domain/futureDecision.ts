/**
 * FutureDecision — a new, in-progress Decision draft as the user is
 * entering it, before it's finalized. This is the object the agent
 * pipeline evaluates against Hindsight in real time to decide whether
 * an Intervention is warranted.
 */

export interface FutureDecisionDraft {
  userId: string;
  situationSummary: string;
  optionsConsidered: string[];
  reasoningSoFar: string;
  emotionalStateNow: string | null;
}
