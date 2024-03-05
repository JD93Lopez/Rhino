import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./VentanaInicioDeSesin.module.css";

const VentanaInicioDeSesin = () => {
  const navigate = useNavigate();

  const onLogoISClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBotonInicioSesionClick = useCallback(() => {
    navigate("/ventana-principal-2");
  }, [navigate]);

  const onBotonRegistrarseClick = useCallback(() => {
    navigate("/vetana-de-registro");
  }, [navigate]);

  return (
    <div className={styles.ventanaInicioDeSesin}>
      <section className={styles.fondoInicioDeSesin1} />
      <button className={styles.logoIs} onClick={onLogoISClick}>
        <div className={styles.logoIsChild} />
        <img className={styles.logoIcon} alt="" src="/logo@3x.png" />
      </button>
      <div className={styles.rectangleIs} />
      <h2 className={styles.textoBienvenido}>BIENVENIDO</h2>
      <button
        className={styles.botonIniciosesion}
        onClick={onBotonInicioSesionClick}
      >
        <b className={styles.iniciarSesin}>INICIAR SESIÓN</b>
      </button>
      <button
        className={styles.botonRegistrarse}
        onClick={onBotonRegistrarseClick}
      >
        <b className={styles.registrarse}>REGISTRARSE</b>
      </button>
      <div className={styles.textoUsuario}>Usuario...</div>
      <input className={styles.inputContrasea} type="text" />
      <input className={styles.inputUsuario} type="text" />
      <div className={styles.textoContrasea}>Contraseña...</div>
      <button className={styles.botonPregunta1}>¿Olvidó su contraseña?</button>
      <button className={styles.botonPregunta2}>¿No está registrado?</button>
    </div>
  );
};

export default VentanaInicioDeSesin;
