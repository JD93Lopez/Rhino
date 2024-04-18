import { useCallback } from "react";
import styles from "./GroupComponent4.module.css";

const GroupComponent4 = () => {
 
  const onBotonInfoMaqClick = useCallback(() => {
    navigate("/ventana-para-buscar-productos");
  }, [navigate]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.materialesSinFondo1Parent}>
        <img
          className={styles.materialesSinFondo1}
          loading="lazy"
          alt=""
          src="/tarjetaImagenProducto@2x.png"
          onClick={onMaterialesSinFondo1Click}
        />
        <div className={styles.metalController}>
          <b className={styles.manipuladorDeMetales}>MANIPULADOR DE METALES</b>
        </div>
      </div>
      <div className={styles.botonInfoMaqWrapper}>
        <div className={styles.botonInfoMaq} onClick={onBotonInfoMaqClick} />
      </div>
      <div className={styles.frameChild} />
    </div>
  );
};

export default GroupComponent4;