/*
 * Base de datos de tours — PLACEHOLDER
 * ------------------------------------
 * Sustituye estos objetos por tus tours reales (nombres, precios, fotos,
 * itinerarios). Cada tour se usa para pintar las tarjetas en index.html
 * y tours.html, y "url" debe apuntar a la página de detalle correspondiente
 * dentro de /tours/.
 *
 * Las imágenes usan picsum.photos como marcador de posición visual —
 * cámbialas por fotos reales de tus tours antes de publicar el sitio.
 */

const TOURS = [
  {
    slug: "3-dias-marrakech-merzouga",
    title: "3 Días: Marrakech a Merzouga",
    route: "Marrakech → Merzouga",
    days: 3,
    price: 130,
    currency: "€",
    rating: 4.9,
    reviews: 128,
    badge: "Más popular",
    excerpt: "Cruza el Alto Atlas, las gargantas del Dadès y duerme en un campamento bereber bajo las estrellas del Sahara.",
    image: "https://picsum.photos/seed/marrakech-merzouga-3d/640/480",
    url: "tours/3-dias-marrakech-merzouga.html",
  },
  {
    slug: "4-dias-fes-marrakech",
    title: "4 Días: Fez a Marrakech por el Desierto",
    route: "Fez → Marrakech",
    days: 4,
    price: 175,
    currency: "€",
    rating: 4.8,
    reviews: 96,
    badge: "Ruta clásica",
    excerpt: "Atraviesa Ifrane, el Valle del Ziz y las dunas de Merzouga antes de llegar a la ciudad roja.",
    image: "https://picsum.photos/seed/fes-marrakech-4d/640/480",
    url: "tours/4-dias-fes-marrakech.html",
  },
  {
    slug: "7-dias-gran-tour-marruecos",
    title: "7 Días: Gran Tour de Marruecos",
    route: "Casablanca → Marrakech",
    days: 7,
    price: 420,
    currency: "€",
    rating: 5.0,
    reviews: 54,
    badge: "Completo",
    excerpt: "Chefchaouen, Fez, el desierto del Sahara, Ouarzazate y Marrakech en un solo itinerario inolvidable.",
    image: "https://picsum.photos/seed/gran-tour-7d/640/480",
    url: "tours/7-dias-gran-tour-marruecos.html",
  },
  {
    slug: "2-dias-desierto-marrakech",
    title: "2 Días: Desierto Express desde Marrakech",
    route: "Marrakech → Marrakech",
    days: 2,
    price: 90,
    currency: "€",
    rating: 4.7,
    reviews: 210,
    badge: "Escapada corta",
    excerpt: "Ideal si tienes poco tiempo: una noche de campamento en Zagora con cena bereber y música en vivo.",
    image: "https://picsum.photos/seed/desierto-express-2d/640/480",
    url: "tours/2-dias-desierto-marrakech.html",
  },
  {
    slug: "5-dias-marrakech-fes",
    title: "5 Días: Marrakech a Fez",
    route: "Marrakech → Fez",
    days: 5,
    price: 260,
    currency: "€",
    rating: 4.9,
    reviews: 71,
    badge: "Recomendado",
    excerpt: "Kasbahs del Valle del Draa, dunas de Erg Chebbi y las gargantas de Todra camino a la ciudad imperial.",
    image: "https://picsum.photos/seed/marrakech-fes-5d/640/480",
    url: "tours/5-dias-marrakech-fes.html",
  },
  {
    slug: "1-dia-atlas-esaouira",
    title: "Excursión de 1 Día: Atlas y Esaouira",
    route: "Marrakech (ida y vuelta)",
    days: 1,
    price: 45,
    currency: "€",
    rating: 4.6,
    reviews: 143,
    badge: "Día completo",
    excerpt: "Perfecto como complemento a tu desierto: costa atlántica, puerto de pescadores y la medina de Esaouira.",
    image: "https://picsum.photos/seed/atlas-esaouira-1d/640/480",
    url: "tours/1-dia-atlas-esaouira.html",
  },
];

/* Utilidad compartida: formatea el precio con la moneda del tour */
function formatPrice(tour) {
  return `${tour.currency}${tour.price}`;
}
