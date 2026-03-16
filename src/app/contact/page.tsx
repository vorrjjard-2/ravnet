export default function Contact() {
  return (
    <section>
      <p className="text-xs text-muted mb-4 font-mono">// contact</p>
      <h1 className="text-2xl font-bold text-accent tracking-tight">
        Contact
      </h1>

      <p className="text-sm text-foreground mt-6 max-w-md leading-relaxed">
        Want to collaborate or just say hello? Reach out through any of the
        channels below.
      </p>

      <div className="mt-10 space-y-4">
        {[
          { label: "email", value: "hello@ravisaulog.com" },
          { label: "github", value: "github.com/ravisaulog" },
          { label: "linkedin", value: "linkedin.com/in/ravisaulog" },
        ].map((item) => (
          <div key={item.label} className="flex items-baseline gap-4">
            <span className="text-xs text-muted w-16">{item.label}</span>
            <span className="text-sm text-foreground hover:text-accent transition-colors">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-16 border border-border p-6">
        <p className="text-xs text-muted mb-4 font-mono">
          // or drop a message
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="name"
            className="w-full bg-transparent border-b border-border text-sm text-foreground py-2 outline-none focus:border-accent transition-colors placeholder:text-muted"
          />
          <input
            type="email"
            placeholder="email"
            className="w-full bg-transparent border-b border-border text-sm text-foreground py-2 outline-none focus:border-accent transition-colors placeholder:text-muted"
          />
          <textarea
            placeholder="message"
            rows={4}
            className="w-full bg-transparent border-b border-border text-sm text-foreground py-2 outline-none focus:border-accent transition-colors placeholder:text-muted resize-none"
          />
          <button
            type="submit"
            className="text-xs border border-border px-6 py-2 hover:bg-accent hover:text-background transition-colors mt-2"
          >
            send &rarr;
          </button>
        </form>
      </div>
    </section>
  );
}
