import styles from "./FrameComponent4.module.css";

const FrameComponent4 = () => {
  return (
    <section className={styles.textWrapper}>
      <div className={styles.text}>
        <div className={styles.groupParent}>
          <div className={styles.group}>
            <b className={styles.cargadoraDeRuedas}>CARGADORA DE RUEDAS</b>
            <div className={styles.text1}>
              <b className={styles.mototralas}>MOTOTRAÍLAS</b>
            </div>
            <b className={styles.cargadoraDeRuedas1}>CARGADORA DE RUEDAS</b>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.signoMasEnUnCirculoBlancoParent}>
              <div className={styles.signoMasEnUnCirculoBlanco} />
              <div className={styles.signoMasEnUnCirculoBlancoWrapper}>
                <div className={styles.signoMasEnUnCirculoBlanco1} />
              </div>
              <div className={styles.signoMasEnUnCirculoBlanco2} />
            </div>
          </div>
        </div>
        <div className={styles.group1}>
          <button className={styles.verMsParent}>
            <b className={styles.verMs}>VER MÁS...</b>
            <div className={styles.frameChild} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
