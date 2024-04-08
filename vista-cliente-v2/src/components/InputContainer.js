import { useContext, useState } from "react";
import { DataContext } from "./DataProvider";
import styles from "./InputContainer.module.css";

const InputContainer = () => {
  const dataContext = useContext(DataContext);
  const [currentUser, setCurrentUser] = useState(dataContext.usuarioIniciado);
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
            <b className={styles.contrasea}>{`Contraseña: `}</b>
          </div>
          <div className={styles.emailRectangle1}>
            <div className={styles.sebastianPicoAfanador}>
              {currentUser.nombre_usuario}
            </div>
            <div className={styles.picoafanadorgmailcom}>
              {currentUser.correo}
            </div>
            <div className={styles.div}>{currentUser.contrasena}</div>
          </div>
        </div>
        <div className={styles.securitySettingsFrame}>
          <div className={styles.oldPassRectangle}>
            <div className={styles.profilePicFrame}>
              <div className={styles.accountButtonText}>
                <b className={styles.contraseaAntigua}>Contraseña Antigua:</b>
              </div>
              <div className={styles.contraseaYSeguridadText} />
            </div>
            <div className={styles.newPassFrame}>
              <b className={styles.contraseaNueva}>Contraseña Nueva:</b>
              <div className={styles.saveButtonText} />
            </div>
            <div className={styles.newPassFrame1}>
              <b className={styles.repitaLaNueva}>
                Repita la nueva contraseña:
              </b>
              <div className={styles.newPassFrameChild} />
            </div>
          </div>
          <div className={styles.editInfoButtonText}>
            <div className={styles.saveInfoButton} />
            <div className={styles.inputGroupFrame}>
              <div className={styles.botnEdiotarInformacin}>
                <div className={styles.botnEdiotarInformacinChild} />
                <b className={styles.guardarInformacin}>GUARDAR INFORMACIÓN</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InputContainer;
