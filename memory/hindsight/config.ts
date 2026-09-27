/**
 * Hindsight configuration — reads environment, builds bank IDs.
 *
 * Second Self's memory-scoping decision: ONE bank per user
 * (`${HINDSIGHT_BANK_ID_PREFIX}-${userId}`), so recall() never crosses
 * between users. This is a deliberate product decision, not a Hindsight
 * requirement — Hindsight itself supports arbitrary bank strategies.
 */

import { HindsightConfigError } from "./errors";

export interface HindsightConfig {
  baseUrl: string;
  bankIdPrefix: string;
}

export function loadHindsightConfig(): HindsightConfig {
  const baseUrl = process.env.HINDSIGHT_BASE_URL;
  const bankIdPrefix = process.env.HINDSIGHT_BANK_ID_PREFIX ?? "second-self-user";

  if (!baseUrl) {
    throw new HindsightConfigError(
      "HINDSIGHT_BASE_URL is not set. Copy .env.example to .env.local and set it."
    );
  }

  return { baseUrl, bankIdPrefix };
}

export function bankIdForUser(userId: string, config: HindsightConfig): string {
  return `${config.bankIdPrefix}-${userId}`;
}
