import { useMemo } from "react";
import styles from "./Proyecto.module.css";

const Proyecto = ({ darwingAfanador, prop, prop1, propPadding }) => {
  const proyecto1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.proyecto1} style={proyecto1Style}>
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
            <span className={styles.darwingAfanador}>{darwingAfanador}</span>
          </div>
        </div>
        <div className={styles.celular3016598487Wrapper}>
          <div className={styles.celular3016598487}>
            <span>{`Celular: `}</span>
            <span className={styles.span}>{prop}</span>
          </div>
        </div>
        <div className={styles.cdula13235635826}>
          <span>{`Cédula: `}</span>
          <span className={styles.span1}>{prop1}</span>
        </div>
      </div>
      <div className={styles.proyectoEncargadoALaEmpreWrapper}>
        <div className={styles.proyectoEncargadoAContainer}>
          <p className={styles.proyecto}>{`Proyecto `}</p>
          <p className={styles.encargadoALa}>Encargado a la Empresa Cat</p>
        </div>
      </div>
    </div>
  );
};

export default Proyecto;
