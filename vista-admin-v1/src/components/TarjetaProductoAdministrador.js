import React, { useContext, useState } from 'react';
import styles from "../pages/VistaAdministradorProducto.module.css";
import { DataContext } from './DataProvider';

export const TarjetaProductoAdministrador = ({ nombreProducto, descripcion, imagen, onSeleccionarProducto }) => {
  const dataContext = useContext(DataContext);
  const [selected, setSelected] = useState(false);

  const manejarSeleccion = () => {
    const seleccionado = !selected;
    setSelected(seleccionado);
    onSeleccionarProducto(nombreProducto, seleccionado);
  };

  let estiloSeleccionado = {};
  if (selected) {
    estiloSeleccionado = { backgroundColor: "rgb(255,220,84)" };
  }

  return (
    <div className={styles.excavadora} onClick={manejarSeleccion} style={estiloSeleccionado}>
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
  );
};