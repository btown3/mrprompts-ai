import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How MrPrompts collects, uses, and protects your personal information.",
  alternates: { canonical: "https://www.mrprompts.ai/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20 prose prose-zinc dark:prose-invert">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-zinc-400">Last updated: April 9, 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        <section>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Who we are</h2>
          <p>
            MrPrompts is operated by Wayne Cederholm. Our website is
            www.mrprompts.ai. You can reach us at wayne@mrprompts.ai.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">What data we collect</h2>
          <p>We collect the following personal information:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li><strong>Email address</strong> — when you download a free guide, join the newsletter waitlist, or submit the enterprise contact form.</li>
            <li><strong>Name, company, and team size</strong> — when you submit the enterprise contact form.</li>
            <li><strong>Payment information</strong> — processed securely by Stripe. We do not store your card details.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">How we use your data</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>To deliver the guides, products, or services you requested.</li>
            <li>To send you our weekly newsletter (you can unsubscribe anytime).</li>
            <li>To respond to enterprise training inquiries.</li>
            <li>To process payments for workshops and paid guides.</li>
          </ul>
          <p className="mt-2">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Third-party services</h2>
          <p>We use the following services to operate the site:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li><strong>Vercel</strong> — hosting and deployment.</li>
            <li><strong>Stripe</strong> — payment processing. Stripe's privacy policy applies to payment data.</li>
            <li><strong>Resend</strong> — transactional email delivery.</li>
            <li><strong>Substack</strong> — newsletter distribution. Substack's privacy policy applies to newsletter subscriptions.</li>
            <li><strong>Anthropic (Claude API)</strong> — powers the Wiki Builder tool. Source text you submit is sent to Anthropic for processing and is not stored by us.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Cookies</h2>
          <p>
            We use localStorage in your browser to remember guide access after
            purchase or email submission. We do not use tracking cookies. We do
            not use Google Analytics or any third-party analytics service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Your rights</h2>
          <p>
            You can request access to, correction of, or deletion of your
            personal data at any time by emailing wayne@mrprompts.ai. You can
            unsubscribe from our newsletter using the link in any email.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The "last updated" date
            at the top of this page reflects the most recent revision.
          </p>
        </section>
      </div>
    </article>
  );
}
