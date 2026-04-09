import Link from "next/link";

const BUILD_TRACKS = [
  {
    title: "Build a Knowledge Base",
    description:
      "Go from zero to a structured AI knowledge base that compounds over time. Obsidian, CLAUDE.md, and the wiki system that started it all.",
    href: "/build/knowledge-bases",
    tag: "Most Popular",
    tagColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  {
    title: "Build Prompt Frameworks",
    description:
      "Build a personal prompt library organized by role and use case. Reusable systems that get better every time you use them.",
    href: "/build/prompts",
    tag: "Start Here",
    tagColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    title: "Build AI Workflows",
    description:
      "Build automations that run without you. AI agents, scheduled tasks, and multi-tool pipelines for real work.",
    href: "/build/workflows",
    tag: "Intermediate",
    tagColor: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
  },
  {
    title: "Build AI-Ready Teams",
    description:
      "Build an AI adoption roadmap, change management playbook, and governance framework your org actually follows.",
    href: "/build/leadership",
    tag: "For Leaders",
    tagColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
  },
];

const BLOG_POSTS = [
  {
    title: "Claude Skills Explained: How to Build and Use Them",
    description: "What Claude Skills are, how they work, and how to build your first one.",
    date: "Apr 5, 2026",
    href: "https://mrprompts.substack.com/p/claude-skills-explained-how-to-build",
  },
  {
    title: "The 4-Layer Prompt Framework Nobody Talks About",
    description: "Four rhetorical concepts from a 2,000-year-old discipline that transform every prompt you write.",
    date: "Mar 12, 2026",
    href: "https://mrprompts.substack.com/p/the-4-layer-prompt-framework-nobody",
  },
  {
    title: "Diving into Karpathy's Autoresearch",
    description: "How AI agents can run hundreds of optimization experiments overnight while you sleep.",
    date: "Mar 16, 2026",
    href: "https://mrprompts.substack.com/p/diving-into-karpathys-autoresearch",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 md:pt-32">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-emerald-600">
              For Builders Who Don't Code
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Build with AI.{" "}
              <span className="text-zinc-400">No dev background required.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Frameworks, tools, and step-by-step guides for smart professionals
              who want to build with AI, not just read about it. 4,000+ builders
              and counting.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/build"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Start Building
              </Link>
              <Link
                href="/tools/wiki-builder"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-300 px-6 text-sm font-semibold transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
              >
                Try the Wiki Builder (Free)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Build */}
      <section className="border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            What will you build?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-zinc-500">
            Four tracks. Each one starts with what you are going to make, not
            what you are going to read.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {BUILD_TRACKS.map((track) => (
              <Link
                key={track.title}
                href={track.href}
                className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-800"
              >
                <span
                  className={`w-fit rounded-full px-2.5 py-0.5 text-xs font-medium ${track.tagColor}`}
                >
                  {track.tag}
                </span>
                <h3 className="mt-4 text-lg font-semibold group-hover:text-emerald-600">
                  {track.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {track.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          How MrPrompts works
        </h2>
        <p className="mt-2 text-zinc-500">
          Everything is designed around building, not watching.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              step: "01",
              label: "Pick what to build",
              desc: "Choose a track: knowledge bases, prompt systems, workflows, or leadership playbooks. Each one has a clear outcome.",
            },
            {
              step: "02",
              label: "Follow the build guide",
              desc: "Step-by-step instructions written for smart people who don't code. You will have something working by the end of each module.",
            },
            {
              step: "03",
              label: "Use the tools",
              desc: "Our free tools (wiki builder, prompt library, workflow templates) let you build right on the site. Download and use what you make.",
            },
          ].map((item) => (
            <div key={item.step}>
              <span className="text-3xl font-bold text-emerald-600">
                {item.step}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{item.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest from the blog */}
      <section className="border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                From the blog
              </h2>
              <p className="mt-2 text-zinc-500">
                Battle-tested AI workflows from the field, not the feed.
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden text-sm font-semibold text-emerald-600 hover:text-emerald-700 md:block"
            >
              All posts &rarr;
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <a
                key={post.title}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-800"
              >
                <span className="text-xs text-zinc-400">{post.date}</span>
                <h3 className="mt-3 text-lg font-semibold group-hover:text-emerald-600">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {post.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl bg-zinc-900 px-8 py-14 text-center dark:bg-zinc-800">
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            Join 4,000+ builders getting smarter about AI every week.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-zinc-400">
            Free newsletter. New build guides, prompt frameworks, and tools you
            can actually use. No fluff.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <iframe
              src="https://mrprompts.substack.com/embed"
              width="100%"
              height="150"
              className="rounded-lg"
              style={{ border: "none", background: "transparent" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
