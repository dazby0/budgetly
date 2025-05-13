"use client";

import { SignUp } from "@clerk/nextjs";
import AuthSplitLayout from "@/components/auth/AuthSplitLayout";
import AuthAside from "@/components/auth/AuthAside";
import { signUpTips } from "@/components/auth/authTips";
import { useRotatingTips } from "@/hooks/useRotatingTips";

export default function Page() {
  const tip = useRotatingTips(signUpTips);

  return (
    <AuthSplitLayout
      aside={<AuthAside tip={tip} footer="Dołącz do Budgetly już dziś." />}
    >
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </AuthSplitLayout>
  );
}
