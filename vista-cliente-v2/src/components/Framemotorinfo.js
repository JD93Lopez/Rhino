import styles from "./Framemotorinfo.module.css";

const Framemotorinfo = () => {
  return (
    <section className={styles.framemotorinfo}>
      <img
        className={styles.manipuladorafondo1Icon}
        loading="lazy"
        alt=""
        src="/manipuladorafondo-1@2x.png"
      />
      <div className={styles.mHbackground}>
        <div className={styles.materialsslide}>
          <div className={styles.wheelstext}>
            <h2 className={styles.manipuladoraDeMaterialesContainer}>
              <p className={styles.manipuladoraDe}>Manipuladora de</p>
              <p className={styles.materialesDeRuedas}>materiales de ruedas</p>
            </h2>
            <div className={styles.specstab}>
              <div className={styles.mh3050}>MH3050</div>
            </div>
          </div>
          <b className={styles.especificacionesPrincipales}>
            ESPECIFICACIONES PRINCIPALES
          </b>
          <div className={styles.modeloDelMotorContainer}>
            <p className={styles.modeloDelMotor}>
              <b>Modelo del motor</b>
            </p>
            <p className={styles.c93bCat}>C9.3B Cat®</p>
            <p className={styles.blankLine}>
              <b>&nbsp;</b>
            </p>
            <p className={styles.pesoEnOrdenDeTrabajoMxim}>
              <b>Peso en orden de trabajo máximo</b>
            </p>
            <p className={styles.kg}>50.000 kg</p>
            <p className={styles.blankLine1}>
              <b>&nbsp;</b>
            </p>
            <p className={styles.alcanceMximo}>
              <b>Alcance máximo</b>
            </p>
            <p className={styles.mm}>18060 mm</p>
          </div>
        </div>
        <div className={styles.addcartgroup}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <b className={styles.agregarAlCarrito}>AGREGAR AL CARRITO</b>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <b className={styles.consultarPrecio}>CONSULTAR PRECIO</b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Framemotorinfo;
