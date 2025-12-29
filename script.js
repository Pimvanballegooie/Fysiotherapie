// script.js

// 1) Categorieën (kleur is exact gelijk voor hoofdcategorie en alle subcategorieën)
const CATEGORIES = [
  {
    key: "kinderen",
    name: "Kinderen",
    color: "#2FA4B5",
    subs: [
      "Kinderfysiotherapie",
      "Sensorische integratie (SI)",
      "KFT Orthopedie (KOFY)",
      "Ernstig meervoudige beperking (EMB)",
      "Zuigeling / jong kind",
      "Dysfunctionele ademhaling",
      "Manueel therapie kinderen",
      "Pubers",
      "Schroth"
    ],
    // optioneel: link naar detailpagina
    href: "#"
  },
  {
    key: "geriatrie",
    name: "Geriatrie",
    color: "#6E5A8A",
    subs: [
      "Geriatrische fysiotherapie",
      "Neurologie (centraal)",
      "Neurorevalidatie",
      "Niet aangeboren hersenletsel (NAH)",
      "Valpreventie",
      "Parkinson",
      "EDOMAH",
      "Cognitieve revalidatie"
    ],
    href: "#"
  },
  {
    key: "psychosomatiek",
    name: "Psychosomatiek",
    color: "#2F6F73",
    subs: [
      "Psychosomatische fysiotherapie",
      "Psychomotorische fysiotherapie",
      "Functionele neurologische stoornis",
      "Hyperventilatie syndroom (HVS)"
    ],
    href: "#"
  },
  {
    key: "chronische-zorg",
    name: "Chronische Zorg",
    color: "#6B7280",
    subs: [
      "Hart & vaat",
      "Long",
      "Diabetes",
      "Reuma",
      "Oncologie",
      "Chronische pijn",
      "Chronische vermoeidheid"
    ],
    href: "#"
  },
  {
    key: "wervelkolom",
    name: "Wervelkolom",
    color: "#1F4E79",
    subs: [
      "Hoofd & nek",
      "Thorax",
      "Lage rug & bekken"
    ],
    href: "#"
  },
  {
    key: "benen",
    name: "Benen",
    color: "#4CAF50",
    subs: [
      "Heup & bovenbeen",
      "Knie & onderbeen",
      "Enkel & voet",
      "Braces & ortheses"
    ],
    href: "https://pimvanballegooie.github.io/EnkelVoetNetwerk/"
  },
  {
    key: "armen",
    name: "Armen",
    color: "#F59E0B",
    subs: [
      "Schouder & bovenarm",
      "Elleboog & onderarm",
      "Pols & hand",
      "Braces & ortheses"
    ],
    href: "#"
  },
  {
    key: "specialistisch",
    name: "Specialistische behandelingen",
    color: "#8B2C2C",
    subs: [
      "Shockwave (E/R SWT)",
      "Epte",
      "Dry needling",
      "Oedeem",
      "Steunkousen",
      "Duizeligheid (BPPD)",
      "Manuele therapie",
      "Bekkenbodem therapie",
      "Sportfysiotherapie",
      "Prehabilitatie",
      "Echografie",
      "Woningaanpassing",
      "Arbo advies",
      "Valpreventie",
      "Aanvraag/advies/training hulpmiddelen"
    ],
    href: "#"
  }
];

// 2) Locaties (voorbeelddata)
// Vervang/uitbreiden met echte locaties. categories[] gebruikt keys uit CATEGORIES.
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
    id: "mzb-oc",
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
  return String(str)
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

// Render: "Werkwijze" categorie-overzicht (chips met subcategorieën)
function renderCategoryChips(){
  const host = $("#categories");
  if(!host) return;

  host.innerHTML = CATEGORIES.map(cat => `
    <div class="cat-chip">
      <div class="cat-chip__top">
        <div class="cat-chip__name">${escapeHtml(cat.name)}</div>
        <span class="cat-chip__dot" style="background:${cat.color}" aria-hidden="true"></span>
      </div>
      <ul class="cat-chip__subs">
        ${cat.subs.map(s => `<li>${escapeHtml(s)}</li>`).join("")}
      </ul>
    </div>
  `).join("");
}

// Render: Categoriekaarten (klik = filter op kaart + scroll naar map)
function renderCategoryCards(){
  const host = $("#categoryCards");
  if(!host) return;

  host.innerHTML = CATEGORIES.map(cat => `
    <div class="cat-card" data-cat="${cat.key}" role="button" tabindex="0" aria-label="Filter op ${escapeHtml(cat.name)}">
      <div class="cat-card__badge">
        <span class="cat-card__dot" style="background:${cat.color}" aria-hidden="true"></span>
        <span>${escapeHtml(cat.name)}</span>
      </div>
      <p class="cat-card__text">
        ${escapeHtml(cat.subs.slice(0, 3).join(" · "))}${cat.subs.length > 3 ? " · …" : ""}
      </p>
      <div class="cat-card__btnrow">
        <button class="btn btn--ghost" type="button" data-open="${cat.href}">Open pagina</button>
        <button class="btn" type="button" data-filter="${cat.key}">Toon locaties</button>
      </div>
    </div>
  `).join("");

  // Klikgedrag
  host.addEventListener("click", (e) => {
    const openBtn = e.target.closest("[data-open]");
    const filterBtn = e.target.closest("[data-filter]");
    const card = e.target.closest(".cat-card");

    if(openBtn){
      const href = openBtn.getAttribute("data-open");
      if(href && href !== "#") window.location.href = href;
      return;
    }
    if(filterBtn){
      const key = filterBtn.getAttribute("data-filter");
      setCategoryFilter(key);
      scrollToId("#map");
      return;
    }
    if(card){
      const key = card.getAttribute("data-cat");
      setCategoryFilter(key);
      scrollToId("#map");
    }
  });

  host.addEventListener("keydown", (e) => {
    if(e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(".cat-card");
    if(!card) return;
    const key = card.getAttribute("data-cat");
    setCategoryFilter(key);
    scrollToId("#map");
  });
}

// Map + list
let map;
let markersLayer;

function initMap(){
  const el = $("#leafletMap");
  if(!el || typeof L === "undefined") return;

  map = L.map("leafletMap", { scrollWheelZoom: false });

  // OpenStreetMap tiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap-bijdragers"
  }).addTo(map);

  markersLayer = L.layerGroup().addTo(map);

  // Start view: NL (pas aan naar regio)
  map.setView([51.60, 4.78], 11);

  renderMapAndList();
}

function makePopup(loc){
  const cats = loc.categories
    .map(k => getCategoryByKey(k))
    .filter(Boolean)
    .map(cat => `<span class="tag">${categoryDot(cat.color)}${escapeHtml(cat.name)}</span>`)
    .join(" ");

  const website = loc.website ? `<a href="${escapeHtml(loc.website)}" target="_blank" rel="noopener">Website</a>` : "";

  return `
    <div style="min-width:220px;">
      <strong>${escapeHtml(loc.name)}</strong><br/>
      <span>${escapeHtml(loc.address)}, ${escapeHtml(loc.city)}</span><br/>
      <div style="margin-top:8px; display:flex; gap:6px; flex-wrap:wrap;">${cats}</div>
      <div style="margin-top:10px;">${website}</div>
    </div>
  `;
}

function clearMarkers(){
  if(markersLayer) markersLayer.clearLayers();
}

function renderMarkers(filtered){
  clearMarkers();
  const bounds = [];

  filtered.forEach(loc => {
    const marker = L.marker([loc.lat, loc.lng]).addTo(markersLayer);
    marker.bindPopup(makePopup(loc));
    marker.on("click", () => {
      highlightListItem(loc.id);
    });
    bounds.push([loc.lat, loc.lng]);
  });

  if(bounds.length){
    map.fitBounds(bounds, { padding: [30, 30] });
  }
}

function highlightListItem(id){
  $$(".item").forEach(el => el.classList.remove("item--active"));
  const el = document.querySelector(`[data-id="${id}"]`);
  if(el){
    el.classList.add("item--active");
    el.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

// List rendering
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
      <div class="item" data-id="${escapeHtml(loc.id)}">
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

  // Zoom buttons
  host.addEventListener("click", (e) => {
    const z = e.target.closest("[data-zoom]");
    if(!z) return;
    const id = z.getAttribute("data-zoom");
    const loc = LOCATIONS.find(x => x.id === id);
    if(!loc || !map) return;
    map.setView([loc.lat, loc.lng], 14, { animate: true });
  }, { once: true });
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

  // Populate once
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

// Navigation
function initNav(){
  $$(".nav__btn[data-scroll]").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-scroll");
      if(target) scrollToId(target);
    });
  });
}

// Search/filter listeners
function initFilters(){
  const input = $("#searchInput");
  const sel = $("#categoryFilter");
  const clear = $("#clearBtn");

  if(input){
    input.addEventListener("input", () => renderMapAndList());
  }
  if(sel){
    sel.addEventListener("change", () => renderMapAndList());
  }
  if(clear){
    clear.addEventListener("click", () => {
      if(input) input.value = "";
      if(sel) sel.value = "";
      renderMapAndList();
    });
  }
}

// Init
function init(){
  $("#year").textContent = String(new Date().getFullYear());

  initNav();

  renderCategoryChips();
  renderCategoryCards();

  fillCategoryFilter();
  initFilters();
  initMap();

  // default render list count even if map fails to load
  renderMapAndList();
}

document.addEventListener("DOMContentLoaded", init);
