import React from 'react'
import styles from "../pages/HistorialDeCotizaciones.module.css";

export const TarjetaProductoCotizacion = ({object}) => {
  return (
    <div className={styles.frameParent1}>
        <div className={styles.frameParent2}>
            <div className={styles.imagenMaquinaCarritoParent}>
                <img
                    className={styles.imagenMaquinaCarrito}
                    loading="lazy"
                    alt=""
                    src="/imagen-maquina-carrito@2x.png"
                />
                <div className={styles.textoInfoContainer}>
                    <b className={styles.textoInfo1}>{object.nombre} - {object.modelo}</b>
                </div>
            </div>
            <b className={styles.textoInfo2}>Fecha inicio: {object.fecha_inicio} &nbsp;&nbsp;&nbsp;&nbsp;Fecha fin: {object.fecha_fin}</b> {/* TODO promediar todos los pdescuento para sacar el total = subtotal*promedio */}
            <div style={{display:"flex",flexDirection:"row"}}>
                <div>
                </div>
                <b>&nbsp;</b>
                <p>
                    <b>
                        &nbsp;
                    </b>
                </p>
            </div>
        </div>
        <div style={{display:"flex", flexDirection:"column"}}>
            <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{object.precio_alquiler}</b>
            <br/>
            <b>&nbsp;</b>
            <br/><br/><br/><br/>
            <b>&nbsp;</b>
        </div>
    </div>
  )
}