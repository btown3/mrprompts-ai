import Link from "next/link";

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        Free Tools
      </h1>
      <p className="mt-3 max-w-xl text-zinc-500">
        Build with AI right here. No account required, no email gate, no
        coding. Just tools that work.
      </p>

      <div className="mt-12">
        <Link
          href="/tools/wiki-builder"
          className="group flex flex-col rounded-xl border border-zinc-200 p-8 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800"
        >
          <span className="w-fit rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
            Available Now
          </span>
          <h2 className="mt-4 text-xl font-bold group-hover:text-emerald-600">
            Wiki Builder
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-500">
            Enter a topic and paste your source materials. Our AI reads your
            sources, generates a CLAUDE.md schema, and writes 3-5 interlinked
            wiki articles. Download the complete knowledge base and start using
            it with any AI tool.
          </p>
          <span className="mt-4 text-sm font-semibold text-emerald-600">
            Try it now &rarr;
          </span>
        </Link>
      </div>

      {/* Build tracks CTA */}
      <div className="mt-12 rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
        <h2 className="text-lg font-semibold">More ways to build</h2>
        <p className="mt-2 text-sm text-zinc-500">
          The Build Tracks give you downloadable starter kits, prompt libraries,
          workflow blueprints, and leadership playbooks. All free.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/build/knowledge-bases"
            className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800"
          >
            <p className="text-sm font-semibold">Knowledge Base Starter Kit</p>
            <p className="mt-1 text-xs text-zinc-500">
              Folder structure + 7 prompts. Works with any AI.
            </p>
          </Link>
          <Link
            href="/build/prompts"
            className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800"
          >
            <p className="text-sm font-semibold">Prompt Library Builder</p>
            <p className="mt-1 text-xs text-zinc-500">
              Pick your roles. Download customized prompts.
            </p>
          </Link>
          <Link
            href="/build/workflows"
            className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800"
          >
            <p className="text-sm font-semibold">Workflow Blueprints</p>
            <p className="mt-1 text-xs text-zinc-500">
              Pre-built AI automations with step-by-step setup.
            </p>
          </Link>
          <Link
            href="/build/leadership"
            className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800"
          >
            <p className="text-sm font-semibold">Leadership Kit</p>
            <p className="mt-1 text-xs text-zinc-500">
              AI adoption roadmaps + team assessments.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
