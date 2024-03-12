import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameContainer}>
          <div className={styles.alquilaMaquinariaDesataTuParent}>
            <div className={styles.alquilaMaquinariaDesataContainer}>
              <p
                className={styles.alquilaMaquinaria}
              >{`!ALQUILA MAQUINARIA, `}</p>
              <p className={styles.desataTuGrandeza}>DESATA TU GRANDEZA¡</p>
            </div>
            <div className={styles.haciendoPosibleLoImposibleParent}>
              <h1 className={styles.haciendoPosibleLo}>
                HACIENDO POSIBLE LO IMPOSIBLE.
              </h1>
              <div className={styles.textVision} />
            </div>
          </div>
        </div>
        <div className={styles.visionText}>
          <h1 className={styles.visin}>VISIÓN</h1>
          <img
            className={styles.visionTextChild}
            loading="lazy"
            alt=""
            src="/rectangle-178.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
