export interface BazarPrice {
  bazar: string;
  price: number;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  emoji: string;
  unit: string;
  price: number;
  change: number; // percentage
  category: string;
  categorySlug: string;
  description?: string;
  minPrice?: number;
  maxPrice?: number;
  avgPrice?: number;
  bazars?: BazarPrice[];
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
  productCount?: number;
}