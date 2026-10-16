export default function Bonus() {
  return (
    <>
      <section className="bonus paper" id="bonus">
        <span
          className="stk"
          data-speed="-.05"
          style={{
            "--s": "70px",
            "--r": "-12deg",
            "--c": "var(--blue)",
            left: "2%",
            top: "40px",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M6 2h6v2H6zM4 4h2v2H4zm8 0h2v2h-2zm-8 8h2v2H4zm8 0h2v2h-2zm-6 2h6v2H6zM2 6h2v6H2zm12 0h2v6h-2z"></path>
            <path d="M14 8h4v2h-4zm-4 10h2v2h-2zm8-8h2v2h-2zm-6 10h2v2h-2zm6-2h2v2h-2z"></path>
            <path d="M12 20h6v2h-6zm-4-6h2v4H8zm12-2h2v6h-2zM7 6h4v2H7z"></path>
            <path d="M9 6h2v6H9zm6 8h2v4h-2zm-1-2h3v2h-3z"></path>
          </svg>
        </span>
        <span
          className="stk"
          data-speed=".06"
          style={{
            "--s": "58px",
            "--r": "10deg",
            "--c": "var(--orange)",
            right: "2.5%",
            bottom: "48px",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M11 1h2v4h-2zm0 22h2v-4h-2zM9 5h2v4H9zm0 14h2v-4H9zm4-14h2v4h-2zm0 14h2v-4h-2zM5 9h4v2H5zm14 0h-4v2h4zM1 11h4v2H1zm22 0h-4v2h4zM5 13h4v2H5zm14 0h-4v2h4zm0-12h2v6h-2z"></path>
            <path d="M17 3h6v2h-6zM3 17h2v2H3zm-2 2h2v2H1zm2 2h2v2H3zm2-2h2v2H5z"></path>
          </svg>
        </span>
        <div className="wrap bonus__in">
          <div className="bonus__copy">
            <span className="pixel-tag">BONUS STAGE</span>
            <h2 className="h2">Main dulu sebentar.</h2>
            <p className="lede">
              Bantu Dika melompati REVISI, DEADLINE, dan ALGORITMA. Lima leads
              jadi satu sale. Skor terbaikmu tersimpan di perangkat ini.
            </p>
          </div>
          <div className="console" id="console">
            <div className="console__row">
              <span id="g-status" role="status">
                1P READY
              </span>
              <span id="g-side">BEST 0</span>
              <button
                className="console__exit"
                id="g-exit"
                type="button"
                hidden
              >
                KELUAR
              </button>
            </div>
            <div className="console__stage">
              <div id="title-screen">
                <div
                  className="console__mark mark-mask"
                  role="img"
                  aria-label="Logo pixel-D Dikari"
                ></div>
                <p className="console__tag">Make it and Sale!</p>
              </div>
              <canvas
                className="game"
                id="game"
                width="320"
                height="208"
                tabIndex="0"
                hidden
                aria-label="Mini game Make it and Sale. Tekan spasi atau ketuk layar untuk melompat."
              ></canvas>
            </div>
            <button className="press" id="press" type="button">
              PRESS START
            </button>
            <p className="console__help" id="g-help" hidden>
              Spasi, panah atas, atau ketuk untuk lompat. Kumpulkan 5 leads
              untuk 1 sale.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
