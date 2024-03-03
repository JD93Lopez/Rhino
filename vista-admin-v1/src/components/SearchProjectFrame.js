import TarjetaProyectoAdministrador from "./TarjetaProyectoAdministrador";
import styles from "./SearchProjectFrame.module.css";
import { DataContext } from "./DataProvider";
import { useContext } from "react";

const SearchProjectFrame = () => {

  const dataContext = useContext(DataContext)

  if(!dataContext.Loaded){
    return <div>Cargando... Por favor espere.</div>
  }

  const proyectos = dataContext.proyectos

  const buscar = () => {
    //TODO ordenar proyectos
  }

  return (
    <section className={styles.searchProjectFrame}>
      <div className={styles.projectFrame}>
        <div className={styles.adminProfileFrame}>
          <h1 className={styles.proyectos}>Proyectos</h1>
          <div className={styles.buscarUsuario}>
            <div className={styles.buscarUsuarioChild} />
            <img className={styles.lupa4Icon} alt="" src="/lupa-4@2x.png" />
            <input
              className={styles.buscarProyecto}
              placeholder="buscar proyecto"
              type="text"
              onChange={buscar}
            />
          </div>
        </div>
        <div className={styles.projectFrame1}>
          {proyectos.map(proyecto => {
            return <TarjetaProyectoAdministrador
              encargadoProyecto={proyecto.encargadoProyecto}
              telefono={proyecto.telefono}
              cedula={proyecto.cedula}
              descripcion={proyecto.descripcion}
            >
            </TarjetaProyectoAdministrador>
          })}
        </div>
      </div>
    </section>
  );
};

export default SearchProjectFrame;
