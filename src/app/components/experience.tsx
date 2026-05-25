"use client";

import { useState } from "react";
import { experiences } from "../data/experiences";

export default function ExperienceList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {experiences.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.role} className="border border-border">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-baseline justify-between px-4 py-3 hover:bg-white/[0.02] transition-colors text-left cursor-pointer"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-xs text-muted font-mono w-4">
                  {isOpen ? "−" : "+"}
                </span>
                <div>
                  <p className="text-sm text-accent">{item.role}</p>
                  <p className="text-xs text-muted">{item.org} · {item.location}</p>
                </div>
              </div>
              <p className="text-[10px] text-muted font-mono">{item.period}</p>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="px-4 pb-4 pl-11 space-y-2">
                {item.details.map((detail, j) => (
                  <li
                    key={j}
                    className="text-xs text-foreground leading-relaxed flex gap-2"
                  >
                    <span className="text-muted shrink-0">&gt;</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
