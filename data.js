// Datos de ejemplo. Todo lo marcado con [EJEMPLO] se reemplaza con el contenido real.
// Mientras no haya fotos, se usan sus dibujos como relleno.

const D = (n) => `assets/dibujos/d${String(n).padStart(2, "0")}.jpg`;
const M = (n) => `assets/miyazaki/m${String(n).padStart(2, "0")}.jpg`; // fondos Ghibli

window.DATA = {
  // true = ignora los candados por fecha (para ver el prototipo antes del 20)
  preview: false,
  unlock: {
    anniversary: "2026-10-20T00:00:00-03:00", // medianoche en Curitiba
    birthday: "2026-10-21T00:00:00-03:00", // medianoche en Curitiba
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
      { label: "Kitten saved", value: 1, img: "assets/fotos/kitten.webp", full: "assets/fotos/kitten-full.webp" },
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
    categories: [
      {
        name: "When You Need Me", color: "#2f4bd8",
        letters: [
          { t: "you miss me", body: "Mi vieja, me acuerdo de una vez en febrero en que abrí la galería y me puse a ver nuestros videos. Pensé que me iba a poner peor, pero me dio alegría ver cómo nos mirábamos.<br><br>Ahora que me extrañas, quería dejarte ese recuerdo por aquí. A mí me gusta mucho acordarme de cómo me ves. Qué preciosa eres, hasta cuando ya te estoy viendo por segunda vez en un video.", img: "assets/fotos/open-when-miss-me.webp" },
          { t: "you need a hug", body: "Me acuerdo de ese 7 de enero en que yo estaba acostado y viniste a abrazarme antes de irte. Me gusta mucho que esa sea toda la historia, que viniste y me abrazaste.<br><br>Si pudiera escoger qué hacer contigo ahorita, escogería quedarme así un rato. Acércate, pichulina. Déjame imaginar que todavía no te tienes que ir.", img: D(3) },
          { t: "you can't sleep", body: "Una vez me relajé tanto hablando contigo que me quedé dormido. Tú me viste quedarme así y, cuando me despertaste, me dijiste cosas bonitas.<br><br>Qué comprensiva mi vieja, hasta con su novio dormilón. Si hoy te cuesta dormir, me gustaría hacerte compañía como tú me la hiciste esa vez. Podemos hablar de cualquier tontería, sin tener que llegar a ninguna conclusión.", img: "assets/fotos/open-when-cant-sleep.webp" },
          { t: "you feel lonely", body: "En febrero tuvimos una llamada que me gustó mucho por lo tranquila que fue. Tú estabas cocinando y yo buscando dónde comer.<br><br>Hablamos un poco del pasado y de lo que estábamos haciendo, así nada más. Si hoy quieres compañía, me gustaría que me contaras algo así de tu día. Hasta qué vas a comer me interesa, amorzinho.", img: "assets/fotos/open-when-lonely.webp" },
          { t: "you need to hear my voice", body: "En febrero me dio mucha felicidad escucharte bromeando en una llamada. Me gustó oírte así, tan tú.<audio controls preload=\"metadata\" src=\"assets/audio/hear-my-voice.m4a\" aria-label=\"Escuchar mi voz\" style=\"display:block;width:100%;margin-top:18px\"></audio>" },
        ],
      },
      {
        name: "When Life Gets Hard", color: "#e0347f",
        letters: [
          { t: "you're nervous", body: "Me acuerdo de lo nerviosa que estabas al mandarle un mensaje de cumpleaños a mi papá. Y yo pensando qué preciosa, jeje.<br><br>Me dio mucha ternura que quisieras tener ese detalle con él. Si hoy estás nerviosa por otra cosa, cuéntame qué traes en la cabeza. Me gustaría escucharte antes de ponerme a decirte qué hacer.<audio controls preload=\"metadata\" src=\"assets/audio/youre-nervous.m4a\" aria-label=\"Escuchar un mensaje para cuando estés nerviosa\" style=\"display:block;width:100%;margin-top:18px\"></audio>" },
          { t: "you doubt yourself", body: "En febrero, leí tu carta y pensé que era tan buena y tan sincera como tú. Y cuando me estaba costando tanto despedirme, tú terminaste siendo la fuerte, aunque yo quería serlo para ti.<br><br>Después, yo estaba en clase y tú pintando en el iPad. Me sorprendió lo rápido que avanzabas y lo bueno que estaba quedando el dibujo.<br><br>Qué talentosa mi vieja. Si hoy te cuesta ver algo bueno en ti, quería recordarte esas partes tuyas que yo sí he visto. Me gusta mucho la persona que eres.", img: "assets/fotos/open-when-doubt-yourself.webp" },
          { t: "life gets overwhelming", body: "<span class=\"letter-photo\" style=\"position:relative;display:block;margin-bottom:18px\"><img src=\"assets/fotos/open-when-overwhelming.webp\" alt=\"\" style=\"display:block;width:100%;height:auto;border-radius:6px\"><span class=\"letter-photo-caption\" style=\"position:absolute;left:12px;bottom:12px;max-width:calc(100% - 24px);padding:5px 9px;border-radius:6px;background:#16161acc;color:#fff;font:500 12px/1.35 var(--sans)\">me prepared for help u</span></span>Me acuerdo de lo mucho que me tranquilizaban tus pláticas, tus chistes y las caras que hacemos. Ahora me gustaría acompañarte así cuando sientas que todo se te está juntando.<br><br>Puedes contarme lo que traes en la cabeza, aunque salga todo desordenado. Dime si quieres que pensemos en algo juntos o si prefieres que solo te escuche. También podemos hablar de cualquier tontería un rato, mi vieja." },
          { t: "you feel like crying", body: "En febrero lloré escuchando tus audios. Tu voz me daba consuelo y también me hacía extrañarte mucho.<br><br>Si hoy eres tú la que tiene ganas de llorar, me gustaría acompañarte sin buscarte una solución. Puedes decirme lo que te duele aunque todavía no sepas explicarlo. Te quiero, mi vieja, también cuando no sabes qué decir.", img: "assets/fotos/open-when-crying.webp" },
          { t: "you're afraid of change", body: "En febrero me costó mucho despedirme de ti. Acabé escribiendo que quería tener más esperanza que preocupaciones, y que tú eras mi esperanza.<br><br>Si hoy te está dando miedo algún cambio, me gustaría devolverte un poquito de eso. No sé qué estarás decidiendo cuando abras esta carta, pero quiero escuchar qué quieres y qué te preocupa. No hace falta fingir que estás tranquila conmigo.", img: "assets/fotos/open-when-afraid-of-change.webp" },
        ],
      },
      {
        name: "When Life Is Beautiful", color: "#f08a24",
        letters: [
          { t: "something amazing happens", body: "Cuéntame qué pasó, mi vieja. Quiero saber qué fue eso tan bueno que te hizo abrir esta carta.<br><br>Si pudieras repetirme el momento tal como pasó, ¿por dónde empezarías? Me gustaría escuchar hasta el detalle que te parezca más chiquito. Qué ganas de verte la cara mientras me lo cuentas.", img: "assets/fotos/open-when-amazing.webp" },
          { t: "you have a great day", body: "Me acuerdo de lo feliz que estabas con tus calcetines de pescado aquel 8 de enero. Me da mucha ternura pensar en ti contenta por eso.<br><br>Si hoy tuviste un día bonito, cuéntame qué te gustó. Quiero saber si hubo algo que te dio esa misma felicidad o si fue un día completamente distinto. Me gusta enterarme de las cosas que te ponen así de contenta.", img: "assets/fotos/open-when-great-day.webp" },
          { t: "you accomplish something", body: "Lo hiciste, pichulina. Cuéntame qué acabas de conseguir y cómo fue llegar hasta ahí.<br><br>Quiero saber qué parte te costó más y qué pensaste cuando viste que ya había salido. Si te dan ganas de presumírmelo, por favor hazlo. Me gustaría celebrar contigo eso que para ti cuenta tanto.", confetti: true, img: "assets/fotos/open-when-accomplish.webp" },
          { t: "you fall in love with your new city", body: "Una vez fui a la tienda de la escuela y le tomé una foto al cielo para ti. No suelo hacerlo, pero imaginar tu reacción me hizo sentirte más cerca.<br><br>Si encuentras un rincón que te encante en esa ciudad, me gustaría que me lo enseñaras. Puede ser con una foto o contándome qué viste ahí. Quiero conocer lo que te gusta de ese lugar a través de ti.", img: "assets/fotos/open-when-new-city.webp" },
          { t: "you feel proud of yourself", body: "Me acuerdo de cómo posabas cada que podías después de cambiarte el arete. Me encanta acordarme de ti mostrándomelo.<br><br>Si hoy estás orgullosa de algo tuyo, me gustaría que también me lo mostraras así, con ganas. Cuéntame qué te tiene contenta contigo misma. Quiero escucharte decir qué te gustó de lo que hiciste.", img: "assets/fotos/open-when-proud.webp" },
        ],
      },
      {
        name: "Just Because", color: "#a8d84a",
        letters: [
          { t: "you're bored", body: "Me acuerdo de cuando te daba dona por el iPad y tú mordías con toda la felicidad. Qué preciosa, jaja.<br><br>Te propongo que la próxima vez hagamos una reseña muy seria de lo que estemos comiendo. Tú me dices si se te antoja y yo intento describirlo sin decir solamente que está bueno. Aunque seguramente voy a terminar diciendo eso.", img: "assets/fotos/open-when-bored.webp" },
          { t: "you need to laugh", body: "<span class=\"letter-photo\" style=\"position:relative;display:block;margin-bottom:18px\"><img src=\"assets/fotos/open-when-laugh.webp\" alt=\"\" style=\"display:block;width:100%;height:auto;border-radius:6px\"><span class=\"letter-photo-caption\" style=\"position:absolute;left:12px;bottom:12px;max-width:calc(100% - 24px);padding:5px 9px;border-radius:6px;background:#16161acc;color:#fff;font:500 12px/1.35 var(--sans)\">Me admiring you</span></span>Te pusiste mi sudadera y parecías una foca. Perdón, mi vieja, pero tenía que recordártelo, jaja.<br><br>También me acuerdo de tus coletas y de ese outfit tan cute del 6 de enero. Entre la foca y la niña de las coletas, qué preciosa me tocó. Ya me dieron ganas de verte otra vez con mi sudadera." },
          { t: "you want a surprise", body: "En febrero vi dos nutrias abrazándose y dándose cariño en un acuario. Y sí, me acordé de ti.<br><br>Quería contarte esa parte de lo que escribí ese día. Yo viendo animalitos y pensando en mi vieja, jeje. Me gustaría que un día nos quedáramos juntos viendo algo así, sin prisa por seguir caminando.", img: "assets/fotos/open-when-surprise.webp" },
          { t: "you want to remember us", body: "Me acuerdo de ese rato de miradas en que los dos estábamos tristes y tú dijiste te amo. Me gusta volver a ese momento contigo.<br><br>En febrero también escribí sobre cuánto me tranquilizaban tu voz, tus chistes y las caras que hacemos. Son cosas muy nuestras que quiero seguir recordando. Te amo, pichulina, hasta cuando me dejas viéndote sin saber qué más decir.", img: "assets/fotos/open-when-remember-us.webp" },
          { t: "you feel creative", body: "En febrero tomaba fotos de cosas que pensaba que te podían gustar, sobre todo flores. Me gustaba ir encontrando algo que quisiera enseñarte.<br><br>Si hoy tienes ganas de crear, te propongo dibujar una de esas cosas chiquitas que te llamen la atención. Yo podría escoger una también y luego vemos qué hizo cada quien. Me da curiosidad ver qué se te ocurre, mi vieja.", canvas: true },
        ],
      },
    ],
    hugs: [
      "Ven, pichulina, un abrazo de esos antes de irte.",
      "Me dieron ganas de quedarme abrazado contigo otro ratito.",
      "Un abrazo para mi foca con sudadera, jeje.",
      "Amorzinho, hoy me gustaría hacerte compañía hasta que te dé sueño.",
      "Un abrazo como el de las nutrias que me hicieron pensar en ti.",
      "Te amo pichulinaaaaa",
      "Me acuerdo de tus caras y ya quiero abrazarte.",
    ],
  },
};
