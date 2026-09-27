/**
 * Decision — a significant, user-logged choice-point.
 * This is the atomic unit of Second Self's memory: not a chat message,
 * not a preference, but a moment where the user weighed options and chose.
 */

export type DecisionId = string;
export type UserId = string;
export type CategoryId = string;

export type EmotionalState =
  | "confident"
  | "anxious"
  | "rushed"
  | "pressured"
  | "neutral"
  | "excited"
  | "conflicted";

export type PressureType =
  | "social"
  | "time"
  | "financial"
  | "authority"
  | "none"
  | "other";

export interface Decision {
  id: DecisionId;
  userId: UserId;
  createdAt: string; // ISO timestamp

  /** Short, user-authored description of the situation. */
  situationSummary: string;

  /** The options the user says they were weighing. */
  optionsConsidered: string[];

  /** What the user actually chose. */
  choiceMade: string;

  /** Why, in the user's own words, at the time — this is the raw
   *  material Hindsight retains and later recall must preserve verbatim
   *  enough to feel like the user's own past voice, not a paraphrase. */
  reasoningAtTime: string;

  emotionalStateAtTime: EmotionalState;
  pressureType: PressureType;

  /** Assigned at creation (best-guess), may be revised by the agent
   *  once more similar decisions accumulate. See DomainModel doc. */
  categoryId: CategoryId | null;

  status: "pending_reflection" | "reflected";
}
