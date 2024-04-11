import CallToAction from "./CallToAction";
import styles from "./FrameComponent10.module.css";

const FrameComponent10 = () => {
  return (
    <section className={styles.frameParent}>
      <CallToAction />
      <input
        className={styles.frameChild}
        placeholder="atencionAlCliente@rhino.com"
        type="text"
      />
      <footer className={styles.gearIcon}>
        <div className={styles.textoCelularWrapper}>
          <div className={styles.textoCelular}>
            <ul className={styles.ul}>
              <li>301(849)837</li>
            </ul>
          </div>
        </div>
        <div className={styles.textoTelefonoWrapper}>
          <div className={styles.textoTelefono}>
            <ul className={styles.ul1}>
              <li>6891254</li>
            </ul>
          </div>
        </div>
        <div className={styles.botonX}>
          <div className={styles.botonXChild} />
          <img
            className={styles.gorjeo1Icon}
            loading="lazy"
            alt=""
            src="/gorjeo-1@2x.png"
          />
        </div>
        <img
          className={styles.botonYtIcon}
          loading="lazy"
          alt=""
          src="/boton-yt@2x.png"
        />
        <img
          className={styles.botonInstaIcon}
          loading="lazy"
          alt=""
          src="/boton-insta@2x.png"
        />
        <img
          className={styles.botonFacebookIcon}
          loading="lazy"
          alt=""
          src="/boton-facebook@2x.png"
        />
      </footer>
    </section>
  );
};

export default FrameComponent10;
