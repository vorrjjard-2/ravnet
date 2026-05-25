import ExperienceList from "../components/experience";
import FadeIn from "../components/fade-in";

export default function About() {
  return (
    <section>
      <p className="text-xs text-muted mb-4 font-mono">// about</p>
      <h1 className="text-2xl font-bold text-accent tracking-tight">About</h1>

      <div className="mt-8 space-y-4 text-sm text-foreground leading-relaxed">
        <p>
          Hello! I'm Ravi, and I love all things related to machine learning. I've worked in various ML subsctions
          like computer vision, forecasting, and most recently, mechanistic interpretability. I'm a hybrid between an engineer 
          and a researcher.
        </p>
        <p>
          I've previously built ML systems for Shopee (see my projects page), although my recent work is more academic,
          being involved with the ALIVE lab. My dream is to contribute to research that changes the world :)
        </p>
      </div>

      <FadeIn>
        <div className="mt-14 border-t border-border pt-8">
          <h2 className="text-xs text-muted mb-6 font-mono">// at a glance</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "3+", label: "pipelines deployed" },
              { value: "$20M+", label: "handled inventory" },
              { value: "pytorch", label: "specialty" },
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
            {["Python", "PyTorch", "LightGBM", "SQL", "pandas"].map((name) => (
              <span
                key={name}
                className="text-xs border border-accent px-3 py-1.5 text-accent"
              >
                {name}
              </span>
            ))}
          </div>
          <div className="mt-6 space-y-3">
            {[
              { category: "ML / Data", items: "scikit-learn, pytorch-lightning, pytorch-forecasting" },
              { category: "Infrastructure", items: "Ray, Trino, SQL pipelines, cron automation" },
              { category: "Languages", items: "Python, SQL, TypeScript" },
              { category: "Visualization", items: "matplotlib, seaborn" },
            ].map((group) => (
              <div key={group.category} className="flex items-baseline gap-4">
                <span className="text-[10px] text-muted uppercase tracking-wider w-24 shrink-0">{group.category}</span>
                <span className="text-sm text-muted">{group.items}</span>
              </div>
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
