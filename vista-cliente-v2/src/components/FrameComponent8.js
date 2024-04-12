import CallToAction from "./CallToAction";
import styles from "./FrameComponent8.module.css";

const FrameComponent8 = () => {
  return (
    <section className={styles.callToActionParent}>
      <CallToAction />
      <input
        className={styles.frameChild}
        placeholder="atencionAlCliente@rhino.com"
        type="text"
      />
      <div className={styles.contactDetails}>
        <div className={styles.socialIcons}>
          <div className={styles.textoCelular}>
            <ul className={styles.ul}>
              <li>301(849)837</li>
            </ul>
          </div>
        </div>
        <div className={styles.socialIcons1}>
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
      </div>
    </section>
  );
};

export default FrameComponent8;
