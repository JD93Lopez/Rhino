import { useMemo } from "react";
import styles from "./CargadoresFrontales1.module.css";

const CargadoresFrontales1 = ({
  image5,
  bULLDOZERS,
  kII,
  cargadorConRuedas,
  potenciaNetaDelMotor106KW,
  capacidadDelCucharn1921M,
  pesoOperativo12622Kg27827,
  fuerzaInicial9638Kg21248L,
  propPadding,
  propGap,
  propHeight,
  propWidth,
  propLineHeight,
  propMinWidth,
}) => {
  const cargadoresFrontales1Style = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  const image5IconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  const bULLDOZERS524KIICargadorContainerStyle = useMemo(() => {
    return {
      lineHeight: propLineHeight,
      minWidth: propMinWidth,
    };
  }, [propLineHeight, propMinWidth]);

  return (
    <div
      className={styles.cargadoresFrontales}
      style={cargadoresFrontales1Style}
    >
      <div className={styles.cargadoresFrontalesChild} />
      <img
        className={styles.image5Icon}
        loading="eager"
        alt=""
        src={image5}
        style={image5IconStyle}
      />
      <div
        className={styles.bulldozers524kIiCargadorContainer}
        style={bULLDOZERS524KIICargadorContainerStyle}
      >
        <p className={styles.bulldozers}>{bULLDOZERS}</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.kIi}>{kII}</p>
        <p className={styles.cargadorConRuedas}>{cargadorConRuedas}</p>
        <p className={styles.potenciaNetaDel}>{potenciaNetaDelMotor106KW}</p>
        <p className={styles.capacidadDelCucharn1921}>
          {capacidadDelCucharn1921M}
        </p>
        <p className={styles.pesoOperativo12622}>{pesoOperativo12622Kg27827}</p>
        <p className={styles.fuerzaInicial9638Kg}>
          {fuerzaInicial9638Kg21248L}
        </p>
      </div>
    </div>
  );
};

export default CargadoresFrontales1;
