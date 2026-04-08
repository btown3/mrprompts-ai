import Link from "next/link";

export default function WikisPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        Wiki Vaults
      </h1>
      <p className="mt-3 max-w-xl text-zinc-500">
        Complete Obsidian knowledge bases you can download and start using
        immediately. Each vault is interlinked, indexed, and ready to query.
      </p>

      <div className="mt-12 rounded-xl border border-dashed border-zinc-300 p-12 text-center dark:border-zinc-700">
        <p className="text-lg font-semibold">First vault dropping soon.</p>
        <p className="mt-2 text-sm text-zinc-500">
          The AI Prompt Engineering vault is in final compilation.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          &larr; Back home
        </Link>
      </div>
    </div>
  );
}
