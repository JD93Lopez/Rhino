import { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SaveButtonFrame.module.css";
import axios from '../axios.js';
import { DataContext } from "./DataProvider.js";

const SaveButtonFrame = () => {
  const dataContext = useContext(DataContext)
  const { Loaded, selectedUsers, usuarioIniciado } = dataContext;
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);
  const [notificationContent, setNotificationContent] = useState("");
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
    const estado = document.getElementById("inputestadodeusuario").value;
    
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
      tipo_usuario,
      estado
    };

    if(
      nombre_usuario!=""&&nombre_real!=""&&
      direccion!=""&&telefono!=""&&identificacion!=""&&
      correo!=""&&tipo_identificacion!=""&&tipo_usuario!=""
    ) {
      if(selectedUsers&&selectedUsers.length!=0){
        if(!Loaded){
          return
        }
        usuarioInsertar.idusuarios = selectedUsers[0].idusuarios
        axios.post(`actualizar/usuario/${usuarioIniciado.nombre_usuario}/${usuarioIniciado.contrasena}`,usuarioInsertar)
      }else{
        if (contrasena!="") {
          axios.post(`agregar/usuario/${usuarioIniciado.nombre_usuario}/${usuarioIniciado.contrasena}`,usuarioInsertar)
        }
      }
      setNotificationContent("¡Guardado exitoso!");

      setShowNotification(true);

      //Ocultar la notificación después de 2 segundos
      setTimeout(() => {
        setShowNotification(false);
        navigate("/vista-administrador-usuarios");
      }, 2000);
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
        {showNotification && (
        <div className={styles.notificationContainer}>
          <div className={styles.notification}>{notificationContent}</div>
        </div>
      )}
      </div>
    </footer>
  );
};

export default SaveButtonFrame;
