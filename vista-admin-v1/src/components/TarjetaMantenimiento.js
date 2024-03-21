import styles from "./Proyecto1.module.css";

const TarjetaMantenimiento = ({ object, nombreMaquinaria, identificacion, fecha }) => {
  return (
    <div className={styles.proyecto1}>
      <div className={styles.proyecto1Child} />
      <div className={styles.proyecto1Inner}>
        <div className={styles.frameParent}>
          <div className={styles.nombreDelProductoExcavadorWrapper}>
            <div className={styles.nombreDelProductoContainer}>
              <span>{`Nombre del Producto: `}</span>
              <span className={styles.excavadora}>{nombreMaquinaria}</span>
            </div>
          </div>
          <div className={styles.identificacin49845Wrapper}>
            <div className={styles.identificacin49845}>
              <span>{`Identificación: `}</span>
              <span className={styles.span}>{identificacion}</span>
            </div>
          </div>
          <div className={styles.fecha23032024}>
            <span>{`Fecha: `}</span>
            <span className={styles.span1}>{fecha}</span>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <input //TODO cambiar input por text area
            className={styles.descripcin}
            placeholder="Descripción..."
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default TarjetaMantenimiento;
