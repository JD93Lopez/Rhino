import TarjetaUsuarioAdministrador from "./TarjetaUsuarioAdministrador.js";
import styles from "./UserInfoFrame.module.css";
import { DataContext } from "./DataProvider";
import { useContext, useState } from "react";
import { buscar as buscarExport } from '../pages/VistaAdministradorUsuarios.js';
import { SearchContext } from '../pages/VistaAdministradorUsuarios.js';

const UserInfoFrame = () => {
  const { setBusqueda, buscar } = useContext(SearchContext);
  
  return (
    <div className={styles.userInfoFrame}>
      <div className={styles.usuariosParent}>
        <h1 className={styles.usuarios}>Usuarios</h1>
        <div className={styles.productFrame}>
          <div className={styles.buscarUsuario}>
            <div className={styles.buscarUsuarioChild} />
            <img className={styles.lupa4Icon} alt="" src="/lupa-4@2x.png" />
            <input
        className={styles.buscarUsuario1}
        placeholder="buscar usuario"
        type="text"
        id= "inputbuscarusuario"
        useref= "inputbuscarusuario"
        onChange={(event) => {setBusqueda(event.target.value), buscar()}} // Usar 'setBusqueda' para actualizar el valor de búsqueda
      />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoFrame;
