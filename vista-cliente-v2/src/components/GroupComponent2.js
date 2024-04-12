import styles from "./GroupComponent2.module.css";

const GroupComponent2 = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.imagenMaquinaCarritoWrapper}>
        <img
          className={styles.imagenMaquinaCarrito}
          loading="lazy"
          alt=""
          src="/imagen-maquina-carrito@2x.png"
        />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.textoInfoParent}>
          <b className={styles.textoInfo}>
            Manipuladora de materiales de ruedas - MH3050
          </b>
          <b className={styles.textoInfo1}>NO DISPONIBLE</b>
        </div>
        <div className={styles.socialMediaIcon}>
          <div className={styles.xButton}>
            <b className={styles.cornerDecor}>01-10-2024</b>
            <b className={styles.backgroundShape}>01-20 -2024</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent2;
