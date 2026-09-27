// Feature-level view/DTO types for the decisions feature — distinct
// from domain/decision.ts, which is the persistence-agnostic core
// model. These types are what the UI layer actually binds to and may
// diverge from the domain model as UI needs evolve.

export interface NewDecisionFormValues {
  situationSummary: string;
  optionsConsidered: string[];
  choiceMade: string;
  reasoningAtTime: string;
  emotionalStateAtTime: string;
}
