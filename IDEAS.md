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

## Data Sources

### Port Import/Export Data
**Free / Government**
- **USA Trade Online** (usatrade.census.gov) — Monthly import/export by
  commodity (HS code), port of entry, and country of origin. Free with
  registration. Good starting point for state and port-level aggregation.
- **Bureau of Transportation Statistics — Freight Analysis Framework (FAF)**
  — Models commodity flows between regions by mode (ship, rail, truck, air).
- **US Customs Inbound Ocean Manifests** — Technically public domain via FOIA,
  but raw feed costs ~$100/day from CBP directly (what commercial providers
  resell).
- **USDA Foreign Agricultural Service — GATS** (apps.fas.usda.gov/gats) —
  Import/export data for food and agricultural commodities. Free public access
  with a free API; query by commodity, country, and date range.

**Low-Cost / Freemium**
- **UN Comtrade** (comtrade.un.org) — Annual country-level trade data by
  commodity. Free tier has API rate limits; bulk access requires subscription.
  Good for macro-level input modeling.
- **MIT Observatory of Economic Complexity** (oec.world) — Built on Comtrade
  data, much more accessible UI and API. Good for visualizing flows.

**Commercial (expensive)**
- **Panjiva / S&P Global** — Bill of lading data at shipment level. Enterprise
  pricing, likely $10k+/year.
- **ImportGenius, Descartes Datamyne** — Similar, ~$2,700–$11,000/year.

**Recommended starting point:** USA Trade Online + BTS FAF — free, port-level
geographic resolution, no IoT infrastructure required.

## Research Questions to Answer
1. How much of the average product ends up as waste in some way? Broken down
   by type?
2. What are the categories of waste?
3. Where do we find data on imports and domestically generated products?
4. Where do we get information and data about how each
   community/neighborhood/city/state/country handles their waste?

## Decisions Made
- **Household granularity:** Real-time, household-level tracking is off the
  table (requires expensive IoT/RFID infrastructure and creates privacy/legal
  exposure). Instead, generalize at the household level — aggregate data to
  census tract or neighborhood scale, which is sufficient for civic impact and
  sidesteps CPRA liability. This mirrors the approach used by CoolClimate
  (UC Berkeley).

## Gaps and Overlooked Factors

### Data Gaps
- **The "last mile" problem** — port-level import data shows what enters the
  country, but connecting that to what ends up in a specific neighborhood
  requires bridging federal trade data with local consumption patterns. No
  single dataset does this cleanly. Likely the biggest modeling challenge.
- **Informal and illegal dumping** — a meaningful portion of waste in many
  communities never enters official reporting. The map will systematically
  underrepresent waste in areas with less municipal infrastructure.
- **Waste that leaves the country** — the US exports significant recyclables
  and e-waste abroad (historically China, now Southeast Asia). This outflow
  is largely invisible in domestic waste reporting but is a major part of the
  actual material story.

### Product Lifecycle Complexity
- A product imported through the Port of Seattle might be consumed in Phoenix.
  The geographic link between import location and waste generation is loose.
  Need a clear methodology for attributing embodied waste to communities vs.
  ports of entry.

### Stakeholders Worth Engaging Early
- **Municipal waste haulers** (Waste Management, Republic Services) — private
  companies that handle most US residential waste collection and hold data
  unavailable through any public API. Partnership or data licensing could
  unlock significant granularity.
- **Environmental justice orgs** — have been mapping this problem for years,
  often at the neighborhood level, with ground-truth data and community trust
  that no API provides.

### Strategic Questions Still Open
- **Who is the primary user?** A journalist, city planner, and concerned
  resident need very different interfaces and detail levels. Picking one
  persona early will drive most product decisions.
- **What update cadence actually matters?** Annual data may be enough to tell
  a compelling story — worth pressure-testing whether "near real-time" is a
  genuine user need or just an appealing feature.
- **Project sustainability model** — nonprofit, media org, or commercial
  product? This determines funding, data licensing options, and capacity to
  clean messy government datasets.

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
