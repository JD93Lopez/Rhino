import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProductFrame from "../components/ProductFrame";
import TarjetaProductoCarrito from "../components/TarjetaProductoCarrito";
import FrameComponent3 from "../components/FrameComponent3";
import ContactDetailsFrame from "../components/ContactDetailsFrame";
import styles from "./VentanaCarritoDeCompras.module.css";

const VentanaCarritoDeCompras = () => {
  const navigate = useNavigate();

  let productosCarrito

  if(localStorage.getItem("productosCarrito")!=""){
    productosCarrito = JSON.parse(localStorage.getItem("productosCarrito"))
  }

  const solicitarCotizacion = () =>{
    localStorage.setItem("productosCarrito","")
  }

  return (
    <div className={styles.ventanaCarritoDeCompras}>
      <div className={styles.ventanaCarritoDeComprasChild} />

      <FrameComponent3/>
      <br/><br/>
      <section className={styles.shoppingCartSymbol}>
        <div className={styles.cancelSelectionButton}>
          <div className={styles.cancelSelectionButtonChild} />
          <div className={styles.backgroundRectangle}>
            <div style={{display:"flex", flexDirection:"row"}}>
              <div className={styles.cartItemsContainer}>
                <div className={styles.carrito}>CARRITO</div>
                <div className={styles.carrito1}>CARRITO</div>
              </div>
              <div style={{display:"flex", flexDirection:"row"}}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className={styles.yTButton} onClick={solicitarCotizacion}>
                  <div className={styles.yTButtonChild} />
                  <div
                    className={styles.botonConsultarPrecio}
                    
                  >
                    <b className={styles.consultarPrecio}>SOLICITAR COTIZACION</b>
                  </div>
                </button>
              </div>
            </div>

            {/* <button className={styles.yTButton}>
            <div className={styles.yTButtonChild} />
            <div
              className={styles.botonConsultarPrecio}
            >
              <b className={styles.consultarPrecio}>ELIMINAR PRODUCTO</b>
            </div>
          </button> */}
            <div
              className={styles.anularLaSeleccin}
            >{`Anular la selección de todos los elementos `}</div>
          </div>
          <div className={styles.productsFrame}>
            <div className={styles.logoButton} />
          </div>
          {productosCarrito&&productosCarrito.map((producto)=>{
            return <TarjetaProductoCarrito
              imagen={producto.imagen}
              nombre={producto.nombre}
              identificacion={producto.identificacion}
              fecha_inicio={producto.fecha_inicio}
              fecha_fin={producto.fecha_fin}
              marca={producto.marca}
              modelo={producto.modelo}
            />  
          })}
          {/* <TarjetaProductoCarrito
            imagen={"/imagen-maquina-carrito@2x.png"}
            nombre={"Manipuladora de materiales de ruedas"}
            identificacion={"AAA111"}
            fecha_inicio={"2024-04-16"}
            fecha_fin={"2024-04-17"}
            marca={"CAT"}
            modelo={"MH3050"}
          /> */}
        </div>
      </section>
      <ContactDetailsFrame />
    </div>
  );
};

export default VentanaCarritoDeCompras;
