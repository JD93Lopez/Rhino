import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent6.module.css";

const FrameComponent6 = () => {
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
    <header className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.mICUENTAFRAME}>
          <div className={styles.botonLogo6} onClick={onBotonLogo6Click} />
        </div>
        <div className={styles.groupperfil}>
          <div className={styles.rectanglenombre}>
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
        <div className={styles.carritodecompras}>
          <img
            className={styles.carritoDeCompras3Icon}
            loading="lazy"
            alt=""
            src="/carritodecompras-3@2x.png"
            onClick={onCarritoDeCompras3ImageClick}
          />
        </div>
        <div className={styles.botonLupa6Wrapper}>
          <div className={styles.botonLupa6} />
        </div>
        <div className={styles.frameWrapper}>
          <button className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <img className={styles.perfil1Icon} alt="" src="/perfil-1@2x.png" />
            <div className={styles.plazodecompra}>
              <div className={styles.miCuenta}>MI CUENTA</div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent6;
