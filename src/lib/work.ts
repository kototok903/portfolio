import type { TagName } from "@/lib/tags";

export type WorkData = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
  tags?: TagName[];
};

export const workData: WorkData[] = [
  {
    role: "Founding Engineer",
    company: "Paradigm AI",
    companyUrl: "https://www.linkedin.com/company/tryparadigm/",
    period: "June 2025 — July 2026",
    description:
      "As one of four engineers, led development of Paradigm Chat, a widely adopted AI agent that researches and edits spreadsheets, owning its Go backend and monetization.\nIndependently shipped full-stack billing, analytics, file ingestion, templates, and enterprise tooling in Go and React/TypeScript.",
    tags: [
      "typescript",
      "react",
      "vite",
      "go",
      "cockroachdb",
      "clickhouse",
      "temporal",
      "redis",
      "aws-s3",
    ],
  },
];
