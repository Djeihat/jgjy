# Population & Density Data Sources

---

## Free / Government

- **US Census Bureau — American Community Survey (ACS)** — annual estimates of
  population, household size, income, and demographics down to the census tract
  level. Free API. Primary source given the census tract granularity targeted
  by this project.
  - ACS 5-Year API: https://www.census.gov/data/developers/data-sets/acs-5year.html
  - Free API key signup: https://api.census.gov/data/key_signup.html
- **Census TIGER/Line Shapefiles** — geographic boundary files that correspond
  to Census data. Essential for rendering census tracts on a map. For web
  rendering, the simplified Cartographic Boundary files are usually preferable.
  - TIGER/Line: https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html
  - Cartographic Boundary (simplified): https://www.census.gov/geographies/mapping-files/time-series/geo/cartographic-boundary.html
- **CDC/ATSDR Social Vulnerability Index (SVI)** — combines Census data into a
  composite score of community vulnerability. Useful context layer, especially
  for the environmental justice angle.
  - Portal + downloads: https://www.atsdr.cdc.gov/placeandhealth/svi/index.html
- **NASA SEDAC (Socioeconomic Data and Applications Center)** — global
  population density grids. Useful if the project expands beyond the US.
  - Portal: https://sedac.ciesin.columbia.edu/

---

## How Population Data Supports the Project

- **Normalization** — raw waste tonnage or energy consumption numbers mean
  little without knowing how many people generated them. Per-capita metrics
  make communities of different sizes comparable.
- **Pattern identification** — high waste output in low-population areas
  suggests industrial zones; high waste in high-population areas suggests
  residential consumption patterns.
- **Last mile attribution** — denser areas consume more in aggregate but may
  generate less waste per capita; population density helps weight that
  attribution correctly.
