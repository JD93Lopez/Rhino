import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ChainLoaders.module.css";

const ChainLoaders = () => {
  const navigate = useNavigate();

  const onBotonInfoMaqClick = useCallback(() => {
    navigate("/ventana-para-buscar-productos");
  }, [navigate]);

  return (
    <section className={styles.chainLoaders}>
      <div className={styles.wheeledLoader}>
        <div className={styles.motorGrade}>
          <h1 className={styles.rentalos}>RENTALOS</h1>
          <img
            className={styles.compactadoraSinFondo1}
            loading="lazy"
            alt=""
            src="/compactadora-sin-fondo-1@2x.png"
          />
          <img
            className={styles.cargadorDeCadenasSinFonod}
            loading="lazy"
            alt=""
            src="/cargador-de-cadenas-sin-fonod-2@2x.png"
          />
          <img
            className={styles.maquinaSinFondo2}
            loading="lazy"
            alt=""
            src="/maquina-sin-fondo-2@2x.png"
          />
          <img
            className={styles.cargadoraDeRuedasSinFondo}
            loading="lazy"
            alt=""
            src="/cargadora-de-ruedas-sin-fondo-1@2x.png"
          />
          <img
            className={styles.camionobrasSinFondo1}
            loading="lazy"
            alt=""
            src="/camionobras-sin-fondo-3@2x.png"
          />
        </div>
        <div className={styles.botonInfoMaq} onClick={onBotonInfoMaqClick} />
        <div className={styles.botonInfoMaq2} />
        <div className={styles.botonInfoMaq3} />
      </div>
      <div className={styles.metalWorksVehicle}>
        <b className={styles.manipuladorDeMetales}>MANIPULADOR DE METALES</b>
        <b className={styles.caminDeObras}>CAMIÓN DE OBRAS</b>
      </div>
      <b className={styles.aplanadora}>APLANADORA</b>
    </section>
  );
};

export default ChainLoaders;
