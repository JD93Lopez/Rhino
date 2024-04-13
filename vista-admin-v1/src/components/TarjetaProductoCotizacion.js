import React from 'react'
import styles from "../pages/VistaAdministradorVerCotizacion.module.css";

export const TarjetaProductoCotizacion = ({ nombre, identificacion, precio_alquiler, fecha_inicio, fecha_fin }) => {
    return (
        <div className={styles.productos1}>
            <div style={{display: "flex", flexDirection:"row"}}>
                <div>
                    &nbsp;&nbsp;&nbsp;
                </div>
                <div>
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
