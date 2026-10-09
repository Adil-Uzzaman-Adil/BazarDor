"use client";
import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AuthButtons() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    toast.success("সফলভাবে সাইন আউট হয়েছেন");
    router.push("/");
  };

  if (isPending) return <div className="skeleton h-8 w-24" />;

  if (session) {
    return (
      <div className="flex items-center gap-2">
        <Link href="/my-profile" className="btn btn-sm btn-outline">
          👤 {session.user?.name || "প্রোফাইল"}
        </Link>
        <button onClick={handleSignOut} className="btn btn-sm btn-error text-white">
          সাইন আউট
        </button>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <Link href="/signin" className="btn btn-sm btn-outline">সাইন ইন</Link>
      <Link href="/signup" className="btn btn-sm bg-green-600 text-white hover:bg-green-700">
        সাইন আপ
      </Link>
    </div>
  );
}