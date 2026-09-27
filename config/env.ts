/**
 * Centralized env access — everything else in the app should import
 * from here rather than reading process.env directly, so required
 * variables are validated in one place.
 */

export interface AppEnv {
  hindsightBaseUrl: string;
  hindsightBankIdPrefix: string;
  agentLlmProvider: string;
}

export function loadAppEnv(): AppEnv {
  const hindsightBaseUrl = process.env.HINDSIGHT_BASE_URL;
  if (!hindsightBaseUrl) {
    throw new Error("HINDSIGHT_BASE_URL is required — see .env.example.");
  }
  return {
    hindsightBaseUrl,
    hindsightBankIdPrefix: process.env.HINDSIGHT_BANK_ID_PREFIX ?? "second-self-user",
    agentLlmProvider: process.env.AGENT_LLM_PROVIDER ?? "groq",
  };
}
