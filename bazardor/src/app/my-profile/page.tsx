"use client";
import { useSession } from "@/lib/auth-client";
import Container from "@/components/common/Container";
import Link from "next/link";
import ProtectedRoute from "@/components/common/ProtectedRoute";

export default function MyProfilePage() {
  const { data: session } = useSession();

  return (
    <ProtectedRoute>
      <Container className="py-10">
        <div className="card bg-white shadow-lg p-6 md:p-8 max-w-xl mx-auto">
          <h1 className="text-2xl font-bold text-green-700 mb-6">আমার প্রোফাইল</h1>
          <div className="space-y-3">
            <p><strong>নাম:</strong> {session?.user?.name || "—"}</p>
            <p><strong>ইমেইল:</strong> {session?.user?.email || "—"}</p>
          </div>
          <Link href="/my-profile/update" className="btn bg-green-600 text-white mt-6">
            তথ্য আপডেট করুন
          </Link>
        </div>
      </Container>
    </ProtectedRoute>
  );
}