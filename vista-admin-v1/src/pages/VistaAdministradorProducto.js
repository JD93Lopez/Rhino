import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProductFrame from "../components/AddProductFrame";
import styles from "./VistaAdministradorProducto.module.css";
import { TarjetaProductoAdministrador } from "../components/TarjetaProductoAdministrador";
import { DataContext } from "../components/DataProvider";
import orden from "../OrdenamientoSimilitud";
import axios from "../axios";

const VistaAdministradorProducto = () => {
  const navigate = useNavigate();

  const onUSUARIOSTextClick = useCallback(() => {
    navigate("/vista-administrador-usuarios");
  }, [navigate]);

  const onPROYECTOSTextClick = useCallback(() => {
    navigate("/vista-administrador-proyectos");
  }, [navigate]);

  const onMANTENIMIENTOTextClick = useCallback(() => {
    navigate("/vista-administrador-mantenimiento");
  }, [navigate]);

  const dataContext = useContext(DataContext);

  const onBotonGuardarContainerClick = useCallback(() => {
    dataContext.selectedProducts = []
    navigate("/vista-administrador-agregar-productoeditar-producto");
  }, [navigate, dataContext]);

  const onBotonActualizarClick = useCallback(() => { 
      if (dataContext.selectedProducts.length === 1) {
        navigate("/vista-administrador-productoeditar-producto");
      }

    
  }, [navigate, dataContext]);

  //resetear seleccionados
  dataContext.selectedProducts = []
  dataContext.estadoProducto = undefined
  dataContext.tipoProducto = undefined
  dataContext.imagenProducto = undefined


  const [productos, setProductos] = useState();

  if(!productos){
    axios.api(`obtener/productos`).then((res)=>{
      try{
        setProductos(res.data.Res)
      }catch(e){}
    })
  }

  const buscar = () => {
    if (!dataContext.productos) {
      return;
    }
    const inputValue = document.getElementById("inputbuscarproducto").value;
    let nuevosProductos = dataContext.productos.map((product) => {
      const similitud = orden.calcularSimilitud(inputValue, product.nombre);
      return { producto: product, similitud: similitud };
    }).sort((a, b) => b.similitud - a.similitud);
    nuevosProductos = nuevosProductos.map((productoSimilitud)=>{
      return productoSimilitud.producto
    })

    setProductos(nuevosProductos);
  };

  return (
    <div className={styles.vistaAdministradorProducto}>
      <div className={styles.vistaAdministradorProductoChild} />
      <AddProductFrame/>
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
                  onChange={buscar}
                  id= "inputbuscarproducto"
                  useref= "inputbuscarproducto"
                />
                
              </div>
            </div>
          </div>
          <div className={styles.frontalLoaders}>
            <div className={styles.updateDeleteProduct}>
              <div className={styles.excavator}>
                <div className={styles.powerfulExcavator}>
                  <button className={styles.powerfulExcavator1} onClick={onBotonActualizarClick}>
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
            {productos && productos.map(producto=>{
              return <TarjetaProductoAdministrador
              object = {producto}
              nombreProducto = {producto.nombre}
              descripcion = {producto.descripcion}
              imagen = {producto.imagen}
              key = {producto.nombre}
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