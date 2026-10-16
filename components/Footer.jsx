export default function Footer() {
  return (
    <>
      <div className="checker" aria-hidden="true"></div>
      <footer className="foot">
        <div className="wrap">
          <div className="foot__in">
            <div>
              <a className="logo" href="#start">
                <i className="logo__mark mark-mask" aria-hidden="true"></i>
                <span className="logo__word">
                  Dikari Strategic<small>Make it and Sale!</small>
                </span>
              </a>
              <p className="foot__note">
                Bagian dari Dayana Network, True Creative Network.
              </p>
            </div>
            <div>
              <h4>JELAJAHI</h4>
              <ul>
                <li>
                  <a href="#layanan">Layanan</a>
                </li>
                <li>
                  <a href="#karya">Karya</a>
                </li>
                <li>
                  <a href="#cara-kerja">Cara kerja</a>
                </li>
                <li>
                  <a href="#bonus">Main</a>
                </li>
                <li>
                  <a href="#kontak">Kontak</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>NETWORK</h4>
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/dayanapictures/"
                    target="_blank"
                    rel="noopener"
                  >
                    Dayana Pictures
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/dayana.studios/"
                    target="_blank"
                    rel="noopener"
                  >
                    Dayana Studios
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4>IKUTI</h4>
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/dikaristrategic/"
                    target="_blank"
                    rel="noopener"
                  >
                    @dikaristrategic
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="foot__base">
            <span>&copy; 2026 PT Prestasi Pemuda Pemudi Berdikari</span>
            <span title="Kode rahasia">
              &uarr;&uarr;&darr;&darr;&larr;&rarr;&larr;&rarr; B A
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
