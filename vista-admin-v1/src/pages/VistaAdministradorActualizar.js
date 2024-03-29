// VistaAdministradorAgregar.js
import { useCallback, useContext, useEffect } from "react";
import { DataContext } from "../components/DataProvider";
import { useNavigate } from "react-router-dom";
import AddProductFrame from "../components/AddProductFrame";
import SeleccionarArchivoText from "../components/SeleccionarArchivoText";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./VistaAdministradorAgregar.module.css";

const VistaAdministradorActualizar = () => {
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

  const dataContext = useContext(DataContext);
  let product
  if(dataContext.Loaded && dataContext.selectedProducts){
    if(dataContext.selectedProducts.length !== 0){
      product = dataContext.selectedProducts[0];
    }
  }else{
    useEffect(() => {
      navigate("/vista-administrador-productos");
    }, [navigate]);
  }
  
  useEffect(() => {
    const selectedProducts= dataContext.selectedProducts
    if (dataContext.Loaded) {
      document.getElementById("inputNombreProducto").value = selectedProducts[0].nombre;
      document.getElementById("inputdescripcionproducto").value = selectedProducts[0].descripcion;
      document.getElementById("inputIdProducto").value = selectedProducts[0].identificacion;
      document.getElementById("inputprecioproducto").value = selectedProducts[0].precio_alquiler;
      document.getElementById("inputmodeloproducto").value = selectedProducts[0].modelo ;
      document.getElementById("inputfabricanteproducto").value = selectedProducts[0].marca;
      document.getElementById("imagenProducto").src = selectedProducts[0].imagen;
    }
  }, [dataContext.Loaded, dataContext]);



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
        <h1 className={styles.tituloCrearUsuario}>Actualizar Producto</h1>
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
                    <input className={styles.frame} type="text" id ="inputNombreProducto" useref={ "inputNombreProducto"} />
                  </div>
                  <div className={styles.nombreIDFrame1}>
                    <div className={styles.idDelProducto}>ID del Producto</div>
                    <input className={styles.nombreIDFrame1} type="text" id ="inputIdProducto" useref={ "inputIdProducto"} />
                  </div>
                  <div className={styles.pRODUCTOS}>
                    <div className={styles.descripcin}>Descripción</div>
                    <textarea
                      className={styles.mantenimientoText}
                      placeholder="Escribe"
                      rows={18}
                      cols={28}
                      style={{color:"black"}}
                      id ="inputdescripcionproducto" useref={ "inputdescripcionproducto"}
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
                          <input type='file' id ="inputImagenProducto" useref={ "inputImagenProducto"}/> 
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

export default VistaAdministradorActualizar;
