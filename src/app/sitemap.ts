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
