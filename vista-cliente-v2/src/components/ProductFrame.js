import { useMemo } from "react";
import styles from "./ProductFrame.module.css";

const ProductFrame = ({
  rectangleDivHeight,
  onBotonLogo6Click,
  onBotonProductos6Click,
  onBotonSobreNosotrosClick,
  onCarritoDeCompras3ImageClick,
}) => {
  const productFrameStyle = useMemo(() => {
    return {
      height: rectangleDivHeight,
    };
  }, [rectangleDivHeight]);

  return (
    <header className={styles.productFrame} style={productFrameStyle}>
      <div className={styles.productFrameChild} />
      <div className={styles.headerFrames}>
        <div className={styles.headerFramesChild} />
        <div className={styles.productButtons}>
          <div className={styles.botonLogo6} onClick={onBotonLogo6Click} />
        </div>
        <div className={styles.profileFrame}>
          <div className={styles.detailedInfo}>
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
        <div className={styles.mainBackground}>
          <img
            className={styles.carritoDeCompras3Icon}
            loading="lazy"
            alt=""
            src="/carritodecompras-3@2x.png"
            onClick={onCarritoDeCompras3ImageClick}
          />
        </div>
        <div className={styles.mHSpecs}>
          <button className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img className={styles.perfil1Icon} alt="" src="/perfil-1@2x.png" />
            <div className={styles.accountButton}>
              <div className={styles.miCuenta}>MI CUENTA</div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default ProductFrame;
