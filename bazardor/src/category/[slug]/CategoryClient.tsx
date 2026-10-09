"use client";
import { useState } from "react";
import Container from "@/components/common/Container";
import SortDropdown from "@/components/category/SortDropdown";
import ProductGrid from "@/components/product/ProductGrid";
import { Product, Category } from "@/types/product";
import EmptyState from "@/components/category/EmptyState";

export default function CategoryClient({
  category,
  products,
  initialSort,
}: {
  category: Category | null;
  products: Product[];
  initialSort: string;
}) {
  const [sort, setSort] = useState(initialSort);

  const sorted = [...products].sort((a, b) => {
    if (sort === "asc") return a.price - b.price;
    if (sort === "desc") return b.price - a.price;
    return 0;
  });

  if (!sorted.length) return <Container className="py-10"><EmptyState /></Container>;

  return (
    <Container className="py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-3">
        <h1 className="text-2xl md:text-3xl font-bold text-green-700">
          {category?.icon} {category?.name || "ক্যাটেগরি"}
        </h1>
        <SortDropdown value={sort} onChange={setSort} />
      </div>
      <ProductGrid products={sorted} />
    </Container>
  );
}