import styles from "./Proyecto1.module.css";

const Proyecto1 = ({ excavadora, prop, prop1 }) => {
  return (
    <div className={styles.proyecto1}>
      <div className={styles.proyecto1Child} />
      <div className={styles.proyecto1Inner}>
        <div className={styles.frameParent}>
          <div className={styles.nombreDelProductoExcavadorWrapper}>
            <div className={styles.nombreDelProductoContainer}>
              <span>{`Nombre del Producto: `}</span>
              <span className={styles.excavadora}>{excavadora}</span>
            </div>
          </div>
          <div className={styles.identificacin49845Wrapper}>
            <div className={styles.identificacin49845}>
              <span>{`Identificación: `}</span>
              <span className={styles.span}>{prop}</span>
            </div>
          </div>
          <div className={styles.fecha23032024}>
            <span>{`Fecha: `}</span>
            <span className={styles.span1}>{prop1}</span>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <input
            className={styles.descripcin}
            placeholder="Descripción..."
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default Proyecto1;
