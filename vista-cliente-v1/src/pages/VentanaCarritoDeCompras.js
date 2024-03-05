import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./VentanaCarritoDeCompras.module.css";

const VentanaCarritoDeCompras = () => {
  const navigate = useNavigate();

  const onBotonConsultarPrecioClick = useCallback(() => {
    navigate("/ventana-para-solcitar-una-cotizacin");
  }, [navigate]);

  const onBotonLogo9Click = useCallback(() => {
    navigate("/ventana-principal-2");
  }, [navigate]);

  const onBotonProductos9Click = useCallback(() => {
    navigate("/ventana-de-informacin-personal");
  }, [navigate]);

  const onBotonSobreNosotrosClick = useCallback(() => {
    navigate("/ventana-sobre-nosotros");
  }, [navigate]);

  const onBotonMICUENTA9Click = useCallback(() => {
    navigate("/ventana-principal-2");
  }, [navigate]);

  const onCarritoDeCompras1ImageClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.ventanaCarritoDeCompras}>
      <div className={styles.ventanaCarritoDeComprasChild} />
      <div className={styles.ventanaCarritoDeComprasItem} />
      <div className={styles.carrito}>CARRITO</div>
      <div className={styles.carrito}>CARRITO</div>
      <div className={styles.ventanaCarritoDeComprasInner} />
      <div
        className={styles.anularLaSeleccin}
      >{`Anular la selección de todos los elementos `}</div>
      <img
        className={styles.imagenMaquinaCarrito}
        alt=""
        src="/imagen-maquina-carrito@2x.png"
      />
      <div className={styles.textoInfoParent}>
        <b className={styles.textoInfo}>
          Manipuladora de materiales de ruedas - MH3050
        </b>
        <div className={styles.textoCantidad}>De CAT</div>
        <div className={styles.textoCantidad}>Cantidad</div>
        <input className={styles.inputCantidad} type="text" />
        <div className={styles.textoCantidad}>Eliminar producto</div>
      </div>
      <button
        className={styles.botonConsultarPrecio}
        onClick={onBotonConsultarPrecioClick}
      >
        <b className={styles.consultarPrecio}>CONSULTAR PRECIO</b>
      </button>
      <footer className={styles.footer4}>
        <div className={styles.footer4Inner}>
          <div className={styles.contactenosParent}>
            <div className={styles.contactenos}>CONTACTENOS</div>
            <div className={styles.frameChild} />
          </div>
        </div>
        <div className={styles.atencionalclienterhinocomWrapper}>
          <h1 className={styles.atencionalclienterhinocom}>
            atencionAlCliente@rhino.com
          </h1>
        </div>
        <div className={styles.textoCelularParent}>
          <h1 className={styles.textoCelular}>
            <ul className={styles.ul}>
              <li>301(849)837</li>
            </ul>
          </h1>
          <h1 className={styles.textoTelefono}>
            <ul className={styles.ul}>
              <li>6891254</li>
            </ul>
          </h1>
          <button className={styles.botonX}>
            <div className={styles.botonXChild} />
            <img className={styles.gorjeo1Icon} alt="" src="/gorjeo-1@2x.png" />
          </button>
          <button className={styles.botonYt} />
          <button className={styles.botonInsta} />
          <button className={styles.botonFacebook} />
        </div>
      </footer>
      <header className={styles.headerCarritoDeCompras}>
        <div className={styles.headerCarritoDeComprasChild} />
        <div
          className={styles.headerCarritoDeComprasItem}
          data-scroll-to="rectangle"
        />
        <button className={styles.botonLogo9} onClick={onBotonLogo9Click} />
        <button
          className={styles.botonProductos9}
          onClick={onBotonProductos9Click}
        >
          PRODUCTOS
        </button>
        <button
          className={styles.botonSobreNosotros}
          onClick={onBotonSobreNosotrosClick}
        >
          SOBRE NOSOTROS
        </button>
        <button
          className={styles.botonMiCuenta9}
          onClick={onBotonMICUENTA9Click}
        >
          <img className={styles.perfil1Icon} alt="" src="/perfil-12@2x.png" />
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

export default VentanaCarritoDeCompras;
