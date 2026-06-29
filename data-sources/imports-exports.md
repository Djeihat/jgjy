# Imports & Exports Data Sources

---

## Free / Government

- **USA Trade Online** — Monthly import/export by commodity (HS code), port of
  entry, and country of origin. Free with registration. Good starting point for
  state and port-level aggregation.
  - Portal: https://usatrade.census.gov/
- **Bureau of Transportation Statistics — Freight Analysis Framework (FAF)**
  — Models commodity flows between regions by mode (ship, rail, truck, air).
  - Portal + data: https://www.bts.gov/faf
- **US Customs Inbound Ocean Manifests** — Technically public domain via FOIA,
  but raw feed costs ~$100/day from CBP directly (what commercial providers
  resell). Distributed via CBP's Automated Manifest System (AMS).
  - CBP trade: https://www.cbp.gov/trade
- **USDA Foreign Agricultural Service — GATS** — Import/export data for food and
  agricultural commodities. Free public access with a free API; query by
  commodity, country, and date range.
  - Portal: https://apps.fas.usda.gov/gats/

## Low-Cost / Freemium

- **UN Comtrade** — Annual country-level trade data by commodity. Free tier has
  API rate limits; bulk access requires subscription. Good for macro-level
  input modeling.
  - Data portal: https://comtradeplus.un.org/
  - API / key signup (developer portal): https://comtradedeveloper.un.org/
- **MIT Observatory of Economic Complexity** — Built on Comtrade data, much more
  accessible UI and API. Good for visualizing flows.
  - Portal + API: https://oec.world/

## Commercial (expensive)

- **Panjiva / S&P Global** — Bill of lading data at shipment level. Enterprise
  pricing, likely $10k+/year.
  - https://panjiva.com/
- **ImportGenius, Descartes Datamyne** — Similar, ~$2,700–$11,000/year.
  - https://www.importgenius.com/ · https://www.datamyne.com/

---

**Recommended starting point:** USA Trade Online + BTS FAF — free, port-level
geographic resolution, no IoT infrastructure required.
