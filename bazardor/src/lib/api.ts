import { Product, Category } from "@/types/product";
import { BASE_URL } from "./constants";

function normalizeProduct(raw: any): Product {
  return {
    id: raw.id ?? raw._id ?? 0,
    name: raw.name ?? raw.title ?? raw.productName ?? "",
    slug: raw.slug ?? String(raw.id ?? raw._id ?? ""),
    emoji: raw.emoji ?? raw.icon ?? "🛒",
    unit: raw.unit ?? "প্রতি কেজি",
    price: Number(raw.price ?? raw.currentPrice ?? raw.todayPrice ?? 0),
    change: Number(raw.change ?? raw.priceChange ?? raw.diff ?? 0),
    category: raw.category?.name ?? raw.category ?? raw.categoryName ?? "",
    categorySlug: raw.category?.slug ?? raw.categorySlug ?? raw.category ?? "",
    description: raw.description ?? raw.summary ?? "",
    minPrice: raw.minPrice,
    maxPrice: raw.maxPrice,
    avgPrice: raw.avgPrice ?? raw.averagePrice,
    bazars: raw.bazars ?? raw.marketPrices ?? raw.markets,
  };
}

function extractArray(data: any): any[] {
  if (Array.isArray(data)) return data;
  if (data?.products) return data.products;
  if (data?.data) return data.data;
  if (data?.items) return data.items;
  return [];
}

export async function getProducts(category?: string): Promise<Product[]> {
  try {
    const url = category
      ? `${BASE_URL}/products?category=${category}`
      : `${BASE_URL}/products`;
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    return extractArray(data).map(normalizeProduct);
  } catch (err) {
    console.error("getProducts error:", err);
    return [];
  }
}

export async function getProduct(idOrSlug: string | number): Promise<Product | null> {
  try {
    const res = await fetch(`${BASE_URL}/products/${idOrSlug}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    const raw = data?.product ?? data?.data ?? data;
    return normalizeProduct(raw);
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
    const arr = extractArray(data);
    return arr.map((c: any) => ({
      id: c.id ?? c._id ?? 0,
      name: c.name ?? c.title ?? "",
      slug: c.slug ?? String(c.id ?? ""),
      icon: c.icon ?? c.emoji ?? "🛒",
      productCount: c.productCount ?? c.count,
    }));
  } catch {
    return [];
  }
}

export async function getCategory(slug: string): Promise<Category | null> {
  try {
    const res = await fetch(`${BASE_URL}/categories/${slug}`);
    if (!res.ok) return null;
    const data = await res.json();
    const raw = data?.category ?? data?.data ?? data;
    return {
      id: raw.id ?? raw._id ?? 0,
      name: raw.name ?? raw.title ?? "",
      slug: raw.slug ?? slug,
      icon: raw.icon ?? raw.emoji ?? "🛒",
      productCount: raw.productCount ?? raw.count,
    };
  } catch {
    return null;
  }
}