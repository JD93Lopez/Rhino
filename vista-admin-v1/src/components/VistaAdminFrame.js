import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./VistaAdminFrame.module.css";

const VistaAdminFrame = () => {
  const navigate = useNavigate();

  const onUSUARIOSContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

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
    <header className={styles.vistaAdminFrame}>
      <div className={styles.userCreateActu}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.logofinalRemovebgPreview1Icon}
            loading="eager"
            alt=""
            src="/logofinalremovebgpreview-1@2x.png"
          />
          <div className={styles.inputFramesWrapper}>
            <nav className={styles.inputFrames}>
              <div className={styles.inputFrames1}>
                <div
                  className={styles.usuarios}
                  onClick={onUSUARIOSContainerClick}
                >
                  <div className={styles.usuarios1}>USUARIOS</div>
                  <img
                    className={styles.usuariosChild}
                    loading="eager"
                    alt=""
                    src="/line-14.svg"
                  />
                </div>
              </div>
              <div className={styles.usersFrame}>
                <div
                  className={styles.proyectos}
                  onClick={onPROYECTOSTextClick}
                >
                  PROYECTOS
                </div>
              </div>
              <div className={styles.productsText}>
                <div
                  className={styles.productos}
                  onClick={onPRODUCTOSTextClick}
                >
                  PRODUCTOS
                </div>
              </div>
              <div
                className={styles.mantenimiento}
                onClick={onMANTENIMIENTOTextClick}
              >
                MANTENIMIENTO
              </div>
            </nav>
          </div>
          <div className={styles.titleCreateUser}>
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

export default VistaAdminFrame;
