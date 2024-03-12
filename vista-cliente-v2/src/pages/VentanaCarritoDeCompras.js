import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProductFrame from "../components/ProductFrame";
import BackgroundFrame from "../components/BackgroundFrame";
import ContactDetailsFrame from "../components/ContactDetailsFrame";
import styles from "./VentanaCarritoDeCompras.module.css";

const VentanaCarritoDeCompras = () => {
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

  return (
    <div className={styles.ventanaCarritoDeCompras}>
      <div className={styles.ventanaCarritoDeComprasChild} />
      <ProductFrame
        rectangleDivHeight="146px"
        onBotonLogo6Click={onBotonLogo6Click}
        onBotonProductos6Click={onBotonProductos6Click}
        onBotonSobreNosotrosClick={onBotonSobreNosotrosClick}
        onCarritoDeCompras3ImageClick={onCarritoDeCompras3ImageClick}
      />
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
