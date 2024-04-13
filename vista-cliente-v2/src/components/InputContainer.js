import { useContext, useState } from "react";
import { DataContext } from "./DataProvider";
import styles from "./InputContainer.module.css";

const InputContainer = () => {
  const dataContext = useContext(DataContext);
  const [currentUser, setCurrentUser] = useState(dataContext.usuarioIniciado);

  function cambiarContrasena(){
    const nuevaContrasena = document.getElementById("contrasenaNueva").value
    if( nuevaContrasena === document.getElementById("contrasenaNueva2").value ){
      const antiguaContrasena = document.getElementById("contrasenaAntigua").value

      console.log(nuevaContrasena)
      console.log(antiguaContrasena)
    }
  }

  return (
    <section className={styles.inputContainer}>
      <div className={styles.securityInfoFrame}>
        <h1 className={styles.contraseaYSeguridad}>CONTRASEÑA Y SEGURIDAD</h1>
      </div>
      <div className={styles.nameEmailFrame}>
        <div className={styles.nameEmailFrameChild} />
        <div className={styles.fullNameRectangle}>
          <div className={styles.emailRectangle}>
            <b className={styles.nombreCompleto}>{`Nombre de Usuario: `}</b>
            <b className={styles.correo}>{`Correo: `}</b>
          </div>
          <div className={styles.emailRectangle1}>
            <div className={styles.sebastianPicoAfanador}>
              {currentUser.nombre_usuario}
            </div>
            <div className={styles.picoafanadorgmailcom}>
              {currentUser.correo}
            </div>
          </div>
        </div>
        <div className={styles.securitySettingsFrame}>
          <div className={styles.oldPassRectangle}>
            <div className={styles.profilePicFrame}>
              <div className={styles.accountButtonText}>
                <b className={styles.contraseaAntigua}>Contraseña Antigua:</b>
              </div>
              <input className={styles.contraseaYSeguridadText} id="contrasenaAntigua" useref="contrasenaAntigua"/>
            </div>
            <div className={styles.newPassFrame}>
              <b className={styles.contraseaNueva}>Contraseña Nueva:</b>
              <input className={styles.saveButtonText} id="contrasenaNueva" useref="contrasenaNueva"/>
            </div>
            <div className={styles.newPassFrame1}>
              <b className={styles.repitaLaNueva}>
                Repita la nueva contraseña:
              </b>
              <input className={styles.newPassFrameChild} id="contrasenaNueva2" useref="contrasenaNueva2"/>
            </div>
          </div>
          <div className={styles.editInfoButtonText}>
            <div className={styles.saveInfoButton} />
            <div className={styles.inputGroupFrame}>
              <button className={styles.botnEdiotarInformacin} onClick={cambiarContrasena}>
                <div className={styles.botnEdiotarInformacin}>
                  <b className={styles.guardarInformacin} style={{fontSize: "20px"}}>CAMBIAR CONTRASEÑA</b>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InputContainer;
