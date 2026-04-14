import Link from "next/link";
import { FAQ } from "./components/FAQ";
import { FeaturedPosts } from "./components/FeaturedPosts";
import { Testimonials } from "./components/Testimonials";

const HOME_FAQ = [
  {
    question: "What is MrPrompts?",
    answer:
      "A collection of AI frameworks and practical guides for professionals who want better results from AI without writing code. Everything here works with Claude, ChatGPT, or whatever tool you use.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "No. You type instructions into AI tools you already use. There is no terminal, no programming, no setup involved.",
  },
  {
    question: "What do I get if I sign up?",
    answer:
      "A free account gives you access to all frameworks, prompt packs, downloadable starter kits, and the Wiki Builder tool. You also get a weekly newsletter with a new framework each week.",
  },
  {
    question: "How is this different from other AI courses?",
    answer:
      "Most AI courses teach you about AI. MrPrompts gives you named systems you use immediately, like the LLM Instruction Set or the Knowledge Base Architecture. Less theory, more doing.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — tight, one clear message */}
      <section className="relative overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/llm-instruction-set.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay so text is readable */}
        <div className="pointer-events-none absolute inset-0 bg-white/85 dark:bg-zinc-950/85" />
        <div className="relative mx-auto max-w-3xl px-6 pb-12 pt-24 text-center md:pt-32">
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            AI frameworks{" "}
            <span className="text-emerald-600">for professionals</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-500">
            Practical systems you can copy into Claude, ChatGPT, or any AI
            tool and use right away. Built for people who work with AI but
            do not write code.
          </p>
        </div>
      </section>

      {/* Featured framework — the hook */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <Link
          href="/learn/llm-instruction-set"
          className="group block overflow-hidden rounded-2xl border-2 border-zinc-200 transition hover:border-emerald-400 hover:shadow-lg dark:border-zinc-800 dark:hover:border-emerald-600 dark:hover:shadow-emerald-900/20"
        >
          <div className="overflow-hidden">
            <img
              src="/images/llm-instruction-set.png"
              alt="The LLM Instruction Set framework visualization"
              className="h-48 w-full object-cover transition duration-500 group-hover:scale-105 md:h-64"
            />
          </div>
          <div className="p-8 md:p-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
            Featured Framework
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl group-hover:text-emerald-600">
            The LLM Instruction Set: Stop Prompting, Start Operating
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-500">
            15 instructions you type directly into any AI tool.
            DefineOutcome. ForceAction. CheckGaps. Use one or combine a few,
            and the output gets noticeably better.
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
          </div>
        </Link>
      </section>

      {/* Divider */}
      <div className="border-t border-zinc-200 dark:border-zinc-800" />

      {/* From Substack — right after the hook */}
      <FeaturedPosts />

      {/* Subscribe — full width dark block */}
      <section className="bg-zinc-900 dark:bg-zinc-800">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            The MrPrompts Newsletter
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-zinc-400">
            One new AI framework every week. Practical stuff you can copy into
            Claude, ChatGPT, or whatever you use. 5,000+ subscribers. Free.
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

      {/* Divider */}
      <div className="border-t border-zinc-200 dark:border-zinc-800" />

      {/* More frameworks */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Frameworks
        </h2>
        <p className="mt-3 text-zinc-500">
          Each one is a named system with clear steps you can use right away.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/learn/ai-knowledge-base-guide"
            className="group overflow-hidden rounded-xl border border-zinc-200 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800 dark:hover:shadow-emerald-900/20"
          >
            <img src="/images/knowledge-base-system.png" alt="Knowledge Base Architecture" className="h-36 w-full object-cover transition duration-300 group-hover:scale-105" />
            <div className="p-6">
            <span className="text-xs font-medium text-emerald-600">System</span>
            <h3 className="mt-3 text-lg font-bold group-hover:text-emerald-600">
              The Knowledge Base Architecture
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              Collect, Compile, Query, Compound. A 4-step system for turning
              raw sources into a structured wiki that improves as you add to it.
            </p>
            </div>
          </Link>

          <Link
            href="/learn/ai-change-management"
            className="group overflow-hidden rounded-xl border border-zinc-200 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800 dark:hover:shadow-emerald-900/20"
          >
            <img src="/images/ai-change-management.png" alt="90-Day AI Adoption Playbook" className="h-36 w-full object-cover transition duration-300 group-hover:scale-105" />
            <div className="p-6">
            <span className="text-xs font-medium text-emerald-600">Playbook</span>
            <h3 className="mt-3 text-lg font-bold group-hover:text-emerald-600">
              The 90-Day AI Adoption Playbook
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              Assess, Foundation, Pilot, Scale. A phased approach to rolling
              out AI across your organization, written for the person leading it.
            </p>
            </div>
          </Link>

          <Link
            href="/learn/ai-for-non-technical"
            className="group overflow-hidden rounded-xl border border-zinc-200 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800 dark:hover:shadow-emerald-900/20"
          >
            <img src="/images/ai-for-professionals.png" alt="AI for Non-Technical Professionals" className="h-36 w-full object-cover transition duration-300 group-hover:scale-105" />
            <div className="p-6">
            <span className="text-xs font-medium text-emerald-600">Guide</span>
            <h3 className="mt-3 text-lg font-bold group-hover:text-emerald-600">
              AI for Non-Technical Professionals
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              What AI actually is, what it does well, where it falls short,
              and a first-week plan to start using it.
            </p>
            </div>
          </Link>

          <Link
            href="/learn/ai-prompts-for-sales"
            className="group overflow-hidden rounded-xl border border-zinc-200 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800 dark:hover:shadow-emerald-900/20"
          >
            <img src="/images/sales-prompts.png" alt="Sales Prompt Framework" className="h-36 w-full object-cover transition duration-300 group-hover:scale-105" />
            <div className="p-6">
            <span className="text-xs font-medium text-emerald-600">Prompts</span>
            <h3 className="mt-3 text-lg font-bold group-hover:text-emerald-600">
              Sales Prompt Framework
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              15 prompts covering discovery, proposals, follow-ups,
              objections, and pipeline management. Ready to copy and customize.
            </p>
            </div>
          </Link>

          <Link
            href="/learn/ai-prompts-for-marketing"
            className="group overflow-hidden rounded-xl border border-zinc-200 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800 dark:hover:shadow-emerald-900/20"
          >
            <img src="/images/marketing-prompts.png" alt="Marketing Prompt Framework" className="h-36 w-full object-cover transition duration-300 group-hover:scale-105" />
            <div className="p-6">
            <span className="text-xs font-medium text-emerald-600">Prompts</span>
            <h3 className="mt-3 text-lg font-bold group-hover:text-emerald-600">
              Marketing Prompt Framework
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              15 prompts for campaigns, content, email, social, ads, and
              analytics. Each one produces work you would actually use.
            </p>
            </div>
          </Link>

          <Link
            href="/learn/ai-team-assessment"
            className="group overflow-hidden rounded-xl border border-zinc-200 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800 dark:hover:shadow-emerald-900/20"
          >
            <img src="/images/ai-change-management.png" alt="AI Fluency Assessment" className="h-36 w-full object-cover transition duration-300 group-hover:scale-105" />
            <div className="p-6">
            <span className="text-xs font-medium text-emerald-600">Assessment</span>
            <h3 className="mt-3 text-lg font-bold group-hover:text-emerald-600">
              AI Fluency Assessment
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              5-dimension scoring rubric and 10-question survey. Measure where
              your team stands before you train them.
            </p>
            </div>
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
            className="group rounded-xl border border-zinc-200 p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800 dark:hover:shadow-emerald-900/20"
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
            className="group rounded-xl border border-zinc-200 p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800 dark:hover:shadow-emerald-900/20"
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
            className="group rounded-xl border border-zinc-200 p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800 dark:hover:shadow-emerald-900/20"
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
