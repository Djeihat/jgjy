# Land Use & Transportation Data Sources

---

## Land Use / Zoning

- **National Land Cover Database (NLCD)** — classifies every 30-meter pixel
  of land in the US into categories: developed (low/med/high intensity),
  agricultural, forest, wetland, etc. Updated every 2-3 years. Free download
  via USGS; no API but GeoTIFF files are well-supported by mapping libraries.
  Essential for explaining *why* certain areas have the material flows they do.
- **USDA National Agricultural Statistics Service (NASS)** — tracks cropland,
  livestock inventories, fertilizer and pesticide use by county. Free API
  (quickstats.nass.usda.gov). Agriculture is one of the largest material
  input/output systems and a major waste generator.
- **USDA Cropland Data Layer (CDL)** — annual, crop-specific land cover map
  at 30-meter resolution. Free download. More granular than NASS for
  understanding agricultural inputs at the local level.
- **Local zoning data** — highly variable by municipality. Many cities publish
  zoning shapefiles via open data portals; no national standard exists.

## Transportation Networks

- **Bureau of Transportation Statistics (BTS) — National Transportation Atlas**
  — freight rail lines, highways, ports, and intermodal connectors as
  geospatial layers. Free download. Shows the arteries that carry materials in
  and waste out of communities.
- **BTS Freight Analysis Framework (FAF)** — also listed in imports-exports.md;
  relevant here for visualizing freight corridors overlaid on land use.
- **Army Corps of Engineers — Waterborne Commerce Statistics** — tonnage moved
  through inland waterways and ports. Free; useful for river and coastal
  communities.

---

**Why this matters for the project:** Land use data is the explanatory layer —
it tells you *why* a community has the inputs and outputs it does. A census
tract classified as heavy industrial will have a fundamentally different flow
profile than one classified as suburban residential. Transportation networks
show the physical infrastructure connecting those flows.
