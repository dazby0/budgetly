import { ReactNode } from "react";

export default function AuthSplitLayout({
  aside,
  children,
}: {
  aside: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {aside}
      <div className="flex items-center justify-center p-6 bg-surface">
        <div className="rounded-xl shadow-xl p-8">{children}</div>
      </div>
    </div>
  );
}
