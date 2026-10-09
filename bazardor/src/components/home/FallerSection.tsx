import { Product } from "@/types/product";
import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";
import ProductGrid from "../product/ProductGrid";

export default function FallerSection({ products }: { products: Product[] }) {
  const fallers = [...products].sort((a, b) => (a.change || 0) - (b.change || 0)).slice(0, 6);
  return (
    <section className="py-10 bg-gray-50">
      <Container>
        <SectionHeader title="আজ দাম কমেছে ▼" subtitle="সর্বোচ্চ হ্রাসপ্রাপ্ত ৬টি পণ্য" />
        <ProductGrid products={fallers} />
      </Container>
    </section>
  );
}