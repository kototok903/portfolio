import type { TagName } from "@/lib/tags";

export type WorkData = {
  role: string;
  company: string;
  period: string;
  description: string;
  tags?: TagName[];
};

// TODO: Write a description
export const workData: WorkData[] = [
  {
    role: "Software Engineer",
    company: "Paradigm AI",
    period: "June 2025 — July 2026",
    description:
      "Placeholder — building and shipping features across the stack. Replace with your real role, team, and a concrete win or two.",
    tags: ["typescript", "react", "node", "postgres"],
  },
];
