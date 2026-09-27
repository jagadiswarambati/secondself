/**
 * LLM provider factory — resolves AGENT_LLM_PROVIDER from env to a
 * concrete implementation. Kept separate from Hindsight's own LLM
 * configuration (which lives on the Hindsight server side, see
 * memory/hindsight/config.ts and .env.example) — these are two
 * independent LLM usages.
 */
import type { LlmProvider } from "./types";

export function getLlmProvider(): LlmProvider {
  const provider = process.env.AGENT_LLM_PROVIDER;
  switch (provider) {
    case "groq":
      // TODO: implement providers/groq.ts and return it here.
      throw new Error("Groq provider not implemented yet — scaffold placeholder.");
    default:
      throw new Error(
        `Unknown or unset AGENT_LLM_PROVIDER: "${provider}". See .env.example.`
      );
  }
}
