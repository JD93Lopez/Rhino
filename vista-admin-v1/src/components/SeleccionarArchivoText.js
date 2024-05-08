import { useMemo, useContext } from "react";
import styles from "./SeleccionarArchivoText.module.css";
import { DataContext } from "./DataProvider";
import axios from "../axios";

const SeleccionarArchivoText = ({ cargarSOAT, propPadding, propPadding1, setMostrarDescargarSoat, idproductos }) => {

  const dataContext = useContext(DataContext)

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

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        axios.post(`cargarSoat`,{idproductos: idproductos,soat: reader.result}).then(()=>{
          dataContext.soat = reader.result;
          setMostrarDescargarSoat(true)
        })
      };
    }
  };

  return (
    
    <div
      className={styles.seleccionarArchivoText}
      style={seleccionarArchivoTextStyle}
    >
      <div className={styles.cargarSoat}>{cargarSOAT}</div>

        <input type='file' id ="inputSoat" useref={ "inputSoat"} onChange={handleFileChange}/> 

    </div>
  );
};

export default SeleccionarArchivoText;
