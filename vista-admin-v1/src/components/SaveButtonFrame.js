import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SaveButtonFrame.module.css";
import axios from '../axios.js';
import { DataContext } from "./DataProvider.js";

const SaveButtonFrame = () => {
  const dataContext = useContext(DataContext)
  const { Loaded, selectedUsers, usuarioIniciado } = dataContext;
  const navigate = useNavigate();

  const onBotonAtrsContainerClick = useCallback(() => {
    navigate("/vista-administrador-usuarios");
  }, [navigate]);

  const onSaveButtonClick = () => {
    // Obtener los valores de los campos utilizando useRef
    const nombre_usuario = document.getElementById("inputnombreusuario").value;
    const direccion = document.getElementById("inputdireccionusuario").value;
    const contrasena = document.getElementById("inputcontrasenausuario").value;
    const nombre_real = document.getElementById("inputnombrerealusuario").value;
    const telefono = document.getElementById("inputtelefonousuario").value;
    const identificacion = document.getElementById("inputidentificacionusuario").value;
    const correo = document.getElementById("inputcorreousuario").value;
    const tipo_identificacion = document.getElementById("inputtipoidentificacion").value;
    const tipo_usuario = document.getElementById("inputtipodeusuario").value;
    
    // Crear el objeto de usuario
    const usuarioInsertar = {
      nombre_usuario, 
      contrasena, 
      nombre_real, 
      direccion, 
      telefono, 
      identificacion, 
      correo, 
      tipo_identificacion, 
      tipo_usuario
    };

    if(selectedUsers&&selectedUsers.length!=0){
      if(!Loaded){
        return
      }
      usuarioInsertar.idusuarios = selectedUsers[0].idusuarios
      axios.post(`actualizar/usuario/${usuarioIniciado.nombre_usuario}/${usuarioIniciado.contrasena}`,usuarioInsertar)
    }else{
      axios.post(`agregar/usuario/${usuarioIniciado.nombre_usuario}/${usuarioIniciado.contrasena}`,usuarioInsertar)
    }
  };

  return (
    <footer className={styles.saveButtonFrame}>
      <div className={styles.previousStepButton}>
        <div className={styles.botonAtrs} onClick={onBotonAtrsContainerClick}>
          <button className={styles.backButtonLabel}>
            <div className={styles.backButtonLabelChild} />
            <div className={styles.atrs}>{`Atrás  `}</div>
          </button>
        </div>
        <button className={styles.adminProfileFrame} onClick={onSaveButtonClick}>
          <div className={styles.adminProfileFrameChild} />
          <div className={styles.guardar}>GUARDAR</div>
        </button>
      </div>
    </footer>
  );
};

export default SaveButtonFrame;
