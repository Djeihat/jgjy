// Oregon Community Material Flow Map — prototype (Phase 3)

// County FIPS (GEOID chars 2-5) → DEQ wasteshed.
// Metro = Clackamas (005) + Multnomah (051) + Washington (067).
// Milton Freewater (part of Umatilla County) is folded into Umatilla for now.
const COUNTY_TO_WASTESHED = {
  "001": "Baker", "003": "Benton", "005": "Metro", "007": "Clatsop",
  "009": "Columbia", "011": "Coos", "013": "Crook", "015": "Curry",
  "017": "Deschutes", "019": "Douglas", "021": "Gilliam", "023": "Grant",
  "025": "Harney", "027": "Hood River", "029": "Jackson", "031": "Jefferson",
  "033": "Josephine", "035": "Klamath", "037": "Lake", "039": "Lane",
  "041": "Lincoln", "043": "Linn", "045": "Malheur", "047": "Marion",
  "049": "Morrow", "051": "Metro", "053": "Polk", "055": "Sherman",
  "057": "Tillamook", "059": "Umatilla", "061": "Union", "063": "Wallowa",
  "065": "Wasco", "067": "Metro", "069": "Wheeler", "071": "Yamhill",
};

const map = new maplibregl.Map({
  container: "map",
  style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
  center: [-120.6, 44.1],
  zoom: 6,
});
map.addControl(new maplibregl.NavigationControl(), "bottom-right");

const fmt = (n) => n == null ? "—" : Math.round(n).toLocaleString();

// Opacity that depends on both zoom and a feature's magnitude: when zoomed
// out, small symbols fade toward invisible so the map stays legible; by the
// time you're zoomed into a city, everything is at full opacity. `magExpr` is
// a MapLibre expression for the feature's size metric; `full` is the value at
// which a symbol is fully opaque even when zoomed all the way out.
const zoomFadeOpacity = (magExpr, full, maxOpacity = 0.75) => [
  "interpolate", ["linear"], ["zoom"],
  6, ["interpolate", ["linear"], magExpr, 0, 0.04, full, maxOpacity],
  9, ["interpolate", ["linear"], magExpr, 0, 0.3, full, maxOpacity],
  11, maxOpacity,
];

map.on("load", async () => {
  const [tracts, wastesheds, tri, power, water] = await Promise.all([
    fetch("data/processed/tracts_population.geojson").then(r => r.json()),
    fetch("data/processed/wasteshed_waste.json").then(r => r.json()),
    fetch("data/processed/tri_facilities.geojson").then(r => r.json()),
    fetch("data/processed/power_plants.geojson").then(r => r.json()),
    fetch("data/processed/wastewater_facilities.geojson").then(r => r.json()),
  ]);

  // Attach wasteshed waste stats to each tract
  for (const f of tracts.features) {
    const county = f.properties.geoid.slice(2, 5);
    const wsName = COUNTY_TO_WASTESHED[county];
    const ws = wastesheds[wsName];
    f.properties.wasteshed = wsName;
    if (ws && ws.population) {
      f.properties.lbs_per_capita = (ws.tons_disposed * 2000) / ws.population;
      f.properties.recovery_rate = ws.recovery_rate;
      f.properties.ws_tons_disposed = ws.tons_disposed;
    }
  }

  map.addSource("tracts", { type: "geojson", data: tracts });
  map.addLayer({
    id: "tracts-fill",
    type: "fill",
    source: "tracts",
    paint: {
      "fill-color": [
        "case", ["==", ["get", "lbs_per_capita"], null], "#ccc",
        ["step", ["get", "lbs_per_capita"],
          "#fee8c8", 1500, "#fdbb84", 2000, "#fc8d59",
          2500, "#e34a33", 3500, "#b30000"],
      ],
      "fill-opacity": 0.55,
    },
  }, "watername_ocean");
  map.addLayer({
    id: "tracts-line",
    type: "line",
    source: "tracts",
    paint: { "line-color": "#fff", "line-width": 0.3 },
  });

  map.addSource("fac-tri", { type: "geojson", data: tri });
  map.addLayer({
    id: "fac-tri",
    type: "circle",
    source: "fac-tri",
    paint: {
      "circle-color": "#8e44ad",
      "circle-opacity": zoomFadeOpacity(
        ["sqrt", ["max", ["get", "total_releases_lbs"], 0]], 500),
      "circle-stroke-color": "#fff",
      "circle-stroke-width": 0.5,
      "circle-radius": ["interpolate", ["linear"],
        ["sqrt", ["max", ["get", "total_releases_lbs"], 1]],
        0, 3, 1500, 18],
    },
  });

  map.addSource("fac-power", { type: "geojson", data: power });
  map.addLayer({
    id: "fac-power",
    type: "circle",
    source: "fac-power",
    paint: {
      "circle-color": ["match", ["get", "fuel_category"],
        ["SOLAR", "WIND", "HYDRO", "GEOTHERMAL", "BIOMASS"], "#27ae60",
        "#7f8c8d"],
      "circle-opacity": zoomFadeOpacity(
        ["sqrt", ["max", ["coalesce", ["get", "capacity_mw"], 0], 0]], 5),
      "circle-stroke-color": "#fff",
      "circle-stroke-width": 0.5,
      "circle-radius": ["interpolate", ["linear"],
        ["sqrt", ["max", ["coalesce", ["get", "capacity_mw"], 1], 1]],
        0, 3, 30, 14],
    },
  });

  map.addSource("fac-water", { type: "geojson", data: water });
  map.addLayer({
    id: "fac-water",
    type: "circle",
    source: "fac-water",
    paint: {
      "circle-color": "#2980b9",
      "circle-opacity": zoomFadeOpacity(
        ["coalesce", ["get", "design_flow_mgd"], 0], 30),
      "circle-stroke-color": "#fff",
      "circle-stroke-width": 0.5,
      "circle-radius": ["interpolate", ["linear"],
        ["coalesce", ["get", "design_flow_mgd"], 1],
        0, 3, 100, 16],
    },
  });

  // --- popups ---
  const popup = (lngLat, html) =>
    new maplibregl.Popup().setLngLat(lngLat).setHTML(html).addTo(map);

  map.on("click", "fac-tri", (e) => {
    const p = e.features[0].properties;
    popup(e.lngLat, `<h4>${p.name}</h4>
      ${p.industry} — ${p.city}, ${p.county} County<br>
      Toxic releases (2023): <b>${fmt(p.total_releases_lbs)} lbs</b>
      across ${p.chemicals} chemical(s)`);
  });
  map.on("click", "fac-power", (e) => {
    const p = e.features[0].properties;
    popup(e.lngLat, `<h4>${p.name}</h4>
      Fuel: <b>${p.fuel_category || "?"}</b> · ${fmt(p.capacity_mw)} MW<br>
      Generation: ${fmt(p.net_generation_mwh)} MWh/yr<br>
      CO₂: ${fmt(p.co2_tons)} tons/yr`);
  });
  map.on("click", "fac-water", (e) => {
    const p = e.features[0].properties;
    popup(e.lngLat, `<h4>${p.name}</h4>
      NPDES permit ${p.permit} — ${p.city}<br>
      Design flow: <b>${p.design_flow_mgd ?? "?"} MGD</b>`);
  });
  map.on("click", "tracts-fill", (e) => {
    // Don't fire under a facility point
    const pts = map.queryRenderedFeatures(e.point, { layers: ["fac-tri", "fac-power", "fac-water"] });
    if (pts.length) return;
    const p = e.features[0].properties;
    popup(e.lngLat, `<h4>${p.wasteshed} wasteshed</h4>
      Census tract ${p.geoid} — pop. ${fmt(p.population)}<br>
      Waste disposed: <b>${fmt(p.lbs_per_capita)} lbs/person/yr</b><br>
      Wasteshed total: ${fmt(p.ws_tons_disposed)} tons (2022)<br>
      Recovery rate: <b>${p.recovery_rate ? (p.recovery_rate * 100).toFixed(1) : "?"}%</b>`);
  });

  for (const id of ["fac-tri", "fac-power", "fac-water", "tracts-fill"]) {
    map.on("mouseenter", id, () => map.getCanvas().style.cursor = "pointer");
    map.on("mouseleave", id, () => map.getCanvas().style.cursor = "");
  }

  // --- layer toggles ---
  const toggles = { "toggle-tri": "fac-tri", "toggle-power": "fac-power", "toggle-water": "fac-water" };
  for (const [box, layer] of Object.entries(toggles)) {
    document.getElementById(box).addEventListener("change", (e) => {
      map.setLayoutProperty(layer, "visibility", e.target.checked ? "visible" : "none");
    });
  }
});
