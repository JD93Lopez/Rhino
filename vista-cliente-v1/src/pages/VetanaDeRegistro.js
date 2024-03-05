import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./VetanaDeRegistro.module.css";

const VetanaDeRegistro = () => {
  const navigate = useNavigate();

  const onBotonRegistrarse2Click = useCallback(() => {
    navigate("/ventana-inicio-de-sesin");
  }, [navigate]);

  const onLogoRegistroClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.vetanaDeRegistro}>
      <img
        className={styles.b8c39214f0aadd21f0e370d549a1d0Icon}
        alt=""
        src="/0b8c39214f0aadd21f0e370d549a1d02-1@2x.png"
      />
      <div className={styles.vetanaDeRegistroInner}>
        <div className={styles.groupChild} />
      </div>
      <b className={styles.direccin}>Dirección:</b>
      <b className={styles.correo}>Correo:</b>
      <b className={styles.usuario}>Usuario:</b>
      <b className={styles.identificacin}>Identificación:</b>
      <b className={styles.telfono}>Teléfono:</b>
      <div className={styles.crearCuenta}>CREAR CUENTA</div>
      <b className={styles.nombre}>Nombre:</b>
      <b className={styles.apellido}>Apellido:</b>
      <b className={styles.contrasea}>Contraseña:</b>
      <input className={styles.inputUsuario} type="text" />
      <input className={styles.inputContrasenia} type="text" />
      <input className={styles.inputNombre} type="text" />
      <input className={styles.inputApellido} type="text" />
      <input className={styles.inputIdentificacion} type="text" />
      <input className={styles.inputTelefono} type="text" />
      <input className={styles.inputCorreo} type="text" />
      <input className={styles.infputAddress} type="text" />
      <button
        className={styles.botonRegistrarse2}
        onClick={onBotonRegistrarse2Click}
      >
        <div className={styles.registrarse}>REGISTRARSE</div>
      </button>
      <div className={styles.bienvenido}>¡BIENVENIDO!</div>
      <div className={styles.vetanaDeRegistroChild} />
      <button className={styles.logoRegistro} onClick={onLogoRegistroClick}>
        <div className={styles.logoRegistroChild} />
        <img className={styles.logoIcon} alt="" src="/logo1@2x.png" />
      </button>
    </div>
  );
};

export default VetanaDeRegistro;
