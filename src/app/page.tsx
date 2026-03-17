import FadeIn from "./components/fade-in";

export default function Home() {
  return (
    <section className="flex flex-col flex-1">
      <div className="flex flex-col justify-center flex-1">
        <FadeIn>
          <h1 className="text-4xl font-bold text-accent leading-tight tracking-tight">
            Ruben Saulog
          </h1>
          <p className="text-lg text-foreground mt-2">ML Engineer</p>
          <p className="text-sm text-muted mt-6 max-w-lg leading-relaxed">
            Building production ML systems — from time series forecasting to
            distributed pipelines. Previously ML Engineering at Shopee, where I
            reduced forecast error by 20pp across 10K+ SKUs.
          </p>
          <p className="text-xs text-muted mt-4 max-w-lg leading-relaxed">
            Currently finishing undergrad at Ateneo de Manila, exploring
            attention mechanisms for time series. Based in QC, Philippines.
          </p>
          <div className="flex gap-4 mt-10">
            <a
              href="/resume"
              className="text-sm border border-border px-5 py-2 hover:bg-accent hover:text-background transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              Resume
            </a>
            <a
              href="/contact"
              className="text-sm text-muted hover:text-accent transition-colors px-5 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              Contact
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
