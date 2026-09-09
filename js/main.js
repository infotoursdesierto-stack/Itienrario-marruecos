/* ============================================================
   Marruecos Auténtico — lógica del sitio
   ============================================================ */

/* --------- DATOS DE CONTACTO (edita aquí) --------- */
const CONTACT = {
  email: "miglioritourmarocco@gmail.com",
  // ⚠️ PLACEHOLDER — sustituye por tu número real de WhatsApp
  // formato: código de país + número, solo dígitos (sin "+", espacios ni guiones)
  whatsapp: "212600000000",
  whatsappDisplay: "+212 600-000000",
};

/* --------- Iconos SVG reutilizables --------- */
const ICONS = {
  dune: `<svg class="icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="46" cy="16" r="7"/><path d="M4 46c8-10 14-10 20-4s12 6 18-2 12-8 18-2"/><path d="M4 54c8-8 14-8 20-3s12 5 18-2 12-7 18-2"/></svg>`,
  mountain: `<svg class="icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 50 22 20l10 14 6-8 22 24Z"/><path d="M17 30l5 6 4-5"/></svg>`,
  arch: `<svg class="icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 54V30a20 20 0 0 1 40 0v24"/><path d="M12 54h40"/><path d="M32 4v6"/></svg>`,
  wave: `<svg class="icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="46" cy="16" r="6"/><path d="M4 34c6-6 12-6 18 0s12 6 18 0 12-6 18 0"/><path d="M4 46c6-6 12-6 18 0s12 6 18 0 12-6 18 0"/></svg>`,
  compass: `<svg class="icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="26"/><path d="M42 22 27 27l-5 15 15-5Z"/></svg>`,
};

const SMALL = {
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-7.4 7-12.5A7 7 0 0 0 5 9.5C5 14.6 12 22 12 22Z"/><circle cx="12" cy="9.5" r="2.3"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.1a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.1 8.1 0 1 1 12 20.1Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.6.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.3.1-.2 0-.4 0-.5s-.6-1.5-.9-2c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.6 1.1 2.8s1.7 2.7 4.3 3.7c2.5 1 2.5.7 3 .6a2.5 2.5 0 0 0 1.6-1.1 2 2 0 0 0 .1-1.1c-.1-.1-.2-.2-.5-.3Z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`,
  star: "★",
};

function stars(rating) {
  const full = Math.round(rating);
  return SMALL.star.repeat(full) + '<span style="opacity:.25">' + SMALL.star.repeat(5 - full) + "</span>";
}

function bookingLinks(tour) {
  const subject = encodeURIComponent(`Reserva: ${tour.title}`);
  const body = encodeURIComponent(
    `Hola, me gustaría reservar el tour "${tour.title}" (${tour.days} día${tour.days > 1 ? "s" : ""}). Por favor, envíenme disponibilidad y forma de pago.\n\nNombre:\nFecha deseada:\nNº de personas:`
  );
  const waText = encodeURIComponent(
    `Hola 👋, me gustaría reservar el tour "${tour.title}" (${tour.days} día${tour.days > 1 ? "s" : ""}). ¿Podrían darme disponibilidad?`
  );
  return {
    email: `mailto:${CONTACT.email}?subject=${subject}&body=${body}`,
    whatsapp: `https://wa.me/${CONTACT.whatsapp}?text=${waText}`,
  };
}

/* --------- Render de una tarjeta de tour --------- */
function tourCardHTML(tour) {
  const links = bookingLinks(tour);
  const nightsLabel = tour.nights > 0 ? `${tour.days} días / ${tour.nights} noches` : "Excursión de 1 día";
  const itineraryId = `itin-${tour.id}`;

  return `
  <article class="tour-card" id="${tour.id}" data-category="${tour.category}" data-price="${tour.price}" data-title="${tour.title.toLowerCase()}">
    <div class="card-media ${tour.media}">
      ${ICONS[tour.icon] || ICONS.compass}
      <span class="card-badge">${tour.categoryLabel}</span>
    </div>
    <div class="card-body">
      <div class="card-meta duration-badge">${SMALL.clock}<span>${nightsLabel}</span></div>
      <h3>${tour.title}</h3>
      <p class="card-desc">${tour.summary}</p>
      <ul class="tour-highlights">
        ${tour.highlights.slice(0, 4).map((h) => `<li>${h}</li>`).join("")}
      </ul>
      <div class="rating"><span class="stars">${stars(tour.rating)}</span> ${tour.rating.toFixed(1)} · ${tour.reviews} reseñas</div>

      <button class="toggle-itinerary" aria-expanded="false" aria-controls="${itineraryId}">
        Ver itinerario día a día ${SMALL.chevron}
      </button>
      <div class="itinerary-panel" id="${itineraryId}">
        ${tour.itinerary
          .map(
            (d, i) => `
          <div class="itinerary-day">
            <span class="day-num">${i + 1}</span>
            <div><h5>${d.title}</h5><p>${d.text}</p></div>
          </div>`
          )
          .join("")}
        <div class="tour-includes"><strong>Incluye/no incluye:</strong> ${tour.includes}</div>
      </div>

      <div class="card-footer">
        <div class="price">${tour.price}€ <span>/ persona</span></div>
      </div>
      <div class="book-buttons">
        <a class="btn btn-whatsapp" href="${links.whatsapp}" target="_blank" rel="noopener">${SMALL.whatsapp} WhatsApp</a>
        <a class="btn btn-email" href="${links.email}">${SMALL.mail} Email</a>
      </div>
    </div>
  </article>`;
}

function renderTours(containerId, tours) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = tours.map(tourCardHTML).join("");
  wireAccordions(el);
}

function wireAccordions(scope) {
  scope.querySelectorAll(".toggle-itinerary").forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = document.getElementById(btn.getAttribute("aria-controls"));
      const open = panel.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.innerHTML = `Ver itinerario día a día ${SMALL.chevron}`;
    });
  });
}

/* --------- Filtros de la página de tours --------- */
function initTourFilters() {
  const grid = document.getElementById("tours-grid");
  if (!grid) return;

  const pills = document.querySelectorAll("[data-filter-category]");
  const priceInput = document.getElementById("filter-price");
  const priceOut = document.getElementById("filter-price-value");
  const searchInput = document.getElementById("filter-search");
  const emptyState = document.getElementById("results-empty");

  let activeCategory = "all";

  function applyFilters() {
    const maxPrice = priceInput ? Number(priceInput.value) : Infinity;
    const query = (searchInput ? searchInput.value : "").trim().toLowerCase();
    let visibleCount = 0;

    grid.querySelectorAll(".tour-card").forEach((card) => {
      const matchesCategory = activeCategory === "all" || card.dataset.category === activeCategory;
      const matchesPrice = Number(card.dataset.price) <= maxPrice;
      const matchesQuery = !query || card.dataset.title.includes(query);
      const show = matchesCategory && matchesPrice && matchesQuery;
      card.style.display = show ? "" : "none";
      if (show) visibleCount++;
    });

    if (emptyState) emptyState.classList.toggle("visible", visibleCount === 0);
  }

  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategory = pill.dataset.filterCategory;
      applyFilters();
    });
  });

  if (priceInput) {
    priceInput.addEventListener("input", () => {
      if (priceOut) priceOut.textContent = `${priceInput.value}€`;
      applyFilters();
    });
  }
  if (searchInput) searchInput.addEventListener("input", applyFilters);

  /* Preseleccionar filtros a partir de la URL (?categoria=...&precio=...&q=...) */
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("categoria");
  const price = params.get("precio");
  const q = params.get("q");

  if (cat) {
    const match = document.querySelector(`[data-filter-category="${cat}"]`);
    if (match) match.click();
  }
  if (price && priceInput) {
    priceInput.value = price;
    priceInput.dispatchEvent(new Event("input"));
  }
  if (q && searchInput) {
    searchInput.value = q;
  }

  applyFilters();

  if (cat && document.getElementById(cat) === null) {
    // no-op: category filter already applied above
  }
}

/* --------- Búsqueda del hero (index) → redirige a tours.html --------- */
function initHeroSearch() {
  const form = document.getElementById("hero-search-form");
  if (!form) return;

  const rangeInput = form.querySelector('input[type="range"]');
  const rangeOut = document.getElementById("hero-price-value");
  if (rangeInput && rangeOut) {
    rangeInput.addEventListener("input", () => (rangeOut.textContent = `${rangeInput.value}€`));
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const category = form.querySelector('[name="categoria"]').value;
    const query = form.querySelector('[name="q"]').value;
    const price = rangeInput ? rangeInput.value : "";
    const params = new URLSearchParams();
    if (category && category !== "all") params.set("categoria", category);
    if (query) params.set("q", query);
    if (price) params.set("precio", price);
    window.location.href = `tours.html?${params.toString()}`;
  });
}

/* --------- Navegación móvil --------- */
function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
}

/* --------- Botón volver arriba --------- */
function initBackToTop() {
  const btn = document.querySelector(".back-to-top");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* --------- Formulario de contacto (sin backend) --------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const note = document.getElementById("form-note");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (note) {
      note.textContent = "¡Gracias! Tu mensaje ha sido preparado. Ábrelo en tu cliente de correo para enviarlo, o escríbenos directamente por WhatsApp.";
      note.classList.add("visible");
    }
    const name = form.querySelector("#name").value;
    const email = form.querySelector("#email").value;
    const message = form.querySelector("#message").value;
    const subject = encodeURIComponent("Consulta desde la web — Marruecos Auténtico");
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  });
}

/* --------- Newsletter (sin backend) --------- */
function initNewsletter() {
  const form = document.getElementById("newsletter-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector("input");
    input.value = "";
    const msg = form.parentElement.querySelector(".newsletter-msg");
    if (msg) msg.style.display = "block";
  });
}

/* --------- Enlaces de WhatsApp/email genéricos (botones fijos, footer, contacto) --------- */
function wireStaticContactLinks() {
  document.querySelectorAll("[data-contact='whatsapp']").forEach((a) => {
    a.href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hola, me gustaría más información sobre sus tours en Marruecos.")}`;
  });
  document.querySelectorAll("[data-contact='email']").forEach((a) => {
    a.href = `mailto:${CONTACT.email}`;
  });
  document.querySelectorAll("[data-contact='whatsapp-display']").forEach((el) => {
    el.textContent = CONTACT.whatsappDisplay;
  });
  document.querySelectorAll("[data-contact='email-display']").forEach((el) => {
    el.textContent = CONTACT.email;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("featured-tours")) {
    renderTours("featured-tours", TOURS.slice(0, 6));
  }
  if (document.getElementById("tours-grid")) {
    renderTours("tours-grid", TOURS);
    initTourFilters();
  }
  initHeroSearch();
  initNav();
  initBackToTop();
  initContactForm();
  initNewsletter();
  wireStaticContactLinks();
});
