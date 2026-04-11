import type { Metadata } from "next";
import Link from "next/link";
import { PersonSchema } from "@/app/components/SchemaOrg";
import { PageFooterCTA } from "@/app/components/PageFooterCTA";

export const metadata: Metadata = {
  title: "About Wayne Cederholm",
  description:
    "Meet the founder of MrPrompts. Wayne Cederholm builds AI systems and teaches smart professionals to do the same. 5,000+ builders trust his weekly newsletter.",
  alternates: { canonical: "https://www.mrprompts.ai/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <PersonSchema />
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        Hey, I'm Wayne Cederholm.
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        I build AI systems and teach others to do the same.
      </p>

      <div className="mt-10 space-y-6 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <p>
          I started MrPrompts because I kept watching smart, ambitious people get
          locked out of AI. Not because they lacked intelligence. Because
          everything assumed you could code. Every tutorial started with "open
          your terminal." Every framework was written for developers. Meanwhile,
          the VP of marketing, the head of sales, the operations director — the
          people who could get the most leverage from AI — were stuck reading
          articles that described what AI could do without ever showing them how
          to do it.
        </p>
        <p>
          That felt wrong. The most interesting things happening with AI right
          now don't require a computer science degree. They require clear
          thinking, good frameworks, and someone willing to show you the
          on-ramp. So I decided to be that person.
        </p>

        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">What I've built</h2>
        <p>
          MrPrompts started as a newsletter and turned into a full system for
          professional AI adoption. I built the wiki system — a structured
          knowledge base architecture that lets any professional create a
          compounding AI reference using nothing but a note-taking app and an AI
          assistant. I developed prompt frameworks for sales, marketing, HR, and
          executive teams — not generic templates, but structured systems that
          produce work you'd actually use. I designed enterprise training programs
          that take organizations from "we should probably do something with AI"
          to measurable adoption in 90 days.
        </p>
        <p>
          Everything on this site was built using the same tools and methods I
          teach. The knowledge bases, the workflows, the prompt libraries — I use
          them daily. I'm a builder, not a theorist. If I haven't built it
          myself, I don't teach it.
        </p>

        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">The community</h2>
        <p>
          Over 5,000 professionals subscribe to the weekly MrPrompts newsletter.
          Every week, they get one practical AI framework they can use
          immediately: a prompt template, a workflow blueprint, a knowledge base
          schema, or a step-by-step guide. No hype. No "AI will change
          everything" hand-waving. Just specific techniques, tested by someone
          who uses them in real work, explained clearly enough that a non-technical
          professional can implement them the same day.
        </p>

        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Who MrPrompts is for</h2>
        <p>
          If you're a non-technical professional who wants to build with AI but
          doesn't know where to start — you're exactly who I built this for.
          Team leaders who need to roll out AI without losing their people.
          Executives who want strategic AI capability without depending on
          engineering. Sales and marketing professionals who want to do more in
          less time. Consultants and analysts who synthesize information for a
          living and know there's a better way.
        </p>
        <p>
          I write like I talk: straight, specific, and respectful of your time.
          If something doesn't work, I'll tell you. If something does, I'll show
          you exactly how to set it up. That's the deal.
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/build"
          className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Start Building
        </Link>
        <a
          href="https://mrprompts.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-300 px-6 text-sm font-semibold transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
        >
          Read the Newsletter
        </a>
      </div>

      {/* Connect */}
      <div className="mt-16 rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
        <h2 className="text-lg font-semibold">Connect</h2>
        <div className="mt-4 flex flex-col gap-3 text-sm">
          <a
            href="https://www.linkedin.com/in/waynecederholm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 hover:text-emerald-700"
          >
            LinkedIn — Wayne Cederholm
          </a>
          <a
            href="https://mrprompts.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 hover:text-emerald-700"
          >
            Substack — Weekly newsletter for AI builders
          </a>
          <a
            href="https://x.com/MrPrompts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 hover:text-emerald-700"
          >
            X / Twitter — @MrPrompts
          </a>
        </div>
      </div>

      <PageFooterCTA />
    </div>
  );
}
