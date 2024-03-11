import React, { useContext, useState } from 'react';
import styles from "../pages/VistaAdministradorUsuarios.module.css";
import { DataContext } from './DataProvider';

export const TarjetaUsuarioAdministrador = ({
  nombreUsuario,
  nombreCompleto,
  email,
  telefono,
  estado,
  onSeleccionarUsuario,
  seleccionado,
}) => {
  const manejarSeleccion = () => {
    onSeleccionarUsuario(email, !seleccionado);
  };

  let estiloSeleccionado = {};
  if (seleccionado) {
    estiloSeleccionado = { backgroundColor: "rgb(255,220,84)" };
  }

  return (
    <div className={styles.rectangleGroup} onClick={manejarSeleccion} style={estiloSeleccionado}>
      <div className={styles.frameItem} />
      <div className={styles.pato3452Wrapper}>
        <div className={styles.pato3452}>{nombreUsuario}</div>
      </div>
      <div className={styles.pabloLopezWrapper}>
        <div className={styles.pabloLopez}>{nombreCompleto}</div>
      </div>
      <div className={styles.pato3452gmailcomWrapper}>
        <div className={styles.pato3452gmailcom}>{email}</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div}>{telefono}</div>
      </div>
      <div className={styles.inactivo}>{estado}</div>
    </div>
  );
};