/**
 * Step 7 — Surface relevant personal hindsight.
 * The LLM reasoning layer drafts the actual Intervention message shown
 * to the user. Framing rules (non-directive, reflection not
 * instruction) are enforced via the prompt template here — this is the
 * single most product-sensitive piece of copy in the system.
 */
import type { HindsightEvidence } from "@/domain/hindsightEvidence";
import type { Intervention, InterventionTone } from "@/domain/intervention";

export async function surfaceHindsight(
  _evidence: HindsightEvidence[],
  _tone: InterventionTone
): Promise<Intervention> {
  // TODO: call services/llm provider with a prompt template that:
  //  - never uses imperative/prescriptive language ("don't do this")
  //  - always frames as "here's what happened last time"
  //  - quotes the user's own past reasoning/reflection text closely
  throw new Error("surfaceHindsight() not implemented — scaffold placeholder.");
}
