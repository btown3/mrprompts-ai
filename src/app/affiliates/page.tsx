import { PageFooterCTA } from "@/app/components/PageFooterCTA";

const CATEGORIES = [
  {
    title: "AI Assistants",
    description: "The AI models we use every day to build, write, and think.",
    tools: [
      {
        name: "Claude",
        by: "Anthropic",
        why: "Best for long-form writing, analysis, and building knowledge bases. Powers the MrPrompts wiki builder. Our primary recommendation for builders.",
        href: "https://claude.ai",
      },
      {
        name: "ChatGPT",
        by: "OpenAI",
        why: "Best ecosystem of plugins and integrations. Strong for brainstorming and quick tasks. The one most people start with.",
        href: "https://chat.openai.com",
      },
      {
        name: "Perplexity",
        by: "Perplexity AI",
        why: "Best for research. Cites sources, searches the web, and synthesizes answers. We use it to validate claims before they go into a wiki.",
        href: "https://perplexity.ai",
      },
    ],
  },
  {
    title: "Knowledge Management",
    description: "Where your AI-built knowledge lives and compounds.",
    tools: [
      {
        name: "Notion",
        by: "Notion Labs",
        why: "The most accessible tool for AI knowledge bases. Real-time collaboration, clean interface, and easy to start with. Our recommendation for most people.",
        href: "https://notion.so",
      },
      {
        name: "Obsidian",
        by: "Obsidian",
        why: "For power users who want local-first, markdown-based control. Bidirectional linking and a plugin ecosystem make it ideal for advanced wiki-style knowledge bases.",
        href: "https://obsidian.md",
      },
    ],
  },
  {
    title: "Automation",
    description: "Tools for building AI workflows that run without you.",
    tools: [
      {
        name: "Zapier",
        by: "Zapier",
        why: "Most accessible automation tool. No code required. Connect AI tools to your existing apps in minutes.",
        href: "https://zapier.com",
      },
      {
        name: "Make",
        by: "Make (formerly Integromat)",
        why: "More powerful than Zapier for complex multi-step workflows. Visual builder that handles branching logic well.",
        href: "https://make.com",
      },
    ],
  },
  {
    title: "Content Creation",
    description: "AI tools for building content, visuals, and media.",
    tools: [
      {
        name: "Midjourney",
        by: "Midjourney",
        why: "Best image generation for professional use. Consistent quality, strong aesthetic sense. We use it for all MrPrompts visuals.",
        href: "https://midjourney.com",
      },
      {
        name: "ElevenLabs",
        by: "ElevenLabs",
        why: "Best text-to-speech. Natural voices, multiple languages. Useful for turning written guides into audio content.",
        href: "https://elevenlabs.io",
      },
    ],
  },
  {
    title: "For Teams",
    description: "Enterprise-grade AI tools for organizations.",
    tools: [
      {
        name: "Claude for Teams",
        by: "Anthropic",
        why: "Team-wide AI with admin controls, shared conversations, and data privacy guarantees. Our recommendation for organizations starting with AI.",
        href: "https://claude.ai/teams",
      },
      {
        name: "ChatGPT Enterprise",
        by: "OpenAI",
        why: "Enterprise security, admin console, and unlimited GPT-4 access. Good for organizations already in the Microsoft ecosystem.",
        href: "https://openai.com/enterprise",
      },
    ],
  },
];

export default function AffiliatesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        Tools We Build With
      </h1>
      <p className="mt-3 max-w-xl text-zinc-500">
        These are the actual tools we use to build AI knowledge bases, prompt
        systems, and workflows. Not a listicle. An opinionated toolkit from
        someone who's tried them all.
      </p>
      <p className="mt-2 text-xs text-zinc-400">
        Some links below are affiliate links. We only recommend tools we
        actually use. Always.
      </p>

      <div className="mt-12 space-y-12">
        {CATEGORIES.map((cat) => (
          <section key={cat.title}>
            <h2 className="text-xl font-bold">{cat.title}</h2>
            <p className="mt-1 text-sm text-zinc-500">{cat.description}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {cat.tools.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-xl border border-zinc-200 p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold group-hover:text-emerald-600">
                      {tool.name}
                    </h3>
                    <span className="text-xs text-zinc-400">{tool.by}</span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500">
                    {tool.why}
                  </p>
                  <span className="mt-4 text-xs font-medium text-emerald-600">
                    Visit site &rarr;
                  </span>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Referral CTA */}
      <div className="mt-20 rounded-xl border border-zinc-200 p-8 text-center dark:border-zinc-800">
        <h2 className="text-xl font-bold">Want to refer others to MrPrompts?</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-500">
          We are building a referral program for people who share MrPrompts with
          their network. Refer a builder, earn a free month.
        </p>
        <p className="mt-4 text-sm font-medium text-emerald-600">
          Coming soon. Subscribe to the newsletter to get notified.
        </p>
      </div>

      <PageFooterCTA />
    </div>
  );
}
