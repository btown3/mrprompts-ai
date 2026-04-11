import Link from "next/link";

const EXPLORE_LINKS = [
  { href: "/build", label: "Build Tracks", description: "Interactive tools for knowledge bases, prompts, workflows, and leadership" },
  { href: "/products", label: "Free Products", description: "Prompt packs, templates, and playbooks you can download now" },
  { href: "/workshops", label: "Live Workshops", description: "Hands-on sessions where you build something real in 2 hours" },
  { href: "/enterprise", label: "Enterprise Training", description: "Custom AI training for your organization" },
];

export function PageFooterCTA() {
  return (
    <div className="mt-20 space-y-8">
      {/* Subscribe */}
      <div className="rounded-2xl bg-zinc-900 px-8 py-12 text-center dark:bg-zinc-800">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Subscribe to the MrPrompts Newsletter
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-zinc-400">
          Join 5,000+ builders. One practical AI framework every week:
          prompt templates, workflow blueprints, and knowledge base
          strategies you can use the same day. Free.
        </p>
        <div className="mx-auto mt-6 max-w-md">
          <iframe
            src="https://mrprompts.substack.com/embed"
            width="100%"
            height="150"
            className="rounded-lg"
            style={{ border: "none", background: "transparent" }}
          />
        </div>
      </div>

      {/* Explore more */}
      <div>
        <h3 className="text-lg font-bold">Keep exploring</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {EXPLORE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-800 dark:hover:border-emerald-800"
            >
              <p className="text-sm font-semibold">{link.label}</p>
              <p className="mt-1 text-xs text-zinc-500">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
