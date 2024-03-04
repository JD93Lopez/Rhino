import React, { useState } from 'react'
import styles from "../pages/VistaAdministradorUsuarios.module.css";

export const TarjetaUsuarioAdministrador = (params) => {
  
  const [selected, setSelected] = useState()

  const seleccionar = () => {
    if(selected){
      setSelected(false)
    }else{
      setSelected(true)
    }
  }

  let estiloSeleccionado = {}
  if(selected){
    estiloSeleccionado = {backgroundColor: "rgb(255,220,84)"}
  }

  return (
    <div className={styles.rectangleGroup} onClick={seleccionar} style={estiloSeleccionado}>
      <div className={styles.frameItem} />
      <div className={styles.pato3452Wrapper}>
      <div className={styles.pato3452}>{params.nombreUsuario}</div>
      </div>
      <div className={styles.pabloLopezWrapper}>
      <div className={styles.pabloLopez}>{params.nombreCompleto}</div>
      </div>
      <div className={styles.pato3452gmailcomWrapper}>
      <div className={styles.pato3452gmailcom}>
          {params.email}
      </div>
      </div>
      <div className={styles.wrapper}>
      <div className={styles.div}>{params.telefono}</div>
      </div>
      <div className={styles.inactivo}>{params.estado}</div>
    </div>
  )
}