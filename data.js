// Datos de ejemplo. Todo lo marcado con [EJEMPLO] se reemplaza con el contenido real.
// Mientras no haya fotos, se usan sus dibujos como relleno.

const D = (n) => `assets/dibujos/d${String(n).padStart(2, "0")}.jpg`;
const M = (n) => `assets/miyazaki/m${String(n).padStart(2, "0")}.jpg`; // fondos Ghibli

window.DATA = {
  // true = ignora los candados por fecha (para ver el prototipo antes del 20)
  preview: true,
  unlock: {
    anniversary: "2026-10-20T00:00:00-03:00", // medianoche en Curitiba
    birthday: "2026-10-21T00:00:00-03:00",
  },
  startDate: "2025-11-20", // empezaron el 20 nov 2025 → el 20 oct 2026 cumplen 11 meses

  names: { her: "pichulina", me: "pichulino", extra: ["chiquita", "amorzinho"] },

  // sus dibujos: primero los stickers de la carpeta de iCloud, luego los de la raíz
  drawings: [
    ...["cafe", "retrato-peces", "hasta-la-raiz", "pichulinos", "peces", "dinos", "tortugas"].map((n) => `assets/stickers/${n}.webp`),
    ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(D),
  ],

  // portada y cierre del álbum de The Little Things. us = recorte de ustedes que va sobre el fondo
  // (abajo a la izquierda). En cada hábito también se puede poner us: "assets/nosotros/....webp".
  album: {
    title: { bg: M(47), us: "assets/nosotros/juntos.webp" },
    end: { bg: M(49), art: "assets/stickers/hasta-la-raiz.webp" }, // su dibujo va pegado en medio del cierre
  },

  // The Little Things = la película: una escena por hábito.
  // [EJEMPLO] Reemplazar con la lista real de hábitos. bg = fondo Ghibli; img = foto; cut = recorte (opcional);
  // flip: true = ustedes van arriba (en compu cambian de lugar con las polaroids).
  habits: [
    // hábitos reales (frases en borrador, el usuario puede cambiarlas)
    { t: "The smile to the air", d: "That look, like we're taking a photo together.", img: "assets/fotos/habito-1.webp", more: ["assets/fotos/smile-2.webp"], bg: M(23), us: "assets/nosotros/u7.webp" },
    { t: "The outfit check", d: "Every outfit gets my review. Always 10/10.", img: "assets/fotos/outfit-4.webp", more: ["assets/fotos/habito-2.webp", "assets/fotos/outfit-2.webp", "assets/fotos/outfit-3.webp"], bg: M(29), us: "assets/nosotros/u3.webp" },
    { t: "Cloudy hair mornings", d: "Today's forecast: cloudy hair, 100% cute.", img: "assets/fotos/habito-3.webp", more: ["assets/fotos/cloudy-2.webp"], bg: M(31), us: "assets/nosotros/u9.webp", flip: true },
    { t: "Mandando beijinhos", d: "Same pose, every time. Um beijo pra você, siempre.", img: "assets/fotos/habito-4.webp", more: ["assets/fotos/kiss-2.webp", "assets/fotos/kiss-3.webp", "assets/fotos/kiss-4.webp"], bg: M(7), us: "assets/nosotros/u5.webp" },
    { t: "Toothpaste kisses", d: "Minty, messy, and still the best kisses.", img: "assets/fotos/pasta.webp", bg: M(30), us: "assets/nosotros/u10.webp" },
    { t: "Flowers for you", d: "Every flower I find on the way is a little bit yours.", img: "assets/fotos/flores-1.webp", more: ["assets/fotos/flores-3.webp", "assets/fotos/flores-2.webp"], bg: M(17), us: "assets/nosotros/u11.webp" },
    { t: "Always with me", d: "My iPad goes everywhere with me, because you're always on it.", img: "assets/fotos/ipad-1.webp", more: ["assets/fotos/ipad-4.webp", "assets/fotos/ipad-3.webp", "assets/fotos/ipad-2.webp"], bg: M(62), us: "assets/nosotros/u12.webp" },
    { t: "A bite for you", d: "Whatever I'm eating, the first bite is yours.", img: "assets/fotos/comida-1.webp", more: ["assets/fotos/comida-2.webp"], bg: M(6), us: "assets/nosotros/u1.webp" },
    { t: "Little bubbles of your day", d: "Tiny videos of your day, so I never miss a thing.", img: "assets/fotos/burbuja-1.webp", more: ["assets/fotos/burbuja-5.webp", "assets/fotos/burbuja-4.webp", "assets/fotos/burbuja-3.webp", "assets/fotos/burbuja-2.webp"], bg: M(27), us: "assets/nosotros/u4.webp" },
    { t: "Notes while I sleep", d: "I fall asleep, and I wake up to your little notes.", img: "assets/fotos/nota-1.webp", more: ["assets/fotos/nota-10.webp", "assets/fotos/nota-9.webp", "assets/fotos/nota-8.webp", "assets/fotos/nota-6.webp", "assets/fotos/nota-5.webp", "assets/fotos/nota-4.webp", "assets/fotos/nota-3.webp", "assets/fotos/nota-2.webp"], bg: M(48), us: "assets/nosotros/beso-calle.webp" },
    { t: "Our little Dagobertinho", d: "Watching Dagobertinho swim around, our little guy.", img: "assets/fotos/peces-1.webp", more: ["assets/fotos/peces-3.webp", "assets/fotos/peces-2.webp"], bg: M(45), us: "assets/nosotros/abrazo-espejo.webp" },
    { t: "Scratching the calendar", d: "One day less to see you, one day more with you.", img: "assets/fotos/calendario-1.webp", more: ["assets/fotos/calendario-2.webp"], bg: M(18), us: "assets/nosotros/u14.webp" },
  ],

  quiz: [
    // note = aparece debajo de "Correcto" al acertar; img = foto opcional; wrong = texto extra por opción incorrecta
    { q: "What was our very first habit?", options: ["Boop", "Me waking you up for school", "Kiss to the air", "Cigarette after…"], answer: 1, note: "(This is an assumption. A very scientific one.)" },
    { q: "What was the first movie we watched together?", options: ["The Conjuring 2", "Insidious", "Sinister", "The Black Phone"], answer: 1, note: "(I think. Romantic, no? I mean, we cracked.)" },
    { q: "Who fell asleep first on a call?", options: ["You", "Me", "Both at the same time", "Dagobertinho"], answer: 1, note: "(Jejej. Desculpa, amorzinho.)" },
    { q: "Who is more dramatic?", options: ["Me", "You", "Jorch", "Nahal"], answer: 3, wrong: { 0: "(I can't believe it.)", 1: "(Almost jaja.)", 2: "(His drama is being gei.)" } },
    { q: "What was the first gift?", options: ["Flowers", "A drawing", "A chocolate", "A plushie"], answer: 2, note: "(Sweet, for you.)" },
  ],

  memory: [
    // q = pregunta (si no hay, "Where was this?")
    { img: "assets/fotos/memory-1.webp", options: ["Wuhan lake", "The park in front of WS Mall", "The Summer Palace", "Wuhan Zoo"], answer: 3, reveal: "Can I pet that dog?" },
    { img: "assets/fotos/memory-2.webp", q: "How many Confucius statues were in this temple?", options: ["7", "9", "11", "72"], answer: 2, reveal: "Not even all eleven together are better than you." },
    { img: "assets/fotos/memory-3.webp", q: "What were we watching here?", options: ["1917", "Mamma Mia!", "Inception", "Crazy, Stupid, Love", "The Lord of the Rings"], answer: 3, reveal: "Crazy, Stupid, Love, I think. Or maybe I was too busy watching you." },
  ],

  // Who said it? frases reales del chat (contenido/whatsapp). who: "her" | "me"; note opcional al contestar
  saidIt: [
    { text: "i'm a gentleman indeed", who: "her", note: "11 Nov 2025. Not even official yet, already a gentleman." },
    { text: "WHAT IS THIS, MY BRAINROT DOESNT GO THAT FAR", who: "me", note: "3 Jan 2026. You found my limit." },
    { text: "I FEEL LIKE FAST AND FURIOYS", who: "her", note: "22 Mar 2026. Vin Diesel could never." },
    { text: "the fast i slept the fast i see u", who: "me", note: "8 Mar 2026. Sleep = speedrun to you." },
    { text: "the war of the dishes", who: "her", note: "18 Oct 2026. The war continues." },
    { text: "I WANT MY BUBBLES MACHINE", who: "me", note: "1 Jun 2026. I still want it." },
    { text: "we are like that alien in ben 10", who: "me", note: "5 Sep 2026. Best comparison ever made." },
    { text: "I THINK IM A CHEF", who: "her", note: "15 Feb 2026. One good coffee and a new career." },
    { text: "an uncomprended genius", who: "me", note: "15 Oct 2026. Still uncomprended." },
    { text: "tell them i'm a living wallpaper", who: "her", note: "24 Sep 2026. The most beautiful wallpaper." },
  ],


  numbers: {
    cards: [
      { label: "Cities together", value: 6 },
      { label: "Korean plates eaten", value: 120 },
      { label: "Chicken burgers", value: 100 },
      { label: "Shared songs", value: 295 },
      { label: "Trips", value: 4 },
    ],
    funny: [
      ["99.9%", "Probability of making me smile."],
      ["1,000,000+", "Times I've thought about you."],
      ["100%", "Chance of choosing you again."],
      ["∞", "Things I still want to experience with you."],
    ],
    // The future forecast: un pronóstico del clima para nosotros. [BORRADOR] textos por aprobar
    forecast: [
      { when: "Tomorrow", sky: "☀︎", text: "Sunny, with a 100% chance of 'bom dia'.", chance: "100%" },
      { when: "This weekend", sky: "☁︎", text: "Cloudy hair in the morning, kisses all day.", chance: "98%" },
      { when: "Next month", sky: "✈︎", text: "Long distance? Light winds. Nothing we can't handle.", chance: "95%" },
      { when: "Next year", sky: "☂︎", text: "A few storms, maybe. Always under the same umbrella.", chance: "100%" },
      { when: "Someday", sky: "⌂", text: "Our own little house. And Dagobertinho, of course.", chance: "∞" },
    ],
  },

  openWhen: {
    city: "[ciudad nueva]",
    categories: [
      {
        name: "When You Need Me", color: "#7aa7ff",
        letters: [
          { t: "you miss me", body: "[EJEMPLO] Audio + fotos. Cierra los ojos y dale play." },
          { t: "you need a hug", body: "[EJEMPLO] Aquí va el abrazo animado.", img: D(3) },
          { t: "you can't sleep", body: "[EJEMPLO] Audio de buenas noches." },
          { t: "you feel lonely", body: "[EJEMPLO] Carta." },
          { t: "you need to hear my voice", body: "[EJEMPLO] Colección de notas de voz." },
        ],
      },
      {
        name: "When Life Gets Hard", color: "#c58cff",
        letters: [
          { t: "you're nervous", body: "[EJEMPLO] Carta." },
          { t: "you doubt yourself", body: "[EJEMPLO] 3–5 recuerdos reales de cuando fuiste valiente." },
          { t: "work gets overwhelming", body: "[EJEMPLO] Carta." },
          { t: "you feel like crying", body: "[EJEMPLO] Sin consejos. Solo aquí contigo." },
          { t: "you're afraid of change", body: "[EJEMPLO] Carta." },
        ],
      },
      {
        name: "When Life Is Beautiful", color: "#ffb84d",
        letters: [
          { t: "something amazing happens", body: "[EJEMPLO] Carta." },
          { t: "you have a great day", body: "[EJEMPLO] Carta." },
          { t: "you accomplish something", body: "[EJEMPLO] Confeti + medalla.", confetti: true },
          { t: "you fall in love with your new city", body: "[EJEMPLO] Carta." },
          { t: "you feel proud of yourself", body: "[EJEMPLO] Carta." },
        ],
      },
      {
        name: "Just Because", color: "#5fd39a",
        letters: [
          { t: "you're bored", body: "[EJEMPLO] Minijuego (pendiente)." },
          { t: "you need to laugh", body: "[EJEMPLO] Memes y bromas internas." },
          { t: "you want a surprise", body: "[EJEMPLO] Sorpresa." },
          { t: "you want to remember us", body: "[EJEMPLO] Selección de recuerdos.", img: D(1) },
          { t: "you feel creative", body: "Draw something. (Our Little Canvas: pendiente de confirmar)", canvas: true },
        ],
      },
    ],
    hugs: [
      "[EJEMPLO] Squeeze. Okay, one more.",
      "[EJEMPLO] I'm holding you from here.",
      "[EJEMPLO] This hug is valid for 24 hours.",
      "[EJEMPLO] Breathe in. I'm right here.",
    ],
  },
};
