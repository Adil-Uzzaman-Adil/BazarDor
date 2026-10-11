import Hero from "@/components/home/Hero";
import RiserSection from "@/components/home/RiserSection";
import FallerSection from "@/components/home/FallerSection";
import AllProducts from "@/components/home/AllProducts";
import { getProducts } from "@/lib/api";

export default async function HomePage() {
  const products = await getProducts();
  return (
    <>
      <Hero />
      <RiserSection products={products} />
      <FallerSection products={products} />
      <AllProducts products={products} />
    </>
  );
}