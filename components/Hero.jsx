export default function Hero() {
  return (
    <>
      <section className="hero paper" id="start">
        <canvas className="hero__trail" id="trail" aria-hidden="true"></canvas>
        <div className="wrap">
          <div className="hero__top">
            <h1>Bikin brand kamu jadi pemain utama.</h1>
            <div className="hero__side">
              <p className="lede">
                Dikari Strategic adalah agensi strategi pemasaran dan
                pengembangan IP dari Jakarta dan Yogyakarta. Kami susun
                strateginya, produksi kontennya bareng studio di Dayana Network,
                lalu jalankan kampanyenya sampai terjual.
              </p>
              <div className="cta-row">
                <a className="btn btn--go" href="#kontak">
                  Mulai proyek
                </a>
                <a className="btn" href="#karya">
                  Lihat karya
                </a>
              </div>
            </div>
          </div>
          <span
            className="stk"
            data-speed="-.06"
            style={{
              "--s": "84px",
              "--r": "-10deg",
              "--c": "var(--orange)",
              right: "-18px",
              top: "clamp(300px,34vw,420px)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M13 22h-2v-2h2v2Zm-2-2H9v-2h2v2Zm4 0h-2v-2h2v2Zm-6-2H7v-2h2v2Zm8 0h-2v-2h2v2ZM7 16H5v-2h2v2Zm12 0h-2v-2h2v2ZM5 14H3v-2h2v2Zm16 0h-2v-2h2v2ZM3 12H1V6h2v6Zm20 0h-2V6h2v6ZM13 8h-2V6h2v2ZM5 6H3V4h2v2Zm6 0H9V4h2v2Zm4 0h-2V4h2v2Zm6 0h-2V4h2v2ZM9 4H5V2h4v2Zm10 0h-4V2h4v2Z"></path>
            </svg>
          </span>
          <span
            className="stk"
            data-speed=".05"
            style={{
              "--s": "64px",
              "--r": "12deg",
              "--c": "var(--blue)",
              left: "-14px",
              bottom: "56px",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M4 13h8v6h2v2h-2v2h-2v-8H2v-4h2v2Zm12 6h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2v-2h2v2Zm-6-6h8v4h-2v-2h-8V5h-2V3h2V1h2v8Zm-8 2H4V9h2v2Zm2-2H6V7h2v2Zm2-2H8V5h2v2Z"></path>
            </svg>
          </span>
          <div className="arena screen-bg" id="arena">
            <canvas
              id="arena-cv"
              aria-label="Arena interaktif: blok pixel yang bisa diseret, dilempar, dan disusun menjadi logo Dikari"
            ></canvas>
            <div
              className="arena__fallback mark-mask"
              id="arena-fallback"
              hidden
            ></div>
            <div className="marks" aria-hidden="true">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div className="arena__hud">
              <div className="arena__row">
                <span id="arena-status" role="status">
                  ARENA 01 / LOADING (0%)
                </span>
                <span className="arena__btns">
                  <button className="arena__btn" id="arena-btn" type="button">
                    SUSUN LOGO
                  </button>
                </span>
              </div>
              <div></div>
              <div className="arena__row">
                <span className="arena__hint" id="arena-hint">
                  Seret dan lempar bloknya. Klik logo untuk meledakkannya.
                </span>
                <span className="arena__tag">Make it and Sale!</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
