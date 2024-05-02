import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductFrame from "../components/ProductFrame";
import Framemotorinfo from "../components/Framemotorinfo";
import Headerframe from "../components/Headerframe";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./InformacinDeCadaProducto.module.css";
import { DataContext } from "../components/DataProvider";
import { TarjetaProducto } from "../components/TarjetaProducto";

const InformacinDeCadaProducto = () => {
  const navigate = useNavigate();

  const onBotonLogo6Click = useCallback(() => {
    navigate("/ventana-principal-2");
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

  const dataContext = useContext(DataContext)

  let productosSimilares = dataContext.productosOrdenadosBusqueda
  let productosSinActual
  if(productosSimilares){
    productosSinActual = productosSimilares.filter(producto => producto.idproductos !== dataContext.productoSeleccionadoParaDetalles.idproductos)
  }

  return (
    <div className={styles.informacinDeCadaProducto}>
      <FrameComponent3/>
      <div className={styles.productSpecs}>
        <div className={styles.detallesDelProductoParent}>
          <h2 className={styles.detallesDelProducto}>DETALLES DEL PRODUCTO</h2>
          <div className={styles.contactSection} />
        </div>
      </div>
      <section className={styles.backgroundframe}>
        <div className={styles.backgroundframeChild} />
      </section>
      <Framemotorinfo />
      <Headerframe />
      <section className={styles.informacinDeCadaProductoInner}>
        <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.productosSimilares}>PRODUCTOS SIMILARES</div>
        </button>
      </section>
      <div className={styles.informacinDeCadaProductoChild} />
      <section className={styles.cartAddRemoveGroupParent}>
        {productosSinActual&&productosSinActual[0]&&
          <TarjetaProducto
            nombre={productosSinActual[0].nombre}
            imagen={productosSinActual[0].imagen}
            object={productosSinActual[0]}
            productosOrdenados={productosSimilares}
          />
        }
        {productosSinActual&&productosSinActual[1]&&
          <TarjetaProducto
            nombre={productosSinActual[1].nombre}
            imagen={productosSinActual[1].imagen}
            object={productosSinActual[1]}
            productosOrdenados={productosSimilares}
          />
        }
        {productosSinActual&&productosSinActual[2]&&
          <TarjetaProducto
            nombre={productosSinActual[2].nombre}
            imagen={productosSinActual[2].imagen}
            object={productosSinActual[2]}
            productosOrdenados={productosSimilares}
          />
        }
        {productosSinActual&&productosSinActual[3]&&
          <TarjetaProducto
            nombre={productosSinActual[3].nombre}
            imagen={productosSinActual[3].imagen}
            object={productosSinActual[3]}
            productosOrdenados={productosSimilares}
          />
        }
        {productosSinActual&&productosSinActual[4]&&
          <TarjetaProducto
            nombre={productosSinActual[4].nombre}
            imagen={productosSinActual[4].imagen}
            object={productosSinActual[4]}
            productosOrdenados={productosSimilares}
          />
        }
      </section>
      <div className={styles.informacinDeCadaProductoItem} />
      <section className={styles.contactInfoFrame}>
        <div className={styles.contactenos}>CONTACTENOS</div>
        <div className={styles.callToActionFrame}>
          <div className={styles.callToActionFrameChild} />
        </div>
      </section>
      <section className={styles.atencionalclienterhinocomWrapper}>
        <div className={styles.atencionalclienterhinocom}>
          atencionAlCliente@rhino.com
        </div>
      </section>
    </div>
  );
};

export default InformacinDeCadaProducto;
