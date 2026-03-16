export default function About() {
  return (
    <section>
      <p className="text-xs text-muted mb-4 font-mono">// about</p>
      <h1 className="text-2xl font-bold text-accent tracking-tight">About</h1>

      <div className="mt-8 space-y-4 text-sm text-foreground leading-relaxed max-w-lg">
        <p>
          I&apos;m Ravi — an engineer who likes building things from the ground up.
          I care about clean systems, simple interfaces, and work that
          speaks for itself.
        </p>
        <p>
          When I&apos;m not writing code, I&apos;m probably sketching out ideas,
          reading about distributed systems, or tinkering with something new.
        </p>
      </div>

      <div className="mt-12 border-t border-border pt-8">
        <h2 className="text-xs text-muted mb-4 font-mono">// stack</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-foreground">
          {[
            "TypeScript",
            "Python",
            "React / Next.js",
            "Node.js",
            "PostgreSQL",
            "Linux",
          ].map((item) => (
            <p key={item} className="flex items-center gap-2">
              <span className="text-muted">&gt;</span> {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
