"use client";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      toast.error("অনুগ্রহ করে সাইন ইন করুন");
      router.push("/signin");
    }
  }, [session, isPending, router]);

  if (isPending) return <div className="text-center py-20">Loading...</div>;
  if (!session) return null;
  return <>{children}</>;
}