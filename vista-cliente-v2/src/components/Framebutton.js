import styles from "./Framebutton.module.css";

const Framebutton = () => {
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
            <button className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <b className={styles.inicarSesin}>INICAR SESIÓN</b>
            </button>
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
        <button className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <b className={styles.registrarse}>REGISTRARSE</b>
        </button>
      </div>
    </div>
  );
};

export default Framebutton;
