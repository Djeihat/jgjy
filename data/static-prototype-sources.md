# Static Prototype Data — Portland/Oregon

Status of the static datasets for the first prototype (see ../PLAN.md Phase 2).
Raw downloads live in `data/raw/` (gitignored — too large / regenerable).
Processed, clipped GeoJSON will be committed to `data/processed/` once built.

## Downloaded ✅

| Dataset | File | Contents | Source URL |
|---------|------|----------|------------|
| Census tract boundaries (OR) | `raw/or_tracts_2023/` (shapefile) | All Oregon census tracts, 2023 cartographic boundary (simplified for web) | https://www2.census.gov/geo/tiger/GENZ2023/shp/cb_2023_41_tract_500k.zip |
| EPA TRI 2023 (OR) | `raw/tri_2023_oregon.csv` | 831 toxic release records, facility-level with lat/long, county, chemical | https://data.epa.gov/efservice/downloads/tri/mv_tri_basic_download/2023_OR/csv |
| EPA eGRID 2023 | `raw/egrid2023_data.xlsx` | Every US power plant: fuel, capacity, generation, emissions, lat/long (national — clip to OR during processing) | https://www.epa.gov/system/files/documents/2025-01/egrid2023_data_rev1.xlsx |
| EPA ECHO (OR) | `raw/echo_or_major_dischargers.csv` | 73 active major Clean Water Act dischargers: name, permit, NAICS, lat/long, design flow (MGD) | ECHO CWA REST services, query: state=OR, active=Y, major=Y |

## Blocked — needs a free API key ⚠️

| Dataset | Why we need it | Action |
|---------|----------------|--------|
| Census ACS 5-Year population (tract level) | Per-capita denominator for all metrics | Register a free key at https://api.census.gov/data/key_signup.html, then: `https://api.census.gov/data/2023/acs/acs5?get=NAME,B01003_001E&for=tract:*&in=state:41&key=KEY` |

## Not yet sourced

- **Oregon MSW / waste tonnage** — Oregon DEQ publishes annual Material
  Recovery and Waste Generation reports (county-level tonnage + recovery
  rates). Manual download from https://www.oregon.gov/deq — needs a look to
  pick the right report/year.

## Re-download notes

- The TRI download URL format is `{YEAR}_{STATE}` (e.g. `2023_OR`), not
  `{YEAR}_US_{STATE}`.
- The ECHO CSV needs explicit `qcolumns` to include `FacLat` — the default
  column set omits latitude. Columns used: 1,2,3,4,5,8,23,24,25,26,206.
- Census FTP (www2.census.gov) is slow to start (~2 min stall before transfer)
  but completes; use `--retry` and patience rather than assuming failure.

## Next processing steps (Phase 2 of PLAN.md)

1. Get Census API key → pull tract-level population
2. Convert tract shapefile → GeoJSON (e.g. `ogr2ogr` or mapshaper)
3. Clip eGRID to Oregon; extract plant lat/long, fuel, emissions to CSV
4. Join population to tracts by GEOID
5. Export one GeoJSON per layer into `data/processed/`
