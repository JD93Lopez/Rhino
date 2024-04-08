import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent5 from "../components/FrameComponent5";
import AddressFrame from "../components/AddressFrame";
import styles from "./VentanaDeEDITARInformacin.module.css";

const VentanaDeEDITARInformacin = () => {
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

  const onCerrarSesionClick = useCallback(() => {
    navigate("/ventana-principal-2");
  }, [navigate]);
  return (
    <div className={styles.ventanaDeEditarInformacin}>
      <div className={styles.profilePicRectangle} />
      <FrameComponent5
        rectangleDivHeight="198px"
        rectangleDivPadding="0px 0px var(--padding-83xl)"
        buttonlogoPadding="var(--padding-4xs) var(--padding-15xl) var(--padding-4xs) var(--padding-30xl)"
        onBotonLogo6Click={onBotonLogo6Click}
        onBotonProductos6Click={onBotonProductos6Click}
        onBotonSobreNosotrosClick={onBotonSobreNosotrosClick}
        onCarritoDeCompras3ImageClick={onCarritoDeCompras3ImageClick}
        onCerrarSesionClick={onCerrarSesionClick}
      />
      <section className={styles.editPersonalInfoButton}>
        <AddressFrame />
      </section>
    </div>
  );
};

export default VentanaDeEDITARInformacin;
