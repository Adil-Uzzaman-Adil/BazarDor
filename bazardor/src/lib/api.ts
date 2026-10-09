import { Product, Category } from "@/types/product";
import { BASE_URL } from "./constants";

export async function getProducts(category?: string): Promise<Product[]> {
  try {
    const url = category
      ? `${BASE_URL}/products?category=${category}`
      : `${BASE_URL}/products`;
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    return Array.isArray(data) ? data : data.products || [];
  } catch (err) {
    console.error("getProducts error:", err);
    return [];
  }
}

export async function getProduct(slug: string | number): Promise<Product | null> {
  try {
    const res = await fetch(`${BASE_URL}/products/${slug}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${BASE_URL}/categories`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) throw new Error("Failed");
    const data = await res.json();
    return Array.isArray(data) ? data : data.categories || [];
  } catch {
    return [];
  }
}

export async function getCategory(slug: string): Promise<Category | null> {
  try {
    const res = await fetch(`${BASE_URL}/categories/${slug}`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}