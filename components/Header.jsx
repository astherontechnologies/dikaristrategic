"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className={`top${open ? " is-open" : ""}`} id="top">
        <div className="wrap top__bar">
          <a
            className="logo"
            href="#start"
            aria-label="Dikari Strategic, ke atas"
          >
            <i className="logo__mark mark-mask" aria-hidden="true"></i>
            <span className="logo__word">
              Dikari Strategic<small>Make it and Sale!</small>
            </span>
          </a>
          <nav
            className="nav"
            id="nav"
            onClick={(event) => {
              if (event.target.closest("a")) setOpen(false);
            }}
            aria-label="Utama"
          >
            <a href="#layanan">Layanan</a>
            <a href="#karya">Karya</a>
            <a href="#network">Network</a>
            <a href="#cara-kerja">Cara kerja</a>
            <a href="#bonus">Main</a>
            <a href="#kontak">Kontak</a>
          </nav>
          <a className="btn btn--go" href="#kontak">
            Mulai proyek
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            aria-controls="nav"
          >
            {open ? "TUTUP" : "MENU"}
          </button>
        </div>
        <div className="hud" aria-hidden="true">
          <div className="wrap">
            <span>MAKE IT</span>
            <span className="hud__bar">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </span>
            <span className="hud__end">AND SALE!</span>
            <span className="hud__where" id="hud-where">
              ARENA
            </span>
          </div>
        </div>
      </header>
    </>
  );
}
