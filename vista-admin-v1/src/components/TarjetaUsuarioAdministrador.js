//TarjetaUsuarioAdministrador.js

import React, { useContext } from 'react';
import styles from "../pages/VistaAdministradorUsuarios.module.css";
import { DataContext } from './DataProvider';

export const TarjetaUsuarioAdministrador = (params) => {
  const dataContext = useContext(DataContext);
  const { manejarSeleccionUsuario, usuariosSeleccionados = [] } = dataContext;

  const esUsuarioSeleccionado = usuariosSeleccionados.some(
    (usuario) => usuario.correo === params.usuario.correo
  );

  const toggleSeleccionUsuario = () => {

    const usuario = params.usuario;

/*     const usuario = {
      nombreUsuario: params.nombreUsuario,
      nombreCompleto: params.nombreCompleto,
      email: params.email,
      telefono: params.telefono,
      estado: params.estado,
    }; */

    if (esUsuarioSeleccionado) {
      // Si el usuario ya está seleccionado, deseleccionarlo
      manejarSeleccionUsuario(usuario);
    } else {
      // Si el usuario no está seleccionado, seleccionarlo
      manejarSeleccionUsuario(usuario);
    }
  };

  const estiloSeleccionado = esUsuarioSeleccionado
    ? { backgroundColor: "rgb(255,220,84)" }
    : {};

  return (
    <div
      className={styles.rectangleGroup}
      onClick={toggleSeleccionUsuario}
      style={estiloSeleccionado}
    >
      <div className={styles.frameItem} />
      <div className={styles.pato3452Wrapper}>
        <div className={styles.pato3452}>{params.nombreUsuario}</div>
      </div>
      <div className={styles.pabloLopezWrapper}>
        <div className={styles.pabloLopez}>{params.nombreCompleto}</div>
      </div>
      <div className={styles.pato3452gmailcomWrapper}>
        <div className={styles.pato3452gmailcom}>{params.email}</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div}>{params.telefono}</div>
      </div>
      <div className={styles.inactivo}>{params.estado}</div>
    </div>
  );
};