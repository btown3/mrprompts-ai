// ============================================================
// PRODUCT CATALOG
// ============================================================
// To add a new product:
// 1. Add an entry to the CATALOG array below
// 2. That's it. The products page and any filtering will pick it up.
//
// Fields:
//   slug        — URL-safe identifier (used in links)
//   name        — Display name
//   description — 1-2 sentence description
//   category    — One of: "prompts" | "templates" | "workflows" | "playbooks" | "bundles"
//   price       — Price in cents (0 = free). Displayed as dollars on the site.
//   format      — What the buyer downloads: "PDF" | "Markdown" | "Notion" | "Multiple"
//   tag         — Badge text: "Free" | "New" | "Popular" | "Coming Soon"
//   href        — Link to the product page or guide (can be internal or external)
//   items       — Optional: number of items included (e.g. "20+ prompts")
// ============================================================

export type Product = {
  slug: string;
  name: string;
  description: string;
  category: "prompts" | "templates" | "workflows" | "playbooks" | "bundles";
  price: number;
  format: string;
  tag: string;
  href: string;
  items?: string;
};

export const CATALOG: Product[] = [
  // ── Prompts ──────────────────────────────────────────────
  {
    slug: "prompt-library-starter-kit",
    name: "Prompt Library Starter Kit",
    description:
      "20+ ready-to-use prompt templates for marketing, sales, operations, finance, HR, and consulting. Copy, customize, use.",
    category: "prompts",
    price: 0,
    format: "Markdown",
    tag: "Free",
    href: "/guides/prompt-library-starter",
    items: "20+ prompts",
  },

  {
    slug: "sales-prompt-pack",
    name: "Sales Prompt Pack",
    description:
      "15 prompts for every stage of the sales cycle. Discovery, proposals, follow-ups, objections, outreach, pipeline, and strategy. Each prompt is detailed and role-specific.",
    category: "prompts",
    price: 0,
    format: "Markdown",
    tag: "Free",
    href: "/products/sales-prompt-pack",
    items: "15 prompts",
  },
  {
    slug: "marketing-prompt-pack",
    name: "Marketing Prompt Pack",
    description:
      "15 prompts for campaigns, content, email sequences, social media, landing pages, ads, PR, and analytics. Built for marketers who want AI output they'd actually use.",
    category: "prompts",
    price: 0,
    format: "Markdown",
    tag: "Free",
    href: "/products/marketing-prompt-pack",
    items: "15 prompts",
  },

  // ── Templates ────────────────────────────────────────────
  {
    slug: "claude-md-masterclass-template",
    name: "CLAUDE.md Masterclass + Template",
    description:
      "The complete guide to writing AI knowledge base schemas, plus a production-ready CLAUDE.md template you can drop into any project.",
    category: "templates",
    price: 0,
    format: "Markdown",
    tag: "Free",
    href: "/guides/claude-md-masterclass",
    items: "Guide + template",
  },

  {
    slug: "knowledge-base-starter-kit",
    name: "Knowledge Base Starter Kit",
    description:
      "Complete folder structure, CLAUDE.md schema, and 7 numbered prompts to build an AI knowledge base from scratch. Customized to your topic. Works with any AI tool.",
    category: "templates",
    price: 0,
    format: "Markdown",
    tag: "Free",
    href: "/build/knowledge-bases",
    items: "15 files + 7 prompts",
  },

  // ── Workflows ────────────────────────────────────────────
  {
    slug: "workflow-blueprints",
    name: "AI Workflow Blueprints",
    description:
      "5 pre-built AI workflow configurations: content research, meeting notes, lead enrichment, knowledge base updates, and client reports.",
    category: "workflows",
    price: 0,
    format: "PDF + Markdown",
    tag: "Free",
    href: "/guides/workflow-blueprints",
    items: "5 blueprints",
  },

  // ── Playbooks ────────────────────────────────────────────
  {
    slug: "ai-adoption-roadmap",
    name: "AI Adoption Roadmap",
    description:
      "A structured 90-day plan for rolling out AI to your organization. Assessment, foundation, pilot, scale. Ready to present to the board.",
    category: "playbooks",
    price: 0,
    format: "PDF + Markdown",
    tag: "Free",
    href: "/guides/ai-adoption-roadmap",
    items: "90-day plan",
  },
  {
    slug: "team-fluency-assessment",
    name: "Team AI Fluency Assessment",
    description:
      "A 5-dimension scoring rubric and 10-question team survey to measure AI readiness. Includes interpretation guide and recommended next steps.",
    category: "playbooks",
    price: 0,
    format: "PDF + Markdown",
    tag: "Free",
    href: "/guides/team-fluency-assessment",
    items: "Rubric + survey",
  },

  // ── Paid Guides ───────────────────────────────────────────
  {
    slug: "wiki-automation",
    name: "Wiki Automation with Claude Code",
    description:
      "Five levels of automation from manual prompting to fully autonomous wiki agents. Includes slash command configs, GitHub Action files, and a starter Agent Skill.",
    category: "workflows",
    price: 1900,
    format: "Online Guide",
    tag: "Paid",
    href: "/guides/wiki-automation",
    items: "5 levels",
  },
  {
    slug: "two-model-validation",
    name: "The Two-Model Validation Pattern",
    description:
      "How to use two different AI models to prevent compounding hallucinations in high-stakes knowledge bases. Implementation guide with code examples.",
    category: "templates",
    price: 1900,
    format: "Online Guide",
    tag: "Paid",
    href: "/guides/two-model-validation",
    items: "Full guide",
  },
];

// ── Helpers ────────────────────────────────────────────────

export const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "prompts", label: "Prompts" },
  { key: "templates", label: "Templates" },
  { key: "workflows", label: "Workflows" },
  { key: "playbooks", label: "Playbooks" },
] as const;

export function formatPrice(cents: number): string {
  if (cents === 0) return "Free";
  return `$${(cents / 100).toFixed(cents % 100 === 0 ? 0 : 2)}`;
}

export const CATEGORY_COLORS: Record<string, string> = {
  prompts: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  templates: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  workflows: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
  playbooks: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
};
