import React from 'react'
import styles from "./cotizaciones.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export const TarjetaProductoCotizacion = ({ nombre, identificacion, precio_alquiler, fecha_inicio, fecha_fin }) => {
    const [isSelected, setIsSelected] = useState(false);
    const navigate = useNavigate();
  
    const handleCardClick = () => {
      setIsSelected(!isSelected);
      // Redirigir a otra página cuando se hace clic en la tarjeta
      navigate("/vista-administrador-cotizacion-producto");
    };
    return (
        <div className={`${styles.productos1} ${
            isSelected ? styles.selected : ""
          }`}
          onClick={handleCardClick}
          onMouseEnter={(e) => e.currentTarget.classList.add(styles.hover)}
          onMouseLeave={(e) => e.currentTarget.classList.remove(styles.hover)}>
            <div style={{display: "flex", flexDirection:"row"}} className = {styles.infoItem}>
                <div>
                    &nbsp;&nbsp;&nbsp;
                </div>
                <div className = {styles.info}>
                    <p className={styles.cargadoresFrontales}>
                        {nombre}
                    </p>
                    <br />
                    <p className={styles.wa3806}>identificacion: {identificacion}</p>
                    <p className={styles.pesoOperativo1}>Precio alquiler: {precio_alquiler}</p>
                    <p className={styles.potenciaNetaAl}>
                        Fechas: De {fecha_inicio} hasta {fecha_fin}
                    </p>
                </div>
            </div>
        </div>
    )
}
