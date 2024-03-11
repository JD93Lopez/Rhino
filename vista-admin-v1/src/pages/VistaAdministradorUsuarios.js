import { createContext, useCallback, useContext, useState } from "react";
import FrameComponent from "../components/FrameComponent";
import UserInfoFrame from "../components/UserInfoFrame";
import { useNavigate } from "react-router-dom";
import styles from "./VistaAdministradorUsuarios.module.css";
import { DataContext } from "../components/DataProvider";
import { TarjetaUsuarioAdministrador } from "../components/TarjetaUsuarioAdministrador";

const VistaAdministradorUsuarios = () => {
  const navigate = useNavigate();
  const dataContext = useContext(DataContext);
  const [usuariosSeleccionados, setUsuariosSeleccionados] = useState([]);

  const onActualizarUsuarioClick = useCallback(() => {
    navigate("/vista-administrador-usuarios-crear-usuarioactualizar-usuario");
  }, [navigate]);

  const onCrearUsuarioClick = useCallback(() => {
    navigate("/vista-administrador-usuarios-crear-usuarioactualizar-usuario");
  }, [navigate]);

  const eliminarUsuariosSeleccionados = useCallback(() => {
    const nuevosUsuarios = dataContext.usuarios.filter(
      (usuario) => !usuariosSeleccionados.includes(usuario.email)
    );
    dataContext.setUsuarios(nuevosUsuarios);
    setUsuariosSeleccionados([]);
  }, [dataContext, usuariosSeleccionados]);

  const manejarSeleccionUsuario = useCallback(
    (email, seleccionado) => {
      if (seleccionado) {
        setUsuariosSeleccionados((prevSeleccionados) => [
          ...prevSeleccionados,
          email,
        ]);
      } else {
        setUsuariosSeleccionados((prevSeleccionados) =>
          prevSeleccionados.filter((usuario) => usuario !== email)
        );
      }
    },
    []
  );

  if (!dataContext.Loaded) {
    return <div>Cargando... Por favor espere.</div>;
  }

  const usuarios = dataContext.usuarios;

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
                      <div className={styles.nombreCompleto}>NOMBRE COMPLETO</div>
                    </div>
                    <div className={styles.userInfoBox2}>
                      <div className={styles.correoElectronico}>CORREO ELECTRONICO</div>
                    </div>
                    <div className={styles.celular}>CELULAR</div>
                    <div className={styles.estado}>ESTADO</div>
                  </div>
                </div>
                <div className={styles.cellNumber}>
                  {usuarios.map((usuario) => (
                    <TarjetaUsuarioAdministrador
                      nombreUsuario={usuario.nombreUsuario}
                      nombreCompleto={usuario.nombreCompleto}
                      email={usuario.email}
                      telefono={usuario.telefono}
                      estado={usuario.estado}
                      key={usuario.email}
                      id={"usuario" + usuario.email}
                      useref={"usuario" + usuario.email}
                      onSeleccionarUsuario={manejarSeleccionUsuario}
                      seleccionado={usuariosSeleccionados.includes(usuario.email)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.actualizarUsuarioParent}>
              <button
                className={styles.actualizarUsuario}
                onClick={onActualizarUsuarioClick}
              >
                <div className={styles.actualizarUsuarioChild} />
                <div className={styles.actualizarUsuario1}>Actualizar Usuario</div>
              </button>
              <button className={styles.crearUsuario} onClick={onCrearUsuarioClick}>
                <div className={styles.crearUsuarioChild} />
                <div className={styles.crearNuevo}>Crear Nuevo</div>
              </button>
              <button
                className={styles.eliminarUsuarios}
                onClick={eliminarUsuariosSeleccionados}
                disabled={usuariosSeleccionados.length === 0}
              >
                <div className={styles.eliminarUsuariosChild} />
                <div className={styles.eliminarUsuarios1}>Eliminar</div>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VistaAdministradorUsuarios;