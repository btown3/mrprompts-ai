import type { Metadata } from "next";
import { ProjectFoundryBuilder } from "@/app/components/ProjectFoundryBuilder";

export const metadata: Metadata = {
  title: "Project Foundry",
  description:
    "A guided builder for creating a stronger AI project structure with contracts, handoffs, corrections, and review workflows.",
  alternates: {
    canonical: "https://www.mrprompts.ai/tools/project-foundry",
  },
  openGraph: {
    title: "Project Foundry | MrPrompts",
    description:
      "Build an AI project harness with a guided walkthrough and export-ready project docs.",
    url: "https://www.mrprompts.ai/tools/project-foundry",
  },
};

export default function ProjectFoundryPage() {
  return <ProjectFoundryBuilder />;
}
