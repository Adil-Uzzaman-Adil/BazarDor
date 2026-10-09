"use client";
import Link from "next/link";

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="md:hidden border-t py-3">
      <Link href="/" onClick={onClose} className="block px-3 py-2">হোম</Link>
    </div>
  );
}