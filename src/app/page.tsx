export default function Home() {
  return (
    <section className="flex flex-col justify-center min-h-[60vh]">
      <p className="text-xs text-muted mb-4 font-mono">// hello world</p>
      <h1 className="text-4xl font-bold text-accent leading-tight tracking-tight">
        Ravi Saulog
      </h1>
      <p className="text-lg text-foreground mt-2">Engineer & builder.</p>
      <p className="text-sm text-muted mt-6 max-w-md leading-relaxed">
        I design and build things. Currently exploring ideas at the intersection
        of software, systems, and craft.
      </p>
      <div className="flex gap-4 mt-10">
        <a
          href="/projects"
          className="text-xs border border-border px-4 py-2 hover:bg-accent hover:text-background transition-colors"
        >
          view projects &rarr;
        </a>
        <a
          href="/contact"
          className="text-xs text-muted hover:text-accent transition-colors px-4 py-2"
        >
          get in touch
        </a>
      </div>
    </section>
  );
}
