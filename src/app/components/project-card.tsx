"use client";

import { useState } from "react";

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  status: "LIVE" | "WIP" | "ARCHIVED";
  repo: string;
  highlights: string[];
  stats: { label: string; value: string }[];
  architecture: string[];
}

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border group relative overflow-hidden hover:border-muted transition-colors hover:shadow-[0_0_20px_rgba(255,255,255,0.03)]">
      {/* top gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-muted to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      {/* bottom gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-muted to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* collapsed header — always visible */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-5 hover:bg-white/[0.02] transition-colors cursor-pointer"
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted font-mono">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="text-sm font-bold text-accent">
                {project.title}
              </h2>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 border ${
                  project.status === "LIVE"
                    ? "text-green-500 border-green-500/30"
                    : project.status === "WIP"
                    ? "text-yellow-500 border-yellow-500/30"
                    : "text-muted border-border"
                }`}
              >
                {project.status}
              </span>
            </div>
            <p className="text-sm text-foreground mt-1 ml-8">
              {project.description}
            </p>
            <div className="flex gap-2 mt-3 ml-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] text-muted border border-border px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <span className="text-xs text-muted font-mono mt-1 ml-4 shrink-0">
            {open ? "[−]" : "[+]"}
          </span>
        </div>
      </button>

      {/* expanded details */}
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border mx-5" />

        <div className="p-5 pt-4 space-y-5">
          {/* description */}
          <p className="text-xs text-foreground leading-relaxed">
            {project.longDescription}
          </p>

          {/* stats row */}
          <div className="flex gap-3">
            {project.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex-1 border border-border p-3 text-center"
              >
                <p className="text-lg font-bold text-accent">{stat.value}</p>
                <p className="text-[9px] text-muted uppercase tracking-wider mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* highlights */}
          <div>
            <p className="text-[10px] text-muted font-mono mb-2">
              // highlights
            </p>
            <ul className="space-y-1.5">
              {project.highlights.map((h, i) => (
                <li
                  key={i}
                  className="text-xs text-foreground flex gap-2 leading-relaxed"
                >
                  <span className="text-muted shrink-0">&gt;</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* architecture */}
          <div>
            <p className="text-[10px] text-muted font-mono mb-2">
              // architecture
            </p>
            <div className="flex items-center gap-2 flex-wrap font-mono text-[10px]">
              {project.architecture.map((layer, i) => (
                <span key={layer} className="flex items-center gap-2">
                  <span className="border border-border px-2 py-1 text-foreground">
                    {layer}
                  </span>
                  {i < project.architecture.length - 1 && (
                    <span className="text-muted">&rarr;</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* repo link */}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-muted hover:text-accent transition-colors font-mono flex items-center gap-1.5"
              onClick={(e) => e.stopPropagation()}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              {project.repo.replace("https://github.com/", "")}
            </a>
            <span className="text-[10px] text-muted font-mono">
              {project.tags.length} deps · {project.highlights.length} highlights
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
