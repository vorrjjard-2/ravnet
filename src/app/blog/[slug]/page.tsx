import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts, readingTime } from "../posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
  };
}

function InlineText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(`[^`]+`)/).map((segment, j) =>
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
    </>
  );
}

function renderContent(content: string) {
  const blocks: React.ReactNode[] = [];
  const lines = content.split("\n");

  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // blank line — skip
    if (line.trim() === "") {
      i++;
      continue;
    }

    // horizontal rule
    if (line.trim() === "---") {
      blocks.push(
        <hr key={key++} className="border-border !my-8" />
      );
      i++;
      continue;
    }

    // h2
    if (line.startsWith("## ")) {
      blocks.push(
        <h2
          key={key++}
          className="text-lg font-bold text-accent tracking-tight !mt-10 !mb-1"
        >
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    // h3
    if (line.startsWith("### ")) {
      blocks.push(
        <h3
          key={key++}
          className="text-base font-bold text-accent tracking-tight !mt-8 !mb-0"
        >
          {line.slice(4)}
        </h3>
      );
      i++;
      continue;
    }

    // list block — collect consecutive "- " lines
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      blocks.push(
        <ul key={key++} className="space-y-2 pl-4">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="text-sm text-foreground leading-relaxed list-disc marker:text-muted"
            >
              <InlineText text={item} />
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // blockquote
    if (line.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        quoteLines.push(lines[i].slice(2));
        i++;
      }
      blocks.push(
        <div key={key++} className="!mt-10 rounded border border-border overflow-hidden">
          <div className="flex items-center gap-1.5 px-3 py-2 bg-border/40 border-b border-border">
            <span className="w-2 h-2 rounded-full bg-muted/40" />
            <span className="w-2 h-2 rounded-full bg-muted/40" />
            <span className="w-2 h-2 rounded-full bg-muted/40" />
          </div>
          <pre className="px-4 py-3 text-xs text-muted leading-relaxed whitespace-pre-wrap font-mono">
            {quoteLines.join("\n")}
          </pre>
        </div>
      );
      continue;
    }

    // paragraph — collect consecutive non-special lines
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      lines[i].trim() !== "---" &&
      !lines[i].startsWith("## ") &&
      !lines[i].startsWith("### ") &&
      !lines[i].startsWith("- ") &&
      !lines[i].startsWith("> ")
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      blocks.push(
        <p
          key={key++}
          className="text-sm text-foreground leading-relaxed"
        >
          <InlineText text={paraLines.join(" ")} />
        </p>
      );
    }
  }

  return blocks;
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const minutes = readingTime(post.content);

  return (
    <section>
      <Link
        href="/blog"
        className="text-xs text-muted hover:text-accent transition-colors font-mono"
      >
        &larr; back to blog
      </Link>

      <h1 className="text-2xl font-bold text-accent tracking-tight mt-12">
        {post.title}
      </h1>

      <div className="flex items-center gap-2 flex-wrap mt-4 text-[10px] text-muted font-mono">
        <span>{post.date}</span>
        <span>&middot;</span>
        <span>{minutes} min read</span>
        <span>&middot;</span>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="border border-border px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>

      <article className="mt-12 space-y-5 max-w-2xl">
        {renderContent(post.content)}
      </article>

      <div className="mt-16 pt-6 border-t border-border">
        <Link
          href="/blog"
          className="text-xs text-muted hover:text-accent transition-colors font-mono"
        >
          &larr; back to blog
        </Link>
      </div>
    </section>
  );
}
