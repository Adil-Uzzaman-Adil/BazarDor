"use client";
import { useState, useEffect } from "react";
import { useSession, updateUser } from "@/lib/auth-client";
import Container from "@/components/common/Container";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ProtectedRoute from "@/components/common/ProtectedRoute";

export default function UpdateProfilePage() {
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (session?.user?.name) setName(session.user.name);
  }, [session]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateUser({ name });
      toast.success("তথ্য আপডেট সফল");
      router.push("/my-profile");
    } catch {
      toast.error("আপডেট ব্যর্থ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <Container className="py-10">
        <div className="card bg-white shadow-lg p-6 md:p-8 max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-green-700 mb-6">তথ্য আপডেট</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="নাম"
              required
              className="input input-bordered w-full"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn bg-green-600 text-white hover:bg-green-700 w-full"
            >
              {loading ? <span className="loading loading-spinner" /> : "আপডেট করুন"}
            </button>
          </form>
        </div>
      </Container>
    </ProtectedRoute>
  );
}