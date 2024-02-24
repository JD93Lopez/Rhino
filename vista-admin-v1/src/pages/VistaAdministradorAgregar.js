import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AddProductFrame from "../components/AddProductFrame";
import SeleccionarArchivoText from "../components/SeleccionarArchivoText";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./VistaAdministradorAgregar.module.css";

const VistaAdministradorAgregar = () => {
  const navigate = useNavigate();

  const onUSUARIOSTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPROYECTOSTextClick = useCallback(() => {
    navigate("/vista-administrador-proyectos");
  }, [navigate]);

  const onPRODUCTOSTextClick = useCallback(() => {
    navigate("/vista-administrador-productos");
  }, [navigate]);

  const onMantenimientoTextClick = useCallback(() => {
    navigate("/vista-administrador-mantenimiento");
  }, [navigate]);

  return (
    <div className={styles.vistaAdministradorAgregar}>
      <div className={styles.vistaAdministradorAgregarChild} />
      <AddProductFrame
        onUSUARIOSTextClick={onUSUARIOSTextClick}
        onPROYECTOSTextClick={onPROYECTOSTextClick}
        onPRODUCTOSTextClick={onPRODUCTOSTextClick}
        onMantenimientoTextClick={onMantenimientoTextClick}
      />
      <div className={styles.createUserFrame}>
        <h1 className={styles.tituloCrearUsuario}>Agregar Producto</h1>
      </div>
      <main className={styles.productIDRectangle}>
        <section className={styles.descriptionFrame}>
          <div className={styles.productInputFrame}>
            <div className={styles.nombreProductoFrame}>
              <div className={styles.iDProductoFrame}>
                <div className={styles.rectangleProductInfo}>
                  <div className={styles.nombreIDFrame}>
                    <div className={styles.nombreDelProducto}>
                      Nombre del Producto
                    </div>
                    <input className={styles.frame} type="text" />
                  </div>
                  <div className={styles.nombreIDFrame1}>
                    <div className={styles.idDelProducto}>ID del Producto</div>
                    <img
                      className={styles.nombreIDFrameChild}
                      alt=""
                      src="/rectangle-23.svg"
                    />
                  </div>
                  <div className={styles.pRODUCTOS}>
                    <div className={styles.descripcin}>Descripción</div>
                    <textarea
                      className={styles.mantenimientoText}
                      placeholder="Escribre"
                      rows={18}
                      cols={28}
                    />
                  </div>
                  <div className={styles.tituloCrearUsuarioFrame}>
                    <div className={styles.frameCargarSOAT}>
                      <SeleccionarArchivoText cargarSOAT="Cargar S.O.A.T " />
                      <div className={styles.descargarSOAT}>
                        <div
                          className={styles.cargarTcnicoMecnica}
                        >{`Cargar Técnico Mecánica `}</div>
                        <div className={styles.imagenFrame}>
                          <div className={styles.precioTipoFrame}>
                            <div className={styles.precioTipoFrameChild} />
                            <div className={styles.seleccionarArchivo}>
                              seleccionar archivo
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.descargarSoatWrapper}>
                  <div
                    className={styles.descargarSoat}
                  >{`Descargar S.O.A.T `}</div>
                </div>
                <div
                  className={styles.descargarTcnicoMecnica}
                >{`Descargar Técnico Mecánica `}</div>
              </div>
            </div>
          </div>
          <FrameComponent2 />
        </section>
      </main>
    </div>
  );
};

export default VistaAdministradorAgregar;
