"use client";

import { useEffect, useRef, useState } from "react";

export default function SkillBar({
  name,
  level,
}: {
  name: string;
  level: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="border border-border p-3 group hover:border-muted transition-colors"
    >
      <p className="text-xs text-accent">{name}</p>
      <div className="mt-2 h-px bg-border overflow-hidden">
        <div
          className="h-full bg-muted group-hover:bg-accent transition-all duration-1000 ease-out"
          style={{ width: visible ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}
