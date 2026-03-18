export default function Home() {
  return (
    <section className="flex flex-col justify-center min-h-[calc(100vh-10rem)]">
      <h1 className="text-5xl font-bold text-accent leading-tight tracking-tight">
        Ruben Saulog
      </h1>
      <p className="text-lg text-foreground mt-3">ML Engineer.</p>
      <p className="text-sm text-muted mt-10 max-w-lg leading-relaxed">
        Building production ML systems — from time series forecasting to
        distributed pipelines. Ex ML Engineering @ Shopee.
      </p>

      <div className="flex items-center gap-8 mt-14 text-xs font-mono text-muted">
        <div>
          <p className="text-2xl font-bold text-accent">10K+</p>
          <p className="mt-0.5 uppercase tracking-wider text-[10px]">SKUs forecasted</p>
        </div>
        <div className="w-px h-10 bg-border" />
        <div>
          <p className="text-2xl font-bold text-accent">20pp</p>
          <p className="mt-0.5 uppercase tracking-wider text-[10px]">avg wMAPE reduction</p>
        </div>
        <div className="w-px h-10 bg-border" />
        <div>
          <p className="text-2xl font-bold text-accent">8</p>
          <p className="mt-0.5 uppercase tracking-wider text-[10px]">business units</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-14">
        <a
          href="/projects"
          className="text-xs bg-accent text-background px-6 py-3 sm:px-4 sm:py-2 hover:opacity-80 transition-opacity text-center"
        >
          view projects &rarr;
        </a>
        <a
          href="/contact"
          className="text-xs text-muted hover:text-accent transition-colors px-6 py-3 sm:px-4 sm:py-2 text-center"
        >
          get in touch
        </a>
      </div>
    </section>
  );
}
