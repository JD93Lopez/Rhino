import React, { useState } from "react";
import styles from "./GroupComponent.module.css";
import VetanaDeRegistro from "../pages/VetanaDeRegistro";

const GroupComponent = ({ onBotonRegistrarseClick }) => {
  
  const [usuarioData, setUsuarioData] = useState({
    usuario: "",
    nombre: "",
    apellido: "",
    correo: "",
    contrasenia: "",
    identificacion: "",
    telefono: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsuarioData({ ...usuarioData, [name]: value });
    console.log("Usuario data",usuarioData)
  };
  const handleRegistroClick = () => {
    onBotonRegistrarseClick(usuarioData);
  };


  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.inputGroup}>
        <b className={styles.usuario}>Usuario:</b>
        <input
          type="text"
          id="inputUsuario"
          name="usuario"
          value={usuarioData.usuario}
          onChange={handleInputChange}
          className={styles.inputUsuario}
        />
      </div>
      <div className={styles.inputGroup}>
        <b className={styles.nombre}>Nombre:</b>
        <input
          type="text"
          id="inputNombre"
          name="nombre"
          value={usuarioData.nombre}
          onChange={handleInputChange}
          className={styles.inputNombre}
        />
      </div>
      <div className={styles.inputGroup}>
        <b className={styles.apellido}>Apellido:</b>
        <input
          type="text"
          id="inputApellido"
          name="apellido"
          value={usuarioData.apellido}
          onChange={handleInputChange}
          className={styles.inputApellido}
        />
      </div>
      <div className={styles.inputGroup}>
        <b className={styles.correo}>Correo:</b>
        <input
          type="email"
          id="inputEmail"
          name="correo"
          value={usuarioData.correo}
          onChange={handleInputChange}
          className={styles.inputCorreo}
        />
      </div>
      <div className={styles.inputGroup}>
        <b className={styles.contrasea}>Contraseña:</b>
        <input
          type="password"
          id="inputPassword"
          name="contrasenia"
          value={usuarioData.contrasenia}
          onChange={handleInputChange}
          className={styles.inputContrasenia}
        />
      </div>
      <div className={styles.inputGroup}>
        <b className={styles.identificacin}>Identificación:</b>
        <input
          type="text"
          id="inputIdentificacion"
          name="identificacion"
          value={usuarioData.identificacion}
          onChange={handleInputChange}
          className={styles.inputIdentificacion}
        />
      </div>
      <div className={styles.inputGroup}>
        <b className={styles.telfono}>Teléfono:</b>
        <input
          type="tel"
          id="inputTelefono"
          name="telefono"
          value={usuarioData.telefono}
          onChange={handleInputChange}
          className={styles.inputTelefono}
        />
      </div>
      <div className={styles.crearCuenta} onClick={handleRegistroClick}>
        CREAR CUENTA
      </div>

      <div className={styles.logo} />
    </div>
  );
};

export default GroupComponent;
