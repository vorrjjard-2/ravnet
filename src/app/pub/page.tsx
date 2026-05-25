"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "../components/fade-in";
import { posts } from "./posts";
import { publications } from "./publications";

type Tab = "papers" | "posts";

const tabs: { id: Tab; label: string }[] = [
  { id: "papers", label: "papers" },
  { id: "posts", label: "posts" },
];

export default function Pub() {
  const [tab, setTab] = useState<Tab>("papers");

  const showPapers = tab === "papers";
  const showPosts = tab === "posts";

  return (
    <section>
      <p className="text-xs text-muted mb-4 font-mono">// pub</p>
      <h1 className="text-2xl font-bold text-accent tracking-tight">Publications</h1>
      <p className="text-sm text-muted mt-2">scientific publications and writing.</p>

      <div className="mt-6 flex items-center gap-2">
        {tabs.map((t) => {
          const isActive = tab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`text-[11px] font-mono px-3 py-1 border transition-colors cursor-pointer ${
                isActive
                  ? "text-accent border-accent"
                  : "text-muted border-border hover:text-accent hover:border-muted"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {showPapers && (
        <div className="mt-8">
          {publications.length > 0 ? (
            <div className="space-y-4">
              {publications.map((pub) => (
                <FadeIn key={pub.title}>
                  <article className="border border-border p-5">
                    <div className="flex items-baseline justify-between gap-4">
                      <h2 className="text-sm font-bold text-accent">
                        {pub.title}
                      </h2>
                      <span className="text-[10px] text-muted font-mono shrink-0">
                        {pub.year}
                      </span>
                    </div>
                    <p className="text-xs text-muted mt-1.5 italic">
                      {pub.authors.join(", ")} — {pub.venue}
                    </p>
                    {pub.summary && (
                      <p className="text-sm text-foreground mt-3 leading-relaxed">
                        {pub.summary}
                      </p>
                    )}
                    {pub.tags && pub.tags.length > 0 && (
                      <div className="flex gap-2 mt-3 flex-wrap">
                        {pub.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] text-muted border border-border px-2 py-0.5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                    {pub.links.length > 0 && (
                      <div className="flex gap-3 mt-3 pt-3 border-t border-border">
                        {pub.links.map((l) => (
                          <a
                            key={l.url}
                            href={l.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] text-muted hover:text-accent transition-colors font-mono"
                          >
                            [{l.label}]
                          </a>
                        ))}
                      </div>
                    )}
                  </article>
                </FadeIn>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted font-mono">no papers yet.</p>
          )}
        </div>
      )}

      {showPosts && (
        <div className="mt-8">
          {posts.length > 0 ? (
            <div className="space-y-4">
              {posts.map((post) => (
                <FadeIn key={post.slug}>
                  <Link href={`/pub/${post.slug}`} className="block group">
                    <article className="border border-border p-5 hover:bg-white/[0.02] transition-colors">
                      <div className="flex items-baseline justify-between">
                        <h2 className="text-sm font-bold text-accent group-hover:underline">
                          {post.title}
                        </h2>
                        <span className="text-[10px] text-muted font-mono ml-4 shrink-0">
                          {post.date}
                        </span>
                      </div>
                      <p className="text-sm text-foreground mt-2 leading-relaxed">
                        {post.summary}
                      </p>
                      <div className="flex gap-2 mt-3">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] text-muted border border-border px-2 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </article>
                  </Link>
                </FadeIn>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted font-mono">nothing here yet.</p>
          )}
        </div>
      )}
    </section>
  );
}
