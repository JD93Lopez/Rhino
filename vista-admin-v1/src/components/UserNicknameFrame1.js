import { useContext } from "react";
import styles from "./UserNicknameFrame1.module.css";
import { DataContext } from "./DataProvider";

const UserNicknameFrame1 = ({ nombreDeUsuario, direccin }) => {

  const value = useContext(DataContext).data1

  return (
    <div className={styles.userNicknameFrame}>
      <div className={styles.casillaNombreDeUsuario}>
        <div className={styles.nombreDeUsuario}>{nombreDeUsuario}</div>
        <input className={styles.selectTypeUserFrame} type="text" id= "inputnombreusuario" useref={"inputnombreusuario"} value={value}/>
      </div>
      <div className={styles.casillaDireccin}>
        <div className={styles.direccin}>{direccin}</div>
        <input className={styles.userTypeFieldFrame} type="text" id= "inputdireccionusuario" useref={"inputdireccionusuario"} />
      </div>
    </div>
  );
};

export default UserNicknameFrame1;

