import FadeIn from "../components/fade-in";
import ExperienceList from "../components/experience";

export default function About() {
  return (
    <section>
      <FadeIn>
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
      </FadeIn>

      <FadeIn>
        <div className="mt-14 border-t border-border pt-8">
          <h2 className="text-xs text-muted mb-6 font-mono">// at a glance</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "4+", label: "years building" },
              { value: "12", label: "projects shipped" },
              { value: "∞", label: "curiosity" },
            ].map((stat) => (
              <div key={stat.label} className="border border-border p-4 text-center">
                <p className="text-2xl font-bold text-accent">{stat.value}</p>
                <p className="text-[10px] text-muted mt-1 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="mt-14 border-t border-border pt-8">
          <h2 className="text-xs text-muted mb-6 font-mono">// principles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {[
              { title: "Ship, then iterate", body: "A working prototype beats a perfect plan. Get it out, learn, refine." },
              { title: "Simplicity scales", body: "The best systems are the ones you can explain in a sentence." },
              { title: "Own the whole stack", body: "From database schema to deploy pipeline — context is a superpower." },
              { title: "Stay curious", body: "The best engineers never stop being beginners at something." },
            ].map((p) => (
              <div key={p.title} className="group">
                <p className="text-sm text-accent font-medium flex items-center gap-2">
                  <span className="inline-block w-3 h-px bg-muted group-hover:w-5 group-hover:bg-accent transition-all" />
                  {p.title}
                </p>
                <p className="text-xs text-muted mt-1.5 leading-relaxed pl-5">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="mt-14 border-t border-border pt-8">
          <h2 className="text-xs text-muted mb-6 font-mono">// stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { name: "TypeScript", level: 90 },
              { name: "Python", level: 85 },
              { name: "React / Next.js", level: 75 },
              { name: "Node.js", level: 80 },
              { name: "PostgreSQL", level: 70 },
              { name: "Linux", level: 75 },
            ].map((item) => (
              <div key={item.name} className="border border-border p-3 group hover:border-muted transition-colors">
                <p className="text-xs text-accent">{item.name}</p>
                <div className="mt-2 h-px bg-border overflow-hidden">
                  <div
                    className="h-full bg-muted group-hover:bg-accent transition-colors"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="mt-14 border-t border-border pt-8">
          <h2 className="text-xs text-muted mb-6 font-mono">// beyond the terminal</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "mechanical keyboards",
              "specialty coffee",
              "film photography",
              "hiking",
              "sci-fi novels",
              "open source",
              "minimalist design",
              "lo-fi beats",
            ].map((tag) => (
              <span
                key={tag}
                className="text-[10px] text-muted border border-border px-3 py-1 hover:text-accent hover:border-muted transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="mt-14 border-t border-border pt-8">
          <h2 className="text-xs text-muted mb-6 font-mono">// experience</h2>
          <ExperienceList />
        </div>
      </FadeIn>
    </section>
  );
}
