/**
 * Lesson — an explicit, distilled takeaway the agent (or user) has
 * articulated from one or more reflected Decisions in the same category.
 *
 * Lessons are NOT the same as Reflections: a Reflection is about one
 * decision. A Lesson is a generalization the agent proposes once a
 * Pattern (see pattern.ts) has enough consistent evidence behind it.
 * Lessons are shown to the user for confirmation, never asserted as fact
 * silently — this keeps the agent in a "support, don't dictate" role.
 */

import type { CategoryId } from "./decision";

export interface Lesson {
  id: string;
  categoryId: CategoryId;
  statement: string; // e.g. "I tend to agree to extra work under time pressure, and regret it."
  derivedFromDecisionIds: string[];
  confirmedByUser: boolean;
  createdAt: string;
}
