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
            Build with AI. No dev background required. Frameworks, tools, and
            guides for builders who don't code.
          </p>
        </div>

        <div className="flex gap-16 text-sm">
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              Build
            </span>
            <Link href="/build/knowledge-bases" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
              Knowledge Bases
            </Link>
            <Link href="/build/prompts" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
              Prompts
            </Link>
            <Link href="/build/workflows" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
              Workflows
            </Link>
            <Link href="/build/leadership" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
              Leadership
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              Resources
            </span>
            <Link href="/tools" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
              Tools
            </Link>
            <Link href="/vaults" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
              Vaults
            </Link>
            <Link href="/blog" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
              Blog
            </Link>
            <Link href="/affiliates" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
              Tools We Use
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              Connect
            </span>
            <Link href="/about" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
              About
            </Link>
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
