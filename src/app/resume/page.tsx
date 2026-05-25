import ResumeShell from "../components/resume-shell";
import { experiences } from "../data/experiences";

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

          {experiences.map((exp, i) => (
            <div key={exp.role} className={i === 0 ? "mt-3" : "mt-4"}>
              <div className="flex items-baseline justify-between">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-xs font-bold text-accent">{exp.role}</h3>
                  <span className="text-[10px] text-muted">
                    &middot; {exp.org} &middot; {exp.location}
                  </span>
                </div>
                <p className="text-[10px] text-muted shrink-0 ml-2">
                  {exp.period}
                </p>
              </div>
              <ul className="mt-1.5 space-y-1 text-[11px] text-foreground leading-relaxed">
                {exp.details.map((detail, j) => (
                  <li key={j} className="flex gap-1.5">
                    <span className="text-muted shrink-0">&ndash;</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
