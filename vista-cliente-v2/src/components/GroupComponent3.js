import { useCallback } from "react";
import styles from "./GroupComponent3.module.css";

const GroupComponent3 = () => {
  const onGroupButtonClick = useCallback(() => {
    // Please sync "Ventana carrito de compras" to the project
  }, []);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.imagenMaquinaCarritoParent}>
        <img
          className={styles.imagenMaquinaCarrito}
          loading="lazy"
          alt=""
          src="/imagen-maquina-carrito@2x.png"
        />
        <div className={styles.textoInfoWrapper}>
          <b className={styles.textoInfo}>
            Manipuladora de materiales de ruedas - MH3050
          </b>
          
        </div>
      </div>
      <div className={styles.textoInfoContainer}>
        
        <b className={styles.textoInfo1}>DISPONIBLE</b>
        <b className={styles.backgroundShape}>01-20-2024</b>
      </div>
      <div className={styles.frameWrapper}>
        <button className={styles.frameContainer} onClick={onGroupButtonClick}>
          <div className={styles.frameParent}>
            <div className={styles.rectangleWrapper}>
              <div className={styles.frameItem} />
            </div>
            <img
              className={styles.anadirAlCarrito1Icon}
              alt=""
              src="/anadiralcarrito-1@2x.png"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default GroupComponent3;
