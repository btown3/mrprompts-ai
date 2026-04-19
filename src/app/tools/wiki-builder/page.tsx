"use client";

import { useState } from "react";
import Link from "next/link";
import JSZip from "jszip";

type Source = { title: string; content: string };

type WikiArticle = {
  filename: string;
  title: string;
  tags: string[];
  sources: string[];
  summary: string;
  content: string;
};

type Query = {
  filename: string;
  title: string;
  description: string;
  prompt: string;
};

type WikiResult = {
  claude_md: string;
  articles: WikiArticle[];
  queries: Query[];
};

const DEFAULT_SOURCE: Source = { title: "", content: "" };

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "source";
}

export default function WikiBuilderPage() {
  const [topic, setTopic] = useState("");
  const [sources, setSources] = useState<Source[]>([
    { ...DEFAULT_SOURCE },
    { ...DEFAULT_SOURCE },
  ]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<WikiResult | null>(null);
  const [rawSources, setRawSources] = useState<Source[]>([]);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"schema" | "wiki" | "queries" | "sources">("schema");
  const [selectedArticle, setSelectedArticle] = useState(0);
  const [selectedQuery, setSelectedQuery] = useState(0);

  function updateSource(index: number, key: keyof Source, value: string) {
    const next = [...sources];
    next[index] = { ...next[index], [key]: value };
    setSources(next);
  }

  function addSource() {
    setSources([...sources, { ...DEFAULT_SOURCE }]);
  }

  function removeSource(index: number) {
    if (sources.length <= 1) return;
    setSources(sources.filter((_, i) => i !== index));
  }

  async function handleGenerate() {
    setError("");
    const filled = sources.filter((s) => s.content.trim());
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
        body: JSON.stringify({
          topic: topic.trim(),
          sources: filled.map((s, i) => ({
            title: s.title.trim() || `Source ${i + 1}`,
            content: s.content.trim(),
          })),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Generation failed.");
      }

      setResult(data);
      setRawSources(filled);
      setActiveTab("schema");
      setSelectedArticle(0);
      setSelectedQuery(0);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  async function downloadZip() {
    if (!result) return;

    const zip = new JSZip();
    const vaultName = slugify(topic);
    const root = zip.folder(vaultName);
    if (!root) return;

    root.file("CLAUDE.md", result.claude_md);

    const readme = `# ${topic}\n\nA compounding knowledge base generated with the MrPrompts Wiki Builder.\n\n## Structure\n- \`CLAUDE.md\` — the schema and rules for this vault\n- \`Sources/\` — raw source materials preserved for traceability\n- \`Wiki/\` — atomic articles synthesized from sources, linked with [[wikilinks]]\n- \`Queries/\` — ready-to-paste prompts that pull from the vault\n\n## How to grow it\n1. Drop new sources into \`Sources/\`\n2. Use \`Queries/add-new-source.md\` to have an LLM fold them into the Wiki\n3. Add new query templates as your needs evolve\n\nGenerated: ${new Date().toISOString().split("T")[0]}\n`;
    root.file("README.md", readme);

    const sourcesFolder = root.folder("Sources");
    if (sourcesFolder) {
      rawSources.forEach((s, i) => {
        const filename = `${String(i + 1).padStart(2, "0")}-${slugify(s.title || `source-${i + 1}`)}.md`;
        const frontmatter = `---\ntitle: ${s.title || `Source ${i + 1}`}\nadded: ${new Date().toISOString().split("T")[0]}\n---\n\n`;
        sourcesFolder.file(filename, frontmatter + s.content);
      });
    }

    const wikiFolder = root.folder("Wiki");
    if (wikiFolder) {
      result.articles.forEach((a) => {
        wikiFolder.file(a.filename, a.content);
      });
    }

    const queriesFolder = root.folder("Queries");
    if (queriesFolder) {
      result.queries.forEach((q) => {
        const body = `# ${q.title}\n\n${q.description}\n\n## Prompt\n\n\`\`\`\n${q.prompt}\n\`\`\`\n`;
        queriesFolder.file(q.filename, body);
      });

      const addSourceQuery = `# Add New Source\n\nFold a new source into the existing Wiki without breaking links.\n\n## Prompt\n\n\`\`\`\nRead CLAUDE.md and every file in Wiki/. Then read the new file I just added to Sources/.\n\nDecide:\n1. Does this source extend an existing article? If yes, update that article and preserve all existing [[wikilinks]].\n2. Does it warrant a new article? If yes, create one following the schema in CLAUDE.md and link it from at least 2 existing articles.\n3. Update any article whose claims are contradicted or refined by the new source. Cite the source in the sources: frontmatter field.\n\nReturn a list of files changed, files created, and a one-line reason for each change.\n\`\`\`\n`;
      queriesFolder.file("add-new-source.md", addSourceQuery);
    }

    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${vaultName}-vault.zip`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function resetForm() {
    setResult(null);
    setTopic("");
    setSources([{ ...DEFAULT_SOURCE }, { ...DEFAULT_SOURCE }]);
    setRawSources([]);
    setError("");
  }

  const inputClass =
    "w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white";

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <Link href="/tools" className="text-sm text-emerald-600 hover:text-emerald-700">
        &larr; All tools
      </Link>

      <div className="mt-4">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
          AI-Powered Tool
        </span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          Wiki Builder
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-500">
          Paste your sources. Get back a compounding knowledge base with a CLAUDE.md
          schema, atomic wiki articles with real wikilinks, ready-to-use query
          templates, and preserved sources — packaged as a downloadable vault.
        </p>
      </div>

      {!result ? (
        <div className="mt-10 space-y-6">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <label className="block text-sm font-semibold">Topic</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. Prompt Engineering for Non-Developers"
              className={`mt-2 ${inputClass}`}
            />
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold">Source Materials</h2>
                <p className="mt-1 text-xs text-zinc-400">
                  Paste articles, notes, transcripts, or any text. Each source is
                  preserved in the downloaded vault.
                </p>
              </div>
              <span className="text-xs text-zinc-400">{sources.length} source{sources.length === 1 ? "" : "s"}</span>
            </div>

            <div className="mt-4 space-y-4">
              {sources.map((source, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800"
                >
                  <div className="flex items-center justify-between gap-3">
                    <input
                      type="text"
                      value={source.title}
                      onChange={(e) => updateSource(i, "title", e.target.value)}
                      placeholder={`Source ${i + 1} title (optional)`}
                      className="flex-1 rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm outline-none focus:border-emerald-500 dark:border-zinc-700"
                    />
                    {sources.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeSource(i)}
                        className="text-xs font-medium text-zinc-400 transition hover:text-red-600"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <textarea
                    value={source.content}
                    onChange={(e) => updateSource(i, "content", e.target.value)}
                    placeholder="Paste the source text here"
                    rows={5}
                    className={`mt-3 ${inputClass} resize-y`}
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addSource}
              className="mt-4 text-sm font-medium text-emerald-600 hover:text-emerald-700"
            >
              + Add another source
            </button>
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
            {loading ? "Generating vault..." : "Generate Wiki Vault"}
          </button>

          {loading && (
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
              This takes 30-90 seconds. Reading your sources, extracting atomic
              concepts, writing articles, resolving wikilinks, and generating
              query templates.
            </div>
          )}
        </div>
      ) : (
        <div className="mt-10 space-y-6">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-900/20">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-emerald-800 dark:text-emerald-400">
                  Your vault is ready
                </h2>
                <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-500">
                  {result.articles.length} articles • {result.queries.length} queries •{" "}
                  {rawSources.length} sources preserved
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={downloadZip}
                  className="inline-flex h-10 items-center justify-center rounded-lg bg-emerald-600 px-5 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Download Vault (.zip)
                </button>
                <button
                  onClick={resetForm}
                  className="inline-flex h-10 items-center justify-center rounded-lg border border-emerald-300 bg-white px-5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-700 dark:bg-transparent dark:text-emerald-400 dark:hover:bg-emerald-900/40"
                >
                  Build another
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {(
              [
                ["schema", "CLAUDE.md"],
                ["wiki", `Wiki (${result.articles.length})`],
                ["queries", `Queries (${result.queries.length})`],
                ["sources", `Sources (${rawSources.length})`],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeTab === key
                    ? "bg-emerald-600 text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {activeTab === "schema" && (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h3 className="text-sm font-semibold text-zinc-500">CLAUDE.md</h3>
              <pre className="mt-3 max-h-[500px] overflow-auto rounded-xl bg-zinc-950 p-4 text-sm leading-6 text-zinc-100">
                {result.claude_md}
              </pre>
            </div>
          )}

          {activeTab === "wiki" && (
            <div className="grid gap-4 md:grid-cols-[220px_1fr]">
              <nav className="space-y-1">
                {result.articles.map((a, i) => (
                  <button
                    key={a.filename}
                    onClick={() => setSelectedArticle(i)}
                    className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                      selectedArticle === i
                        ? "bg-emerald-600 text-white"
                        : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                    }`}
                  >
                    <div className="font-medium">{a.title}</div>
                    <div className="truncate text-xs opacity-70">{a.filename}</div>
                  </button>
                ))}
              </nav>
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                {(() => {
                  const a = result.articles[selectedArticle];
                  if (!a) return null;
                  return (
                    <>
                      <h3 className="text-lg font-bold">{a.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {a.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                      <p className="mt-3 text-sm text-zinc-500">{a.summary}</p>
                      <pre className="mt-4 max-h-[500px] overflow-auto rounded-xl bg-zinc-950 p-4 text-sm leading-6 text-zinc-100">
                        {a.content}
                      </pre>
                    </>
                  );
                })()}
              </div>
            </div>
          )}

          {activeTab === "queries" && (
            <div className="grid gap-4 md:grid-cols-[220px_1fr]">
              <nav className="space-y-1">
                {result.queries.map((q, i) => (
                  <button
                    key={q.filename}
                    onClick={() => setSelectedQuery(i)}
                    className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                      selectedQuery === i
                        ? "bg-emerald-600 text-white"
                        : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                    }`}
                  >
                    <div className="font-medium">{q.title}</div>
                    <div className="truncate text-xs opacity-70">{q.filename}</div>
                  </button>
                ))}
              </nav>
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                {(() => {
                  const q = result.queries[selectedQuery];
                  if (!q) return null;
                  return (
                    <>
                      <h3 className="text-lg font-bold">{q.title}</h3>
                      <p className="mt-2 text-sm text-zinc-500">{q.description}</p>
                      <pre className="mt-4 max-h-[500px] overflow-auto rounded-xl bg-zinc-950 p-4 text-sm leading-6 text-zinc-100">
                        {q.prompt}
                      </pre>
                    </>
                  );
                })()}
              </div>
            </div>
          )}

          {activeTab === "sources" && (
            <div className="space-y-4">
              {rawSources.map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <h3 className="text-sm font-semibold">
                    {s.title || `Source ${i + 1}`}
                  </h3>
                  <pre className="mt-3 max-h-[300px] overflow-auto whitespace-pre-wrap rounded-lg bg-zinc-50 p-4 text-xs leading-6 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                    {s.content}
                  </pre>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
