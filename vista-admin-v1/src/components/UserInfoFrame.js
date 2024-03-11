import styles from "./UserInfoFrame.module.css";

const UserInfoFrame = () => {
  return (
    <div className={styles.userInfoFrame}>
      <div className={styles.usuariosParent}>
        <h1 className={styles.usuarios}>Usuarios</h1>
        <div className={styles.productFrame}>
          <div className={styles.buscarUsuario}>
            <div className={styles.buscarUsuarioChild} />
            <img className={styles.lupa4Icon} alt="" src="/lupa-4@2x.png" />
            <input
              className={styles.buscarUsuario1}
              placeholder="buscar usuario"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoFrame;
