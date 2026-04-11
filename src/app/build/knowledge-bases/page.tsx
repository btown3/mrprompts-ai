"use client";

import { useState } from "react";
import Link from "next/link";
import { AuthGate } from "@/app/components/AuthGate";
import { useAuth } from "@/app/components/AuthProvider";
import { trackDownload } from "@/lib/track-download";

type KitFile = { path: string; content: string };

export default function KnowledgeBasesTrackPage() {
  const { user } = useAuth();
  const [mode, setMode] = useState<"choose" | "kit" | "builder">("choose");
  const [topic, setTopic] = useState("");
  const [email, setEmail] = useState("");
  const [kitLoading, setKitLoading] = useState(false);
  const [kitDone, setKitDone] = useState(false);
  const [error, setError] = useState("");

  // Builder state
  const [builderStep, setBuilderStep] = useState(1);
  const [sources, setSources] = useState(["", "", ""]);
  const [builderLoading, setBuilderLoading] = useState(false);
  const [builderResult, setBuilderResult] = useState<{
    claude_md: string;
    articles: { filename: string; content: string }[];
  } | null>(null);

  async function downloadKit() {
    setError("");
    if (!topic.trim()) {
      setError("Enter a topic.");
      return;
    }
    setKitLoading(true);
    try {
      const res = await fetch("/api/download-kit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: topic.trim(),
          email: email.trim() || null,
        }),
      });
      if (!res.ok) throw new Error("Download failed.");
      const { files } = (await res.json()) as { files: KitFile[] };

      // Bundle all files into a single downloadable text file
      const bundle = files
        .filter((f) => f.content)
        .map((f) => `${"=".repeat(60)}\n📁 ${f.path}\n${"=".repeat(60)}\n\n${f.content}`)
        .join("\n\n");

      const blob = new Blob([bundle], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${topic.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}-knowledge-base-starter-kit.md`;
      a.click();
      URL.revokeObjectURL(url);
      if (user) trackDownload(user.id, "knowledge-base-starter-kit");
      setKitDone(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setKitLoading(false);
    }
  }

  // Builder functions
  function updateSource(index: number, value: string) {
    const next = [...sources];
    next[index] = value;
    setSources(next);
  }

  async function handleBuild() {
    setError("");
    const filled = sources.filter((s) => s.trim());
    if (!topic.trim() || filled.length === 0) {
      setError("Enter a topic and at least one source.");
      return;
    }
    setBuilderLoading(true);
    setBuilderResult(null);
    try {
      const res = await fetch("/api/generate-wiki", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: topic.trim(), sources: filled }),
      });
      if (!res.ok) throw new Error("Generation failed. Please try again.");
      const text = await res.text();
      setBuilderResult(JSON.parse(text));
      setBuilderStep(3);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setBuilderLoading(false);
    }
  }

  function downloadBuilderResult() {
    if (!builderResult) return;
    if (user) trackDownload(user.id, "knowledge-base-starter-kit");
    const lines: string[] = [];
    lines.push("=== CLAUDE.md ===\n");
    lines.push(builderResult.claude_md);
    for (const a of builderResult.articles) {
      lines.push(`\n=== Wiki/${a.filename} ===\n`);
      lines.push(a.content);
    }
    const blob = new Blob([lines.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${topic.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}-knowledge-base.md`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/build" className="text-sm text-emerald-600 hover:text-emerald-700">
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
          Choose your path: download the complete starter kit with 7 structured
          prompts and folder system, or let our AI build the first draft for you.
        </p>
      </div>

      <div className="mt-10">
      <AuthGate>

      {/* Mode chooser */}
      {mode === "choose" && (
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <button
            onClick={() => setMode("kit")}
            className="flex flex-col rounded-xl border-2 border-zinc-200 p-6 text-left transition hover:border-emerald-400 dark:border-zinc-800 dark:hover:border-emerald-600"
          >
            <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 w-fit">
              Recommended
            </span>
            <h2 className="mt-4 text-lg font-bold">Download the Starter Kit</h2>
            <p className="mt-2 text-sm text-zinc-500">
              Get the complete folder structure, CLAUDE.md schema, and 7
              numbered prompts. Drop it into any AI tool and follow the steps.
              You own everything.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-zinc-500">
              <li className="flex gap-2"><span className="text-emerald-600">&#10003;</span> Organized folder structure</li>
              <li className="flex gap-2"><span className="text-emerald-600">&#10003;</span> Production-ready CLAUDE.md</li>
              <li className="flex gap-2"><span className="text-emerald-600">&#10003;</span> 7 numbered prompts (run in order)</li>
              <li className="flex gap-2"><span className="text-emerald-600">&#10003;</span> Works with any AI (Claude, ChatGPT, etc.)</li>
              <li className="flex gap-2"><span className="text-emerald-600">&#10003;</span> Customized to your topic</li>
            </ul>
          </button>

          <button
            onClick={() => setMode("builder")}
            className="flex flex-col rounded-xl border-2 border-zinc-200 p-6 text-left transition hover:border-emerald-400 dark:border-zinc-800 dark:hover:border-emerald-600"
          >
            <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 w-fit">
              Quick Start
            </span>
            <h2 className="mt-4 text-lg font-bold">AI Builds It For You</h2>
            <p className="mt-2 text-sm text-zinc-500">
              Paste your sources and our AI generates a CLAUDE.md schema plus
              3-5 interlinked articles. Get a working knowledge base in 60
              seconds.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-zinc-500">
              <li className="flex gap-2"><span className="text-emerald-600">&#10003;</span> AI-generated articles from your sources</li>
              <li className="flex gap-2"><span className="text-emerald-600">&#10003;</span> Interlinked wiki with citations</li>
              <li className="flex gap-2"><span className="text-emerald-600">&#10003;</span> Ready in 60 seconds</li>
              <li className="flex gap-2"><span className="text-emerald-600">&#10003;</span> Download everything</li>
            </ul>
          </button>
        </div>
      )}

      {/* === STARTER KIT PATH === */}
      {mode === "kit" && !kitDone && (
        <div className="mt-10">
          <button onClick={() => setMode("choose")} className="text-sm text-zinc-400 hover:text-zinc-600">&larr; Back to options</button>
          <div className="mt-6 rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
            <h2 className="text-xl font-bold">Download Your Starter Kit</h2>
            <p className="mt-2 text-sm text-zinc-500">
              Enter your topic and we will generate a complete knowledge base
              system customized for it. You get the folder structure, schema,
              and all 7 prompts.
            </p>

            {/* What's inside preview */}
            <div className="mt-6 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">What you will get</p>
              <pre className="mt-2 text-xs leading-relaxed text-zinc-500">{`my-knowledge-base/
├── README.md              ← Start here
├── CLAUDE.md              ← Give this to your AI first
├── prompts/
│   ├── 01-decompose-topic.md
│   ├── 02-research-questions.md
│   ├── 03-compile-article.md
│   ├── 04-cross-link.md
│   ├── 05-find-gaps.md
│   ├── 06-expand-article.md
│   └── 07-quality-check.md
├── sources/
│   ├── articles/
│   ├── notes/
│   └── reference/
├── wiki/
│   └── _INDEX.md
└── queries/`}</pre>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold">Topic</label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g. AI Prompt Engineering, Sales Methodology, Content Strategy"
                  className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-900"
                />
                <div className="mt-2 flex flex-wrap gap-2">
                  {["AI Prompt Engineering", "Sales Methodology", "Content Marketing", "Leadership", "Product Management", "Personal Finance"].map((t) => (
                    <button key={t} onClick={() => setTopic(t)} className="rounded-full border border-zinc-200 px-3 py-1 text-xs transition hover:border-emerald-300 hover:text-emerald-600 dark:border-zinc-700">{t}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold">Email <span className="font-normal text-zinc-400">(optional — get setup tips + newsletter)</span></label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-900"
                />
              </div>
            </div>

            {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

            <button
              onClick={downloadKit}
              disabled={kitLoading || !topic.trim()}
              className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-8 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50"
            >
              {kitLoading ? "Generating..." : "Download Starter Kit (Free)"}
            </button>
          </div>
        </div>
      )}

      {mode === "kit" && kitDone && (
        <div className="mt-10">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 dark:border-emerald-800 dark:bg-emerald-900/20">
            <h2 className="text-xl font-bold text-emerald-800 dark:text-emerald-400">
              Your starter kit is downloaded!
            </h2>
            <p className="mt-2 text-sm text-emerald-700 dark:text-emerald-500">
              Check your downloads folder for the {topic} knowledge base kit.
              {email && " We also sent setup tips to your email."}
            </p>
          </div>

          <div className="mt-8 rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
            <h2 className="text-xl font-bold">What to do now</h2>
            <div className="mt-6 space-y-4">
              <div className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">1</span>
                <span><strong>Open README.md</strong> in the downloaded file. It has the complete instructions.</span>
              </div>
              <div className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">2</span>
                <span><strong>Open your AI tool</strong> (Claude, ChatGPT, or any LLM). Give it the CLAUDE.md file first.</span>
              </div>
              <div className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">3</span>
                <span><strong>Run Prompt 01</strong> to decompose your topic into subtopics. This is your build plan.</span>
              </div>
              <div className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">4</span>
                <span><strong>Add 3-5 sources</strong> to the sources folder, then run Prompt 03 to compile articles.</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button onClick={() => { setKitDone(false); setTopic(""); setEmail(""); }} className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
              Download another kit
            </button>
          </div>
        </div>
      )}

      {/* === AI BUILDER PATH === */}
      {mode === "builder" && (
        <div className="mt-10">
          <button onClick={() => setMode("choose")} className="text-sm text-zinc-400 hover:text-zinc-600">&larr; Back to options</button>

          {builderStep === 1 && (
            <div className="mt-6 rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
              <h2 className="text-xl font-bold">What topic? What sources?</h2>
              <p className="mt-2 text-sm text-zinc-500">
                Enter your topic and paste source materials. The AI will read
                your sources and generate a structured knowledge base.
              </p>
              <div className="mt-6">
                <label className="block text-sm font-semibold">Topic</label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g. AI Prompt Engineering"
                  className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-900"
                />
              </div>
              <div className="mt-6">
                <label className="block text-sm font-semibold">Source Materials ({sources.filter(s => s.trim()).length}/5)</label>
                <p className="mt-1 text-xs text-zinc-400">Paste articles, notes, or text. One source per box.</p>
                <div className="mt-3 space-y-3">
                  {sources.map((s, i) => (
                    <textarea
                      key={i}
                      value={s}
                      onChange={(e) => updateSource(i, e.target.value)}
                      placeholder={`Source ${i + 1}`}
                      rows={4}
                      className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-900"
                    />
                  ))}
                </div>
                {sources.length < 5 && (
                  <button onClick={() => setSources([...sources, ""])} className="mt-2 text-sm font-medium text-emerald-600 hover:text-emerald-700">+ Add source</button>
                )}
              </div>
              {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
              <button
                onClick={() => {
                  if (!topic.trim() || !sources.some(s => s.trim())) {
                    setError("Enter a topic and at least one source.");
                    return;
                  }
                  setError("");
                  setBuilderStep(2);
                }}
                className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-8 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Next: Build It
              </button>
            </div>
          )}

          {builderStep === 2 && (
            <div className="mt-6 rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
              <h2 className="text-xl font-bold">Ready to build</h2>
              <div className="mt-4 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-900">
                <p className="text-sm"><strong>Topic:</strong> {topic}</p>
                <p className="mt-1 text-sm"><strong>Sources:</strong> {sources.filter(s => s.trim()).length}</p>
              </div>
              <p className="mt-4 text-sm text-zinc-500">The AI will generate a CLAUDE.md schema and 3-5 interlinked articles. This takes 30-60 seconds.</p>
              <div className="mt-6 flex gap-3">
                <button onClick={() => setBuilderStep(1)} className="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-300 px-6 text-sm font-semibold transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800">Back</button>
                <button onClick={handleBuild} disabled={builderLoading} className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-8 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50">
                  {builderLoading ? "Building..." : "Build My Knowledge Base"}
                </button>
              </div>
              {builderLoading && <p className="mt-3 text-sm text-zinc-400">Reading your sources and writing articles...</p>}
              {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
            </div>
          )}

          {builderStep === 3 && builderResult && (
            <div className="mt-6">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-900/20">
                <h2 className="text-lg font-bold text-emerald-800 dark:text-emerald-400">Done! {builderResult.articles.length} articles generated.</h2>
                <button onClick={downloadBuilderResult} className="mt-4 inline-flex h-10 items-center justify-center rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700">
                  Download Knowledge Base
                </button>
              </div>
              <div className="mt-8">
                <h3 className="font-semibold">CLAUDE.md</h3>
                <pre className="mt-2 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-xs leading-relaxed text-zinc-300">{builderResult.claude_md}</pre>
              </div>
              {builderResult.articles.map((a) => (
                <div key={a.filename} className="mt-6">
                  <h3 className="font-semibold">{a.filename}</h3>
                  <pre className="mt-2 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-xs leading-relaxed text-zinc-300">{a.content}</pre>
                </div>
              ))}
              <p className="mt-8 text-sm text-zinc-500">
                Want the full system with 7 prompts for expanding, linking, and maintaining your knowledge base?{" "}
                <button onClick={() => { setMode("kit"); setBuilderStep(1); setBuilderResult(null); }} className="font-semibold text-emerald-600 hover:text-emerald-700">Download the Starter Kit</button>
              </p>
            </div>
          )}
        </div>
      )}

      {/* Why this matters (when choosing) */}
      {mode === "choose" && (
        <section className="mt-16 rounded-xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-lg font-bold">Why this matters: what the research says</h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>The knowledge base approach builds on work by Andrej Karpathy, who demonstrated that AI agents perform dramatically better when given structured, persistent context rather than starting from scratch each session. His autoresearch framework showed that agents with access to organized reference material could autonomously run hundreds of optimization experiments — because the system compound knowledge rather than discarded it after each interaction.</p>
            <p>Anthropic&apos;s research on long-context performance confirms that AI models produce significantly more accurate and nuanced output when given structured reference documents versus ad-hoc instructions. The CLAUDE.md schema implements this directly: by giving your AI a persistent instruction set and organized knowledge, every interaction builds on previous ones instead of starting over.</p>
            <p>The starter kit and AI builder on this page implement these principles at the individual level. You provide the structure. The AI provides the synthesis. The result compounds.</p>
          </div>
        </section>
      )}

      {/* Learn more (when choosing) */}
      {mode === "choose" && (
        <div className="mt-16 border-t border-zinc-200 pt-12 dark:border-zinc-800">
          <h2 className="text-lg font-bold">Want to understand the system first?</h2>
          <p className="mt-2 text-sm text-zinc-500">These guides explain how AI knowledge bases work and why the structure matters.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link href="/learn/ai-knowledge-base-guide" className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800">
              <p className="text-sm font-semibold">How AI Knowledge Bases Work</p>
              <p className="mt-1 text-xs text-zinc-500">The complete system explained.</p>
            </Link>
            <Link href="/learn/what-is-claude-md" className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800">
              <p className="text-sm font-semibold">What Is CLAUDE.md?</p>
              <p className="mt-1 text-xs text-zinc-500">The schema file explained.</p>
            </Link>
            <Link href="/guides/your-first-wiki" className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800">
              <p className="text-sm font-semibold">Your First Wiki in 20 Minutes</p>
              <p className="mt-1 text-xs text-zinc-500">Step-by-step manual approach.</p>
            </Link>
            <Link href="/guides/claude-md-masterclass" className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800">
              <p className="text-sm font-semibold">The CLAUDE.md Masterclass</p>
              <p className="mt-1 text-xs text-zinc-500">Deep dive on schema files.</p>
            </Link>
          </div>
        </div>
      )}

      </AuthGate>
      </div>
    </div>
  );
}
