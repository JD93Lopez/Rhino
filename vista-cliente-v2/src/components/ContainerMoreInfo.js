import styles from "./ContainerMoreInfo.module.css";

const ContainerMoreInfo = () => {
  return (
    <section className={styles.containerMoreInfo}>
      <img
        className={styles.rectangleBaseIcon}
        alt=""
        src="/power-capacity-efficiency@2x.png"
      />
      <h1 className={styles.rendimiento}>RENDIMIENTO</h1>
      <div className={styles.frameGroup}>
        <div className={styles.groupMarkVehicles}>
          <div className={styles.textMarksVehicles}>
            <div className={styles.rectanglePotencyEfficiencyR}>
              <img
                className={styles.nestedFramesIcon}
                loading="lazy"
                alt=""
                src="/rectangle-18@2x.png"
              />
              <h1 className={styles.potencia}>POTENCIA</h1>
            </div>
            <div className={styles.rectanglePotencyEfficiencyR1}>
              <img
                className={styles.rectanglePotencyEfficiencyRChild}
                loading="lazy"
                alt=""
                src="/rectangle-19@2x.png"
              />
              <h1 className={styles.eficiencia}>EFICIENCIA</h1>
            </div>
            <div className={styles.rectanglePotencyEfficiencyR2}>
              <img
                className={styles.rectanglePotencyEfficiencyRItem}
                loading="lazy"
                alt=""
                src="/rectangle-20@2x.png"
              />
              <h1 className={styles.rendimiento1}>RENDIMIENTO</h1>
            </div>
          </div>
          <div className={styles.nestedFrames}>
            <div className={styles.groupMarksVehiclesHeavyEqu}>
              <div className={styles.frameHeavyEquipment}>
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

export default ContainerMoreInfo;
