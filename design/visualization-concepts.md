# Visualization Concepts

---

## Core Visual Identity: Literal 3D Symbol Clusters

The central visual metaphor is a **cluster of literal, representational 3D
symbols** rising from each census tract — a community "skyline" that tells the
story of what's happening there at a glance. No data literacy required.

### The Cluster as a Community Fingerprint
Every community gets a different skyline depending on its mix of inputs,
outputs, and investments. The shape and composition of the cluster tells you
*what kind* of place it is, not just how good or bad it is:
- An industrial zone: smokestacks, barrels, trash heaps
- A dense residential neighborhood: trash heaps, water tanks
- A community investing in sustainability: solar panels, wind turbines,
  recycling facilities, trees

**Negative space matters too** — a community with few problems should look
visibly sparse and open. The contrast between a clean area and a heavily
burdened one does the emotional work without a single number on screen.

### This Is Not a Shame Map
The project visualizes the **complete picture** — both what communities are
doing wrong *and* what they're doing right. Communities with strong recycling
infrastructure, renewable energy, urban composting, clean waterways, and green
space should have that reflected just as prominently as their problems.

This reframes the civic engagement tone: instead of "look how bad your
community is," it becomes "here's the full picture — here's what's working,
here's what isn't." That's more honest, more useful, and much harder to dismiss.

---

## Symbol System

### Negative Symbols (problems / burdens)
| Symbol | Data It Represents |
|--------|-------------------|
| Trash heap / bag | Municipal solid waste generation |
| Smokestack (tall, billowing) | Industrial emissions, fossil fuel energy |
| Barrel | Toxic / chemical waste (TRI data) |
| Sewage tank | Wastewater volume |
| Dead fish / murky water | Poor water quality |
| Barren land patch | Low green space / urban heat |

### Positive Symbols (investments / strengths)
| Symbol | Data It Represents |
|--------|-------------------|
| Wind turbine | Renewable energy generation |
| Solar panel array | Renewable energy generation |
| Recycling facility | High waste diversion rates |
| Compost bin | Municipal composting programs |
| Tree / green canopy | Urban forest coverage |
| Clean water droplet | Waterways meeting quality standards |
| Community garden | Urban agriculture / local food systems |
| Transit symbol | Low per-capita transportation emissions |
| Repair / reuse center | Circular economy infrastructure |

### Symbol Design Principles
- **Stylized / illustrative** rather than photorealistic — cleaner at small
  sizes, faster to render, gives the project a distinct visual identity
- **Scale exaggeration** — vertical axis must be exaggerated so differences
  are immediately readable at map scale. A community with twice the waste
  should look dramatically taller, not subtly taller.
- **Animated potential** — literal symbols open up time-based animation:
  a trash bag that fills up, a smokestack that billows more, solar panels
  that multiply. Much more evocative than an abstract hexagon changing color.

---

## Zoom Behavior (Three Levels of Detail)

1. **National / regional view** — density and height of clusters. You can see
   problem hotspots and clean areas at a glance. Individual symbol types are
   not yet distinguishable.
2. **City view** — individual symbol types become distinguishable. You can see
   a neighborhood's mix of positive and negative symbols.
3. **Census tract view** — full breakdown with labels, counts, and data
   sourcing. Click to expand a sidebar with charts and Sankey diagrams.

---

## The "Before and After" Story (Time Slider)
Watching a cluster change over time is potentially the most powerful feature:
- Smokestacks disappearing as a city transitions off coal
- Solar panels multiplying as renewable adoption grows
- A trash heap shrinking as a recycling program takes effect

The cluster becoming visibly cleaner — or denser — over years tells a story
no static chart can match.

---

## Supporting Visualizations (Sidebar / Detail View)

- **Sankey / MetaFlow diagram** — shows inputs, transformations, and outputs
  as proportional flows for the selected census tract. Standard visualization
  for urban metabolism. Updates on click.
- **Radar / spider chart** — community profile across multiple dimensions
  (waste, air quality, energy, water, green space) simultaneously.
- **Diverging bar chart** — how this community compares to the regional and
  national average. Immediately answers "are we better or worse than average?"
- **Arc / flow map** — curved lines showing where waste goes and where inputs
  come from. Deck.gl arc layer.
- **Animated time slider** — scrub through years to show how the community's
  profile has changed.

---

## Other Map Approaches (for consideration)

- **Choropleth map** — color census tracts by a single metric. Good baseline
  layer behind the symbol clusters.
- **Bivariate choropleth** — color two variables simultaneously (e.g., waste
  output AND income). Surfaces the environmental justice story without
  requiring layer toggles.
- **Scrollytelling** — journalistic narrative format where map and charts
  animate as the user scrolls. High production cost but extremely effective
  for civic engagement.
- **Small multiples** — grid of the same map at different time points or
  metrics. Good for editorial/journalism output.

---

## Recommended Starting Point

**Choropleth base map + 3D literal symbol clusters + click-to-expand Sankey
sidebar.**

- Choropleth provides immediate geographic context
- Symbol clusters communicate the full positive/negative picture at a glance
- Sankey sidebar gives the detail for users who want to go deeper
- Achievable with existing open-source tools before adding animation or
  time-slider complexity

---

## Libraries / Tools to Evaluate

| Tool | Best For |
|------|----------|
| Deck.gl | 3D symbols, arc/flow maps, high-performance rendering |
| Mapbox GL JS | Choropleth, base map styling, smooth interactions |
| Three.js | Custom 3D symbol rendering |
| D3.js | Sankey diagrams, radar charts, custom data viz |
| Observable Plot | Quick exploratory charts, small multiples |
| Leaflet | Lightweight choropleth if Mapbox licensing is a concern |
| Flourish / Datawrapper | Scrollytelling / editorial output without custom dev |
