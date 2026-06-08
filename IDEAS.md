# Community Material Flow Map — Idea Log

Collaborators: Jay Yamakawa, Justin Garofoli
Status: Initial discovery / brainstorming

## Core Concept

Look at the input/output of geographic areas — what materials are brought in,
what ends up as waste, where it comes from, where it goes. Could scale from
huge regions (e.g., Pacific Northwest) down to an individual household.

Original idea: an interactive, real-time(ish) map showing this flow data.

## Idea Threads

### 1. Investigative-journalism / civic-engagement angle (Justin, 2026-06-XX)
- For every community: main inputs/outputs, where materials come from and go,
  how much waste of what type, and what's done with it.
- A deeply connected, real-time (to the extent data allows) map that goes deep
  per community.
- Kernel hook: **"How much garbage is my community producing?"** — framed to
  trigger engagement with the waste/sustainability problem.
- Note: anticipate that "pro-garbage" interest groups likely have playbooks for
  deflecting this kind of messaging — worth studying how similar
  investigative/data-journalism efforts have been pushed back on.

### 2. Hover-map UX + property valuation / livability score (Jay)
- Real-time map you can hover over: popup shows high-level info like "main
  type of waste created" for that area.
- Extension: a property valuation (or more likely a "livability/risk score")
  tool that factors in waste/environmental data and climate change exposure.
- Example: a beachfront property might score lower than its price would
  suggest once climate/environmental factors are weighed in.
- This is arguably a *different product* (real estate / personal finance
  audience) than the civic-engagement angle, but could share a data layer.

## Research Questions to Answer
1. How much of the average product ends up as waste in some way? Broken down
   by type?
2. What are the categories of waste?
3. Where do we find data on imports and domestically generated products?
4. Where do we get information and data about how each
   community/neighborhood/city/state/country handles their waste?

## Open Questions / Things to Resolve Later
- Data availability: waste/disposal data (EPA TRI, LMOP, state agencies) is
  more accessible than "what comes in" / consumption data — likely the
  tractable starting point.
- Which audience to prioritize first: investigative-journalism/civic, or
  real-estate/valuation?
- What's the smallest data slice that proves the concept (one dataset, one
  region) before attempting the "deeply connected real-time map" vision?
- Eventually: turn this into an actual plan (data sources, prototype scope,
  platform/stack).

## Next Steps
- [ ] Keep logging new ideas/conversation excerpts here as they come up
- [ ] Identify candidate data sources for a first prototype
- [ ] Pick one angle (civic vs. valuation) to prototype first
- [ ] Draft a scoped MVP plan
