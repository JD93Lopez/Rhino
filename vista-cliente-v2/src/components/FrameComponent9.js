import { useMemo } from "react";
import styles from "./FrameComponent9.module.css";

const FrameComponent9 = ({
  rectangleDivPadding,
  rectangleDivAlignSelf,
  rectangleDivWidth,
  onBotonLogo6Click,
  onBotonProductos6Click,
  onBotonSobreNosotrosClick,
  onCarritoDeCompras3ImageClick,
  onGroupButtonClick,
}) => {
  const frameHeaderStyle = useMemo(() => {
    return {
      padding: rectangleDivPadding,
    };
  }, [rectangleDivPadding]);

  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: rectangleDivAlignSelf,
      width: rectangleDivWidth,
    };
  }, [rectangleDivAlignSelf, rectangleDivWidth]);

  return (
    <header className={styles.rectangleParent} style={frameHeaderStyle}>
      <div className={styles.frameChild} />
      <div className={styles.rectangleGroup} style={frameDivStyle}>
        <div className={styles.frameItem} />
        <div className={styles.botonLogo6Wrapper}>
          <div className={styles.botonLogo6} onClick={onBotonLogo6Click} />
        </div>
        <div className={styles.frameWrapper}>
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
        <div className={styles.carritoDeCompras3Wrapper}>
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
        <div className={styles.frameContainer}>
          <button
            className={styles.rectangleContainer}
            onClick={onGroupButtonClick}
          >
            <div className={styles.frameInner} />
            <img className={styles.perfil1Icon} alt="" src="/perfil-1@2x.png" />
            <div className={styles.myAccountButton}>
              <div className={styles.miCuenta}>MI CUENTA</div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent9;
