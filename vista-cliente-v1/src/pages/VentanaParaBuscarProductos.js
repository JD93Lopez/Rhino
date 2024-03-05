import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./VentanaParaBuscarProductos.module.css";

const VentanaParaBuscarProductos = () => {
  const navigate = useNavigate();

  const onBotonDetallesClick = useCallback(() => {
    navigate("/informacin-de-cada-producto");
  }, [navigate]);

  const onBotonDetalles1Click = useCallback(() => {
    navigate("/informacin-de-cada-producto");
  }, [navigate]);

  const onBotonLogo8Click = useCallback(() => {
    navigate("/ventana-principal-2");
  }, [navigate]);

  const onBotonProductos8Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBotonSobreNosotrosClick = useCallback(() => {
    navigate("/ventana-sobre-nosotros");
  }, [navigate]);

  const onCarritoDeCompras1ImageClick = useCallback(() => {
    navigate("/ventana-carrito-de-compras");
  }, [navigate]);

  const onBotonDetalles2Click = useCallback(() => {
    navigate("/informacin-de-cada-producto");
  }, [navigate]);

  return (
    <div className={styles.ventanaParaBuscarProductos}>
      <div className={styles.productosParent}>
        <div className={styles.productos}>PRODUCTOS</div>
        <div className={styles.groupChild} />
      </div>
      <input className={styles.inputBuscarProducto} type="text" />
      <button className={styles.botonListaMaquinaria}>
        <img
          className={styles.botonListaMaquinariaChild}
          alt=""
          src="/rectangle-163.svg"
        />
        <b className={styles.maquinariaPesada}>Maquinaria Pesada</b>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </button>
      <button className={styles.botonListaVehiculos} form>
        <b className={styles.vehculos}>Vehículos</b>
        <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      </button>
      <img
        className={styles.cartaProductoIcon}
        alt=""
        src="/carta-producto@2x.png"
      />
      <div className={styles.nombreMaquina}>
        <p className={styles.manipuladoraDe}>Manipuladora de</p>
        <p className={styles.manipuladoraDe}>materiales de ruedas</p>
        <p className={styles.manipuladoraDe}>MH3050</p>
      </div>
      <div className={styles.nombreMaquina1}>
        <p className={styles.manipuladoraDe}>Manipuladora de</p>
        <p className={styles.manipuladoraDe}>materiales de ruedas</p>
        <p className={styles.manipuladoraDe}>MH3050</p>
      </div>
      <button className={styles.botonAgregarCarrito}>
        <img
          className={styles.anadirAlCarrito1Icon}
          alt=""
          src="/anadiralcarrito-1@2x.png"
        />
      </button>
      <button className={styles.botonAgregarCarrito1}>
        <img
          className={styles.anadirAlCarrito1Icon}
          alt=""
          src="/anadiralcarrito-1@2x.png"
        />
      </button>
      <button className={styles.botonDetalles} onClick={onBotonDetallesClick}>
        <b className={styles.vehculos}>DETALLES</b>
      </button>
      <button className={styles.botonDetalles1} onClick={onBotonDetalles1Click}>
        <b className={styles.vehculos}>DETALLES</b>
      </button>
      <footer className={styles.footer3}>
        <div className={styles.footer3Inner}>
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
          <div className={styles.contactenosParent}>
            <div className={styles.botonXChild} />
            <img className={styles.gorjeo1Icon} alt="" src="/gorjeo-1@2x.png" />
          </div>
          <img className={styles.botonYtIcon} alt="" src="/boton-yt@2x.png" />
          <img
            className={styles.botonYtIcon}
            alt=""
            src="/boton-insta@2x.png"
          />
          <img
            className={styles.botonYtIcon}
            alt=""
            src="/boton-facebook@2x.png"
          />
        </div>
      </footer>
      <header className={styles.headerVentanaBuscarProducto}>
        <div className={styles.headerVentanaBuscarProductoChild} />
        <div
          className={styles.headerVentanaBuscarProductoItem}
          data-scroll-to="rectangle"
        />
        <button className={styles.botonLogo8} onClick={onBotonLogo8Click} />
        <button
          className={styles.botonProductos8}
          onClick={onBotonProductos8Click}
        >
          PRODUCTOS
        </button>
        <button
          className={styles.botonSobreNosotros}
          onClick={onBotonSobreNosotrosClick}
        >
          SOBRE NOSOTROS
        </button>
        <button className={styles.botonMiCuenta8}>
          <img className={styles.perfil1Icon} alt="" src="/perfil-11@2x.png" />
          <div className={styles.miCuenta}>MI CUENTA</div>
        </button>
        <img
          className={styles.carritoDeCompras1Icon}
          alt=""
          src="/carritodecompras-2@2x.png"
          onClick={onCarritoDeCompras1ImageClick}
        />
      </header>
      <div className={styles.ventanaParaBuscarProductosChild} />
      <div className={styles.ventanaParaBuscarProductosItem} />
      <img
        className={styles.camionobrasSinFondo3}
        alt=""
        src="/camionobras-sin-fondo-1@2x.png"
      />
      <img
        className={styles.cargadoraDeRuedasSinFondo}
        alt=""
        src="/cargadora-de-ruedas-sin-fondo-2@2x.png"
      />
      <div className={styles.nombreMaquina2}>
        <p className={styles.manipuladoraDe}>Manipuladora de</p>
        <p className={styles.manipuladoraDe}>materiales de ruedas</p>
        <p className={styles.manipuladoraDe}>MH3050</p>
      </div>
      <button className={styles.botonAgregarCarrito2}>
        <img
          className={styles.anadirAlCarrito1Icon}
          alt=""
          src="/anadiralcarrito-1@2x.png"
        />
      </button>
      <button className={styles.botonDetalles2} onClick={onBotonDetalles2Click}>
        <b className={styles.vehculos}>DETALLES</b>
      </button>
      <div className={styles.ventanaParaBuscarProductosInner} />
      <img
        className={styles.compactadoraSinFondo2}
        alt=""
        src="/compactadora-sin-fondo-1@2x.png"
      />
    </div>
  );
};

export default VentanaParaBuscarProductos;
