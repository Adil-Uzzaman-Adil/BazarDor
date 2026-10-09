import { Product } from "@/types/product";
import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";
import ProductGrid from "../product/ProductGrid";

export default function RiserSection({ products }: { products: Product[] }) {
  const risers = [...products].sort((a, b) => (b.change || 0) - (a.change || 0)).slice(0, 6);
  return (
    <section className="py-10">
      <Container>
        <SectionHeader title="আজ দাম বেড়েছে ▲" subtitle="সর্বোচ্চ বর্ধিত ৬টি পণ্য" />
        <ProductGrid products={risers} />
      </Container>
    </section>
  );
}