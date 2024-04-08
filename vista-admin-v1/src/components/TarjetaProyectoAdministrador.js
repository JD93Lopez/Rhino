import { useContext, useMemo, useState } from "react";
import styles from "./Proyecto.module.css";
import { DataContext } from "./DataProvider";

const TarjetaProyectoAdministrador = ({ object, encargadoProyecto, telefono, cedula, descripcion }) => {

  const dataContext = useContext(DataContext)
  
  const [selected, setSelected] = useState()

  const seleccionar = () => {

    if(selected){
      setSelected(false)
      dataContext.selectedProyects.forEach(user => {
        if(user.cedula === cedula){
          dataContext.selectedProyects = dataContext.selectedProyects.filter(userF => { return user !== userF })
        }
      });
    }else{
      setSelected(true)
      dataContext.selectedProyects.push(
        object
      )
    }

  }

  let estiloSeleccionado = {}
  if(selected){
    estiloSeleccionado = {backgroundColor: "rgb(255,220,84)"}
  }

  return (
    <div className={styles.proyecto1} onClick={seleccionar} style={estiloSeleccionado}>
      <div className={styles.proyecto1Child} />
      <div className={styles.userNameFrameParent}>
        <div className={styles.userNameFrame}>
          <img
            className={styles.usuario21}
            loading="eager"
            alt=""
            src="/usuario-2-1@2x.png"
          />
          <div className={styles.nombreDarwingAfanadorContainer}>
            <span>{`Nombre: `}</span>
            <span className={styles.darwingAfanador}>{encargadoProyecto}</span>
          </div>
        </div>
        <div className={styles.celular3016598487Wrapper}>
          <div className={styles.celular3016598487}>
            <span>{`Celular: `}</span>
            <span className={styles.span}>{telefono}</span>
          </div>
        </div>
        <div className={styles.cdula13235635826}>
          <span>{`Cédula: `}</span>
          <span className={styles.span1}>{cedula}</span>
        </div>
      </div>
      <div className={styles.proyectoEncargadoALaEmpreWrapper}>
        <div className={styles.proyectoEncargadoAContainer}>
          <p className={styles.proyecto}>{`Decripción del proyecto: `}</p>
          <p className={styles.encargadoALa}>{descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default TarjetaProyectoAdministrador;
