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
      "Discovery call prep, proposal writing, follow-up sequences, and objection handling. Built for sales professionals, not salespeople who happen to use AI.",
    category: "prompts",
    price: 0,
    format: "PDF + Markdown",
    tag: "Free",
    href: "/guides/prompt-library-starter",
    items: "6 prompts",
  },
  {
    slug: "marketing-prompt-pack",
    name: "Marketing Prompt Pack",
    description:
      "Campaign briefs, competitor analysis, email sequences, and content calendars. Prompts that understand marketing context, not just keywords.",
    category: "prompts",
    price: 0,
    format: "PDF + Markdown",
    tag: "Free",
    href: "/guides/prompt-library-starter",
    items: "6 prompts",
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

  // ── Bundles ──────────────────────────────────────────────
  {
    slug: "builder-starter-bundle",
    name: "Builder Starter Bundle",
    description:
      "Everything you need to start building with AI: the prompt library, CLAUDE.md template, workflow blueprints, and your first wiki guide. All in one download.",
    category: "bundles",
    price: 0,
    format: "Multiple",
    tag: "Free",
    href: "/guides/your-first-wiki",
    items: "30+ resources",
  },
];

// ── Helpers ────────────────────────────────────────────────

export const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "prompts", label: "Prompts" },
  { key: "templates", label: "Templates" },
  { key: "workflows", label: "Workflows" },
  { key: "playbooks", label: "Playbooks" },
  { key: "bundles", label: "Bundles" },
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
  bundles: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
};
