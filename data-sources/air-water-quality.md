# Air & Water Quality Data Sources

---

## Air Quality

- **EPA Air Quality System (AQS)** (aqs.epa.gov) — the primary repository for
  US ambient air quality monitoring data. Tracks pollutants (PM2.5, ozone, NOx,
  SO2, CO, lead) from thousands of monitoring stations. Free API; data down to
  the county level with some station-level granularity. Updated daily.
- **EPA AirNow** (airnow.gov) — real-time air quality index (AQI) data from
  monitoring stations and fire/smoke sensors. Free API; useful for current
  conditions layer on the map.
- **EPA EJSCREEN** — environmental justice screening tool that combines air
  quality, proximity to industrial facilities, and demographic data into a
  composite index. Free, census block group level. Strong overlap with the
  project's environmental justice angle.

## Water Quality

- **EPA WaterSHED** — tracks pollutant loads in US waterways, including
  nutrients, sediment, and toxics. Useful for showing what waste ends up in
  waterways beyond landfills.
- **USGS National Water Information System (NWIS)** (waterdata.usgs.gov) —
  real-time and historical streamflow, groundwater levels, and water quality
  data from thousands of monitoring stations nationwide. Free API with
  station-level lat/long.
- **EPA Safe Drinking Water Information System (SDWIS)** — tracks violations
  and enforcement actions at public water systems. Free; useful for showing
  downstream effects of industrial waste on community water supplies.

---

**Why this matters for the project:** Air and water quality data closes the
loop on what happens *after* waste is generated — where it ends up, who is
exposed, and at what levels. Combined with EPA EJSCREEN, it directly supports
the environmental justice framing of the civic engagement angle.
