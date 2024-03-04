import React from 'react'
import styles from "../pages/VistaAdministradorProducto.module.css";

export const TarjetaProductoAdministrador = ({nombreProducto, descripcion, imagen}) => {
  return (
    <div className={styles.excavadora}>
        <div className={styles.excavadoraChild} />
        <div className={styles.divImage}>
            <img
            className={styles.image1Icon}
            loading="eager"
            alt=""
            src={imagen}
            />
        </div>
        <div className={styles.grabberCrane}>
        <div className={styles.excavadora210gPotenciaContainer}>
            <p className={styles.excavadora1}>{nombreProducto}</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.g}>Descripción: </p>
            <p className={styles.potenciaNetaDel}>
                {descripcion}
            </p>
        </div>
        </div>
    </div>
  )
}
