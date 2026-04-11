"use client";

import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  tag: string | null;
  visible: boolean;
  sort_order: number;
}

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchProducts() {
    const { data } = await supabase
      .from("products")
      .select("id, name, category, price, tag, visible, sort_order")
      .order("sort_order", { ascending: true });
    setProducts((data as Product[]) ?? []);
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  async function toggleVisible(id: string, current: boolean) {
    await supabase
      .from("products")
      .update({ visible: !current })
      .eq("id", id);
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, visible: !current } : p))
    );
  }

  async function deleteProduct(id: string) {
    if (!confirm("Are you sure you want to delete this product?")) return;
    await supabase.from("products").delete().eq("id", id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }

  function formatPrice(cents: number) {
    return `$${(cents / 100).toFixed(2)}`;
  }

  if (loading) {
    return <div className="text-zinc-400">Loading products...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-zinc-900">Products</h1>
        <Link
          href="/admin/products/new"
          className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
        >
          Add Product
        </Link>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50">
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Name
              </th>
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Category
              </th>
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Price
              </th>
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Tag
              </th>
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Visible
              </th>
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-zinc-100 hover:bg-zinc-50"
              >
                <td className="px-4 py-3 text-zinc-900 font-medium">
                  {product.name}
                </td>
                <td className="px-4 py-3 text-zinc-500">{product.category}</td>
                <td className="px-4 py-3 text-zinc-700">
                  {formatPrice(product.price)}
                </td>
                <td className="px-4 py-3">
                  {product.tag && (
                    <span className="rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5 text-xs font-medium">
                      {product.tag}
                    </span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => toggleVisible(product.id, product.visible)}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                      product.visible
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-zinc-100 text-zinc-400"
                    }`}
                  >
                    {product.visible ? "Visible" : "Hidden"}
                  </button>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <Link
                      href={`/admin/products/${product.id}`}
                      className="rounded-lg bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-200 transition-colors"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-100 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-6 text-center text-zinc-400"
                >
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
