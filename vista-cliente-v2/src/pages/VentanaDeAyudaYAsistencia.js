import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent7 from "../components/FrameComponent7";
import styles from "./VentanaDeAyudaYAsistencia.module.css";

const VentanaDeAyudaYAsistencia = () => {
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
    <div className={styles.ventanaDeAyudaYAsistencia}>
      <div className={styles.rectangleFrame} />
      <FrameComponent5
        rectangleDivHeight="276px"
        rectangleDivPadding="0px 0px 180px"
        buttonlogoPadding="var(--padding-4xs) var(--padding-9xl) var(--padding-4xs) var(--padding-36xl)"
        onBotonLogo6Click={onBotonLogo6Click}
        onBotonProductos6Click={onBotonProductos6Click}
        onBotonSobreNosotrosClick={onBotonSobreNosotrosClick}
        onCarritoDeCompras3ImageClick={onCarritoDeCompras3ImageClick}
      />
      <FrameComponent7 />
    </div>
  );
};

export default VentanaDeAyudaYAsistencia;
