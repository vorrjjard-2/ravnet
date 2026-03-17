import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] text-center">
      <p className="text-6xl font-bold text-accent">404</p>
      <p className="text-sm text-muted mt-4">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 text-sm border border-border px-5 py-2 hover:bg-accent hover:text-background transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
      >
        Go home
      </Link>
    </section>
  );
}
