import styles from "./UserNicknameFrame1.module.css";

const UserNicknameFrame1 = ({ nombreDeUsuario, direccin }) => {
  return (
    <div className={styles.userNicknameFrame}>
      <div className={styles.casillaNombreDeUsuario}>
        <div className={styles.nombreDeUsuario}>{nombreDeUsuario}</div>
        <input className={styles.selectTypeUserFrame} type="text" id= "inputnombrerealusuario" useref={"inputnombrerealusuario"} />
      </div>
      <div className={styles.casillaDireccin}>
        <div className={styles.direccin}>{direccin}</div>
        <input className={styles.userTypeFieldFrame} type="text" id= "inputtipoidentificacion" useref={"inputtipoidentificacion"} />
      </div>
    </div>
  );
};

export default UserNicknameFrame1;

