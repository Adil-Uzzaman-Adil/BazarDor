import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center px-4">
      <div className="text-7xl mb-4">🔍</div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">৪০৪ — পাওয়া যায়নি</h1>
      <p className="text-gray-500 mt-3 max-w-md">
        দুঃখিত, আপনি যে পেজটি খুঁজছেন তা এখানে নেই।
      </p>
      <Link href="/" className="btn bg-green-600 text-white hover:bg-green-700 mt-6">
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}