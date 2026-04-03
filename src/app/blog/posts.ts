export interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  content: string;
}

export function readingTime(content: string): number {
  const words = content.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 238));
}

export const posts: Post[] = [
  {
    slug: "feature-engineering-time-series",
    title: "Useful Feature Engineering Tips for Time Series Forecasting (in my exp.)",
    date: "2026-04-03",
    tags: ["machine learning", "time series", "feature engineering"],
    summary:
      "Lessons learned from building a time series model at a large e-commerce company — techniques that delivered a wMAPE almost 40% lower than the previous model.",
    content: `In contrast to other problems related to machine learning, time series forecasting can be one of the more tricky ones. Unlike structured tabular data, you can't just throw all your variables into one pandas DataFrame and immediately start modeling - there are lots of nuances you have to care about, especially in more professional settings.

These are all lessons learned from my last job, where I was tasked to build a time series model for a large e-commerce company to help predict the out-bounded inventory per day, or in other words, how much inventory per SKU was moving daily to satisfy customer orders. Of course, the business application here was to have enough stock to satisfy close to 100% of customer orders, while also not taking too much space in a warehouse per SKU (to make space for others).

I'd rather not go too deep into the problems I faced like how zero-skewed the data was, the inconsistent lengths of data per SKU, and also the problem of forecasting data for new SKUs. Rather, I'd like to share a set of techniques that allowed me to solve these problems and deliver a wMAPE which was almost 40% lower than the previous model.

---

Naturally, all time series data starts with a set of observations at some time, t, where t starts at 0 and has a maximum at your last timestep. At the very minimum, this is the data required to build a time series model. You could, theoretically use this as input to some model, where you might slide some window over past observations and use the window to predict the next observation in the series. However, often times, the actual observations need supplementary descriptors (in other words, meta-data about the data) to help our models understand why they ended up being that way. The following are techniques describing the aforementioned :

## Three Descriptors of Time Series Data

I like using the terminologies formalized by the paper on the Temporal Fusion Transformer (which is basically a transformer utilized for forecasting) to describe the different types of data we can use to supplement our model. These are :

- observed inputs : these are variables derivative of the past inputs / outputs that describe our past data. They make sense of observations at specific timesteps, which gives the model more context on why they ended up that way.
- known inputs : these are variables which are known ahead of time. They provide context to the timestep being forecasted, allowing for more accurate predictions.
- static covariates : these are more time-invariant descriptors of the object being forecasted, which are most useful when one model needs to forecast multiple different objects.

I'll go into these categories in detail shortly :

### Observed Inputs

Your observed inputs are derived from your past values. Assuming you're trying to make a forecast for April with past data from January to March, you have a whole three months of real data to make sense of! Some things you can try :

- rolling averages, to protect against outliars and encode a general trend
- a rolling standard deviation (std) to determine the volatility of your values
- coefficient of variation (rolling or otherwise), etc.

As you can see, most observed inputs are just statistical derivatives of the past values in our time series data. Of course, I've just named the basics here, but there are far more feature engineering oppurtunities once you get to know your data.

### Known Inputs

Your known inputs are your variables known a priori, and are most usually derivative now of your timestep t instead of your past observations. Often, you should find yourself describing the context of this specific timestep. Let's take a day granularity for example :

- a binary value indicating if the timestep is on a weekend
- encoding the day of week as an integer
- a categorical variable describing a sale on that day

These variables should help the model make generalizations not just about the forecast data in general, but how the data is shaped by the timestep by which its contextualized.

### Static Covariates

Finally, static covariates are your unchanging descriptors about your data. Going back to our SKU example :

- store ID (imagine different stores selling the same SKU)
- Product Category ID (perhaps SKUs in the same category have similar sales trends)
- SKU dimensions (perhaps larger SKUs have a harder time selling)

---

Before anything though, make sure you know your data and forecast architecture well. Do your due diligences with data cleaning and preparation before even thinking of applying any of these feature engineering techniques.

> I plan to release more technical works soon about my work. Though, it was nice to reflect on how I was able to deliver on my promise to V, my second boss.`,
  },
];
