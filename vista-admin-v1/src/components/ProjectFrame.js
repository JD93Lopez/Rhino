import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProjectFrame.module.css";
import { DataContext } from "./DataProvider";

const ProjectFrame = () => {
  const navigate = useNavigate();

  const onUSUARIOSTextClick = useCallback(() => {
    navigate("/vista-administrador-usuarios");
  }, [navigate]);

  const onPRODUCTOSTextClick = useCallback(() => {
    navigate("/vista-administrador-productos");
  }, [navigate]);

  const onMANTENIMIENTOTextClick = useCallback(() => {
    navigate("/vista-administrador-mantenimiento");
  }, [navigate]);

  const dataContext = useContext(DataContext);

  let nombre_usuario

  if (!dataContext.Loaded) {
    return <div>Cargando... Por favor espere.</div>;
  }else{
    nombre_usuario = dataContext.usuarios.usuarioIniciado.nombre_usuario
  }

  return (
    <header className={styles.projectFrame}>
      <div className={styles.subProjectFrame}>
        <div className={styles.logoFrame}>
          <div className={styles.logoFrameChild} />
          <img
            className={styles.logofinalRemovebgPreview1Icon}
            loading="eager"
            alt=""
            src="/logofinalremovebgpreview-1@2x.png"
          />
          <div className={styles.contentFrame}>
            <nav className={styles.productsMaintenanceFrame}>
              <div className={styles.usersFrame}>
                <div className={styles.usuarios} onClick={onUSUARIOSTextClick}>
                  USUARIOS
                </div>
              </div>
              <div className={styles.projectFrame1}>
                <div className={styles.userFrame}>
                  <div className={styles.proyectos}>PROYECTOS</div>
                  <img
                    className={styles.userFrameChild}
                    loading="eager"
                    alt=""
                    src="/line-11.svg"
                  />
                </div>
              </div>
              <div className={styles.productos} onClick={onPRODUCTOSTextClick}>
                PRODUCTOS
              </div>
              <div
                className={styles.mantenimiento}
                onClick={onMANTENIMIENTOTextClick}
              >
                MANTENIMIENTO
              </div>
            </nav>
          </div>
          <div className={styles.adminProfileFrame}>
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

export default ProjectFrame;
