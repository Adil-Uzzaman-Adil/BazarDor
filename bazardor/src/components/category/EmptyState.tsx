import Link from "next/link";

export default function EmptyState() {
  return (
    <div className="text-center py-20">
      <div className="text-6xl mb-4">🔍</div>
      <h2 className="text-2xl font-bold text-gray-700 mb-2">কিছু পাওয়া যায়নি</h2>
      <p className="text-gray-500 mb-6">এই ক্যাটেগরিতে এই মুহূর্তে কোনো পণ্য নেই।</p>
      <Link href="/" className="btn bg-green-600 text-white hover:bg-green-700">
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}