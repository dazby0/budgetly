import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <>
      <SignedIn>
        <div className="p-10 text-2xl font-bold">Witaj w Budgetly 🎉</div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
