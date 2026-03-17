import ExperienceList from "../components/experience";
import FadeIn from "../components/fade-in";

export default function About() {
  return (
    <section>
      <p className="text-xs text-muted mb-4 font-mono">// about</p>
      <h1 className="text-2xl font-bold text-accent tracking-tight">About</h1>

      <div className="mt-8 space-y-4 text-sm text-foreground leading-relaxed">
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
        <h2 className="text-xs text-muted mb-6 font-mono">// stack</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Python", "PyTorch", "scikit-learn", "SQL / Trino",
            "Ray", "LightGBM", "pandas", "pytorch-lightning",
            "matplotlib / seaborn",
          ].map((name) => (
            <span
              key={name}
              className="text-xs border border-border px-3 py-1.5 text-foreground"
            >
              {name}
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
    </section>
  );
}
