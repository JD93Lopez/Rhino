import { useMemo } from "react";
import styles from "./Proyecto.module.css";

const TarjetaProyectoAdministrador = ({ encargadoProyecto, telefono, cedula, descripcion }) => {

  return (
    <div className={styles.proyecto1}>
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
