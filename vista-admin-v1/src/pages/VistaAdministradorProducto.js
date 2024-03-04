import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AddProductFrame from "../components/AddProductFrame";
import styles from "./VistaAdministradorProducto.module.css";
import { TarjetaProductoAdministrador } from "../components/TarjetaProductoAdministrador";
import { DataContext } from "../components/DataProvider";


const VistaAdministradorProducto = () => {
  const navigate = useNavigate();

  const onUSUARIOSTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPROYECTOSTextClick = useCallback(() => {
    navigate("/vista-administrador-proyectos");
  }, [navigate]);

  const onMANTENIMIENTOTextClick = useCallback(() => {
    navigate("/vista-administrador-mantenimiento");
  }, [navigate]);

  const onBotonGuardarContainerClick = useCallback(() => {
    navigate("/vista-administrador-agregar-productoeditar-producto");
  }, [navigate]);

  const dataContext = useContext(DataContext)

  if(!dataContext.Loaded){
    return <div>Cargando... Por favor espere.</div>
  }

  const productos = dataContext.productos

  return (
    <div className={styles.vistaAdministradorProducto}>
      <div className={styles.vistaAdministradorProductoChild} />
      <AddProductFrame
        maintananceTextPadding="var(--padding-8xs) 0px 0px"
        onUSUARIOSTextClick={onUSUARIOSTextClick}
        onPROYECTOSTextClick={onPROYECTOSTextClick}
        onMANTENIMIENTOTextClick={onMANTENIMIENTOTextClick}
      />
      <main className={styles.gRUATElescopicaBoomText}>
        <section className={styles.rectangleShape}>
          <div className={styles.actualizarProductoBoton}>
            <div className={styles.eliminarProductoBoton}>
              <h1 className={styles.tituloCrearUsuario}>Productos</h1>
              <div className={styles.buscarUsuario}>
                <div className={styles.buscarUsuarioChild} />
                <img className={styles.lupa4Icon} alt="" src="/lupa-4@2x.png" />
                <input
                  className={styles.buscarProducto}
                  placeholder="buscar producto"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className={styles.frontalLoaders}>
            <div className={styles.updateDeleteProduct}>
              <div className={styles.excavator}>
                <div className={styles.powerfulExcavator}>
                  <button className={styles.powerfulExcavator1}>
                    <div className={styles.powerfulExcavatorChild} />
                    <div className={styles.actualizarProducto}>
                      Actualizar Producto
                    </div>
                  </button>
                  <button className={styles.powerfulExcavator2}>
                    <div className={styles.powerfulExcavatorItem} />
                    <div className={styles.eliminarProducto}>
                      Eliminar Producto
                    </div>
                  </button>
                  <div
                    className={styles.botonGuardar}
                    onClick={onBotonGuardarContainerClick}
                  >
                    <button className={styles.rectangleParent}>
                      <div className={styles.frameChild} />
                      <div className={styles.agregarProducto}>
                        Agregar producto
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {productos.map(producto=>{
              return <TarjetaProductoAdministrador
                nombreProducto = {producto.nombreProducto}
                descripcion = {producto.descripcion}
                imagen = {producto.imagen}
                key = {producto.nombreProducto}
              >
              </TarjetaProductoAdministrador>
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default VistaAdministradorProducto;
