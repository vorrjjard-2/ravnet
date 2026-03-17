"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./theme-toggle";

const links = [
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/blog", label: "blog" },
  { href: "/contact", label: "contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-border pb-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-accent font-bold text-sm tracking-tight">
          rs.
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          {links.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs transition-colors ${
                  isActive
                    ? "text-accent"
                    : "text-muted hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-4 sm:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="text-muted hover:text-accent transition-colors text-lg leading-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {open ? "\u00d7" : "\u2261"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden pt-4 pb-2 flex flex-col gap-3">
          {links.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm transition-colors ${
                  isActive
                    ? "text-accent"
                    : "text-muted hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
