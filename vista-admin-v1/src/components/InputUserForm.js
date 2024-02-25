import UserNicknameFrame1 from "./UserNicknameFrame1";
import UserNicknameFrame2 from "./UserNicknameFrame2";
import UserNicknameFrame3 from "./UserNicknameFrame3";
import UserNicknameFrame from "./UserNicknameFrame";
import styles from "./InputUserForm.module.css";

const InputUserForm = () => {
  return (
    <section className={styles.inputUserForm}>
      <div className={styles.casillasDeCreacionDeUsuari}>
        <UserNicknameFrame1
          nombreDeUsuario="Nombre de usuario"
          direccin="Dirección"
        />
        <UserNicknameFrame2
          nombreDeUsuario="Nombre Completo "
          direccin="Tipo de identificación"
        />
        <UserNicknameFrame
          correoElectrnico="Correo electrónico"
          identificacin="identificación"
        />
        <UserNicknameFrame3
          correoElectrnico="Teléfono"
          identificacin="Tipo de Usuario"
          propPadding="0px 0px var(--padding-50xl)"
        />
        <div className={styles.casillaContrasea}>
          <div className={styles.contrasea}>Contraseña</div>
          <input className={styles.backButtonFrame} type="text" id= "inputcontrasenausuario" useref={"inputcontrasenausuario"} />
        </div>
      </div>
    </section>
  );
};

export default InputUserForm;
