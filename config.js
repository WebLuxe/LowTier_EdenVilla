/* ==========================================================================
   config.js: EVERYTHING ABOUT THE CLIENT LIVES IN THIS FILE.
   Client: Eden Villa (Eden Tours Ltd), Belle Mare, Mauritius.
   Facts come from the old site edentourltd.com. Lines marked ESEMPIO / SAMPLE
   or CONFIRM are placeholders to check with the client before launch.

   Rules of thumb:
   - Text is written { it: "...", en: "..." }. "languages" decides what visitors see.
   - Leave a value empty ("") or remove a list item to hide it on the site.
     A whole section disappears if you set  enabled: false  on it.
   - Prices are in euros (currency.base) per double room per night.
   - Photos: img("unsplash-id", alt) for Unsplash, or img("assets/photos/x.jpg", alt).
   ========================================================================== */
/* Demo only: full dates counted from today, so the calendar always shows some. For real ones write the dates: ["2026-12-20", "2027-01-03"] */
function soon(inDays, nights) { const d = (n) => new Date(Date.now() + n * 864e5).toISOString().slice(0, 10); return [d(inDays), d(inDays + nights)]; }
function img(id, alt) { return { src: id.includes('/') ? id : `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=70`, alt: alt || '' }; }

window.SITE = {

  /* ---------- 1. The business ---------- */
  name: "Eden Villa",
  legalName: "Eden Tours Ltd",
  tagline: { it: "Piccolo hotel a conduzione familiare nel centro di Belle Mare, a 70 metri dalla spiaggia.", en: "A small family-run hotel in the centre of Belle Mare, 70 metres from the beach." },
  logo: { image: "", mark: "E", text: "Eden Villa" },   // the old logo (edentour.png) is only 282px wide: ask the client for the original file

  /* ---------- 2. Brand colours and fonts ---------- */
  colors: {
    primary: "#24452F",  // palm green, like the old Eden Villa sign
    accent:  "#D9A441",  // warm gold
    dark:    "#11231A",
    light:   "#F5F1E8",
  },
  fonts: { heading: "Lora", headingWeights: "500;600;700", headingFallback: "Georgia, serif", body: "Nunito Sans", bodyWeights: "400;600;700" },
  darkMode: false,          // add-on: true shows a light/dark switch
  languages: ["en", "it"],   // English first (the default); Italian for Eden's Italian guests. ["en"] shows English only
  defaultLanguage: "en",
  timeZone: "Indian/Mauritius",

  currency: {
    base: "EUR",            // prices below are in euros
    rates: { MUR: 52 },     // 1 euro in rupees. Update now and then
    secondary: "",          // e.g. "MUR" to show "≈ Rs 3,640" next to euro prices
  },

  /* ---------- 3. Contact details (from edentourltd.com) ---------- */
  contact: {
    phone: "+39 347 844 2855",
    whatsapp: "393478442855",   // CONFIRM: the old site lists this as a phone number only; check it has WhatsApp
    whatsappMessage: { it: "Ciao Eden Villa, vorrei informazioni per un soggiorno.", en: "Hello Eden Villa, I would like to ask about a stay." },
    email: "edentourltd@yahoo.com",
    responseTime: { it: "Ti rispondiamo in italiano, inglese, tedesco, spagnolo o francese.", en: "We reply in Italian, English, German, Spanish or French." },
    street: { it: "Centro di Belle Mare, di fronte alla stazione di polizia", en: "Belle Mare village centre, opposite the police station" },
    city: "Belle Mare",
    region: "Flacq",
    postalCode: "",
    country: { it: "Mauritius", en: "Mauritius" },
    countryCode: "MU",
    lat: -20.1905, lng: 57.7645,   // CONFIRM the exact pin on Google Maps
    mapEmbed: "https://www.google.com/maps?q=Belle+Mare+Police+Station+Mauritius&z=16&output=embed",
    mapsLink: "",
    googleBusiness: "",   // the hotel's Google Maps / Business profile link: used for "Get directions" and in the Google data
  },
  hours: null,
  social: { facebook: "https://www.facebook.com/Eden-Tours-607553109400207", instagram: "", tripadvisor: "", google: "", tiktok: "", youtube: "" },

  /* ---------- 4. Google and link previews ---------- */
  seo: {
    title: { it: "Eden Villa | Hotel a Belle Mare, Mauritius, a 70 m dal mare", en: "Eden Villa | Hotel in Belle Mare, Mauritius, 70 m from the beach" },
    description: { it: "Piccolo hotel di famiglia nel centro di Belle Mare: piscina, ristorante, B&B o mezza pensione ed escursioni. Si parla italiano. Prenota direttamente.", en: "A small family hotel in the centre of Belle Mare: pool, restaurant, B&B or half board and day tours. Book direct with the owners." },
    image: "https://images.unsplash.com/photo-1634972312739-d7237018e06a?auto=format&fit=crop&q=70",
    favicon: "assets/favicon.svg",
    schemaType: "Hotel",
    priceRange: "€60 – €110",
    siteUrl: "https://edentourltd.com/",   // CONFIRM the final address. Also in sitemap.xml and robots.txt
  },

  /* ---------- 5. Availability requests ---------- */
  form: { endpoint: "" },  // e.g. "https://formspree.io/f/abcdwxyz". Empty = the request opens the visitor's email app
  booking: {
    sendVia: "both",     // "both" (form button + WhatsApp button), "endpoint" or "whatsapp"
    defaultNights: 7,
  },

  /* ---------- 6. The hotel at a glance ----------
     price: ESEMPIO / SAMPLE price per double room per night, bed & breakfast. Seasons are in sections.rates. */
  villa: {
    price: 70, minNights: 3, guests: 10,
    checkIn: "", checkOut: "",
    // Nights when the hotel is full, crossed out in the calendar: [first night, day they leave]. Update it when the hotel fills up.
    booked: [soon(5, 4), soon(19, 7), soon(38, 5), soon(60, 10)],
    facts: [
      { icon: "wave", label: { it: "70 m dalla spiaggia", en: "70 m from the beach" } },
      { icon: "pool", label: { it: "Piscina", en: "Pool" } },
      { icon: "coffee", label: { it: "B&B o mezza pensione", en: "B&B or half board" } },
      { icon: "users", label: { it: "Si parla italiano", en: "Italian spoken" } },
    ],
    stats: [
      { icon: "wave", value: "70 m", label: { it: "dalla spiaggia", en: "to the beach" } },
      { icon: "coffee", value: "B&B · HB", label: { it: "o mezza pensione", en: "or half board" } },
      { icon: "globe", value: "5", label: { it: "lingue parlate", en: "languages spoken" } },
      { icon: "compass", value: "4", label: { it: "escursioni nostre", en: "of our own day tours" } },
    ],
  },

  /* ---------- 7. The page, section by section ---------- */
  sections: {
    hero: {
      image: img("1634972312739-d7237018e06a", "A beach in Mauritius with the mountains behind"),
      eyebrow: { it: "Belle Mare · Costa est di Mauritius", en: "Belle Mare · East coast of Mauritius" },
      title: { it: "La tua Mauritius, a 70 metri dal mare", en: "Your Mauritius, 70 metres from the sea" },
      text: { it: "Un piccolo hotel di famiglia nel centro di Belle Mare: camere nuove con mobili in bambù, piscina, ristorante e bar, e una delle spiagge più lunghe dell'isola a due passi.", en: "A small family hotel in the centre of Belle Mare: new rooms with bamboo furniture, a pool, a restaurant and bar, and one of the island's longest beaches a short walk away." },
    },
    direct: {
      title: { it: "Perché prenotare con noi", en: "Why book with us" },
      items: [
        { icon: "tag", title: { it: "Senza intermediari", en: "No middlemen" }, text: { it: "Il prezzo migliore, in diretta", en: "The best price, direct" } },
        { icon: "wa", title: { it: "Parliamo italiano", en: "We speak your language" }, text: { it: "E inglese, tedesco, spagnolo, francese", en: "Italian, English, German, Spanish, French" } },
        { icon: "car", title: { it: "Transfer dall'aeroporto", en: "Airport transfers" }, text: { it: "€50 a persona a tratta", en: "€50 per person each way" } },
        { icon: "heart", title: { it: "Benvenuto in camera", en: "A welcome in your room" }, text: { it: "Frutta fresca e acqua all'arrivo", en: "Fresh fruit and water on arrival" } },
      ],
    },
    about: {
      eyebrow: { it: "L'hotel", en: "The hotel" },
      title: { it: "Piccolo, nuovo e di famiglia", en: "Small, new and family-run" },
      text: [
        { it: "Eden Villa è un piccolo hotel di recente costruzione, gestito dalla nostra famiglia, nel cuore di Belle Mare. Le camere sono nuove, arredate con mobili etnici in bambù, con bagno privato, minibar, cassaforte, asciugacapelli e Wi-Fi gratuito.", en: "Eden Villa is a small, recently built hotel run by our family in the heart of Belle Mare. The rooms are new, furnished with ethnic bamboo pieces, with a private bathroom, minibar, safe, hairdryer and free Wi-Fi." },
        { it: "C'è la piscina, il ristorante e il bar, e puoi scegliere tra bed & breakfast e mezza pensione. Ogni giorno organizziamo qualcosa: escursioni, mercati, cene a tema, barbecue in spiaggia, spettacoli di danza locale e serate al casinò di Port Louis.", en: "There is a pool, a restaurant and a bar, and you can choose bed & breakfast or half board. Every day we organise something: tours, markets, themed dinners, beach barbecues, local dance shows and evenings at the casino in Port Louis." },
      ],
      host: { it: "Eliana e la famiglia di Eden Villa", en: "Eliana and the Eden Villa family" },
      image: img("assets/photos/eden-pool-terrace.jpg", { it: "La piscina di Eden Villa con lettini e ombrellone", en: "The Eden Villa pool with sun loungers and a parasol" }),
    },
    amenities: {
      eyebrow: { it: "Comfort", en: "Comforts" },
      title: { it: "In hotel e in camera", en: "In the hotel and your room" },
      lead: "",
      items: [
        { icon: "pool", label: { it: "Piscina per gli ospiti", en: "Pool for guests" } },
        { icon: "coffee", label: { it: "Ristorante e bar", en: "Restaurant and bar" } },
        { icon: "wifi", label: { it: "Wi-Fi gratuito", en: "Free Wi-Fi" } },
        { icon: "lock", label: { it: "Cassaforte in camera", en: "Safe in the room" } },
        { icon: "snow", label: { it: "Minibar", en: "Minibar" } },
        { icon: "sparkle", label: { it: "Asciugacapelli", en: "Hairdryer" } },
        { icon: "home", label: { it: "Bagno privato, doccia o vasca", en: "Private bathroom, shower or bath" } },
        { icon: "leaf", label: { it: "Mobili etnici in bambù", en: "Ethnic bamboo furniture" } },
        { icon: "compass", label: { it: "Escursioni ogni giorno", en: "Day tours every day" } },
        { icon: "sun", label: { it: "Barbecue in spiaggia", en: "Beach barbecues" } },
        { icon: "wave", label: { it: "Spiaggia a 70 metri", en: "Beach 70 metres away" } },
        { icon: "bag", label: { it: "Negozi e ristoranti intorno", en: "Shops and restaurants around" } },
      ],
    },
    gallery: {
      eyebrow: { it: "Foto", en: "Photos" },
      title: { it: "Dai un'occhiata", en: "Take a look around" },
      lead: "",
      images: [
        img("assets/photos/eden-pool.jpg", { it: "La piscina di Eden Villa tra le palme", en: "The Eden Villa pool among the palms" }),
        img("assets/photos/eden-double-room.jpg", { it: "Camera doppia", en: "Double room" }),
        img("assets/photos/eden-restaurant.jpg", { it: "Il ristorante sotto il tetto in legno", en: "The restaurant under the timber roof" }),
        img("assets/photos/eden-twin-room.jpg", { it: "Camera con due letti", en: "Twin room" }),
        img("assets/photos/eden-pool-terrace.jpg", { it: "Lettini a bordo piscina", en: "Sun loungers by the pool" }),
        img("assets/photos/eden-superior-room.jpg", { it: "Camera doppia con cuscini decorati", en: "Double room with decorative cushions" }),
        img("assets/photos/eden-lobster.jpg", { it: "Aragosta, dalla nostra cucina", en: "Lobster from our kitchen" }),
        img("1634972312739-d7237018e06a", { it: "Una spiaggia di Mauritius", en: "A beach in Mauritius" }),
        img("assets/photos/tour-ile-aux-cerfs.jpg", { it: "L'Île aux Cerfs dall'alto", en: "Île aux Cerfs from the air" }),
      ],
    },
    rates: {
      eyebrow: { it: "Tariffe", en: "Rates" },
      title: { it: "Prezzi per camera doppia", en: "Prices per double room" },
      lead: { it: "A notte, in bed & breakfast. Mezza pensione su richiesta. Nessuna commissione.", en: "Per night, bed & breakfast. Half board on request. No booking fees." },
      // ESEMPIO / SAMPLE prices and dates: confirm with the client. from / to are "MM-DD" and may cross New Year
      seasons: [
        { name: { it: "Natale e Capodanno", en: "Christmas and New Year" }, from: "12-20", to: "01-06", price: 110, minNights: 7 },
        { name: { it: "Alta stagione", en: "High season" }, from: "11-01", to: "04-30", price: 85, minNights: 4 },
        { name: { it: "Inverno australe", en: "Southern winter" }, from: "06-01", to: "08-31", price: 60, minNights: 3 },
      ],
      included: { it: "Inclusi: colazione, Wi-Fi, piscina, frutta fresca e acqua all'arrivo.", en: "Included: breakfast, Wi-Fi, the pool, fresh fruit and water on arrival." },
      notes: [
        { icon: "users", title: { it: "Bambini", en: "Children" }, text: { it: "Gratis fino a 2 anni, metà prezzo da 2 a 12 anni, prezzo adulto oltre i 12.", en: "Free under 2, half price from 2 to 12, adult price over 12." } },
        { icon: "car", title: { it: "Transfer aeroporto", en: "Airport transfer" }, text: { it: "€50 a persona per tratta, con autista che ti aspetta agli arrivi.", en: "€50 per person each way, with a driver waiting at arrivals." } },
        { icon: "heart", title: { it: "Cenoni delle feste", en: "Festive dinners" }, text: { it: "Cenone della Vigilia €50 a persona. Cenone di Capodanno con aragosta €50 a persona.", en: "Christmas Eve dinner €50 per person. New Year's Eve dinner with lobster €50 per person." } },
      ],
    },
    reviews: {
      eyebrow: { it: "Dicono di noi", en: "What guests say" },
      title: { it: "Ospiti felici", en: "Happy guests" },
      // From a photo on the old site (2016): Booking.com Guest Review Award 8.4 and a TripAdvisor Certificate of Excellence. CONFIRM the current score
      summary: { rating: 8.4, best: 10, source: { it: "Booking.com · Certificato di Eccellenza TripAdvisor", en: "Booking.com · TripAdvisor Certificate of Excellence" } },
      // From the old site. Add 2 or 3 real reviews copied from Booking.com or TripAdvisor (guest's first name and month)
      items: [
        { name: "Antonio Rossi", from: { it: "Italia", en: "Italy" }, date: "", text: { it: "Ottimi i tour, camera stupenda e situazione da sogno.", en: "Great tours, a beautiful room and a dreamy setting." } },
      ],
    },
    book: {
      eyebrow: { it: "Disponibilità", en: "Availability" },
      title: { it: "Chiedi le tue date", en: "Ask for your dates" },
      lead: { it: "Tocca il giorno di arrivo, poi quello di partenza. Le notti barrate sono al completo. Ti confermiamo il prezzo esatto via email o WhatsApp.", en: "Tap your arrival day, then your departure day. Crossed-out nights are full. We confirm the exact price by email or WhatsApp." },
      formTitle: { it: "Richiesta di disponibilità", en: "Availability request" },
    },
    faq: {
      eyebrow: { it: "Prima di partire", en: "Before you come" },
      title: { it: "Domande frequenti", en: "Questions, answered" },
      lead: { it: "Altro? Scrivici su WhatsApp.", en: "Anything else? Ask us on WhatsApp." },
      items: [
        { q: { it: "Bed & breakfast o mezza pensione?", en: "Bed & breakfast or half board?" }, a: { it: "Scegli tu. La colazione è sempre inclusa; con la mezza pensione ceni anche nel nostro ristorante.", en: "Your choice. Breakfast is always included; with half board you also have dinner in our restaurant." } },
        { q: { it: "Quanto pagano i bambini?", en: "What do children pay?" }, a: { it: "Gratis fino a 2 anni, metà prezzo da 2 a 12 anni, prezzo adulto dai 12 anni.", en: "Free under 2, half price from 2 to 12, adult price from 12." } },
        { q: { it: "Organizzate il transfer dall'aeroporto?", en: "Can you arrange an airport transfer?" }, a: { it: "Sì: €50 a persona per tratta. L'autista ti aspetta agli arrivi.", en: "Yes: €50 per person each way. The driver waits for you at arrivals." } },
        { q: { it: "Che escursioni proponete?", en: "Which day tours do you run?" }, a: { it: "Il nord con Port Louis, il sud selvaggio con Chamarel, l'Île aux Cerfs in barca con barbecue (€40 a persona) e una giornata nella natura al Vanilla Crocodile Park.", en: "The north with Port Louis, the wild south with Chamarel, Île aux Cerfs by boat with a barbecue (€40 per person) and a nature day at Vanilla Crocodile Park." } },
        { q: { it: "Cosa succede a Natale e Capodanno?", en: "What happens at Christmas and New Year?" }, a: { it: "Cenone della Vigilia (€50 a persona) e cenone di Capodanno con aragosta (€50 a persona).", en: "A Christmas Eve dinner (€50 per person) and a New Year's Eve dinner with lobster (€50 per person)." } },
      ],
    },
    location: {
      eyebrow: { it: "Dove siamo", en: "Location" },
      title: { it: "Nel centro di Belle Mare", en: "In the centre of Belle Mare" },
      text: { it: "Una zona residenziale con negozi, bar, ristoranti e boutique. La stazione di polizia è proprio di fronte e il tempio indù Ram Mandir è a pochi passi.", en: "A residential area with shops, bars, restaurants and boutiques. The police station is right opposite and the Ram Mandir Hindu temple is a short walk away." },
      facts: [
        { icon: "wave", value: { it: "70 m", en: "70 m" }, label: { it: "dalla spiaggia", en: "from the beach" } },
        { icon: "plane", value: { it: "45 min", en: "45 min" }, label: { it: "dall'aeroporto", en: "from the airport" } },
        { icon: "anchor", value: { it: "15 min", en: "15 min" }, label: { it: "dalle barche per l'Île aux Cerfs", en: "to the boats for Île aux Cerfs" } },
        { icon: "bag", value: { it: "Sotto casa", en: "On the doorstep" }, label: { it: "negozi, bar e ristoranti", en: "shops, bars and restaurants" } },
      ],
    },
  },

  credit: { name: "WebLuxe", url: "https://webluxe.github.io/WebLuxe/" },

  /* ---------- Admin panel (/admin/). Changes are saved to data/site.js in this GitHub repository ---------- */
  admin: { repo: "WebLuxe/LowTier_EdenVilla", branch: "main" },

  /* ---------- 8. Demo mode. Set enabled: false when the site goes live ---------- */
  demo: {
    enabled: true,
    note: { it: "Proposta di nuovo sito per Eden Villa, a cura di WebLuxe. Prezzi e disponibilità sono di esempio.", en: "New website proposal for Eden Villa by WebLuxe. Prices and availability are samples." },
    studioWhatsapp: "",
    tiers: [
      { label: { it: "Essenziale", en: "Essentials" }, url: "https://webluxe.github.io/LowTier_EdenVilla/", current: true },
      { label: { it: "Soggiorni", en: "Stays" }, url: "https://webluxe.github.io/MidTier_EdenVilla/" },
      { label: { it: "Prenotazioni", en: "Bookings" }, url: "https://webluxe.github.io/HighTier_EdenVilla/" },
    ],
  },

  /* ---------- 9. All the small words on buttons and labels ---------- */
  text: {
    it: {
      // ----- parole usate su tutti i modelli WebLuxe (menu, pulsanti, messaggi) -----
      home: "Home", skip: "Vai al contenuto", menu: "Menu", switchLang: "Cambia lingua", toggleTheme: "Passa al tema chiaro o scuro",
      explore: "Esplora", footerNav: "Link del piè di pagina", contactTitle: "Contatti", hoursTitle: "Orari", rights: "Tutti i diritti riservati.", websiteBy: "Sito web di",
      whatsappUs: "Scrivici su WhatsApp", phone: "Telefono", email: "Email", address: "Indirizzo", chatNow: "Scrivici adesso",
      closed: "Chiuso", today: "oggi", tomorrow: "domani", openUntil: "Aperto ora, fino alle {time}", closedOpens: "Ora chiuso. Apre {day} alle {time}",
      days: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"], daysShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
      introSkip: "Salta", close: "Chiudi", ok: "OK", prev: "Precedente", next: "Successivo", slide: "Vai alla foto {n}", showMap: "Mostra la mappa", mapTitle: "Mappa con la nostra posizione",
      formSending: "Invio in corso…", formSent: "Grazie. Il messaggio è stato inviato e ti risponderemo presto.", formError: "Spiacenti, il messaggio non è partito. Chiamaci al {phone}.",
      formMailto: "Si è aperta la tua app email con il messaggio. Premi invia per completare.", formDemoDone: "Demo: non è stato inviato nulla.",
      demoLabel: "Informazioni su questa demo", demoBadge: "Demo", demoNote: "Sito di esempio di WebLuxe. Prezzi e disponibilità sono di prova.",
      demoTitle: "Questa è una demo", demoWa: "Sul sito vero, qui si apre WhatsApp con questo messaggio pronto da inviare:", demoTel: "Sul sito vero, qui parte la chiamata:",
      demoMail: "Sul sito vero, qui si apre un'email all'attività.", demoForm: "Sul sito vero, l'attività riceve questo:",
      demoStudio: "Voglio un sito così", demoStudioMsg: "Ciao WebLuxe, ho visto la demo di {site} e vorrei un sito simile.",
      reviewOnGoogle: "Lascia una recensione su Google", seeOnGoogle: "Vedi su Google Maps", nfTitle: "Questa pagina è andata al mare", nfText: "L'indirizzo forse contiene un errore, oppure la pagina è stata spostata. Trovi tutto nella home page.", nfHome: "Vai alla home page",
      // ----- questo modello -----
      hoursTitle: "Orari di risposta",
      navVilla: "L'hotel", navGallery: "Foto", navRates: "Tariffe", navReviews: "Recensioni", navLocation: "Dove siamo",
      checkAvailability: "Verifica disponibilità", seePhotos: "Guarda le foto", from: "Da", perNight: "a notte", viewPhoto: "Vedi foto", allPhotos: "Tutte le {n} foto",
      period: "Periodo", minStay: "Soggiorno min.", standardRate: "Tariffa base", allOtherDates: "Tutte le altre date", nNights: "{n} notti",
      ratingOf: "{n} stelle su 5", basedOn: "{n} recensioni",
      bookEyebrow: "Disponibilità", bookTitle: "Chiedi le tue date", formTitle: "Richiesta di disponibilità",
      step1: "Scegli le date", step2: "Ti confermiamo il prezzo", step3: "Un acconto blocca la camera",
      checkIn: "Arrivo", checkOut: "Partenza", guests: "Ospiti", guest: "ospite", guestsLower: "ospiti", dates: "Date",
      pickDates: "Scegli le date", outAfterIn: "La partenza deve essere dopo l'arrivo.", minNights: "Il soggiorno minimo è di {n} notti.",
      fName: "Nome e cognome", fEmail: "Email", fPhone: "Telefono / WhatsApp", fMessage: "Qualcosa da dirci?", optional: "(facoltativo)", messageHint: "Numero di camere, età dei bambini, B&B o mezza pensione, orario di arrivo…",
      checkDates: "Vedi le date", pickDatesFirst: "Scegli prima le date nel calendario.", estTotal: "Prezzo indicativo",
      calTitle: "Scegli le date", calPickIn: "Tocca il giorno di arrivo", calPickOut: "Ora tocca il giorno di partenza (min. {n} notti)", calFree: "Libero", calBooked: "Completo",
      calClear: "Cancella date", calDone: "Fatto", calMin: "Da questo giorno il soggiorno minimo è di {n} notti.", calClash: "Alcune di queste notti sono al completo.",
      continue: "Continua", changeDates: "Cambia date", sendRequest: "Invia richiesta", askWa: "Chiedi su WhatsApp", noPayNow: "Nessun pagamento adesso: prima confermiamo la disponibilità.",
      waIntro: "Ciao {name}, avete una camera libera per queste date?", bookSubject: "Richiesta di disponibilità dal sito {name}",
    },
    en: {
      // ----- words used on every WebLuxe template (menus, buttons, messages) -----
      home: "Home", skip: "Skip to content", menu: "Menu", switchLang: "Voir le site en français", toggleTheme: "Switch light or dark mode",
      explore: "Explore", footerNav: "Footer links", contactTitle: "Contact", hoursTitle: "Opening hours", rights: "All rights reserved.", websiteBy: "Website by",
      whatsappUs: "Chat on WhatsApp", phone: "Phone", email: "Email", address: "Address", chatNow: "Chat with us now",
      closed: "Closed", today: "today", tomorrow: "tomorrow", openUntil: "Open now, until {time}", closedOpens: "Closed now. Opens {day} at {time}",
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      introSkip: "Skip", close: "Close", ok: "OK", prev: "Previous", next: "Next", slide: "Go to slide {n}", showMap: "Show the map", mapTitle: "Map showing our location",
      formSending: "Sending…", formSent: "Thank you. Your message has been sent and we will reply soon.", formError: "Sorry, the message could not be sent. Please call us on {phone}.",
      formMailto: "Your email app has opened with your message. Press send there to finish.", formDemoDone: "Demo: nothing was sent.",
      demoLabel: "About this demo", demoBadge: "Demo", demoNote: "Example website by WebLuxe. The business, prices and reviews are samples.",
      demoTitle: "This is a demo", demoWa: "On the real website, this opens WhatsApp with this message ready to send:", demoTel: "On the real website, this calls the business:",
      demoMail: "On the real website, this opens an email to the business.", demoForm: "On the real website, the business receives this:",
      demoStudio: "Get a site like this", demoStudioMsg: "Hello WebLuxe, I saw the {site} demo and would like a website like it.",
      reviewOnGoogle: "Review us on Google", seeOnGoogle: "See us on Google Maps", nfTitle: "This page has gone for a swim", nfText: "The address may have a typo, or the page has moved. Everything is still here on the home page.", nfHome: "Go to the home page",
      // ----- this template -----
      hoursTitle: "Reply hours",
      navVilla: "The hotel", navGallery: "Photos", navRates: "Rates", navReviews: "Reviews", navLocation: "Location",
      checkAvailability: "Check availability", seePhotos: "See the photos", from: "From", perNight: "per night", viewPhoto: "View photo", allPhotos: "All {n} photos",
      period: "Period", minStay: "Min. stay", standardRate: "Standard rate", allOtherDates: "All other dates", nNights: "{n} nights",
      ratingOf: "{n} out of 5 stars", basedOn: "{n} reviews",
      bookEyebrow: "Availability", bookTitle: "Ask for your dates", formTitle: "Availability request",
      step1: "Choose your dates", step2: "We confirm the price", step3: "A deposit secures your room",
      checkIn: "Check-in", checkOut: "Check-out", guests: "Guests", guest: "guest", guestsLower: "guests", dates: "Dates",
      pickDates: "Choose your dates", outAfterIn: "Check-out must be after check-in.", minNights: "The minimum stay is {n} nights.",
      fName: "Full name", fEmail: "Email", fPhone: "Phone / WhatsApp", fMessage: "Anything we should know?", optional: "(optional)", messageHint: "Number of rooms, children's ages, B&B or half board, arrival time…",
      checkDates: "Check dates", pickDatesFirst: "Please choose your dates in the calendar first.", estTotal: "Estimated price",
      calTitle: "Choose your dates", calPickIn: "Tap your check-in day", calPickOut: "Now tap your check-out day (min. {n} nights)", calFree: "Available", calBooked: "Full",
      calClear: "Clear dates", calDone: "Done", calMin: "From this day the minimum stay is {n} nights.", calClash: "Some of those nights are full.",
      continue: "Continue", changeDates: "Change dates", sendRequest: "Send request", askWa: "Ask on WhatsApp", noPayNow: "No payment now. We confirm availability first.",
      waIntro: "Hello {name}, do you have a room for these dates?", bookSubject: "Availability request from the {name} website",
    },
  },
};
