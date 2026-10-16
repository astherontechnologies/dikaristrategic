"use client";

import { useState } from "react";

export default function Network() {
  const [real, setReal] = useState(false);
  return (
    <>
      <section className="party-sec screen-bg on-screen" id="network">
        <div className="marks" aria-hidden="true">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className="wrap">
          <div className="meta-row">
            <span>DIKARI.OS / PARTY</span>
            <span>3/3 ONLINE</span>
          </div>
          <span className="pixel-tag">PARTY 3/3</span>
          <h2 className="h2" style={{ marginTop: "14px", maxWidth: "16ch" }}>
            Satu party, dari strategi sampai produksi.
          </h2>
          <p className="lede">
            Dikari Strategic adalah bagian dari Dayana Network. Dikari memegang
            strategi dan kampanye, Dayana Pictures memproduksi film dan foto,
            Dayana Studios mengerjakan animasi dan VFX. Kamu cukup bicara dengan
            satu tim.
          </p>
          <div className="slots">
            <div className="slot slot--me">
              <div className="slot__top">
                <span className="slot__dk">
                  <i className="mark-mask" aria-hidden="true"></i>Dikari
                  Strategic
                </span>
                <span className="slot__class">CLASS: BRAND</span>
              </div>
              <p>
                Strategi pemasaran, branding, kampanye iklan, media sosial, dan
                pengembangan IP.
              </p>
              <p className="slot__cred">
                Bank Mandiri, BCA Life, Japfa, Yakult, Pegadaian
              </p>
            </div>
            <div className="slot">
              <div className="slot__top">
                <img
                  src="/assets/logo/dayana-pictures-putih.png"
                  alt="Dayana Pictures"
                />
                <span className="slot__class">CLASS: FILM</span>
              </div>
              <p>
                Produksi film, iklan, video musik, video profil, dan foto
                komersial.
              </p>
              <p className="slot__cred">
                Bank Indonesia, Sahabat Karib, Universitas Merdeka Malang
              </p>
            </div>
            <div className="slot">
              <div className="slot__top">
                <img
                  src="/assets/logo/dayana-studios-putih.png"
                  alt="Dayana Studios"
                />
                <span className="slot__class">CLASS: VFX</span>
              </div>
              <p>Animasi 2D dan 3D, visual effect, dan pasca-produksi.</p>
              <p className="slot__cred">
                Netflix, Google Indonesia, Wuling, Indosat Ooredoo Hutchison
              </p>
            </div>
          </div>
          <figure
            className={`team${real ? " is-real" : ""}`}
            tabIndex="0"
            onClick={() => setReal((value) => !value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setReal((value) => !value);
              }
            }}
          >
            <img className="px" src="/assets/img/tim-px.png" alt="" />
            <img
              className="real"
              src="/assets/img/tim.jpg"
              alt="Tim Dikari Strategic berfoto bersama di studio"
              loading="lazy"
            />
            <figcaption>Tim kami. Arahkan kursor untuk versi asli.</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
