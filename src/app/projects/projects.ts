import { type Project } from "../components/project-card";

export type LabProject = {
  title: string;
  description: string;
  tags: string[];
  repo: string;
  lastCommit: string;
  status: "BUILDING" | "ARCHIVED" | "COMPLETE" | "UPCOMING";
};

export const projects: Project[] = [
  {
    title: "Sales Forecasting Pipeline",
    description: "Production ML system forecasting 10K+ SKUs across 8 business units at Shopee.",
    longDescription:
      "A sequential forecasting architecture designed to handle zero-skewed sales distributions across Shopee's retail business units. The system combines LightGBM for broad SKU coverage with a Temporal Fusion Transformer for data-rich SKUs, distributed across a Ray cluster for scale. Reduced wMAPE by an average of 20 percentage points, directly improving restocking accuracy and cutting opportunity costs.",
    tags: ["Python", "LightGBM", "PyTorch", "Ray"],
    status: "LIVE",
    pinned: true,
    repos: [{ url: "https://github.com/vorrjjard-2" }],
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
    pinned: true,
    repos: [{ url: "https://github.com/vorrjjard-2" }],
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
    title: "CXR Classifier + VQA Module",
    description:
      "Parameter-efficient chest X-ray classifier and VQA module powering a radiologist-facing diagnostic platform at Ateneo's ALIVE lab.",
    longDescription:
      "Research work at the Ateneo Laboratory for Intelligent Visual Environments (ALIVE) as second author / research assistant. The classifier uses a custom symmetry-aware block to reach ~0.999 AUC and 98.97% held-out accuracy on TBX11K, matching DenseNet-121 and ResNet-50 baselines at 3-9× fewer parameters across nine evaluated architectures. A companion VQA module converts raw model outputs (logits, bounding-box coordinates) into natural-language responses via a fine-tuned LLM, and is integrated into a full-stack web platform used by radiologists to upload CXRs and review diagnostic results.",
    tags: ["PyTorch", "CV", "LLM", "VQA"],
    status: "WIP",
    pinned: true,
    repos: [
      { label: "classifier", url: "" }, // TODO: paste model repo URL here
      { label: "vqa-module", url: "" }, // TODO: paste VQA module repo URL here
    ],
    highlights: [
      "~0.999 AUC and 98.97% held-out accuracy on TBX11K",
      "Matches DenseNet-121 / ResNet-50 baselines at 3-9× fewer parameters",
      "Custom symmetry-aware block evaluated across nine architectures",
      "VQA module bridges model outputs to natural-language explanations via a fine-tuned LLM",
      "Integrated into a full-stack web platform used by radiologists",
    ],
    stats: [
      { label: "AUC", value: "~0.999" },
      { label: "accuracy", value: "98.97%" },
      { label: "param reduction", value: "3-9×" },
    ],
    architecture: [
      "CXR Input",
      "Symmetry-Aware Backbone",
      "Classifier Head",
      "VQA / LLM",
      "Web Platform",
    ],
  },
];

export const labProjects: LabProject[] = [
  {
    title: "temporal-fusion-transformer",
    description: "PyTorch implementation of TFT for multi-horizon SKU forecasting with attention-based interpretability.",
    tags: ["PyTorch", "Forecasting"],
    repo: "",
    lastCommit: "",
    status: "COMPLETE",
  },
  {
    title: "word2vec",
    description: "Skip-gram with negative sampling trained on WikiText-2, producing 512-d word vectors end-to-end in PyTorch Lightning.",
    tags: ["PyTorch", "NLP"],
    repo: "https://github.com/vorrjjard-2/word2vec.git",
    lastCommit: "Feb 2026",
    status: "COMPLETE",
  },
  {
    title: "vision-transformer",
    description: "ViT implementation from the original paper (arXiv 2010.11929), trained end-to-end with PyTorch Lightning.",
    tags: ["PyTorch", "CV"],
    repo: "https://github.com/vorrjjard-2/minis.git",
    lastCommit: "Mar 2026",
    status: "COMPLETE",
  },
  {
    title: "yolov3",
    description: "Modular YOLOv3 object detection with registry-based swappable backbones, necks, and heads.",
    tags: ["PyTorch", "CV"],
    repo: "https://github.com/vorrjjard-2/yolo-v3.git",
    lastCommit: "Mar 2026",
    status: "COMPLETE",
  },
  {
    title: "transformer-from-scratch",
    description: "Minimal transformer implementation following Vaswani et al., trained on a small corpus.",
    tags: ["PyTorch", "NLP"],
    repo: "",
    lastCommit: "Mar 2026",
    status: "UPCOMING",
  },
];
