"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [phase, setPhase] = useState<"visible" | "out" | "in">("visible");
  const prevPathname = useRef(pathname);

  const isResume = pathname === "/resume";

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname;

      // Skip fade animation when navigating to /resume
      if (pathname === "/resume") {
        setDisplayChildren(children);
        setPhase("visible");
        return;
      }

      setPhase("out");

      const outTimer = setTimeout(() => {
        setDisplayChildren(children);
        setPhase("in");
      }, 150);

      const inTimer = setTimeout(() => {
        setPhase("visible");
      }, 350);

      return () => {
        clearTimeout(outTimer);
        clearTimeout(inTimer);
      };
    } else {
      setDisplayChildren(children);
    }
  }, [pathname, children]);

  return (
    <div
      style={{
        opacity: isResume || phase === "visible" ? 1 : 0,
        transition: isResume ? "none" : "opacity 200ms ease-in-out",
      }}
    >
      {displayChildren}
    </div>
  );
}
