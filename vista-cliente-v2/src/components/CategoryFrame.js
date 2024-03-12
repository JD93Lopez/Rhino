import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CategoryFrame.module.css";

const CategoryFrame = () => {
  const navigate = useNavigate();

  const onMaterialesSinFondo2Click = useCallback(() => {
    navigate("/informacin-de-cada-producto");
  }, [navigate]);

  const onBotonDetallesClick = useCallback(() => {
    navigate("/informacin-de-cada-producto");
  }, [navigate]);

  const onBotonDetalles1Click = useCallback(() => {
    navigate("/informacin-de-cada-producto");
  }, [navigate]);

  const onBotonDetalles2Click = useCallback(() => {
    navigate("/informacin-de-cada-producto");
  }, [navigate]);

  const onBotonDetalles3Click = useCallback(() => {
    navigate("/informacin-de-cada-producto");
  }, [navigate]);

  return (
    <div className={styles.categoryFrame}>
      <div className={styles.groupFrame}>
        <div className={styles.productItemFrame}>
          <div className={styles.machineNameFrame} />
          <div className={styles.vectorFrame}>
            <div className={styles.machineryFrame}>
              <div className={styles.machineryFrameChild} />
              <b className={styles.maquinaria}>MAQUINARIA</b>
              <div className={styles.vectorFrame1}>
                <img
                  className={styles.cartButtonFrame}
                  alt=""
                  src="/cart-button-frame.svg"
                />
              </div>
            </div>
            <div className={styles.wheelsFrame}>
              <div className={styles.machineNameFrame1}>
                <div className={styles.machineNameFrameChild} />
                <b className={styles.vehculos}>VEHÍCULOS</b>
                <div className={styles.vectorFrame2}>
                  <img
                    className={styles.groupFrameIcon}
                    alt=""
                    src="/cart-button-frame.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.backgroundFrame}>
          <div className={styles.contactInfoFrame}>
            <div className={styles.materialesSinFondo2Parent}>
              <img
                className={styles.materialesSinFondo2}
                loading="lazy"
                alt=""
                src="/materiales-sin-fondo-2@2x.png"
                onClick={onMaterialesSinFondo2Click}
              />
              <div className={styles.frameChild} />
              <div className={styles.detailsButtonFrame}>
                <div className={styles.addToCartButtonFrame}>
                  <div className={styles.productBox}>
                    <div className={styles.detallesFrame}>
                      <div className={styles.nombreMaquina}>
                        <p className={styles.manipuladoraDe}>Manipuladora de</p>
                        <p className={styles.materialesDeRuedas}>
                          materiales de ruedas
                        </p>
                        <p className={styles.mh3050}>MH3050</p>
                      </div>
                    </div>
                    <button
                      className={styles.botonDetalles}
                      onClick={onBotonDetallesClick}
                    >
                      <b className={styles.detalles}>DETALLES</b>
                    </button>
                  </div>
                  <div className={styles.vectorElement}>
                    <button className={styles.botonAgregarCarrito}>
                      <img
                        className={styles.anadirAlCarrito1Icon}
                        alt=""
                        src="/anadiralcarrito-1@2x.png"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.wheeledEquipmentBox}>
              <img
                className={styles.cargadoraDeRuedasSinFondo}
                loading="lazy"
                alt=""
                src="/cargadora-de-ruedas-sin-fondo-2@2x.png"
              />
              <div className={styles.wheeledEquipmentBoxChild} />
              <div className={styles.machineName}>
                <div className={styles.detailedView}>
                  <div className={styles.addToCartButton}>
                    <div className={styles.nombreMaquina1}>
                      CARGADORA DE RUEDAS
                    </div>
                  </div>
                  <button
                    className={styles.botonDetalles1}
                    onClick={onBotonDetalles1Click}
                  >
                    <b className={styles.detalles1}>DETALLES</b>
                  </button>
                  <div className={styles.cartIcon}>
                    <button className={styles.botonAgregarCarrito1}>
                      <img
                        className={styles.anadirAlCarrito1Icon1}
                        alt=""
                        src="/anadiralcarrito-1@2x.png"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contactFrame}>
        <div className={styles.camionobrasSinFondo3Parent}>
          <img
            className={styles.camionobrasSinFondo3}
            loading="lazy"
            alt=""
            src="/camionobras-sin-fondo-3@2x.png"
          />
          <div className={styles.frameItem} />
          <div className={styles.detailedView1}>
            <div className={styles.detailsButton}>
              <div className={styles.nombreMaquinaWrapper}>
                <div className={styles.nombreMaquina2}>CAMIÓN DE OBRAS</div>
              </div>
              <button
                className={styles.botonDetalles2}
                onClick={onBotonDetalles2Click}
              >
                <b className={styles.detalles2}>DETALLES</b>
              </button>
              <div className={styles.vectorElement1}>
                <button className={styles.botonAgregarCarrito2}>
                  <img
                    className={styles.anadirAlCarrito1Icon2}
                    alt=""
                    src="/anadiralcarrito-1@2x.png"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contactUs}>
          <img
            className={styles.compactadoraSinFondo2}
            loading="lazy"
            alt=""
            src="/compactadora-sin-fondo-2@2x.png"
          />
          <div className={styles.contactUsChild} />
          <div className={styles.contactUsInner}>
            <div className={styles.frameParent}>
              <div className={styles.nombreMaquinaContainer}>
                <div className={styles.nombreMaquina3}>APLANADORA</div>
              </div>
              <button
                className={styles.botonDetalles3}
                onClick={onBotonDetalles3Click}
              >
                <b className={styles.detalles3}>DETALLES</b>
              </button>
              <div className={styles.addToCartButton1}>
                <button className={styles.botonAgregarCarrito3}>
                  <img
                    className={styles.anadirAlCarrito1Icon3}
                    alt=""
                    src="/anadiralcarrito-1@2x.png"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFrame;
