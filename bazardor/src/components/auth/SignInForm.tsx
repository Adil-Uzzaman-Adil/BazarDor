"use client";
import { useState } from "react";
import { signIn } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import SocialLogin from "./SocialLogin";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  const redirect = params.get("redirect") || "/";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await signIn.email({ email, password });
      if (res.error) throw new Error(res.error.message);
      toast.success("সাইন ইন সফল!");
      router.push(redirect);
    } catch (err: any) {
      toast.error(err.message || "সাইন ইন ব্যর্থ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto card bg-white shadow-lg p-6 md:p-8 mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-green-700">সাইন ইন</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="ইমেইল"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input input-bordered w-full"
        />
        <input
          type="password"
          placeholder="পাসওয়ার্ড"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="input input-bordered w-full"
        />
        <button
          type="submit"
          disabled={loading}
          className="btn bg-green-600 text-white hover:bg-green-700 w-full"
        >
          {loading ? <span className="loading loading-spinner" /> : "লগইন"}
        </button>
      </form>

      <div className="divider">অথবা</div>
      <SocialLogin />

      <p className="text-center mt-6 text-sm">
        অ্যাকাউন্ট নেই?{" "}
        <Link href="/signup" className="text-green-700 font-semibold hover:underline">
          রেজিস্টার করুন
        </Link>
      </p>
    </div>
  );
}