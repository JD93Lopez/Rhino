import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProductFrame from "../components/ProductFrame";
import CategoryFrame from "../components/CategoryFrame";
import ContactInfoFrame from "../components/ContactInfoFrame";
import styles from "./VentanaParaBuscarProductos.module.css";
import FrameComponent3 from "../components/FrameComponent3";

const VentanaParaBuscarProductos = () => {
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
    <div className={styles.ventanaParaBuscarProductos}>
      {/* <ProductFrame
        rectangleDivHeight="146px"
        onBotonLogo6Click={onBotonLogo6Click}
        onBotonProductos6Click={onBotonProductos6Click}
        onBotonSobreNosotrosClick={onBotonSobreNosotrosClick}
        onCarritoDeCompras3ImageClick={onCarritoDeCompras3ImageClick}
      /> */}
      <FrameComponent3/>
      <main className={styles.addtoCartButtonFrame}>
        <section className={styles.backgroundRectangle}>
          <div className={styles.productosParent}>
            <h1 className={styles.productos}>PRODUCTOS</h1>
            <div className={styles.productSearchFrameWrapper}>
              <div className={styles.productSearchFrame} />
            </div>
          </div>
          <CategoryFrame />
        </section>
      </main>
      <ContactInfoFrame />
    </div>
  );
};

export default VentanaParaBuscarProductos;
