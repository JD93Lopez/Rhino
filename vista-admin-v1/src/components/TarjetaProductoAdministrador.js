import React, { useContext, useState } from 'react'
import styles from "../pages/VistaAdministradorProducto.module.css";
import { DataContext } from './DataProvider';

export const TarjetaProductoAdministrador = ({nombreProducto, descripcion, imagen, object}) => {

  const dataContext = useContext(DataContext)
  
  const [selected, setSelected] = useState()

  const seleccionar = () => {

    if(selected){
      setSelected(false)
      dataContext.selectedProducts.forEach(product => {
        if(product.nombre === nombreProducto){
          dataContext.selectedProducts = dataContext.selectedProducts.filter(productF => { return product !== productF })
        }
      });
    }else{
      setSelected(true)
      dataContext.selectedProducts.push(
        object
      )
/*       dataContext.selectedProducts.push({
        nombreProducto,
        descripcion,
        imagen
      }) */
    }

  }

  let estiloSeleccionado = {}
  if(selected){
    estiloSeleccionado = {backgroundColor: "rgb(255,220,84)"}
  }

  return (
    <div className={styles.excavadora} onClick={seleccionar} style={estiloSeleccionado}>
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
