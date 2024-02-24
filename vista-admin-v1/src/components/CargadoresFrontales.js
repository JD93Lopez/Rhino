import { useMemo } from "react";
import styles from "./CargadoresFrontales.module.css";

const CargadoresFrontales = ({
  image17,
  cAMINDETRANSPORTEDEVIDRIO,
  motorTurboDiselDe23Litros,
  potenciaDe130HP3500rpm,
  torqueDe317Kgfm1500Rpm,
  propPadding,
  propGap,
  propHeight,
  propWidth,
  propPadding1,
}) => {
  const cargadoresFrontales2Style = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  const image17IconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  const frameDiv2Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div
      className={styles.cargadoresFrontales}
      style={cargadoresFrontales2Style}
    >
      <div className={styles.cargadoresFrontalesChild} />
      <img
        className={styles.image17Icon}
        loading="eager"
        alt=""
        src={image17}
        style={image17IconStyle}
      />
      <div
        className={styles.caminDeTransporteDeVidrioWrapper}
        style={frameDiv2Style}
      >
        <div className={styles.caminDeTransporteContainer}>
          <p className={styles.caminDeTransporte}>
            {cAMINDETRANSPORTEDEVIDRIO}
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.motorTurboDisel}>{motorTurboDiselDe23Litros}</p>
          <p className={styles.potenciaDe130}>{potenciaDe130HP3500rpm}</p>
          <p className={styles.torqueDe317}>{torqueDe317Kgfm1500Rpm}</p>
        </div>
      </div>
    </div>
  );
};

export default CargadoresFrontales;
