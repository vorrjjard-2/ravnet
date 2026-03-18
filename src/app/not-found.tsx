import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] text-center">
      <p className="text-6xl font-bold text-accent">404</p>

      <div className="mt-6 space-y-1 font-mono">
        <p className="text-sm text-muted">page not found</p>
        <p className="text-xs text-muted">
          the requested resource does not exist on this server
        </p>
      </div>

      <Link
        href="/"
        className="mt-10 text-xs border border-border px-4 py-2 hover:bg-accent hover:text-background transition-colors"
      >
        return home &rarr;
      </Link>
    </section>
  );
}
