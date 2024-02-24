import { useMemo } from "react";
import styles from "./SeleccionarArchivoText.module.css";

const SeleccionarArchivoText = ({ cargarSOAT, propPadding, propPadding1 }) => {
  const seleccionarArchivoTextStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameCargarTecnicoMecanicaStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div
      className={styles.seleccionarArchivoText}
      style={seleccionarArchivoTextStyle}
    >
      <div className={styles.cargarSoat}>{cargarSOAT}</div>
      <div
        className={styles.frameCargarTecnicoMecanica}
        style={frameCargarTecnicoMecanicaStyle}
      >
        <div className={styles.frameCargarTecnicoMecanicaChild} />
        <div className={styles.seleccionarArchivo}>seleccionar archivo</div>
      </div>
    </div>
  );
};

export default SeleccionarArchivoText;
