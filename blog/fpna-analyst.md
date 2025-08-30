---
layout: blog.njk
title: "AI analyst for FP&A"
date: 2025-08-24
description: "How I built an AI agent to help with financial analysis, modeling, and reporting using Autogen and Google Workspace integration."
---

## Problem

FP&A teams are supposed to be the driving force for steering the business with data and insights. Yet teams spend 80% of their time working with data and only 20% of their time on strategic work. 

Existing AI solutions in the FP&A world take a long time to integrate, force you to work in their environment, and have AI features but not AI-native capabiities.

## Potential Solution

I want an agent that can work alongside me to:

* **Analyze financial data**: Understand and explain historical performance (actuals vs. budget/forecast). Identify trends, variances, and anomalies in income statements, balance sheets, and cash flows. Perform variance analysis (YoY, MoM, Budget vs Actual).
* **Research and pull financial data**: Data about competitors or the market from public sources and internal data from my internal data warehouse
* **Build and maintain financial models**: Create 3-statement models (P&L, balance sheet, cash flow). Build forecasting models (e.g. revenue, cost, headcount, or unit economics). Develop scenario and sensitivity analysis to evaluate different business outcomes.

## Experiment

I gave Claude a spreadsheet with (random) financials and asked it to analyze revenue and operating costs. Within minutes, it produced an impressive dashboard with growth trends, margin analysis, and professional visualizations. It was also great that I could give additional prompts to improve the dashboard.

But when I dug deeper, the cracks showed:
* **Judgment and context gaps:** It missed key financial relationships and didn't break down operating expenses into meaningful components
* **Data inaccuracy:** Wrong units (millions vs. thousands), incorrect period mappings, and numerical inconsistencies
* **Different medium:** Outputs charts and commentary in HTML, which does not work well with Excel / Google Sheets, preventing finance teams from building on the work

AI gets you 80% there in 20% of the time, but that last-mile requires a lot of work and industry-specific customisation.

<img src="/media/dashboard.jpeg" alt="Dashboard" />
