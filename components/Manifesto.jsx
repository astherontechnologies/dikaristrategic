export default function Manifesto() {
  return (
    <>
      <section className="manifesto screen-bg" id="manifesto">
        <figure className="manifesto__bg" aria-hidden="true">
          <img src="/assets/img/tim-px.png" alt="" />
        </figure>
        <div className="marks" aria-hidden="true">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className="wrap">
          <div className="meta-row">
            <span>DIKARI.OS / MANIFESTO</span>
            <span>PLAYER 01 SIAP</span>
          </div>
          <p className="reveal" id="reveal">
            <span>Strategi</span> <span>tanpa</span> <span>eksekusi</span>{" "}
            <span>cuma</span> <span>rencana.</span> <span>Eksekusi</span>{" "}
            <span>tanpa</span> <span>strategi</span> <span>cuma</span>{" "}
            <span>kebetulan.</span> <span>Kami</span> <span>kerjakan</span>{" "}
            <span>keduanya</span> <span>dalam</span> <span>satu</span>{" "}
            <span>tim:</span> <span>dari</span> <span>riset</span>{" "}
            <span>dan</span> <span>ide,</span> <span>produksi</span>{" "}
            <span>sampai</span> <span>iklan</span> <span>tayang,</span>{" "}
            <span>lalu</span> <span>kami</span> <span>ukur</span>{" "}
            <span>sampai</span> <span>terjual.</span>
          </p>
          <p className="giant" aria-hidden="true">
            MAKE IT.<span>AND SALE!</span>
          </p>
        </div>
      </section>
    </>
  );
}
