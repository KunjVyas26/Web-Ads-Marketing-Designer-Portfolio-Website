/* @ds-bundle: {"format":3,"namespace":"BigBatteryDesignSystem_4c2b74","components":[],"sourceHashes":{"deals/deals.js":"0e94cd71b3bb","off-grid/offgrid.js":"09a5b153835f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BigBatteryDesignSystem_4c2b74 = window.BigBatteryDesignSystem_4c2b74 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// deals/deals.js
try { (() => {
/* ============================================================
   BigBattery Deals — data + interactivity (vanilla, no deps)
   ============================================================ */
const IC = {
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
  ship: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  filter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="10" y1="18" x2="14" y2="18"/></svg>',
  chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5z"/></svg>',
  flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>',
  tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4L13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5" fill="currentColor"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h7l-1 8 10-12h-7z"/></svg>',
  headset: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-3v-7h3a2 2 0 0 1 2 2zM3 19a2 2 0 0 0 2 2h3v-7H5a2 2 0 0 0-2 2z"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  help: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12" y2="17"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10l9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
  cabin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-5h6v5"/></svg>',
  cart2: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="20" r="1.6"/><circle cx="16" cy="20" r="1.6"/><path d="M2 4h3l2 11h11l2-7H6"/></svg>',
  rv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 7h13v9H2zM15 10h4l3 3v3h-7zM6 16a2 2 0 1 0 4 0M17 16a2 2 0 1 0 4 0"/></svg>',
  factory: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21V9l6 4V9l6 4V5h6v16z"/></svg>',
  boat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14h18l-2 5H5zM12 3v8M12 11l7 2M12 11l-7 2"/></svg>'
};
const P = '../assets/products/';
// real BigBattery products lifted from the Figma deals page
const PRODUCTS = [{
  id: 1,
  t: "48V EG4 Wallmount 280Ah All-Weather",
  sku: "FEWPP-48143-G1",
  img: P + "p1.png",
  brand: "EG4",
  v: 48,
  type: "Battery",
  apps: ["off-grid", "grid-tied"],
  kwh: 14.3,
  price: 3125,
  was: 3500,
  rating: 4.9,
  rev: 214,
  badge: {
    c: "incart",
    x: "$380 OFF IN CART"
  },
  feat: true
}, {
  id: 2,
  t: "48V Wallmount 314Ah All-Weather Battery",
  sku: "FEWAW-48161-G1",
  img: P + "p2.png",
  brand: "EG4",
  v: 48,
  type: "Battery",
  apps: ["off-grid", "grid-tied"],
  kwh: 16,
  price: 3750,
  was: 4226,
  rating: 4.9,
  rev: 98,
  badge: {
    c: "incart",
    x: "$480 OFF IN CART"
  },
  feat: true
}, {
  id: 3,
  t: "EG4 Wallmount 314Ah Indoor Battery",
  sku: "FEWMT-48161-G1",
  img: P + "p3.png",
  brand: "EG4",
  v: 48,
  type: "Battery",
  apps: ["grid-tied"],
  kwh: 16,
  price: 3400,
  was: 3728,
  rating: 4.8,
  rev: 76,
  badge: {
    c: "incart",
    x: "$330 OFF IN CART"
  },
  feat: true
}, {
  id: 4,
  t: "Nexus + Apex 6.5K Off-Grid System",
  sku: "K0191-V",
  img: P + "p4.png",
  brand: "BigBattery",
  v: 48,
  type: "System",
  apps: ["off-grid"],
  kwh: 15,
  price: 4535,
  was: null,
  rating: 5.0,
  rev: 42,
  badge: {
    c: "best",
    x: "Best Seller"
  },
  feat: true
}, {
  id: 5,
  t: "48V 2x Eagle 2 Kit",
  sku: "K0978",
  img: P + "p5.png",
  brand: "BigBattery",
  v: 48,
  type: "System",
  apps: ["golf"],
  kwh: 5.12,
  price: 1645,
  was: 1890,
  rating: 4.8,
  rev: 131
}, {
  id: 6,
  t: "48V ETHOS 5.12kWh Battery Module",
  sku: "FETHS-48051-G1",
  img: P + "p6.png",
  brand: "BigBattery",
  v: 48,
  type: "Battery",
  apps: ["off-grid", "grid-tied"],
  kwh: 5.12,
  price: 1250,
  was: null,
  rating: 4.9,
  rev: 307,
  badge: {
    c: "unit",
    x: "$244 / kWh"
  }
}, {
  id: 7,
  t: "48V Husky 2 PWR",
  sku: "FHSKY-48051-G2-PWR",
  img: P + "p7.png",
  brand: "BigBattery",
  v: 48,
  type: "Battery",
  apps: ["off-grid", "rv", "marine"],
  kwh: 5.12,
  price: 1850,
  was: 2050,
  rating: 4.9,
  rev: 189
}, {
  id: 8,
  t: "48V Essential Golf Cart Kit",
  sku: "K0972",
  img: P + "p5.png",
  brand: "BigBattery",
  v: 48,
  type: "System",
  apps: ["golf"],
  kwh: 5.12,
  price: 2150,
  was: 2350,
  rating: 4.7,
  rev: 88
}, {
  id: 9,
  t: "24V Husky 2 INV",
  sku: "FHSKY-24051-G2-INV",
  img: P + "p7.png",
  brand: "BigBattery",
  v: 24,
  type: "Battery",
  apps: ["rv", "marine", "off-grid"],
  kwh: 5.12,
  price: 1450,
  was: 2050,
  rating: 4.8,
  rev: 142,
  badge: {
    c: "sale",
    x: "Save 29%"
  }
}, {
  id: 10,
  t: "EG4 GridBoss MID",
  sku: "INV033",
  img: P + "p4.png",
  brand: "EG4",
  v: 48,
  type: "Accessory",
  apps: ["grid-tied", "off-grid"],
  kwh: null,
  price: 2000,
  was: 2400,
  rating: 4.9,
  rev: 31
}, {
  id: 11,
  t: "EG4 6K Off-Grid Inverter",
  sku: "INV026",
  img: P + "p4.png",
  brand: "EG4",
  v: 48,
  type: "Inverter",
  apps: ["off-grid"],
  kwh: null,
  price: 1630,
  was: null,
  rating: 4.9,
  rev: 266
}, {
  id: 12,
  t: "EG4 12K V2 Off-Grid Inverter",
  sku: "INV030",
  img: P + "p4.png",
  brand: "EG4",
  v: 48,
  type: "Inverter",
  apps: ["off-grid"],
  kwh: null,
  price: 1900,
  was: 3353,
  rating: 4.8,
  rev: 97,
  badge: {
    c: "sale",
    x: "Save 43%"
  }
}, {
  id: 13,
  t: "EG4 FlexBOSS21 Hybrid Inverter",
  sku: "INV027",
  img: P + "p3.png",
  brand: "EG4",
  v: 48,
  type: "Inverter",
  apps: ["grid-tied", "off-grid"],
  kwh: null,
  price: 3600,
  was: 4200,
  rating: 4.9,
  rev: 54
}, {
  id: 14,
  t: "12V Husky 2 INV",
  sku: "FHSKY-12051-G2-INV",
  img: P + "p7.png",
  brand: "BigBattery",
  v: 12,
  type: "Battery",
  apps: ["rv", "marine"],
  kwh: 5.12,
  price: 1450,
  was: 2050,
  rating: 4.8,
  rev: 120,
  badge: {
    c: "sale",
    x: "Save 29%"
  }
}, {
  id: 15,
  t: "48V Nexus 15kWh Battery",
  sku: "F-NXUS-48150-G1",
  img: P + "p2.png",
  brand: "BigBattery",
  v: 48,
  type: "Battery",
  apps: ["off-grid", "grid-tied"],
  kwh: 15,
  price: 2980,
  was: null,
  rating: 4.9,
  rev: 61
}, {
  id: 16,
  t: "24V 2x Eagle 2 Scissor Lift Kit",
  sku: "K0989",
  img: P + "p5.png",
  brand: "BigBattery",
  v: 24,
  type: "System",
  apps: ["industrial"],
  kwh: 3.26,
  price: 1635,
  was: 1890,
  rating: 4.7,
  rev: 39
}, {
  id: 17,
  t: "AIMS 2000W Pure Sine Inverter Charger",
  sku: "INV004",
  img: P + "p7.png",
  brand: "AIMS",
  v: 12,
  type: "Inverter",
  apps: ["rv", "marine"],
  kwh: null,
  price: 720,
  was: null,
  rating: 4.6,
  rev: 73
}, {
  id: 18,
  t: "EG4 18kPV Hybrid Inverter",
  sku: "INV024",
  img: P + "p4.png",
  brand: "EG4",
  v: 48,
  type: "Inverter",
  apps: ["grid-tied", "off-grid"],
  kwh: null,
  price: 4898,
  was: 5763,
  rating: 4.9,
  rev: 203
}, {
  id: 19,
  t: "2x 48V ETHOS Battery",
  sku: "K0948",
  img: P + "p6.png",
  brand: "BigBattery",
  v: 48,
  type: "Battery",
  apps: ["off-grid", "grid-tied"],
  kwh: 10.24,
  price: 2780,
  was: 2860,
  rating: 4.9,
  rev: 118
}, {
  id: 20,
  t: "48V 4x Eagle 2 Off-Grid Power Kit",
  sku: "K0980",
  img: P + "p5.png",
  brand: "BigBattery",
  v: 48,
  type: "System",
  apps: ["off-grid", "golf"],
  kwh: 10.24,
  price: 3290,
  was: 3790,
  rating: 4.8,
  rev: 47,
  badge: {
    c: "sale",
    x: "Save 13%"
  }
}];
const APPS = [{
  id: "all",
  name: "Shop All",
  ic: IC.grid
}, {
  id: "grid-tied",
  name: "Grid-Tied",
  ic: IC.home
}, {
  id: "off-grid",
  name: "Off-Grid",
  ic: IC.cabin
}, {
  id: "golf",
  name: "Golf & Utility",
  ic: IC.cart2
}, {
  id: "rv",
  name: "RV & Camper",
  ic: IC.rv
}, {
  id: "industrial",
  name: "Industrial",
  ic: IC.factory
}, {
  id: "marine",
  name: "Marine",
  ic: IC.boat
}];

/* ---------- state ---------- */
const state = {
  app: "all",
  volts: new Set(),
  brands: new Set(),
  types: new Set(),
  minSave: 0,
  pmin: 0,
  pmax: 5000,
  sort: "deals",
  shown: 12
};
const PMAX = 5000;
let cart = 0;

/* ---------- helpers ---------- */
const fmt = n => "$" + n.toLocaleString();
const pct = p => p.was ? Math.round((p.was - p.price) / p.was * 100) : 0;
const monthly = p => "$" + Math.round(p.price / 24).toLocaleString();
function dealScore(p) {
  // higher = better deal, for default sort
  let s = 0;
  if (p.was) s += p.was - p.price;
  if (p.badge && p.badge.c === "incart") s += 400;
  if (p.badge && p.badge.c === "best") s += 120;
  return s;
}
const PLURAL = {
  Battery: "Batteries",
  Inverter: "Inverters",
  System: "Systems",
  Accessory: "Accessories"
};
function appLabel(id) {
  return (APPS.find(a => a.id === id) || {}).name || id;
}

/* ---------- filtering ---------- */
function passes(p) {
  if (state.app !== "all" && !p.apps.includes(state.app)) return false;
  if (state.volts.size && !state.volts.has(p.v)) return false;
  if (state.brands.size && !state.brands.has(p.brand)) return false;
  if (state.types.size && !state.types.has(p.type)) return false;
  if (p.price < state.pmin || p.price > state.pmax) return false;
  if (state.minSave > 0 && pct(p) < state.minSave) return false;
  return true;
}
function sorted(list) {
  const a = [...list];
  switch (state.sort) {
    case "save$":
      a.sort((x, y) => (y.was ? y.was - y.price : 0) - (x.was ? x.was - x.price : 0));
      break;
    case "save%":
      a.sort((x, y) => pct(y) - pct(x));
      break;
    case "plow":
      a.sort((x, y) => x.price - y.price);
      break;
    case "phigh":
      a.sort((x, y) => y.price - x.price);
      break;
    case "rating":
      a.sort((x, y) => y.rating - x.rating || y.rev - x.rev);
      break;
    default:
      a.sort((x, y) => dealScore(y) - dealScore(x));
    // best deals
  }
  return a;
}

/* ---------- counts (facet aware, ignoring own dimension) ---------- */
function countFor(dim, val) {
  return PRODUCTS.filter(p => {
    if (state.app !== "all" && !p.apps.includes(state.app)) return false;
    if (dim !== "volt" && state.volts.size && !state.volts.has(p.v)) return false;
    if (dim !== "brand" && state.brands.size && !state.brands.has(p.brand)) return false;
    if (dim !== "type" && state.types.size && !state.types.has(p.type)) return false;
    if (dim === "volt") return p.v === val;
    if (dim === "brand") return p.brand === val;
    if (dim === "type") return p.type === val;
    return true;
  }).length;
}

/* ---------- rendering ---------- */
function stars(r) {
  let h = "";
  for (let i = 0; i < 5; i++) h += IC.star;
  return `<span class="stars" style="--r:${r}">${h.replace(/currentColor/g, 'currentColor')}</span>`;
}
function card(p) {
  const save = p.was ? p.was - p.price : 0;
  const chips = [`<span class="sc">${p.v}V</span>`];
  if (p.kwh) chips.push(`<span class="sc">${p.kwh} kWh</span>`);
  chips.push(`<span class="sc chem">LiFePO₄</span>`);
  const badge = p.badge ? `<span class="badge ${p.badge.c}">${p.badge.x}</span>` : "";
  const unit = p.badge && p.badge.c === "unit"; // unit badge sits top-right
  return `<article class="card" data-id="${p.id}">
    <div class="card-media">
      ${unit ? "" : badge}
      <button class="wish" aria-label="Save to wishlist">${IC.heart}</button>
      <img src="${p.img}" alt="${p.t}" loading="lazy">
      ${unit ? badge : ""}
    </div>
    <div class="card-body">
      <div class="spec-chips">${chips.join("")}</div>
      <h3><a href="#">${p.t}</a></h3>
      <div class="sku">SKU# ${p.sku}</div>
      <div class="rating">${stars(p.rating)}<b>${p.rating.toFixed(1)}</b><span class="rc">(${p.rev})</span></div>
      <div class="price-row">
        <span class="price">${fmt(p.price)}</span>
        ${p.was ? `<span class="was">${fmt(p.was)}</span>` : ""}
        ${save ? `<span class="save-pill">Save ${fmt(save)}</span>` : ""}
      </div>
      <div class="finance">As low as <b>${monthly(p)}/mo</b> with <span class="af">Affirm</span></div>
      <div class="ship">${IC.ship} Free shipping</div>
      <button class="add">${IC.cart} Add to Cart</button>
    </div>
  </article>`;
}
function render() {
  const all = sorted(PRODUCTS.filter(passes));
  const grid = document.getElementById("grid");
  const slice = all.slice(0, state.shown);
  if (!all.length) {
    grid.innerHTML = `<div class="empty">${IC.filter}<h3>No deals match those filters</h3>
      <p>Try widening your price range or clearing a filter.</p>
      <button onclick="clearAll()">Clear all filters</button></div>`;
  } else {
    grid.innerHTML = slice.map(card).join("");
  }
  document.getElementById("count").textContent = all.length;
  // load more
  const lm = document.getElementById("loadmore");
  lm.style.display = all.length > state.shown ? "flex" : "none";
  document.getElementById("remaining") && (document.getElementById("remaining").textContent = all.length - state.shown);
  renderChips();
  renderFacetCounts();
}
function renderChips() {
  const box = document.getElementById("activeChips");
  const chips = [];
  if (state.app !== "all") chips.push(["app", appLabel(state.app)]);
  [...state.volts].forEach(v => chips.push(["volt" + v, v + "V"]));
  [...state.brands].forEach(b => chips.push(["brand" + b, b]));
  [...state.types].forEach(t => chips.push(["type" + t, PLURAL[t] || t]));
  if (state.minSave > 0) chips.push(["save", state.minSave + "%+ off"]);
  if (state.pmin > 0 || state.pmax < PMAX) chips.push(["price", fmt(state.pmin) + "–" + fmt(state.pmax)]);
  box.innerHTML = chips.map(([k, l]) => `<span class="fchip">${l}<button data-chip="${k}" aria-label="Remove">&times;</button></span>`).join("");
}
function removeChip(k) {
  if (k === "app") state.app = "all", syncApps();else if (k.startsWith("volt")) state.volts.delete(+k.slice(4));else if (k.startsWith("brand")) state.brands.delete(k.slice(5));else if (k.startsWith("type")) state.types.delete(k.slice(4));else if (k === "save") {
    state.minSave = 0;
    document.querySelectorAll('.seg button').forEach(b => b.classList.toggle('active', b.dataset.save === "0"));
  } else if (k === "price") {
    state.pmin = 0;
    state.pmax = PMAX;
    setSliders();
  }
  syncBoxes();
  state.shown = 12;
  render();
}
function renderFacetCounts() {
  document.querySelectorAll('.opt[data-dim]').forEach(o => {
    const dim = o.dataset.dim,
      val = o.dataset.valt === "num" ? +o.dataset.val : o.dataset.val;
    const c = countFor(dim, val);
    o.querySelector('.cnt').textContent = c;
    o.style.opacity = c ? 1 : .45;
  });
}

/* ---------- build sidebar ---------- */
function buildSidebar() {
  const volts = [12, 24, 36, 48, 72];
  const brands = ["BigBattery", "EG4", "AIMS", "MeterHome", "Hysolis"];
  const types = ["Battery", "Inverter", "System", "Accessory"];
  const opt = (dim, val, label, numeric) => `<label class="opt" data-dim="${dim}" data-val="${val}" data-valt="${numeric ? 'num' : 'str'}">
      <input type="checkbox"><span class="box">${IC.check}</span>
      <span class="lbl">${label}</span><span class="cnt">0</span></label>`;
  document.getElementById("grpVolt").innerHTML = volts.map(v => opt("volt", v, v + "V", true)).join("");
  document.getElementById("grpBrand").innerHTML = brands.map(b => opt("brand", b, b)).join("");
  document.getElementById("grpType").innerHTML = types.map(t => opt("type", t, PLURAL[t] || t)).join("");
}
function syncBoxes() {
  document.querySelectorAll('.opt[data-dim]').forEach(o => {
    const dim = o.dataset.dim,
      num = o.dataset.valt === "num";
    const val = num ? +o.dataset.val : o.dataset.val;
    const set = dim === "volt" ? state.volts : dim === "brand" ? state.brands : state.types;
    o.querySelector('input').checked = set.has(val);
  });
}
function syncApps() {
  document.querySelectorAll('.app-chip').forEach(c => c.classList.toggle('active', c.dataset.app === state.app));
}

/* ---------- price slider ---------- */
function setSliders() {
  const lo = document.getElementById("pmin"),
    hi = document.getElementById("pmax");
  lo.value = state.pmin;
  hi.value = state.pmax;
  paintRange();
}
function paintRange() {
  const lo = +document.getElementById("pmin").value,
    hi = +document.getElementById("pmax").value;
  const fill = document.getElementById("rfill");
  fill.style.left = lo / PMAX * 100 + "%";
  fill.style.right = 100 - hi / PMAX * 100 + "%";
  document.getElementById("rlo").textContent = fmt(lo);
  document.getElementById("rhi").textContent = hi >= PMAX ? fmt(PMAX) + "+" : fmt(hi);
}

/* ---------- countdown ---------- */
function startCountdown() {
  const end = new Date();
  end.setHours(23, 59, 59, 999); // ends tonight
  const tick = () => {
    let s = Math.max(0, Math.floor((end - new Date()) / 1000));
    const h = String(Math.floor(s / 3600)).padStart(2, '0');
    const m = String(Math.floor(s % 3600 / 60)).padStart(2, '0');
    const sec = String(s % 60).padStart(2, '0');
    const el = document.getElementById("cd");
    if (el) el.innerHTML = `<span class="cd-box">${h}</span><span class="cd-sep">:</span><span class="cd-box">${m}</span><span class="cd-sep">:</span><span class="cd-box">${sec}</span>`;
  };
  tick();
  setInterval(tick, 1000);
}

/* ---------- toast ---------- */
let toastT;
function toast(msg) {
  const t = document.getElementById("toast");
  t.querySelector('.tmsg').innerHTML = msg;
  t.classList.add('show');
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove('show'), 2400);
}

/* ---------- drawer ---------- */
function openDrawer() {
  document.querySelector('.filters').classList.add('open');
  document.getElementById('scrim').classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  document.querySelector('.filters').classList.remove('open');
  document.getElementById('scrim').classList.remove('show');
  document.body.style.overflow = '';
}
function clearAll() {
  state.app = "all";
  state.volts.clear();
  state.brands.clear();
  state.types.clear();
  state.minSave = 0;
  state.pmin = 0;
  state.pmax = PMAX;
  state.shown = 12;
  syncApps();
  syncBoxes();
  setSliders();
  document.querySelectorAll('.seg button').forEach(b => b.classList.toggle('active', b.dataset.save === "0"));
  render();
}

/* ---------- wire up ---------- */
function init() {
  // app rail
  document.getElementById("appRail").innerHTML = APPS.map(a => `<button class="app-chip${a.id === 'all' ? ' active' : ''}" data-app="${a.id}">
      <span class="ac-ic">${a.ic}</span>${a.name}</button>`).join("");
  buildSidebar();
  syncBoxes();
  setSliders();

  // app clicks
  document.getElementById("appRail").addEventListener("click", e => {
    const b = e.target.closest('.app-chip');
    if (!b) return;
    state.app = b.dataset.app;
    state.shown = 12;
    syncApps();
    render();
  });
  // sidebar checkbox clicks
  document.querySelector('.filters').addEventListener("change", e => {
    const o = e.target.closest('.opt[data-dim]');
    if (!o) return;
    const dim = o.dataset.dim,
      num = o.dataset.valt === "num";
    const val = num ? +o.dataset.val : o.dataset.val;
    const set = dim === "volt" ? state.volts : dim === "brand" ? state.brands : state.types;
    e.target.checked ? set.add(val) : set.delete(val);
    state.shown = 12;
    render();
  });
  // group collapse
  document.querySelectorAll('.fgroup-h').forEach(h => h.addEventListener("click", () => h.parentElement.classList.toggle("collapsed")));
  // savings segmented
  document.getElementById("segSave").addEventListener("click", e => {
    const b = e.target.closest('button');
    if (!b) return;
    document.querySelectorAll('#segSave button').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    state.minSave = +b.dataset.save;
    state.shown = 12;
    render();
  });
  // price sliders
  ["pmin", "pmax"].forEach(id => {
    document.getElementById(id).addEventListener("input", () => {
      let lo = +document.getElementById("pmin").value,
        hi = +document.getElementById("pmax").value;
      if (lo > hi - 100) {
        if (id === "pmin") lo = hi - 100, document.getElementById("pmin").value = lo;else hi = lo + 100, document.getElementById("pmax").value = hi;
      }
      state.pmin = lo;
      state.pmax = hi;
      paintRange();
    });
    document.getElementById(id).addEventListener("change", () => {
      state.shown = 12;
      render();
    });
  });
  // sort
  document.getElementById("sort").addEventListener("change", e => {
    state.sort = e.target.value;
    render();
  });
  // active chip removal
  document.getElementById("activeChips").addEventListener("click", e => {
    const b = e.target.closest('[data-chip]');
    if (b) removeChip(b.dataset.chip);
  });
  document.querySelectorAll('.clear-all,.ff-clear').forEach(b => b.addEventListener("click", clearAll));
  // grid interactions (delegated)
  document.getElementById("grid").addEventListener("click", e => {
    const add = e.target.closest('.add');
    if (add) {
      cart++;
      document.getElementById("cartCount").textContent = cart;
      const id = +add.closest('.card').dataset.id;
      const p = PRODUCTS.find(x => x.id === id);
      add.classList.add('added');
      add.innerHTML = IC.check + " Added";
      setTimeout(() => {
        add.classList.remove('added');
        add.innerHTML = IC.cart + " Add to Cart";
      }, 1400);
      toast(`<b>${p.t}</b> added to cart`);
      return;
    }
    const w = e.target.closest('.wish');
    if (w) {
      w.classList.toggle('on');
    }
  });
  // load more
  document.getElementById("loadmore").addEventListener("click", () => {
    state.shown += 12;
    render();
  });
  // drawer
  document.querySelectorAll('.filter-open').forEach(b => b.addEventListener("click", openDrawer));
  document.querySelector('.ff-apply').addEventListener("click", closeDrawer);
  document.getElementById('scrim').addEventListener("click", closeDrawer);
  startCountdown();
  render();
}
document.addEventListener("DOMContentLoaded", init);
})(); } catch (e) { __ds_ns.__errors.push({ path: "deals/deals.js", error: String((e && e.message) || e) }); }

// off-grid/offgrid.js
try { (() => {
/* ============================================================
   BigBattery Off-Grid — data + interactivity (vanilla, no deps)
   ============================================================ */
const IC = {
  bolt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h7l-1 8 10-12h-7z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5z"/></svg>',
  ship: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  headset: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-3v-7h3a2 2 0 0 1 2 2zM3 19a2 2 0 0 0 2 2h3v-7H5a2 2 0 0 0-2 2z"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 1.5v3M12 19.5v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1.5 12h3M19.5 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  help: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12" y2="17"/></svg>',
  filter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="10" y1="18" x2="14" y2="18"/></svg>',
  cabin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-5h6v5"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10l9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
  ranch: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 21V11l5-3 5 3M12 21V8l5-3 5 3v13M2 21h20M6 21v-4M16 21v-5"/></svg>',
  flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 22c4-4 6-6 9-9"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0 5 5l-9 9a2.8 2.8 0 0 1-4-4z"/></svg>',
  fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 3h3l-7 8 8 10h-6l-5-6-5 6H2l8-9L3 3h6l4 5z"/></svg>',
  yt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.5-.4-5.1a2.7 2.7 0 0 0-1.9-1.9C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.7.5a2.7 2.7 0 0 0-1.9 1.9C1 8.5 1 12 1 12s0 3.5.4 5.1a2.7 2.7 0 0 0 1.9 1.9c1.8.5 8.7.5 8.7.5s6.9 0 8.7-.5a2.7 2.7 0 0 0 1.9-1.9C23 15.5 23 12 23 12zM10 15.5v-7l6 3.5z"/></svg>',
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>'
};
const P = '../assets/products/';

/* ---------- "What are you powering" tiers ---------- */
const TIERS = [{
  id: "cabin",
  ic: IC.cabin,
  name: "Cabin / Shed / Tiny Home",
  kwh: "2–6 kWh",
  desc: "Lights, fridge, phones, a few outlets. Perfect for weekend retreats and backup essentials.",
  kit: "cabin"
}, {
  id: "home",
  ic: IC.home,
  name: "Primary Residence",
  kwh: "10–20 kWh",
  desc: "Run a full kitchen, well pump, and partial AC. True everyday off-grid living for a family home.",
  kit: "home"
}, {
  id: "ranch",
  ic: IC.ranch,
  name: "Whole Home / Ranch",
  kwh: "20–60 kWh",
  desc: "Whole-property power with AC, shop tools & EV charging. Stackable to grow with your needs.",
  kit: "ranch"
}];

/* ---------- system kits (9 SKUs across 3 tiers) ---------- */
const TIER_META = {
  cabin: {
    label: "Cabin / Tiny Home",
    ic: IC.cabin,
    kwh: "2–6 kWh"
  },
  home: {
    label: "Primary Residence",
    ic: IC.home,
    kwh: "10–20 kWh"
  },
  ranch: {
    label: "Whole Home / Ranch",
    ic: IC.ranch,
    kwh: "20–60 kWh"
  }
};
const SYSTEMS = [{
  tier: "cabin",
  name: "Cabin Starter",
  sku: "K0708",
  img: P + "p6.png",
  powers: ["Fridge", "LED Lighting", "Ceiling Fans", "Device Charging"],
  autonomy: "2–3 days without sun"
}, {
  tier: "cabin",
  name: "Cabin Plus",
  sku: "K0191",
  img: P + "p5.png",
  powers: ["Fridge", "Lights", "Small Appliances", "Outlets"],
  autonomy: "4+ days without sun"
}, {
  tier: "cabin",
  name: "Cabin Pro",
  sku: "K0196",
  img: P + "p3.png",
  powers: ["Fridge", "Lights", "Well Pump", "Power Tools"],
  autonomy: "3–4 days without sun"
}, {
  tier: "home",
  name: "Home Essential",
  sku: "K0710",
  img: P + "p1.png",
  powers: ["Well Pump", "Fridge", "Lights", "Home Circuits"],
  autonomy: "2 days without sun"
}, {
  tier: "home",
  name: "Home Standard",
  sku: "K0192",
  img: P + "p4.png",
  powers: ["Well Pump", "Washer", "Chest Freezer", "All Circuits"],
  autonomy: "3+ days without sun"
}, {
  tier: "home",
  name: "Home Premium",
  sku: "K0258",
  img: P + "p7.png",
  powers: ["Well Pump", "Washer", "Freezer", "Full Home"],
  autonomy: "2–3 days without sun"
}, {
  tier: "ranch",
  name: "Homestead S",
  sku: "K0189",
  img: P + "p2.png",
  powers: ["Central A/C", "Workshop", "Well Pump", "Full Property"],
  autonomy: "1–2 days without sun"
}, {
  tier: "ranch",
  name: "Homestead M",
  sku: "K0161",
  img: P + "p4.png",
  powers: ["Central A/C", "EV Charging", "Workshop", "Outbuildings"],
  autonomy: "2–3 days without sun"
}, {
  tier: "ranch",
  name: "Ranch Max",
  sku: "K0277",
  img: P + "p2.png",
  powers: ["Central A/C", "EV Charging", "Outbuildings", "Heavy Loads"],
  autonomy: "2+ days without sun"
}];

/* ---------- stats ---------- */
const STATS = [{
  v: "$0.29",
  l: "Per kWh stored",
  s: "Lowest lifetime cost in the U.S."
}, {
  v: "50%",
  l: "Less than competitors",
  s: "On comparable kWh systems"
}, {
  v: "$0",
  l: "Maintenance",
  s: "Sealed, self-managing LFP"
}, {
  v: "12 yr",
  l: "US warranty",
  s: "Full battery coverage"
}];

/* ---------- reliability ---------- */
const RELY = [{
  ic: IC.headset,
  h: "U.S.-Based Support",
  p: "Live chat, call & email with real off-grid experts — never offshore."
}, {
  ic: IC.shield,
  h: "12-Year Warranty",
  p: "Full battery coverage, backed by a U.S. manufacturer that stands behind it."
}, {
  ic: IC.ship,
  h: "Fast, Free Shipping",
  p: "Complete systems ship nationwide in 1–3 business days from CA & TX."
}, {
  ic: IC.leaf,
  h: "Safest Chemistry",
  p: "Non-toxic LiFePO₄ (LFP) — no thermal runaway, rated for 8,000+ cycles."
}];

/* ---------- steps ---------- */
const STEPS = [{
  h: "Size it",
  p: "Tell us what you're powering — or call an expert. We match you to the right system, no oversizing."
}, {
  h: "Ship it",
  p: "Your pre-wired kit ships free in 1–3 days. Battery, inverter, cables & monitoring, all matched."
}, {
  h: "Power it",
  p: "Connect your solar and flip the switch. Self-managing LFP means zero maintenance for years."
}];

/* ---------- reviews ---------- */
const REVIEWS = [{
  n: "Dale R.",
  loc: "Off-grid cabin, Montana",
  t: "Powered our whole cabin through a Montana winter with zero issues. The support team actually picks up the phone and knows their stuff.",
  init: "DR"
}, {
  n: "Maria S.",
  loc: "Primary residence, Arizona",
  t: "Cut the cord from the utility completely. The Nexus system runs our AC and well pump all summer. Paid for itself faster than I expected.",
  init: "MS"
}, {
  n: "Tom & Beth K.",
  loc: "Ranch, West Texas",
  t: "We stacked two systems for the ranch and shop. Install was straightforward and the savings math was exactly what they quoted us.",
  init: "TK"
}];

/* ---------- FAQ ---------- */
const FAQ = [{
  q: "How do I know what size system I need?",
  a: "Start with the <b>What Are You Powering?</b> selector above, or call our U.S.-based experts at (818) 280-3091. We'll review your appliances, daily usage, and solar plan to recommend a right-sized system — we never oversize just to upsell."
}, {
  q: "Do these systems include solar panels?",
  a: "Our complete kits include the <b>battery, hybrid inverter, cables, and monitoring</b> — everything except the panels, so you can size your solar array to your roof or ground mount. Every system is solar-ready, and we'll help you spec the right panels."
}, {
  q: "Can I expand my system later?",
  a: "Yes. All of our off-grid systems are <b>stackable and expandable</b>. Start with what you need today and add battery modules as your usage grows — up to 60 kWh on the Ranch system."
}, {
  q: "How long do the batteries last?",
  a: "Our LiFePO₄ (LFP) batteries are rated for <b>8,000+ cycles</b> — that's well over a decade of daily use — and are backed by a 12-year U.S. warranty. They're sealed and self-managing, so there's zero routine maintenance."
}, {
  q: "Is it safe to install in my home?",
  a: "LFP chemistry is the <b>safest lithium battery type</b> available — it's non-toxic and not prone to thermal runaway. Our systems are UL-listed and can be installed indoors or in all-weather enclosures. We recommend a licensed electrician for the final hookup."
}, {
  q: "What does shipping cost?",
  a: "<b>Shipping is free</b> on complete systems over $3,000, and orders ship in 1–3 business days from our California and Texas warehouses. You'll get tracking and freight scheduling for larger systems."
}];

/* ---------- helpers ---------- */
const fmt = n => "$" + n.toLocaleString();
const el = (tag, cls, html) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
};
let cart = 0;
function toast(msg) {
  const t = document.getElementById("toast");
  t.querySelector(".tk").innerHTML = IC.check;
  t.querySelector(".tmsg").textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove("show"), 2600);
}

/* ---------- render: powering selector ---------- */
function renderPowering() {
  const g = document.getElementById("powerGrid");
  g.innerHTML = "";
  TIERS.forEach(t => {
    const c = el("button", "pcard");
    c.dataset.kit = t.kit;
    c.innerHTML = `
      <span class="pc-ic">${t.ic}</span>
      <h3>${t.name}</h3>
      <span class="pc-kwh">${t.kwh}</span>
      <p>${t.desc}</p>
      <span class="pc-link">See recommended system ${IC.arrow}</span>`;
    c.addEventListener("click", () => {
      document.querySelectorAll(".pcard").forEach(x => x.classList.remove("active"));
      c.classList.add("active");
      filterKits(t.kit);
      document.getElementById("kits").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
    g.appendChild(c);
  });
}

/* ---------- render: kits (grouped by tier, filterable) ---------- */
function renderKits() {
  const fbar = document.getElementById("kitsFilter");
  const g = document.getElementById("kitsGrid");
  const pills = [["all", "All Systems"], ["cabin", "Cabin / Tiny Home"], ["home", "Primary Residence"], ["ranch", "Whole Home / Ranch"]];
  fbar.innerHTML = pills.map(([k, l], i) => `<button class="kfilter${i === 0 ? ' active' : ''}" data-f="${k}">${l}</button>`).join("");
  fbar.querySelectorAll(".kfilter").forEach(b => b.addEventListener("click", () => filterKits(b.dataset.f)));
  g.innerHTML = "";
  ["cabin", "home", "ranch"].forEach(tier => {
    const meta = TIER_META[tier];
    const grp = el("div", "kit-tiergroup");
    grp.dataset.tier = tier;
    grp.innerHTML = `<div class="kit-tiergroup-head"><span class="ktg-ic">${meta.ic}</span><h3>${meta.label}</h3><span class="ktg-kwh">${meta.kwh}</span></div><div class="kits-grid"></div>`;
    const inner = grp.querySelector(".kits-grid");
    SYSTEMS.filter(s => s.tier === tier).forEach(s => {
      const c = el("div", "kit");
      c.innerHTML = `
        <div class="kit-media"><img src="${s.img}" alt="${s.name} off-grid power system"></div>
        <div class="kit-body">
          <span class="kit-tier">${meta.label}</span>
          <h3>${s.name}</h3>
          <span class="kit-sku">SKU ${s.sku}</span>
          <p class="kit-powers-label">Powers</p>
          <ul class="kit-feat">${s.powers.map(p => `<li>${IC.check}<span>${p}</span></li>`).join("")}</ul>
          <div class="kit-autonomy"><span class="ka-ic">${IC.clock}</span><span><b>${s.autonomy}</b><span>Estimated battery autonomy</span></span></div>
          <button class="btn btn-primary btn-block">View Specs &amp; Quote</button>
        </div>`;
      c.querySelector("button").addEventListener("click", () => {
        cart++;
        updateCart();
        toast(s.name + " (" + s.sku + ") — added to your quote");
      });
      inner.appendChild(c);
    });
    g.appendChild(grp);
  });
}
function filterKits(key) {
  document.querySelectorAll("#kitsFilter .kfilter").forEach(b => b.classList.toggle("active", b.dataset.f === key));
  document.querySelectorAll(".kit-tiergroup").forEach(grp => {
    grp.style.display = key === "all" || grp.dataset.tier === key ? "" : "none";
  });
}

/* ---------- render: stats / rely / steps / reviews ---------- */
function renderStats() {
  const g = document.getElementById("statsGrid");
  g.innerHTML = STATS.map(s => `<div class="stat"><div class="sv">${s.v}</div><div class="sl">${s.l}</div><div class="ss">${s.s}</div></div>`).join("");
}
function renderRely() {
  const g = document.getElementById("relyGrid");
  g.innerHTML = RELY.map(r => `<div class="rcell"><span class="ri">${r.ic}</span><h3>${r.h}</h3><p>${r.p}</p></div>`).join("");
}
function renderSteps() {
  const g = document.getElementById("stepsGrid");
  g.innerHTML = STEPS.map((s, i) => `<div class="step"><span class="sn">${i + 1}</span><h3>${s.h}</h3><p>${s.p}</p></div>`).join("");
}
function renderReviews() {
  document.getElementById("revStars").innerHTML = IC.star.repeat(5);
  document.getElementById("revGrid").innerHTML = REVIEWS.map(r => `
    <div class="rcard">
      <div class="stars">${IC.star.repeat(5)}</div>
      <p>"${r.t}"</p>
      <div class="rwho"><span class="rav">${r.init}</span><span><b>${r.n}</b><span>${IC.check} Verified buyer · ${r.loc}</span></span></div>
    </div>`).join("");
}

/* ---------- render: FAQ ---------- */
function renderFAQ() {
  const w = document.getElementById("faqWrap");
  w.innerHTML = "";
  FAQ.forEach((f, i) => {
    const item = el("div", "qa" + (i === 0 ? " open" : ""));
    item.innerHTML = `
      <button class="qa-q">${f.q}<span class="qchev">${IC.chev}</span></button>
      <div class="qa-a"><div class="qa-a-inner">${f.a}</div></div>`;
    const ans = item.querySelector(".qa-a");
    item.querySelector(".qa-q").addEventListener("click", () => {
      const open = item.classList.contains("open");
      document.querySelectorAll(".qa").forEach(x => {
        x.classList.remove("open");
        x.querySelector(".qa-a").style.maxHeight = null;
      });
      if (!open) {
        item.classList.add("open");
        ans.style.maxHeight = ans.scrollHeight + "px";
      }
    });
    w.appendChild(item);
    if (i === 0) requestAnimationFrame(() => {
      ans.style.maxHeight = ans.scrollHeight + "px";
    });
  });
}

/* ---------- chrome ---------- */
function updateCart() {
  const c = document.querySelector("#icCart .cart-count");
  if (c) c.textContent = cart;
}
function renderChrome() {
  const set = (id, html) => {
    const e = document.getElementById(id);
    if (e) e.innerHTML = html;
  };
  set("utShield", IC.shield + " 12-Year Warranty");
  set("utShip", IC.ship + " Free Shipping $3k+");
  set("utHead", IC.headset + " U.S.-Based Support");
  set("icHelp", IC.help + "<span>Help</span>");
  set("icUser", IC.user + "<span>Account</span>");
  set("icCart", '<span class="cart-count">0</span>' + IC.cart + "<span>Quote</span>");
  document.querySelector(".menu-toggle").innerHTML = IC.filter;
  // hero
  set("ctaSize", IC.bolt + " Size My System");
  set("ctaTalk", IC.phone + " Talk to an Expert");
  set("htWarr", IC.shield + " 12-yr warranty");
  set("htUsa", IC.flag + " Made in the USA");
  set("htShip", IC.ship + " Free shipping $3k+");
  set("hsBolt", IC.bolt);
  set("hsShield", IC.shield);
  set("hsSun", IC.sun);
  set("fcSize", IC.bolt + " Size My System");
  set("fcCall", IC.phone + " (818) 280-3091");
  set("socials", [IC.fb, IC.x, IC.yt, IC.ig].map(s => `<a href="#">${s}</a>`).join(""));
}
window.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  renderPowering();
  renderKits();
  renderStats();
  renderRely();
  renderSteps();
  renderReviews();
  renderFAQ();
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "off-grid/offgrid.js", error: String((e && e.message) || e) }); }

})();
