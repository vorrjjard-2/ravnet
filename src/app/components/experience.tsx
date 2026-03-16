"use client";

import { useState } from "react";

interface Experience {
  role: string;
  org: string;
  period: string;
  details: string[];
}

const experiences: Experience[] = [
  {
    role: "Software Engineer",
    org: "Company A",
    period: "2023 — present",
    details: [
      "Designed and shipped a real-time event processing pipeline handling 50k+ events/sec",
      "Led migration from monolith to microservices, reducing deploy times by 80%",
      "Built internal tooling for automated incident triage and alerting",
    ],
  },
  {
    role: "Backend Developer",
    org: "Company B",
    period: "2021 — 2023",
    details: [
      "Owned the authentication and authorization system serving 2M+ users",
      "Implemented rate limiting and abuse detection at the API gateway layer",
      "Mentored junior engineers and led weekly architecture reviews",
    ],
  },
  {
    role: "Intern",
    org: "Company C",
    period: "2020 — 2021",
    details: [
      "Built a dashboard for monitoring CI/CD pipeline health and build metrics",
      "Wrote integration tests that caught a critical data migration bug before release",
      "Contributed to open-source internal libraries used across 10+ teams",
    ],
  },
];

export default function ExperienceList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {experiences.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.org} className="border border-border">
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
                  <p className="text-xs text-muted">{item.org}</p>
                </div>
              </div>
              <p className="text-[10px] text-muted font-mono">{item.period}</p>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
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
