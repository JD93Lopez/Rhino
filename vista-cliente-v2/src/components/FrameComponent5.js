import { useContext, useMemo } from "react";
import styles from "./FrameComponent5.module.css";
import ListaDesplegable2 from "./ListaDesplegable2";
import { DataContext } from "./DataProvider";

const FrameComponent5 = ({
  rectangleDivHeight,
  rectangleDivPadding,
  buttonlogoPadding,
  onBotonLogo6Click,
  onBotonProductos6Click,
  onBotonSobreNosotrosClick,
  onCarritoDeCompras3ImageClick,
  onBotonMiCuentaClick,
}) => {
  const dataContext = useContext(DataContext)
  const frameSectionStyle = useMemo(() => {
    return {
      height: rectangleDivHeight,
      padding: rectangleDivPadding,
    };
  }, [rectangleDivHeight, rectangleDivPadding]);

  const frameHeaderStyle = useMemo(() => {
    return {
      padding: buttonlogoPadding,
    };
  }, [buttonlogoPadding]);

  return (
    <section
      className={styles.ventanaDeInformacinPersonaInner}
      style={frameSectionStyle}
    >
      <header className={styles.rectangleParent} style={frameHeaderStyle}>
        <div className={styles.frameChild} />
        <div className={styles.buttonlogo}>
          <div className={styles.botonLogo6} onClick={onBotonLogo6Click} />
        </div>
        <div className={styles.frameAboutUs}>
          <div className={styles.carritoDeCompras}>
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
        <div className={styles.perfil}>
          <img
            className={styles.carritoDeCompras3Icon}
            loading="lazy"
            alt=""
            src="/carritodecompras-3@2x.png"
            onClick={onCarritoDeCompras3ImageClick}
          />
        </div>
        <div className={styles.iNFORMACINPERSO}>
          <div className={styles.botonLupa6} />
        </div>
        <div className={styles.groupOne}onClick={onBotonMiCuentaClick}>
        <ListaDesplegable2
          titulo = {<div><img className={styles.perfil1Icon} alt="" src="/perfil-1@2x.png" />{dataContext.usuarioIniciado.nombre_usuario}</div>}
        ></ListaDesplegable2>
      </div>
      </header>
    </section>
  );
};

export default FrameComponent5;
