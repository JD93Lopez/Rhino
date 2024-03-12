import styles from "./Headerframe.module.css";

const Headerframe = () => {
  return (
    <section className={styles.headerframe}>
      <div className={styles.detailspanel}>
        <div className={styles.generaldescription}>
          <div className={styles.specsframe}>
            <div className={styles.descripcinGeneral}>Descripción General</div>
            <div className={styles.contactinfogroup}>
              <div className={styles.productDetailsFrame} />
            </div>
          </div>
          <h2 className={styles.mayorProductividad}>MAYOR PRODUCTIVIDAD</h2>
        </div>
        <div className={styles.elCatMh3050DestacaPorSuWrapper}>
          <div className={styles.elCatMh3050Container}>
            <p
              className={styles.elCatMh3050}
            >{`El Cat® MH3050 destaca por su rendimiento excepcional en la categoría de `}</p>
            <p
              className={styles.dimensionesALa}
            >{`dimensiones a la que pertenece. Gracias a su estabilizador y tren de rodaje `}</p>
            <p
              className={styles.amplioSeAsegura}
            >{`amplio, se asegura de mantenerse estable en su posición, mientras que las `}</p>
            <p
              className={styles.opcionesDePluma}
            >{`opciones de pluma y brazo se sincronizan para lograr un alcance impresionante `}</p>
            <p
              className={styles.deHasta18}
            >{`de hasta 18 metros (59' 1"). Este equipo fusiona componentes de última generación `}</p>
            <p
              className={styles.provenientesDeLas}
            >{`provenientes de las excavadoras Cat con la cabina diseñada para manipulación `}</p>
            <p className={styles.deMaterialesGarantizando}>
              de materiales, garantizando así la máxima eficiencia, mayor
              confort y la confiabilidad
            </p>
            <p
              className={styles.queSeEspera}
            >{`que se espera de este tipo de maquinaria. `}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headerframe;
