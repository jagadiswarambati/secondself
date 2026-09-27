export interface LlmMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface LlmCompletionRequest {
  messages: LlmMessage[];
  temperature?: number;
  maxTokens?: number;
}

export interface LlmCompletionResponse {
  text: string;
  raw?: unknown;
}

/** Provider-agnostic interface — Second Self's agent reasoning code
 *  should depend on this, never on a specific vendor SDK directly. */
export interface LlmProvider {
  complete(request: LlmCompletionRequest): Promise<LlmCompletionResponse>;
}
