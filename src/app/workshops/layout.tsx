import type { Metadata } from "next";
import { CourseSchema } from "@/app/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Live AI Workshops — Build Something Real in 2 Hours",
  description:
    "Small-group, hands-on workshops where you build AI knowledge bases and prompt libraries. Not a webinar. You leave with something you can use tomorrow. $199-$249.",
  alternates: { canonical: "https://www.mrprompts.ai/workshops" },
};

export default function WorkshopsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CourseSchema
        name="Build Your AI Knowledge Base in 2 Hours"
        description="Live workshop: arrive with a topic, leave with a working Obsidian vault, CLAUDE.md schema, and 5+ interlinked wiki articles."
        price="249.00"
        duration="PT2H"
        teaches={[
          "Obsidian vault setup",
          "CLAUDE.md schema creation",
          "Wiki article interlinking",
          "Knowledge base architecture",
        ]}
      />
      <CourseSchema
        name="The 4-Layer Prompt Framework Workshop"
        description="90-minute live workshop teaching the 4-Layer Prompt Framework with exercises. Build 10+ custom prompts for your role."
        price="199.00"
        duration="PT1H30M"
        teaches={[
          "4-Layer Prompt Framework",
          "Custom prompt creation",
          "Reusable prompt template systems",
          "Team prompt library building",
        ]}
      />
      {children}
    </>
  );
}
