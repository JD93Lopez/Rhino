import styles from "./MotorTrailas.module.css";

const MotorTrailas = () => {
  return (
    <section className={styles.motorTrailas}>
      <div className={styles.wheeledLoader}>
        <div className={styles.groupMarcasVehiculos}>
          <div className={styles.productHighlights}>
            <b className={styles.cargadoraDeRuedas}>CARGADORA DE RUEDAS</b>
            <div className={styles.motoTrailasLabel}>
              <b className={styles.mototralas}>MOTOTRAÍLAS</b>
            </div>
            <b className={styles.cargadoraDeRuedas1}>CARGADORA DE RUEDAS</b>
          </div>
          <div className={styles.infoButtonGroup}>
            <div className={styles.atencionAlCliente}>
              <div className={styles.botonInfoMaq4} />
              <div className={styles.contactUs}>
                <div className={styles.botonInfoMaq5} />
              </div>
              <div className={styles.botonInfoMaq6} />
            </div>
          </div>
        </div>
        <div className={styles.frameTextoCelularTextotelef}>
          <button className={styles.verMsParent}>
            <b className={styles.verMs}>VER MÁS...</b>
            <div className={styles.frameChild} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MotorTrailas;
