"use client";

import { useState } from "react";

interface Experience {
  role: string;
  org: string;
  period: string;
  location: string;
  details: string[];
}

const experiences: Experience[] = [
  {
    role: "Machine Learning Engineering Intern",
    org: "Shopee",
    period: "Sep 2025 — Dec 2025",
    location: "Mandaluyong, PH",
    details: [
      "Reduced wMAPE across 8 BUs with an average reduction of 20 percentage points and a max of 44pp, improving restocking and cutting opportunity costs",
      "Built a sequential forecasting architecture using LightGBM to forecast sales for 10K+ SKUs over 30+ day horizons, distributed via Ray",
      "Built a Temporal Fusion Transformer (TFT) in PyTorch / pytorch-forecasting / pytorch-lightning for SKUs with richer data",
      "Implemented EDA techniques — ACFs, correlation matrices, seasonal decomposition — to guide feature engineering",
      "Engineered time-series features: dynamic target encoding, EWM averages, rolling trends (mean, std)",
      "Collaborated with engineers to deploy, monitor, and evaluate the new model architecture in production",
    ],
  },
  {
    role: "Data Engineering Intern",
    org: "Shopee",
    period: "Jun 2025 — Aug 2025",
    location: "Mandaluyong, PH",
    details: [
      "Built data-driven solutions for the Retail team under SCommerce, managing $20M+ USD in inventory value",
      "Developed cron-based SQL dashboard automation for non-moving SKU metrics, achieving a 50% decrease in non-moving inventory USD in 8 weeks",
      "Refined replenishment logic via SQL scripts, giving PICs for brands like Apple and Samsung better visibility on sales and inventory",
      "Served as data PIC — built ad-hoc reports, resolved data discrepancies across BUs, and generated inventory reports used by ~25 brands",
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
          <div key={item.role} className="border border-border">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-baseline justify-between px-4 py-3 text-left cursor-pointer hover:bg-accent/5 transition-colors"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-xs text-muted w-4 transition-transform duration-200" style={{ display: "inline-block", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>
                  +
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
              <ul className="px-4 pb-4 pl-11 pt-3 space-y-2">
                {item.details.map((detail, j) => (
                  <li
                    key={j}
                    className="text-xs text-foreground leading-relaxed flex gap-2"
                  >
                    <span className="text-muted shrink-0">&ndash;</span>
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
