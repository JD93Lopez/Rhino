import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onPROYECTOSTextClick = useCallback(() => {
    navigate("/vista-administrador-proyectos");
  }, [navigate]);

  const onPRODUCTOSTextClick = useCallback(() => {
    navigate("/vista-administrador-productos");
  }, [navigate]);

  const onMANTENIMIENTOTextClick = useCallback(() => {
    navigate("/vista-administrador-mantenimiento");
  }, [navigate]);

  return (
    <header className={styles.frameProductWrapper}>
      <div className={styles.frameProduct}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.logofinalRemovebgPreview1Icon}
            loading="eager"
            alt=""
            src="/logofinalremovebgpreview-1@2x.png"
          />
          <nav className={styles.frameParent}>
            <div className={styles.usuariosParent}>
              <div className={styles.usuarios}>USUARIOS</div>
              <img
                className={styles.frameItem}
                loading="eager"
                alt=""
                src="/line-1.svg"
              />
            </div>
            <div className={styles.projectsFrame}>
              <div className={styles.proyectos} onClick={onPROYECTOSTextClick}>
                PROYECTOS
              </div>
            </div>
            <div className={styles.frameAdmin}>
              <div className={styles.productos} onClick={onPRODUCTOSTextClick}>
                PRODUCTOS
              </div>
            </div>
            <div className={styles.frameAdmin1}>
              <div
                className={styles.mantenimiento}
                onClick={onMANTENIMIENTOTextClick}
              >
                MANTENIMIENTO
              </div>
            </div>
          </nav>
          <div className={styles.perfilAdminWrapper}>
            <button className={styles.perfilAdmin}>
              <img
                className={styles.usuario1Icon}
                alt=""
                src="/usuario-1@2x.png"
              />
              <div className={styles.perfilAdminChild} />
              <div className={styles.administrador}>Administrador</div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent;
