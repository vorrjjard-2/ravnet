export interface Experience {
  role: string;
  org: string;
  period: string;
  location: string;
  details: string[];
}

export const experiences: Experience[] = [
  {
    role: "Research Assistant / Second Author",
    org: "Ateneo ALIVE Lab",
    period: "May 2026 — Present",
    location: "Quezon City, PH",
    details: [
      "Built a parameter-efficient CXR classifier with a custom symmetry-aware block, achieving ~0.999 AUC and 98.97% held-out accuracy on TBX11K — matching DenseNet-121 and ResNet-50 baselines at 3-9× fewer parameters across nine evaluated architectures",
      "Designed and implemented a VQA module that converts model outputs (logits, bounding-box coordinates) into natural-language responses via a fine-tuned LLM",
      "Integrated the module into a full-stack web platform used by radiologists to upload CXRs and review diagnostic results",
    ],
  },
  {
    role: "Machine Learning Engineering Intern",
    org: "Shopee",
    period: "Sep 2025 — Dec 2025",
    location: "Mandaluyong, PH",
    details: [
      "Reduced wMAPE across 8 BUs with an average reduction of 20 percentage points and a max of 44pp, improving restocking and cutting opportunity costs",
      "Built a sequential forecasting architecture using LightGBM to forecast sales for 10K+ SKUs over 30+ day horizons, distributed via Ray",
      "Built a Temporal Fusion Transformer (TFT) in PyTorch / pytorch-forecasting / pytorch-lightning for SKUs with richer data",
      "Implemented EDA techniques — ACFs, correlation matrices, seasonal decomposition — to guide feature engineering",
      "Engineered time-series features: dynamic target encoding, EWM averages, rolling trends (mean, std)",
      "Collaborated with engineers to deploy, monitor, and evaluate the new model architecture in production",
    ],
  },
  {
    role: "Data Engineering Intern",
    org: "Shopee",
    period: "Jun 2025 — Aug 2025",
    location: "Mandaluyong, PH",
    details: [
      "Built data-driven solutions for the Retail team under SCommerce, managing $20M+ USD in inventory value",
      "Developed cron-based SQL dashboard automation for non-moving SKU metrics, achieving a 50% decrease in non-moving inventory USD in 8 weeks",
      "Refined replenishment logic via SQL scripts, giving PICs for brands like Apple and Samsung better visibility on sales and inventory",
      "Served as data PIC — built ad-hoc reports, resolved data discrepancies across BUs, and generated inventory reports used by ~25 brands",
    ],
  },
];
