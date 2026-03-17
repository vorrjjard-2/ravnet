import FadeIn from "../components/fade-in";
import ExperienceList from "../components/experience";

export default function About() {
  return (
    <section>
      <FadeIn>
        <h1 className="text-2xl font-bold text-accent tracking-tight">About</h1>

        <div className="mt-8 space-y-4 text-sm text-foreground leading-relaxed max-w-xl">
          <p>
            I&apos;m Ruben — an ML engineer focused on building
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
          <h2 className="text-sm font-bold text-accent mb-6">What drives me</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {[
              { title: "Systems over scripts", body: "Production ML is about pipelines, not notebooks. Build things that run at scale." },
              { title: "Research with purpose", body: "The best models solve real problems — forecasting demand, optimizing inventory, cutting costs." },
              { title: "Learn by building", body: "Every new architecture is a chance to understand something deeper about the math underneath." },
              { title: "Ship and measure", body: "A deployed model with metrics beats a perfect model on your laptop." },
            ].map((p) => (
              <div key={p.title}>
                <p className="text-sm text-accent font-medium">{p.title}</p>
                <p className="text-xs text-muted mt-1.5 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="mt-14 border-t border-border pt-8">
          <h2 className="text-sm font-bold text-accent mb-6">Stack</h2>
          <div className="space-y-4">
            {[
              { category: "Languages", items: "Python, SQL, TypeScript" },
              { category: "ML / Data", items: "PyTorch, scikit-learn, LightGBM, pandas, pytorch-lightning" },
              { category: "Infrastructure", items: "Ray, Trino, SQL pipelines, cron automation" },
              { category: "Visualization", items: "matplotlib, seaborn" },
            ].map((group) => (
              <div key={group.category}>
                <p className="text-xs text-muted uppercase tracking-wider">{group.category}</p>
                <p className="text-sm text-foreground mt-1">{group.items}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="mt-14 border-t border-border pt-8">
          <h2 className="text-sm font-bold text-accent mb-6">Experience</h2>
          <ExperienceList />
        </div>
      </FadeIn>

      <FadeIn>
        <div className="mt-14 border-t border-border pt-8">
          <h2 className="text-sm font-bold text-accent mb-6">Education</h2>
          <div className="border border-border p-4">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-sm text-accent">Ateneo de Manila University</p>
                <p className="text-xs text-muted">BS Management Information Systems</p>
              </div>
              <p className="text-xs text-muted font-mono">2022 — 2027</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
