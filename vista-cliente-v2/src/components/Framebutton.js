import styles from "./Framebutton.module.css";
import { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./DataProvider";

const Framebutton = () => {
  const dataContext = useContext(DataContext)

  const [userData, setUserData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const onBotonIniciarSesionClick = useCallback(() => {
    const usuario = {
      username: userData.username,
      password: userData.password,
    };
    console.log("Datos del usuario:", usuario);

    if(!dataContext.usuarioIniciado){
      dataContext.usuarioIniciado = {}
    }

    //TODO iniciar sesion AXIOS --> dataContext.usuarioInciado = JSON.parse(axiosIniciarSesion(u, c))

    dataContext.usuarioIniciado.nombre_usuario = userData.username
    dataContext.usuarioIniciado.contrasena = userData.password
    dataContext.usuarioIniciado.iniciado = true

    navigate("/ventana-principal-2");
  }, [userData, navigate]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

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
          <div className={styles.grouplogin}>
            <div className={styles.textoUsuario}>Usuario</div>
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              className={styles.inputUsuario}
            />
          </div>
          <div className={styles.grouplogin}>
            <div className={styles.textoContrasea}>Contraseña</div>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              className={styles.inputContrasea}
            />
          </div>

          <div className={styles.registrationFrame}>
            <button
              className={styles.rectangleParent}
              onClick={onBotonIniciarSesionClick}
            >
              INICIAR SESIÓN
            </button>
          </div>
        </form>
        <div className={styles.inputFieldGroup}>
          <div className={styles.questionButtons}>
            <div className={styles.botonPregunta1}>¿Olvidó su contraseña?</div>
            <div className={styles.botonPregunta2Wrapper}>
              <div className={styles.botonPregunta2} onClick={onBotonRegistrarse2Click}>¿No está registrado?</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.registrationFrame1}>
        <button
          className={styles.rectangleGroup}
          onClick={onBotonRegistrarse2Click}
        >
          <div className={styles.frameItem} />
          <b className={styles.registrarse}>REGISTRARSE</b>
        </button>
      </div>
    </div>
  );
};

export default Framebutton;
