import styles from "./LogoButton.module.css";

const LogoButton = ({
  onBotonLogo6Click,
  onBotonProductos6Click,
  onBotonSobreNosotrosClick,
  onBotonMiCuentaClick,
}) => {
  return (
    <div className={styles.logoButton}>
      <div className={styles.logoButtonChild} />
      <div className={styles.productsButton}>
        <div className={styles.botonLogo6} onClick={onBotonLogo6Click} />
      </div>
      <div className={styles.searchButton}>
        <div className={styles.profileFrame}>
          <div
            className={styles.botonProductos6}
            onClick={onBotonProductos6Click}
          >
            PRODUCTOS
          </div>
          <div
            className={styles.botonSobreNosotros}
            onClick={onBotonSobreNosotrosClick}
          >
            SOBRE NOSOTROS
          </div>
        </div>
      </div>
      <div className={styles.imageFrame}>
        <div className={styles.botonLupa6} />
      </div>
      <div className={styles.groupOne}>
        <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img className={styles.perfil1Icon} alt="" src="/perfil-1@2x.png" />
          <div className={styles.myAccountText}>
            <div className={styles.miCuenta} onClick={onBotonMiCuentaClick}>MI CUENTA</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default LogoButton;
