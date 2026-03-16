import FadeIn from "../components/fade-in";

const projects = [
  {
    title: "Project Alpha",
    description: "A distributed task scheduler built for reliability.",
    tags: ["Go", "Redis", "gRPC"],
    status: "LIVE",
  },
  {
    title: "Project Beta",
    description: "Real-time data pipeline with sub-second latency.",
    tags: ["Python", "Kafka", "PostgreSQL"],
    status: "LIVE",
  },
  {
    title: "Project Gamma",
    description: "Minimal CLI tool for managing cloud infrastructure.",
    tags: ["Rust", "AWS", "CLI"],
    status: "WIP",
  },
];

export default function Projects() {
  return (
    <section>
      <FadeIn>
        <p className="text-xs text-muted mb-4 font-mono">// projects</p>
        <h1 className="text-2xl font-bold text-accent tracking-tight">
          Projects
        </h1>
        <p className="text-xs text-muted mt-2 font-mono">
          {projects.length} entries found — {projects.filter((p) => p.status === "LIVE").length} live, {projects.filter((p) => p.status === "WIP").length} in progress
        </p>
      </FadeIn>

      <div className="mt-8 space-y-6">
        {projects.map((project, i) => (
          <FadeIn key={project.title}>
            <div className="border border-border p-5 hover:border-muted transition-all group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-muted to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-sm font-bold text-accent">
                      {project.title}
                    </h2>
                  </div>
                  <p className="text-sm text-foreground mt-1 ml-8">
                    {project.description}
                  </p>
                </div>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 border ${
                    project.status === "LIVE"
                      ? "text-green-500 border-green-500/30"
                      : "text-yellow-500 border-yellow-500/30"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <div className="flex gap-2 mt-3 ml-8">
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
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
