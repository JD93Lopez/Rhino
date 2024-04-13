import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./VentanaSobreNosotros.module.css";

const VentanaSobreNosotros = () => {
  return (
    <div className={styles.ventanaSobreNosotros}>
      <img
        className={styles.selfInfoFrame}
        alt=""
        src="/self-info-frame@2x.png"
      />
      <img
        className={styles.selfInfoFrame1}
        loading="lazy"
        alt=""
        src="/rectangle-176@2x.png"
      />
      <FrameComponent3></FrameComponent3>
      <main className={styles.ventanaSobreNosotrosInner}>
        <section className={styles.visionImageParent}>
          <div className={styles.visionImage}>
            <h1 className={styles.misin}>MISIÓN</h1>
            <div className={styles.missionFrame}>
              <div className={styles.logoButton} />
            </div>
          </div>
          <div className={styles.productsButtonsGroup}>
            <div className={styles.textoMision}>
              <p
                className={styles.brindarSolucionesIntegrales}
              >{`Brindar soluciones integrales y eficientes en maquinaria pesada y transporte de materias `}</p>
              <p
                className={styles.primasSiendoEl}
              >{`primas, siendo el pilar fundamental para desarrollar proyectos de construcción exitosos. `}</p>
              <p className={styles.nuestraMisinEs}>
                Nuestra misión es apoyar la alianza estratégica, a través del
                alquiler de maquinaria especializada
              </p>
              <p
                className={styles.yServiciosDe}
              >{`y servicios de transporte, facilitando la ejecución de proyectos de infraestructura, cumpliendo `}</p>
              <p className={styles.conAltosEstndares}>
                con altos estándares de calidad, seguridad y compromiso con el
                cliente.
              </p>
            </div>
          </div>
          <FrameComponent1 />
          <div className={styles.textoVision}>
            <p className={styles.brindarSolucionesIntegrales1}>
              Brindar soluciones integrales y eficientes en maquinaria pesada y
              transporte de materias
            </p>
            <p className={styles.primasSiendoEl1}>
              primas, siendo el pilar fundamental para desarrollar proyectos de
              construcción exitosos.
            </p>
            <p
              className={styles.nuestraMisinEs1}
            >{`Nuestra misión es apoyar la alianza estratégica, a través del alquiler de maquinaria `}</p>
            <p className={styles.especializadaYServicios}>
              especializada y servicios de transporte, facilitando la ejecución
              de proyectos de
            </p>
            <p
              className={styles.infraestructuraCumpliendoCo}
            >{`infraestructura, cumpliendo con altos estándares de calidad, seguridad y compromiso con `}</p>
            <p className={styles.elCliente}>el cliente.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VentanaSobreNosotros;
