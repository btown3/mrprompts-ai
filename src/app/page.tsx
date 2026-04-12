import Link from "next/link";
import { FAQ } from "./components/FAQ";
import { FeaturedPosts } from "./components/FeaturedPosts";
import { Testimonials } from "./components/Testimonials";

const HOME_FAQ = [
  {
    question: "What is MrPrompts?",
    answer:
      "MrPrompts is a collection of AI frameworks, prompt systems, and practical guides for professionals who want to get better results from AI without writing code. Every framework is something you can use today with Claude, ChatGPT, or any AI tool.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "No. Everything on MrPrompts is designed for smart professionals who do not come from a technical background. You type instructions into AI tools you already use. No terminal. No programming. No setup.",
  },
  {
    question: "What do I get if I sign up?",
    answer:
      "A free account gives you access to all frameworks, prompt packs, downloadable starter kits, and the Wiki Builder tool. You also get the weekly newsletter with one new framework every week.",
  },
  {
    question: "How is this different from other AI courses?",
    answer:
      "Most AI courses teach you about AI. MrPrompts gives you frameworks you use immediately. The LLM Instruction Set, the 4-Layer Prompt Framework, the Knowledge Base Architecture. Named systems with clear steps, not lectures.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — tight, one clear message */}
      <section className="relative">
        <div className="mx-auto max-w-3xl px-6 pb-12 pt-24 text-center md:pt-32">
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            AI frameworks for{" "}
            <span className="text-emerald-600">people who work</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-500">
            Named systems. Clear steps. Copy them into any AI tool and get
            better output today. No coding. No courses. Just frameworks that
            work.
          </p>
        </div>
      </section>

      {/* Featured framework — the hook */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <Link
          href="/learn/llm-instruction-set"
          className="group block rounded-2xl border-2 border-zinc-200 p-8 transition hover:border-emerald-400 hover:shadow-lg md:p-12 dark:border-zinc-800 dark:hover:border-emerald-600"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
            Featured Framework
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl group-hover:text-emerald-600">
            The LLM Instruction Set: Stop Prompting, Start Operating
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-500">
            15 atomic instructions you type directly into any AI tool.
            DefineOutcome. ForceAction. CheckGaps. Stack three of them and
            your output changes completely. Used by 5,000+ professionals.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["DefineOutcome", "AddContext", "AssignRole", "ForceAction", "CheckGaps", "Simplify"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-100 px-3 py-1 font-mono text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              >
                {tag}
              </span>
            ))}
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-400 dark:bg-zinc-800">
              +9 more
            </span>
          </div>
          <span className="mt-6 inline-flex text-sm font-semibold text-emerald-600 group-hover:text-emerald-700">
            Read the full framework &rarr;
          </span>
        </Link>
      </section>

      {/* Divider */}
      <div className="border-t border-zinc-200 dark:border-zinc-800" />

      {/* More frameworks */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Frameworks
        </h2>
        <p className="mt-3 text-zinc-500">
          Each one is a named system you can use today.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/learn/ai-knowledge-base-guide"
            className="group rounded-xl border border-zinc-200 p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800"
          >
            <span className="text-xs font-medium text-emerald-600">System</span>
            <h3 className="mt-3 text-lg font-bold group-hover:text-emerald-600">
              The Knowledge Base Architecture
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              Collect, Compile, Query, Compound. The 4-step system that turns
              raw sources into a structured wiki that gets smarter every time
              you use it.
            </p>
          </Link>

          <Link
            href="/learn/ai-change-management"
            className="group rounded-xl border border-zinc-200 p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800"
          >
            <span className="text-xs font-medium text-emerald-600">Playbook</span>
            <h3 className="mt-3 text-lg font-bold group-hover:text-emerald-600">
              The 90-Day AI Adoption Playbook
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              Assess, Foundation, Pilot, Scale. How to roll out AI to your
              organization without losing your team. Built for leaders.
            </p>
          </Link>

          <Link
            href="/learn/ai-for-non-technical"
            className="group rounded-xl border border-zinc-200 p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800"
          >
            <span className="text-xs font-medium text-emerald-600">Guide</span>
            <h3 className="mt-3 text-lg font-bold group-hover:text-emerald-600">
              AI for Non-Technical Professionals
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              What AI actually is, the three things it does well, where it
              fails, and your first week plan. The complete on-ramp.
            </p>
          </Link>

          <Link
            href="/learn/ai-prompts-for-sales"
            className="group rounded-xl border border-zinc-200 p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800"
          >
            <span className="text-xs font-medium text-emerald-600">Prompts</span>
            <h3 className="mt-3 text-lg font-bold group-hover:text-emerald-600">
              Sales Prompt Framework
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              15 prompts for every stage: discovery, proposals, follow-ups,
              objections, pipeline. Copy, paste, customize.
            </p>
          </Link>

          <Link
            href="/learn/ai-prompts-for-marketing"
            className="group rounded-xl border border-zinc-200 p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800"
          >
            <span className="text-xs font-medium text-emerald-600">Prompts</span>
            <h3 className="mt-3 text-lg font-bold group-hover:text-emerald-600">
              Marketing Prompt Framework
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              15 prompts for campaigns, content, email, social, ads, and
              analytics. Each one produces work you would actually use.
            </p>
          </Link>

          <Link
            href="/learn/ai-team-assessment"
            className="group rounded-xl border border-zinc-200 p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800"
          >
            <span className="text-xs font-medium text-emerald-600">Assessment</span>
            <h3 className="mt-3 text-lg font-bold group-hover:text-emerald-600">
              AI Fluency Assessment
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              5-dimension scoring rubric and 10-question survey. Measure where
              your team stands before you train them.
            </p>
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/frameworks"
            className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
          >
            See all frameworks &rarr;
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-zinc-200 dark:border-zinc-800" />

      {/* Subscribe — now they know what they're subscribing to */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Subscribe to the MrPrompts Newsletter
        </h2>
        <p className="mx-auto mt-4 max-w-md text-zinc-500">
          One new AI framework every week. 5,000+ professionals use these to
          get better results from Claude, ChatGPT, and every other AI tool. Free.
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
      </section>

      {/* Divider */}
      <div className="border-t border-zinc-200 dark:border-zinc-800" />

      {/* From the blog */}
      <FeaturedPosts />

      {/* Testimonials */}
      <Testimonials />

      {/* Divider */}
      <div className="border-t border-zinc-200 dark:border-zinc-800" />

      {/* Products + Workshops — for people ready to go deeper */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Go deeper
        </h2>
        <p className="mt-3 text-zinc-500">
          Download starter kits, join a live workshop, or bring MrPrompts to
          your team.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Link
            href="/products"
            className="group rounded-xl border border-zinc-200 p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
              Free
            </span>
            <h3 className="mt-3 text-lg font-bold group-hover:text-emerald-600">
              Products
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              Interactive builders, prompt packs, starter kits, and
              downloadable templates. Browse and use.
            </p>
          </Link>

          <Link
            href="/workshops"
            className="group rounded-xl border border-zinc-200 p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
              Live
            </span>
            <h3 className="mt-3 text-lg font-bold group-hover:text-emerald-600">
              Workshops
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              Small-group sessions where you build something real in 2 hours.
              Not a webinar. Hands-on with a live instructor.
            </p>
          </Link>

          <Link
            href="/enterprise"
            className="group rounded-xl border border-zinc-200 p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-600">
              Teams
            </span>
            <h3 className="mt-3 text-lg font-bold group-hover:text-emerald-600">
              Enterprise Training
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              Custom AI training for your organization. Workshops, adoption
              roadmaps, executive briefings.
            </p>
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-zinc-200 dark:border-zinc-800" />

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Frequently asked questions
        </h2>
        <div className="mt-10">
          <FAQ items={HOME_FAQ} />
        </div>
      </section>
    </>
  );
}
