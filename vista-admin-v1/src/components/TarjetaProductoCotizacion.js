import React, { useContext } from 'react'
import styles from "./cotizaciones.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DataContext } from './DataProvider';


export const TarjetaProductoCotizacion = ({ nombre, identificacion, precio_alquiler, fecha_inicio, fecha_fin, object }) => {
    const dataContext = useContext(DataContext)
    const [isSelected, setIsSelected] = useState(false);
    const navigate = useNavigate();
  
    const handleCardClick = () => {
        if(object&&object.conductores_idconductores&&object.conductores_idconductores!=0){
            setIsSelected(!isSelected);
            dataContext.idConductorAgenda = object.conductores_idconductores
            navigate("/vista-administrador-conductor-producto");
        }else{
            setIsSelected(!isSelected);
            dataContext.producto_agendaSeleccionada = object
            // Redirigir a otra página cuando se hace clic en la tarjeta
            navigate("/vista-administrador-conductor-producto");
        }
    };

    const estiloConConductor = (object&&object.conductores_idconductores&&object.conductores_idconductores!=0)?{backgroundColor:"rgb(213, 255, 196)"}:{backgroundColor:"rgb(255, 155, 155)"}

    return (
        <div className={`${styles.productos1} ${
            isSelected ? styles.selected : ""
          }`}
          onClick={handleCardClick}
          onMouseEnter={(e) => e.currentTarget.classList.add(styles.hover)}
          onMouseLeave={(e) => e.currentTarget.classList.remove(styles.hover)}
          style={estiloConConductor}>
            <div style={{display: "flex", flexDirection:"row"}} className = {styles.infoItem} >
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
                        Fechas: 
                        <br/>
                        De {fecha_inicio.substring(0,10)} 
                        <br/>
                        Hasta {fecha_fin.substring(0,10)}
                    </p>
                </div>
            </div>
        </div>
    )
}
