import { Product } from "@/types/product";
import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";
import ProductGrid from "../product/ProductGrid";

export default function AllProducts({ products }: { products: Product[] }) {
  return (
    <section id="সব-পণ্য" className="py-10">
      <Container>
        <SectionHeader title="সব পণ্য" subtitle="সম্পূর্ণ পণ্যের তালিকা" />
        <ProductGrid products={products} />
      </Container>
    </section>
  );
}