# Energy Data Sources

---

## Free / Government

- **EPA eGRID** — gold standard for power plant data. Covers every
  grid-connected plant in the US: fuel type, generation capacity, annual
  output, and emissions (CO2, NOx, SO2, methane). Updated annually; free
  downloadable flat files (Excel). Includes plant-level lat/long — maps directly
  onto a geographic visualization layer.
  - Overview: https://www.epa.gov/egrid
  - Detailed downloads: https://www.epa.gov/egrid/detailed-data
- **EPA CAMPD (Clean Air Markets Program Data)** — hourly emissions data from
  large power plants under the Acid Rain Program. More granular than eGRID for
  emissions tracking. Free REST API.
  - Portal: https://campd.epa.gov/
  - API portal: https://www.epa.gov/power-sector/cam-api-portal
- **EIA (Energy Information Administration)** — most comprehensive energy data
  source in the US government. Well-documented free API (v2) with reliable
  uptime and consistent schemas. Key datasets:
  - **EIA-860** — annual survey of every power plant: location, capacity, fuel
    type, ownership
  - **EIA-923** — monthly fuel consumption and electricity generation by plant
  - **EIA-861** — electric utility sales, revenue, and customer counts by
    state/utility
  - Open Data + free key signup: https://www.eia.gov/opendata/
  - API docs (v2): https://www.eia.gov/opendata/documentation.php
- **USGS Mineral Resources Data** — tracks fuel extraction (coal mines,
  natural gas wells) at the source; useful for the inputs side of the story.
  - Portal: https://mrdata.usgs.gov/

---

**Why this matters for the project:** EIA and eGRID both include plant-level
lat/long, so they drop directly onto the map. You can show not just how much
power a community consumes, but where it's generated, what fuel it burns, and
what it emits — closing the loop between consumption and environmental cost
visually.
