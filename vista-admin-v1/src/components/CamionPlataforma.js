import { useMemo } from "react";
import styles from "./CamionPlataforma.module.css";

const CamionPlataforma = ({
  image10,
  cAMINPLATAFORMA,
  potenciaMximaHprpm,
  prop,
  torqueKgMrpm,
  kGM12001900RPM,
  capacidadDeCargaMxima,
  toneladas,
  propPadding,
  propGap,
  propHeight,
  propWidth,
  propPadding1,
}) => {
  const camionPlataformaStyle = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  const image10IconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={styles.camionPlataforma} style={camionPlataformaStyle}>
      <div className={styles.camionPlataformaChild} />
      <img
        className={styles.image10Icon}
        loading="eager"
        alt=""
        src={image10}
        style={image10IconStyle}
      />
      <div
        className={styles.caminPlataformaPotenciaMxWrapper}
        style={frameDiv1Style}
      >
        <div className={styles.caminPlataformaPotenciaContainer}>
          <p className={styles.caminPlataforma}>{cAMINPLATAFORMA}</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.potenciaMximaHprpm}>{potenciaMximaHprpm}</p>
          <p className={styles.p}>{prop}</p>
          <p className={styles.torqueKgMrpm}>{torqueKgMrpm}</p>
          <p className={styles.kgM12001900}>{kGM12001900RPM}</p>
          <p className={styles.capacidadDeCarga}>{capacidadDeCargaMxima}</p>
          <p className={styles.toneladas}>{toneladas}</p>
        </div>
      </div>
    </div>
  );
};

export default CamionPlataforma;
