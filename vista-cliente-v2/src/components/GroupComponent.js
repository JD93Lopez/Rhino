import React, { useState, useCallback } from "react";
import styles from "./GroupComponent.module.css";
import { useNavigate } from "react-router-dom";

const GroupComponent = ({ setDireccion, setCorreo, setUsuario, setIdentificacion, setTelefono, setNombre, setApellido, setContrasenia }) => {

  //añadir campo de direccion con los estilos adecuados
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.inputGroup}>
        <b className={styles.usuario}>Usuario:</b>
        <input
          type="text"
          id = "inputUsuario"
          useref = "inputUsuario"
          onChange={(e) => {
            setUsuario(e.target.value)
            console.log(e.target.value)
          }}
          className={styles.inputUsuario}
        />
      </div>
      <div className={styles.inputGroup}>
        <b className={styles.nombre}>Nombre:</b>
        <input
          type="text"
          id = "inputNombre"
          onChange={(e) => setNombre(e.target.value)}
          className={styles.inputNombre}
        />
      </div>
      <div className={styles.inputGroup}>
        <b className={styles.apellido}>Apellido:</b>
        <input
          type="text"
          id = "inputApellido"
          onChange={(e) => setApellido(e.target.value)}
          className={styles.inputApellido}
        />
      </div>
      <div className={styles.inputGroup}>
        <b className={styles.correo}>Correo:</b>
        <input
          type="email"
          id = "inputEmail"
          onChange={(e) => setCorreo(e.target.value)}
          className={styles.inputCorreo}
        />
      </div>
      <div className={styles.inputGroup}>
        <b className={styles.contrasea}>Contraseña:</b>
        <input
          type="password"
          id = "inputPassword"
          onChange={(e) => setContrasenia(e.target.value)}
          className={styles.inputContrasenia}
        />
      </div>
      <div className={styles.inputGroup}>
        <b className={styles.identificacin}>Identificación:</b>
        <input
          type="text"
          id = "inputIdentificacion"
          onChange={(e) => setIdentificacion(e.target.value)}
          className={styles.inputIdentificacion}
        />
      </div>
      <div className={styles.inputGroup}>
        <b className={styles.telfono}>Teléfono:</b>
        <input
          type="tel"
          id = "inputTelefono"
          onChange={(e) => setTelefono(e.target.value)}
          className={styles.inputTelefono}
        />
      </div>

      <div className={styles.crearCuenta}>CREAR CUENTA</div>

      <div className={styles.logo} />
      
    </div>
  );
};

export default GroupComponent;
