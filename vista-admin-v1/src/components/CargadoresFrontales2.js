import { useMemo } from "react";
import styles from "./CargadoresFrontales2.module.css";

const CargadoresFrontales2 = ({
  image3,
  gRASSOBREORUGA,
  gHC110,
  pesoBrutoTotalDelVehculo,
  prop,
  longitudDePlumaPrincipal,
  m,
  alturaMximaDeLaPunta,
  m1,
  propGap,
  propHeight,
  propWidth,
  propPadding,
  propLineHeight,
}) => {
  const cargadoresFrontalesStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const image3IconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const gRASSOBREORUGAContainerStyle = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <div
      className={styles.cargadoresFrontales}
      style={cargadoresFrontalesStyle}
    >
      <div className={styles.cargadoresFrontalesChild} />
      <img
        className={styles.image3Icon}
        loading="eager"
        alt=""
        src={image3}
        style={image3IconStyle}
      />
      <div
        className={styles.grasSobreOrugaGhc110PesoWrapper}
        style={frameDivStyle}
      >
        <div
          className={styles.grasSobreOrugaContainer}
          style={gRASSOBREORUGAContainerStyle}
        >
          <p className={styles.grasSobreOruga}>{gRASSOBREORUGA}</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.ghc110}>{gHC110}</p>
          <p className={styles.pesoBrutoTotal}>{pesoBrutoTotalDelVehculo}</p>
          <p className={styles.p}>{prop}</p>
          <p className={styles.longitudDePluma}>{longitudDePlumaPrincipal}</p>
          <p className={styles.m}>{m}</p>
          <p className={styles.alturaMximaDe}>{alturaMximaDeLaPunta}</p>
          <p className={styles.m1}>{m1}</p>
        </div>
      </div>
    </div>
  );
};

export default CargadoresFrontales2;
