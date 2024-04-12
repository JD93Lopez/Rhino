import TarjetaProyectoAdministrador from "./TarjetaProyectoAdministrador";
import styles from "./SearchProjectFrame.module.css";
import { DataContext } from "./DataProvider";
import { useContext, useState } from "react";
import orden from "../OrdenamientoSimilitud";

const SearchProjectFrame = () => {
  
  const dataContext = useContext(DataContext);
  
  if (!dataContext.Loaded) {
    return <div>Cargando... Por favor espere.</div>;
  }

  const [proyectos, setProyectos] = useState(dataContext.proyectos);

  const buscar = () => {
    const inputValue = document.getElementById("inputbuscarproyecto").value;
    let nuevosProyectos = dataContext.proyectos.map((project) => {
      const similitud = orden.calcularSimilitud(inputValue, project.nombre);
      return { proyecto: project, similitud: similitud };
    }).sort((a, b) => b.similitud - a.similitud);
    nuevosProyectos = nuevosProyectos.map((proyectoSimilitud)=>{
      return proyectoSimilitud.proyecto
    })

    setProyectos(nuevosProyectos);
  };

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
              id= "inputbuscarproyecto"
              useref= "inputbuscarproyecto"
            />
          </div>
        </div>
        <div className={styles.projectFrame1}>
          {proyectos.map(proyecto => {
            return <TarjetaProyectoAdministrador
              object = { proyecto }
              encargadoProyecto={proyecto.nombre}
              telefono={proyecto.telefono}
              cedula={proyecto.identificacion}
              descripcion={proyecto.descripcion}
              key={proyecto.nombre}
            >
            </TarjetaProyectoAdministrador>
          })}
        </div>
      </div>
    </section>
  );
};

export default SearchProjectFrame;
