"use client";
import { useEffect, useState } from "react";
import { getProducts } from "@/lib/api";
import { Product } from "@/types/product";
import { toBnPrice, formatChange } from "@/lib/utils";

export default function PriceTicker() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((p) => setProducts(p.slice(0, 12)));
  }, []);

  if (!products.length) return null;

  const items = [...products, ...products]; // duplicate for seamless loop

  return (
    <div className="bg-green-700 text-white overflow-hidden py-2">
      <div className="animate-marquee">
        {items.map((p, i) => (
          <span key={i} className="mx-6 text-sm md:text-base">
            {p.emoji || "🛒"} {p.name} — {toBnPrice(p.price)} টাকা/{p.unit}{" "}
            <span className={p.change > 0 ? "text-red-300" : p.change < 0 ? "text-green-300" : "text-gray-300"}>
              {formatChange(p.change || 0)}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}