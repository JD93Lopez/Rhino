import React, { useCallback, useContext } from 'react'; // Correcto para useCallback
import { useNavigate } from 'react-router-dom'; // Correcto para useNavigate
import AddProductFrame from "../components/AddProductFrame";
import SearchProjectFrame from "../components/SearchProjectFrame";
import styles from "./VistaAdministradorProyecto.module.css";
import { DataContext } from '../components/DataProvider';

const VistaAdministradorProyecto = () => {
  const dataContext = useContext(DataContext);
  const navigate = useNavigate();
  const onAgregarProyectoClick = useCallback(() => {
    navigate("/vista-administrador-agregar-proyect");
  }, [navigate]);

  const onActualizarProyectoClick = useCallback(() => {
    if (dataContext.selectedProyects.length === 1)
    navigate("/vista-administrador-actualizar-proyect");
  }, [dataContext, navigate]);

    //resetear seleccionados
    dataContext.selectedProyects = []

  return (
    <div className={styles.vistaAdministradorProyecto}>
      <div className={styles.vistaAdministradorProyectoChild} />
      <button className={styles.AgregarProyecto}
              onClick={onAgregarProyectoClick}>
        <div className={styles.agregarProyecto} />
        <div className={styles.AgrProyecto}>Agregar Proyecto</div>
      </button>
      
      <button 
      className={styles.ActualizarProyecto}
              onClick={onActualizarProyectoClick}>
        <div className={styles.actualizarProyecto} />
        <div className={styles.ActuProyecto}>Actualizar</div>
      </button>
      <button className={styles.EliminarProyecto}>
        <div className={styles.eliminarProyecto} />
        <div className={styles.ElimProyecto}>Eliminar</div>
      </button>
      <AddProductFrame/>
      <SearchProjectFrame />
    </div>
  );
};

export default VistaAdministradorProyecto;
