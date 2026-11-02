import type { Metadata } from "next";
import PhinixBanner from "./PhinixBanner";

export const metadata: Metadata = {
  title: "Entrümpelung, Garten & Hausmeisterservice",
  description:
    "N-Service in Bottrop-Kirchhellen: Entrümpelung, Haushaltsauflösung, Gartenpflege, Reinigung, Hausmeisterservice, Transporte und Abholungen.",
};

const services = [
  {
    number: "01",
    icon: "clearance",
    title: "Entrümpelung & Haushaltsauflösung",
    text: "Von einzelnen Räumen bis zur vollständigen Haushaltsauflösung – Umfang und Vorgehen werden vorab persönlich abgestimmt.",
    keywords: "Wohnung · Keller · Garage",
    details: [
      "Keller, Dachboden und Garage",
      "Wohnungen und komplette Haushalte",
      "Besenreine Übergabe nach Absprache",
    ],
  },
  {
    number: "02",
    icon: "garden",
    title: "Garten- & Grünpflege",
    text: "Einmalige Unterstützung oder wiederkehrende Pflege für private Gärten, Grundstücke und kleinere Grünflächen.",
    keywords: "Rasen · Hecken · Baumschnitt",
    details: [
      "Rasen- und Beetpflege",
      "Hecken-, Strauch- und Baumschnitt",
      "Grünschnitt nach Vereinbarung",
    ],
  },
  {
    number: "03",
    icon: "cleaning",
    title: "Reinigung",
    text: "Gründliche Reinigung für ausgewählte Innen- und Außenbereiche – passend zu Fläche, Material und Verschmutzung.",
    keywords: "Objekt · Außenbereich · Hochdruck",
    details: [
      "Terrassen, Wege und Einfahrten",
      "Gemeinschafts- und Außenflächen",
      "Hochdruckreinigung nach Materialprüfung",
    ],
  },
  {
    number: "04",
    icon: "caretaker",
    title: "Hausmeisterservice",
    text: "Ein verlässlicher Ansprechpartner für regelmäßig anfallende Aufgaben rund um Immobilie und Grundstück.",
    keywords: "Kontrolle · Pflege · Kleinaufgaben",
    details: [
      "Kontrollgänge nach Vereinbarung",
      "Pflege von Außenbereichen",
      "Kleine Handgriffe und Koordination",
    ],
  },
  {
    number: "05",
    icon: "transport",
    title: "Transporte & Abholungen",
    text: "Abholung, Tragehilfe und Transport sperriger Gegenstände in Bottrop und der näheren Umgebung.",
    keywords: "Abholung · Transport · Lieferung",
    details: [
      "Möbel und sperrige Gegenstände",
      "Abholungen und Lieferfahrten",
      "Geschütztes Verladen nach Absprache",
    ],
  },
];

type ServiceIconName = (typeof services)[number]["icon"];

function ServiceIcon({ name }: { name: ServiceIconName }) {
  const common = {
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "clearance") {
    return <svg {...common}><path d="M10 23 32 11l22 12-22 12L10 23Z"/><path d="M10 23v24l22 12 22-12V23M32 35v24"/><path d="m22 17 22 12"/></svg>;
  }
  if (name === "garden") {
    return <svg {...common}><path d="M12 49c18 1 34-9 40-35-25 2-39 13-40 35Z"/><path d="M15 48c10-10 18-17 33-29"/><path d="M28 37c-1-6-1-10 0-15M36 31c5 0 9 1 13 3"/></svg>;
  }
  if (name === "cleaning") {
    return <svg {...common}><path d="M16 17h20l5 8-10 5H16V17Z"/><path d="M22 30v21h18"/><path d="M42 34h10M45 42h12M42 50h10"/><circle cx="14" cy="51" r="4"/></svg>;
  }
  if (name === "caretaker") {
    return <svg {...common}><path d="M25 11a14 14 0 0 0 13 20L55 48 48 55 31 38A14 14 0 0 0 11 25l9 5 9-9-4-10Z"/><path d="m43 46 3-3"/></svg>;
  }
  return <svg {...common}><path d="M7 17h33v28H7zM40 28h9l8 9v8H40z"/><circle cx="18" cy="48" r="5"/><circle cx="48" cy="48" r="5"/><path d="M12 24h19M12 31h13"/></svg>;
}

const workImages = [
  {
    src: "/services/baumschnitt.jpg",
    title: "Baumschnitt",
    detail: "Sicher & fachgerecht",
    alt: "Professioneller Baumschnitt mit Teleskop-Astsäge in einem Garten in Bottrop",
  },
  {
    src: "/services/gartenarbeit.jpg",
    title: "Gartenarbeit",
    detail: "Sauber gepflegt",
    alt: "N-Service Mitarbeiter bei der Heckenpflege in einem privaten Garten",
  },
  {
    src: "/services/entruempelung.jpg",
    title: "Entrümpelung",
    detail: "Geordnet angepackt",
    alt: "Zwei Mitarbeiter tragen bei einer Entrümpelung gemeinsam ein Möbelstück aus einer Garage",
  },
  {
    src: "/services/transport.jpg",
    title: "Transport",
    detail: "Geschützt verladen",
    alt: "Zwei Mitarbeiter verladen ein geschütztes Möbelstück in einen Transporter",
  },
  {
    src: "/services/hochdruckreinigung.jpg",
    title: "Hochdruckreinigung",
    detail: "Sichtbar sauber",
    alt: "Professionelle Hochdruckreinigung einer gepflasterten Terrasse",
  },
];

const faqs = [
  {
    question: "Welche Leistungen bietet N-Service in Bottrop an?",
    answer:
      "N-Service übernimmt Entrümpelungen und Haushaltsauflösungen, Garten- und Grünpflege, Reinigungsarbeiten, Hausmeisterservice sowie Transporte und Abholungen.",
  },
  {
    question: "In welchem Gebiet ist N-Service im Einsatz?",
    answer:
      "Der Schwerpunkt liegt in Bottrop-Kirchhellen und der näheren Umgebung, darunter Bottrop, Gladbeck, Dorsten und angrenzende Orte im nördlichen Ruhrgebiet.",
  },
  {
    question: "Wie erhalte ich ein Angebot?",
    answer:
      "Am schnellsten per WhatsApp: Beschreiben Sie kurz die Aufgabe und senden Sie bei Bedarf Fotos. Alternativ erreichen Sie Viktor Nesterenko telefonisch oder per E-Mail.",
  },
  {
    question: "Sind auch einzelne und kurzfristige Einsätze möglich?",
    answer:
      "Ja. Umfang und Termin werden persönlich abgestimmt. Fragen Sie Ihren gewünschten Einsatz am besten direkt an.",
  },
  {
    question: "Welche Informationen helfen bei einer schnellen Einschätzung?",
    answer:
      "Nennen Sie den Einsatzort, die gewünschte Leistung und den ungefähren Umfang. Fotos per WhatsApp helfen dabei, die Aufgabe vorab besser einzuordnen.",
  },
  {
    question: "Kann ich mehrere Leistungen miteinander kombinieren?",
    answer:
      "Ja. Zum Beispiel lassen sich Gartenpflege, Abholung und Reinigung in einer Anfrage zusammenfassen. N-Service stimmt den passenden Ablauf persönlich mit Ihnen ab.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  name: "N-Service",
  description:
    "Service rund ums Haus: Entrümpelung, Gartenpflege, Reinigung, Hausmeisterservice und Transporte.",
  url: "https://n-service-bottrop.de",
  telephone: "+491792273411",
  email: "info@n-service-bottrop.de",
  founder: { "@type": "Person", name: "Viktor Nesterenko" },
  areaServed: ["Bottrop", "Kirchhellen", "Gladbeck", "Dorsten", "Gelsenkirchen"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bottrop",
    addressRegion: "Nordrhein-Westfalen",
    addressCountry: "DE",
  },
  knowsAbout: services.map((service) => service.title),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="N-Service Startseite">
          <span className="brand-mark">N<span>✓</span></span>
          <span className="brand-name">N-SERVICE</span>
        </a>
        <nav aria-label="Hauptnavigation">
          <a href="#leistungen">Leistungen</a>
          <a href="#einsatz">Einsätze</a>
          <a href="#ablauf">Ablauf</a>
          <a href="#gebiet">Einsatzgebiet</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="header-call" href="tel:+491792273411">
          Jetzt anrufen <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Bottrop-Kirchhellen & Umgebung</p>
          <h1>Alles rund ums Haus.<br /><em>Aus einer Hand.</em></h1>
          <p className="hero-text">
            Von der Entrümpelung bis zur Gartenpflege: N-Service packt an, wenn
            es sauber, zügig und zuverlässig werden soll.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://wa.me/491792273411?text=Hallo%20N-Service%2C%20ich%20m%C3%B6chte%20eine%20Leistung%20anfragen.">
              Angebot per WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-ghost" href="tel:+491792273411">+49 179 2273411</a>
          </div>
          <div className="trust-row" aria-label="Vorteile">
            <span>✓ Unverbindliche Anfrage</span>
            <span>✓ Flexible Termine</span>
            <span>✓ Persönlicher Kontakt</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="N-Service – zuverlässig, flexibel und sauber">
          <div className="signal signal-one" />
          <div className="signal signal-two" />
          <div className="service-card">
            <p>Ihr Ansprechpartner</p>
            <strong>Viktor<br />Nesterenko</strong>
            <span>Inhaber</span>
          </div>
          <div className="area-card">
            <span className="pin" aria-hidden="true">●</span>
            <div><small>Einsatzgebiet</small><strong>Bottrop & Umgebung</strong></div>
          </div>
          <div className="brand-panel">
            <span className="panel-n">N<span>✓</span></span>
            <p>Zuverlässig.<br />Flexibel. Sauber.</p>
          </div>
        </div>
      </section>

      <div className="service-strip" aria-label="Leistungsübersicht">
        <span>Entrümpelung</span><i>•</i><span>Gartenpflege</span><i>•</i>
        <span>Reinigung</span><i>•</i><span>Hausmeisterservice</span><i>•</i><span>Transporte</span>
      </div>

      <section className="section services" id="leistungen">
        <div className="section-heading">
          <p className="kicker">Leistungen</p>
          <h2>Ein Ansprechpartner.<br />Viele Lösungen.</h2>
          <p>Praktischer Service für Haus, Wohnung, Garten und Grundstück – direkt und unkompliziert organisiert.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-item" key={service.number}>
              <div className="service-top">
                <span>{service.number}</span>
                <i className="service-icon"><ServiceIcon name={service.icon} /></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul>
                {service.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
              <small>{service.keywords}</small>
            </article>
          ))}
        </div>
        <div className="service-note">
          <div>
            <span>?</span>
            <p><strong>Nicht sicher, welche Leistung passt?</strong> Ein Foto und zwei Sätze zur Aufgabe reichen für den ersten Kontakt.</p>
          </div>
          <a href="https://wa.me/491792273411?text=Hallo%20N-Service%2C%20ich%20m%C3%B6chte%20mein%20Projekt%20kurz%20zeigen.">Projekt kurz zeigen <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="showcase" id="einsatz">
        <div className="showcase-heading">
          <div>
            <p className="kicker">N-Service im Einsatz</p>
            <h2>Arbeit, die man<br />sehen kann.</h2>
          </div>
          <p>
            Von Garten und Grundstück bis Keller und Transport – wir packen
            dort an, wo praktische Hilfe gebraucht wird.
          </p>
        </div>
        <div className="showcase-grid">
          {workImages.map((image, index) => (
            <figure className={`showcase-card card-${index + 1}`} key={image.src}>
              <img
                src={image.src}
                alt={image.alt}
                width="1536"
                height="1024"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{image.title}</strong>
                <small>{image.detail}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="process" id="ablauf">
        <div className="process-intro">
          <p className="kicker">So einfach geht&apos;s</p>
          <h2>Kurze Wege.<br />Klare Absprachen.</h2>
          <a href="https://wa.me/491792273411?text=Hallo%20N-Service%2C%20ich%20m%C3%B6chte%20eine%20Leistung%20anfragen.">Projekt anfragen <span>↗</span></a>
        </div>
        <ol className="steps">
          <li><span>01</span><div><strong>Anfrage senden</strong><p>Aufgabe kurz per WhatsApp, Telefon oder E-Mail beschreiben.</p></div></li>
          <li><span>02</span><div><strong>Details klären</strong><p>Umfang, Ort und passenden Termin persönlich abstimmen.</p></div></li>
          <li><span>03</span><div><strong>Wir packen an</strong><p>Die vereinbarte Leistung zuverlässig vor Ort erledigen.</p></div></li>
        </ol>
      </section>

      <section className="promise" aria-labelledby="promise-title">
        <div className="promise-copy">
          <p className="kicker">Darauf kommt es an</p>
          <h2 id="promise-title">Praktisch gedacht.<br />Persönlich gelöst.</h2>
          <p>Jede Aufgabe ist anders. Deshalb beginnt guter Service nicht mit einem Standardpaket, sondern mit einer klaren Abstimmung.</p>
        </div>
        <div className="promise-grid">
          <article><span className="geo geo-one" aria-hidden="true"/><strong>Passend statt pauschal</strong><p>Leistung und Umfang orientieren sich an der tatsächlichen Aufgabe vor Ort.</p></article>
          <article><span className="geo geo-two" aria-hidden="true"/><strong>Direkter Kontakt</strong><p>Sie sprechen persönlich mit Ihrem Ansprechpartner – vom ersten Foto bis zum Termin.</p></article>
          <article><span className="geo geo-three" aria-hidden="true"/><strong>Regional unterwegs</strong><p>Kurze Wege in Bottrop-Kirchhellen und im nördlichen Ruhrgebiet.</p></article>
          <article><span className="geo geo-four" aria-hidden="true"/><strong>Klar abgestimmt</strong><p>Aufgabe, Einsatzort und gewünschter Zeitraum werden vorab gemeinsam geklärt.</p></article>
        </div>
      </section>

      <section className="section local" id="gebiet">
        <div className="local-copy">
          <p className="kicker">Lokal für Sie da</p>
          <h2>Service in Bottrop-Kirchhellen und Umgebung.</h2>
          <p>
            N-Service ist Ihr direkter Ansprechpartner für Arbeiten rund ums Haus
            im nördlichen Ruhrgebiet. Kurze Abstimmung, persönlicher Kontakt und
            ein passender Termin – ohne unnötige Umwege.
          </p>
          <div className="locations" aria-label="Einsatzorte">
            <span>Bottrop</span><span>Kirchhellen</span><span>Gladbeck</span><span>Dorsten</span><span>Gelsenkirchen</span><span>Umgebung</span>
          </div>
        </div>
        <div className="local-graphic" aria-hidden="true">
          <div className="map-ring ring-a" />
          <div className="map-ring ring-b" />
          <div className="map-ring ring-c" />
          <div className="map-pin"><span>●</span><strong>BOTTROP</strong><small>N-SERVICE</small></div>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="section-heading faq-heading">
          <p className="kicker">Häufige Fragen</p>
          <h2>Schnell beantwortet.</h2>
          <p>Die wichtigsten Informationen zu Leistungen, Einsatzgebiet und Anfrage.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<i>+</i></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact" id="kontakt">
        <p className="kicker">Direkt anfragen</p>
        <h2>Was können wir<br /><em>für Sie anpacken?</em></h2>
        <p>Schreiben Sie kurz, worum es geht. Fotos helfen bei einer schnellen Einschätzung.</p>
        <div className="contact-actions">
          <a className="button button-light" href="https://wa.me/491792273411?text=Hallo%20N-Service%2C%20ich%20m%C3%B6chte%20eine%20Leistung%20anfragen.">WhatsApp öffnen <span>↗</span></a>
          <a className="contact-link" href="tel:+491792273411">+49 179 2273411</a>
          <a className="contact-link" href="mailto:info@n-service-bottrop.de">info@n-service-bottrop.de</a>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><span className="brand-mark">N<span>✓</span></span><span>N-SERVICE</span></div>
        <p>Entrümpelung · Garten · Reinigung · Hausmeisterservice · Transporte</p>
        <div><span>Viktor Nesterenko · Inhaber</span><span>Bottrop-Kirchhellen & Umgebung</span><span>Termine nach Vereinbarung</span></div>
      </footer>

      <PhinixBanner />

      <a className="mobile-whatsapp" href="https://wa.me/491792273411?text=Hallo%20N-Service%2C%20ich%20m%C3%B6chte%20eine%20Leistung%20anfragen." aria-label="N-Service per WhatsApp kontaktieren">
        WhatsApp <span>↗</span>
      </a>
    </main>
  );
}
