"use client";

import { useState } from "react";
import Link from "next/link";

export default function WikiBuilderPage() {
  const [topic, setTopic] = useState("");
  const [sources, setSources] = useState(["", "", ""]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    claude_md: string;
    articles: { filename: string; content: string }[];
  } | null>(null);
  const [error, setError] = useState("");

  function updateSource(index: number, value: string) {
    const next = [...sources];
    next[index] = value;
    setSources(next);
  }

  function addSource() {
    if (sources.length < 5) {
      setSources([...sources, ""]);
    }
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

      if (!res.ok) {
        throw new Error("Generation failed. Please try again.");
      }

      const text = await res.text();
      const parsed = JSON.parse(text);
      setResult(parsed);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function downloadVault() {
    if (!result) return;

    // Build vault files as a single downloadable text bundle
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
    a.download = `${topic.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}-wiki-vault.md`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/tools"
        className="text-sm text-emerald-600 hover:text-emerald-700"
      >
        &larr; All tools
      </Link>
      <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
        Wiki Builder
      </h1>
      <p className="mt-3 text-zinc-500">
        Enter a topic and paste your source materials. We will generate a
        complete AI knowledge base with a CLAUDE.md schema and interlinked
        articles.
      </p>

      {!result ? (
        <div className="mt-10 space-y-6">
          {/* Topic */}
          <div>
            <label className="block text-sm font-semibold">Topic</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. AI Prompt Engineering"
              className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-900"
            />
          </div>

          {/* Sources */}
          <div>
            <label className="block text-sm font-semibold">
              Source Materials ({sources.length}/5)
            </label>
            <p className="mt-1 text-xs text-zinc-400">
              Paste articles, notes, or any text you want compiled into wiki
              articles.
            </p>
            <div className="mt-3 space-y-3">
              {sources.map((source, i) => (
                <textarea
                  key={i}
                  value={source}
                  onChange={(e) => updateSource(i, e.target.value)}
                  placeholder={`Source ${i + 1} — paste article or notes here`}
                  rows={4}
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-900"
                />
              ))}
            </div>
            {sources.length < 5 && (
              <button
                onClick={addSource}
                className="mt-2 text-sm font-medium text-emerald-600 hover:text-emerald-700"
              >
                + Add another source
              </button>
            )}
          </div>

          {error && (
            <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
              {error}
            </p>
          )}

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-8 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50"
          >
            {loading ? "Generating your wiki..." : "Generate Wiki Vault"}
          </button>

          {loading && (
            <p className="text-sm text-zinc-400">
              This takes 30-60 seconds. Claude is reading your sources and
              writing interlinked articles.
            </p>
          )}
        </div>
      ) : (
        <div className="mt-10 space-y-8">
          {/* Success */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-900/20">
            <h2 className="text-lg font-bold text-emerald-800 dark:text-emerald-400">
              Your wiki vault is ready!
            </h2>
            <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-500">
              {result.articles.length} articles generated with a CLAUDE.md
              schema.
            </p>
            <button
              onClick={downloadVault}
              className="mt-4 inline-flex h-10 items-center justify-center rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Download Vault
            </button>
          </div>

          {/* Preview CLAUDE.md */}
          <div>
            <h3 className="font-semibold">CLAUDE.md</h3>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-xs leading-relaxed text-zinc-300">
              {result.claude_md}
            </pre>
          </div>

          {/* Preview articles */}
          {result.articles.map((article) => (
            <div key={article.filename}>
              <h3 className="font-semibold">{article.filename}</h3>
              <pre className="mt-2 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-xs leading-relaxed text-zinc-300">
                {article.content}
              </pre>
            </div>
          ))}

          <button
            onClick={() => {
              setResult(null);
              setTopic("");
              setSources(["", "", ""]);
            }}
            className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
          >
            Build another wiki
          </button>
        </div>
      )}
    </div>
  );
}
