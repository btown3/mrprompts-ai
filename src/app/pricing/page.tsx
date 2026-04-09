import Link from "next/link";

const TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Start building today. No credit card required.",
    features: [
      "First module of every build track",
      "Wiki Builder tool",
      "Weekly newsletter",
      "Blog and community access",
    ],
    cta: "Start Building",
    ctaHref: "/build",
    highlight: false,
  },
  {
    name: "Builder",
    price: "$19",
    period: "/month",
    description: "Full access to everything. For individuals who want to build seriously with AI.",
    features: [
      "All 4 build tracks (16 modules)",
      "All tools (wiki builder, prompt library, templates)",
      "Vault download discounts",
      "Full prompt library by role",
      "New modules as they ship",
    ],
    cta: "Get Builder Access",
    ctaHref: "#",
    highlight: true,
    annual: "$149/year (save 35%)",
  },
  {
    name: "Team",
    price: "$49",
    period: "/seat/month",
    description: "Build AI capability across your team. Admin controls and shared resources.",
    features: [
      "Everything in Builder",
      "Team admin dashboard",
      "Shared prompt libraries",
      "Team progress tracking",
      "Priority support",
    ],
    cta: "Get Team Access",
    ctaHref: "#",
    highlight: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations building AI readiness at scale.",
    features: [
      "Everything in Team",
      "Leadership track with custom modules",
      "Private workshops with Wayne",
      "Custom AI adoption roadmaps",
      "Dedicated account support",
    ],
    cta: "Contact Us",
    ctaHref: "mailto:wayne@mrprompts.ai",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Start free. Build seriously for $19/month.
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-zinc-500">
          First module of every track is free. Unlock everything when you are
          ready. Cancel anytime.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`flex flex-col rounded-xl border p-6 ${
              tier.highlight
                ? "border-emerald-500 shadow-lg shadow-emerald-500/10 dark:border-emerald-600"
                : "border-zinc-200 dark:border-zinc-800"
            }`}
          >
            {tier.highlight && (
              <span className="mb-3 w-fit rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                Most Popular
              </span>
            )}
            <h2 className="text-lg font-bold">{tier.name}</h2>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-3xl font-bold">{tier.price}</span>
              {tier.period && (
                <span className="text-sm text-zinc-500">{tier.period}</span>
              )}
            </div>
            {"annual" in tier && tier.annual && (
              <p className="mt-1 text-xs text-emerald-600">{tier.annual}</p>
            )}
            <p className="mt-3 text-sm text-zinc-500">{tier.description}</p>

            <ul className="mt-6 flex-1 space-y-2.5">
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
              className={`mt-6 inline-flex h-10 items-center justify-center rounded-lg text-sm font-semibold transition ${
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

      {/* Vaults callout */}
      <div className="mt-20 rounded-xl border border-zinc-200 p-8 text-center dark:border-zinc-800">
        <h3 className="text-lg font-semibold">
          Just want a finished vault? No subscription needed.
        </h3>
        <p className="mt-2 text-sm text-zinc-500">
          Pre-built Obsidian wiki vaults on popular topics. One-time purchase,
          $29 to $79.
        </p>
        <Link
          href="/vaults"
          className="mt-4 inline-flex text-sm font-semibold text-emerald-600 hover:text-emerald-700"
        >
          Browse vaults &rarr;
        </Link>
      </div>
    </div>
  );
}
