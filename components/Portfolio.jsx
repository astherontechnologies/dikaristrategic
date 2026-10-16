"use client";

import { useState } from "react";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [revealed, setRevealed] = useState(new Set());
  const toggle = (index) =>
    setRevealed((previous) => {
      const next = new Set(previous);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  const onCardKey = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle(index);
    }
  };
  return (
    <>
      <section className="stage-sec paper" id="karya">
        <span
          className="stk"
          data-speed="-.05"
          style={{
            "--s": "76px",
            "--r": "8deg",
            "--c": "var(--orange)",
            right: "3%",
            top: "70px",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M16 17H13V19H15V21H9V19H11V17H8V15H16V17ZM18 5H22V11H20V7H18V11H20V13H18V15H16V5H8V15H6V13H4V11H6V7H4V11H2V5H6V3H18V5Z"></path>
          </svg>
        </span>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2 className="h2">Stage clear.</h2>
              <p className="lede">
                Proyek Dikari 2024&ndash;2026. Tiap karya tampil dalam mode
                pixel; arahkan kursor atau ketuk untuk melihat versi aslinya.
              </p>
            </div>
          </div>
          <div className="filters" role="group" aria-label="Saring karya">
            <button
              type="button"
              data-f="all"
              aria-pressed={filter === "all"}
              onClick={() => setFilter("all")}
            >
              SEMUA<b>8</b>
            </button>
            <button
              type="button"
              data-f="kv"
              aria-pressed={filter === "kv"}
              onClick={() => setFilter("kv")}
            >
              KEY VISUAL<b>3</b>
            </button>
            <button
              type="button"
              data-f="branding"
              aria-pressed={filter === "branding"}
              onClick={() => setFilter("branding")}
            >
              BRANDING<b>4</b>
            </button>
            <button
              type="button"
              data-f="sosmed"
              aria-pressed={filter === "sosmed"}
              onClick={() => setFilter("sosmed")}
            >
              SOSIAL MEDIA<b>3</b>
            </button>
            <button
              type="button"
              data-f="kampanye"
              aria-pressed={filter === "kampanye"}
              onClick={() => setFilter("kampanye")}
            >
              KAMPANYE<b>2</b>
            </button>
          </div>
          <div className="stages">
            <article
              className={`stage${revealed.has(0) ? " is-real" : ""}`}
              tabIndex="0"
              data-tags="kampanye sosmed"
              aria-label="Yakult, Ramadhan short video, 2026"
              hidden={
                filter !== "all" && !["kampanye", "sosmed"].includes(filter)
              }
              onClick={() => toggle(0)}
              onKeyDown={(event) => onCardKey(event, 0)}
            >
              <div className="stage__img">
                <img
                  className="px"
                  src="/assets/img/yakult-ramadhan-px.png"
                  alt=""
                />
                <img
                  className="real"
                  src="/assets/img/yakult-ramadhan.jpg"
                  alt="Yakult: Ramadhan short video"
                  loading="lazy"
                />
                <span className="stage__state" aria-hidden="true">
                  CLEAR
                </span>
              </div>
              <div className="stage__body">
                <div className="stage__meta">
                  <span>2026</span>
                  <span>Kampanye sosmed</span>
                </div>
                <h3>Yakult</h3>
                <p>Ramadhan short video</p>
              </div>
            </article>
            <article
              className={`stage${revealed.has(1) ? " is-real" : ""}`}
              tabIndex="0"
              data-tags="branding"
              aria-label="BCA Life, Ultima Race Eleven Up, 2025"
              hidden={filter !== "all" && !["branding"].includes(filter)}
              onClick={() => toggle(1)}
              onKeyDown={(event) => onCardKey(event, 1)}
            >
              <div className="stage__img">
                <img
                  className="px"
                  src="/assets/img/bca-elevenup-px.png"
                  alt=""
                />
                <img
                  className="real"
                  src="/assets/img/bca-elevenup.jpg"
                  alt="BCA Life: Ultima Race Eleven Up"
                  loading="lazy"
                />
                <span className="stage__state" aria-hidden="true">
                  CLEAR
                </span>
              </div>
              <div className="stage__body">
                <div className="stage__meta">
                  <span>2025</span>
                  <span>Branding</span>
                </div>
                <h3>BCA Life</h3>
                <p>Ultima Race Eleven Up</p>
              </div>
            </article>
            <article
              className={`stage${revealed.has(2) ? " is-real" : ""}`}
              tabIndex="0"
              data-tags="branding"
              aria-label="Rokok HS, Tagline Berani Kita Beda, 2025"
              hidden={filter !== "all" && !["branding"].includes(filter)}
              onClick={() => toggle(2)}
              onKeyDown={(event) => onCardKey(event, 2)}
            >
              <div className="stage__img">
                <img
                  className="px"
                  src="/assets/img/hs-berani-kita-beda-px.png"
                  alt=""
                />
                <img
                  className="real"
                  src="/assets/img/hs-berani-kita-beda.jpg"
                  alt="Rokok HS: Tagline Berani Kita Beda"
                  loading="lazy"
                />
                <span className="stage__state" aria-hidden="true">
                  CLEAR
                </span>
              </div>
              <div className="stage__body">
                <div className="stage__meta">
                  <span>2025</span>
                  <span>Ide tagline</span>
                </div>
                <h3>Rokok HS</h3>
                <p>Tagline Berani Kita Beda</p>
              </div>
            </article>
            <article
              className={`stage${revealed.has(3) ? " is-real" : ""}`}
              tabIndex="0"
              data-tags="branding sosmed"
              aria-label="PAUL, Identitas untuk media sosial, 2025"
              hidden={
                filter !== "all" && !["branding", "sosmed"].includes(filter)
              }
              onClick={() => toggle(3)}
              onKeyDown={(event) => onCardKey(event, 3)}
            >
              <div className="stage__img">
                <img className="px" src="/assets/img/paul-px.png" alt="" />
                <img
                  className="real"
                  src="/assets/img/paul.jpg"
                  alt="PAUL: Identitas untuk media sosial"
                  loading="lazy"
                />
                <span className="stage__state" aria-hidden="true">
                  CLEAR
                </span>
              </div>
              <div className="stage__body">
                <div className="stage__meta">
                  <span>2025</span>
                  <span>Brand identity</span>
                </div>
                <h3>PAUL</h3>
                <p>Identitas untuk media sosial</p>
              </div>
            </article>
            <article
              className={`stage${revealed.has(4) ? " is-real" : ""}`}
              tabIndex="0"
              data-tags="branding sosmed"
              aria-label="Pegadaian, Identitas untuk media sosial, 2025"
              hidden={
                filter !== "all" && !["branding", "sosmed"].includes(filter)
              }
              onClick={() => toggle(4)}
              onKeyDown={(event) => onCardKey(event, 4)}
            >
              <div className="stage__img">
                <img className="px" src="/assets/img/pegadaian-px.png" alt="" />
                <img
                  className="real"
                  src="/assets/img/pegadaian.jpg"
                  alt="Pegadaian: Identitas untuk media sosial"
                  loading="lazy"
                />
                <span className="stage__state" aria-hidden="true">
                  CLEAR
                </span>
              </div>
              <div className="stage__body">
                <div className="stage__meta">
                  <span>2025</span>
                  <span>Brand identity</span>
                </div>
                <h3>Pegadaian</h3>
                <p>Identitas untuk media sosial</p>
              </div>
            </article>
            <article
              className={`stage${revealed.has(5) ? " is-real" : ""}`}
              tabIndex="0"
              data-tags="kv"
              aria-label="Bank Mandiri, KV Thematic, 2024"
              hidden={filter !== "all" && !["kv"].includes(filter)}
              onClick={() => toggle(5)}
              onKeyDown={(event) => onCardKey(event, 5)}
            >
              <div className="stage__img">
                <img
                  className="px"
                  src="/assets/img/mandiri-kv-px.png"
                  alt=""
                />
                <img
                  className="real"
                  src="/assets/img/mandiri-kv.jpg"
                  alt="Bank Mandiri: KV Thematic"
                  loading="lazy"
                />
                <span className="stage__state" aria-hidden="true">
                  CLEAR
                </span>
              </div>
              <div className="stage__body">
                <div className="stage__meta">
                  <span>2024</span>
                  <span>Key visual</span>
                </div>
                <h3>Bank Mandiri</h3>
                <p>KV Thematic</p>
              </div>
            </article>
            <article
              className={`stage${revealed.has(6) ? " is-real" : ""}`}
              tabIndex="0"
              data-tags="kv"
              aria-label="Bank Mandiri, Kalender 2025, 2024"
              hidden={filter !== "all" && !["kv"].includes(filter)}
              onClick={() => toggle(6)}
              onKeyDown={(event) => onCardKey(event, 6)}
            >
              <div className="stage__img">
                <img
                  className="px"
                  src="/assets/img/mandiri-kalender-px.png"
                  alt=""
                />
                <img
                  className="real"
                  src="/assets/img/mandiri-kalender.jpg"
                  alt="Bank Mandiri: Kalender 2025"
                  loading="lazy"
                />
                <span className="stage__state" aria-hidden="true">
                  CLEAR
                </span>
              </div>
              <div className="stage__body">
                <div className="stage__meta">
                  <span>2024</span>
                  <span>Key visual</span>
                </div>
                <h3>Bank Mandiri</h3>
                <p>Kalender 2025</p>
              </div>
            </article>
            <article
              className={`stage${revealed.has(7) ? " is-real" : ""}`}
              tabIndex="0"
              data-tags="kv kampanye"
              aria-label="Japfa Food, So Nice: Puaz Gazz Party, 2024"
              hidden={filter !== "all" && !["kv", "kampanye"].includes(filter)}
              onClick={() => toggle(7)}
              onKeyDown={(event) => onCardKey(event, 7)}
            >
              <div className="stage__img">
                <img
                  className="px"
                  src="/assets/img/japfa-sonice-px.png"
                  alt=""
                />
                <img
                  className="real"
                  src="/assets/img/japfa-sonice.jpg"
                  alt="Japfa Food: So Nice: Puaz Gazz Party"
                  loading="lazy"
                />
                <span className="stage__state" aria-hidden="true">
                  CLEAR
                </span>
              </div>
              <div className="stage__body">
                <div className="stage__meta">
                  <span>2024</span>
                  <span>Key visual iklan</span>
                </div>
                <h3>Japfa Food</h3>
                <p>So Nice: Puaz Gazz Party</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
