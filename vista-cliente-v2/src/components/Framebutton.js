import styles from "./Framebutton.module.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
const Framebutton = () => {
  const navigate = useNavigate();
  const onBotonIniciarSesionClick = useCallback(() => {
    navigate("/ventana-de-informacin-personal"); 
  }, [navigate]);
  const onBotonRegistrarse2Click = useCallback(() => {
    navigate("/vetana-de-registro");
  }, [navigate]);
  return (
    <div className={styles.framebutton}>
      <div className={styles.rectangleIs} />
      <div className={styles.loginButton}>
        <h2 className={styles.textoBienvenido}>BIENVENIDO</h2>
      </div>
      <div className={styles.inputusername}>
        <form className={styles.labelpassword}>
          <div className={styles.passwordInput}>
            <div className={styles.grouplogin}>
              <div className={styles.textoUsuario}>Usuario...</div>
              <div className={styles.inputContrasea} />
            </div>
          </div>
          <div className={styles.frameregister}>
            <div className={styles.textoContrasea}>Contraseña...</div>
            <div className={styles.inputUsuario} />
          </div>
          <div className={styles.registrationFrame}>
          <button className={styles.rectangleParent}onClick={onBotonIniciarSesionClick}>INICIAR SESIÓN</button>
          </div>
        </form>
        <div className={styles.inputFieldGroup}>
          <div className={styles.questionButtons}>
            <div className={styles.botonPregunta1}>¿Olvidó su contraseña?</div>
            <div className={styles.botonPregunta2Wrapper}>
              <div className={styles.botonPregunta2}>¿No está registrado?</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.registrationFrame1}>
        <button className={styles.rectangleGroup} onClick={onBotonRegistrarse2Click}>  
          <div className={styles.frameItem} />
          
          <b className={styles.registrarse}>REGISTRARSE</b>
        </button>
      </div>
    </div>
  );
};

export default Framebutton;
