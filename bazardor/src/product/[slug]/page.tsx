import { getProduct } from "@/lib/api";
import { notFound } from "next/navigation";
import Container from "@/components/common/Container";
import PriceSummary from "@/components/product/PriceSummary";
import BazarTable from "@/components/product/BazarTable";
import ChangeBadge from "@/components/product/ChangeBadge";
import { toBnPrice } from "@/lib/utils";
import ProtectedRoute from "@/components/common/ProtectedRoute";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  const min = product.minPrice ?? Math.round(product.price * 0.9);
  const max = product.maxPrice ?? Math.round(product.price * 1.15);
  const avg = product.avgPrice ?? product.price;

  return (
    <ProtectedRoute>
      <Container className="py-10">
        <div className="card bg-white shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="text-6xl md:text-7xl">{product.emoji || "🛒"}</div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{product.name}</h1>
              <p className="text-gray-500 mt-1">{product.description || "আজকের বাজার দর"}</p>
              <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                <span className="badge badge-outline">{product.category}</span>
                <span className="badge badge-outline">{product.unit || "প্রতি কেজি"}</span>
              </div>
              <div className="flex items-center gap-3 mt-4 justify-center md:justify-start">
                <span className="text-sm text-gray-500">আজকের দাম:</span>
                <span className="text-2xl font-bold text-green-700">
                  {toBnPrice(product.price)} টাকা
                </span>
                <ChangeBadge change={product.change || 0} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">দামের সারাংশ</h2>
          <PriceSummary min={min} max={max} avg={avg} />
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">বাজারভিত্তিক আজকের দাম</h2>
          <BazarTable
            bazars={
              product.bazars || [
                { bazar: "কারওয়ান বাজার", price: product.price + 5 },
                { bazar: "মোহাম্মদপুর", price: product.price },
                { bazar: "মিরপুর", price: product.price - 3 },
              ]
            }
          />
        </div>
      </Container>
    </ProtectedRoute>
  );
}