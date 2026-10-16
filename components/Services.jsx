"use client";

import { useState } from "react";

export default function Services() {
  const ids = ["brand", "mkt", "ads", "sos", "kon", "ip"];
  const [active, setActive] = useState("brand");
  const onTabKey = (event, id) => {
    const delta = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[
      event.key
    ];
    let next;
    if (delta) next = ids[(ids.indexOf(id) + delta + ids.length) % ids.length];
    if (event.key === "Home") next = ids[0];
    if (event.key === "End") next = ids[ids.length - 1];
    if (!next) return;
    event.preventDefault();
    setActive(next);
    document.getElementById("t-" + next)?.focus();
  };
  return (
    <>
      <section className="menu-sec screen-bg on-screen" id="layanan">
        <div className="marks" aria-hidden="true">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className="wrap">
          <div className="meta-row">
            <span>DIKARI.OS / MENU</span>
            <span>6 LAYANAN</span>
          </div>
          <div className="sec-head">
            <div>
              <span className="pixel-tag">MENU</span>
              <h2 className="h2">Enam layanan, satu tim.</h2>
            </div>
            <p className="hint">Pilih layanan dengan klik atau tombol panah.</p>
          </div>
          <div className="menu">
            <div
              className="menu__list"
              role="tablist"
              aria-label="Layanan"
              aria-orientation="vertical"
            >
              <button
                className="menu__item"
                role="tab"
                id="t-brand"
                aria-controls="p-brand"
                aria-selected={active === "brand"}
                tabIndex={active === "brand" ? 0 : -1}
                onClick={() => setActive("brand")}
                onKeyDown={(event) => onTabKey(event, "brand")}
              >
                Branding &amp; brand strategy
              </button>
              <button
                className="menu__item"
                role="tab"
                id="t-mkt"
                aria-controls="p-mkt"
                aria-selected={active === "mkt"}
                tabIndex={active === "mkt" ? 0 : -1}
                onClick={() => setActive("mkt")}
                onKeyDown={(event) => onTabKey(event, "mkt")}
              >
                Marketing strategy
              </button>
              <button
                className="menu__item"
                role="tab"
                id="t-ads"
                aria-controls="p-ads"
                aria-selected={active === "ads"}
                tabIndex={active === "ads" ? 0 : -1}
                onClick={() => setActive("ads")}
                onKeyDown={(event) => onTabKey(event, "ads")}
              >
                Advertising online &amp; offline
              </button>
              <button
                className="menu__item"
                role="tab"
                id="t-sos"
                aria-controls="p-sos"
                aria-selected={active === "sos"}
                tabIndex={active === "sos" ? 0 : -1}
                onClick={() => setActive("sos")}
                onKeyDown={(event) => onTabKey(event, "sos")}
              >
                Social media front to end
              </button>
              <button
                className="menu__item"
                role="tab"
                id="t-kon"
                aria-controls="p-kon"
                aria-selected={active === "kon"}
                tabIndex={active === "kon" ? 0 : -1}
                onClick={() => setActive("kon")}
                onKeyDown={(event) => onTabKey(event, "kon")}
              >
                Content creation
              </button>
              <button
                className="menu__item"
                role="tab"
                id="t-ip"
                aria-controls="p-ip"
                aria-selected={active === "ip"}
                tabIndex={active === "ip" ? 0 : -1}
                onClick={() => setActive("ip")}
                onKeyDown={(event) => onTabKey(event, "ip")}
              >
                IP development &amp; licensing
              </button>
            </div>
            <div>
              <article
                className="panel"
                role="tabpanel"
                id="p-brand"
                aria-labelledby="t-brand"
                hidden={active !== "brand"}
              >
                <div className="panel__top">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M3 3h2v12H3zm16 0h2v12h-2zm-8 0h2v2h-2zM9 5h2v2H9zM5 5h2v2H5z"></path>
                    <path d="M3 3h2v2H3zm4 4h2v2H7zm6-2h2v2h-2zm2 2h2v2h-2zm2-2h2v2h-2zM5 15h14v2H5zm-2 4h18v2H3z"></path>
                  </svg>
                  <h3>Branding &amp; brand strategy</h3>
                </div>
                <p>
                  Kami cari posisi yang bikin brand kamu beda, lalu terjemahkan
                  jadi identitas yang konsisten di semua titik sentuh: dari logo
                  dan tagline sampai feed media sosial.
                </p>
                <div className="panel__cols">
                  <div>
                    <p className="panel__label">YANG KAMU DAPAT</p>
                    <ul className="ticks">
                      <li>Riset dan positioning</li>
                      <li>Brand identity dan guideline</li>
                      <li>Tagline dan naming</li>
                      <li>Identitas visual untuk media sosial</li>
                    </ul>
                  </div>
                  <div>
                    <p className="panel__label">PERNAH KAMI KERJAKAN</p>
                    <div className="chips">
                      <span>HS: Berani Kita Beda</span>
                      <span>BCA Life Eleven Up</span>
                      <span>PAUL</span>
                      <span>Pegadaian</span>
                    </div>
                  </div>
                </div>
              </article>
              <article
                className="panel"
                role="tabpanel"
                id="p-mkt"
                aria-labelledby="t-mkt"
                hidden={active !== "mkt"}
              >
                <div className="panel__top">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M4 2h16v2H4zm0 18h16v2H4zM2 4h2v16H2zm18 0h2v16h-2zm-9 8h2v6h-2zm-4 2h2v4H7zm8-8h2v12h-2z"></path>
                  </svg>
                  <h3>Marketing strategy</h3>
                </div>
                <p>
                  Rencana go-to-market berbasis data: siapa yang dituju, lewat
                  kanal apa, dengan pesan apa, dan angka apa yang dipakai untuk
                  mengukur hasilnya.
                </p>
                <div className="panel__cols">
                  <div>
                    <p className="panel__label">YANG KAMU DAPAT</p>
                    <ul className="ticks">
                      <li>Riset pasar dan kompetitor</li>
                      <li>Segmentasi dan persona</li>
                      <li>Rencana kanal dan anggaran</li>
                      <li>KPI dan format laporan</li>
                    </ul>
                  </div>
                  <div>
                    <p className="panel__label">COCOK UNTUK</p>
                    <div className="chips">
                      <span>Peluncuran produk</span>
                      <span>Masuk pasar baru</span>
                      <span>Brand yang mau reposisi</span>
                    </div>
                  </div>
                </div>
              </article>
              <article
                className="panel"
                role="tabpanel"
                id="p-ads"
                aria-labelledby="t-ads"
                hidden={active !== "ads"}
              >
                <div className="panel__top">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M4 6h12v2H4zM2 8h2v6H2zm2 6h12v2H4zM20 2h2v18h-2zm-2 16h2v2h-2zm-2-2h2v2h-2zm0-12h2v2h-2zm2-2h2v2h-2zM8 8h2v6H8zm-2 8h2v4H6zm2 4h4v2H8zm2-4h2v4h-2z"></path>
                  </svg>
                  <h3>Advertising online &amp; offline</h3>
                </div>
                <p>
                  Kampanye dari ide besar sampai materi yang siap tayang, di
                  layar ponsel maupun di jalan. Satu key visual, diturunkan ke
                  semua format.
                </p>
                <div className="panel__cols">
                  <div>
                    <p className="panel__label">YANG KAMU DAPAT</p>
                    <ul className="ticks">
                      <li>Konsep kampanye dan key visual</li>
                      <li>Materi iklan digital</li>
                      <li>OOH, POSM, dan materi event</li>
                      <li>Media plan</li>
                    </ul>
                  </div>
                  <div>
                    <p className="panel__label">PERNAH KAMI KERJAKAN</p>
                    <div className="chips">
                      <span>Bank Mandiri KV Thematic</span>
                      <span>Kalender Mandiri 2025</span>
                      <span>So Nice Puaz Gazz Party</span>
                    </div>
                  </div>
                </div>
              </article>
              <article
                className="panel"
                role="tabpanel"
                id="p-sos"
                aria-labelledby="t-sos"
                hidden={active !== "sos"}
              >
                <div className="panel__top">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M20 2H4v2h16zm0 14H6v2h14zm2-12h-2v12h2zM4 4H2v18h2zm2 14H4v2h2zm0-6h4v2H6zm0-4h8v2H6z"></path>
                  </svg>
                  <h3>Social media front to end</h3>
                </div>
                <p>
                  Kami pegang akun brand dari hulu ke hilir: strategi konten,
                  produksi, unggah, balas komentar, sampai laporan bulanan yang
                  bisa dibaca atasan.
                </p>
                <div className="panel__cols">
                  <div>
                    <p className="panel__label">YANG KAMU DAPAT</p>
                    <ul className="ticks">
                      <li>Strategi dan pilar konten</li>
                      <li>Kalender dan produksi konten</li>
                      <li>Community management</li>
                      <li>Laporan performa bulanan</li>
                    </ul>
                  </div>
                  <div>
                    <p className="panel__label">PERNAH KAMI KERJAKAN</p>
                    <div className="chips">
                      <span>PAUL</span>
                      <span>Pegadaian</span>
                      <span>Yakult Ramadhan</span>
                    </div>
                  </div>
                </div>
              </article>
              <article
                className="panel"
                role="tabpanel"
                id="p-kon"
                aria-labelledby="t-kon"
                hidden={active !== "kon"}
              >
                <div className="panel__top">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M20 17V7h2v10zm-2-2V9h2v6zM2 7h2v10H2zm14 0h2v10h-2zM4 5h12v2H4zm0 12h12v2H4z"></path>
                  </svg>
                  <h3>Content creation</h3>
                </div>
                <p>
                  Foto, video, dan motion diproduksi bareng Dayana Pictures dan
                  Dayana Studios. Kualitas produksi film, dikemas untuk feed.
                </p>
                <div className="panel__cols">
                  <div>
                    <p className="panel__label">YANG KAMU DAPAT</p>
                    <ul className="ticks">
                      <li>Video pendek dan iklan</li>
                      <li>Foto produk dan lifestyle</li>
                      <li>Motion graphic dan animasi</li>
                      <li>VFX dan pasca-produksi</li>
                    </ul>
                  </div>
                  <div>
                    <p className="panel__label">PERNAH KAMI KERJAKAN</p>
                    <div className="chips">
                      <span>Yakult Ramadhan short video</span>
                      <span>BCA Life Eleven Up</span>
                    </div>
                  </div>
                </div>
              </article>
              <article
                className="panel"
                role="tabpanel"
                id="p-ip"
                aria-labelledby="t-ip"
                hidden={active !== "ip"}
              >
                <div className="panel__top">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M4 4h16v2H4zm0 14h16v2H4zM2 6h2v12H2zm18 0h2v12h-2zM8 9h2v6H8z"></path>
                    <path d="M6 11h6v2H6zm8-2h2v2h-2zm2 4h2v2h-2z"></path>
                  </svg>
                  <h3>IP development &amp; licensing</h3>
                </div>
                <p>
                  Kami bantu membangun karakter dan dunia cerita yang bisa hidup
                  lintas media, lalu membuka jalan ke lisensi, merchandise, dan
                  kolaborasi brand.
                </p>
                <div className="panel__cols">
                  <div>
                    <p className="panel__label">YANG KAMU DAPAT</p>
                    <ul className="ticks">
                      <li>Pengembangan karakter dan dunia cerita</li>
                      <li>Strategi rilis lintas platform</li>
                      <li>Skema lisensi dan merchandise</li>
                      <li>Kemitraan brand</li>
                    </ul>
                  </div>
                  <div>
                    <p className="panel__label">DI DAYANA NETWORK</p>
                    <div className="chips">
                      <span>Mira: Petualangan di Pesisir</span>
                      <span>bersama Dayana Studios</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
