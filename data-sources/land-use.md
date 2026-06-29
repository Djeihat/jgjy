# Land Use & Transportation Data Sources

---

## Land Use / Zoning

- **National Land Cover Database (NLCD)** — classifies every 30-meter pixel
  of land in the US into categories: developed (low/med/high intensity),
  agricultural, forest, wetland, etc. Annual CONUS land cover now available
  1985–2024. Free download via the MRLC Consortium; no API but GeoTIFF files
  are well-supported by mapping libraries. Essential for explaining *why*
  certain areas have the material flows they do.
  - Data download: https://www.mrlc.gov/data
  - Interactive viewer: https://www.mrlc.gov/viewer/
- **USDA National Agricultural Statistics Service (NASS)** — tracks cropland,
  livestock inventories, fertilizer and pesticide use by county. Free API.
  Agriculture is one of the largest material input/output systems and a major
  waste generator.
  - QuickStats portal: https://quickstats.nass.usda.gov/
  - API docs (key required): https://quickstats.nass.usda.gov/api/
- **USDA Cropland Data Layer (CDL)** — annual, crop-specific land cover map
  at 30-meter resolution. Free download. More granular than NASS for
  understanding agricultural inputs at the local level.
  - Program: https://www.nass.usda.gov/Research_and_Science/Cropland/SARS1a.php
  - CroplandCROS viewer/download: https://croplandcros.scinet.usda.gov/
- **Local zoning data** — highly variable by municipality. Many cities publish
  zoning shapefiles via open data portals; no national standard exists.

## Transportation Networks

- **Bureau of Transportation Statistics (BTS) — National Transportation Atlas
  Database (NTAD)** — freight rail lines, highways, ports, and intermodal
  connectors as geospatial layers. Free download. Shows the arteries that carry
  materials in and waste out of communities.
  - Portal: https://www.bts.gov/ntad
- **BTS Freight Analysis Framework (FAF)** — also listed in imports-exports.md;
  relevant here for visualizing freight corridors overlaid on land use.
  - Portal: https://www.bts.gov/faf
- **Army Corps of Engineers — Waterborne Commerce Statistics** — tonnage moved
  through inland waterways and ports. Free; useful for river and coastal
  communities.
  - WCSC portal: https://www.iwr.usace.army.mil/Missions/Navigation/Waterborne-Commerce-Statistics-Center/

---

**Why this matters for the project:** Land use data is the explanatory layer —
it tells you *why* a community has the inputs and outputs it does. A census
tract classified as heavy industrial will have a fundamentally different flow
profile than one classified as suburban residential. Transportation networks
show the physical infrastructure connecting those flows.
