import Link from "next/link";

const MODULES = [
  {
    number: "01",
    title: "Foundations of strategic prompting",
    description:
      "Intent clarity, prompt scaffolding, and output framing. The three foundations that separate useful AI output from noise. Adapted from our most-read Substack post.",
    free: true,
  },
  {
    number: "02",
    title: "The 4-Layer Prompt Framework",
    description:
      "Language awareness, empathy, point of view, and organizational power. Four rhetorical concepts from a 2,000-year-old discipline that transform every prompt you write.",
    free: false,
  },
  {
    number: "03",
    title: "Build a prompt library for your role",
    description:
      "Role-specific prompt templates for marketing, sales, operations, finance, HR, and consulting. Copy them, customize them, reuse them.",
    free: false,
  },
  {
    number: "04",
    title: "Build reusable prompt systems for your team",
    description:
      "Move from personal prompts to shared systems. Naming conventions, version control, quality standards, and onboarding new team members.",
    free: false,
  },
];

export default function PromptsTrackPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/build"
        className="text-sm text-emerald-600 hover:text-emerald-700"
      >
        &larr; All tracks
      </Link>

      <div className="mt-6">
        <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
          Start Here
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          Build Prompt Frameworks
        </h1>
        <p className="mt-3 text-lg text-zinc-500">
          Build a personal prompt library organized by role and use case. By the
          end, you will have reusable prompt templates, a framework for writing
          new ones, and a system your team can share.
        </p>
      </div>

      <div className="mt-10 rounded-xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
        <h2 className="font-semibold text-blue-800 dark:text-blue-400">
          What you will have when you are done
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-blue-700 dark:text-blue-500">
          <li>A personal prompt library with 20+ reusable templates</li>
          <li>The 4-Layer Framework internalized for any new prompt</li>
          <li>Role-specific prompt sets for your exact work</li>
          <li>A shared prompt system your team can use and extend</li>
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
