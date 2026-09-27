/**
 * Hindsight client initialization.
 *
 * TODO (before real implementation): pin the exact installed version of
 * @vectorize-io/hindsight-client and confirm the HindsightClient
 * constructor signature and method names against that version's docs —
 * do not assume the quick-start examples are exhaustive.
 *
 * Intentionally NOT implemented yet — this file defines the shape of
 * the singleton/factory so the rest of the app can depend on an
 * interface rather than the concrete SDK import while implementation
 * is pending.
 */

import type { HindsightConfig } from "./config";

export interface HindsightClientLike {
  retain(bankId: string, content: string, options?: unknown): Promise<unknown>;
  recall(bankId: string, query: string, options?: unknown): Promise<unknown>;
  reflect(bankId: string, query: string): Promise<unknown>;
}

let clientInstance: HindsightClientLike | null = null;

/**
 * TODO: replace with real `new HindsightClient({ baseUrl })` from
 * "@vectorize-io/hindsight-client" once implementation begins.
 */
export function getHindsightClient(_config: HindsightConfig): HindsightClientLike {
  if (!clientInstance) {
    throw new Error(
      "getHindsightClient() is not implemented yet — this is a scaffold placeholder. " +
        "See memory/hindsight/client.ts TODO."
    );
  }
  return clientInstance;
}
