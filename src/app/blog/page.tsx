import Link from "next/link";
import FadeIn from "../components/fade-in";
import { posts } from "./posts";

export const metadata = {
  title: "Blog",
  description: "Writing about ML systems, forecasting, and production engineering.",
};

export default function Blog() {
  return (
    <section>
      <FadeIn>
        <h1 className="text-2xl font-bold text-accent tracking-tight">Blog</h1>
        <p className="text-sm text-muted mt-2">
          Thoughts on ML systems, production engineering, and lessons learned.
        </p>
      </FadeIn>

      <div className="mt-8 space-y-4">
        {posts.map((post) => (
          <FadeIn key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block group">
              <article className="border border-border p-5 hover:bg-accent/5 transition-colors">
                <div className="flex items-baseline justify-between">
                  <h2 className="text-sm font-bold text-accent group-hover:underline transition-colors">
                    {post.title}
                  </h2>
                  <span className="text-[10px] text-muted font-mono ml-4 shrink-0">
                    {post.date}
                  </span>
                </div>
                <p className="text-sm text-foreground mt-2 leading-relaxed">
                  {post.summary}
                </p>
                <div className="flex gap-2 mt-3 flex-wrap">
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
    </section>
  );
}
