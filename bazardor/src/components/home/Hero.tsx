import Container from "../common/Container";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-yellow-50 py-12 md:py-16">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-green-700 font-semibold text-sm mb-2">🛒 আজকের বাজার</p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
              প্রতিদিনের বাজার দর <br />
              <span className="text-green-700">জানুন এক নজরে</span>
            </h1>
            <p className="text-gray-600 mt-4 text-sm md:text-base">
              সবজি, চাল, ডাল, মাছ, মাংস — সব পণ্যের দাম প্রতিদিন আপডেট।
            </p>
            <a href="#সব-পণ্য" className="btn bg-green-600 text-white hover:bg-green-700 mt-6 btn-sm sm:btn-md">
              সব পণ্য দেখুন →
            </a>
          </div>
          <div className="flex justify-center">
            <Image
              src="/hero-basket.png"
              alt="বাজারের ঝুড়ি"
              width={400}
              height={400}
              className="w-64 md:w-80"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}