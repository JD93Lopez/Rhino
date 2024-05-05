import styles from "./proveedores.module.css"; // Ensure you have the corresponding styles file
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./DataProvider";
import axios from "../axios";

const TarjetaProveedores = ({ nombre, nit, direccion, descripcion, telefono, object }) => {
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  const dataContext = useContext(DataContext);

  // Card click handler
  const handleCardClick = () => {
    dataContext.proveedorSeleccionado = object;
    navigate("/vista-administrador-proveedores");
    // Add any additional logic here if you want to handle any event on card click
  };

  return (
    <div
      className={`${styles.tarjetaProveedor} ${
        isSelected ? styles.selected : ""
      }`}
      onClick={handleCardClick}
      onMouseEnter={(e) => e.currentTarget.classList.add(styles.hover)}
      onMouseLeave={(e) => e.currentTarget.classList.remove(styles.hover)}
      style={{width:"1400px"}}
    >
      <div className={styles.info}>
        <div className={styles.infoItem}>
          <span>Nombre: </span>
          <span style={{ fontWeight: "lighter" }}>&nbsp;{nombre}</span>
        </div>
        <div className={styles.infoItem}>
          <span>NIT: </span>
          <span style={{ fontWeight: "lighter" }}>&nbsp;{nit}</span>
        </div>
        <div className={styles.infoItem}>
          <span>Dirección: </span>
          <span style={{ fontWeight: "lighter" }}>&nbsp;{direccion}</span>
        </div>
        <div className={styles.infoItem}>
          <span>Descripción: </span>
          <span style={{ fontWeight: "lighter" }}>&nbsp;{descripcion}</span>
        </div>
        <div className={styles.infoItem}>
          <span>Teléfono: </span>
          <span style={{ fontWeight: "lighter" }}>&nbsp;{telefono}</span>
        </div>
      </div>
    </div>
  );
};

export default TarjetaProveedores;
