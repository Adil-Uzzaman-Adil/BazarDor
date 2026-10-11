import SignInForm from "@/components/auth/SignInForm";
import { Suspense } from "react";

export default function SignInPage() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <SignInForm />
    </Suspense>
  );
}