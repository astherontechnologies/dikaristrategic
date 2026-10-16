export default function Quest() {
  return (
    <>
      <section className="quest-sec" id="cara-kerja">
        <div className="quest-pin" id="quest-pin">
          <div className="quest-view" id="quest-view">
            <svg
              className="ring"
              id="ring"
              viewBox="0 0 400 400"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="ringp"
                  d="M200 200m-158 0a158 158 0 1 1 316 0a158 158 0 1 1-316 0"
                ></path>
              </defs>
              <text>
                <textPath href="#ringp">
                  SCOUT &#8226; STRATEGY &#8226; MAKE IT &#8226; AND SALE!
                  &#8226; SCOUT &#8226; STRATEGY &#8226; MAKE IT &#8226; AND
                  SALE! &#8226;
                </textPath>
              </text>
            </svg>
            <div className="wrap quest-head">
              <div>
                <h2 className="h2">Cara kita jalan bareng.</h2>
                <p className="lede">
                  Empat tahap, satu tim yang sama dari awal sampai akhir.
                  <span className="pin-only">
                    {" "}
                    Scroll untuk menemani Dika menyelesaikan quest.
                  </span>
                </p>
              </div>
              <div className="qhud" aria-hidden="true">
                <span>MAKE IT</span>
                <span className="qbar" id="qbar">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span className="qhud__end">AND SALE!</span>
                <span className="qhud__leads" id="qleads">
                  LEADS 0
                </span>
              </div>
            </div>
            <div className="quest-world" id="quest-world">
              <div className="qw-far" id="qw-far" aria-hidden="true"></div>
              <div className="qw-ground" aria-hidden="true"></div>
              <ol className="qposts">
                <li className="qpost">
                  <div className="qpost__card">
                    <span className="qpost__no">Tahap 1 dari 4</span>
                    <h3>SCOUT</h3>
                    <p>
                      Riset brand, audiens, kompetitor, dan data kanal. Hasilnya
                      peta masalah dan peluang.
                    </p>
                    <span className="qpost__bar" aria-hidden="true">
                      <i className="on"></i>
                      <i className="on"></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </span>
                  </div>
                  <span className="qpost__pole" aria-hidden="true"></span>
                </li>
                <li className="qpost">
                  <div className="qpost__card">
                    <span className="qpost__no">Tahap 2 dari 4</span>
                    <h3>STRATEGY</h3>
                    <p>
                      Positioning, pesan utama, dan rencana kanal disusun jadi
                      satu dokumen kerja yang disepakati bersama.
                    </p>
                    <span className="qpost__bar" aria-hidden="true">
                      <i className="on"></i>
                      <i className="on"></i>
                      <i className="on"></i>
                      <i className="on"></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </span>
                  </div>
                  <span className="qpost__pole" aria-hidden="true"></span>
                </li>
                <li className="qpost">
                  <div className="qpost__card">
                    <span className="qpost__no">Tahap 3 dari 4</span>
                    <h3>MAKE IT</h3>
                    <p>
                      Ide kreatif diproduksi: key visual, video, konten sosial,
                      sampai materi event.
                    </p>
                    <span className="qpost__bar" aria-hidden="true">
                      <i className="on"></i>
                      <i className="on"></i>
                      <i className="on"></i>
                      <i className="on"></i>
                      <i className="on"></i>
                      <i className="on"></i>
                      <i></i>
                      <i></i>
                    </span>
                  </div>
                  <span className="qpost__pole" aria-hidden="true"></span>
                </li>
                <li className="qpost">
                  <div className="qpost__card">
                    <span className="qpost__no">Tahap 4 dari 4</span>
                    <h3>AND SALE!</h3>
                    <p>
                      Kampanye tayang, iklan dioptimasi, dan hasilnya dilaporkan
                      dengan angka.
                    </p>
                    <span className="qpost__bar" aria-hidden="true">
                      <i className="on"></i>
                      <i className="on"></i>
                      <i className="on"></i>
                      <i className="on"></i>
                      <i className="on"></i>
                      <i className="on"></i>
                      <i className="on"></i>
                      <i className="on"></i>
                    </span>
                  </div>
                  <span className="qpost__pole" aria-hidden="true"></span>
                </li>
              </ol>
            </div>
            <div className="walker" id="walker" aria-hidden="true"></div>
          </div>
        </div>
      </section>
    </>
  );
}
