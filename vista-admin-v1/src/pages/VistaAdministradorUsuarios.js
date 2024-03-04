import { useCallback, useContext, useEffect } from "react";
import FrameComponent from "../components/FrameComponent";
import UserInfoFrame from "../components/UserInfoFrame";
import { useNavigate } from "react-router-dom";
import styles from "./VistaAdministradorUsuarios.module.css";
import { DataContext } from "../components/DataProvider";
import { TarjetaUsuarioAdministrador } from "../components/TarjetaUsuarioAdministrador";

const VistaAdministradorUsuarios = () => {
  const navigate = useNavigate();

  const onActualizarUsuarioClick = useCallback(() => {
    navigate("/vista-administrador-usuarios-crear-usuarioactualizar-usuario");
  }, [navigate]);

  const onCrearUsuarioClick = useCallback(() => {
    navigate("/vista-administrador-usuarios-crear-usuarioactualizar-usuario");
  }, [navigate]);

  const dataContext = useContext(DataContext)

  if(!dataContext.Loaded){
    return <div>Cargando... Por favor espere.</div>
  }

  const usuarios = dataContext.usuarios

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
                  {usuarios.map(usuario => {
                    return <TarjetaUsuarioAdministrador
                      nombreUsuario = {usuario.nombreUsuario}
                      nombreCompleto = {usuario.nombreCompleto}
                      email = {usuario.email}
                      telefono = {usuario.telefono}
                      estado = {usuario.estado}
                      key = {usuario.email}
                    ></TarjetaUsuarioAdministrador>
                  })}
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
