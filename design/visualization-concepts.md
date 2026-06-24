# Visualization Concepts

---

## Map-Based (Core Layer)

- **Choropleth map** — color census tracts by intensity of a single metric
  (waste per capita, air quality index, etc.). Simple and familiar but can
  mislead if metrics aren't normalized well. Good baseline layer.
- **Proportional symbol map** — circles or hexagons scaled by volume placed
  on a base map. Good for showing absolute quantities (tons of waste generated)
  alongside geographic context.
- **Bivariate choropleth** — colors two variables simultaneously (e.g., waste
  output AND income level) using a 2D color grid. Immediately surfaces the
  environmental justice story without requiring the user to toggle between
  layers.

## Flow Visualization

- **Sankey / MetaFlow diagrams** — shows inputs, transformations, and outputs
  as proportional flows. Standard visualization for urban metabolism (see
  Gemini analysis). Could live in a side panel that updates as the user clicks
  different areas on the map.
- **Arc / flow map** — curved lines between origin and destination, scaled by
  volume. Great for showing where waste *goes* — which landfills receive from
  which communities, or which ports supply which regions. Deck.gl has a
  built-in arc layer well-suited for this.

## Time-Based

- **Animated time slider** — scrub through years to show how a community's
  waste profile has changed. Powerful for showing trends but requires
  consistent historical data across time periods.
- **Small multiples** — a grid of the same map at different time points or for
  different metrics. Good for editorial/journalism contexts where you want to
  show change without animation.

## Comparative

- **Radar / spider chart** — plot a community across multiple dimensions
  (waste, air quality, energy, water) simultaneously. Good for a community
  "profile" view in a sidebar.
- **Diverging bar chart** — show how a community compares to regional or
  national average across metrics. Immediately answers "are we better or worse
  than average?"

## Experimental / High Impact

- **3D extruded map** — raise census tracts vertically proportional to a
  metric (waste volume, emissions). Dramatic and attention-grabbing. Libraries
  like Deck.gl or Mapbox GL handle this well.
- **Scrollytelling** — journalistic format where the map and charts animate as
  the user scrolls through a narrative. High production cost but extremely
  effective for civic engagement. Think NYT climate features.
- **Community metabolism diagram** — a node-and-edge graph showing a
  community's full input/output system: energy in, goods in, waste out, water
  recycled, etc. More of an explainer view than an exploratory one.

---

## Recommended Starting Point

**Choropleth base map + click-to-expand Sankey sidebar.**

- Achievable with existing open-source tools
- Immediately communicates the input/output concept
- Gives a foundation to layer more ambitious visualizations on top of
- Sankey diagram in the sidebar updates per census tract on click, showing
  that area's material flow profile

---

## Libraries / Tools to Evaluate

| Tool | Best For |
|------|----------|
| Deck.gl | Arc/flow maps, 3D extrusion, high-performance rendering |
| Mapbox GL JS | Choropleth, base map styling, smooth interactions |
| D3.js | Sankey diagrams, radar charts, custom data viz |
| Observable Plot | Quick exploratory charts, small multiples |
| Leaflet | Lightweight choropleth if Mapbox licensing is a concern |
| Flourish / Datawrapper | Scrollytelling / editorial output without custom dev |
