import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — AI Workflows from the Field",
  description:
    "Articles on prompt engineering, AI agents, workflows, and leadership. Battle-tested AI strategies from the field, not the feed.",
  alternates: { canonical: "https://www.mrprompts.ai/blog" },
};

const POSTS = [
  {
    title: "Claude Skills Explained: How to Build and Use Them",
    description:
      "Learn what Claude Skills are, how they work, and how to build your first one using a simple system you can reuse.",
    date: "Apr 5, 2026",
    category: "Tools",
    href: "https://mrprompts.substack.com/p/claude-skills-explained-how-to-build",
  },
  {
    title: "The AI Agency Shift",
    description:
      "How the past year broke open the AI Fluency Framework's third modality, and what it means for your organization.",
    date: "Mar 27, 2026",
    category: "Leadership",
    href: "https://mrprompts.substack.com/p/the-ai-agency-shift",
  },
  {
    title: "Diving into Karpathy's Autoresearch",
    description:
      "How AI agents can autonomously run hundreds of optimization experiments overnight. With a little history on the legend himself.",
    date: "Mar 16, 2026",
    category: "Research",
    href: "https://mrprompts.substack.com/p/diving-into-karpathys-autoresearch",
  },
  {
    title: "The 4-Layer Prompt Framework Nobody Talks About",
    description:
      "How four rhetorical concepts from a 2,000-year-old discipline will transform every prompt you write.",
    date: "Mar 12, 2026",
    category: "Prompting",
    href: "https://mrprompts.substack.com/p/the-4-layer-prompt-framework-nobody",
  },
  {
    title: "How to Set Up OpenClaw: Your 24/7 AI Agent, Step by Step",
    description:
      "You've seen it everywhere. Here's how to actually get it running in under 30 minutes, on hardware you already own.",
    date: "Feb 18, 2026",
    category: "Agents",
    href: "https://mrprompts.substack.com/p/how-to-set-up-openclaw-your-247-ai",
  },
  {
    title: "Foundations of Strategic Prompting",
    description:
      "From inputs to influence. Strategic prompting techniques that maximize your outputs.",
    date: "Apr 15, 2025",
    category: "Prompting",
    href: "https://mrprompts.substack.com/p/foundations-of-strategic-prompting",
  },
  {
    title: "Building Creative Story Outlines",
    description:
      "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.",
    date: "Mar 13, 2025",
    category: "Prompting",
    href: "https://mrprompts.substack.com/p/building-creative-story-outlines",
  },
  {
    title: "The Power of the Persona Pattern in Prompt Engineering",
    description:
      "Discover how to get tailored, expert-level responses from AI with this versatile technique.",
    date: "Mar 7, 2025",
    category: "Prompting",
    href: "https://mrprompts.substack.com/p/the-power-of-the-persona-pattern",
  },
  {
    title: "Sora: An Overview",
    description:
      "OpenAI's revolutionary video generation model. What it does, how it works, and what it means.",
    date: "Feb 27, 2025",
    category: "Research",
    href: "https://mrprompts.substack.com/p/sora-an-overview",
  },
  {
    title: "Agentic AI: Adaptive Planning is the Secret Sauce",
    description:
      "Leveraging rich context and dynamic feedback for smarter, more adaptable AI planning.",
    date: "Feb 21, 2025",
    category: "Agents",
    href: "https://mrprompts.substack.com/p/agentic-ai-adaptive-planning",
  },
  {
    title: "Agentic AI: Bridging Human Insight and Machine Execution",
    description:
      "Integrating visual inputs with interactive troubleshooting for more capable AI agents.",
    date: "Feb 21, 2025",
    category: "Agents",
    href: "https://mrprompts.substack.com/p/agentic-ai-bridging-human-insight",
  },
  {
    title: "Agentic AI: Flipped Model in Generative AI",
    description:
      "The flipped interaction model for generative AI pivots from simply receiving commands to proactive collaboration.",
    date: "Feb 20, 2025",
    category: "Agents",
    href: "https://mrprompts.substack.com/p/agentic-ai-flipped-model",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Prompting: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  Agents: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
  Tools: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  Leadership: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  Research: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Blog</h1>
      <p className="mt-3 max-w-xl text-zinc-500">
        Battle-tested AI workflows from the field, not the feed. All posts
        published on Substack.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {POSTS.map((post) => (
          <a
            key={post.title}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-xl border border-zinc-200 p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800"
          >
            <div className="flex items-center gap-3">
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  CATEGORY_COLORS[post.category] || CATEGORY_COLORS.Research
                }`}
              >
                {post.category}
              </span>
              <span className="text-xs text-zinc-400">{post.date}</span>
            </div>
            <h2 className="mt-4 text-lg font-semibold group-hover:text-emerald-600">
              {post.title}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">
              {post.description}
            </p>
            <span className="mt-4 text-xs font-medium text-emerald-600">
              Read on Substack &rarr;
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
