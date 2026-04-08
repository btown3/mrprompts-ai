import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">
            Mr<span className="text-emerald-600">Prompts</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link
            href="/wikis"
            className="text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Wiki Vaults
          </Link>
          <Link
            href="/guides"
            className="text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Guides
          </Link>
          <Link
            href="/tools"
            className="text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Free Tools
          </Link>
          <Link
            href="/pricing"
            className="text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/guides/your-first-wiki"
            className="hidden rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 sm:block"
          >
            Start Free
          </Link>
        </div>
      </div>
    </header>
  );
}
