import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent5 from "../components/FrameComponent5";
import FrameFullNameIDAddressEm from "../components/FrameFullNameIDAddressEm";
import styles from "./VentanaDeInformacinPersona.module.css";

const VentanaDeInformacinPersona = () => {
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
    <div className={styles.ventanaDeInformacinPersona}>
      <div className={styles.ventanaDeInformacinPersonaChild} />
      <FrameComponent5
        onBotonLogo6Click={onBotonLogo6Click}
        onBotonProductos6Click={onBotonProductos6Click}
        onBotonSobreNosotrosClick={onBotonSobreNosotrosClick}
        onCarritoDeCompras3ImageClick={onCarritoDeCompras3ImageClick}
      />
      <section className={styles.frameData}>
        <FrameFullNameIDAddressEm />
      </section>
    </div>
  );
};

export default VentanaDeInformacinPersona;
