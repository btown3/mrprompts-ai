"use client";

import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useEffect, useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  published_at: string | null;
  featured: boolean;
  visible: boolean;
  substack_url: string | null;
}

export default function AdminBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchPosts() {
    const { data } = await supabase
      .from("blog_posts")
      .select("id, title, category, published_at, featured, visible, substack_url")
      .order("published_at", { ascending: false });
    setPosts((data as BlogPost[]) ?? []);
    setLoading(false);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  async function toggleVisible(id: string, current: boolean) {
    await supabase
      .from("blog_posts")
      .update({ visible: !current })
      .eq("id", id);
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, visible: !current } : p))
    );
  }

  async function toggleFeatured(id: string, current: boolean) {
    await supabase
      .from("blog_posts")
      .update({ featured: !current })
      .eq("id", id);
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, featured: !current } : p))
    );
  }

  if (loading) {
    return <div className="text-zinc-400">Loading blog posts...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-zinc-900">Blog Posts</h1>
        <Link
          href="/admin/blog/new"
          className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
        >
          Add Post
        </Link>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50">
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Title
              </th>
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Category
              </th>
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Published
              </th>
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Featured
              </th>
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Visible
              </th>
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Substack
              </th>
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr
                key={post.id}
                className="border-b border-zinc-100 hover:bg-zinc-50"
              >
                <td className="px-4 py-3 text-zinc-900 font-medium max-w-xs truncate">
                  {post.title}
                </td>
                <td className="px-4 py-3 text-zinc-500">{post.category}</td>
                <td className="px-4 py-3 text-zinc-500">
                  {post.published_at
                    ? new Date(post.published_at).toLocaleDateString()
                    : "Draft"}
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => toggleFeatured(post.id, post.featured)}
                    className={`text-lg ${
                      post.featured ? "text-yellow-500" : "text-zinc-300"
                    }`}
                    title={post.featured ? "Unfeature" : "Feature"}
                  >
                    &#9733;
                  </button>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => toggleVisible(post.id, post.visible)}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                      post.visible
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-zinc-100 text-zinc-400"
                    }`}
                  >
                    {post.visible ? "Visible" : "Hidden"}
                  </button>
                </td>
                <td className="px-4 py-3">
                  {post.substack_url && (
                    <a
                      href={post.substack_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:underline text-xs"
                    >
                      Link
                    </a>
                  )}
                </td>
                <td className="px-4 py-3">
                  <Link
                    href={`/admin/blog/${post.id}`}
                    className="rounded-lg bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-200 transition-colors"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-6 text-center text-zinc-400"
                >
                  No blog posts found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
