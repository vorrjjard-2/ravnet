export interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "lessons-from-forecasting-10k-skus",
    title: "Lessons from Forecasting 10K+ SKUs at Shopee",
    date: "2025-12-15",
    tags: ["ML Systems", "Forecasting", "Production"],
    summary:
      "What I learned building a production forecasting system that handles 10K+ SKUs across 8 business units — from zero-skewed distributions to distributed training.",
    content: `Building a forecasting system that actually works in production is a fundamentally different challenge from getting a model to converge in a notebook. At Shopee, I learned this the hard way.

The first surprise was the data. Sales data is zero-inflated — most SKUs sell nothing on most days. Traditional error metrics like MAPE break down completely when your actuals are zero. We switched to weighted MAPE (wMAPE) early on, which gave us a much more honest picture of model performance across business units.

The second lesson was about model selection. We initially tried a one-size-fits-all approach with a single architecture. It didn't work. SKUs with rich historical data benefited from the Temporal Fusion Transformer's attention mechanisms, but the long tail of sparse SKUs needed something more robust. LightGBM with carefully engineered features ended up being our workhorse for broad coverage.

Feature engineering turned out to be where most of the value lived. Dynamic target encoding, exponentially weighted moving averages, and rolling statistics (mean, std) over multiple windows gave the models the temporal context they needed. We spent more time on features than on model architecture — and it paid off.

The third lesson was about scale. When you're forecasting 10K+ SKUs over 30+ day horizons, training time matters. We distributed the pipeline across a Ray cluster, which let us parallelize both feature computation and model training. The infrastructure work wasn't glamorous, but it was the difference between a system that runs overnight and one that takes a week.

The result: an average wMAPE reduction of 20 percentage points across 8 business units, with a max improvement of 44pp. More importantly, the system ran reliably in production and directly improved restocking decisions.

If I could distill it down: production ML is 20% modeling and 80% everything else — data quality, feature engineering, infrastructure, monitoring, and collaboration with the teams who actually use your predictions.`,
  },
  {
    slug: "why-lightgbm-still-wins",
    title: "Why LightGBM Still Wins for Tabular Data",
    date: "2025-11-20",
    tags: ["LightGBM", "Model Selection", "Tabular Data"],
    summary:
      "Deep learning gets the headlines, but gradient-boosted trees remain the pragmatic choice for most tabular problems. Here's why.",
    content: `Every few months, a new paper claims that transformers or some novel architecture has finally beaten gradient-boosted trees on tabular data. And every few months, practitioners quietly keep shipping LightGBM.

This isn't stubbornness. There are real, practical reasons why LightGBM (and XGBoost, CatBoost) continue to dominate tabular workloads in production.

Training speed is the obvious one. LightGBM trains in seconds to minutes on datasets that would take hours with a neural network. When you're iterating on features — which you should be doing constantly — this feedback loop matters enormously. A 10-minute training cycle means you can test 40 ideas in a day. A 2-hour cycle means you test 4.

Handling of mixed feature types is another advantage that's easy to overlook. Tabular data in the real world is messy: categorical features with high cardinality, missing values everywhere, features with wildly different scales. LightGBM handles all of this natively. No encoding schemes, no normalization, no imputation strategies to tune.

Interpretability matters more than people admit. When a business stakeholder asks why the model predicted X for a particular SKU, you can point to feature importances and SHAP values that map directly to business concepts. Try explaining attention weights to a supply chain manager.

That said, there are cases where deep learning genuinely helps. When you have sequential structure (time series with long-range dependencies), when you have very large datasets (millions of rows with hundreds of features), or when you need to model complex interactions that trees struggle to capture — that's when architectures like TFT earn their keep.

In our forecasting pipeline at Shopee, we used both. LightGBM covered the long tail of SKUs where data was sparse and speed mattered. TFT handled the high-data SKUs where its attention mechanism could capture complex temporal patterns. The ensemble was stronger than either alone.

The takeaway: don't pick your model based on what's trending on arXiv. Pick it based on your data, your constraints, and your iteration speed. More often than not, that means starting with LightGBM.`,
  },
  {
    slug: "distributed-ml-pipelines-with-ray",
    title: "Building Distributed ML Pipelines with Ray",
    date: "2025-10-08",
    tags: ["Ray", "Distributed Systems", "Infrastructure"],
    summary:
      "How we used Ray to scale our forecasting pipeline from a single machine to a cluster — and the gotchas we hit along the way.",
    content: `When your ML pipeline takes 6 hours on a single machine and you need results by morning, you have two options: optimize the code or distribute it. We did both.

Ray was our choice for distribution, and it turned out to be a good one — but not without some hard-won lessons.

The appeal of Ray is its simplicity. You can take a Python function, decorate it with @ray.remote, and suddenly it runs on any node in your cluster. The mental model is straightforward: tasks are functions, actors are stateful objects, and Ray handles scheduling and data movement.

Our first approach was naive: parallelize everything. We decorated every function with @ray.remote and let Ray figure it out. This was a mistake. The overhead of serializing data between tasks, the memory pressure from too many concurrent workers, and the complexity of debugging distributed failures made things worse, not better.

The key insight was to parallelize at the right granularity. For us, that meant parallelizing across business units and SKU groups, not across individual operations. Each worker got a chunk of SKUs, ran the full feature engineering and training pipeline locally, and returned results. This minimized data movement and kept the code easy to reason about.

Memory management was our biggest gotcha. Ray's object store is powerful but can fill up fast when you're passing large DataFrames between tasks. We learned to use ray.put() for shared read-only data (like calendar features that every worker needs) and to be aggressive about deleting references to objects we no longer needed.

Error handling in distributed systems is fundamentally different from single-machine code. A task might fail because the node ran out of memory, because a network partition happened, or because of a bug in your code. We added retry logic with exponential backoff for transient failures and structured logging that made it possible to trace a failure back to a specific SKU group on a specific node.

The monitoring story with Ray Dashboard was decent for development but we needed more for production. We added custom metrics tracking per-BU training times, memory usage, and prediction quality so we could catch regressions early.

The result was a pipeline that scaled linearly with cluster size. What took 6 hours on one machine took under an hour on our cluster. More importantly, it was reliable enough to run unattended as a nightly job.

If you're considering Ray for your ML pipeline: start simple, parallelize at a coarse granularity, be intentional about memory, and invest in monitoring from day one.`,
  },
];
