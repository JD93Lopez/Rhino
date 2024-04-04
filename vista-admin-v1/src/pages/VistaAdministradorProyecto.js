import React, { useCallback } from 'react'; // Correcto para useCallback
import { useNavigate } from 'react-router-dom'; // Correcto para useNavigate
import ProjectFrame from "../components/ProjectFrame";
import SearchProjectFrame from "../components/SearchProjectFrame";
import styles from "./VistaAdministradorProyecto.module.css";

const VistaAdministradorProyecto = () => {

  const navigate = useNavigate();
  const onAgregarProyectoClick = useCallback(() => {
    navigate("/vista-administrador-agregar-proyect");
  }, [navigate]);

  return (
    <div className={styles.vistaAdministradorProyecto}>
      <div className={styles.vistaAdministradorProyectoChild} />
      <button className={styles.AgregarProyecto}
              onClick={onAgregarProyectoClick}>
        <div className={styles.agregarProyecto} />
        <div className={styles.AgrProyecto}>Agregar Proyecto</div>
      </button>
      <button className={styles.ActualizarProyecto}>
        <div className={styles.actualizarProyecto} />
        <div className={styles.ActuProyecto}>Actualizar</div>
      </button>
      <button className={styles.EliminarProyecto}>
        <div className={styles.eliminarProyecto} />
        <div className={styles.ElimProyecto}>Eliminar</div>
      </button>
      <ProjectFrame />
      <SearchProjectFrame />
    </div>
  );
};

export default VistaAdministradorProyecto;
