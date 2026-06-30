# Prototype Plan

**Team:** Jay Yamakawa, Justin Garofoli, Claude
**Status:** Discovery complete — moving to prototype

---

## Decisions Needed Before Phase 1

- **Target city:** Pick one metro area to prototype against. Candidates with
  strong open data: Portland, Seattle, Austin. Do not attempt national scope
  in the prototype.
- **Stack:** React-based web app (most flexible, scales to full product) vs.
  no-code tool like Flourish (faster start, hits a ceiling quickly).
  Recommendation: React + Mapbox GL JS or Deck.gl.
- **Hosting:** GitHub Pages for a fully static prototype; Vercel or Netlify
  if a backend is needed for data APIs.

---

## Phase 1 — Scope the Prototype
**Duration:** 1–2 weeks
**Who:** Jay, Justin, Claude

Nail down two things before touching code:

1. **Choose the target city** — one metro area, not the whole US.
2. **Choose 2–3 data sources** for the first build. Don't try to integrate all
   9 data source categories at once. Recommended starting set:
   - EPA NEI (vehicle emissions) — county level, free
   - State/municipal MSW data — waste per capita
   - Census ACS (population) — census tract level, free API

**Deliverable:** A one-page scope doc added to this repo defining the city,
the data sources, and the stack.

---

## Phase 2 — Data Pipeline
**Duration:** 2–3 weeks
**Who:** Claude + Jay/Justin for decisions

Build lightweight scripts to pull, normalize, and store data from the chosen
sources at the census tract level. No visualization yet — just get clean,
map-ready data into a consistent format (GeoJSON or similar).

This is the unglamorous work that determines whether the project is feasible.
Expect to hit data quality issues and gaps that require methodological
decisions (e.g., how to interpolate county-level data to census tract level).

**Deliverable:** A set of scripts and a clean GeoJSON file for the target city
with at least 2 data layers attached to census tract geometries.

---

## Phase 3 — Base Map + Choropleth
**Duration:** 1–2 weeks
**Who:** Claude + Jay/Justin for design feedback

Get a working map in the browser with:
- Census tract boundaries rendered
- One choropleth layer (e.g., waste per capita, color-coded)
- Basic zoom and pan

Prove the rendering pipeline works end-to-end before adding symbol complexity.
Lock in the stack here.

**Deliverable:** A live URL (GitHub Pages or Vercel) showing a working
choropleth map of the target city.

---

## Phase 4 — First Symbol Layer
**Duration:** 2–3 weeks
**Who:** Claude + Jay/Justin for design feedback

Add the first 3D literal symbols to the map:
- One negative symbol (e.g., trash heap scaled by MSW per capita)
- One positive symbol (e.g., recycling rate indicator)

Prove the visual concept works at all three zoom levels (national, city, tract).
Refine symbol design, scale exaggeration, and visual style. This is the
make-or-break phase for the core visual identity.

**Deliverable:** A live demo with at least two 3D symbols rendering correctly
at multiple zoom levels, ready to show stakeholders.

---

## Phase 5 — Sidebar Detail View
**Duration:** 1–2 weeks
**Who:** Claude + Jay/Justin for design feedback

Click a census tract → sidebar opens with:
- A Sankey diagram showing that tract's material flow profile
- A diverging bar chart comparing the tract to the city average

D3.js for the charts. The sidebar should feel like a natural extension of the
map, not a separate UI.

**Deliverable:** Fully interactive map + sidebar, shareable as a demo link.

---

## Phase 6 — Second Data Layer + Symbol Expansion
**Duration:** 2–3 weeks
**Who:** Claude + Jay/Justin for design feedback

- Add a second data source (vehicle emissions or energy)
- Expand the symbol vocabulary with 2–3 additional symbol types
- Refine zoom behavior and cluster density
- Fix issues surfaced during Phase 5 review

**Deliverable:** A shareable, multi-layer demo that demonstrates the full
positive/negative symbol cluster concept across two data categories.

---

## Total Estimated Timeline
| Phase | Duration |
|-------|----------|
| 1 — Scope | 1–2 weeks |
| 2 — Data pipeline | 2–3 weeks |
| 3 — Base map | 1–2 weeks |
| 4 — First symbol layer | 2–3 weeks |
| 5 — Sidebar detail view | 1–2 weeks |
| 6 — Second data layer | 2–3 weeks |
| **Total** | **~10–15 weeks** |

---

## What This Plan Deliberately Excludes
- National scope (added after prototype is proven)
- Real-time data (annual/quarterly is sufficient for the prototype)
- Mobile optimization (desktop-first for the prototype)
- All 9 data source categories (expand after Phase 6)
- Real estate / valuation features (ruled out — see DECISIONS.md)
