// =============================
// 1) Categorieën + subcategorieën
// =============================
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

function mainTag(mainKey) { return `main:${mainKey}`; }
function subTag(mainKey, subKey) { return `sub:${mainKey}/${subKey}`; }

// =============================
// 2) Locaties met therapeuten (voorbeelddata)
// =============================
const LOCATIONS = [
  {
    id: "mzb-belcrum",
    org: "Monné Zorg & Beweging",
    name: "Monné Zorg & Beweging – Belcrum",
    address: "Industriekade 10",
    city: "Breda",
    phone: "076 5810491",
    email: "info@monne-zorgenbeweging.nl",
    website: "https://www.monne.nl/",
    lat: 51.5909,
    lng: 4.7793,
    therapists: [
      {
        id: "pim",
        name: "Pim van Ballegooie",
        phone: "076 5810491",
        email: "info@monne-zorgenbeweging.nl",
        tags: [
          subTag("benen", "knie-onderbeen"),
          subTag("wervelkolom", "lage-rug-bekken"),
          subTag("expertises", "echo")
        ]
      },
      {
        id: "pjotr",
        name: "Pjotr Goossens",
        phone: "076 5810491",
        email: "info@monne-zorgenbeweging.nl",
        tags: [
          subTag("armen", "schouder-bovenarm"),
          subTag("expertises", "dry-needling"),
          subTag("wervelkolom", "hoofd-nek")
        ]
      },
      {
        id: "joost",
        name: "Joost van Broekhoven",
        phone: "076 5810491",
        email: "info@monne-zorgenbeweging.nl",
        tags: [
          subTag("geriatrie", "valpreventie"),
          subTag("chronische-zorg", "chron-pijn"),
          subTag("benen", "enkel-voet")
        ]
      }
    ]
  },
  {
    id: "mzb-oosterhout",
    org: "Monné Zorg & Beweging",
    name: "Monné Zorg & Beweging – Oosterhout",
    address: "Merijntje Gijzenstraat 3e",
    city: "Oosterhout",
    phone: "076 5810491",
    email: "info@monne-zorgenbeweging.nl",
    website: "https://www.monne.nl/",
    lat: 51.6448,
    lng: 4.8573,
    therapists: [
      {
        id: "joeri",
        name: "Joeri van Dongen",
        phone: "076 5810491",
        email: "info@monne-zorgenbeweging.nl",
        tags: [
          subTag("benen", "heup-bovenbeen"),
          subTag("geriatrie", "parkinson"),
          subTag("expertises", "manueel")
        ]
      }
    ]
  }
];

// =============================
// 3) Utilities
// =============================
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
  return getMain(mainKey)?.subs?.find(s => s.key === subKey);
}

function tagToMeta(tag){
  if(tag.startsWith("sub:")){
    const raw = tag.replace("sub:", "");
    const [mainKey, subKey] = raw.split("/");
    const m = getMain(mainKey);
    const s = getSub(mainKey, subKey);
    if(!m || !s) return null;
    return { mainKey, subKey, color: m.color, letter: s.letter, label: `${m.name}: ${s.name}` };
  }
  if(tag.startsWith("main:")){
    const mainKey = tag.replace("main:", "");
    const m = getMain(mainKey);
    if(!m) return null;
    return { mainKey, subKey: null, color: m.color, letter: m.letter, label: m.name };
  }
  return null;
}

// =============================
// 4) State
// =============================
const state = {
  q: "",
  selectedMain: new Set(),
  selectedSubs: new Set()
};

function selectedAllTags(){
  const out = [];
  state.selectedMain.forEach(t => out.push(t));
  state.selectedSubs.forEach(t => out.push(t));
  return out;
}

// =============================
// 5) Filters UI
// =============================
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

  // Belangrijk: geen listeners stapelen
  if(!host.dataset.bound){
    host.addEventListener("change", onFilterChange);
    host.dataset.bound = "1";
  }
}

function renderSelectedChips(){
  const host = $("#selectedChips");
  const count = $("#selectedCount");
  if(!host || !count) return;

  const chips = [];

  for(const t of state.selectedMain){
    const meta = tagToMeta(t);
    if(meta) chips.push({ key: t, label: meta.label, color: meta.color });
  }
  for(const t of state.selectedSubs){
    const meta = tagToMeta(t);
    if(meta) chips.push({ key: t, label: meta.label, color: meta.color });
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
      renderFilters();
      renderSelectedChips();
      renderMapAndList();
    });
  });
}

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
      forceLeafletResize();
    });
  }
}

// =============================
// 6) Filtering op therapeutniveau (AND)
// =============================
function therapistMatches(therapist, requiredTags){
  const ttags = new Set(therapist.tags || []);
  for(const req of requiredTags){
    if(req.startsWith("main:")){
      const mainKey = req.replace("main:", "");
      const hasMain = ttags.has(req);
      const hasAnySub = Array.from(ttags).some(x => x.startsWith(`sub:${mainKey}/`));
      if(!(hasMain || hasAnySub)) return false;
    } else {
      if(!ttags.has(req)) return false;
    }
  }
  return true;
}

function locationTextMatches(loc, query){
  if(!query) return true;
  const q = normalize(query);
  return (
    normalize(loc.name).includes(q) ||
    normalize(loc.city).includes(q) ||
    normalize(loc.address).includes(q) ||
    normalize(loc.org).includes(q)
  );
}

function filterLocationsTherapistLevel(){
  const required = selectedAllTags();
  const query = state.q;

  const results = [];

  for(const loc of LOCATIONS){
    const locTextOk = locationTextMatches(loc, query);

    const matches = [];
    for(const th of (loc.therapists || [])){
      const thNameOk = !query || normalize(th.name).includes(normalize(query));
      if(!locTextOk && !thNameOk) continue;

      if(required.length){
        if(therapistMatches(th, required)) matches.push(th);
      } else {
        matches.push(th);
      }
    }

    if(matches.length){
      results.push({ location: loc, therapists: matches });
    }
  }

  return results;
}

function getSelectedLettersForMarker(){
  const letters = [];

  if(state.selectedSubs.size){
    for(const t of state.selectedSubs){
      const meta = tagToMeta(t);
      if(meta) letters.push({ letter: meta.letter, color: meta.color });
    }
  } else if(state.selectedMain.size){
    for(const t of state.selectedMain){
      const meta = tagToMeta(t);
      if(meta) letters.push({ letter: meta.letter, color: meta.color });
    }
  }
  return letters.slice(0, 3);
}

function lettersFromTherapists(therapists){
  const letters = [];
  for(const th of therapists){
    const subTags = (th.tags || []).filter(t => t.startsWith("sub:"));
    for(const st of subTags){
      const meta = tagToMeta(st);
      if(meta) letters.push({ letter: meta.letter, color: meta.color });
      if(letters.length >= 2) return letters;
    }
  }
  return letters;
}

// =============================
// 7) Leaflet kaart
// =============================
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
    iconSize: [1, 1],
    iconAnchor: [18, 18]
  });
}

// Force leaflet to recalc size on mobile + after scroll/layout changes
function forceLeafletResize(){
  if(!window.map) return;
  setTimeout(() => window.map.invalidateSize(true), 50);
  setTimeout(() => window.map.invalidateSize(true), 250);
  setTimeout(() => window.map.invalidateSize(true), 600);
}

function initMap(){
  const el = $("#leafletMap");
  if(!el || typeof L === "undefined") return;

  map = L.map("leafletMap", { scrollWheelZoom: false });
  window.map = map;

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap-bijdragers"
  }).addTo(map);

  markersLayer = L.layerGroup().addTo(map);
  map.setView([51.60, 4.78], 11);

  renderMapAndList();
  forceLeafletResize();
}

function therapistLettersHtml(therapist){
  const metas = (therapist.tags || [])
    .filter(t => t.startsWith("sub:"))
    .map(tagToMeta)
    .filter(Boolean)
    .slice(0, 6);

  return metas.map(m =>
    `<span class="letter-pill" style="background:${m.color}">${escapeHtml(m.letter)}</span>`
  ).join("");
}

function makePopup(loc, matchedTherapists){
  const locPhone = loc.phone ? `<div>Tel: <a href="tel:${escapeHtml(loc.phone)}">${escapeHtml(loc.phone)}</a></div>` : "";
  const locEmail = loc.email ? `<div>E-mail: <a href="mailto:${escapeHtml(loc.email)}">${escapeHtml(loc.email)}</a></div>` : "";

  const people = matchedTherapists.map(th => {
    const thPhone = th.phone ? `<div>Tel: <a href="tel:${escapeHtml(th.phone)}">${escapeHtml(th.phone)}</a></div>` : "";
    const thEmail = th.email ? `<div>E-mail: <a href="mailto:${escapeHtml(th.email)}">${escapeHtml(th.email)}</a></div>` : "";

    return `
      <div style="margin-top:12px; padding-top:12px; border-top:1px solid rgba(15,23,42,.12);">
        <strong>${escapeHtml(th.name)}</strong>
        <div style="margin-top:6px; display:flex; gap:6px; flex-wrap:wrap;">
          ${therapistLettersHtml(th)}
        </div>
        <div style="margin-top:6px; font-size:14px;">
          ${thPhone}
          ${thEmail}
        </div>
      </div>
    `;
  }).join("");

  const website = loc.website
    ? `<div style="margin-top:12px;"><a href="${escapeHtml(loc.website)}" target="_blank" rel="noopener">Website</a></div>`
    : "";

  return `
    <div style="min-width:260px;">
      <strong>${escapeHtml(loc.name)}</strong><br/>
      <span>${escapeHtml(loc.address)}, ${escapeHtml(loc.city)}</span>
      <div style="margin-top:8px; font-size:14px;">
        ${locPhone}
        ${locEmail}
      </div>
      ${people}
      ${website}
    </div>
  `;
}

function renderMarkers(results){
  if(!markersLayer) return;
  markersLayer.clearLayers();

  const bounds = [];
  const selectedLetters = getSelectedLettersForMarker();

  for(const r of results){
    const loc = r.location;
    const letters = selectedLetters.length ? selectedLetters : lettersFromTherapists(r.therapists);

    const marker = L.marker([loc.lat, loc.lng], { icon: createLetterIcon(letters) }).addTo(markersLayer);
    marker.bindPopup(makePopup(loc, r.therapists));

    bounds.push([loc.lat, loc.lng]);
  }

  if(bounds.length && map){
    map.fitBounds(bounds, { padding: [30, 30] });
  }
}

// =============================
// 8) Sidebar lijst: locatie + matchende therapeuten + contact
// =============================
function renderList(results){
  const host = $("#locationList");
  const count = $("#resultCount");
  if(!host || !count) return;

  count.textContent = String(results.length);

  const selectedLetters = getSelectedLettersForMarker();

  host.innerHTML = results.map(r => {
    const loc = r.location;

    const locPhone = loc.phone ? `Tel: <a href="tel:${escapeHtml(loc.phone)}">${escapeHtml(loc.phone)}</a>` : "";
    const locEmail = loc.email ? `E-mail: <a href="mailto:${escapeHtml(loc.email)}">${escapeHtml(loc.email)}</a>` : "";

    const therapistRows = r.therapists.map(th => {
      const thPhone = th.phone ? `Tel: <a href="tel:${escapeHtml(th.phone)}">${escapeHtml(th.phone)}</a>` : "";
      const thEmail = th.email ? `E-mail: <a href="mailto:${escapeHtml(th.email)}">${escapeHtml(th.email)}</a>` : "";

      const letters = selectedLetters.length ? selectedLetters : lettersFromTherapists([th]);
      const letterHtml = letters.map(l =>
        `<span class="letter-pill" style="background:${l.color}">${escapeHtml(l.letter)}</span>`
      ).join("");

      return `
        <div style="margin-top:12px; padding-top:12px; border-top:1px solid rgba(15,23,42,.12);">
          <div style="display:flex; justify-content:space-between; gap:10px; align-items:flex-start;">
            <strong>${escapeHtml(th.name)}</strong>
            <div style="display:flex; gap:6px; flex-wrap:wrap;">${letterHtml}</div>
          </div>
          <div style="margin-top:6px; font-size:14px; color:#0f172a;">
            <div>${thPhone}</div>
            <div>${thEmail}</div>
          </div>
        </div>
      `;
    }).join("");

    const website = loc.website
      ? `<a class="btn btn--ghost" href="${escapeHtml(loc.website)}" target="_blank" rel="noopener">Website</a>`
      : "";

    return `
      <div class="item">
        <div class="item__top">
          <div>
            <p class="item__name">${escapeHtml(loc.name)}</p>
            <p class="item__meta">${escapeHtml(loc.address)}, ${escapeHtml(loc.city)}</p>
            <div style="margin-top:6px; font-size:14px;">
              <div>${locPhone}</div>
              <div>${locEmail}</div>
            </div>
          </div>
          <button class="btn btn--ghost" type="button" data-zoom="${escapeHtml(loc.id)}">Zoom</button>
        </div>

        ${therapistRows}

        <div style="margin-top:12px; display:flex; gap:10px; flex-wrap:wrap;">
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
      forceLeafletResize();
    });
  });
}

// =============================
// 9) Nav + init
// =============================
function initNav(){
  $$(".nav__btn[data-scroll]").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-scroll");
      if(target) scrollToId(target);

      // belangrijk: als je naar de map scrollt, daarna Leaflet laten herberekenen
      if(target === "#map"){
        setTimeout(forceLeafletResize, 350);
      }
    });
  });
}

function renderMapAndList(){
  const results = filterLocationsTherapistLevel();
  renderList(results);
  if(map) renderMarkers(results);
  forceLeafletResize();
}

function init(){
  const yearEl = $("#year");
  if(yearEl) yearEl.textContent = String(new Date().getFullYear());

  initNav();
  initSearch();
  renderFilters();
  renderSelectedChips();
  initMap();
  renderMapAndList();

  // Mobile: fix bij resize/orientation
  window.addEventListener("resize", forceLeafletResize);
  window.addEventListener("orientationchange", forceLeafletResize);

  // Ook bij terugkomen uit background/tab op mobiel
  document.addEventListener("visibilitychange", () => {
    if(!document.hidden) forceLeafletResize();
  });

  // Na initial load nog een keer forceren
  setTimeout(forceLeafletResize, 800);
}

document.addEventListener("DOMContentLoaded", init);
