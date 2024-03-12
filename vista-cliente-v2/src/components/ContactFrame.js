import styles from "./ContactFrame.module.css";

const ContactFrame = () => {
  return (
    <section className={styles.contactFrame}>
      <div className={styles.contactFrame1}>
        <input
          className={styles.contactenos}
          placeholder="CONTACTENOS"
          type="text"
        />
        <div className={styles.ctaSection}>
          <div className={styles.contactText} />
        </div>
      </div>
      <input
        className={styles.contactBg}
        placeholder="atencionAlCliente@rhino.com"
        type="text"
      />
      <footer className={styles.phone}>
        <div className={styles.buttonGroup}>
          <div className={styles.textoCelular}>
            <ul className={styles.ul}>
              <li>301(849)837</li>
            </ul>
          </div>
        </div>
        <div className={styles.buttonGroup1}>
          <div className={styles.textoTelefono}>
            <ul className={styles.ul1}>
              <li>6891254</li>
            </ul>
          </div>
        </div>
        <div className={styles.botonX}>
          <div className={styles.linkBtn} />
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

export default ContactFrame;
