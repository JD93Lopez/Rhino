import UserNicknameFrame1 from "./UserNicknameFrame1";
import UserNicknameFrame from "./UserNicknameFrame";
import styles from "./InputUserForm.module.css";

const InputUserForm = () => {
  return (
    <section className={styles.inputUserForm}>
      <div className={styles.casillasDeCreacionDeUsuari}>
        <UserNicknameFrame1
          nombreDeUsuario="Nombre  de usuario"
          direccin="Dirección"
        />
        <UserNicknameFrame1
          nombreDeUsuario="Nombre Completo "
          direccin="Tipo de identificación"
        />
        <UserNicknameFrame
          correoElectrnico="Correo electrónico"
          identificacin="identificación"
        />
        <UserNicknameFrame
          correoElectrnico="Teléfono"
          identificacin="Tipo de Usuario"
          propPadding="0px 0px var(--padding-50xl)"
        />
        <div className={styles.casillaContrasea}>
          <div className={styles.contrasea}>Contraseña</div>
          <input className={styles.backButtonFrame} type="text" />
        </div>
      </div>
    </section>
  );
};

export default InputUserForm;
