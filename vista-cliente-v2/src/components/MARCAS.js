import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MARCAS.module.css";

const MARCAS = () => {
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
    <header className={styles.mARCAS}>
      <div className={styles.mARCASChild} />
      <div className={styles.vEHCULOS}>
        <div className={styles.botonLogo6} onClick={onBotonLogo6Click} />
      </div>
      <div className={styles.mAQUINARIAPESAD}>
        <div className={styles.botonProductos6Parent}>
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
      <div className={styles.text}>
        <img
          className={styles.carritoDeCompras3Icon}
          loading="lazy"
          alt=""
          src="/carritodecompras-3@2x.png"
          onClick={onCarritoDeCompras3ImageClick}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.botonLupa6} />
      </div>
      <div className={styles.innerFrames}>
        <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img className={styles.perfil1Icon} alt="" src="/perfil-1@2x.png" />
          <div className={styles.mainFrame}>
            <div className={styles.miCuenta}>MI CUENTA</div>
          </div>
        </button>
      </div>
    </header>
  );
};

export default MARCAS;
