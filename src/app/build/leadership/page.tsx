import Link from "next/link";

const MODULES = [
  {
    number: "01",
    title: "AI fluency assessment for your team",
    description:
      "Assess where your team stands today. A practical framework for measuring AI readiness across departments without hiring consultants or running surveys that nobody fills out.",
    free: true,
  },
  {
    number: "02",
    title: "Build an AI adoption roadmap",
    description:
      "A 90-day plan for rolling out AI to your organization. Which teams first, which tools, what training, and how to measure success. Not theory. A document you can present to the board.",
    free: false,
  },
  {
    number: "03",
    title: "Change management playbook for AI rollout",
    description:
      "How to handle resistance, build internal champions, communicate wins, and avoid the mistakes that kill AI initiatives. Based on patterns from organizations that got it right.",
    free: false,
  },
  {
    number: "04",
    title: "AI governance and use case portfolios",
    description:
      "Build a governance framework that enables instead of blocks. Plus department-specific use case portfolios that show your teams exactly where AI creates value in their work.",
    free: false,
  },
];

export default function LeadershipTrackPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/build"
        className="text-sm text-emerald-600 hover:text-emerald-700"
      >
        &larr; All tracks
      </Link>

      <div className="mt-6">
        <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
          For Leaders
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          Build AI-Ready Teams
        </h1>
        <p className="mt-3 text-lg text-zinc-500">
          Build an AI transformation plan you can present to the board. By the
          end, you will have an adoption roadmap, change management playbook,
          governance framework, and department-specific use case portfolios.
        </p>
      </div>

      <div className="mt-10 rounded-xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
        <h2 className="font-semibold text-purple-800 dark:text-purple-400">
          What you will have when you are done
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-purple-700 dark:text-purple-500">
          <li>A team AI fluency assessment you can run this week</li>
          <li>A 90-day AI adoption roadmap ready for executive review</li>
          <li>A change management playbook tailored to your org</li>
          <li>Department-specific use case portfolios with ROI estimates</li>
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
        <h2 className="text-xl font-bold text-white">
          Built for VPs, directors, and C-suite.
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
          The leadership track is included in every Builder plan. For
          enterprise-wide rollouts and custom workshops, talk to us.
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
