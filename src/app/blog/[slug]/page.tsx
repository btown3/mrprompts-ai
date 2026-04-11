"use client";

import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CATEGORY_COLORS: Record<string, string> = {
  Prompting: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  Agents: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
  Tools: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  Leadership: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  Research: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
  General: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
};

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  substack_url: string | null;
  content: string | null;
  published_at: string | null;
  featured: boolean;
  visible: boolean;
  meta_title: string | null;
  meta_description: string | null;
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [post, setPost] = useState<BlogPost | null>(null);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("visible", true)
        .single();

      if (error || !data) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      // If post has no content but has a substack_url, redirect
      if (!data.content && data.substack_url) {
        window.location.href = data.substack_url;
        return;
      }

      setPost(data as BlogPost);

      // Fetch recent posts for the bottom section
      const { data: recent } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("visible", true)
        .neq("id", data.id)
        .order("published_at", { ascending: false })
        .limit(4);

      setRecentPosts((recent as BlogPost[]) || []);
      setLoading(false);
    }
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="text-center text-sm text-zinc-400">Loading post...</div>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Post not found
        </h1>
        <p className="mt-3 text-zinc-500">
          The blog post you are looking for does not exist or is no longer
          available.
        </p>
        <Link
          href="/blog"
          className="mt-6 inline-block rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  const paragraphs = post.content
    ? post.content.split("\n\n").filter((p) => p.trim())
    : [];

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      {/* Header */}
      <div className="mb-10">
        <Link
          href="/blog"
          className="text-sm text-zinc-400 hover:text-emerald-600 transition-colors"
        >
          &larr; Back to Blog
        </Link>

        <div className="mt-6 flex items-center gap-3">
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
              CATEGORY_COLORS[post.category] || CATEGORY_COLORS.General
            }`}
          >
            {post.category}
          </span>
          {post.published_at && (
            <span className="text-sm text-zinc-400">
              {new Date(post.published_at).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          )}
        </div>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-zinc-500 leading-relaxed">
          {post.description}
        </p>
      </div>

      {/* Content */}
      <article className="prose prose-zinc dark:prose-invert max-w-none">
        {paragraphs.map((paragraph, i) => (
          <p
            key={i}
            className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300 mb-5"
          >
            {paragraph}
          </p>
        ))}
      </article>

      {/* Substack link */}
      {post.substack_url && (
        <div className="mt-10 border-t border-zinc-200 dark:border-zinc-800 pt-6">
          <a
            href={post.substack_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
          >
            Read on Substack &rarr;
          </a>
        </div>
      )}

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <div className="mt-16 border-t border-zinc-200 dark:border-zinc-800 pt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
            More Posts
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {recentPosts.map((rp) => {
              const href = rp.content
                ? `/blog/${rp.slug}`
                : rp.substack_url || "#";
              const isExternal = !rp.content && rp.substack_url;
              return isExternal ? (
                <a
                  key={rp.id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 hover:border-emerald-300 dark:hover:border-emerald-800 transition"
                >
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      CATEGORY_COLORS[rp.category] || CATEGORY_COLORS.General
                    }`}
                  >
                    {rp.category}
                  </span>
                  <h3 className="mt-2 text-sm font-semibold group-hover:text-emerald-600">
                    {rp.title}
                  </h3>
                </a>
              ) : (
                <Link
                  key={rp.id}
                  href={href}
                  className="group rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 hover:border-emerald-300 dark:hover:border-emerald-800 transition"
                >
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      CATEGORY_COLORS[rp.category] || CATEGORY_COLORS.General
                    }`}
                  >
                    {rp.category}
                  </span>
                  <h3 className="mt-2 text-sm font-semibold group-hover:text-emerald-600">
                    {rp.title}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
