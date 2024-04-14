import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/FrameComponent3";
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
      <FrameComponent3/>
      <div>
        <br/><br/><br/><br/><br/><br/>
      </div>
      <FrameComponent7 />
    </div>
  );
};

export default VentanaDeAyudaYAsistencia;
