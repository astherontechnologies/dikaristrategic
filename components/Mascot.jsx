export default function Mascot() {
  return (
    <>
      <aside className="dika" id="dika" aria-label="Dika, maskot Dikari">
        <p className="dika__bubble" id="dika-say" aria-live="polite">
          <b>DIKA</b>
          <span id="dika-text">Halo! Aku Dika. Coba lempar blok di arena.</span>
        </p>
        <div className="dika__wrap">
          <button
            className="dika__body"
            id="dika-body"
            type="button"
            aria-label="Minta tips dari Dika"
          >
            <span id="dika-sprite"></span>
          </button>
          <button
            className="dika__x"
            id="dika-x"
            type="button"
            aria-label="Sembunyikan Dika"
          >
            &times;
          </button>
        </div>
      </aside>
    </>
  );
}
