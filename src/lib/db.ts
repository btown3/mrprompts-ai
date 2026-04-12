import { supabase } from "./supabase";

export type DbProduct = {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  price: number;
  format: string;
  tag: string;
  href: string;
  items: string | null;
  visible: boolean;
  sort_order: number;
  meta_title: string | null;
  meta_description: string | null;
};

export type DbBlogPost = {
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
};

export type DbTestimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  featured: boolean;
  visible: boolean;
  sort_order: number;
};

export async function getProducts(): Promise<DbProduct[]> {
  const { data } = await supabase
    .from("products")
    .select("*")
    .eq("visible", true)
    .order("sort_order");
  return data || [];
}

export async function getBlogPosts(): Promise<DbBlogPost[]> {
  const { data } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("visible", true)
    .order("published_at", { ascending: false });
  return data || [];
}

export async function getFeaturedBlogPosts(): Promise<DbBlogPost[]> {
  const { data } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("visible", true)
    .eq("featured", true)
    .order("published_at", { ascending: false })
    .limit(3);
  return data || [];
}

export async function getTestimonials(): Promise<DbTestimonial[]> {
  const { data } = await supabase
    .from("testimonials")
    .select("*")
    .eq("visible", true)
    .eq("featured", true)
    .order("sort_order");
  return data || [];
}

export type DbFramework = {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  description: string;
  type: string;
  content: string;
  meta_title: string | null;
  meta_description: string | null;
  featured: boolean;
  visible: boolean;
  sort_order: number;
};

export async function getFrameworks(): Promise<DbFramework[]> {
  const { data } = await supabase
    .from("frameworks")
    .select("*")
    .eq("visible", true)
    .order("sort_order");
  return data || [];
}

export async function getFrameworkBySlug(slug: string): Promise<DbFramework | null> {
  const { data } = await supabase
    .from("frameworks")
    .select("*")
    .eq("slug", slug)
    .eq("visible", true)
    .single();
  return data || null;
}

export async function getFeaturedFrameworks(): Promise<DbFramework[]> {
  const { data } = await supabase
    .from("frameworks")
    .select("*")
    .eq("visible", true)
    .eq("featured", true)
    .order("sort_order")
    .limit(1);
  return data || [];
}

export function formatPrice(cents: number): string {
  if (cents === 0) return "Free";
  return `$${(cents / 100).toFixed(cents % 100 === 0 ? 0 : 2)}`;
}
