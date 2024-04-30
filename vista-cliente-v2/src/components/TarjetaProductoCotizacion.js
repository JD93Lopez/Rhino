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
                    src={object.imagen}
                />
                <div className={styles.textoInfoContainer}>
                    <b className={styles.textoInfo1}>{object.nombre} {object.modelo} - {object.identificacion}</b>
                </div>
            </div>
            <br></br>
            <b className={styles.textoInfo2}>Fecha inicio: {object.fecha_inicio.substring(0,10)} &nbsp;&nbsp;&nbsp;&nbsp;Fecha fin: {object.fecha_fin.substring(0,10)}</b> {/* TODO promediar todos los pdescuento para sacar el total = subtotal*promedio */}
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
            <br/><br/>
            <b>&nbsp;</b>
            <br/><br/><br/><br/>
            <b>&nbsp;</b>
        </div>
    </div>
  )
}