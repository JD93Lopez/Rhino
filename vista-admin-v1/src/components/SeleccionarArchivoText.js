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

        <input type='file'/> 

    </div>
  );
};

export default SeleccionarArchivoText;
