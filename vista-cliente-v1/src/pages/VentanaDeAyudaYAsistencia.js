import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./VentanaDeAyudaYAsistencia.module.css";

const VentanaDeAyudaYAsistencia = () => {
  const navigate = useNavigate();

  const onBotonLogo5Click = useCallback(() => {
    navigate("/ventana-principal-2");
  }, [navigate]);

  const onBotonProductos5Click = useCallback(() => {
    navigate("/ventana-de-informacin-personal");
  }, [navigate]);

  const onBotonSobreNosotrosClick = useCallback(() => {
    navigate("/ventana-sobre-nosotros");
  }, [navigate]);

  const onCarritoDeCompras1ImageClick = useCallback(() => {
    navigate("/ventana-carrito-de-compras");
  }, [navigate]);

  return (
    <div className={styles.ventanaDeAyudaYAsistencia}>
      <h1 className={styles.ayudaYAsistencia}>AYUDA Y ASISTENCIA</h1>
      <input className={styles.inputAyudaYAsistencia} type="text" />
      <button className={styles.botonBuscarAyuda}>
        <div className={styles.botonBuscarAyudaChild} />
        <img className={styles.lupa5Icon} alt="" src="/lupa-5@2x.png" />
      </button>
      <h1 className={styles.enQuPodemos}>¿En qué podemos ayudarlo?</h1>
      <header className={styles.headerVentanaAyuda}>
        <div className={styles.headerVentanaAyudaChild} />
        <div className={styles.headerVentanaAyudaItem} />
        <button className={styles.botonLogo5} onClick={onBotonLogo5Click} />
        <button
          className={styles.botonProductos5}
          onClick={onBotonProductos5Click}
        >
          PRODUCTOS
        </button>
        <button
          className={styles.botonSobreNosotros}
          onClick={onBotonSobreNosotrosClick}
        >
          SOBRE NOSOTROS
        </button>
        <button className={styles.botonLupa5} />
        <button className={styles.botonMiCuenta5}>
          <img className={styles.perfil1Icon} alt="" src="/perfil-1@2x.png" />
          <div className={styles.miCuenta}>MI CUENTA</div>
        </button>
        <img
          className={styles.carritoDeCompras1Icon}
          alt=""
          src="/carritodecompras-2@2x.png"
          onClick={onCarritoDeCompras1ImageClick}
        />
      </header>
    </div>
  );
};

export default VentanaDeAyudaYAsistencia;
