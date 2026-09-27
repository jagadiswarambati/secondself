/**
 * Groq provider adapter — implements LlmProvider.
 * TODO: implement once provider/model choice is finalized. Keep the
 * actual Groq SDK import isolated to this file so swapping providers
 * later never touches agent/ or domain/ code.
 */
import type { LlmProvider, LlmCompletionRequest, LlmCompletionResponse } from "../types";

export class GroqProvider implements LlmProvider {
  async complete(_request: LlmCompletionRequest): Promise<LlmCompletionResponse> {
    throw new Error("GroqProvider.complete() not implemented — scaffold placeholder.");
  }
}
