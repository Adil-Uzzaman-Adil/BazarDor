"use client";

export default function SortDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm text-gray-600">সাজান:</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="select select-bordered select-sm md:select-md"
      >
        <option value="default">ডিফল্ট</option>
        <option value="asc">দাম: কম থেকে বেশি</option>
        <option value="desc">দাম: বেশি থেকে কম</option>
      </select>
    </div>
  );
}