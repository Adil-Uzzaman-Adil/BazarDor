import { BazarPrice } from "@/types/product";
import { toBnPrice } from "@/lib/utils";

export default function BazarTable({ bazars }: { bazars: BazarPrice[] }) {
  if (!bazars?.length) {
    return <p className="text-gray-500 text-center py-4">বাজার তথ্য নেই।</p>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr className="bg-green-100 text-green-800">
            <th>বাজার</th>
            <th className="text-right">দাম (টাকা)</th>
          </tr>
        </thead>
        <tbody>
          {bazars.map((b, i) => (
            <tr key={i}>
              <td>{b.bazar}</td>
              <td className="text-right font-semibold">{toBnPrice(b.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}