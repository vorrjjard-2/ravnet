const projects = [
  {
    title: "Project Alpha",
    description: "A distributed task scheduler built for reliability.",
    tags: ["Go", "Redis", "gRPC"],
  },
  {
    title: "Project Beta",
    description: "Real-time data pipeline with sub-second latency.",
    tags: ["Python", "Kafka", "PostgreSQL"],
  },
  {
    title: "Project Gamma",
    description: "Minimal CLI tool for managing cloud infrastructure.",
    tags: ["Rust", "AWS", "CLI"],
  },
];

export default function Projects() {
  return (
    <section>
      <p className="text-xs text-muted mb-4 font-mono">// projects</p>
      <h1 className="text-2xl font-bold text-accent tracking-tight">
        Projects
      </h1>

      <div className="mt-8 space-y-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-border p-5 hover:border-muted transition-colors group"
          >
            <h2 className="text-sm font-bold text-accent group-hover:underline">
              {project.title}
            </h2>
            <p className="text-sm text-foreground mt-1">
              {project.description}
            </p>
            <div className="flex gap-2 mt-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] text-muted border border-border px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
