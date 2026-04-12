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
            AI frameworks for people who work. Named systems, clear steps,
            better output.
          </p>
        </div>

        <div className="flex gap-16 text-sm">
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">Frameworks</span>
            <Link href="/frameworks" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">All Frameworks</Link>
            <Link href="/learn/llm-instruction-set" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">LLM Instruction Set</Link>
            <Link href="/learn/ai-knowledge-base-guide" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">Knowledge Base System</Link>
            <Link href="/glossary" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">Glossary</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">Products</span>
            <Link href="/products" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">All Products</Link>
            <Link href="/workshops" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">Workshops</Link>
            <Link href="/enterprise" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">Enterprise</Link>
            <Link href="/blog" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">Blog</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">Connect</span>
            <Link href="/about" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">About</Link>
            <Link href="/affiliates" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">Tools We Use</Link>
            <a href="https://x.com/MrPrompts" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">X / Twitter</a>
            <a href="https://mrprompts.substack.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">Substack</a>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-4 text-xs text-zinc-400 sm:flex-row sm:justify-between">
          <span>&copy; {new Date().getFullYear()} MrPrompts. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-zinc-600 dark:hover:text-zinc-300">Privacy</Link>
            <Link href="/terms" className="hover:text-zinc-600 dark:hover:text-zinc-300">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
