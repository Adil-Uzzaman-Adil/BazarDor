"use client";
import { useEffect, useState } from "react";
import { getCategories } from "@/lib/api";
import { Category } from "@/types/product";

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    getCategories()
      .then((data) => {
        if (!cancelled) setCategories(data);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { categories, loading };
}