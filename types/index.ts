/**
 * Cross-cutting app types that don't belong in domain/ (pure business
 * concepts) or a specific feature/service folder. Keep this file small —
 * most types should live closer to where they're used.
 */

export type ISODateString = string;

export interface ApiError {
  message: string;
  code: string;
}
