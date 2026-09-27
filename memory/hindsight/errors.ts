/**
 * Error types for the Hindsight boundary layer.
 *
 * Rationale: every failure mode here should be distinguishable so the
 * agent pipeline can decide whether to fail loudly (e.g. misconfiguration)
 * or degrade gracefully (e.g. recall timeout -> proceed without
 * intervention rather than blocking the user's decision entry).
 */

export class HindsightConfigError extends Error {
  constructor(message: string) {
    super(`[Hindsight config] ${message}`);
    this.name = "HindsightConfigError";
  }
}

export class HindsightConnectionError extends Error {
  constructor(message: string, public readonly cause?: unknown) {
    super(`[Hindsight connection] ${message}`);
    this.name = "HindsightConnectionError";
  }
}

export class HindsightRetainError extends Error {
  constructor(message: string, public readonly cause?: unknown) {
    super(`[Hindsight retain] ${message}`);
    this.name = "HindsightRetainError";
  }
}

export class HindsightRecallError extends Error {
  constructor(message: string, public readonly cause?: unknown) {
    super(`[Hindsight recall] ${message}`);
    this.name = "HindsightRecallError";
  }
}
