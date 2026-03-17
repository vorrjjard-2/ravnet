import FadeIn from "../components/fade-in";
import ProjectCard, { type Project } from "../components/project-card";

const projects: Project[] = [
  {
    title: "Sales Forecasting Pipeline",
    description: "Production ML system forecasting 10K+ SKUs across 8 business units at Shopee.",
    longDescription:
      "A sequential forecasting architecture designed to handle zero-skewed sales distributions across Shopee's retail business units. The system combines LightGBM for broad SKU coverage with a Temporal Fusion Transformer for data-rich SKUs, distributed across a Ray cluster for scale. Reduced wMAPE by an average of 20 percentage points, directly improving restocking accuracy and cutting opportunity costs.",
    tags: ["Python", "LightGBM", "PyTorch", "Ray"],
    status: "LIVE",
    repo: "https://github.com/vorrjjard-2",
    highlights: [
      "Reduced wMAPE across 8 BUs — average 20pp reduction, max 44pp",
      "Forecasts 10K+ unique SKUs over a 30+ day horizon",
      "Built TFT model in pytorch / pytorch-forecasting / pytorch-lightning for high-data SKUs",
      "Time-series feature engineering: dynamic target encoding, EWM averages, rolling trends",
      "Distributed training and inference via Ray for horizontal scaling",
    ],
    stats: [
      { label: "SKUs", value: "10K+" },
      { label: "avg wMAPE reduction", value: "20pp" },
      { label: "horizon", value: "30+ days" },
    ],
    architecture: ["Feature Store", "LightGBM / TFT", "Ray Cluster", "Evaluation", "Production"],
  },
  {
    title: "Inventory Analytics Dashboard",
    description: "Automated SQL-based dashboard that cut non-moving inventory by 50% in 8 weeks.",
    longDescription:
      "A cron-based automation system that generates daily and historical views of non-moving SKU metrics for Shopee's Retail team under SCommerce. Built to give managers real-time visibility into stagnant inventory worth $20M+ USD, enabling faster decisions on flushing and restocking. The solution was adopted across multiple business units.",
    tags: ["SQL", "Trino", "Python", "pandas"],
    status: "LIVE",
    repo: "https://github.com/vorrjjard-2",
    highlights: [
      "50% decrease in non-moving SKU inventory value within 8 weeks",
      "Daily and historical metric views via cron-automated SQL pipelines",
      "Adopted across multiple business units beyond the original team",
      "Refined replenishment logic for brands like Apple and Samsung",
      "Served as data PIC — inventory reports used by ~25 brands",
    ],
    stats: [
      { label: "inventory managed", value: "$20M+" },
      { label: "non-moving reduction", value: "50%" },
      { label: "brands served", value: "~25" },
    ],
    architecture: ["Trino / SQL", "Cron Scheduler", "pandas ETL", "Dashboard"],
  },
  {
    title: "Temporal Fusion Transformer",
    description: "Deep learning forecasting model built in PyTorch for high-data SKUs.",
    longDescription:
      "A standalone implementation of the Temporal Fusion Transformer architecture using pytorch, pytorch-forecasting, and pytorch-lightning. Designed as a complementary model to the LightGBM pipeline for SKUs with sufficient historical data, leveraging attention mechanisms to capture long-range temporal dependencies and variable-importance interpretability.",
    tags: ["PyTorch", "pytorch-forecasting", "pytorch-lightning"],
    status: "LIVE",
    repo: "https://github.com/vorrjjard-2",
    highlights: [
      "Multi-horizon probabilistic forecasting with quantile outputs",
      "Built-in variable importance via attention weight interpretation",
      "Trained on SKUs with richer historical data for higher accuracy",
      "Integrated into the broader forecasting pipeline alongside LightGBM",
    ],
    stats: [
      { label: "framework", value: "PyTorch" },
      { label: "type", value: "TFT" },
      { label: "output", value: "multi-horizon" },
    ],
    architecture: ["Data Loader", "Encoder", "Attention", "Decoder", "Quantile Output"],
  },
];

export default function Projects() {
  return (
    <section>
      <FadeIn>
        <h1 className="text-2xl font-bold text-accent tracking-tight">
          Projects
        </h1>
        <p className="text-sm text-muted mt-2">
          {projects.length} projects —{" "}
          {projects.filter((p) => p.status === "LIVE").length} live,{" "}
          {projects.filter((p) => p.status === "WIP").length} in progress
        </p>
      </FadeIn>

      <div className="mt-8 space-y-4">
        {projects.map((project, i) => (
          <FadeIn key={project.title}>
            <ProjectCard project={project} index={i} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
