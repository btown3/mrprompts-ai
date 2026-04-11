import Link from "next/link";
import { FAQ } from "./components/FAQ";
import { BuildProcess } from "./components/diagrams/BuildProcess";
import { FolderStructure } from "./components/diagrams/FolderStructure";
import { FeaturedPosts } from "./components/FeaturedPosts";
import { Testimonials } from "./components/Testimonials";

const HOME_FAQ = [
  {
    question: "What is an AI knowledge base?",
    answer:
      "An AI knowledge base is a structured collection of interlinked articles that an AI model can read and query. Unlike a chat conversation that disappears, a knowledge base persists. Every new source you add and every answer you generate enriches it. The AI gets smarter about your topic over time because it has a growing, organized reference to draw from.",
  },
  {
    question: "Do I need to know how to code to use MrPrompts?",
    answer:
      "No. Everything on MrPrompts is designed for smart professionals who do not come from a technical background. Our guides use plain language, our tools run in the browser, and our workshops are hands-on with no terminal or command line required. If you can use a word processor, you can build with AI.",
  },
  {
    question: "What is a prompt framework?",
    answer:
      "A prompt framework is a reusable structure for writing effective AI prompts. Instead of guessing at how to ask an AI for help, a framework gives you a template that consistently produces better output. The MrPrompts 4-Layer Framework, for example, uses language awareness, empathy, point of view, and organizational power to transform any prompt from generic to precise.",
  },
  {
    question: "What is CLAUDE.md?",
    answer:
      "CLAUDE.md is a schema file that controls how an AI interacts with your knowledge base. It defines your topic, folder structure, article format, taxonomy, and behavioral rules. When an AI reads your vault, CLAUDE.md is the first file it processes. A well-written CLAUDE.md means consistent, high-quality output every time. MrPrompts teaches you how to write one and provides production-ready templates.",
  },
  {
    question: "How is MrPrompts different from other AI courses?",
    answer:
      "Most AI courses teach you about AI. MrPrompts teaches you to build with AI. Every guide ends with something you made: a knowledge base, a prompt library, a workflow, or a leadership playbook. We focus on non-technical professionals and use no jargon, no coding, and no assumptions about your background. You also get free tools like the Wiki Builder that let you build right on the site.",
  },
];


export default function Home() {
  return (
    <>
      {/* Hero — centered, clean, NeatPrompts-inspired */}
      <section className="relative">
        <div className="mx-auto max-w-3xl px-6 pb-16 pt-24 text-center md:pt-32">
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Smart professionals{" "}
            <span className="text-emerald-600">build with AI</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-500">
            MrPrompts is not just AI news. We give you the frameworks, tools,
            and step-by-step guides to actually build with AI. No dev
            background required.
          </p>

          {/* Subscribe — prominent, right in the hero */}
          <p className="mx-auto mt-10 max-w-md text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Subscribe to the MrPrompts newsletter. One practical AI framework
            every week, delivered free.
          </p>
          <div className="mx-auto mt-4 max-w-md">
            <iframe
              src="https://mrprompts.substack.com/embed"
              width="100%"
              height="150"
              className="rounded-lg"
              style={{ border: "none", background: "transparent" }}
            />
          </div>

          <p className="mt-6 text-sm font-medium text-zinc-900 dark:text-zinc-100">
            Trusted by{" "}
            <span className="text-emerald-600">5,000+</span> builders and
            leaders
          </p>
        </div>
      </section>

      {/* How it works diagram */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <BuildProcess />
      </section>

      {/* Divider */}
      <div className="border-t border-zinc-200 dark:border-zinc-800" />

      {/* Build Tracks — the product */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          What will you build?
        </h2>
        <p className="mt-3 max-w-xl text-zinc-500">
          Four interactive tracks. Pick one, make your selections, download
          something you can use today.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link
            href="/build/knowledge-bases"
            className="group rounded-xl border border-zinc-200 p-8 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
              Most Popular
            </span>
            <h3 className="mt-3 text-xl font-bold group-hover:text-emerald-600">
              Build a Knowledge Base
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Download a complete starter kit with folder structure, CLAUDE.md
              schema, and 7 numbered prompts. Or let AI generate articles from
              your sources.
            </p>
          </Link>

          <Link
            href="/build/prompts"
            className="group rounded-xl border border-zinc-200 p-8 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Start Here
            </span>
            <h3 className="mt-3 text-xl font-bold group-hover:text-emerald-600">
              Build a Prompt Library
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Pick your roles. Preview every prompt. Download a customized
              library with 30+ templates for marketing, sales, ops, finance,
              HR, and consulting.
            </p>
          </Link>

          <Link
            href="/build/workflows"
            className="group rounded-xl border border-zinc-200 p-8 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Intermediate
            </span>
            <h3 className="mt-3 text-xl font-bold group-hover:text-emerald-600">
              Build AI Workflows
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Select the workflows you need. Download step-by-step blueprints
              for automations that save hours every week. No coding required.
            </p>
          </Link>

          <Link
            href="/build/leadership"
            className="group rounded-xl border border-zinc-200 p-8 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-600">
              For Leaders
            </span>
            <h3 className="mt-3 text-xl font-bold group-hover:text-emerald-600">
              Build AI-Ready Teams
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Enter your org details. Download a customized adoption roadmap,
              fluency assessment, change management playbook, and executive
              briefing outline.
            </p>
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-zinc-200 dark:border-zinc-800" />

      {/* Free products highlight */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Free downloads
            </h2>
            <p className="mt-3 text-zinc-500">
              Prompt packs, templates, and playbooks. No account needed.
            </p>
          </div>
          <Link
            href="/products"
            className="hidden text-sm font-semibold text-emerald-600 hover:text-emerald-700 md:block"
          >
            All products &rarr;
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Link
            href="/products/sales-prompt-pack"
            className="group rounded-xl border border-zinc-200 p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800"
          >
            <span className="text-xs font-medium text-emerald-600">
              15 prompts · Free
            </span>
            <h3 className="mt-3 text-lg font-bold group-hover:text-emerald-600">
              Sales Prompt Pack
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Discovery calls, proposals, follow-ups, objection handling,
              pipeline analysis.
            </p>
          </Link>
          <Link
            href="/products/marketing-prompt-pack"
            className="group rounded-xl border border-zinc-200 p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800"
          >
            <span className="text-xs font-medium text-emerald-600">
              15 prompts · Free
            </span>
            <h3 className="mt-3 text-lg font-bold group-hover:text-emerald-600">
              Marketing Prompt Pack
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Campaign briefs, email sequences, social calendars, landing
              pages, ad copy.
            </p>
          </Link>
          <Link
            href="/build/knowledge-bases"
            className="group rounded-xl border border-zinc-200 p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800"
          >
            <span className="text-xs font-medium text-emerald-600">
              15 files · Free
            </span>
            <h3 className="mt-3 text-lg font-bold group-hover:text-emerald-600">
              Knowledge Base Starter Kit
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Folder structure, CLAUDE.md schema, and 7 numbered prompts.
              Customized to your topic.
            </p>
          </Link>
        </div>
      </section>

      {/* Folder structure diagram */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <FolderStructure />
      </section>

      {/* Divider */}
      <div className="border-t border-zinc-200 dark:border-zinc-800" />

      {/* From the blog — pulled from Supabase */}
      <FeaturedPosts />

      {/* Testimonials — from Supabase */}
      <Testimonials />

      {/* Divider */}
      <div className="border-t border-zinc-200 dark:border-zinc-800" />

      {/* Workshops + Enterprise */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
              Live
            </span>
            <h3 className="mt-3 text-xl font-bold">Workshops</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Small-group, hands-on sessions where you build a knowledge base
              or prompt library in 2 hours. Not a webinar. You leave with
              something you made.
            </p>
            <Link
              href="/workshops"
              className="mt-6 inline-flex text-sm font-semibold text-emerald-600 hover:text-emerald-700"
            >
              View workshops &rarr;
            </Link>
          </div>
          <div className="rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-600">
              Teams
            </span>
            <h3 className="mt-3 text-xl font-bold">Enterprise Training</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Custom AI training for your organization. Workshops, 90-day
              adoption roadmaps, executive briefings. Built for teams who are
              smart but not technical.
            </p>
            <Link
              href="/enterprise"
              className="mt-6 inline-flex text-sm font-semibold text-emerald-600 hover:text-emerald-700"
            >
              Learn more &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-zinc-200 dark:border-zinc-800" />

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Frequently asked questions
        </h2>
        <div className="mt-10">
          <FAQ items={HOME_FAQ} />
        </div>
      </section>

      {/* Bottom CTA — subscribe again */}
      <section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Join 5,000+ builders.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-zinc-500">
            Free weekly newsletter. Build guides, prompt frameworks, and tools
            you can actually use. No fluff.
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
