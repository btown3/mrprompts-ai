import Link from "next/link";

const MODULES = [
  {
    number: "01",
    title: "Your first AI workflow",
    description:
      "Connect an AI tool to a trigger and an output. By the end of this module you will have a working automation that does useful work without you touching it.",
    free: true,
  },
  {
    number: "02",
    title: "Build with AI agents",
    description:
      "What agents actually are, how they differ from chatbots, and how to set one up to handle real tasks. From OpenClaw to Claude Skills to custom setups.",
    free: false,
  },
  {
    number: "03",
    title: "Build automated systems with Claude Skills",
    description:
      "Claude Code skills that monitor, generate, and maintain systems on your behalf. The closest thing to a personal AI employee that exists today.",
    free: false,
  },
  {
    number: "04",
    title: "Build multi-tool AI pipelines",
    description:
      "Chain multiple AI tools together. Research with Perplexity, write with Claude, validate with GPT, publish with Zapier. Build pipelines that handle complex multi-step work.",
    free: false,
  },
];

export default function WorkflowsTrackPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/build"
        className="text-sm text-emerald-600 hover:text-emerald-700"
      >
        &larr; All tracks
      </Link>

      <div className="mt-6">
        <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
          Intermediate
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          Build AI Workflows
        </h1>
        <p className="mt-3 text-lg text-zinc-500">
          Build automations that run without you. By the end, you will have
          working AI agents, scheduled tasks, and multi-tool pipelines that
          handle real work while you focus on what matters.
        </p>
      </div>

      <div className="mt-10 rounded-xl border border-zinc-300 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-900">
        <h2 className="font-semibold">What you will have when you are done</h2>
        <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
          <li>A working AI automation that runs on a schedule</li>
          <li>An AI agent handling a real task in your workflow</li>
          <li>Claude Skills configured for your specific needs</li>
          <li>A multi-tool pipeline chaining 3+ AI services together</li>
        </ul>
      </div>

      <div className="mt-12 space-y-6">
        {MODULES.map((mod) => (
          <div
            key={mod.number}
            className="flex gap-4 rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-sm font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
              {mod.number}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{mod.title}</h3>
                {mod.free && (
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                    Free
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                {mod.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl bg-zinc-900 p-8 text-center dark:bg-zinc-800">
        <h2 className="text-xl font-bold text-white">Start with Module 1 for free.</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
          Unlock all modules across every track for $19/month.
        </p>
        <Link
          href="/pricing"
          className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-8 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          See Pricing
        </Link>
      </div>
    </div>
  );
}
