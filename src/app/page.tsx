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
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-12">
        <a
          href="/projects"
          className="text-xs border border-border px-6 py-3 sm:px-4 sm:py-2 hover:bg-accent hover:text-background transition-colors text-center"
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
