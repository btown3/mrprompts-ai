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
};

export type DbBlogPost = {
  id: string;
  title: string;
  description: string;
  category: string;
  substack_url: string | null;
  content: string | null;
  published_at: string | null;
  featured: boolean;
  visible: boolean;
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

export function formatPrice(cents: number): string {
  if (cents === 0) return "Free";
  return `$${(cents / 100).toFixed(cents % 100 === 0 ? 0 : 2)}`;
}
