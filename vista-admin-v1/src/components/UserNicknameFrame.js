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
      <div className={styles.casillaCorreoWrapper}>
        <div className={styles.casillaCorreo}>
          <div className={styles.correoElectrnico}>{correoElectrnico}</div>
          <input className={styles.inputIdentification} type="text" />
        </div>
      </div>
      <div className={styles.casillaIdentificacin}>
        <div className={styles.identificacin}>{identificacin}</div>
        <input className={styles.casillaIdentificacinChild} type="text" />
      </div>
    </div>
  );
};

export default UserNicknameFrame;
