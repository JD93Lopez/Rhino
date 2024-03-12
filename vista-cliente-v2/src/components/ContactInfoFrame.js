import styles from "./ContactInfoFrame.module.css";

const ContactInfoFrame = () => {
  return (
    <footer className={styles.contactInfoFrame}>
      <div className={styles.attentionIcon}>
        <input
          className={styles.contactenos}
          placeholder="CONTACTENOS"
          type="text"
        />
        <div className={styles.rectangleShape}>
          <div className={styles.detailedInfoButton} />
        </div>
      </div>
      <input
        className={styles.textCellularBackground}
        placeholder="atencionAlCliente@rhino.com"
        type="text"
      />
      <div className={styles.buttonsGroup}>
        <div className={styles.socialMediaBtns}>
          <div className={styles.textoCelular}>
            <ul className={styles.ul}>
              <li>301(849)837</li>
            </ul>
          </div>
        </div>
        <div className={styles.socialMediaBtns1}>
          <div className={styles.textoTelefono}>
            <ul className={styles.ul1}>
              <li>6891254</li>
            </ul>
          </div>
        </div>
        <div className={styles.botonX}>
          <div className={styles.roundedRectangleShape} />
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
    </footer>
  );
};

export default ContactInfoFrame;
