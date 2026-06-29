# Data Sources

Each file catalogs sources for one category, with canonical portal links and —
where one exists — the API/download endpoint a developer would actually wire in.

| File | Category |
|------|----------|
| [imports-exports.md](imports-exports.md) | Port/trade data — what flows into communities |
| [waste.md](waste.md) | Municipal solid waste, industrial emissions, sewage, food waste, C&D, e-waste |
| [energy.md](energy.md) | Power plants, fuel consumption, emissions |
| [population.md](population.md) | Population density, census tracts, demographic context |
| [air-water-quality.md](air-water-quality.md) | EPA AQS, AirNow, EJSCREEN, EPA WATERS, USGS NWIS |
| [land-use.md](land-use.md) | NLCD, USDA NASS, zoning, transportation networks |
| [socioeconomic.md](socioeconomic.md) | Income, poverty, environmental justice (EJSCREEN, CalEnviroScreen) |
| [climate.md](climate.md) | NOAA, FEMA flood hazard, sea level projections |
| [transportation-emissions.md](transportation-emissions.md) | Vehicle emissions, NEI, MOVES, FHWA VMT, SmartWay |

---

## Prototype Shortlist

The minimum set of sources to stand up a first **"How much garbage is my
community producing?"** map. All are free, return census-tract-mappable data,
and have a real API or direct download — so a prototype can be wired without
licensing negotiations or IoT infrastructure.

| Layer | Source | Endpoint | Access |
|-------|--------|----------|--------|
| **Base geography** | Census Cartographic Boundary (tracts) | https://www.census.gov/geographies/mapping-files/time-series/geo/cartographic-boundary.html | Free download |
| **Population / demographics** | Census ACS 5-Year | https://www.census.gov/data/developers/data-sets/acs-5year.html | Free API ([key](https://api.census.gov/data/key_signup.html)) |
| **Industrial/toxic releases** | EPA TRI via Envirofacts | https://www.epa.gov/enviro/envirofacts-data-service-api | Free API, no key |
| **Wastewater** | EPA ECHO | https://echo.epa.gov/tools/web-services | Free API |
| **Power plants & emissions** | EPA eGRID | https://www.epa.gov/egrid/detailed-data | Free download (lat/long) |
| **Air quality (current)** | EPA AirNow | https://docs.airnowapi.org/ | Free API (key) |
| **Env. justice overlay** | EPA EJSCREEN (archived) | https://19january2025snapshot.epa.gov/ejscreen/index.html | Mirror (federal site removed 2/2025) |

**Why this set:** TRI (no key, lat/long), eGRID (lat/long), and ECHO drop point
features straight onto a map with minimal transformation; ACS + tract boundaries
give the choropleth base and the per-capita denominator. Start with one
metro/state to keep volumes small.

**Watch-outs for the prototype:**
- **EJSCREEN** was pulled from EPA's site in Feb 2025 — only archived/mirror
  copies remain (see [air-water-quality.md](air-water-quality.md)). Treat as a
  static dataset, not a live API.
- **AQS** validated data lags 6+ months; use **AirNow** for any "current
  conditions" layer.
- **Census tract attribution** is the core modeling challenge — most federal
  sources are facility-point or county-level, not tract-level. See the
  "last mile" gap in [../IDEAS.md](../IDEAS.md).
- Several sources need a **free API key** (Census, AirNow, EIA, NOAA CDO,
  USDA NASS). Register these before building.
