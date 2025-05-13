"use client";

import { SignIn } from "@clerk/nextjs";
import AuthSplitLayout from "@/components/auth/AuthSplitLayout";
import AuthAside from "@/components/auth/AuthAside";
import { signInTips } from "@/components/auth/authTips";
import { useRotatingTips } from "@/hooks/useRotatingTips";

export default function Page() {
  const tip = useRotatingTips(signInTips);

  return (
    <AuthSplitLayout
      aside={<AuthAside tip={tip} footer="Twoje finanse w Twoich rękach." />}
    >
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </AuthSplitLayout>
  );
}
