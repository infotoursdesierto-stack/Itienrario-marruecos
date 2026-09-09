# Marruecos Auténtico

Sitio web estático (HTML/CSS/JS puro, sin build ni dependencias) para una agencia
de tours privados por Marruecos, dirigido a viajeros de habla hispana.

## Estructura

```
index.html            Página de inicio (hero + búsqueda + tours destacados)
tours.html             Catálogo completo: 9 tours con filtros e itinerario día a día
sobre-nosotros.html   Historia, equipo y valores
contacto.html          Formulario de contacto + botones de WhatsApp/Email
css/style.css          Todos los estilos (paleta terracota/turquesa, responsive)
js/tours-data.js       ⭐ Contenido de los 9 tours (edítalo para añadir/quitar tours)
js/main.js             Lógica: render de tours, filtros, acordeón, formularios, nav móvil
```

## ⚠️ Antes de publicar — datos que DEBES cambiar

Abre `js/main.js` y edita el objeto `CONTACT` al principio del archivo:

```js
const CONTACT = {
  email: "miglioritourmarocco@gmail.com",   // confirma que es el correo correcto
  whatsapp: "212600000000",                  // ⚠️ PLACEHOLDER — pon tu número real
  whatsappDisplay: "+212 600-000000",        // formato bonito para mostrar en pantalla
};
```

El número de WhatsApp debe ir **solo con dígitos** (código de país + número, sin
"+", espacios ni guiones) para que el enlace `wa.me` funcione correctamente.
Todos los botones de "Reservar por WhatsApp" y "Email" de las 4 páginas usan
este único objeto, así que solo hay que cambiarlo una vez.

## Cómo editar los tours

Todo el contenido de los tours (títulos, precios, itinerarios día a día, qué
incluye/no incluye) vive en `js/tours-data.js`, como un array de objetos. Para
añadir un tour nuevo, copia un objeto existente y cambia los valores — se
renderiza automáticamente en `index.html` (los 6 primeros) y en `tours.html`
(todos), sin tocar el HTML.

## Cómo ver el sitio localmente

No requiere instalación. Basta un servidor estático simple:

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

## Notas de contenido

Los itinerarios están inspirados en las rutas estándar del sector turístico
marroquí (circuitos de Marrakech–Merzouga, ciudades imperiales, Chefchaouen,
Atlas, etc., comunes a la mayoría de operadores del país) y escritos de forma
100% original en español. No se copió texto de ningún sitio web de terceros.

Las imágenes de las tarjetas de tours son ilustraciones SVG/CSS propias
(gradientes + patrón de estrella de ocho puntas inspirado en el zellige
marroquí), no fotografías externas — así el sitio no depende de ningún CDN de
imágenes de terceros y no hay riesgo de enlaces rotos. Puedes sustituirlas por
fotos reales editando la clase `.card-media` en `css/style.css` y las llamadas
a `ICONS[...]` en `js/main.js`.
