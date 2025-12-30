// Categorieën (hoofdcategorie + subcategorie)
// Kleur: exact gelijk voor hoofd en sub
// Letter: per subcategorie bedoeld voor marker-badges (zoals EnkelVoetNetwerk-stijl)

const CATEGORIES = [
  {
    key: "kinderen",
    name: "Kinderen",
    color: "#2FA4B5",
    letter: "K",
    subs: [
      { key: "kinderfysio", name: "Kinderfysiotherapeut", letter: "K" },
      { key: "si", name: "Sensorische Integratie (SI)", letter: "S" },
      { key: "kofy", name: "Kinderfysiotherapie bij orthopedie (KOFY)", letter: "O" },
      { key: "emb", name: "Ernstig meervoudige beperking (EMB)", letter: "E" },
      { key: "zuigeling", name: "Zuigeling / jong kind", letter: "Z" },
      { key: "adem", name: "Dysfunctionele ademhaling", letter: "D" },
      { key: "mt-kind", name: "Manueeltherapie bij kinderen", letter: "M" },
      { key: "pubers", name: "Pubers", letter: "P" },
      { key: "schroth", name: "Schroth", letter: "R" },
      { key: "houding-groei", name: "Houding & groei", letter: "H" }
    ]
  },
  {
    key: "geriatrie",
    name: "Geriatrie",
    color: "#6E5A8A",
    letter: "G",
    subs: [
      { key: "geri-fysio", name: "Geriatrie fysiotherapeut", letter: "G" },
      { key: "neuro-centraal", name: "Neurologie (centraal)", letter: "N" },
      { key: "neurorevalidatie", name: "Neurorevalidatie", letter: "R" },
      { key: "nah", name: "Niet aangeboren hersenletsel (NAH)", letter: "A" },
      { key: "valpreventie", name: "Valpreventie", letter: "V" },
      { key: "parkinson", name: "Parkinson", letter: "P" },
      { key: "edomah", name: "EDOMAH", letter: "E" },
      { key: "cognitief", name: "Cognitieve revalidatie", letter: "C" }
    ]
  },
  {
    key: "psychosociaal",
    name: "Psychosociaal (PS)",
    color: "#2F6F73",
    letter: "P",
    subs: [
      { key: "psf", name: "Psychosomatische fysiotherapie (PSF)", letter: "P" },
      { key: "pmf", name: "Psychomotorische fysiotherapie", letter: "M" },
      { key: "fns", name: "Functionele neurologische stoornis (FNS)", letter: "F" },
      { key: "hvs", name: "Hyperventilatie syndroom (HVS)", letter: "H" }
    ]
  },
  {
    key: "chronische-zorg",
    name: "Chronische Zorg",
    color: "#6B7280",
    letter: "C",
    subs: [
      { key: "hv", name: "Hart- en vaat", letter: "H" },
      { key: "long", name: "Long", letter: "L" },
      { key: "diabetes", name: "Diabetes", letter: "D" },
      { key: "reuma", name: "Reuma", letter: "R" },
      { key: "oncologie", name: "Oncologie", letter: "O" },
      { key: "chron-pijn", name: "Chronische pijn", letter: "P" },
      { key: "chron-moe", name: "Chronische vermoeidheid", letter: "V" }
    ]
  },
  {
    key: "wervelkolom",
    name: "Wervelkolom",
    color: "#1F4E79",
    letter: "W",
    subs: [
      { key: "hoofd-nek", name: "Hoofd & nek", letter: "N" },
      { key: "thorax", name: "Thorax", letter: "T" },
      { key: "lage-rug-bekken", name: "Lage rug & bekken", letter: "L" }
    ]
  },
  {
    key: "benen",
    name: "Benen",
    color: "#4CAF50",
    letter: "B",
    subs: [
      { key: "heup-bovenbeen", name: "Heup / bovenbeen", letter: "H" },
      { key: "knie-onderbeen", name: "Knie & onderbeen", letter: "K" },
      { key: "enkel-voet", name: "Enkel / voet", letter: "E" },
      { key: "brb", name: "Brace / orthese aanmeten benen (BRB)", letter: "R" }
    ]
  },
  {
    key: "armen",
    name: "Armen",
    color: "#F59E0B",
    letter: "A",
    subs: [
      { key: "schouder-bovenarm", name: "Schouder(blad) / bovenarm", letter: "S" },
      { key: "elleboog-onderarm", name: "Elleboog / onderarm", letter: "B" },
      { key: "pols-hand", name: "Pols / hand", letter: "P" },
      { key: "brace-arm", name: "Brace / orthese aanmeten arm", letter: "R" }
    ]
  },
  {
    key: "expertises",
    name: "Expertises & Behandelvormen",
    color: "#8B2C2C",
    letter: "E",
    subs: [
      { key: "shockwave", name: "Shockwave (E/R SWT)", letter: "S" },
      { key: "epte", name: "EPTE", letter: "E" },
      { key: "dry-needling", name: "Dry needling", letter: "D" },
      { key: "oedeem", name: "Oedeem", letter: "O" },
      { key: "steunkousen", name: "Steunkousen", letter: "K" },
      { key: "bppd", name: "Duizeligheid / BPPD", letter: "B" },
      { key: "manueel", name: "Manuele therapie", letter: "M" },
      { key: "bekkenbodem", name: "Bekkenbodem therapie", letter: "P" },
      { key: "sportfysio", name: "Sportfysiotherapie", letter: "T" },
      { key: "prehab", name: "Prehabilitatie (Amphia)", letter: "A" },
      { key: "echo", name: "Echografie", letter: "G" },
      { key: "woning", name: "Woningaanpassing", letter: "W" },
      { key: "decubitus", name: "Decubitus- en contractuurpreventie", letter: "C" },
      { key: "hulpmiddelen", name: "Aanvraag, advies en training hulpmiddelen en voorzieningen", letter: "H" },
      { key: "arbo", name: "Arbo advies", letter: "R" },
      { key: "valpreventie-exp", name: "Valpreventie", letter: "V" }
    ]
  }
];

// Helpers: tag keys
function mainTag(mainKey) {
  return `main:${mainKey}`;
}
function subTag(mainKey, subKey) {
  return `sub:${mainKey}/${subKey}`;
}

// Voorbeeld locaties (pas aan naar echte data)
// Belangrijk: voeg tags toe op subniveau (sub:...) en/of hoofd (main:...) indien gewenst.
// Aanrader: voeg altijd sub-tags toe; hoofd-tags kunnen automatisch afgeleid worden uit subs.
const LOCATIONS = [
  {
    id: "mzb-belcrum",
    name: "Monné Zorg & Beweging – Belcrum",
    address: "Industriekade 10",
    city: "Breda",
    website: "https://www.monne.nl/",
    lat: 51.5909,
    lng: 4.7793,
    tags: [
      subTag("wervelkolom", "lage-rug-bekken"),   // L
      subTag("benen", "knie-onderbeen"),          // K
      subTag("benen", "enkel-voet")
    ]
  },
  {
    id: "mzb-oosterhout",
    name: "Monné Zorg & Beweging – Oosterhout",
    address: "Merijntje Gijzenstraat 3e",
    city: "Oosterhout",
    website: "https://www.monne.nl/",
    lat: 51.6448,
    lng: 4.8573,
    tags: [
      subTag("benen", "knie-onderbeen"),
      subTag("geriatrie", "valpreventie"),
      subTag("chronische-zorg", "long")
    ]
  }
];

// Utility DOM
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

function normalize(str){
  return String(str || "").toLowerCase().trim();
}

function getMain(mainKey){
  return CATEGORIES.find(c => c.key === mainKey);
}

function getSub(mainKey, subKey){
  const m = getMain(mainKey);
  return m?.subs?.find(s => s.key === subKey);
}

// Selected filters state
const state = {
  q: "",
  selectedMain: new Set(), // main:... tags (not required if subs selected, but allowed)
  selectedSubs: new Set()  // sub:main/sub tags
};

function selectedAllTags(){
  // AND logic: everything selected must be present
  const tags = [];
  state.selectedMain.forEach(t => tags.push(t));
  state.selectedSubs.forEach(t => tags.push(t));
  return tags;
}

// Build filters UI
function renderFilters(){
  const host = $("#filtersGrid");
  if(!host) return;

  host.innerHTML = CATEGORIES.map(cat => {
    const mainChecked = state.selectedMain.has(mainTag(cat.key));
    const open = mainChecked || Array.from(state.selectedSubs).some(t => t.startsWith(`sub:${cat.key}/`));

    return `
      <div class="filter-block" data-main="${escapeHtml(cat.key)}">
        <div class="filter-block__head">
          <div class="filter-title">
            <span class="filter-dot" style="background:${cat.color}"></span>
            <strong>${escapeHtml(cat.name)}</strong>
          </div>
        </div>

        <div class="checkline">
          <input
            type="checkbox"
            id="main-${escapeHtml(cat.key)}"
            data-type="main"
            data-main="${escapeHtml(cat.key)}"
            ${mainChecked ? "checked" : ""}
          />
          <label for="main-${escapeHtml(cat.key)}">Selecteer hoofdcategorie</label>
        </div>

        <div class="subs ${open ? "subs--open" : ""}" data-subs="${escapeHtml(cat.key)}">
          <div class="muted small">Subcategorieën (je mag combineren met andere categorieën)</div>
          <div class="subgrid">
            ${cat.subs.map(sub => {
              const tag = subTag(cat.key, sub.key);
              const checked = state.selectedSubs.has(tag);
              return `
                <div class="subitem">
                  <div class="subleft">
                    <span class="letter-pill" style="background:${cat.color}">${escapeHtml(sub.letter)}</span>
                    <label for="sub-${escapeHtml(cat.key)}-${escapeHtml(sub.key)}">${escapeHtml(sub.name)}</label>
                  </div>
                  <input
                    type="checkbox"
                    id="sub-${escapeHtml(cat.key)}-${escapeHtml(sub.key)}"
                    data-type="sub"
                    data-main="${escapeHtml(cat.key)}"
                    data-sub="${escapeHtml(sub.key)}"
                    ${checked ? "checked" : ""}
                  />
                </div>
              `;
            }).join("")}
          </div>
        </div>
      </div>
    `;
  }).join("");

  host.addEventListener("change", onFilterChange);
}

function onFilterChange(e){
  const input = e.target;
  if(!(input instanceof HTMLInputElement)) return;

  const type = input.getAttribute("data-type");
  const mainKey = input.getAttribute("data-main");
  if(!type || !mainKey) return;

  if(type === "main"){
    const t = mainTag(mainKey);
    if(input.checked) state.selectedMain.add(t);
    else state.selectedMain.delete(t);

    // open/close subs
    const subs = document.querySelector(`.subs[data-subs="${CSS.escape(mainKey)}"]`);
    if(subs){
      const shouldOpen = input.checked || Array.from(state.selectedSubs).some(x => x.startsWith(`sub:${mainKey}/`));
      subs.classList.toggle("subs--open", shouldOpen);
    }
  }

  if(type === "sub"){
    const subKey = input.getAttribute("data-sub");
    if(!subKey) return;
    const t = subTag(mainKey, subKey);
    if(input.checked) state.selectedSubs.add(t);
    else state.selectedSubs.delete(t);

    // if any sub selected, keep subs open
    const subs = document.querySelector(`.subs[data-subs="${CSS.escape(mainKey)}"]`);
    if(subs){
      const mainChecked = state.selectedMain.has(mainTag(mainKey));
      const anySub = Array.from(state.selectedSubs).some(x => x.startsWith(`sub:${mainKey}/`));
      subs.classList.toggle("subs--open", mainChecked || anySub);
    }
  }

  renderSelectedChips();
  renderMapAndList();
}

// Selected chips UI
function renderSelectedChips(){
  const host = $("#selectedChips");
  const count = $("#selectedCount");
  if(!host || !count) return;

  const chips = [];

  // Main chips
  for(const t of state.selectedMain){
    const mainKey = t.replace("main:", "");
    const m = getMain(mainKey);
    if(!m) continue;
    chips.push({
      key: t,
      label: m.name,
      color: m.color
    });
  }

  // Sub chips
  for(const t of state.selectedSubs){
    const raw = t.replace("sub:", ""); // main/sub
    const [mainKey, subKey] = raw.split("/");
    const m = getMain(mainKey);
    const s = getSub(mainKey, subKey);
    if(!m || !s) continue;
    chips.push({
      key: t,
      label: `${m.name}: ${s.name}`,
      color: m.color
    });
  }

  count.textContent = String(chips.length);

  host.innerHTML = chips.length
    ? chips.map(c => `
        <span class="chip">
          <span class="dot" style="background:${c.color}"></span>
          ${escapeHtml(c.label)}
          <button type="button" data-remove="${escapeHtml(c.key)}" aria-label="Verwijderen">×</button>
        </span>
      `).join("")
    : `<span class="muted small">Nog geen selectie gemaakt.</span>`;

  host.querySelectorAll("[data-remove]").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-remove");
      if(!key) return;
      if(key.startsWith("main:")) state.selectedMain.delete(key);
      if(key.startsWith("sub:")) state.selectedSubs.delete(key);

      // re-render filter checkboxes to match state
      renderFilters();
      renderSelectedChips();
      renderMapAndList();
    });
  });
}

// Search
function initSearch(){
  const input = $("#searchInput");
  const clearBtn = $("#clearBtn");

  if(input){
    input.addEventListener("input", () => {
      state.q = input.value || "";
      renderMapAndList();
    });
  }

  if(clearBtn){
    clearBtn.addEventListener("click", () => {
      state.q = "";
      state.selectedMain.clear();
      state.selectedSubs.clear();
      if(input) input.value = "";
      renderFilters();
      renderSelectedChips();
      renderMapAndList();
    });
  }
}

// Filtering logic
function deriveMainKeysFromTags(tags){
  const set = new Set();
  tags.forEach(t => {
    if(t.startsWith("sub:")){
      const raw = t.replace("sub:", "");
      const mainKey = raw.split("/")[0];
      set.add(mainKey);
    }
    if(t.startsWith("main:")){
      set.add(t.replace("main:", ""));
    }
  });
  return set;
}

function filterLocations(){
  const query = normalize(state.q);
  const required = selectedAllTags(); // AND

  return LOCATIONS.filter(loc => {
    // Text match
    const matchesQ =
      !query ||
      normalize(loc.name).includes(query) ||
      normalize(loc.city).includes(query) ||
      normalize(loc.address).includes(query);

    if(!matchesQ) return false;

    // Tag match (AND)
    if(required.length){
      const locTags = new Set(loc.tags || []);

      // main-tags: allow match by presence of any sub under that main if location has sub-tags only
      for(const t of required){
        if(t.startsWith("main:")){
          const mainKey = t.replace("main:", "");
          const hasMainDirect = locTags.has(t);
          const hasAnySubOfMain = Array.from(locTags).some(x => x.startsWith(`sub:${mainKey}/`));
          if(!(hasMainDirect || hasAnySubOfMain)) return false;
        } else {
          if(!locTags.has(t)) return false;
        }
      }
    }

    return true;
  });
}

// Marker letters: show letters for selected filters (subs first; if only mains selected then show main letters)
function getSelectedLettersForMarker(){
  const letters = [];

  if(state.selectedSubs.size){
    for(const t of state.selectedSubs){
      const raw = t.replace("sub:", "");
      const [mainKey, subKey] = raw.split("/");
      const m = getMain(mainKey);
      const s = getSub(mainKey, subKey);
      if(m && s){
        letters.push({ letter: s.letter, color: m.color });
      }
    }
  } else if(state.selectedMain.size){
    for(const t of state.selectedMain){
      const mainKey = t.replace("main:", "");
      const m = getMain(mainKey);
      if(m){
        letters.push({ letter: m.letter, color: m.color });
      }
    }
  }

  // cap to max 3 to keep marker readable (je kunt dit verhogen)
  return letters.slice(0, 3);
}

function lettersForLocationIfNoSelection(loc){
  // If nothing selected, show up to 2 letters based on first two sub-tags the location has
  const tags = (loc.tags || []).filter(t => t.startsWith("sub:")).slice(0, 2);
  return tags.map(t => {
    const raw = t.replace("sub:", "");
    const [mainKey, subKey] = raw.split("/");
    const m = getMain(mainKey);
    const s = getSub(mainKey, subKey);
    if(!m || !s) return null;
    return { letter: s.letter, color: m.color };
  }).filter(Boolean);
}

// Leaflet map
let map;
let markersLayer;

function createLetterIcon(letters){
  const html = `
    <div class="marker-badge">
      ${letters.map(l => `<span class="marker-letter" style="background:${l.color}">${escapeHtml(l.letter)}</span>`).join("")}
    </div>
  `;
  return L.divIcon({
    className: "",
    html,
    iconSize: [1, 1], // Leaflet uses the HTML size; keep tiny
    iconAnchor: [18, 18]
  });
}

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
  const mainKeys = Array.from(deriveMainKeysFromTags(loc.tags || []));
  const chips = mainKeys
    .map(k => getMain(k))
    .filter(Boolean)
    .map(m => `<span class="chip"><span class="dot" style="background:${m.color}"></span>${escapeHtml(m.name)}</span>`)
    .join("");

  const website = loc.website
    ? `<div style="margin-top:10px;"><a href="${escapeHtml(loc.website)}" target="_blank" rel="noopener">Website</a></div>`
    : "";

  return `
    <div style="min-width:240px;">
      <strong>${escapeHtml(loc.name)}</strong><br/>
      <span>${escapeHtml(loc.address)}, ${escapeHtml(loc.city)}</span>
      <div style="margin-top:8px; display:flex; gap:6px; flex-wrap:wrap;">${chips}</div>
      ${website}
    </div>
  `;
}

function renderMarkers(filtered){
  if(!markersLayer) return;
  markersLayer.clearLayers();

  const bounds = [];
  const selectedLetters = getSelectedLettersForMarker();

  filtered.forEach(loc => {
    const letters = selectedLetters.length ? selectedLetters : lettersForLocationIfNoSelection(loc);
    const marker = L.marker([loc.lat, loc.lng], { icon: createLetterIcon(letters) }).addTo(markersLayer);
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
  if(!host || !count) return;

  count.textContent = String(filtered.length);

  const selectedLetters = getSelectedLettersForMarker();

  host.innerHTML = filtered.map(loc => {
    const letters = selectedLetters.length ? selectedLetters : lettersForLocationIfNoSelection(loc);
    const letterHtml = letters.map(l => `<span class="letter-pill" style="background:${l.color}">${escapeHtml(l.letter)}</span>`).join("");

    const website = loc.website
      ? `<a class="btn btn--ghost" href="${escapeHtml(loc.website)}" target="_blank" rel="noopener">Website</a>`
      : "";

    return `
      <div class="item">
        <div class="item__top">
          <div>
            <p class="item__name">${escapeHtml(loc.name)}</p>
            <p class="item__meta">${escapeHtml(loc.address)}, ${escapeHtml(loc.city)}</p>
            <div style="margin-top:8px; display:flex; gap:6px; flex-wrap:wrap;">${letterHtml}</div>
          </div>
          <button class="btn btn--ghost" type="button" data-zoom="${escapeHtml(loc.id)}">Zoom</button>
        </div>

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

function renderMapAndList(){
  const filtered = filterLocations();
  renderList(filtered);
  if(map) renderMarkers(filtered);
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

function init(){
  $("#year").textContent = String(new Date().getFullYear());
  initNav();
  initSearch();
  renderFilters();
  renderSelectedChips();
  initMap();
  renderMapAndList();
}

document.addEventListener("DOMContentLoaded", init);
