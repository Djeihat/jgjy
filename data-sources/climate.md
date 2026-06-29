# Climate Data Sources

---

## Historical & Forecast Climate

- **NOAA Climate Data Online (CDO)** — temperature, precipitation, wind, and
  storm data from thousands of US weather stations. Free API (token required);
  historical records going back over a century. Useful for contextualizing how
  waste infrastructure is stressed by climate variability.
  - Portal: https://www.ncdc.noaa.gov/cdo-web/
  - Web services API (v2): https://www.ncdc.noaa.gov/cdo-web/webservices/v2
  - Free API token: https://www.ncdc.noaa.gov/cdo-web/token
- **NOAA National Centers for Environmental Information (NCEI)** — archives
  for sea level trends, extreme weather events, and long-term climate normals.
  Free; useful for coastal and flood-prone community analysis.
  - Portal: https://www.ncei.noaa.gov/

## Flood & Disaster Risk

- **FEMA National Flood Hazard Layer (NFHL)** — flood zone designations at
  the parcel level for the entire US. Free API and map services. Shows which
  waste infrastructure (landfills, treatment plants, power plants) sits in
  flood zones and is at climate risk. Directly relevant for understanding
  which communities face compounding risks from waste *and* climate.
  - Overview: https://www.fema.gov/flood-maps/national-flood-hazard-layer
  - Map Service Center (downloads/services): https://msc.fema.gov/
- **FEMA National Risk Index** — county-level composite scores for 18 natural
  hazard types (flood, wildfire, hurricane, etc.) combined with social
  vulnerability and community resilience. Free download and API.
  - Portal: https://hazards.fema.gov/nri/

## Sea Level & Long-Term Projections

- **NOAA Sea Level Rise Viewer** — interactive projections of sea level rise
  scenarios through 2100 at the local level. Underlying data is free and
  downloadable. Relevant if the livability score angle is ever revisited.
  - Portal: https://coast.noaa.gov/slr/
- **First Street Foundation Flood Model** — property-level flood risk scores
  projecting to 2050. More granular than FEMA but commercial; API access
  requires licensing. (Note: see Gemini analysis and DECISIONS.md for context
  on risks of integrating First Street data into a real estate context.)
  - Site: https://firststreet.org/

---

**Why this matters for the project:** Climate data connects material flow to
long-term risk — which infrastructure is vulnerable, which communities will
bear compounding burdens, and how waste patterns may shift as climate changes.
It also provides the factual backbone if the livability score idea is ever
revisited in a non-real-estate context.
