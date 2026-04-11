export function FolderStructure() {
  const items = [
    { depth: 0, icon: "📁", name: "my-knowledge-base/", color: "#059669" },
    { depth: 1, icon: "📄", name: "README.md", color: "#71717a", label: "Start here" },
    { depth: 1, icon: "⚙️", name: "CLAUDE.md", color: "#059669", label: "Give this to your AI" },
    { depth: 1, icon: "📁", name: "prompts/", color: "#3b82f6" },
    { depth: 2, icon: "1️⃣", name: "01-decompose-topic.md", color: "#71717a" },
    { depth: 2, icon: "2️⃣", name: "02-research-questions.md", color: "#71717a" },
    { depth: 2, icon: "3️⃣", name: "03-compile-article.md", color: "#71717a" },
    { depth: 2, icon: "4️⃣", name: "04-cross-link.md", color: "#71717a" },
    { depth: 2, icon: "5️⃣", name: "05-find-gaps.md", color: "#71717a" },
    { depth: 2, icon: "6️⃣", name: "06-expand-article.md", color: "#71717a" },
    { depth: 2, icon: "7️⃣", name: "07-quality-check.md", color: "#71717a" },
    { depth: 1, icon: "📁", name: "sources/", color: "#f59e0b" },
    { depth: 2, icon: "📁", name: "articles/", color: "#71717a" },
    { depth: 2, icon: "📁", name: "notes/", color: "#71717a" },
    { depth: 2, icon: "📁", name: "reference/", color: "#71717a" },
    { depth: 1, icon: "📁", name: "wiki/", color: "#8b5cf6" },
    { depth: 1, icon: "📁", name: "queries/", color: "#ec4899" },
  ];

  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-400">
        Knowledge Base Folder Structure
      </p>
      <div className="space-y-1 font-mono text-sm">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2"
            style={{ paddingLeft: `${item.depth * 20}px` }}
          >
            <span>{item.icon}</span>
            <span style={{ color: item.color }} className="font-medium">
              {item.name}
            </span>
            {"label" in item && item.label && (
              <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-xs text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
