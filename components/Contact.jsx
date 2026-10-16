"use client";

import { useBrief } from "../lib/use-brief";

export default function Contact() {
  const {
    fields,
    change,
    submit,
    lines,
    status,
    copyBrief,
    copyEmail,
    emailStatus,
    outputRef,
    copyRef,
    emailRef,
  } = useBrief();
  return (
    <>
      <section className="contact-sec screen-bg on-screen" id="kontak">
        <div className="marks" aria-hidden="true">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className="wrap">
          <div className="meta-row">
            <span>DIKARI.OS / CONTINUE?</span>
            <span>BRIEF.TXT</span>
          </div>
          <div className="continue" aria-hidden="true">
            <span className="pixel-tag">CONTINUE?</span>
            <span className="yes">YES</span>
            <span className="no">NO</span>
          </div>
          <h2 className="h2" style={{ marginTop: "18px" }}>
            Ceritakan proyekmu.
          </h2>
          <div className="contact">
            <form className="form" id="brief-form" noValidate onSubmit={submit}>
              <fieldset className="modes">
                <legend className="lbl">MAU MAIN DI MODE APA?</legend>
                <input
                  type="radio"
                  name="mode"
                  id="m-brand"
                  value="Brand baru"
                  checked={fields.mode === "Brand baru"}
                  onChange={change}
                />
                <label htmlFor="m-brand">Brand baru</label>
                <input
                  type="radio"
                  name="mode"
                  id="m-kamp"
                  value="Kampanye"
                  checked={fields.mode === "Kampanye"}
                  onChange={change}
                />
                <label htmlFor="m-kamp">Kampanye</label>
                <input
                  type="radio"
                  name="mode"
                  id="m-sos"
                  value="Sosial media"
                  checked={fields.mode === "Sosial media"}
                  onChange={change}
                />
                <label htmlFor="m-sos">Sosial media</label>
                <input
                  type="radio"
                  name="mode"
                  id="m-kon"
                  value="Konten"
                  checked={fields.mode === "Konten"}
                  onChange={change}
                />
                <label htmlFor="m-kon">Konten</label>
                <input
                  type="radio"
                  name="mode"
                  id="m-ip"
                  value="IP"
                  checked={fields.mode === "IP"}
                  onChange={change}
                />
                <label htmlFor="m-ip">IP</label>
              </fieldset>
              <div className="field-row">
                <div className="field">
                  <label className="lbl" htmlFor="f-nama">
                    NAMA
                  </label>
                  <input
                    id="f-nama"
                    name="nama"
                    value={fields.nama}
                    onChange={change}
                    autoComplete="name"
                    placeholder="Nama kamu"
                  />
                </div>
                <div className="field">
                  <label className="lbl" htmlFor="f-brand">
                    BRAND / PERUSAHAAN
                  </label>
                  <input
                    id="f-brand"
                    name="brand"
                    value={fields.brand}
                    onChange={change}
                    autoComplete="organization"
                    placeholder="Nama brand"
                  />
                </div>
              </div>
              <div className="field">
                <label className="lbl" htmlFor="f-waktu">
                  TARGET WAKTU
                </label>
                <select
                  id="f-waktu"
                  name="waktu"
                  value={fields.waktu}
                  onChange={change}
                >
                  <option>Kurang dari 1 bulan</option>
                  <option>1 sampai 3 bulan</option>
                  <option>Lebih dari 3 bulan</option>
                  <option>Belum tahu</option>
                </select>
              </div>
              <div className="field">
                <label className="lbl" htmlFor="f-cerita">
                  CERITA SINGKAT
                </label>
                <textarea
                  id="f-cerita"
                  name="cerita"
                  value={fields.cerita}
                  onChange={change}
                  placeholder="Apa yang mau dicapai, siapa audiensnya, dan apa yang sudah dicoba."
                ></textarea>
              </div>
              <div>
                <button className="btn btn--go" type="submit">
                  Susun brief
                </button>
              </div>
            </form>
            <div>
              <div className="term" aria-live="polite">
                <pre id="brief-out" ref={outputRef}>
                  <b>&gt; BRIEF.TXT</b>
                  {"\n"}
                  {lines.map(([label, value], index) => (
                    <span key={index}>
                      <em>{label}:</em>
                      {value}
                      {index < lines.length - 1 ? "\n" : ""}
                    </span>
                  ))}
                </pre>
                <div className="term__actions">
                  <button
                    className="btn"
                    type="button"
                    id="copy-brief"
                    ref={copyRef}
                    onClick={copyBrief}
                  >
                    Salin brief
                  </button>
                  <span className="term__status" id="brief-status">
                    {status}
                  </span>
                </div>
              </div>
              <ul className="lines">
                <li>
                  <span id="mail" ref={emailRef}>
                    dikaristrategic@gmail.com
                  </span>
                  <button
                    className="copy"
                    type="button"
                    data-copy="mail"
                    onClick={copyEmail}
                  >
                    {emailStatus}
                  </button>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/dikaristrategic/"
                    target="_blank"
                    rel="noopener"
                  >
                    instagram.com/dikaristrategic
                  </a>
                  <span></span>
                </li>
                <li>
                  <span>
                    Jakarta
                    <small>
                      Jl. Kp. Utan No. 35, RT 15/RW 5, Ragunan, Ps. Minggu,
                      Jakarta Selatan 12550
                    </small>
                  </span>
                  <span></span>
                </li>
                <li>
                  <span>
                    Yogyakarta
                    <small>
                      Palem Sewu, Panggungharjo, Sewon, Bantul, DIY 55188
                    </small>
                  </span>
                  <span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
