import styles from "./cotizaciones.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TarjetaCotizaciones = ({ nombreCotizacion, correo, telefono }) => {
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    setIsSelected(!isSelected);
    // Redirigir a otra página cuando se hace clic en la tarjeta
    navigate("/vista-administrador-ver-cotizacion");
  };

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
          <span>Nombre de la Cotización: </span>
          <span>{nombreCotizacion}</span>
        </div>
        <div className={styles.infoItem}>
          <span>Correo: </span>
          <span>{correo}</span>
        </div>
        <div className={styles.infoItem}>
          <span>Teléfono: </span>
          <span>{telefono}</span>
        </div>
      </div>
    </div>
  );
};

export default TarjetaCotizaciones;