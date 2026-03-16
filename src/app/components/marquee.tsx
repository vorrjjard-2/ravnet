"use client";

const items = [
  "SYSTEMS DESIGN",
  "DISTRIBUTED COMPUTING",
  "FULL-STACK",
  "INFRASTRUCTURE",
  "OPEN SOURCE",
  "PERFORMANCE",
  "RELIABILITY",
  "AUTOMATION",
];

export default function Marquee() {
  const content = items.join("  ·  ");

  return (
    <div className="overflow-hidden border-y border-border py-2 mt-20 -mx-6">
      <div className="animate-marquee whitespace-nowrap text-[10px] text-muted font-mono tracking-widest">
        {content}
        {"  ·  "}
        {content}
        {"  ·  "}
        {content}
      </div>
    </div>
  );
}
