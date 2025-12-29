// 8 hoofdcategorieën: kleur is exact gelijk voor hoofdcategorie en alle subcategorieën
const CATEGORIES = [
  { key: "kinderen", name: "Kinderen", color: "#2FA4B5", subs: ["Kinderfysiotherapie", "Pubers", "Schroth"] },
  { key: "geriatrie", name: "Geriatrie", color: "#6E5A8A", subs: ["Geriatrische fysiotherapie", "Valpreventie", "Parkinson"] },
  { key: "psychosomatiek", name: "Psychosomatiek", color: "#2F6F73", subs: ["Psychosomatische fysiotherapie", "Ademhaling", "Stress & spanning"] },
  { key: "chronische-zorg", name: "Chronische Zorg", color: "#6B7280", subs: ["Long", "Hart & vaat", "Oncologie", "Chronische pijn"] },
  { key: "wervelkolom", name: "Wervelkolom", color: "#1F4E79", subs: ["Hoofd & nek", "Thorax", "Lage rug & bekken"] },
  { key: "benen", name: "Benen", color: "#4CAF50", subs: ["Heup", "Knie", "Enkel & voet"] },
  { key: "armen", name: "Armen", color: "#F59E0B", subs: ["Schouder", "Elleboog", "Pols & hand"] },
  { key: "specialistisch", name: "Specialistische behandelingen", color: "#8B2C2C", subs: ["Shockwave", "Dry needling", "Echografie"] }
];

// Voorbeeldlocaties: vervang door echte locaties (lat/lng vereist)
const LOCATIONS = [
  {
    id: "mzb-belcrum",
    name: "Monné Zorg & Beweging – Belcrum",
    address: "Industriekade 10",
    city: "Breda",
    website: "https://www.monne.nl/",
    lat: 51.5909,
    lng: 4.7793,
    categories: ["benen", "wervelkolom", "armen", "geriatrie"]
  },
  {
    id: "mzb-oosterhout",
    name: "Monné Zorg & Beweging – Oosterhout",
    address: "Merijntje Gijzenstraat 3e",
    city: "Oosterhout",
    website: "https://www.monne.nl/",
    lat: 51.6448,
    lng: 4.8573,
    categories: ["benen", "geriatrie", "chronische-zorg"]
  }
];

// Utilities
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function scrollToId(id){
  const el = document.querySelector(id);
  if(!el) return;
  const topbarH = document.querySelector(".topbar")?.offsetHeight ?? 0;
  const y = el.getBoundingClientRect().top + window.scrollY - (topbarH + 10);
  window.scrollTo({ top: y, behavior: "smooth" });
}

function escapeHtml(str){
  return String(str ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getCategoryByKey(key){
  return CATEGORIES.find(c => c.key === key);
}

function categoryDot(color){
  return `<span class="tag__dot" style="background:${color}"></span>`;
}

/* Nav */
function initNav(){
  $$(".nav__btn[data-scroll]").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-scroll");
      if(target) scrollToId(target);
    });
  });
}

/* Render: chips */
function renderCategoryChips(){
  const host = $("#categories");
  if(!host) return;

  host.innerHTML = CATEGORIES.map(cat => `
    <div class="cat-chip" data-filter="${escapeHtml(cat.key)}" role="button" tabindex="0" aria-label="Toon locaties voor ${escapeHtml(cat.name)}">
      <div class="cat-chip__top">
        <div class="cat-chip__name">${escapeHtml(cat.name)}</div>
        <span class="cat-chip__dot" style="background:${cat.color}" aria-hidden="true"></span>
      </div>
      <ul class="cat-chip__subs">
        ${cat.subs.map(s => `<li>${escapeHtml(s)}</li>`).join("")}
      </ul>
    </div>
  `).join("");

  host.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-filter]");
    if(!chip) return;
    setCategoryFilter(chip.getAttribute("data-filter"));
    scrollToId("#map");
  });

  host.addEventListener("keydown", (e) => {
    if(e.key !== "Enter" && e.key !== " ") return;
    const chip = e.target.closest("[data-filter]");
    if(!chip) return;
    setCategoryFilter(chip.getAttribute("data-filter"));
    scrollToId("#map");
  });
}

/* Render: category cards */
function renderCategoryCards(){
  const host = $("#categoryCards");
  if(!host) return;

  host.innerHTML = CATEGORIES.map(cat => `
    <div class="cat-card" data-cat="${escapeHtml(cat.key)}" role="button" tabindex="0" aria-label="Filter op ${escapeHtml(cat.name)}">
      <div class="cat-card__badge">
        <span class="cat-card__dot" style="background:${cat.color}" aria-hidden="true"></span>
        <span>${escapeHtml(cat.name)}</span>
      </div>
      <p class="cat-card__text">${escapeHtml(cat.subs.join(" · "))}</p>
      <div class="cat-card__btnrow">
        <button class="btn" type="button" data-filter="${escapeHtml(cat.key)}">Toon locaties</button>
      </div>
    </div>
  `).join("");

  host.addEventListener("click", (e) => {
    const filterBtn = e.target.closest("[data-filter]");
    const card = e.target.closest(".cat-card");
    const key = filterBtn?.getAttribute("data-filter") || card?.getAttribute("data-cat");
    if(!key) return;
    setCategoryFilter(key);
    scrollToId("#map");
  });

  host.addEventListener("keydown", (e) => {
    if(e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(".cat-card");
    if(!card) return;
    setCategoryFilter(card.getAttribute("data-cat"));
    scrollToId("#map");
  });
}

/* Map + list */
let map;
let markersLayer;

function initMap(){
  const el = $("#leafletMap");
  if(!el || typeof L === "undefined") return;

  map = L.map("leafletMap", { scrollWheelZoom: false });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap-bijdragers"
  }).addTo(map);

  markersLayer = L.layerGroup().addTo(map);
  map.setView([51.60, 4.78], 11);

  renderMapAndList();
}

function makePopup(loc){
  const cats = loc.categories
    .map(k => getCategoryByKey(k))
    .filter(Boolean)
    .map(cat => `<span class="tag">${categoryDot(cat.color)}${escapeHtml(cat.name)}</span>`)
    .join(" ");

  const website = loc.website
    ? `<a href="${escapeHtml(loc.website)}" target="_blank" rel="noopener">Website</a>`
    : "";

  return `
    <div style="min-width:220px;">
      <strong>${escapeHtml(loc.name)}</strong><br/>
      <span>${escapeHtml(loc.address)}, ${escapeHtml(loc.city)}</span><br/>
      <div style="margin-top:8px; display:flex; gap:6px; flex-wrap:wrap;">${cats}</div>
      <div style="margin-top:10px;">${website}</div>
    </div>
  `;
}

function renderMarkers(filtered){
  if(markersLayer) markersLayer.clearLayers();
  const bounds = [];

  filtered.forEach(loc => {
    const marker = L.marker([loc.lat, loc.lng]).addTo(markersLayer);
    marker.bindPopup(makePopup(loc));
    bounds.push([loc.lat, loc.lng]);
  });

  if(bounds.length && map){
    map.fitBounds(bounds, { padding: [30, 30] });
  }
}

function renderList(filtered){
  const host = $("#locationList");
  const count = $("#resultCount");
  if(!host) return;

  if(count) count.textContent = String(filtered.length);

  host.innerHTML = filtered.map(loc => {
    const tags = loc.categories
      .map(k => getCategoryByKey(k))
      .filter(Boolean)
      .map(cat => `<span class="tag">${categoryDot(cat.color)}${escapeHtml(cat.name)}</span>`)
      .join("");

    const website = loc.website
      ? `<a class="btn btn--ghost" href="${escapeHtml(loc.website)}" target="_blank" rel="noopener">Website</a>`
      : "";

    return `
      <div class="item">
        <div class="item__top">
          <div>
            <p class="item__name">${escapeHtml(loc.name)}</p>
            <p class="item__meta">${escapeHtml(loc.address)}, ${escapeHtml(loc.city)}</p>
          </div>
          <button class="btn btn--ghost" type="button" data-zoom="${escapeHtml(loc.id)}">Zoom</button>
        </div>
        <div class="item__tags">${tags}</div>
        <div style="margin-top:10px; display:flex; gap:10px; flex-wrap:wrap;">
          ${website}
        </div>
      </div>
    `;
  }).join("");

  host.querySelectorAll("[data-zoom]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-zoom");
      const loc = LOCATIONS.find(x => x.id === id);
      if(!loc || !map) return;
      map.setView([loc.lat, loc.lng], 14, { animate: true });
    });
  });
}

function normalize(str){
  return String(str || "").toLowerCase().trim();
}

function filterLocations({ q, categoryKey }){
  const query = normalize(q);
  return LOCATIONS.filter(loc => {
    const matchesQ = !query
      || normalize(loc.name).includes(query)
      || normalize(loc.city).includes(query)
      || normalize(loc.address).includes(query)
      || loc.categories.some(k => normalize(getCategoryByKey(k)?.name || "").includes(query));

    const matchesCat = !categoryKey || loc.categories.includes(categoryKey);
    return matchesQ && matchesCat;
  });
}

function renderMapAndList(){
  const q = $("#searchInput")?.value ?? "";
  const categoryKey = $("#categoryFilter")?.value ?? "";
  const filtered = filterLocations({ q, categoryKey });

  renderList(filtered);
  if(map) renderMarkers(filtered);
}

function fillCategoryFilter(){
  const sel = $("#categoryFilter");
  if(!sel) return;
  sel.innerHTML = `
    <option value="">Alle categorieën</option>
    ${CATEGORIES.map(c => `<option value="${escapeHtml(c.key)}">${escapeHtml(c.name)}</option>`).join("")}
  `;
}

function setCategoryFilter(key){
  const sel = $("#categoryFilter");
  if(!sel) return;
  sel.value = key || "";
  renderMapAndList();
}

function initFilters(){
  const input = $("#searchInput");
  const sel = $("#categoryFilter");
  const clear = $("#clearBtn");

  if(input) input.addEventListener("input", () => renderMapAndList());
  if(sel) sel.addEventListener("change", () => renderMapAndList());
  if(clear){
    clear.addEventListener("click", () => {
      if(input) input.value = "";
      if(sel) sel.value = "";
      renderMapAndList();
    });
  }
}

function init(){
  $("#year").textContent = String(new Date().getFullYear());
  initNav();
  renderCategoryChips();
  renderCategoryCards();
  fillCategoryFilter();
  initFilters();
  initMap();
  renderMapAndList();
}

document.addEventListener("DOMContentLoaded", init);
