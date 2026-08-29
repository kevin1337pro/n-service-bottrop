import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entrümpelung, Garten & Hausmeisterservice",
  description:
    "N-Service in Bottrop-Kirchhellen: Entrümpelung, Haushaltsauflösung, Gartenpflege, Reinigung, Hausmeisterservice, Transporte und Abholungen.",
};

const services = [
  {
    number: "01",
    title: "Entrümpelung & Haushaltsauflösung",
    text: "Keller, Wohnung, Garage oder komplettes Haus – persönlich besprochen und zuverlässig umgesetzt.",
    keywords: "Wohnung · Keller · Garage",
  },
  {
    number: "02",
    title: "Garten- & Grünpflege",
    text: "Regelmäßige oder einmalige Pflege für Gärten, Grünflächen und Außenbereiche.",
    keywords: "Rasen · Hecken · Grünflächen",
  },
  {
    number: "03",
    title: "Reinigung",
    text: "Saubere Lösungen für private und gewerbliche Räume – passend zum tatsächlichen Bedarf.",
    keywords: "Haushalt · Objekt · Außenbereich",
  },
  {
    number: "04",
    title: "Hausmeisterservice",
    text: "Praktische Hilfe rund um Immobilie und Grundstück, flexibel nach Absprache.",
    keywords: "Kontrolle · Pflege · Kleinaufgaben",
  },
  {
    number: "05",
    title: "Transporte & Abholungen",
    text: "Abholung und Transport sperriger Gegenstände in Bottrop und der Umgebung.",
    keywords: "Abholung · Transport · Lieferung",
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
              <div className="service-top"><span>{service.number}</span><i aria-hidden="true">↗</i></div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <small>{service.keywords}</small>
            </article>
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

      <a className="mobile-whatsapp" href="https://wa.me/491792273411?text=Hallo%20N-Service%2C%20ich%20m%C3%B6chte%20eine%20Leistung%20anfragen." aria-label="N-Service per WhatsApp kontaktieren">
        WhatsApp <span>↗</span>
      </a>
    </main>
  );
}
