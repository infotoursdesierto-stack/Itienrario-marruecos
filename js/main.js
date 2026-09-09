/*
 * Itinerario Marruecos — lógica compartida del sitio
 * Requiere que tours-data.js esté cargado antes que este archivo.
 */

/* ---------- Menú móvil ---------- */
function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
}

/* ---------- Tarjeta de tour (HTML compartido entre home y listado) ---------- */
function renderStars(rating) {
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

function tourCardHTML(tour) {
  return `
    <article class="tour-card" data-days="${tour.days}" data-price="${tour.price}" data-route="${tour.route}">
      <div class="tour-media">
        <img src="${tour.image}" alt="${tour.title}" loading="lazy">
        ${tour.badge ? `<span class="tour-badge">${tour.badge}</span>` : ""}
        <span class="tour-price-tag">${formatPrice(tour)} <small>/pers.</small></span>
      </div>
      <div class="tour-body">
        <span class="tour-route">${tour.route}</span>
        <h3>${tour.title}</h3>
        <div class="tour-meta">
          <span>🗓️ ${tour.days} día${tour.days > 1 ? "s" : ""}</span>
          <span>⭐ ${tour.rating} (${tour.reviews})</span>
        </div>
        <p class="excerpt">${tour.excerpt}</p>
        <div class="tour-footer">
          <a class="btn btn-dark-outline" href="${tour.url}">Ver detalles</a>
        </div>
      </div>
    </article>
  `;
}

/* ---------- Pinta tours en un contenedor dado ---------- */
function renderTours(containerId, tours) {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (!tours.length) {
    el.innerHTML = `<div class="empty-state">No hay tours que coincidan con tu búsqueda. Prueba a ajustar los filtros.</div>`;
    return;
  }
  el.innerHTML = tours.map(tourCardHTML).join("");
}

/* ---------- Home: tours destacados (los 3 primeros) ---------- */
function initFeaturedTours() {
  const el = document.getElementById("featured-tours");
  if (!el) return;
  renderTours("featured-tours", TOURS.slice(0, 3));
}

/* ---------- Listado completo con filtros ---------- */
function initTourListing() {
  const grid = document.getElementById("tour-grid");
  if (!grid) return;

  const durationSelect = document.getElementById("filter-duration");
  const routeSelect = document.getElementById("filter-route");
  const priceRange = document.getElementById("filter-price");
  const priceValue = document.getElementById("filter-price-value");
  const resultsCount = document.getElementById("results-count");

  // Rellena el filtro de rutas dinámicamente a partir de los datos
  if (routeSelect) {
    const routes = [...new Set(TOURS.map((t) => t.route))];
    routes.forEach((route) => {
      const opt = document.createElement("option");
      opt.value = route;
      opt.textContent = route;
      routeSelect.appendChild(opt);
    });
  }

  function applyFilters() {
    let filtered = TOURS.slice();

    if (durationSelect && durationSelect.value !== "all") {
      const max = parseInt(durationSelect.value, 10);
      filtered = filtered.filter((t) => t.days <= max);
    }
    if (routeSelect && routeSelect.value !== "all") {
      filtered = filtered.filter((t) => t.route === routeSelect.value);
    }
    if (priceRange) {
      const maxPrice = parseInt(priceRange.value, 10);
      filtered = filtered.filter((t) => t.price <= maxPrice);
    }

    renderTours("tour-grid", filtered);
    if (resultsCount) {
      resultsCount.textContent = `${filtered.length} tour${filtered.length !== 1 ? "s" : ""} encontrado${filtered.length !== 1 ? "s" : ""}`;
    }
  }

  [durationSelect, routeSelect].forEach((elm) => elm && elm.addEventListener("change", applyFilters));
  if (priceRange) {
    priceRange.addEventListener("input", () => {
      if (priceValue) priceValue.textContent = `${priceRange.value}€`;
      applyFilters();
    });
  }

  applyFilters();
}

/* ---------- Widget de búsqueda del hero → redirige a tours.html con filtros ---------- */
function initHeroSearch() {
  const form = document.getElementById("hero-search-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const duration = document.getElementById("hero-duration")?.value || "all";
    const route = document.getElementById("hero-route")?.value || "all";
    const price = document.getElementById("hero-price")?.value || "500";
    const params = new URLSearchParams({ duration, route, price });
    window.location.href = `tours.html?${params.toString()}`;
  });

  // Rellena el select de rutas del hero también
  const heroRoute = document.getElementById("hero-route");
  if (heroRoute) {
    const routes = [...new Set(TOURS.map((t) => t.route))];
    routes.forEach((route) => {
      const opt = document.createElement("option");
      opt.value = route;
      opt.textContent = route;
      heroRoute.appendChild(opt);
    });
  }
}

/* ---------- Lee parámetros de la URL al llegar a tours.html desde el hero ---------- */
function applyUrlParamsToFilters() {
  const params = new URLSearchParams(window.location.search);
  const durationSelect = document.getElementById("filter-duration");
  const routeSelect = document.getElementById("filter-route");
  const priceRange = document.getElementById("filter-price");
  const priceValue = document.getElementById("filter-price-value");

  if (params.has("duration") && durationSelect) durationSelect.value = params.get("duration");
  if (params.has("price") && priceRange) {
    priceRange.value = params.get("price");
    if (priceValue) priceValue.textContent = `${priceRange.value}€`;
  }
  // La ruta se aplica después de poblar el select (ver initTourListing)
  if (params.has("route") && routeSelect) {
    setTimeout(() => { routeSelect.value = params.get("route"); routeSelect.dispatchEvent(new Event("change")); }, 0);
  }
}

/* ---------- Formulario de contacto (demo sin backend) ---------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = document.getElementById("form-status");
    if (status) {
      status.textContent = "¡Gracias! Tu mensaje quedó registrado en esta demo. Conecta el formulario a tu email o WhatsApp para recibir mensajes reales.";
      status.style.display = "block";
    }
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initHeroSearch();
  initFeaturedTours();
  initTourListing();
  applyUrlParamsToFilters();
  initContactForm();
});
