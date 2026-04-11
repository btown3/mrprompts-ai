import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/app/components/FAQ";

export const metadata: Metadata = {
  title: "Pricing — Free Guides, Workshops, and Enterprise Training",
  description:
    "Start free with 6 guides, tools, and the weekly newsletter. Go deeper with live workshops ($199-$249), wiki vaults ($29-$79), or enterprise training.",
  alternates: { canonical: "https://www.mrprompts.ai/pricing" },
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Start free. Build as much as you want.
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-zinc-500">
          The best AI training content on the internet, free. When you are ready
          for more, we have workshops, vaults, and enterprise training.
        </p>
      </div>

      {/* Free tier - the hero */}
      <div className="mt-16 rounded-xl border-2 border-emerald-500 p-8 shadow-lg shadow-emerald-500/10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
              Start Here
            </span>
            <h2 className="mt-3 text-2xl font-bold">Free</h2>
            <p className="mt-2 text-zinc-500">
              Everything you need to start building with AI today.
            </p>
          </div>
          <div className="text-right">
            <span className="text-4xl font-bold">$0</span>
            <p className="text-sm text-zinc-400">forever</p>
          </div>
        </div>
        <div className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {[
            "6 in-depth guides with downloadable templates",
            "Prompt Library: 20+ templates by role",
            "AI Adoption Roadmap: 90-day plan",
            "Team AI Fluency Assessment",
            "AI Workflow Blueprints",
            "Wiki Builder tool (AI-powered)",
            "Weekly newsletter for 4,000+ builders",
            "Blog with all Substack articles",
          ].map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
            >
              <span className="mt-0.5 text-emerald-600">&#10003;</span>
              {feature}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/build"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-8 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Start Building for Free
          </Link>
        </div>
      </div>

      {/* Paid products grid */}
      <h2 className="mt-20 text-center text-2xl font-bold tracking-tight">
        When you are ready for more
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-center text-zinc-500">
        Go deeper with workshops, pre-built vaults, or bring MrPrompts to your
        whole team.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {/* Workshops */}
        <div className="flex flex-col rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
          <h3 className="text-lg font-bold">Live Workshops</h3>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-2xl font-bold">$199-$249</span>
            <span className="text-sm text-zinc-500">per seat</span>
          </div>
          <p className="mt-3 text-sm text-zinc-500">
            Small-group, hands-on sessions where you build something real with
            AI. Not a webinar. You leave with a finished product.
          </p>
          <ul className="mt-6 flex-1 space-y-2.5">
            {[
              "Build a Knowledge Base (2 hours)",
              "4-Layer Prompt Framework (90 min)",
              "Live on Zoom, monthly",
              "Limited to 20 seats",
            ].map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
              >
                <span className="mt-0.5 text-emerald-600">&#10003;</span>
                {f}
              </li>
            ))}
          </ul>
          <Link
            href="/workshops"
            className="mt-6 inline-flex h-10 items-center justify-center rounded-lg bg-emerald-600 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            View Workshops
          </Link>
        </div>

        {/* Vaults */}
        <div className="flex flex-col rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
          <h3 className="text-lg font-bold">Wiki Vaults</h3>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-2xl font-bold">$29-$79</span>
            <span className="text-sm text-zinc-500">one-time</span>
          </div>
          <p className="mt-3 text-sm text-zinc-500">
            Pre-built knowledge bases you can download and start using
            immediately. Don't want to build? Just download.
          </p>
          <ul className="mt-6 flex-1 space-y-2.5">
            {[
              "50+ interlinked articles per vault",
              "30+ verified sources",
              "Production-ready CLAUDE.md included",
              "Instant download (.zip)",
            ].map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
              >
                <span className="mt-0.5 text-emerald-600">&#10003;</span>
                {f}
              </li>
            ))}
          </ul>
          <Link
            href="/vaults"
            className="mt-6 inline-flex h-10 items-center justify-center rounded-lg border border-zinc-300 text-sm font-semibold transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            Browse Vaults
          </Link>
        </div>

        {/* Enterprise */}
        <div className="flex flex-col rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
          <h3 className="text-lg font-bold">Enterprise Training</h3>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-2xl font-bold">Custom</span>
          </div>
          <p className="mt-3 text-sm text-zinc-500">
            Custom AI training for your organization. Workshops, adoption
            roadmaps, and guided rollouts for teams of 5 to 500.
          </p>
          <ul className="mt-6 flex-1 space-y-2.5">
            {[
              "Custom workshops for your team",
              "90-day guided AI adoption",
              "Executive AI briefings",
              "Measurable outcomes",
            ].map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
              >
                <span className="mt-0.5 text-emerald-600">&#10003;</span>
                {f}
              </li>
            ))}
          </ul>
          <Link
            href="/enterprise"
            className="mt-6 inline-flex h-10 items-center justify-center rounded-lg border border-zinc-300 text-sm font-semibold transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            Let's Talk
          </Link>
        </div>
      </div>

      {/* Pricing FAQ */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold tracking-tight">Common questions</h2>
        <div className="mt-8">
          <FAQ
            items={[
              {
                question: "Is MrPrompts really free?",
                answer:
                  "Yes. Six in-depth guides, the Wiki Builder tool, the weekly newsletter, and the entire blog are completely free. No credit card, no trial period. You can build a knowledge base, a prompt library, and a complete AI adoption plan without paying anything.",
              },
              {
                question: "What do I get in the live workshops?",
                answer:
                  "You join a small group on Zoom with Wayne Cederholm and build something real together. The Knowledge Base workshop ($249) gives you a working knowledge base with 5+ articles in 2 hours. The Prompt Framework workshop ($199) gives you 10+ custom prompts for your role in 90 minutes. Not a lecture. Hands-on building.",
              },
              {
                question: "How does enterprise training work?",
                answer:
                  "We start with a 30-minute discovery call to understand your team and goals. Within 48 hours you get a custom proposal. Training can be a single workshop, a department-specific session, or a full 90-day AI adoption engagement. Everything is built around your team's actual workflows and use cases.",
              },
              {
                question: "Can I get a refund?",
                answer:
                  "Digital guide purchases have a 14-day refund policy. Workshop registrations are refundable up to 48 hours before the session. Enterprise training terms are agreed upon in individual contracts. Email wayne@mrprompts.ai for any refund requests.",
              },
              {
                question: "What is the Builder membership?",
                answer:
                  "The Builder membership ($19/month) will include full access to all four build tracks, the complete prompt library, workflow templates, and new content every month. It is currently in development. Join the newsletter to get notified when it launches.",
              },
            ]}
          />
        </div>
      </section>

      {/* Builder waitlist */}
      <div className="mt-20 rounded-xl bg-zinc-900 p-8 text-center dark:bg-zinc-800">
        <span className="rounded-full bg-emerald-900/50 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
          Coming Soon
        </span>
        <h2 className="mt-4 text-xl font-bold text-white">
          MrPrompts Builder Membership
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
          All four build tracks with full module content, the complete prompt
          library, workflow templates, and new content every month. $19/month.
          Launching soon.
        </p>
        <Link
          href="/build"
          className="mt-6 inline-flex h-12 items-center justify-center rounded-lg border border-zinc-600 px-8 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:hover:bg-zinc-700"
        >
          Preview the Build Tracks
        </Link>
      </div>
    </div>
  );
}
