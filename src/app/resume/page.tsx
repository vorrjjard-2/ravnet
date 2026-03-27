import ResumeShell from "../components/resume-shell";

export const metadata = {
  title: "Resume",
  description: "Ruben Saulog — ML Engineer resume and experience.",
};

export default function ResumePage() {
  return (
    <ResumeShell>
      <section className="border border-border p-6 sm:p-10 max-w-2xl mx-auto bg-background">
        {/* header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-border">
          <div>
            <h1 className="text-xl font-bold text-accent tracking-tight">
              Ruben Saulog
            </h1>
            <p className="text-xs text-muted mt-0.5">ML Engineer</p>
          </div>
          <div className="text-right text-[10px] text-muted leading-relaxed space-y-0.5">
            <p>ruben.saulog@gmail.com</p>
            <p>github.com/vorrjjard-2</p>
            <p>linkedin.com/in/ruben-saulog</p>
            <a
              href="/Saulog_Ruben.pdf"
              className="inline-block mt-1 border border-border px-2 py-0.5 hover:bg-accent hover:text-background transition-colors"
            >
              pdf &darr;
            </a>
          </div>
        </div>

        {/* summary */}
        <p className="text-xs text-foreground leading-relaxed mt-4">
          Building production ML systems — from time series forecasting to
          distributed pipelines. Experienced in end-to-end ML engineering:
          feature stores, model training, distributed inference, and deployment.
          Ex ML Engineering @ Shopee.
        </p>

        {/* experience */}
        <div className="mt-6">
          <h2 className="text-[10px] text-muted uppercase tracking-widest font-bold border-b border-border pb-1">
            Experience
          </h2>

          <div className="mt-3">
            <div className="flex items-baseline justify-between">
              <div className="flex items-baseline gap-2">
                <h3 className="text-xs font-bold text-accent">
                  ML Engineering Intern
                </h3>
                <span className="text-[10px] text-muted">
                  &middot; Shopee &middot; Mandaluyong, PH
                </span>
              </div>
              <p className="text-[10px] text-muted shrink-0 ml-2">
                Sep &ndash; Dec 2025
              </p>
            </div>
            <ul className="mt-1.5 space-y-1 text-[11px] text-foreground leading-relaxed">
              <li className="flex gap-1.5">
                <span className="text-muted shrink-0">&ndash;</span>
                <span>
                  Reduced wMAPE across 8 business units — average 20pp
                  reduction, max 44pp — directly improving restocking accuracy
                </span>
              </li>
              <li className="flex gap-1.5">
                <span className="text-muted shrink-0">&ndash;</span>
                <span>
                  Built sequential forecasting architecture using LightGBM for
                  10K+ SKUs over 30+ day horizons
                </span>
              </li>
              <li className="flex gap-1.5">
                <span className="text-muted shrink-0">&ndash;</span>
                <span>
                  Developed Temporal Fusion Transformer in PyTorch /
                  pytorch-forecasting for high-data SKUs with attention-based
                  interpretability
                </span>
              </li>
              <li className="flex gap-1.5">
                <span className="text-muted shrink-0">&ndash;</span>
                <span>
                  Distributed training and inference via Ray cluster for
                  horizontal scaling
                </span>
              </li>
              <li className="flex gap-1.5">
                <span className="text-muted shrink-0">&ndash;</span>
                <span>
                  Engineered time-series features: dynamic target encoding, EWM
                  averages, rolling trends (mean, std)
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <div className="flex items-baseline justify-between">
              <div className="flex items-baseline gap-2">
                <h3 className="text-xs font-bold text-accent">
                  Data Engineering Intern
                </h3>
                <span className="text-[10px] text-muted">
                  &middot; Shopee &middot; Mandaluyong, PH
                </span>
              </div>
              <p className="text-[10px] text-muted shrink-0 ml-2">
                Jun &ndash; Aug 2025
              </p>
            </div>
            <ul className="mt-1.5 space-y-1 text-[11px] text-foreground leading-relaxed">
              <li className="flex gap-1.5">
                <span className="text-muted shrink-0">&ndash;</span>
                <span>
                  Built data-driven solutions for the Retail team under
                  SCommerce, managing $20M+ USD in inventory value
                </span>
              </li>
              <li className="flex gap-1.5">
                <span className="text-muted shrink-0">&ndash;</span>
                <span>
                  Developed cron-based SQL dashboard automation for non-moving
                  SKU metrics — 50% decrease in non-moving inventory in 8 weeks
                </span>
              </li>
              <li className="flex gap-1.5">
                <span className="text-muted shrink-0">&ndash;</span>
                <span>
                  Refined replenishment logic via SQL scripts for brands like
                  Apple and Samsung
                </span>
              </li>
              <li className="flex gap-1.5">
                <span className="text-muted shrink-0">&ndash;</span>
                <span>
                  Served as data PIC — built ad-hoc reports and generated
                  inventory reports used by ~25 brands
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* two-column: education + skills */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* education */}
          <div>
            <h2 className="text-[10px] text-muted uppercase tracking-widest font-bold border-b border-border pb-1">
              Education
            </h2>
            <div className="mt-3 space-y-3">
              <div>
                <p className="text-xs font-bold text-accent">
                  Ateneo de Manila University
                </p>
                <p className="text-[10px] text-muted">
                  BS Management Information Systems
                </p>
                <p className="text-[10px] text-muted">2022 &ndash; 2027</p>
              </div>
              <div>
                <p className="text-xs font-bold text-accent">Xavier School</p>
                <p className="text-[10px] text-muted">
                  High School Diploma, STEM
                </p>
                <p className="text-[10px] text-muted">2009 &ndash; 2022</p>
              </div>
            </div>
          </div>

          {/* skills */}
          <div>
            <h2 className="text-[10px] text-muted uppercase tracking-widest font-bold border-b border-border pb-1">
              Skills
            </h2>
            <div className="mt-3 space-y-2">
              <div>
                <p className="text-[10px] text-muted uppercase tracking-wider">
                  Languages
                </p>
                <p className="text-[11px] text-foreground">
                  Python, SQL, TypeScript
                </p>
              </div>
              <div>
                <p className="text-[10px] text-muted uppercase tracking-wider">
                  ML / Data
                </p>
                <p className="text-[11px] text-foreground">
                  PyTorch, scikit-learn, LightGBM, pandas, pytorch-lightning
                </p>
              </div>
              <div>
                <p className="text-[10px] text-muted uppercase tracking-wider">
                  Infrastructure
                </p>
                <p className="text-[11px] text-foreground">
                  Ray, Trino, SQL pipelines, cron automation
                </p>
              </div>
              <div>
                <p className="text-[10px] text-muted uppercase tracking-wider">
                  Visualization
                </p>
                <p className="text-[11px] text-foreground">
                  matplotlib, seaborn
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ResumeShell>
  );
}
