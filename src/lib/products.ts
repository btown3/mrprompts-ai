export const PRODUCTS = {
  "wiki-automation": {
    name: "Wiki Automation with Claude Code",
    price: 1900,
    description: "Slash commands, scheduled tasks, and GitHub Actions for self-building wikis.",
    slug: "wiki-automation",
  },
  "two-model-validation": {
    name: "The Two-Model Validation Pattern",
    price: 1900,
    description: "How to use two different AI models to prevent compounding hallucinations.",
    slug: "two-model-validation",
  },
} as const;

export type ProductSlug = keyof typeof PRODUCTS;
