# Energy Data Sources

---

## Free / Government

- **EPA eGRID** — gold standard for power plant data. Covers every
  grid-connected plant in the US: fuel type, generation capacity, annual
  output, and emissions (CO2, NOx, SO2, methane). Updated annually; free API
  and downloadable flat files. Includes plant-level lat/long — maps directly
  onto a geographic visualization layer.
- **EPA CAMPD (Clean Air Markets)** — hourly emissions data from large power
  plants under the Acid Rain Program. More granular than eGRID for emissions
  tracking. Free API via EPA's CAMPD portal.
- **EIA (Energy Information Administration)** (api.eia.gov) — most
  comprehensive energy data source in the US government. Well-documented free
  API with reliable uptime and consistent schemas. Key datasets:
  - **EIA-860** — annual survey of every power plant: location, capacity, fuel
    type, ownership
  - **EIA-923** — monthly fuel consumption and electricity generation by plant
  - **EIA-861** — electric utility sales, revenue, and customer counts by
    state/utility
- **USGS Mineral Resources Data** — tracks fuel extraction (coal mines,
  natural gas wells) at the source; useful for the inputs side of the story.

---

**Why this matters for the project:** EIA and eGRID both include plant-level
lat/long, so they drop directly onto the map. You can show not just how much
power a community consumes, but where it's generated, what fuel it burns, and
what it emits — closing the loop between consumption and environmental cost
visually.
