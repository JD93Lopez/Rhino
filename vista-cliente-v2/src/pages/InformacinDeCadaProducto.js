import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProductFrame from "../components/ProductFrame";
import Framemotorinfo from "../components/Framemotorinfo";
import Headerframe from "../components/Headerframe";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./InformacinDeCadaProducto.module.css";

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
        <img
          className={styles.cartAddRemoveGroup}
          loading="lazy"
          alt=""
          src="/rectangle-143@2x.png"
        />
        <img
          className={styles.cartAddRemoveGroup1}
          loading="lazy"
          alt=""
          src="/rectangle-144@2x.png"
        />
        <img
          className={styles.cartAddRemoveGroup2}
          loading="lazy"
          alt=""
          src="/rectangle-145@2x.png"
        />
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
