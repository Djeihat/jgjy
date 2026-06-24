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
