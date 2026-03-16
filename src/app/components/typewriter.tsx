"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Engineer & builder.",
  "Systems thinker.",
  "Maker of things.",
  "Perpetually curious.",
];

export default function Typewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < phrase.length) {
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setDeleting(true), 2000);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex(charIndex - 1);
          } else {
            setDeleting(false);
            setPhraseIndex((phraseIndex + 1) % phrases.length);
          }
        }
      },
      deleting ? 30 : 80
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <span className="text-lg text-foreground">
      {phrases[phraseIndex].slice(0, charIndex)}
      <span className="animate-pulse text-muted">|</span>
    </span>
  );
}
