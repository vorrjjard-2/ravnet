"use client";

import { useEffect, useState } from "react";

const lines = [
  "> initializing system...",
  "> loading modules...",
  "> establishing connection...",
  "> ready.",
];

export default function BootSequence({
  children,
}: {
  children: React.ReactNode;
}) {
  const [phase, setPhase] = useState<"boot" | "fade" | "done">("boot");
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (phase !== "boot") return;

    if (visibleLines < lines.length) {
      const delay = visibleLines === lines.length - 1 ? 400 : 300 + Math.random() * 200;
      const id = setTimeout(() => setVisibleLines(visibleLines + 1), delay);
      return () => clearTimeout(id);
    } else {
      const id = setTimeout(() => setPhase("fade"), 500);
      return () => clearTimeout(id);
    }
  }, [visibleLines, phase]);

  useEffect(() => {
    if (phase === "fade") {
      const id = setTimeout(() => setPhase("done"), 600);
      return () => clearTimeout(id);
    }
  }, [phase]);

  if (phase === "done") {
    return (
      <div className="animate-hero-in">
        {children}
      </div>
    );
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
        phase === "fade" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="font-mono text-xs space-y-2 w-64">
        {lines.slice(0, visibleLines).map((line, i) => (
          <p
            key={i}
            className={`${
              i === visibleLines - 1 && visibleLines < lines.length
                ? "text-accent"
                : i === lines.length - 1 && visibleLines === lines.length
                ? "text-green-500"
                : "text-muted"
            }`}
          >
            {line}
            {i === visibleLines - 1 && visibleLines < lines.length && (
              <span className="animate-pulse ml-1">_</span>
            )}
          </p>
        ))}
        <div className="mt-4 h-px bg-border overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-300 ease-out"
            style={{ width: `${(visibleLines / lines.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
