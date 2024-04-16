import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BackgroundFrame.module.css";

const TarjetaProductoCarrito = ({nombre,imagen,modelo,identificacion,marca,fecha_inicio,fecha_fin}) => {
  const navigate = useNavigate();

  const onBotonConsultarPrecioClick = ()=>{

  }

  return (
    <div className={styles.backgroundFrame}>
      <div className={styles.imageContainer}>
        <div className={styles.infoText}>
          <img
            className={styles.imagenMaquinaCarrito}
            loading="lazy"
            alt=""
            src = {imagen}
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
              onClick={onBotonConsultarPrecioClick}
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
