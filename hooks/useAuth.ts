"use client";
import { useSession } from "@/lib/auth-client";

export function useAuth() {
  const { data: session, isPending } = useSession();
  return {
    user: session?.user,
    isAuthenticated: !!session,
    isPending,
  };
}