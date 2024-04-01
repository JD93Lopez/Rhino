import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent1.module.css";
import { DataContext } from "./DataProvider";

const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onUSUARIOSTextClick = useCallback(() => {
    navigate("/vista-administrador-usuarios");
  }, [navigate]);

  const onPROYECTOSTextClick = useCallback(() => {
    navigate("/vista-administrador-proyectos");
  }, [navigate]);

  const onPRODUCTOSTextClick = useCallback(() => {
    navigate("/vista-administrador-productos");
  }, [navigate]);

  const dataContext = useContext(DataContext);

  let nombre_usuario

  if (!dataContext.Loaded) {
    return <div>Cargando... Por favor espere.</div>;
  }else{
    nombre_usuario = dataContext.usuarios.usuarioIniciado.nombre_usuario
  }

  return (
    <header className={styles.emptyFrameWrapper}>
      <div className={styles.emptyFrame}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.logofinalRemovebgPreview1Wrapper}>
            <img
              className={styles.logofinalRemovebgPreview1Icon}
              loading="eager"
              alt=""
              src="/logofinalremovebgpreview-1@2x.png"
            />
          </div>
          <div className={styles.frameWrapper}>
            <nav className={styles.frameGroupParent}>
              <div className={styles.frameGroup}>
                <div className={styles.usuarios} onClick={onUSUARIOSTextClick}>
                  USUARIOS
                </div>
              </div>
              <div className={styles.frameGroup1}>
                <div
                  className={styles.proyectos}
                  onClick={onPROYECTOSTextClick}
                >
                  PROYECTOS
                </div>
              </div>
              <div className={styles.productos} onClick={onPRODUCTOSTextClick}>
                PRODUCTOS
              </div>
              <div className={styles.mantenimientoParent}>
                <div className={styles.mantenimiento}>MANTENIMIENTO</div>
                <img
                  className={styles.frameItem}
                  loading="eager"
                  alt=""
                  src="/line-12.svg"
                />
              </div>
            </nav>
          </div>
          <div className={styles.perfilAdminWrapper}>
            <button className={styles.perfilAdmin}>
              <img
                className={styles.usuario1Icon}
                alt=""
                src="/usuario-1@2x.png"
              />
              <div className={styles.perfilAdminChild} />
              <div className={styles.administrador}>{nombre_usuario}</div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent1;
