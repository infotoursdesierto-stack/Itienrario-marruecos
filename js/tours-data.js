/* ============================================================
   Marruecos Auténtico — Base de datos de tours
   Edita este archivo para añadir, quitar o modificar tours.
   Cada tour se renderiza automáticamente en index.html y tours.html
   ============================================================ */

const TOURS = [
  {
    id: "sahara-marrakech-3d",
    title: "Aventura en el Sahara: de Marrakech a las Dunas de Merzouga",
    category: "desierto",
    categoryLabel: "Desierto",
    media: "media-desert",
    icon: "dune",
    days: 3,
    nights: 2,
    price: 180,
    rating: 4.9,
    reviews: 132,
    summary:
      "El clásico imprescindible: cruza el Alto Atlas, recorre kasbahs de adobe declaradas Patrimonio de la Humanidad y termina la ruta durmiendo bajo un cielo repleto de estrellas en el corazón del Sahara.",
    highlights: [
      "Kasbah Ait Ben Haddou (UNESCO)",
      "Gargantas del Todra",
      "Paseo en camello al atardecer",
      "Noche en jaimas bereberes",
      "Música en vivo junto al fuego",
    ],
    includes:
      "Incluye: transporte en 4x4 climatizado, guía de habla hispana, 2 noches de alojamiento (1 riad + 1 jaima de lujo), desayunos y cenas, paseo en camello. No incluye almuerzos ni entradas opcionales.",
    itinerary: [
      {
        title: "Marrakech → Ait Ben Haddou → Valle del Dades",
        text: "Salida temprano cruzando el Alto Atlas por el puerto de Tichka (2.260 m). Parada fotográfica con vistas a los picos nevados, visita a la kasbah de Ait Ben Haddou y noche en el espectacular Valle del Dades, entre formaciones rocosas rojizas.",
      },
      {
        title: "Dades → Gargantas del Todra → Erg Chebbi",
        text: "Ruta por las Gargantas del Todra, un cañón de paredes verticales de más de 160 m. Continuamos hacia Merzouga, donde nos espera un paseo en camello hasta el campamento bereber para ver la puesta de sol sobre las dunas de Erg Chebbi.",
      },
      {
        title: "Amanecer en el Sahara → regreso a Marrakech",
        text: "Amanecer opcional en las dunas antes del desayuno. Regreso a Marrakech atravesando el Valle del Draa y sus interminables palmerales, con paradas fotográficas en el camino.",
      },
    ],
  },
  {
    id: "sahara-fez-marrakech-3d",
    title: "Ruta Imperial al Sahara: de Fez a Marrakech por el Desierto",
    category: "desierto",
    categoryLabel: "Desierto",
    media: "media-multi",
    icon: "compass",
    days: 3,
    nights: 2,
    price: 195,
    rating: 4.8,
    reviews: 97,
    summary:
      "La forma perfecta de conectar dos ciudades imperiales sin repetir camino: bosques de cedros, monos de Berbería, kasbahs de película y una noche inolvidable en el Sahara.",
    highlights: [
      "Ifrane, la 'Suiza de Marruecos'",
      "Bosque de cedros y monos de Berbería",
      "Valle del Ziz",
      "Noche en campamento de lujo",
      "Kasbahs del sur marroquí",
    ],
    includes:
      "Incluye: transporte privado, guía de habla hispana, 1 noche de campamento con cena y desayuno bereber, 1 noche de hotel en Dades. No incluye almuerzos.",
    itinerary: [
      {
        title: "Fez → Ifrane → Azrou → Valle del Ziz → Merzouga",
        text: "Salida hacia Ifrane, con su arquitectura alpina, y el bosque de cedros de Azrou, hogar de los monos de Berbería en libertad. Descenso por el espectacular Valle del Ziz hasta Merzouga, con paseo en camello al atardecer y noche en el desierto.",
      },
      {
        title: "Erg Chebbi → Gargantas del Todra → Valle del Dades",
        text: "Amanecer sobre las dunas y regreso al campamento en camello. Ruta hacia las Gargantas del Todra y noche en el pintoresco Valle del Dades, conocido como el 'Valle de las Mil Kasbahs'.",
      },
      {
        title: "Dades → Ouarzazate → Ait Ben Haddou → Marrakech",
        text: "Visita a los estudios de cine de Ouarzazate ('el Hollywood de África') y a la kasbah de Ait Ben Haddou antes de cruzar el Alto Atlas rumbo a Marrakech.",
      },
    ],
  },
  {
    id: "zagora-2d",
    title: "Escapada Bereber: Noche en el Desierto de Zagora",
    category: "desierto",
    categoryLabel: "Desierto",
    media: "media-desert",
    icon: "dune",
    days: 2,
    nights: 1,
    price: 95,
    rating: 4.7,
    reviews: 210,
    summary:
      "¿Poco tiempo pero muchas ganas de Sahara? Esta escapada exprés desde Marrakech te lleva a dormir en el desierto sin necesidad de una ruta larga.",
    highlights: [
      "Valle del Draa y sus palmerales",
      "Paso del Tizi n'Tichka",
      "Cena bereber junto al fuego",
      "Noche en jaima tradicional",
      "Ideal para fines de semana",
    ],
    includes:
      "Incluye: transporte climatizado, guía de habla hispana, 1 noche en jaima, cena y desayuno bereber, paseo en camello o dromedario. No incluye almuerzo del día 1.",
    itinerary: [
      {
        title: "Marrakech → Ouarzazate → Zagora → desierto",
        text: "Cruce del Alto Atlas y llegada a Zagora tras recorrer el fértil Valle del Draa, salpicado de kasbahs y palmerales centenarios. Al atardecer, paseo en dromedario hasta el campamento para pasar la noche bajo las estrellas.",
      },
      {
        title: "Regreso a Marrakech",
        text: "Desayuno en el campamento y regreso a Marrakech con paradas panorámicas en el camino, llegando por la tarde.",
      },
    ],
  },
  {
    id: "ciudades-imperiales-7d",
    title: "Gran Tour de las Ciudades Imperiales de Marruecos",
    category: "imperial",
    categoryLabel: "Ciudades Imperiales",
    media: "media-imperial",
    icon: "arch",
    days: 7,
    nights: 6,
    price: 650,
    rating: 4.9,
    reviews: 64,
    summary:
      "Un recorrido completo por las cuatro capitales históricas del reino: Casablanca, Rabat, Meknes y Fez, con la joya arqueológica romana de Volubilis y la vibrante Marrakech como cierre.",
    highlights: [
      "Mezquita Hassan II en Casablanca",
      "Ruinas romanas de Volubilis",
      "Medersa Bou Inania en Fez",
      "Medina de Fez (UNESCO)",
      "Zocos y jardines de Marrakech",
    ],
    includes:
      "Incluye: transporte privado todo el recorrido, guía de habla hispana, 6 noches de hotel 4* con desayuno, entradas a monumentos indicados. No incluye comidas ni vuelos internos.",
    itinerary: [
      { title: "Llegada a Casablanca", text: "Recepción y visita a la impresionante Mezquita Hassan II, una de las más grandes del mundo, junto al océano Atlántico." },
      { title: "Casablanca → Rabat", text: "Descubre la capital administrativa: la Torre Hasán, el Mausoleo de Mohammed V y la kasbah de los Oudayas con vistas al río Bou Regreg." },
      { title: "Rabat → Meknes → Volubilis", text: "Visita a Meknes, ciudad imperial de Moulay Ismail, y a las ruinas romanas de Volubilis, Patrimonio de la Humanidad." },
      { title: "Meknes → Fez", text: "Llegada a Fez, la ciudad universitaria más antigua del mundo árabe." },
      { title: "Fez: día completo", text: "Recorrido por la medina de Fez el-Bali (UNESCO), las curtidurías de Chouara, la Medersa Bou Inania y la Universidad Al-Qarawiyyin." },
      { title: "Fez → Ifrane → Marrakech", text: "Ruta panorámica atravesando cedros y montañas del Atlas Medio hasta Marrakech." },
      { title: "Marrakech: día completo y despedida", text: "Visita a la Koutoubia, los Jardines Majorelle y la plaza Jemaa el-Fna antes del traslado de salida." },
    ],
  },
  {
    id: "chefchaouen-2d",
    title: "Escapada a Chefchaouen, la Ciudad Azul",
    category: "montana",
    categoryLabel: "Montaña",
    media: "media-mountain",
    icon: "mountain",
    days: 2,
    nights: 1,
    price: 120,
    rating: 4.9,
    reviews: 88,
    summary:
      "Piérdete entre callejones pintados en mil tonos de azul, al pie de las montañas del Rif. Uno de los rincones más fotogénicos de todo Marruecos.",
    highlights: [
      "Callejuelas azules de la medina",
      "Plaza Uta el-Hammam",
      "Mirador de la mezquita española",
      "Artesanía local y textiles",
      "Ambiente tranquilo de montaña",
    ],
    includes:
      "Incluye: transporte privado desde Fez o Tánger, guía local de habla hispana, 1 noche de hotel con desayuno. No incluye comidas.",
    itinerary: [
      { title: "Traslado a Chefchaouen", text: "Salida hacia el Rif y llegada a Chefchaouen. Tarde libre para pasear por la medina azul y sus tiendas de artesanía." },
      { title: "Chefchaouen → regreso", text: "Paseo matutino al mirador de la mezquita española para las mejores vistas de la ciudad, antes de emprender el regreso." },
    ],
  },
  {
    id: "ourika-1d",
    title: "Un Día en el Valle del Ourika y las Montañas del Atlas",
    category: "montana",
    categoryLabel: "Montaña",
    media: "media-mountain",
    icon: "mountain",
    days: 1,
    nights: 0,
    price: 45,
    rating: 4.6,
    reviews: 156,
    summary:
      "Escapa del bullicio de Marrakech por unas horas: aldeas bereberes, cascadas y aire fresco de montaña, todo a menos de una hora de la ciudad roja.",
    highlights: [
      "Aldeas bereberes tradicionales",
      "Cascadas de Setti Fatma",
      "Mercado local de Ourika",
      "Vistas al Alto Atlas",
      "Ruta corta, ideal en cualquier itinerario",
    ],
    includes: "Incluye: transporte climatizado, guía de habla hispana, entrada a las cascadas. No incluye almuerzo (opcional en restaurante local con terraza sobre el río).",
    itinerary: [
      { title: "Marrakech → Valle del Ourika → Setti Fatma", text: "Ruta panorámica junto al río Ourika, parada en un mercado bereber local y caminata opcional (1h ida y vuelta) hasta las siete cascadas de Setti Fatma. Regreso a Marrakech al atardecer." },
    ],
  },
  {
    id: "essaouira-1d",
    title: "Brisa Atlántica: Excursión a Essaouira",
    category: "costa",
    categoryLabel: "Costa",
    media: "media-coastal",
    icon: "wave",
    days: 1,
    nights: 0,
    price: 40,
    rating: 4.7,
    reviews: 174,
    summary:
      "La ciudad del viento: murallas frente al Atlántico, puerto pesquero de barcas azules y una medina relajada, perfecta para desconectar de la energía de Marrakech.",
    highlights: [
      "Murallas y puerto pesquero",
      "Medina declarada Patrimonio UNESCO",
      "Ambiente bohemio y artesanal",
      "Marisco fresco frente al mar",
      "Ideal para amantes del surf y el kitesurf",
    ],
    includes: "Incluye: transporte climatizado ida y vuelta, guía de habla hispana. No incluye comidas.",
    itinerary: [
      { title: "Marrakech → Essaouira → regreso", text: "Salida por la mañana hacia la costa atlántica. Tiempo libre para pasear por la medina, las murallas de la Skala y el puerto, con opción de almuerzo de marisco frente al mar antes de regresar a Marrakech." },
    ],
  },
  {
    id: "gran-tour-10d",
    title: "Marruecos al Completo: Gran Tour de 10 Días",
    category: "multi",
    categoryLabel: "Gran Tour",
    media: "media-multi",
    icon: "compass",
    days: 10,
    nights: 9,
    price: 990,
    rating: 5.0,
    reviews: 41,
    summary:
      "Nuestro itinerario insignia: costa atlántica, ciudades imperiales, montañas del Atlas y noche en el Sahara. La forma más completa de conocer Marruecos en un solo viaje.",
    highlights: [
      "Casablanca, Rabat y Chefchaouen",
      "Fez y sus curtidurías milenarias",
      "Noche de campamento en el Sahara",
      "Kasbahs de Dades y Todra",
      "Marrakech y Essaouira",
    ],
    includes:
      "Incluye: transporte privado 10 días, guía de habla hispana, 9 noches de alojamiento (hoteles 4* + 1 noche de jaima de lujo), desayunos diarios y 2 cenas. No incluye almuerzos ni vuelos.",
    itinerary: [
      { title: "Llegada a Casablanca", text: "Recepción y visita a la Mezquita Hassan II." },
      { title: "Casablanca → Rabat → Chefchaouen", text: "Parada en la capital Rabat antes de subir al Rif para dos noches en la Ciudad Azul." },
      { title: "Chefchaouen: día libre", text: "Día completo para explorar la medina azul con calma." },
      { title: "Chefchaouen → Fez", text: "Ruta hacia Fez atravesando paisajes del norte." },
      { title: "Fez: día completo", text: "Medina, curtidurías de Chouara y Universidad Al-Qarawiyyin." },
      { title: "Fez → Ifrane → Merzouga", text: "Cruce del Atlas Medio y el Valle del Ziz hasta las puertas del Sahara. Paseo en camello y noche en jaima de lujo." },
      { title: "Erg Chebbi → Dades", text: "Amanecer en las dunas y ruta hacia el Valle del Dades vía las Gargantas del Todra." },
      { title: "Dades → Ouarzazate → Marrakech", text: "Visita a Ait Ben Haddou y los estudios de cine antes de cruzar el Alto Atlas." },
      { title: "Excursión a Essaouira", text: "Día en la costa atlántica, regreso a Marrakech por la tarde." },
      { title: "Marrakech y despedida", text: "Zocos, Jardines Majorelle y Jemaa el-Fna antes del traslado de salida." },
    ],
  },
  {
    id: "toubkal-2d",
    title: "Ascenso al Jbel Toubkal: Trekking en el Atlas",
    category: "montana",
    categoryLabel: "Aventura",
    media: "media-mountain",
    icon: "mountain",
    days: 2,
    nights: 1,
    price: 150,
    rating: 4.8,
    reviews: 53,
    summary:
      "El techo del Norte de África (4.167 m) al alcance de cualquier persona con buena condición física. Trekking guiado con noche en refugio de montaña.",
    highlights: [
      "Cumbre más alta del Norte de África",
      "Pueblo bereber de Imlil",
      "Noche en refugio a 3.200 m",
      "Guía de montaña certificado",
      "Paisajes del Alto Atlas",
    ],
    includes:
      "Incluye: transporte desde Marrakech, guía de montaña certificado, mula de carga, 1 noche de refugio con media pensión. No incluye equipo personal de trekking.",
    itinerary: [
      { title: "Marrakech → Imlil → Refugio", text: "Traslado al pueblo de Imlil, punto de partida del trekking. Caminata de aproximadamente 5-6 horas hasta el refugio base a 3.200 m, con cena y pernocte." },
      { title: "Ascenso a la cumbre → descenso", text: "Salida antes del amanecer para alcanzar la cumbre del Toubkal (4.167 m) y disfrutar de vistas al Sahara y al Atlántico en días claros. Descenso hasta Imlil y regreso a Marrakech." },
    ],
  },
];
