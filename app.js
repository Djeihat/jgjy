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

// Per-facility-type config. Each type gets its own clustered source so that
// overlapping symbols coalesce (with a contributor list on hover) without
// merging across types — a wind farm never blends into a toxic-release blob.
const FACILITY_TYPES = {
  tri: {
    color: "#8e44ad",
    label: "Industrial releases",
    // individual point radius scales with releases
    radius: ["interpolate", ["linear"],
      ["sqrt", ["max", ["get", "total_releases_lbs"], 1]], 0, 4, 1500, 18],
    // per-point color (TRI is single-hue)
    pointColor: "#8e44ad",
    leafName: (p) => `${p.name} — ${fmt(p.total_releases_lbs)} lbs`,
    popup: (p) => `<h4>${p.name}</h4>
      ${p.industry} — ${p.city}, ${p.county} County<br>
      Toxic releases (2023): <b>${fmt(p.total_releases_lbs)} lbs</b>
      across ${p.chemicals} chemical(s)`,
  },
  power: {
    color: "#27ae60",
    label: "Power plants",
    radius: ["interpolate", ["linear"],
      ["sqrt", ["max", ["coalesce", ["get", "capacity_mw"], 1], 1]], 0, 4, 30, 14],
    pointColor: ["match", ["get", "fuel_category"],
      ["SOLAR", "WIND", "HYDRO", "GEOTHERMAL", "BIOMASS"], "#27ae60", "#7f8c8d"],
    leafName: (p) => `${p.name} — ${p.fuel_category || "?"}, ${fmt(p.capacity_mw)} MW`,
    popup: (p) => `<h4>${p.name}</h4>
      Fuel: <b>${p.fuel_category || "?"}</b> · ${fmt(p.capacity_mw)} MW<br>
      Generation: ${fmt(p.net_generation_mwh)} MWh/yr<br>
      CO₂: ${fmt(p.co2_tons)} tons/yr`,
  },
  water: {
    color: "#2980b9",
    label: "Wastewater facilities",
    radius: ["interpolate", ["linear"],
      ["coalesce", ["get", "design_flow_mgd"], 1], 0, 4, 100, 16],
    pointColor: "#2980b9",
    leafName: (p) => `${p.name} — ${p.design_flow_mgd ?? "?"} MGD`,
    popup: (p) => `<h4>${p.name}</h4>
      NPDES permit ${p.permit} — ${p.city}<br>
      Design flow: <b>${p.design_flow_mgd ?? "?"} MGD</b>`,
  },
};

map.on("load", async () => {
  const [tracts, wastesheds, tri, power, water] = await Promise.all([
    fetch("data/processed/tracts_population.geojson").then(r => r.json()),
    fetch("data/processed/wasteshed_waste.json").then(r => r.json()),
    fetch("data/processed/tri_facilities.geojson").then(r => r.json()),
    fetch("data/processed/power_plants.geojson").then(r => r.json()),
    fetch("data/processed/wastewater_facilities.geojson").then(r => r.json()),
  ]);
  const dataByType = { tri, power, water };

  // Pick a glyph font that exists in the base style, for cluster count labels.
  const baseFont = (() => {
    for (const l of map.getStyle().layers) {
      const f = l.layout && l.layout["text-font"];
      if (f) return f;
    }
    return ["Open Sans Regular"];
  })();

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

  // --- choropleth base ---
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

  const popup = new maplibregl.Popup({ closeButton: true });
  const hoverPopup = new maplibregl.Popup({
    closeButton: false, closeOnClick: false, maxWidth: "280px",
  });

  // --- clustered facility layers ---
  for (const [type, cfg] of Object.entries(FACILITY_TYPES)) {
    const src = `fac-${type}`;
    map.addSource(src, {
      type: "geojson",
      data: dataByType[type],
      cluster: true,
      clusterRadius: 44,
      clusterMaxZoom: 12,
    });

    // cluster bubbles, sized by how many facilities they contain
    map.addLayer({
      id: `${src}-clusters`,
      type: "circle",
      source: src,
      filter: ["has", "point_count"],
      paint: {
        "circle-color": cfg.color,
        "circle-opacity": 0.85,
        "circle-stroke-color": "#fff",
        "circle-stroke-width": ["case", ["boolean", ["feature-state", "hover"], false], 3, 1],
        "circle-radius": ["step", ["get", "point_count"], 13, 5, 18, 15, 24, 40, 32],
      },
    });
    // count label on clusters
    map.addLayer({
      id: `${src}-count`,
      type: "symbol",
      source: src,
      filter: ["has", "point_count"],
      layout: {
        "text-field": ["get", "point_count_abbreviated"],
        "text-font": baseFont,
        "text-size": 12,
      },
      paint: { "text-color": "#fff" },
    });
    // individual (unclustered) facilities
    map.addLayer({
      id: `${src}-point`,
      type: "circle",
      source: src,
      filter: ["!", ["has", "point_count"]],
      paint: {
        "circle-color": cfg.pointColor,
        "circle-opacity": 0.85,
        "circle-stroke-color": "#fff",
        "circle-stroke-width": 0.6,
        "circle-radius": cfg.radius,
      },
    });

    // click a cluster → zoom to where it breaks apart
    map.on("click", `${src}-clusters`, (e) => {
      const f = e.features[0];
      map.getSource(src).getClusterExpansionZoom(f.properties.cluster_id)
        .then((zoom) => map.easeTo({ center: f.geometry.coordinates, zoom }));
    });

    // hover a cluster → highlight + list its contributors
    let hovered = null;
    map.on("mousemove", `${src}-clusters`, (e) => {
      map.getCanvas().style.cursor = "pointer";
      const f = e.features[0];
      const id = f.properties.cluster_id;
      if (hovered !== id) {
        if (hovered !== null) map.setFeatureState({ source: src, id: hovered }, { hover: false });
        hovered = id;
        map.setFeatureState({ source: src, id }, { hover: true });
      }
      const count = f.properties.point_count;
      const coords = f.geometry.coordinates;
      map.getSource(src).getClusterLeaves(id, 12, 0).then((leaves) => {
        if (hovered !== id) return; // moved off before it resolved
        const items = leaves.map((l) => `<li>${cfg.leafName(l.properties)}</li>`).join("");
        const more = count > leaves.length ? `<li>…and ${count - leaves.length} more</li>` : "";
        hoverPopup.setLngLat(coords)
          .setHTML(`<h4>${count} ${cfg.label.toLowerCase()}</h4>
            <ul style="margin:4px 0 0;padding-left:16px">${items}${more}</ul>`)
          .addTo(map);
      });
    });
    map.on("mouseleave", `${src}-clusters`, () => {
      map.getCanvas().style.cursor = "";
      if (hovered !== null) map.setFeatureState({ source: src, id: hovered }, { hover: false });
      hovered = null;
      hoverPopup.remove();
    });

    // click an individual facility → detail popup
    map.on("click", `${src}-point`, (e) => {
      popup.setLngLat(e.lngLat).setHTML(cfg.popup(e.features[0].properties)).addTo(map);
    });
    map.on("mouseenter", `${src}-point`, () => map.getCanvas().style.cursor = "pointer");
    map.on("mouseleave", `${src}-point`, () => map.getCanvas().style.cursor = "");
  }

  // click a tract (not under a facility) → wasteshed detail
  map.on("click", "tracts-fill", (e) => {
    const hitLayers = ["tri", "power", "water"].flatMap((t) =>
      [`fac-${t}-clusters`, `fac-${t}-point`]);
    if (map.queryRenderedFeatures(e.point, { layers: hitLayers }).length) return;
    const p = e.features[0].properties;
    popup.setLngLat(e.lngLat).setHTML(`<h4>${p.wasteshed} wasteshed</h4>
      Census tract ${p.geoid} — pop. ${fmt(p.population)}<br>
      Waste disposed: <b>${fmt(p.lbs_per_capita)} lbs/person/yr</b><br>
      Wasteshed total: ${fmt(p.ws_tons_disposed)} tons (2022)<br>
      Recovery rate: <b>${p.recovery_rate ? (p.recovery_rate * 100).toFixed(1) : "?"}%</b>`)
      .addTo(map);
  });

  // --- layer toggles ---
  const toggles = { "toggle-tri": "tri", "toggle-power": "power", "toggle-water": "water" };
  for (const [box, type] of Object.entries(toggles)) {
    document.getElementById(box).addEventListener("change", (e) => {
      const vis = e.target.checked ? "visible" : "none";
      for (const suffix of ["clusters", "count", "point"]) {
        map.setLayoutProperty(`fac-${type}-${suffix}`, "visibility", vis);
      }
    });
  }
});
