import { formatChange } from "@/lib/utils";

export default function ChangeBadge({ change }: { change: number }) {
  const color =
    change > 0 ? "bg-red-100 text-red-700"
    : change < 0 ? "bg-green-100 text-green-700"
    : "bg-gray-100 text-gray-600";

  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${color}`}>
      {formatChange(change)}
    </span>
  );
}