"use client";

import { useEffect, useState } from "react";

export default function PhinixBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <aside className={`phinix-banner ${open ? "is-open" : "is-closed"}`} aria-label="Website erstellt von Phinix Media">
      <button
        className="phinix-toggle"
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-label={open ? "Phinix.Media Hinweis einklappen" : "Phinix.Media Hinweis öffnen"}
      >
        <span aria-hidden="true">{open ? "×" : "P"}</span>
      </button>
      <div className="phinix-copy">
        <span>Design-Hinweis</span>
        <p>Diese wunderschöne Seite wurde erstellt durch <strong>Phinix.Media</strong>.</p>
        <small>Ihr Unternehmen – unübersehbar.</small>
      </div>
      <div className="phinix-brand" aria-label="Phinix.Media – Connecting People">
        <img className="phinix-symbol" src="/phinix-logo-white.png" alt="" width="2302" height="2302" />
        <img className="phinix-wordmark" src="/phinix-wordmark-black.png" alt="Phinix.Screens – Connecting People" width="5284" height="1709" />
      </div>
    </aside>
  );
}
