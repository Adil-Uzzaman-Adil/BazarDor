"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getCategories } from "@/lib/api";
import { Category } from "@/types/product";

export default function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const [categories, setCategories] = useState<Category[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <nav className="flex flex-wrap gap-2 md:gap-4 text-sm md:text-base">
      <Link
        href="/"
        onClick={onNavigate}
        className={`px-3 py-1 rounded-md ${
          pathname === "/" ? "bg-green-100 text-green-700 font-semibold" : "text-gray-600 hover:text-green-700"
        }`}
      >
        হোম
      </Link>
      {categories.map((cat) => {
        const active = pathname === `/category/${cat.slug}`;
        return (
          <Link
            key={cat.id || cat.slug}
            href={`/category/${cat.slug}`}
            onClick={onNavigate}
            className={`px-3 py-1 rounded-md ${
              active ? "bg-green-100 text-green-700 font-semibold" : "text-gray-600 hover:text-green-700"
            }`}
          >
            {cat.icon} {cat.name}
          </Link>
        );
      })}
    </nav>
  );
}