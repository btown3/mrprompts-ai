import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mrprompts.ai";
  const now = new Date().toISOString();

  return [
    // Core pages
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/products`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },

    // Build tracks
    { url: `${baseUrl}/build`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/build/knowledge-bases`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/build/prompts`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/build/workflows`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/build/leadership`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Guides
    { url: `${baseUrl}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/guides/your-first-wiki`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/guides/claude-md-masterclass`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/guides/prompt-library-starter`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/guides/workflow-blueprints`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/guides/ai-adoption-roadmap`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/guides/team-fluency-assessment`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/guides/wiki-automation`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guides/two-model-validation`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // SEO content pages
    { url: `${baseUrl}/learn/ai-for-non-technical`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/learn/ai-prompts-for-sales`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/learn/ai-prompts-for-marketing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/learn/ai-prompts-for-hr`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/learn/what-is-claude-md`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/learn/ai-knowledge-base-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/learn/ai-change-management`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/learn/best-ai-tools-for-business`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/learn/ai-workflow-examples`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/learn/ai-team-assessment`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/learn/sales-knowledge-base`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/learn/research-knowledge-base`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/learn/onboarding-knowledge-base`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/learn/executive-knowledge-base`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/learn/llm-instruction-set`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // Glossary
    { url: `${baseUrl}/glossary`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/glossary/prompt-engineering`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/glossary/ai-knowledge-base`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/glossary/claude-md`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/glossary/chain-of-thought`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/glossary/ai-agents`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/glossary/rag`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/glossary/system-prompt`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/glossary/fine-tuning`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/glossary/hallucination`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/glossary/context-window`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/glossary/token`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/glossary/prompt-library`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/glossary/ai-workflow`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/glossary/ai-fluency`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/glossary/change-management-ai`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Legal
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },

    // Tools
    { url: `${baseUrl}/tools`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/tools/wiki-builder`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Commercial
    { url: `${baseUrl}/workshops`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/enterprise`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/vaults`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/affiliates`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
}
