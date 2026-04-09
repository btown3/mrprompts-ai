"use client";

import { useState } from "react";
import Link from "next/link";

export default function KnowledgeBasesTrackPage() {
  const [step, setStep] = useState(1);
  const [topic, setTopic] = useState("");
  const [sources, setSources] = useState(["", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<{
    claude_md: string;
    articles: { filename: string; content: string }[];
  } | null>(null);

  function updateSource(index: number, value: string) {
    const next = [...sources];
    next[index] = value;
    setSources(next);
  }

  function addSource() {
    if (sources.length < 5) setSources([...sources, ""]);
  }

  async function handleGenerate() {
    setError("");
    const filled = sources.filter((s) => s.trim());
    if (!topic.trim() || filled.length === 0) {
      setError("Enter a topic and at least one source.");
      return;
    }
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/generate-wiki", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: topic.trim(), sources: filled }),
      });
      if (!res.ok) throw new Error("Generation failed. Please try again.");
      const text = await res.text();
      const parsed = JSON.parse(text);
      setResult(parsed);
      setStep(4);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function downloadVault() {
    if (!result) return;
    const files: string[] = [];
    files.push("=== CLAUDE.md ===");
    files.push(result.claude_md);
    files.push("");
    for (const article of result.articles) {
      files.push(`=== Wiki/${article.filename} ===`);
      files.push(article.content);
      files.push("");
    }
    const blob = new Blob([files.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${topic.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}-knowledge-base.md`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function reset() {
    setStep(1);
    setTopic("");
    setSources(["", "", ""]);
    setResult(null);
    setError("");
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/build"
        className="text-sm text-emerald-600 hover:text-emerald-700"
      >
        &larr; All tracks
      </Link>

      <div className="mt-6">
        <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
          Most Popular
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          Build a Knowledge Base
        </h1>
        <p className="mt-3 text-lg text-zinc-500">
          Pick a topic, add your sources, and build a complete AI knowledge base
          right here. No downloads, no setup, no coding. You will walk away
          with a structured knowledge base you can use immediately.
        </p>
      </div>

      {/* Progress bar */}
      <div className="mt-10 flex gap-2">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`h-2 flex-1 rounded-full transition ${
              s <= step
                ? "bg-emerald-500"
                : "bg-zinc-200 dark:bg-zinc-800"
            }`}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-xs text-zinc-400">
        <span>Pick topic</span>
        <span>Add sources</span>
        <span>Build</span>
        <span>Download</span>
      </div>

      {/* Step 1: Topic */}
      {step === 1 && (
        <div className="mt-10">
          <div className="rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                1
              </span>
              <h2 className="text-xl font-bold">What do you want to build a knowledge base about?</h2>
            </div>
            <p className="mt-3 text-sm text-zinc-500">
              Pick one topic you care about. Narrow beats broad. "AI prompt
              engineering for marketing" is better than "AI." You can always
              expand later.
            </p>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. AI Prompt Engineering, Personal Finance, Content Strategy"
              className="mt-6 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-900"
            />
            <div className="mt-4 text-xs text-zinc-400">
              <p className="font-medium">Good topics for your first knowledge base:</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {[
                  "AI Prompt Engineering",
                  "Sales Methodology",
                  "Content Marketing",
                  "Leadership Frameworks",
                  "Product Management",
                  "Data Analysis",
                ].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTopic(t)}
                    className="rounded-full border border-zinc-200 px-3 py-1 text-xs transition hover:border-emerald-300 hover:text-emerald-600 dark:border-zinc-700"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              if (topic.trim()) setStep(2);
              else setError("Enter a topic to continue.");
            }}
            disabled={!topic.trim()}
            className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-8 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50"
          >
            Next: Add Sources
          </button>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      )}

      {/* Step 2: Sources */}
      {step === 2 && (
        <div className="mt-10">
          <div className="rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                2
              </span>
              <h2 className="text-xl font-bold">Add your source materials</h2>
            </div>
            <p className="mt-3 text-sm text-zinc-500">
              Paste articles, notes, or any text related to{" "}
              <strong className="text-zinc-700 dark:text-zinc-300">{topic}</strong>.
              These are the raw ingredients your AI will work with. Quality
              matters more than quantity. 3 good sources beat 10 mediocre ones.
            </p>

            <div className="mt-6 space-y-4">
              {sources.map((source, i) => (
                <div key={i}>
                  <label className="text-xs font-medium text-zinc-400">
                    Source {i + 1}
                  </label>
                  <textarea
                    value={source}
                    onChange={(e) => updateSource(i, e.target.value)}
                    placeholder={
                      i === 0
                        ? "Paste an article, blog post, or your own notes here..."
                        : `Source ${i + 1} (optional)`
                    }
                    rows={5}
                    className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-900"
                  />
                </div>
              ))}
            </div>
            {sources.length < 5 && (
              <button
                onClick={addSource}
                className="mt-3 text-sm font-medium text-emerald-600 hover:text-emerald-700"
              >
                + Add another source
              </button>
            )}
          </div>
          <div className="mt-6 flex gap-3">
            <button
              onClick={() => setStep(1)}
              className="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-300 px-6 text-sm font-semibold transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
            >
              Back
            </button>
            <button
              onClick={() => {
                const filled = sources.filter((s) => s.trim());
                if (filled.length > 0) {
                  setStep(3);
                  setError("");
                } else {
                  setError("Paste at least one source to continue.");
                }
              }}
              className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-8 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Next: Build It
            </button>
          </div>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      )}

      {/* Step 3: Build */}
      {step === 3 && (
        <div className="mt-10">
          <div className="rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                3
              </span>
              <h2 className="text-xl font-bold">Build your knowledge base</h2>
            </div>
            <p className="mt-3 text-sm text-zinc-500">
              Here is what the AI will create from your sources:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-600">&#10003;</span>
                <span>A <strong>CLAUDE.md schema</strong> defining your topic, structure, format, and rules</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-600">&#10003;</span>
                <span><strong>3-5 interlinked wiki articles</strong> synthesized from your sources</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-600">&#10003;</span>
                <span>Proper <strong>citations</strong> linking each article back to your source materials</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-600">&#10003;</span>
                <span><strong>[[Wikilinks]]</strong> connecting related concepts across articles</span>
              </li>
            </ul>

            <div className="mt-6 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
              <p className="text-xs font-medium text-zinc-400">Your build</p>
              <p className="mt-1 text-sm"><strong>Topic:</strong> {topic}</p>
              <p className="mt-1 text-sm"><strong>Sources:</strong> {sources.filter((s) => s.trim()).length} provided</p>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              onClick={() => setStep(2)}
              className="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-300 px-6 text-sm font-semibold transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
            >
              Back
            </button>
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-8 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50"
            >
              {loading ? "Building your knowledge base..." : "Build It"}
            </button>
          </div>
          {loading && (
            <p className="mt-3 text-sm text-zinc-400">
              This takes 30-60 seconds. The AI is reading your sources,
              writing a schema, and generating interlinked articles.
            </p>
          )}
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      )}

      {/* Step 4: Results */}
      {step === 4 && result && (
        <div className="mt-10">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-900/20">
            <h2 className="text-lg font-bold text-emerald-800 dark:text-emerald-400">
              Your knowledge base is ready!
            </h2>
            <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-500">
              {result.articles.length} articles generated with a CLAUDE.md
              schema for <strong>{topic}</strong>.
            </p>
            <button
              onClick={downloadVault}
              className="mt-4 inline-flex h-10 items-center justify-center rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Download Your Knowledge Base
            </button>
          </div>

          {/* CLAUDE.md preview */}
          <div className="mt-8">
            <h3 className="font-semibold">Your CLAUDE.md Schema</h3>
            <p className="mt-1 text-xs text-zinc-400">
              This is the instruction file that controls your knowledge base.
              It tells the AI your topic, structure, format, and rules.{" "}
              <Link
                href="/learn/what-is-claude-md"
                className="text-emerald-600 hover:text-emerald-700"
              >
                Learn more about CLAUDE.md
              </Link>
            </p>
            <pre className="mt-3 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-xs leading-relaxed text-zinc-300">
              {result.claude_md}
            </pre>
          </div>

          {/* Article previews */}
          {result.articles.map((article) => (
            <div key={article.filename} className="mt-8">
              <h3 className="font-semibold">{article.filename}</h3>
              <pre className="mt-3 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-xs leading-relaxed text-zinc-300">
                {article.content}
              </pre>
            </div>
          ))}

          {/* What's next */}
          <div className="mt-12 rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
            <h2 className="text-xl font-bold">What to do next</h2>
            <p className="mt-3 text-sm text-zinc-500">
              You have a working knowledge base. Here is how to make it grow:
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">1</span>
                <span><strong>Add more sources.</strong> Drop new articles and notes into your Sources folder. The more sources, the richer your wiki.</span>
              </div>
              <div className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">2</span>
                <span><strong>Query your wiki.</strong> Ask your AI questions against the wiki. "What are the main approaches to X?" Good answers get filed back in.</span>
              </div>
              <div className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">3</span>
                <span><strong>Refine your schema.</strong> As your wiki grows, update the CLAUDE.md to add categories, tighten rules, and improve format. <Link href="/guides/claude-md-masterclass" className="text-emerald-600 hover:text-emerald-700">Read the CLAUDE.md Masterclass</Link></span>
              </div>
              <div className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">4</span>
                <span><strong>Automate it.</strong> Set up scheduled updates so your wiki builds itself. <Link href="/guides/wiki-automation" className="text-emerald-600 hover:text-emerald-700">Learn about wiki automation</Link></span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <button
              onClick={reset}
              className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
            >
              Build another knowledge base
            </button>
          </div>
        </div>
      )}

      {/* Learn more section (always visible) */}
      {step < 4 && (
        <div className="mt-16 border-t border-zinc-200 pt-12 dark:border-zinc-800">
          <h2 className="text-lg font-bold">Want to learn the system first?</h2>
          <p className="mt-2 text-sm text-zinc-500">
            If you want to understand how knowledge bases work before building
            one, these guides explain the full system.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/guides/your-first-wiki"
              className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800"
            >
              <p className="text-sm font-semibold">Your First Wiki in 20 Minutes</p>
              <p className="mt-1 text-xs text-zinc-500">Step-by-step manual approach. Free.</p>
            </Link>
            <Link
              href="/guides/claude-md-masterclass"
              className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800"
            >
              <p className="text-sm font-semibold">The CLAUDE.md Masterclass</p>
              <p className="mt-1 text-xs text-zinc-500">Deep dive on schema files. Free.</p>
            </Link>
            <Link
              href="/learn/ai-knowledge-base-guide"
              className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800"
            >
              <p className="text-sm font-semibold">How AI Knowledge Bases Work</p>
              <p className="mt-1 text-xs text-zinc-500">The complete system explained.</p>
            </Link>
            <Link
              href="/learn/what-is-claude-md"
              className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800"
            >
              <p className="text-sm font-semibold">What Is CLAUDE.md?</p>
              <p className="mt-1 text-xs text-zinc-500">The schema file explained.</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
