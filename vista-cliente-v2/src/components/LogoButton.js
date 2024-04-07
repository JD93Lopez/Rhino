import ListaDesplegable2 from "./ListaDesplegable2";
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
      <div className={styles.groupOne}onClick={onBotonMiCuentaClick}>
        {/* <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img className={styles.perfil1Icon} alt="" src="/perfil-1@2x.png" />
          <div className={styles.myAccountText}>
            <div className={styles.miCuenta} >MI CUENTA</div>
          </div>
        </button> */}
        <ListaDesplegable2
          titulo = {<div><img className={styles.perfil1Icon} alt="" src="/perfil-1@2x.png" />Mi Cuenta</div>}
        ></ListaDesplegable2>
      </div>
    </div>
  );
};

export default LogoButton;
