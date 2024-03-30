// VistaAdminstradorUsuario.js
import React, { useState, useContext, useEffect, useCallback } from 'react';
import FrameComponent from "../components/FrameComponent";
import UserInfoFrame from "../components/UserInfoFrame";
import { useNavigate } from "react-router-dom";
import styles from "./VistaAdministradorUsuarios.module.css";
import { DataContext } from "../components/DataProvider";
import { TarjetaUsuarioAdministrador } from "../components/TarjetaUsuarioAdministrador";
import orden from "../OrdenamientoSimilitud";

export const SearchContext = React.createContext();

const VistaAdministradorUsuarios = () => {
  const dataContext = useContext(DataContext);
  const { Loaded, usuarios: usuariosContext } = dataContext;
  if (!Loaded) {
    return <div>Cargando... Por favor espere.</div>;
  }
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState('');
  const [usuariosSeleccionados, setUsuariosSeleccionados] = useState([]);

  const onActualizarUsuarioClick = useCallback(() => {
    console.log(usuariosSeleccionados.length)
    if( usuariosSeleccionados.length === 1 ){
      dataContext.selectedUsers = usuariosSeleccionados
      navigate("/vista-administrador-usuarios-actualizar-usuario");
    }
  }, [navigate, usuariosSeleccionados]);
    
  

  const onCrearUsuarioClick = useCallback(() => {
    dataContext.selectedUsers = []
    navigate("/vista-administrador-usuarios-crear-usuarioactualizar-usuario");
  }, [navigate],dataContext.selectedUsers);

  const manejarSeleccionUsuario = (usuario) => {
    setUsuariosSeleccionados((prevSeleccionados) => {
      const usuarioExiste = prevSeleccionados.some((u) => u.correo === usuario.correo);
  
      if (usuarioExiste) {
        return prevSeleccionados.filter((u) => u.correo !== usuario.correo);
      } else {
        return [...prevSeleccionados, usuario];
      }
    });
    console.log(usuariosSeleccionados)
  };
  
  const eliminarUsuariosSeleccionados = (usuariosSeleccionados) => {
    dataContext.usuarios
    // Lógica para eliminar los usuarios seleccionados
    console.log('Usuarios seleccionados a eliminar:', usuariosSeleccionados);
    // Después de eliminarlos, resetea el estado de usuariosSeleccionados
    setUsuariosSeleccionados([]);
  };

  //resetear seleccionados

  dataContext.selectedUsers = []

  //cargar usuarios de la lista

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    if (Loaded) {
      setUsuarios(usuariosContext);
    }
  }, [Loaded, usuariosContext]);

  const buscar = useCallback(() => {
    const inputValue = document.getElementById("inputbuscarusuario").value;
    let nuevosUsuarios = usuariosContext.map((user) => {
     const similitud = orden.calcularSimilitud(inputValue, user.nombre_usuario);
     return { usuario: user, similitud: similitud };
    }).sort((a, b) => b.similitud - a.similitud);
    nuevosUsuarios = nuevosUsuarios.map((usuarioSimilitud)=>{
     return usuarioSimilitud.usuario
    })
    
    setUsuarios(nuevosUsuarios);
   }, [usuariosContext]);
  
   useEffect(() => {
    buscar();
  }, [busqueda, usuariosContext]);
  
  return (
/*Usar el proveedor del contexto para compartir 'busqueda' y 'setBusqueda'*/
<DataContext.Provider value={{ Loaded, usuarios: usuariosContext, manejarSeleccionUsuario, usuariosSeleccionados }}>
    <SearchContext.Provider value={{ busqueda, setBusqueda }}>
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
                      usuario = { usuario }
                      nombreUsuario = {usuario.nombre_usuario}
                      nombreCompleto = {usuario.nombre_real}
                      email = {usuario.correo}
                      telefono = {usuario.telefono}
                      estado = {usuario.estado}
                      key = {usuario.correo}
                      id = {"usuario"+usuario.correo}
                      useref = {"usuario"+usuario.correo}
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
              <button 
                className={styles.eliminarUsuariosSeleccionados}  
                onClick={() => eliminarUsuariosSeleccionados(usuariosSeleccionados)}>
                <div calssName={styles.eliminarusuarioChild} />
                <div className={styles.EliminarSeleccionados} >Eliminar</div>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
    
    </SearchContext.Provider>
    </DataContext.Provider>
  );
};

export default VistaAdministradorUsuarios;