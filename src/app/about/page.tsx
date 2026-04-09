import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
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
          your terminal." Every framework was written for developers.
        </p>
        <p>
          That felt wrong. The most interesting things happening with AI right
          now don't require a computer science degree. They require clear
          thinking, good frameworks, and someone willing to show you the
          on-ramp.
        </p>
        <p>
          That's what MrPrompts is. I build AI knowledge bases, prompt systems,
          and workflows. Then I write down exactly how I built them so you can
          build your own. No jargon. No gatekeeping. Just frameworks that work,
          tested by someone who uses them every day.
        </p>
        <p>
          I write a weekly newsletter that 4,000+ professionals read. I've
          published guides on prompt engineering, AI agents, knowledge base
          architecture, and change management with AI. I focus on the
          intersection of AI capability and human judgment, because that's where
          the real leverage is.
        </p>
        <p>
          If you're a professional who wants to build with AI but doesn't come
          from a technical background, you're exactly who I built this for.
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
    </div>
  );
}
