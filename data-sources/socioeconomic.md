# Socioeconomic Data Sources

---

## Income, Poverty & Demographics

- **US Census Bureau — American Community Survey (ACS)** — also listed in
  population.md; relevant here for income, poverty rate, race/ethnicity,
  education, and housing tenure data at the census tract level. Free API. The
  foundational layer for any environmental justice analysis.
  - ACS 5-Year API: https://www.census.gov/data/developers/data-sets/acs-5year.html
  - Free API key signup: https://api.census.gov/data/key_signup.html
- **CDC/ATSDR Social Vulnerability Index (SVI)** — also listed in population.md;
  worth noting here as it directly maps socioeconomic vulnerability to
  geographic areas using 16 Census variables. Free, census tract level.
  - Portal + downloads: https://www.atsdr.cdc.gov/placeandhealth/svi/index.html
- **HUD Low- and Moderate-Income Summary Data (LMISD)** — identifies census
  tracts where 51%+ of residents are low-to-moderate income. Free; useful for
  targeting the environmental justice framing of the project.
  - Portal: https://www.hudexchange.info/programs/acs-low-mod-summary-data/

## Environmental Justice

- **EPA EJSCREEN** — also listed in air-water-quality.md; the primary federal
  EJ screening tool. Combines environmental indicators (air quality, proximity
  to hazardous waste, water quality) with demographic data into a composite
  percentile score, census block group level. **Status note:** removed from
  EPA's website in Feb 2025; data now accessed via archives/mirrors.
  - Jan 2025 EPA snapshot: https://19january2025snapshot.epa.gov/ejscreen/index.html
  - Reconstructed mirror: https://screening-tools.com/epa-ejscreen
- **CalEnviroScreen (California only)** — California's own EJ screening tool,
  more granular and regularly updated than EJSCREEN. If prototyping in
  California, this is the better source.
  - Portal + data: https://oehha.ca.gov/calenviroscreen
- **USDA Food Access Research Atlas** — maps food deserts and food access by
  census tract. Relevant for understanding consumption patterns and food waste
  distribution.
  - Portal: https://www.ers.usda.gov/data-products/food-access-research-atlas/

---

**Why this matters for the project:** The environmental justice angle is one of
the most powerful civic hooks in this project — showing that waste burden
falls disproportionately on lower-income and minority communities. This data
layer is what makes that story provable rather than anecdotal. It also guards
against the "climate redlining" risk identified in the Gemini analysis: by
centering this data explicitly, the map frames vulnerable communities as victims
of the system rather than sources of the problem.
