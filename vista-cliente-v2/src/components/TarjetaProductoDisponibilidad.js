import { useCallback, useContext, useState } from "react";
import styles from "./GroupComponent3.module.css";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./DataProvider";

const TarjetaProductoDisponibilidad = ({nombre, identificacion, precio_alquiler, object}) => {

  // const dataContext = useContext(DataContext)
  const [clicked,setClicked] = useState(false)

  const navigate = useNavigate()
  const agregarAlCarrito = () => {
    if(!clicked){
      setClicked(true)
      // if(!dataContext.productosCarrito){
      //   dataContext.productosCarrito = []
      // }
      // dataContext.productosCarrito.push(object)
      
      let productosCarrito
      if(localStorage.getItem("productosCarrito")&&localStorage.getItem("productosCarrito")!=""){
        productosCarrito = JSON.parse(localStorage.getItem("productosCarrito"))
      }
      if(!productosCarrito){
        productosCarrito = []
      }

      productosCarrito.push(object)

      localStorage.setItem("productosCarrito",JSON.stringify(productosCarrito))
    }
  }

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.imagenMaquinaCarritoParent}>
        <img
          className={styles.imagenMaquinaCarrito}
          loading="lazy"
          alt=""
          src="/imagen-maquina-carrito@2x.png"
        />
        <div className={styles.textoInfoWrapper}>
          <b className={styles.textoInfo}>
            {nombre} - {identificacion}
          </b>
          
        </div>
      </div>
      <div className={styles.textoInfoContainer}>
        
        <b className={styles.backgroundShape}>{precio_alquiler}</b>
      </div>
      <div className={styles.frameWrapper}>
        <button className={styles.frameContainer} onClick={agregarAlCarrito}>
          <div className={styles.frameParent}>
            <div className={styles.rectangleWrapper}>
              <div className={styles.frameItem} />
            </div>
            <img
              className={styles.anadirAlCarrito1Icon}
              alt=""
              src={!clicked?"/anadiralcarrito-1@2x.png":"/bright-green-tick-checkmark-icon-free-png (1).png"}
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default TarjetaProductoDisponibilidad;
