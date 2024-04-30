import React, { useState } from 'react'
import styles from "../pages/HistorialDeCotizaciones.module.css";
import { TarjetaDespliegueCotizacion } from './TarjetaDespliegueCotizacion';

export const TarjetaCotizaciones = ({ object }) => {

    const [selected, setSelected] = useState()

    const seleccionar = () => {

        if(selected){
            setSelected(false)
        }else{
            setSelected(true)
        }

    }

    return (
        <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
                <div className={styles.cotizacin1Wrapper}>
                    <h3 className={styles.cotizacin1}> {object.estado!="ALQUILADO"?"Cotización":"Alquiler"} {object.idalquileres}</h3>
                </div>

                <div className={styles.wrapper}>
                    <div className={styles.div}>{object.estado} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {object.fecha.substring(0,10)}</div>
                </div>
                <div className={styles.frameChild} />
                <div className={styles.frameWrapper}>
                    <button className={styles.rectangleParent} onClick={seleccionar}>
                        <div className={styles.frameItem} />
                        <b className={styles.desplegar}>DESPLEGAR</b>
                    </button>
                </div>
            </div>
            {
                selected&&<TarjetaDespliegueCotizacion
                    object={object}
                />
            }
        </div>
    )
}