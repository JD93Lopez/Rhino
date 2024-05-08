import { useMemo } from "react";
import styles from "./UserNicknameFrame.module.css";

const UserNicknameFrame = ({
  correoElectrnico,
  identificacin,
  propPadding,
}) => {
  const userNicknameFrameStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.userNicknameFrame} style={userNicknameFrameStyle}>
      <div style={{display:"flex",flexDirection:"column"}}>
        <div className={styles.casillaCorreoWrapper}>
          <div className={styles.casillaCorreo}>
            <div className={styles.correoElectrnico}>{correoElectrnico}</div>
            <input className={styles.inputIdentification} type="text" id= "inputtelefonousuario" useref={"inputtelefonousuario"} />
          </div>
        </div>
        <br></br>
        <div className={styles.casillaContrasea}>
          <div className={styles.contrasea}>Contraseña</div>
          <input style={{width:"378px"}} className={styles.inputIdentification} type="text" id= "inputcontrasenausuario" useref={"inputcontrasenausuario"} />
        </div>
      </div>
      <div style={{display:"flex",flexDirection:"column"}}>
        <div className={styles.casillaIdentificacin}>
          <div className={styles.identificacin}>{identificacin}</div>
          <input className={styles.casillaIdentificacinChild} type="text"id= "inputtipodeusuario" uuseref={"inputtipodeusuario"} />
        </div>
        <br></br>
        <div className={styles.casillaIdentificacin}>
          <div className={styles.identificacin}>Estado</div>
          <input className={styles.casillaIdentificacinChild} type="text"id= "inputestadodeusuario" uuseref={"inputestadodeusuario"} />
        </div>
      </div>
    </div>
  );
};

export default UserNicknameFrame;
