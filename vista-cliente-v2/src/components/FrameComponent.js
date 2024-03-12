import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <footer className={styles.infoCellularTextAndPhoneBParent}>
      <div className={styles.infoCellularTextAndPhoneB}>
        <div className={styles.textoCelular}>
          <ul className={styles.ul}>
            <li>301(849)837</li>
          </ul>
        </div>
      </div>
      <div className={styles.infoCellularTextAndPhoneB1}>
        <div className={styles.textoTelefono}>
          <ul className={styles.ul1}>
            <li>6891254</li>
          </ul>
        </div>
      </div>
      <div className={styles.botonX}>
        <div className={styles.roundedRectangle} />
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
  );
};

export default FrameComponent;
