import Link from "next/link";
import { posts } from "./posts";

export const metadata = {
  title: "Blog",
  description: "Writing about ML systems, forecasting, and production engineering.",
};

export default function Blog() {
  return (
    <section>
      <p className="text-xs text-muted mb-4 font-mono">// blog</p>
      <h1 className="text-2xl font-bold text-accent tracking-tight">Blog</h1>

      <div className="mt-8 space-y-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
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
        ))}
      </div>
    </section>
  );
}
