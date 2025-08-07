---
layout: blog.njk
title: "Vibe coding an AI FP&A analyst"
date: 2025-07-26
description: "How I built an AI agent to help with financial analysis, modeling, and reporting using Autogen and Google Workspace integration."
draft: true
---

## Problem

One of my pain points at work is the amount of time spent uncovering insights about the business, understanding trends, reviewing projections and doing planning. We're a lean team so I often have to do charting and analysis myself and I wish there was a better way.

Existing AI solutions I've seen in the FP&A world are too heavy, take a long time to integrate, and they force you to work in their environ. I wanted an agent that could work alongside me in my workspace to:

* **Analyze financial data**: Understand and explain historical performance (actuals vs. budget/forecast). Identify trends, variances, and anomalies in income statements, balance sheets, and cash flows. Perform variance analysis (YoY, MoM, Budget vs Actual).
* **Research and pull financial data**: Data about competitors or the market from public sources and internal data from my internal data warehouse
* **Build and maintain financial models**: Create 3-statement models (P&L, balance sheet, cash flow). Build forecasting models (e.g. revenue, cost, headcount, or unit economics). Develop scenario and sensitivity analysis to evaluate different business outcomes.

## Building an AI finance agent in the terminal

I vibe coded an AI agent that runs in your terminal. The goal is to create a lightweight, flexible assistant that helps with everyday finance work — especially repetitive analysis tasks. The agent is designed to:

- **Automate simple spreadsheet analysis** – Cuts down on manual number crunching and chart creation
- **Work with Google office suite** – Integrates natively with Google Drive, Docs, and Sheets
- **Lightweight and terminal-based** – No need to learn new software or use complex UIs
- **Adapt to your needs** – Able to pull data from different data sources and handle different workflows

## What it can do (so far)

The agent is still a work in progress, but here’s what it can currently handle (somewhat):

- Pull public company financial data from Yahoo Finance into Google Sheets
- Visit company websites and download filings
- Read files from and write to your Google Drive
- Analyze income statements and provide write commentary and charts in a Google Doc 

I’m continuing to experiment and see where this can go. If you work in finance or spend time in spreadsheets and reports, I’d love your feedback.

You can explore the code on [GitHub](https://github.com/jyek/ai-finance-analyst) — suggestions, ideas, and PRs welcome!
