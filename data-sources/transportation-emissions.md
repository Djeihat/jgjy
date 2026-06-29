# Transportation & Vehicle Emissions Data Sources

Note: EPA TRI (waste.md) and eGRID (energy.md) cover stationary sources only
(factories, power plants). Vehicle emissions require separate sources below.

---

## Free / Government

- **EPA National Emissions Inventory (NEI)** — most comprehensive source for
  vehicle emissions. Covers on-road vehicles (cars, trucks, buses) and
  off-road (construction equipment, trains, aircraft, ships) broken down by
  county. Published every 3 years. Free download; no real-time API but data
  is well-structured. Best starting point for vehicle emissions at the county
  level.
  - Portal: https://www.epa.gov/air-emissions-inventories/national-emissions-inventory-nei
- **EPA MOVES (Motor Vehicle Emission Simulator)** — EPA's modeling tool for
  estimating vehicle emissions at the county or project level. Not a dataset
  itself; generates estimates for specific geographies when combined with local
  fleet and traffic data. Free software. Use to bridge the gap between
  county-level NEI data and census tract granularity.
  - Portal: https://www.epa.gov/moves
- **EPA SmartWay** — tracks emissions from freight transportation specifically
  (trucks, rail, air, ocean). Useful for connecting import/export data to the
  emissions cost of moving goods into and out of communities.
  - Portal: https://www.epa.gov/smartway
- **FHWA Traffic Volume Trends** — monthly vehicle miles traveled (VMT) by
  state. Free. VMT is the primary input for estimating vehicle emissions when
  combined with fleet composition data.
  - Portal: https://www.fhwa.dot.gov/policyinformation/travel_monitoring/tvt.cfm

## State-Level (Best in Class)

- **California ARB — EMFAC Model** — if prototyping in California, CARB has
  the most granular vehicle emissions data of any state agency, down to the
  census tract level. Free. Significantly more detailed than federal sources
  for CA-based analysis.
  - Portal: https://arb.ca.gov/emfac/

---

## Granularity Gap

NEI county-level data is the recommended starting point but does not reach
census tract granularity on its own. MOVES modeling can fill that gap but adds
significant complexity. For an early prototype, county-level vehicle emissions
is likely sufficient.

---

## Relationship to Other Data Sources

- Pair with **population.md** (Census ACS) to calculate per-capita vehicle
  emissions by community.
- Pair with **land-use.md** (BTS National Transportation Atlas, FAF) to show
  freight corridors driving commercial vehicle emissions.
- Pair with **air-water-quality.md** (EPA AQS) to connect vehicle emissions
  to observed air quality impacts at the community level.
