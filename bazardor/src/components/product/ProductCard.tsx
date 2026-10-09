import Link from "next/link";
import { Product } from "@/types/product";
import { toBnPrice } from "@/lib/utils";
import ChangeBadge from "./ChangeBadge";

export default function ProductCard({ product }: { product: Product }) {
  const href = `/product/${product.id || product.slug}`;

  return (
    <Link
      href={href}
      className="card bg-white shadow hover:shadow-lg transition-all border border-gray-100"
    >
      <div className="card-body items-center text-center p-4">
        <div className="text-4xl md:text-5xl">{product.emoji || "🛒"}</div>
        <h3 className="font-bold text-base md:text-lg mt-2 text-gray-800">{product.name}</h3>
        <p className="text-xs text-gray-500">{product.unit || "প্রতি কেজি"}</p>
        <div className="flex items-center gap-2 mt-2 flex-wrap justify-center">
          <span className="text-xs text-gray-500">আজকের দাম</span>
          <span className="font-bold text-green-700">{toBnPrice(product.price)} টাকা</span>
        </div>
        <ChangeBadge change={product.change || 0} />
      </div>
    </Link>
  );
}