export function PromptFramework() {
  const layers = [
    {
      number: "1",
      name: "Language Awareness",
      description: "Match vocabulary to your audience",
      color: "#3b82f6",
      example: "Technical vs. executive vs. creative",
    },
    {
      number: "2",
      name: "Empathy",
      description: "Understand the reader's context and needs",
      color: "#8b5cf6",
      example: "Pain points, goals, constraints",
    },
    {
      number: "3",
      name: "Point of View",
      description: "Choose the right voice and perspective",
      color: "#ec4899",
      example: "First person, third person, advisory",
    },
    {
      number: "4",
      name: "Organizational Power",
      description: "Account for hierarchy and authority",
      color: "#f59e0b",
      example: "Peer, manager, executive, external",
    },
  ];

  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-zinc-400">
        The 4-Layer Prompt Framework
      </p>
      <div className="space-y-3">
        {layers.map((layer) => (
          <div
            key={layer.number}
            className="flex items-start gap-4 rounded-lg bg-white p-4 dark:bg-zinc-800"
          >
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white"
              style={{ backgroundColor: layer.color }}
            >
              {layer.number}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <p className="font-semibold">{layer.name}</p>
              </div>
              <p className="mt-0.5 text-sm text-zinc-500">{layer.description}</p>
              <p className="mt-1 text-xs text-zinc-400">e.g. {layer.example}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg border border-dashed border-emerald-300 bg-emerald-50 p-3 text-center dark:border-emerald-800 dark:bg-emerald-900/20">
        <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
          Generic prompt + 4 layers = precise, context-aware output
        </p>
      </div>
    </div>
  );
}
