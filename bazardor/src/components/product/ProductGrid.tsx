import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length) return <p className="text-center text-gray-500 py-10">কোনো পণ্য পাওয়া যায়নি।</p>;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
      {products.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}