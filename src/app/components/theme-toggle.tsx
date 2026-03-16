"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Theme = "dark" | "light";

interface Transition {
  name: string;
  from: string;
  to: string;
}

const transitions: Transition[] = [
  {
    name: "circle-center",
    from: "circle(0% at 50% 50%)",
    to: "circle(150% at 50% 50%)",
  },
  {
    name: "circle-top-left",
    from: "circle(0% at 0% 0%)",
    to: "circle(200% at 0% 0%)",
  },
  {
    name: "circle-bottom-right",
    from: "circle(0% at 100% 100%)",
    to: "circle(200% at 100% 100%)",
  },
  {
    name: "wipe-down",
    from: "inset(0 0 100% 0)",
    to: "inset(0 0 0 0)",
  },
  {
    name: "wipe-up",
    from: "inset(100% 0 0 0)",
    to: "inset(0 0 0 0)",
  },
  {
    name: "wipe-right",
    from: "inset(0 100% 0 0)",
    to: "inset(0 0 0 0)",
  },
  {
    name: "wipe-left",
    from: "inset(0 0 0 100%)",
    to: "inset(0 0 0 0)",
  },
  {
    name: "diamond",
    from: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
    to: "polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%)",
  },
  {
    name: "vertical-blinds",
    from: "inset(0 50% 0 50%)",
    to: "inset(0 0 0 0)",
  },
  {
    name: "horizontal-blinds",
    from: "inset(50% 0 50% 0)",
    to: "inset(0 0 0 0)",
  },
];

const DURATION = 600;

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);
  const animating = useRef(false);

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
    if (animating.current) return;
    animating.current = true;

    const next: Theme = theme === "dark" ? "light" : "dark";
    const transition =
      transitions[Math.floor(Math.random() * transitions.length)];

    // 1. Switch the theme immediately so the page underneath renders in the new theme
    setTheme(next);
    localStorage.setItem("theme", next);
    if (next === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }

    // 2. Clone the entire page as it looked BEFORE the switch.
    //    We do this by creating a screenshot-like clone with the old theme's colors.
    //    Since we already switched, we capture the current body and re-apply the old colors.
    const clone = document.body.cloneNode(true) as HTMLElement;

    // Strip scripts and interactive elements from clone
    clone.querySelectorAll("script, iframe").forEach((el) => el.remove());

    // Create overlay container with OLD theme colors
    const overlay = document.createElement("div");
    const oldTheme = next === "light" ? "dark" : "light";
    const oldBg = oldTheme === "dark" ? "#0a0a0a" : "#fafafa";
    const oldFg = oldTheme === "dark" ? "#e5e5e5" : "#171717";
    const oldMuted = "#737373";
    const oldBorder = oldTheme === "dark" ? "#262626" : "#e5e5e5";
    const oldAccent = oldTheme === "dark" ? "#ffffff" : "#000000";

    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      z-index: 9999;
      pointer-events: none;
      clip-path: ${transition.to};
      transition: clip-path ${DURATION}ms cubic-bezier(0.4, 0, 0.2, 1);
      --background: ${oldBg};
      --foreground: ${oldFg};
      --muted: ${oldMuted};
      --border: ${oldBorder};
      --accent: ${oldAccent};
      background: ${oldBg};
      color: ${oldFg};
      overflow: hidden;
    `;

    // Apply old theme colors inline on the clone so it renders with the previous theme
    clone.style.cssText = `
      --background: ${oldBg};
      --foreground: ${oldFg};
      --muted: ${oldMuted};
      --border: ${oldBorder};
      --accent: ${oldAccent};
      background: ${oldBg};
      color: ${oldFg};
      pointer-events: none;
      min-height: 100vh;
    `;

    // Force color variables on all children that use theme colors
    clone.querySelectorAll("*").forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.setProperty("--background", oldBg);
      htmlEl.style.setProperty("--foreground", oldFg);
      htmlEl.style.setProperty("--muted", oldMuted);
      htmlEl.style.setProperty("--border", oldBorder);
      htmlEl.style.setProperty("--accent", oldAccent);
    });

    overlay.appendChild(clone);
    document.body.appendChild(overlay);

    // 3. Animate the overlay (old theme) OUT by shrinking clip-path
    requestAnimationFrame(() => {
      overlay.style.clipPath = transition.from;
    });

    // 4. Clean up after animation
    setTimeout(() => {
      overlay.remove();
      animating.current = false;
    }, DURATION + 50);
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
