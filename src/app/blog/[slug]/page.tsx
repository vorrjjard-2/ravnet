import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import FadeIn from "../../components/fade-in";
import { posts } from "../posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const paragraphs = post.content.split("\n\n");

  return (
    <section>
      <FadeIn>
        <Link
          href="/blog"
          className="text-xs text-muted hover:text-accent transition-colors font-mono"
        >
          &larr; back to blog
        </Link>

        <div className="mt-8">
          <p className="text-[10px] text-muted font-mono">{post.date}</p>
          <h1 className="text-2xl font-bold text-accent tracking-tight mt-2">
            {post.title}
          </h1>
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
        </div>
      </FadeIn>

      <FadeIn>
        <article className="mt-10 space-y-5">
          {paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="text-sm text-foreground leading-relaxed max-w-lg"
            >
              {paragraph.split(/(`[^`]+`)/).map((segment, j) =>
                segment.startsWith("`") && segment.endsWith("`") ? (
                  <code
                    key={j}
                    className="text-accent bg-border/50 px-1.5 py-0.5 text-xs rounded"
                  >
                    {segment.slice(1, -1)}
                  </code>
                ) : (
                  <span key={j}>{segment}</span>
                )
              )}
            </p>
          ))}
        </article>
      </FadeIn>

      <FadeIn>
        <div className="mt-16 pt-6 border-t border-border">
          <Link
            href="/blog"
            className="text-xs text-muted hover:text-accent transition-colors font-mono"
          >
            &larr; back to blog
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
