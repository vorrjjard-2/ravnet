"use client";

import { useCallback, useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) {
      setTheme(stored);
      if (stored === "light") {
        document.documentElement.setAttribute("data-theme", "light");
      }
    }
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    if (next === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      className="text-xs text-muted hover:text-accent transition-colors cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "\u263D" : "\u2600"}
    </button>
  );
}
