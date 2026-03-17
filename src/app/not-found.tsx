"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const skull = `
    _______________
   /               \\
  /                 \\
 /    ___     ___    \\
|    /   \\   /   \\    |
|   | x   | | x   |   |
|    \\___/   \\___/    |
|                     |
|       _______       |
|      |       |      |
 \\     |  404  |     /
  \\    |_______|    /
   \\               /
    \\_____________/
        |     |
        |     |
        |     |
       _|     |_
      |_________|
`;

// hello world

const glitchChars = "!@#$%^&*()_+-=[]{}|;:',.<>?/~`";

function glitchText(text: string, intensity: number): string {
  return text
    .split("")
    .map((ch) => {
      if (ch === " " || ch === "\n") return ch;
      return Math.random() < intensity
        ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
        : ch;
    })
    .join("");
}

export default function NotFound() {
  const [art, setArt] = useState(skull);
  const [glitching, setGlitching] = useState(true);

  useEffect(() => {
    if (!glitching) return;

    let frame = 0;
    const maxFrames = 12;

    const id = setInterval(() => {
      frame++;
      const intensity = Math.max(0, 0.4 - (frame / maxFrames) * 0.4);
      setArt(glitchText(skull, intensity));

      if (frame >= maxFrames) {
        clearInterval(id);
        setArt(skull);
        setGlitching(false);
      }
    }, 80);

    return () => clearInterval(id);
  }, [glitching]);

  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] text-center">
      <pre className="text-[10px] sm:text-xs text-muted font-mono leading-tight select-none">
        {art}
      </pre>

      <div className="mt-6 space-y-2 font-mono">
        <p className="text-sm text-muted">
          <span className="text-accent select-none">&gt; </span>
          error: page not found
        </p>
        <p className="text-sm text-muted">
          <span className="text-accent select-none">&gt; </span>
          the requested resource does not exist on this server
        </p>
        <p className="text-sm text-muted">
          <span className="text-accent select-none">&gt; </span>
          process exited with code 404
        </p>
      </div>

      <div className="flex gap-4 mt-10">
        <Link
          href="/"
          className="text-xs border border-border px-4 py-2 hover:bg-accent hover:text-background transition-colors"
        >
          return home &rarr;
        </Link>
        <button
          onClick={() => setGlitching(true)}
          className="text-xs border border-border px-4 py-2 text-muted hover:text-accent transition-colors cursor-pointer"
        >
          retry &circlearrowright;
        </button>
      </div>
    </section>
  );
}
