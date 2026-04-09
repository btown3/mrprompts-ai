import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using MrPrompts.ai, including purchases, workshops, and digital products.",
  alternates: { canonical: "https://www.mrprompts.ai/terms" },
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20 prose prose-zinc dark:prose-invert">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Terms of Service</h1>
      <p className="mt-2 text-sm text-zinc-400">Last updated: April 9, 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        <section>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Agreement</h2>
          <p>
            By accessing or using www.mrprompts.ai, you agree to these terms. If
            you do not agree, do not use the site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Products and services</h2>
          <p>
            MrPrompts offers digital guides, downloadable templates, AI tools,
            live workshops, and enterprise training. All digital products are
            delivered electronically. Workshops are delivered live via Zoom.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Purchases and refunds</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>All purchases are processed securely through Stripe.</li>
            <li>Digital guide purchases are one-time payments with instant access.</li>
            <li>Workshop purchases are refundable up to 48 hours before the session.</li>
            <li>Enterprise training terms are agreed upon in individual contracts.</li>
          </ul>
          <p className="mt-2">
            If you are unsatisfied with a digital product, contact
            wayne@mrprompts.ai within 14 days of purchase for a full refund.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Intellectual property</h2>
          <p>
            All content on MrPrompts.ai — including guides, templates,
            frameworks, and tool outputs — is owned by MrPrompts. You may use
            purchased and downloaded materials for your personal or internal
            business use. You may not resell, redistribute, or republish our
            content without written permission.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Wiki Builder tool</h2>
          <p>
            The Wiki Builder tool uses AI (Claude API) to generate content based
            on your inputs. You own the output generated from your source
            materials. MrPrompts does not store your inputs or outputs beyond
            the duration of the request. AI-generated content should be reviewed
            before use.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Affiliate links</h2>
          <p>
            Some pages on this site contain affiliate links. When you purchase a
            product through an affiliate link, we may earn a commission at no
            additional cost to you. We only recommend tools we actually use.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Limitation of liability</h2>
          <p>
            MrPrompts provides educational content and tools. We do not
            guarantee specific business outcomes. Our guides, templates, and
            training are provided "as is." Use your own judgment when applying AI
            tools in professional settings.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Contact</h2>
          <p>
            Questions about these terms? Email wayne@mrprompts.ai.
          </p>
        </section>
      </div>
    </article>
  );
}
