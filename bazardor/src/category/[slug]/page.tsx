import { getProducts, getCategory } from "@/lib/api";
import Container from "@/components/common/Container";
import SortDropdown from "@/components/category/SortDropdown";
import EmptyState from "@/components/category/EmptyState";
import ProductGrid from "@/components/product/ProductGrid";
import CategoryClient from "./CategoryClient";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ sort?: string }>;
}) {
  const { slug } = await params;
  const { sort } = await searchParams;

  const [category, products] = await Promise.all([
    getCategory(slug),
    getProducts(slug),
  ]);

  if (!category && !products.length) {
    return (
      <Container className="py-10">
        <EmptyState />
      </Container>
    );
  }

  return <CategoryClient category={category} products={products} initialSort={sort || "default"} />;
}