import Link from "next/link";

const TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Start building your first knowledge base today.",
    features: [
      "Browsable wiki previews",
      '"Your First Wiki in 20 Minutes" guide',
      "CLAUDE.md Generator tool",
      "Weekly newsletter",
    ],
    cta: "Get Started",
    ctaHref: "/guides/your-first-wiki",
    highlight: false,
  },
  {
    name: "Wiki Vault",
    price: "$29–$79",
    period: "one-time",
    description: "A complete, downloadable Obsidian vault. Ready to query.",
    features: [
      "50+ interlinked articles",
      "30+ verified sources",
      "Pre-built CLAUDE.md schema",
      "Obsidian .zip download",
      "Lifetime access to vault version",
    ],
    cta: "Browse Vaults",
    ctaHref: "/wikis",
    highlight: true,
  },
  {
    name: "Subscription",
    price: "$15–$30",
    period: "/month",
    description: "Wiki vaults that stay current. We maintain them so you don't have to.",
    features: [
      "Everything in Wiki Vault",
      "Weekly content updates",
      "New source integration",
      "Priority topic requests",
      "Access to all vault topics",
    ],
    cta: "Coming Soon",
    ctaHref: "#",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Simple pricing. No surprises.
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-zinc-500">
          Start free. Buy a vault when you find a topic you care about. Subscribe
          if you want it kept fresh.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`flex flex-col rounded-xl border p-8 ${
              tier.highlight
                ? "border-emerald-500 shadow-lg shadow-emerald-500/10 dark:border-emerald-600"
                : "border-zinc-200 dark:border-zinc-800"
            }`}
          >
            {tier.highlight && (
              <span className="mb-4 w-fit rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                Most Popular
              </span>
            )}
            <h2 className="text-xl font-bold">{tier.name}</h2>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-3xl font-bold">{tier.price}</span>
              <span className="text-sm text-zinc-500">{tier.period}</span>
            </div>
            <p className="mt-3 text-sm text-zinc-500">{tier.description}</p>

            <ul className="mt-8 flex-1 space-y-3">
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                >
                  <span className="mt-0.5 text-emerald-600">&#10003;</span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href={tier.ctaHref}
              className={`mt-8 inline-flex h-12 items-center justify-center rounded-lg text-sm font-semibold transition ${
                tier.highlight
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : "border border-zinc-300 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
              }`}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* Paid guides callout */}
      <div className="mt-20 rounded-xl border border-zinc-200 p-8 text-center dark:border-zinc-800">
        <h3 className="text-lg font-semibold">Looking for guides?</h3>
        <p className="mt-2 text-sm text-zinc-500">
          Deep-dive tutorials on CLAUDE.md writing, wiki automation, and
          validation patterns. $19 each.
        </p>
        <Link
          href="/guides"
          className="mt-4 inline-flex text-sm font-semibold text-emerald-600 hover:text-emerald-700"
        >
          Browse guides &rarr;
        </Link>
      </div>
    </div>
  );
}
