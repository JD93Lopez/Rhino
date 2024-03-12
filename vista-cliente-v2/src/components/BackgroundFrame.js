import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BackgroundFrame.module.css";

const BackgroundFrame = () => {
  const navigate = useNavigate();

  const onBotonConsultarPrecioClick = useCallback(() => {
    navigate("/ventana-para-solcitar-una-cotizacin");
  }, [navigate]);

  return (
    <div className={styles.backgroundFrame}>
      <div className={styles.imageContainer}>
        <div className={styles.infoText}>
          <img
            className={styles.imagenMaquinaCarrito}
            loading="lazy"
            alt=""
            src="/imagen-maquina-carrito@2x.png"
          />
          <div className={styles.cartBorder}>
            <div className={styles.deleteProductButton}>
              <b className={styles.textoInfo}>
                Manipuladora de materiales de ruedas - MH3050
              </b>
              <div className={styles.consultPriceButton}>
                <div className={styles.infoTextProduct}>
                  <div className={styles.textoInfo1}>De CAT</div>
                  <div className={styles.botonEliminarProducto}>
                    Eliminar producto
                  </div>
                </div>
                <div className={styles.productContainer}>
                  <div className={styles.textoCantidad}>Cantidad</div>
                </div>
                <div className={styles.inputCantidad} />
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
              <b className={styles.consultarPrecio}>CONSULTAR PRECIO</b>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundFrame;
