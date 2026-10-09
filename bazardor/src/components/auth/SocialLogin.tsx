"use client";
import { signIn } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function SocialLogin() {
  const handle = async (provider: "google" | "github") => {
    try {
      await signIn.social({ provider, callbackURL: "/" });
      toast.success("সাইন ইন সফল");
    } catch {
      toast.error("সাইন ইন ব্যর্থ হয়েছে");
    }
  };

  return (
    <div className="space-y-2">
      <button onClick={() => handle("google")} className="btn btn-outline w-full">
        🔵 Google দিয়ে সাইন ইন
      </button>
      <button onClick={() => handle("github")} className="btn btn-outline w-full">
        ⚫ GitHub দিয়ে সাইন ইন
      </button>
    </div>
  );
}