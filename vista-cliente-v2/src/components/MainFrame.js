import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MainFrame.module.css";

const MainFrame = () => {
  const navigate = useNavigate();

  const onBotonLogo6Click = useCallback(() => {
    navigate("/ventana-principal-2");
  }, [navigate]);

  const onBotonProductos6Click = useCallback(() => {
    navigate("/ventana-para-buscar-productos");
  }, [navigate]);

  const onBotonSobreNosotrosClick = useCallback(() => {
    navigate("/ventana-sobre-nosotros");
  }, [navigate]);

  const onCarritoDeCompras3ImageClick = useCallback(() => {
    navigate("/ventana-carrito-de-compras");
  }, [navigate]);

  return (
    <div className={styles.mainFrame}>
      <header className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.logoButton}>
          <div className={styles.botonLogo6} onClick={onBotonLogo6Click} />
        </div>
        <div className={styles.cartIcon}>
          <div className={styles.searchIconButton}>
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
        <div className={styles.myAccountFrame}>
          <img
            className={styles.carritoDeCompras3Icon}
            loading="lazy"
            alt=""
            src="/carritodecompras-3@2x.png"
            onClick={onCarritoDeCompras3ImageClick}
          />
        </div>
        <div className={styles.frameLogin}>
          <div className={styles.botonLupa6} />
        </div>
        <div className={styles.usernameInputField}>
          <button className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <img className={styles.perfil1Icon} alt="" src="/perfil-1@2x.png" />
            <div className={styles.oldPasswordFrame}>
              <div className={styles.miCuenta}>MI CUENTA</div>
            </div>
          </button>
        </div>
      </header>
    </div>
  );
};

export default MainFrame;
