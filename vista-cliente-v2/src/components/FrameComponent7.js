import styles from "./FrameComponent7.module.css";

const FrameComponent7 = () => {
  return (
    <section className={styles.helpTextFrame}>
      <div className={styles.helpSearchFrame}>
        <div className={styles.buttonSearchFrame}>
          <div className={styles.helpAndAssistanceZone}>
            <div className={styles.searchHelpButton}>
              <h1 className={styles.ayudaYAsistencia}>AYUDA Y ASISTENCIA</h1>
            </div>
            <h2 className={styles.enQuPodemos}>¿En qué podemos ayudarlo?</h2>
          </div>
        </div>
        <div className={styles.helpFrame}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.botonBuscarAyuda}>
              <img className={styles.lupa5Icon} alt="" src="/lupa-5@2x.png" />
            </div>
          </div>
          <div className={styles.searchHelpInputField} />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent7;
