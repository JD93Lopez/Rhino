import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./VentanaSobreNosotros.module.css";

const VentanaSobreNosotros = () => {
  const navigate = useNavigate();

  const onLogo1Click = useCallback(() => {
    navigate("/ventana-principal-2");
  }, [navigate]);

  const onBotonProductos2Click = useCallback(() => {
    navigate("/ventana-de-informacin-personal");
  }, [navigate]);

  const onBotonMiCuenta2Click = useCallback(() => {
    window.open("/ventana-inicio-de-sesin");
  }, []);

  return (
    <div className={styles.ventanaSobreNosotros}>
      <img
        className={styles.ventanaSobreNosotrosChild}
        alt=""
        src="/rectangle-179@2x.png"
      />
      <img
        className={styles.ventanaSobreNosotrosItem}
        alt=""
        src="/rectangle-176@2x.png"
      />
      <header className={styles.headerVentanaSobreNosotros}>
        <div className={styles.headerVentanaSobreNosotrosChild} />
        <div className={styles.headerVentanaSobreNosotrosItem} />
        <button className={styles.botonDeBuscar2} />
        <button className={styles.logo1} onClick={onLogo1Click} />
        <button
          className={styles.botonProductos2}
          onClick={onBotonProductos2Click}
        >
          PRODUCTOS
        </button>
        <button className={styles.botonSobreNosotros}>SOBRE NOSOTROS</button>
        <button
          className={styles.botonMiCuenta2}
          onClick={onBotonMiCuenta2Click}
        >
          <div className={styles.perfil1Parent}>
            <img
              className={styles.perfil1Icon}
              alt=""
              src="/perfil-12@2x.png"
            />
            <div className={styles.miCuenta}>MI CUENTA</div>
          </div>
        </button>
      </header>
      <div className={styles.textoMision}>
        <p
          className={styles.brindarSolucionesIntegrales}
        >{`Brindar soluciones integrales y eficientes en maquinaria pesada y transporte de materias `}</p>
        <p
          className={styles.brindarSolucionesIntegrales}
        >{`primas, siendo el pilar fundamental para desarrollar proyectos de construcción exitosos. `}</p>
        <p className={styles.brindarSolucionesIntegrales}>
          Nuestra misión es apoyar la alianza estratégica, a través del alquiler
          de maquinaria especializada
        </p>
        <p
          className={styles.brindarSolucionesIntegrales}
        >{`y servicios de transporte, facilitando la ejecución de proyectos de infraestructura, cumpliendo `}</p>
        <p className={styles.brindarSolucionesIntegrales}>
          con altos estándares de calidad, seguridad y compromiso con el
          cliente.
        </p>
      </div>
      <div className={styles.textoVision}>
        <p className={styles.brindarSolucionesIntegrales}>
          Brindar soluciones integrales y eficientes en maquinaria pesada y
          transporte de materias
        </p>
        <p className={styles.brindarSolucionesIntegrales}>
          primas, siendo el pilar fundamental para desarrollar proyectos de
          construcción exitosos.
        </p>
        <p
          className={styles.brindarSolucionesIntegrales}
        >{`Nuestra misión es apoyar la alianza estratégica, a través del alquiler de maquinaria `}</p>
        <p className={styles.brindarSolucionesIntegrales}>
          especializada y servicios de transporte, facilitando la ejecución de
          proyectos de
        </p>
        <p
          className={styles.brindarSolucionesIntegrales}
        >{`infraestructura, cumpliendo con altos estándares de calidad, seguridad y compromiso con `}</p>
        <p className={styles.brindarSolucionesIntegrales}>el cliente.</p>
      </div>
      <div className={styles.mision}>
        <div className={styles.misin}>MISIÓN</div>
        <div className={styles.misionChild} />
      </div>
      <div className={styles.vision}>
        <div className={styles.misin}>VISIÓN</div>
        <img className={styles.visionChild} alt="" src="/rectangle-178.svg" />
      </div>
      <h1 className={styles.haciendoPosibleLo}>
        HACIENDO POSIBLE LO IMPOSIBLE.
      </h1>
      <h1 className={styles.alquilaMaquinariaDesataContainer}>
        <p
          className={styles.brindarSolucionesIntegrales}
        >{`!ALQUILA MAQUINARIA, `}</p>
        <p className={styles.brindarSolucionesIntegrales}>
          DESATA TU GRANDEZA¡
        </p>
      </h1>
      <div className={styles.ventanaSobreNosotrosInner} />
    </div>
  );
};

export default VentanaSobreNosotros;
