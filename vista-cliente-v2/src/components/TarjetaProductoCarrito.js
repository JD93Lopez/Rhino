import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BackgroundFrame.module.css";
import { DataContext } from "./DataProvider";

const TarjetaProductoCarrito = ({nombre,imagen,modelo,identificacion,marca,fecha_inicio,fecha_fin,object,setProductosCarrito}) => {
  const dataContext = useContext(DataContext)
  const navigate = useNavigate();

  const onEliminarDelCarritoClick = ()=>{
    let productosCarrito
    if(localStorage.getItem("productosCarrito")&&localStorage.getItem("productosCarrito")!=""){
      productosCarrito = JSON.parse(localStorage.getItem("productosCarrito"))
    }
    if(!productosCarrito){
      productosCarrito = []
    }
    
    productosCarrito = productosCarrito.filter((producto)=>(!(producto.idproductos==object.idproductos&&producto.fecha_inicio==object.fecha_inicio&&producto.fecha_fin==object.fecha_fin)))
    setProductosCarrito(productosCarrito)

    localStorage.setItem("productosCarrito",JSON.stringify(productosCarrito))
    dataContext.setCatidadProductosCarrito(dataContext.catidadProductosCarrito-1)
  }

  return (
    <div className={styles.backgroundFrame}>
      <div className={styles.imageContainer}>
        <div className={styles.infoText}>
          <img
            className={styles.imagenMaquinaCarrito}
            loading="lazy"
            alt=""
            src = {imagen&&imagen!=""?imagen:"/boton-logo-6@3x.png"}
          />
          <div className={styles.cartBorder}>
            <div className={styles.deleteProductButton}>
              <b className={styles.textoInfo}>
                {nombre} - {modelo}
              </b>
              <div className={styles.consultPriceButton}>
                <div className={styles.infoTextProduct}>
                  <div className={styles.textoInfo1}>De: {marca}</div>
                  <div className={styles.botonEliminarProducto} style={{minWidth:"420px"}}>
                    <div>
                      Fecha inicio: {fecha_inicio}
                    </div>                    
                    <div>
                      Fecha fin: {fecha_fin}
                    </div>
                  </div>
                </div>
                <div className={styles.productContainer}>
                  <div className={styles.textoCantidad}>Id/Placa:</div>
                </div>
                <div className={styles.inputCantidad} style={{color:"black"}}>{identificacion}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.socialMediaFrame}>
          <button className={styles.yTButton}>
            <div className={styles.yTButtonChild} />
            <div
              className={styles.botonConsultarPrecio}
              onClick={onEliminarDelCarritoClick}
            >
              <b className={styles.consultarPrecio}>ELIMINAR PRODUCTO</b>
            </div>
          </button>
        </div>
      </div>
      <div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    </div>
  );
};

export default TarjetaProductoCarrito;
