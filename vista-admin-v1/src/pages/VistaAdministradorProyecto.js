import ProjectFrame from "../components/ProjectFrame";
import SearchProjectFrame from "../components/SearchProjectFrame";
import styles from "./VistaAdministradorProyecto.module.css";

const VistaAdministradorProyecto = () => {
  return (
    <div className={styles.vistaAdministradorProyecto}>
      <div className={styles.vistaAdministradorProyectoChild} />
      <ProjectFrame />
      <SearchProjectFrame />
    </div>
  );
};

export default VistaAdministradorProyecto;
