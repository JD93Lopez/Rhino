import styles from "./ContainerBox.module.css";

const ContainerBox = () => {
  return (
    <section className={styles.containerBox}>
      <img
        className={styles.powerCapacityEfficiency}
        alt=""
        src="/power-capacity-efficiency@2x.png"
      />
      <div className={styles.powerFrame}>
        <div className={styles.wheelLoaderFrame}>
          <div className={styles.infoButtonFrame}>
            <div className={styles.groupFrame}>
              <img
                className={styles.groupFrameChild}
                loading="lazy"
                alt=""
                src="/rectangle-18@2x.png"
              />
              <h1 className={styles.potencia}>POTENCIA</h1>
            </div>
            <div className={styles.groupFrame1}>
              <img
                className={styles.groupFrameItem}
                loading="lazy"
                alt=""
                src="/rectangle-19@2x.png"
              />
              <h1 className={styles.eficiencia}>EFICIENCIA</h1>
            </div>
            <div className={styles.groupFrame2}>
              <img
                className={styles.groupFrameInner}
                loading="lazy"
                alt=""
                src="/rectangle-20@2x.png"
              />
              <h1 className={styles.rendimiento1}>RENDIMIENTO</h1>
            </div>
          </div>
          <div className={styles.possibleImpossibleFrame}>
            <div className={styles.moreFrame}>
              <div className={styles.phoneNumberFrame}>
                <button className={styles.maquinariaPesadaParent}>
                  <b className={styles.maquinariaPesada}>MAQUINARIA PESADA</b>
                  <div className={styles.frameChild} />
                </button>
              </div>
              <button className={styles.marcasParent}>
                <b className={styles.marcas}>MARCAS</b>
                <div className={styles.frameItem} />
              </button>
              <button className={styles.vehculosParent}>
                <b className={styles.vehculos}>VEHÍCULOS</b>
                <div className={styles.frameInner} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainerBox;
