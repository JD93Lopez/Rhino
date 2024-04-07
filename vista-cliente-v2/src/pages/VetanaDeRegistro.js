import { useCallback, useContext, useState } from "react";
import GroupComponent from "../components/GroupComponent";
import { useNavigate } from "react-router-dom";
import styles from "./VetanaDeRegistro.module.css";
import { DataContext } from "../components/DataProvider";

const VetanaDeRegistro = () => {
  const navigate = useNavigate();
  const userContext = useContext(DataContext);
  console.log(userContext)
  const onBotonRegistrarseClick = useCallback((usuarioData) => {
    console.log("usuario de PRUEBA:", usuarioData);
      const nuevoUsuario = {
        nombreUsuario: usuarioData.usuario,
        nombreCompleto: `${usuarioData.nombre} ${usuarioData.apellido}`,
        email: usuarioData.correo,
        contrasenia: usuarioData.contrasenia,
        identificacion: usuarioData.identificacion,
        telefono: usuarioData.telefono,
        estado: "ACTIVO",
      };

      // Agregar el nuevo usuario al contexto
      userContext.agregarUsuario(nuevoUsuario);
      console.log("Usuario registrado:", nuevoUsuario);
      navigate("/ventana-inicio-de-sesin");
    },
    [userContext.agregarUsuario, navigate]
  );

  return (
    <div className={styles.vetanaDeRegistro}>
      <h1 className={styles.bienvenido}>¡BIENVENIDO!</h1>
      <main className={styles.b8c39214f0aadd21f0e370d549a1d0Parent}>
        <GroupComponent onBotonRegistrarseClick={onBotonRegistrarseClick} />

        <img
          className={styles.b8c39214f0aadd21f0e370d549a1d0Icon}
          alt=""
          src="/0b8c39214f0aadd21f0e370d549a1d02-1@2x.png"
        />
        <GroupComponent />
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo@2x.png"
        />
      </main>
      <div className={styles.registerButton}>
        <button
          className={styles.botnRegistrarse}
          onClick={onBotonRegistrarseClick}
        >
          <div className={styles.botnRegistrarseChild} />
          <div className={styles.registrarse}>REGISTRARSE</div>
        </button>
      </div>
    </div>
  );
};

export default VetanaDeRegistro;
