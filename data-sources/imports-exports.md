# Imports & Exports Data Sources

---

## Free / Government

- **USA Trade Online** (usatrade.census.gov) — Monthly import/export by
  commodity (HS code), port of entry, and country of origin. Free with
  registration. Good starting point for state and port-level aggregation.
- **Bureau of Transportation Statistics — Freight Analysis Framework (FAF)**
  — Models commodity flows between regions by mode (ship, rail, truck, air).
- **US Customs Inbound Ocean Manifests** — Technically public domain via FOIA,
  but raw feed costs ~$100/day from CBP directly (what commercial providers
  resell).
- **USDA Foreign Agricultural Service — GATS** (apps.fas.usda.gov/gats) —
  Import/export data for food and agricultural commodities. Free public access
  with a free API; query by commodity, country, and date range.

## Low-Cost / Freemium

- **UN Comtrade** (comtrade.un.org) — Annual country-level trade data by
  commodity. Free tier has API rate limits; bulk access requires subscription.
  Good for macro-level input modeling.
- **MIT Observatory of Economic Complexity** (oec.world) — Built on Comtrade
  data, much more accessible UI and API. Good for visualizing flows.

## Commercial (expensive)

- **Panjiva / S&P Global** — Bill of lading data at shipment level. Enterprise
  pricing, likely $10k+/year.
- **ImportGenius, Descartes Datamyne** — Similar, ~$2,700–$11,000/year.

---

**Recommended starting point:** USA Trade Online + BTS FAF — free, port-level
geographic resolution, no IoT infrastructure required.
