export interface PatternCardViewModel {
  label: string;
  instanceCount: number;
  confidenceScore: number;
  dominantVerdict: "regretted" | "good_call" | "mixed" | null;
}
