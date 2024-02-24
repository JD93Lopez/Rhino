import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import UserInfoFrame from "../components/UserInfoFrame";
import { useNavigate } from "react-router-dom";
import styles from "./VistaAdministradorUsuarios.module.css";

const VistaAdministradorUsuarios = () => {
  const navigate = useNavigate();

  const onActualizarUsuarioClick = useCallback(() => {
    navigate("/vista-administrador-usuarios-crear-usuarioactualizar-usuario");
  }, [navigate]);

  const onCrearUsuarioClick = useCallback(() => {
    navigate("/vista-administrador-usuarios-crear-usuarioactualizar-usuario");
  }, [navigate]);

  return (
    <div className={styles.vistaAdministradorUsuarios}>
      <div className={styles.vistaAdministradorUsuariosChild} />
      <FrameComponent />
      <main className={styles.vistaAdministradorUsuariosInner}>
        <section className={styles.userInfoFrameParent}>
          <UserInfoFrame />
          <div className={styles.adminProfile}>
            <div className={styles.userGroup}>
              <div className={styles.userCard}>
                <div className={styles.userCardChild} />
                <div className={styles.nameAndImage}>
                  <div className={styles.userDetails}>
                    <div className={styles.userInfoBox}>
                      <div className={styles.usuario}>USUARIO</div>
                    </div>
                    <div className={styles.userInfoBox1}>
                      <div className={styles.nombreCompleto}>
                        NOMBRE COMPLETO
                      </div>
                    </div>
                    <div className={styles.userInfoBox2}>
                      <div className={styles.correoElectronico}>
                        CORREO ELECTRONICO
                      </div>
                    </div>
                    <div className={styles.celular}>CELULAR</div>
                    <div className={styles.estado}>ESTADO</div>
                  </div>
                </div>
                <div className={styles.cellNumber}>
                  <div className={styles.cellNumberChild} />
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.activeUser}>
                      <div className={styles.pepito87}>PEPITO87</div>
                    </div>
                    <div className={styles.adminName}>
                      <div className={styles.pepitoPerez}>PEPITO PEREZ</div>
                    </div>
                    <div className={styles.emailIcon}>
                      <div className={styles.pepitoperez87gmailcom}>
                        pepitoperez87@gmail.com
                      </div>
                    </div>
                    <div className={styles.statusIndicator}>
                      <div className={styles.inactivestate}>3253692587</div>
                    </div>
                    <div className={styles.activestate}>
                      <div className={styles.activo}>Activo</div>
                    </div>
                  </div>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.frameItem} />
                    <div className={styles.pato3452Wrapper}>
                      <div className={styles.pato3452}>PATO3452</div>
                    </div>
                    <div className={styles.pabloLopezWrapper}>
                      <div className={styles.pabloLopez}>PABLO LOPEZ</div>
                    </div>
                    <div className={styles.pato3452gmailcomWrapper}>
                      <div className={styles.pato3452gmailcom}>
                        pato3452@gmail.com
                      </div>
                    </div>
                    <div className={styles.wrapper}>
                      <div className={styles.div}>3253647887</div>
                    </div>
                    <div className={styles.inactivo}>Inactivo</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.actualizarUsuarioParent}>
              <button
                className={styles.actualizarUsuario}
                onClick={onActualizarUsuarioClick}
              >
                <div className={styles.actualizarUsuarioChild} />
                <div className={styles.actualizarUsuario1}>
                  Actualizar Usuario
                </div>
              </button>
              <button
                className={styles.crearUsuario}
                onClick={onCrearUsuarioClick}
              >
                <div className={styles.crearUsuarioChild} />
                <div className={styles.crearNuevo}>Crear Nuevo</div>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VistaAdministradorUsuarios;
