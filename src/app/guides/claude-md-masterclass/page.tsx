import Link from "next/link";
import { BuyButton } from "@/app/components/BuyButton";

const SECTIONS = [
  {
    title: "What CLAUDE.md actually does",
    content:
      "CLAUDE.md is the schema file that controls your entire wiki system. When an AI reads your vault, this is the first file it processes. It defines the topic, folder structure, article format, naming conventions, and behavioral rules. A good CLAUDE.md means you can hand your vault to any LLM and get consistent, high-quality output. A bad one means drift, duplication, and hallucination.",
  },
  {
    title: "The five sections every CLAUDE.md needs",
    content:
      "Purpose (what this wiki is about), Structure (folder layout and file roles), Article Format (how each page should be written), Taxonomy (categories, tags, and naming conventions), and Rules (what the AI must and must not do). Skip any of these and your wiki will degrade over time.",
  },
  {
    title: "Writing effective rules",
    content:
      'Rules are constraints, not suggestions. "Never modify source files" prevents data loss. "Always cite sources" prevents hallucination. "One concept per page" prevents bloat. Write rules for the failure modes you actually care about. Every rule should exist because something went wrong without it.',
  },
  {
    title: "Taxonomy design",
    content:
      "Your taxonomy is how the AI decides where things go. Categories should be mutually exclusive and collectively exhaustive for your topic. Tags can overlap. Use a flat category structure until you have 50+ articles. Nesting too early creates empty folders and confused AI.",
  },
  {
    title: "Versioning your schema",
    content:
      "Your CLAUDE.md will evolve. Add a version number. When you make a breaking change (new folder structure, renamed categories), bump the version and add a migration note. This prevents the AI from writing articles that follow an outdated format.",
  },
];

export default function ClaudeMdMasterclassPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-12">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
            Paid Guide
          </span>
          <span className="text-xs text-zinc-400">45 min read</span>
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          The CLAUDE.md Masterclass
        </h1>
        <p className="mt-3 text-lg text-zinc-500">
          The schema file is the single most important file in your system. Learn
          how to write one that makes your wiki practically self-maintaining.
        </p>
      </div>

      {/* Preview sections */}
      <section className="mb-12">
        <h2 className="text-xl font-bold">What you will learn</h2>
        <div className="mt-6 space-y-6">
          {SECTIONS.map((section, i) => (
            <div
              key={section.title}
              className={`rounded-lg border border-zinc-200 p-6 dark:border-zinc-800 ${
                i >= 2 ? "relative overflow-hidden" : ""
              }`}
            >
              {i >= 2 && (
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-white via-white/80 to-transparent pb-6 dark:from-zinc-950 dark:via-zinc-950/80">
                  <span className="text-sm font-medium text-zinc-400">
                    Preview ends here
                  </span>
                </div>
              )}
              <h3 className="font-semibold">{section.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Purchase CTA */}
      <section className="rounded-xl bg-zinc-900 p-8 text-center dark:bg-zinc-800">
        <h2 className="text-xl font-bold text-white">Get the full guide</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
          5 chapters, real CLAUDE.md examples from production wikis, and a
          template library you can copy directly.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3">
          <BuyButton slug="claude-md-masterclass" price="$19" />
          <p className="mt-1 text-xs text-zinc-500">
            One-time purchase. Instant access. No subscription.
          </p>
        </div>
      </section>

      {/* Related */}
      <div className="mt-12 flex justify-between text-sm">
        <Link
          href="/guides/your-first-wiki"
          className="text-emerald-600 hover:text-emerald-700"
        >
          &larr; Your First Wiki
        </Link>
        <Link
          href="/guides/wiki-automation"
          className="text-emerald-600 hover:text-emerald-700"
        >
          Wiki Automation &rarr;
        </Link>
      </div>
    </article>
  );
}
