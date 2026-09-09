# Itinerario Marruecos — sitio web

Sitio estático (HTML + CSS + JS, sin frameworks ni build step) para una agencia
de tours por Marruecos, inspirado en la estructura de sitios de tours como
[moroccofabuloustravel.com](https://moroccofabuloustravel.com/) pero con
diseño y contenido propios.

## Cómo verlo localmente

No requiere instalación. Abre `index.html` en el navegador, o sirve la carpeta
con cualquier servidor estático, por ejemplo:

```bash
python3 -m http.server 8000
# luego visita http://localhost:8000
```

## Estructura

```
index.html          Página de inicio (hero + buscador, tours destacados, etc.)
tours.html           Listado de todos los tours con filtros (duración, ruta, precio)
about.html           Sobre nosotros
contact.html         Contacto (formulario + mapa)
tours/               Páginas de detalle, una por tour
css/style.css        Estilos globales del sitio
js/tours-data.js     Datos de los tours (fuente única para tarjetas y filtros)
js/main.js           Lógica compartida: menú móvil, render de tarjetas, filtros, formularios
```

## ⚠️ Contenido de ejemplo — reemplázalo antes de publicar

Todo lo siguiente es **placeholder** y debe sustituirse por información real:

- **Tours y precios**: edita `js/tours-data.js`. Cada objeto del array `TOURS`
  alimenta automáticamente las tarjetas de `index.html` y `tours.html`.
- **Páginas de detalle**: los 6 tours de ejemplo están en `tours/*.html`. Ajusta
  el itinerario día a día, precios, fotos y textos de "qué incluye".
- **Fotos**: se usan imágenes de `picsum.photos` como marcador visual. Sustitúyelas
  por fotos reales de tus tours (súbelas a una carpeta `img/` y actualiza los `src`).
- **Datos de contacto**: teléfono, email, dirección y el enlace de WhatsApp
  (`https://wa.me/212600000000`) aparecen repetidos en el header, footer y
  botón flotante de todas las páginas — búscalos y actualízalos.
- **Formularios**: el formulario de contacto y el de reserva son solo demo
  (no envían datos a ningún sitio). Conéctalos a un servicio como Formspree,
  tu email, WhatsApp Business API o tu propio backend.
- **Mapa**: el iframe de Google Maps en `contact.html` usa una búsqueda genérica
  de "Marrakech, Morocco" — reemplázalo por la ubicación exacta de tu oficina.
- **Redes sociales**: los iconos del footer son enlaces `#` de ejemplo.

## Personalización de diseño

Los colores, tipografías y espaciados están centralizados como variables CSS
al principio de `css/style.css` (`:root { --terracotta: ...; --teal: ...; }`),
así que puedes cambiar la paleta completa del sitio editando unas pocas líneas.
