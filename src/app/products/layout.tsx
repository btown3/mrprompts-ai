import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products — Prompt Packs, Templates, Workflows, and Playbooks",
  description:
    "Downloadable AI products for non-technical professionals. Prompt packs by role, CLAUDE.md templates, workflow blueprints, and leadership playbooks. PDF and Markdown formats.",
  alternates: { canonical: "https://www.mrprompts.ai/products" },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
