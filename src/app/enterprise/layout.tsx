import type { Metadata } from "next";
import { ServiceSchema } from "@/app/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Enterprise AI Training — Custom Workshops for Your Organization",
  description:
    "Custom AI training for teams of 5-500. Workshops, 90-day adoption roadmaps, executive briefings, and guided rollouts. Built for non-technical teams.",
  alternates: { canonical: "https://www.mrprompts.ai/enterprise" },
};

export default function EnterpriseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ServiceSchema />
      {children}
    </>
  );
}
