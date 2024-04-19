import styles from "./Framebuttonssocial.module.css";

const Framebuttonssocial = () => {
  return (

    <section className={styles.framebuttonssocial}>
        <span className={styles.contactenos}>CONTÁCTENOS</span>
        
      
      <div className={styles.framechildren}>
          <div className={styles.rectanglecontactus} />
        </div>
        <div className={styles.main}>
        <div className={styles.atencionalclienterhinocom}>
          atencionAlCliente@rhino.com
        </div>
      <div className={styles.frametextx}>
        <div className={styles.textoCelular}>
          <ul className={styles.ul}>
            <li>301(849)837</li>
          </ul>
        </div>
      </div>
      <div className={styles.textoTelefono}>
          <ul className={styles.ul1}>
            <li>6891254</li>
          </ul>
        </div>
        </div>
        <div className={styles.iconos}>
        <img
          className={styles.gorjeo1Icon}
          loading="lazy"
          alt=""
          src="/gorjeo-1@2x.png"
        />
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

export default Framebuttonssocial;
