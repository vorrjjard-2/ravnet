"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";

const links = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/blog", label: "blog" },
  { href: "/resume", label: "resume" },
  { href: "/contact", label: "contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between border-b border-border pb-4">
      <Link href="/" className="text-accent font-bold text-sm tracking-tight">
        rs.
      </Link>
      <div className="flex items-center gap-6">
        {links.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs transition-colors ${
                isActive
                  ? "text-accent border-b border-accent pb-0.5"
                  : "text-muted hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <ThemeToggle />
      </div>
    </nav>
  );
}
