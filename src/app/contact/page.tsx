import FadeIn from "../components/fade-in";

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

      <FadeIn>
        <div className="mt-10 space-y-4">
          {[
            { label: "email", value: "ruben.saulog@gmail.com", href: "mailto:ruben.saulog@gmail.com" },
            { label: "github", value: "github.com/vorrjjard-2", href: "https://github.com/vorrjjard-2" },
            { label: "linkedin", value: "linkedin.com/in/ruben-saulog", href: "https://linkedin.com/in/ruben-saulog" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-baseline gap-4 group"
            >
              <span className="text-xs text-muted w-16">{item.label}</span>
              <span className="text-sm text-foreground group-hover:text-accent transition-colors">
                {item.value}
              </span>
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
