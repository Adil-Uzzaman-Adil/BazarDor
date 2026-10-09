"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AuthButtons from "./AuthButtons";
import NavLinks from "./NavLinks";
import Container from "../common/Container";

export default function Navbar() {
  const [bnDate, setBnDate] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const d = new Date().toLocaleDateString("bn-BD", {
      weekday: "long", day: "numeric", month: "long", year: "numeric",
    });
    setBnDate(d);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <Container>
        <div className="flex justify-between items-center py-3">
          <Link href="/" className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold text-green-700">
              🛒 বাজার দর
            </span>
            <span className="text-xs text-gray-500">{bnDate}</span>
          </Link>

          <div className="hidden md:block">
            <AuthButtons />
          </div>

          <button
            className="md:hidden btn btn-ghost btn-sm"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        <div className="hidden md:block border-t pt-2">
          <NavLinks />
        </div>

        {menuOpen && (
          <div className="md:hidden border-t py-3 space-y-2">
            <NavLinks onNavigate={() => setMenuOpen(false)} />
            <div className="pt-2">
              <AuthButtons />
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}