"use client";

import { useState } from "react";
import Link from "next/link";
import { PageFooterCTA } from "@/app/components/PageFooterCTA";

const OFFERINGS = [
  {
    title: "AI Foundations Workshop",
    description:
      "A half-day session that gets your entire team to a shared baseline on AI. What it can do, what it can't, how to evaluate output, and your organization's usage policy.",
    duration: "4 hours",
    teamSize: "10-50 people",
  },
  {
    title: "Department-Specific AI Training",
    description:
      "Custom training for marketing, sales, operations, finance, or HR teams. Built around your actual workflows, your tools, and your data. Each team leaves with prompts and processes they can use immediately.",
    duration: "2-3 hours per department",
    teamSize: "5-30 people",
  },
  {
    title: "AI Adoption Roadmap Engagement",
    description:
      "A 90-day guided rollout. Assessment, pilot design, metrics, and scaling plan. Includes the fluency assessment, weekly check-ins, and a board-ready results presentation at the end.",
    duration: "90 days",
    teamSize: "Organization-wide",
  },
  {
    title: "Executive AI Briefing",
    description:
      "A 90-minute session for your leadership team. No jargon. What AI means for your industry, what your competitors are doing, and what decisions need to be made this quarter.",
    duration: "90 minutes",
    teamSize: "C-suite / leadership team",
  },
];

const LOGOS_TEXT = [
  "Trusted by teams building with AI across industries.",
];

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.email || !form.name) return;
    setLoading(true);
    try {
      await fetch("/api/download-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          guide: "enterprise-inquiry",
        }),
      });
    } catch {
      // Continue regardless
    }
    setSubmitted(true);
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-800 dark:bg-emerald-900/20">
        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-400">
          Thanks! We'll be in touch within 24 hours.
        </h3>
        <p className="mt-2 text-sm text-emerald-700 dark:text-emerald-500">
          Wayne will reach out personally to discuss your team's needs.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            required
            className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Work Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            required
            className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium">Company</label>
          <input
            type="text"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Team Size</label>
          <input
            type="text"
            value={form.teamSize}
            onChange={(e) => update("teamSize", e.target.value)}
            placeholder="e.g. 25 people"
            className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">
          What are you looking for?
        </label>
        <textarea
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          rows={4}
          placeholder="Tell us about your team, what you're trying to accomplish with AI, and any specific challenges."
          className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-900"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-8 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Let's Talk"}
      </button>
    </form>
  );
}

export default function EnterprisePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Enterprise Training
        </p>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          AI training for your organization.
        </h1>
        <p className="mt-4 text-lg text-zinc-500">
          Your team is smart. They just need the right on-ramp. We run custom
          workshops and guided rollouts that get real teams building with AI, not
          sitting through another slide deck about it.
        </p>
      </div>

      {/* What we offer */}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {OFFERINGS.map((offering) => (
          <div
            key={offering.title}
            className="flex flex-col rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
          >
            <h3 className="text-lg font-semibold">{offering.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">
              {offering.description}
            </p>
            <div className="mt-4 flex gap-4 text-xs text-zinc-400">
              <span>{offering.duration}</span>
              <span>{offering.teamSize}</span>
            </div>
          </div>
        ))}
      </div>

      {/* How it works */}
      <section className="mt-20 border-y border-zinc-200 bg-zinc-50 -mx-6 px-6 py-16 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight">How it works</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                label: "Discovery call",
                desc: "30 minutes. We learn about your team, your goals, and where AI fits. No pitch. Just questions.",
              },
              {
                step: "02",
                label: "Custom proposal",
                desc: "Within 48 hours, you get a plan: what we'll cover, how we'll deliver it, what your team will build, and what it costs.",
              },
              {
                step: "03",
                label: "Deliver and measure",
                desc: "We run the training, your team builds real things, and we measure the results together. No fluff, no theory-only sessions.",
              },
            ].map((item) => (
              <div key={item.step}>
                <span className="text-3xl font-bold text-emerald-600">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{item.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MrPrompts */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight">
          Why organizations choose MrPrompts
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Builder-first approach",
              desc: "Your team doesn't watch a presentation. They build something real they can use the next day. Prompt libraries, knowledge bases, workflows.",
            },
            {
              title: "Built for non-technical teams",
              desc: "No coding required. No terminal. No jargon. We meet your team where they are and give them the on-ramp they need.",
            },
            {
              title: "Measurable outcomes",
              desc: "Every engagement has clear success metrics. Time saved, output improved, adoption measured. You'll know if it worked.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section className="mt-20 rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
        <h2 className="text-xl font-bold">Let's talk about your team.</h2>
        <p className="mt-2 text-sm text-zinc-500">
          Fill this out and Wayne will reach out personally within 24 hours.
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </section>

      {/* Free resources CTA */}
      <div className="mt-12 text-center">
        <p className="text-sm text-zinc-500">
          Not ready to talk? Start with our free resources.
        </p>
        <div className="mt-3 flex justify-center gap-6 text-sm">
          <Link
            href="/guides/ai-adoption-roadmap"
            className="font-semibold text-emerald-600 hover:text-emerald-700"
          >
            AI Adoption Roadmap &rarr;
          </Link>
          <Link
            href="/guides/team-fluency-assessment"
            className="font-semibold text-emerald-600 hover:text-emerald-700"
          >
            Team Fluency Assessment &rarr;
          </Link>
        </div>
      </div>

      <PageFooterCTA />
    </div>
  );
}
