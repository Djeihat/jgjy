# Air & Water Quality Data Sources

---

## Air Quality

- **EPA Air Quality System (AQS)** — the primary repository for US ambient air
  quality monitoring data. Tracks pollutants (PM2.5, ozone, NOx, SO2, CO, lead)
  from thousands of monitoring stations. Free API (key required); data down to
  the county level with some station-level granularity. Note: AQS is the
  validated archive, so data can lag 6+ months — pair with AirNow for current
  conditions.
  - Program: https://www.epa.gov/aqs
  - API docs (key required): https://aqs.epa.gov/aqsweb/documents/data_api.html
- **EPA AirNow** — real-time air quality index (AQI) data from monitoring
  stations and fire/smoke sensors. Free API; useful for current conditions
  layer on the map.
  - Site: https://www.airnow.gov/
  - API docs (key required): https://docs.airnowapi.org/
- **EPA EJSCREEN** — environmental justice screening tool that combines air
  quality, proximity to industrial facilities, and demographic data into a
  composite index. Census block group level. **Status note:** the federal tool
  was removed from EPA's website in Feb 2025; the data persists via archives and
  mirrors below.
  - Jan 2025 EPA snapshot: https://19january2025snapshot.epa.gov/ejscreen/index.html
  - Reconstructed mirror: https://screening-tools.com/epa-ejscreen

## Water Quality

- **EPA WATERS** (Watershed Assessment, Tracking & Environmental Results System)
  — integrates EPA water program data (303(d) impaired waters, TMDLs, pollutant
  loads) linked to the national surface water network (NHDPlus). Useful for
  showing what waste ends up in waterways beyond landfills. (This is the source
  the project notes previously referred to as "WaterSHED.")
  - Portal: https://www.epa.gov/waterdata/waters-watershed-assessment-tracking-environmental-results-system
  - Consumer-facing companion (How's My Waterway): https://mywaterway.epa.gov/
- **USGS National Water Information System (NWIS)** — real-time and historical
  streamflow, groundwater levels, and water quality data from thousands of
  monitoring stations nationwide. Free API with station-level lat/long.
  - Portal: https://waterdata.usgs.gov/nwis
  - Web services API: https://waterservices.usgs.gov/
- **EPA Safe Drinking Water Information System (SDWIS)** — tracks violations
  and enforcement actions at public water systems. Free; useful for showing
  downstream effects of industrial waste on community water supplies.
  - Federal reporting: https://www.epa.gov/ground-water-and-drinking-water/safe-drinking-water-information-system-sdwis-federal-reporting
  - Also queryable via Envirofacts API: https://www.epa.gov/enviro/envirofacts-data-service-api

---

**Why this matters for the project:** Air and water quality data closes the
loop on what happens *after* waste is generated — where it ends up, who is
exposed, and at what levels. Combined with EPA EJSCREEN, it directly supports
the environmental justice framing of the civic engagement angle.
