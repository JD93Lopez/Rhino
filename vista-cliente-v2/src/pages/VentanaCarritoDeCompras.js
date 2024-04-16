import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProductFrame from "../components/ProductFrame";
import BackgroundFrame from "../components/BackgroundFrame";
import FrameComponent3 from "../components/FrameComponent3";
import ContactDetailsFrame from "../components/ContactDetailsFrame";
import styles from "./VentanaCarritoDeCompras.module.css";

const VentanaCarritoDeCompras = () => {
  const navigate = useNavigate();

  

  return (
    <div className={styles.ventanaCarritoDeCompras}>
      <div className={styles.ventanaCarritoDeComprasChild} />

      <FrameComponent3/>
      <section className={styles.shoppingCartSymbol}>
        <div className={styles.cancelSelectionButton}>
          <div className={styles.cancelSelectionButtonChild} />
          <div className={styles.backgroundRectangle}>
            <div className={styles.cartItemsContainer}>
              <div className={styles.carrito}>CARRITO</div>
              <div className={styles.carrito1}>CARRITO</div>
            </div>
            <div
              className={styles.anularLaSeleccin}
            >{`Anular la selección de todos los elementos `}</div>
          </div>
          <div className={styles.productsFrame}>
            <div className={styles.logoButton} />
          </div>
          <BackgroundFrame />
        </div>
      </section>
      <ContactDetailsFrame />
    </div>
  );
};

export default VentanaCarritoDeCompras;
