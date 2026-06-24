# Waste Data Sources

---

## Municipal Solid Waste & Industrial Emissions

- **EPA Toxics Release Inventory (TRI)** — tracks over 3.2 million release
  records from thousands of industrial facilities. Accessible via EPA
  Envirofacts REST API (free, no auth key required). Filter by state, chemical,
  company, or GPS coordinates. Caveat: annual reporting cycle means ~1 year
  data lag.
- **EPA Landfill Methane Outreach Program (LMOP)** — data on landfill locations,
  size, and methane capture. Useful for mapping waste destinations.
- **State EPA datasets** — highly variable by state. Seattle Public Utilities
  is a best-in-class example (daily refresh); most states report annually.

## Sewage / Wastewater

- **EPA ECHO Database** (echo.epa.gov) — facilities with NPDES permits
  (all municipal wastewater treatment plants) report monthly discharge volumes.
  Free API with facility lat/long — maps directly into a geographic
  visualization layer with minimal transformation. Most granular and regularly
  updated source.
- **EPA Clean Watersheds Needs Survey (CWNS)** — tracks capacity and flow of
  publicly owned treatment works (POTWs) nationwide. Conducted every 4 years;
  includes volume processed by facility and state.
- **USGS Water Use Data** — water use estimates every 5 years by county,
  including public supply and wastewater return flows. Free, county-level
  geographic resolution.

---

**Context:** EPA estimates the US processes ~34 billion gallons of wastewater
per day across ~16,000 treatment plants. ECHO breaks this down by facility.

## Food Waste

- **EPA Food Waste Hierarchy** — framework and national estimates for food
  waste generation and diversion by sector (farms, retail, households).
  Free, but high-level rather than granular geographic data.
- **ReFED** (refed.org) — the most detailed public estimates of where US food
  waste originates, broken down by sector and solution pathway. Publishes an
  annual Insights Engine with state-level data. Free to access.

**Context:** Food is the single largest category of US municipal landfill waste
by weight. ReFED estimates ~80 million tons of food goes to waste annually.

## Construction & Demolition (C&D) Waste

- **EPA C&D Materials** — national estimates of C&D waste generation and
  management. Data is limited and largely modeled rather than directly
  measured; state agencies vary widely in what they track.
- **State solid waste reports** — some states (California, Oregon) track C&D
  separately in annual waste characterization studies.

**Context:** C&D waste accounts for roughly 40% of total US solid waste by
weight but is massively underreported in public datasets. Treat any figures
here as estimates.

## E-Waste

- **EPA Sustainable Materials Management (SMM) Electronics Challenge** —
  voluntary program tracking electronics refurbishment and recycling. Coverage
  is incomplete; participation is opt-in.
- **UN Global E-waste Monitor** — best available global estimates of e-waste
  generation by country. Free reports published every few years.

**Context:** E-waste is almost entirely untracked in US public data at the
local level. No comprehensive domestic tracking system exists. Figures are
estimates only.
