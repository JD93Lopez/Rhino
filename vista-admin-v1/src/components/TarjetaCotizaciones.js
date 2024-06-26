import styles from "./cotizaciones.module.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./DataProvider";


const TarjetaCotizaciones = ({ object, idalquileres, nombre, correo, telefono, estado, fecha }) => {
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  const dataContext = useContext(DataContext)
  const handleCardClick = () => {

    dataContext.cotizacionSeleccionada = object
    
    // Redirigir a otra página cuando se hace clic en la tarjeta
    navigate("/vista-administrador-ver-cotizacion");
  };

  function facturaOCotizacion(){
    if(estado !== "ALQUILADO"){
      return "Cotización"
    }
    return "Factura"
  }

  return (
    <div
      className={`${styles.tarjetaCotizacion} ${
        isSelected ? styles.selected : ""
      }`}
      onClick={handleCardClick}
      onMouseEnter={(e) => e.currentTarget.classList.add(styles.hover)}
      onMouseLeave={(e) => e.currentTarget.classList.remove(styles.hover)}
    >
      <div className={styles.info}>
        <div className={styles.infoItem}>
          <span style={{fontSize: "50px"}}>{facturaOCotizacion()} {idalquileres} </span>
        </div>
        <div className={styles.infoItem}>
          <span>Nombre: </span>
          <span>{nombre}</span>
        </div>
        <div className={styles.infoItem}>
          <span>Correo: </span>
          <span>{correo}</span>
        </div>
        <div className={styles.infoItem}>
          <span>Teléfono: </span>
          <span>{telefono}</span>
        </div>
        <div className={styles.infoItem}>
          <span>Estado: </span>
          <span>{estado}</span>
        </div>
        <div className={styles.infoItem}>
          <span>Fecha: </span>
          <span>{fecha}</span>
        </div>
      </div>
    </div>
  );
};

export default TarjetaCotizaciones;