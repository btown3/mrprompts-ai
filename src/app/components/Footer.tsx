import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:justify-between">
        <div className="max-w-xs">
          <span className="text-lg font-bold tracking-tight">
            Mr<span className="text-emerald-600">Prompts</span>
          </span>
          <p className="mt-2 text-sm text-zinc-500">
            AI knowledge bases that compound. Built by someone who actually uses
            this stuff every day.
          </p>
        </div>

        <div className="flex gap-16 text-sm">
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              Products
            </span>
            <Link href="/wikis" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
              Wiki Vaults
            </Link>
            <Link href="/guides" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
              Guides
            </Link>
            <Link href="/tools" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
              Free Tools
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              Connect
            </span>
            <a
              href="https://x.com/MrPrompts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
            >
              X / Twitter
            </a>
            <a
              href="https://mrprompts.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
            >
              Substack
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-4 text-center text-xs text-zinc-400">
          &copy; {new Date().getFullYear()} MrPrompts. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
