import { toBnPrice } from "@/lib/utils";

export default function PriceSummary({ min, max, avg }: { min: number; max: number; avg: number }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="bg-green-50 rounded-xl p-4 text-center">
        <p className="text-xs text-gray-500">সর্বনিম্ন দাম</p>
        <p className="text-lg font-bold text-green-700">{toBnPrice(min)} ৳</p>
      </div>
      <div className="bg-red-50 rounded-xl p-4 text-center">
        <p className="text-xs text-gray-500">সর্বোচ্চ দাম</p>
        <p className="text-lg font-bold text-red-700">{toBnPrice(max)} ৳</p>
      </div>
      <div className="bg-blue-50 rounded-xl p-4 text-center">
        <p className="text-xs text-gray-500">গড় দাম</p>
        <p className="text-lg font-bold text-blue-700">{toBnPrice(avg)} ৳</p>
      </div>
    </div>
  );
}