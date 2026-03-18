"use client";

import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname === "/resume") {
    return <>{children}</>;
  }

  return (
    <div key={pathname} className="animate-page-enter">
      {children}
    </div>
  );
}
