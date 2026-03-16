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
            I&apos;m Ruben — an aspiring ML engineer passionate about building
            real-world machine learning systems. I&apos;ve worked across forecasting,
            computer vision, and research, and I&apos;m driven by advancing toward
            top-tier ML research.
          </p>
          <p>
            Currently finishing my BS in Management Information Systems at
            Ateneo de Manila University. Previously built production ML pipelines
            at Shopee, from distributed forecasting systems to inventory analytics.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="mt-14 border-t border-border pt-8">
          <h2 className="text-xs text-muted mb-6 font-mono">// at a glance</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "7mo", label: "at Shopee" },
              { value: "10K+", label: "SKUs forecasted" },
              { value: "20pp", label: "avg wMAPE reduction" },
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
          <h2 className="text-xs text-muted mb-6 font-mono">// what drives me</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {[
              { title: "Systems over scripts", body: "Production ML is about pipelines, not notebooks. Build things that run at scale." },
              { title: "Research with purpose", body: "The best models solve real problems — forecasting demand, optimizing inventory, cutting costs." },
              { title: "Learn by building", body: "Every new architecture is a chance to understand something deeper about the math underneath." },
              { title: "Ship and measure", body: "A deployed model with metrics beats a perfect model on your laptop." },
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
              { name: "Python", level: 90 },
              { name: "PyTorch", level: 85 },
              { name: "scikit-learn", level: 85 },
              { name: "SQL / Trino", level: 80 },
              { name: "Ray", level: 70 },
              { name: "LightGBM", level: 80 },
              { name: "pandas", level: 90 },
              { name: "pytorch-lightning", level: 75 },
              { name: "matplotlib / seaborn", level: 75 },
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
          <h2 className="text-xs text-muted mb-6 font-mono">// education</h2>
          <div className="space-y-4">
            <div className="border border-border p-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="text-sm text-accent">Ateneo de Manila University</p>
                  <p className="text-xs text-muted">BS Management Information Systems</p>
                </div>
                <p className="text-[10px] text-muted font-mono">2022 — 2027</p>
              </div>
            </div>
            <div className="border border-border p-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="text-sm text-accent">Xavier School</p>
                  <p className="text-xs text-muted">High School Diploma, STEM</p>
                </div>
                <p className="text-[10px] text-muted font-mono">2009 — 2022</p>
              </div>
            </div>
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
