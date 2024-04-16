import { useCallback } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent from "../components/FrameComponent";
import styles from "./HistorialDeCotizaciones.module.css";
import { useNavigate } from "react-router-dom";

const HistorialDeCotizaciones = () => {
  const navigate = useNavigate()
  const onBotonLogo6Click = useCallback(() => {
    navigate("/ventana-principal-2")
  }, [navigate]);

  const onBotonProductos6Click = useCallback(() => {
    navigate("/ventana-para-buscar-productos");
  }, [navigate]);

  const onBotonSobreNosotrosClick = useCallback(() => {
    navigate("/ventana-sobre-nosotros");
  }, [navigate]);

  const onCarritoDeCompras3ImageClick = useCallback(() => {
    navigate("/ventana-carrito-de-compras");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
  }, []);

  return (
    <div className={styles.historialDeCotizaciones}>
      <FrameComponent3/>
      <FrameComponent1
        onBotonLogo6Click={onBotonLogo6Click}
        onBotonProductos6Click={onBotonProductos6Click}
        onBotonSobreNosotrosClick={onBotonSobreNosotrosClick}
        onCarritoDeCompras3ImageClick={onCarritoDeCompras3ImageClick}
        onGroupButtonClick={onGroupButtonClick}
      />
      <section className={styles.historialDeCotizacionesInner}>
        <div className={styles.frameParent}>
          <div className={styles.historialDeCotizacionesWrapper}>
            <h1 className={styles.historialDeCotizaciones1}>
              Historial De Cotizaciones
            </h1>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.cotizacin1Wrapper}>
                <h3 className={styles.cotizacin1}>Cotización 1</h3>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.div}>08-04-2024</div>
              </div>
              <div className={styles.frameChild} />
              <div className={styles.frameWrapper}>
                <button className={styles.rectangleParent}>
                  <div className={styles.frameItem} />
                  <b className={styles.desplegar}>DESPLEGAR</b>
                </button>
              </div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameInner} />
              <div className={styles.frameDiv}>
                <div className={styles.textoInfoWrapper}>
                  <b className={styles.textoInfo}>PRECIO</b>
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.frameParent2}>
                    <div className={styles.imagenMaquinaCarritoParent}>
                      <img
                        className={styles.imagenMaquinaCarrito}
                        loading="lazy"
                        alt=""
                        src="/imagen-maquina-carrito@2x.png"
                      />
                      <div className={styles.textoInfoContainer}>
                        <b className={styles.textoInfo1}>
                          Manipuladora de materiales de ruedas - MH3050
                        </b>
                      </div>
                    </div>
                    <div className={styles.textoInfoFrame}>
                      <b className={styles.textoInfo2}>CONDUCTORES:</b>
                      <div className={styles.textoInfoContainer}>
                            <b className={styles.textoInfo3}>OTROS GASTOS:</b>
                          </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.frameParent3}>
                      <div className={styles.textoInfoWrapper1}>
                        <b className={styles.textoInfo3}>5.000.000</b>
                      </div>
                      <b className={styles.textoInfo4}>1.000.000 (2)</b>
                      <b className={styles.textoInfo3}>si JAJAJAJJAJ</b>
                    </div>
                  </div>
                </div>
              </div>
              <footer className={styles.frameFooter}>
                <div className={styles.lineParent}>
                  <div className={styles.lineDiv} />
                  <div className={styles.historicInfo}>
                    <div className={styles.cotizacionLabel}>
                      <b className={styles.textoInfo5}>VALOR TOTAL:</b>
                      <b className={styles.textoInfo6}>6.000.000</b>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent />
    </div>
  );
};

export default HistorialDeCotizaciones;






