import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./VentanaPrincipal.module.css";

const VentanaPrincipal = () => {
  const navigate = useNavigate();

  const onMaterialesSinFondo1Click = useCallback(() => {
    navigate("/informacin-de-cada-producto");
  }, [navigate]);

  const onBotonInfoMaqClick = useCallback(() => {
    navigate("/ventana-de-informacin-personal");
  }, [navigate]);

  const onBotonVerMsClick = useCallback(() => {
    navigate("/ventana-de-informacin-personal");
  }, [navigate]);

  const onLogoClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBotonProductos1Click = useCallback(() => {
    navigate("/ventana-de-informacin-personal");
  }, [navigate]);

  const onBotonSobreNosotrosClick = useCallback(() => {
    navigate("/ventana-sobre-nosotros");
  }, [navigate]);

  const onBotonDeMICUENTAClick = useCallback(() => {
    navigate("/ventana-inicio-de-sesin");
  }, [navigate]);

  return (
    <div className={styles.ventanaPrincipal}>
      <img
        className={styles.ventanaPrincipalChild}
        alt=""
        src="/rectangle-28@2x.png"
      />
      <img
        className={styles.ventanaPrincipalItem}
        alt=""
        src="/rectangle-4@2x.png"
        data-scroll-to="rectangleImage"
      />
      <h1 className={styles.empieceAConstruir}>EMPIECE A CONSTRUIR</h1>
      <h1 className={styles.rentalos}>RENTALOS</h1>
      <div className={styles.ventanaPrincipalInner} />
      <p className={styles.potenciaTusProyectosContainer}>
        <span
          className={styles.potenciaTusProyectos}
        >{`¡Potencia tus proyectos con nuestra amplia variedad de maquinaria pesada `}</span>
        <span
          className={styles.potenciaTusProyectos}
        >{`en alquiler! En RHINO, hacemos que tu trabajo sea más fácil proporcionándote `}</span>
        <span
          className={styles.accesoAEquipos}
        >{`acceso a equipos de alta calidad para construcción, excavación, y mucho más.  `}</span>
      </p>
      <img
        className={styles.compactadoraSinFondo1}
        alt=""
        src="/compactadora-sin-fondo-1@2x.png"
      />
      <img
        className={styles.materialesSinFondo1}
        alt=""
        src="/materiales-sin-fondo-1@2x.png"
        onClick={onMaterialesSinFondo1Click}
      />
      <img
        className={styles.cargadorDeCadenasSinFonod}
        alt=""
        src="/cargador-de-cadenas-sin-fonod-2@2x.png"
      />
      <img
        className={styles.maquinaSinFondo2}
        alt=""
        src="/maquina-sin-fondo-2@2x.png"
      />
      <img
        className={styles.cargadoraDeRuedasSinFondo}
        alt=""
        src="/cargadora-de-ruedas-sin-fondo-1@2x.png"
      />
      <img
        className={styles.camionobrasSinFondo1}
        alt=""
        src="/camionobras-sin-fondo-1@2x.png"
      />
      <button className={styles.botonInfoMaq} onClick={onBotonInfoMaqClick} />
      <button className={styles.botonInfoMaq4} />
      <button className={styles.botonInfoMaq2} />
      <button className={styles.botonInfoMaq5} />
      <button className={styles.botonInfoMaq3} />
      <button className={styles.botonInfoMaq6} />
      <button className={styles.botonVerMs} onClick={onBotonVerMsClick}>
        <b className={styles.verMs}>VER MÁS...</b>
      </button>
      <b className={styles.manipuladorDeMetales}>MANIPULADOR DE METALES</b>
      <b className={styles.caminDeObras}>CAMIÓN DE OBRAS</b>
      <b className={styles.aplanadora}>APLANADORA</b>
      <b className={styles.cargadoraDeRuedas}>CARGADORA DE RUEDAS</b>
      <b className={styles.mototralas}>MOTOTRAÍLAS</b>
      <b className={styles.cargadoraDeRuedas1}>CARGADORA DE RUEDAS</b>
      <div className={styles.frame}>
        <h1
          className={styles.productosDestacados}
        >{`PRODUCTOS DESTACADOS `}</h1>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.frame1}>
        <div className={styles.frame2}>
          <div className={styles.frame3}>
            <img
              className={styles.frameItem}
              alt=""
              src="/rectangle-18@2x.png"
            />
            <h1 className={styles.potencia}>POTENCIA</h1>
          </div>
          <div className={styles.frame4}>
            <img
              className={styles.frameInner}
              alt=""
              src="/rectangle-19@2x.png"
            />
            <h1 className={styles.eficiencia}>EFICIENCIA</h1>
          </div>
          <div className={styles.frame5}>
            <h1 className={styles.rendimiento}>RENDIMIENTO</h1>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-20@2x.png"
            />
            <div className={styles.rendimiento1}>RENDIMIENTO</div>
          </div>
        </div>
      </div>
      <h1 className={styles.haciendoPosibleLo}>
        HACIENDO POSIBLE LO IMPOSIBLE.
      </h1>
      <h1 className={styles.alquilaMaquinariaDesata}>
        !ALQUILA MAQUINARIA, DESATA TU GRANDEZA¡
      </h1>
      <button className={styles.botonMaquinariaPesada}>
        <b className={styles.verMs}>MAQUINARIA PESADA</b>
      </button>
      <button className={styles.botonMarcas}>
        <b className={styles.verMs}>MARCAS</b>
      </button>
      <button className={styles.botonVehiculos}>
        <b className={styles.verMs}>VEHÍCULOS</b>
      </button>
      <div className={styles.rectangleDiv} />
      <footer className={styles.footer1}>
        <div className={styles.footer1Inner}>
          <div className={styles.contactenosParent}>
            <div className={styles.contactenos}>CONTACTENOS</div>
            <div className={styles.frameChild1} />
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
          <div className={styles.botonX}>
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
      <header className={styles.headerPaginaPrincipal}>
        <div className={styles.headerPaginaPrincipalChild} />
        <div className={styles.headerPaginaPrincipalItem} />
        <button className={styles.logo} onClick={onLogoClick} />
        <button
          className={styles.botonProductos1}
          onClick={onBotonProductos1Click}
        >
          PRODUCTOS
        </button>
        <button
          className={styles.botonSobreNosotros}
          onClick={onBotonSobreNosotrosClick}
        >
          SOBRE NOSOTROS
        </button>
        <button className={styles.botonDeBuscar} />
        <button
          className={styles.botonDeMiCuenta}
          onClick={onBotonDeMICUENTAClick}
        >
          <img className={styles.perfil1Icon} alt="" src="/perfil-1@2x.png" />
          <div className={styles.miCuenta}>MI CUENTA</div>
        </button>
      </header>
    </div>
  );
};

export default VentanaPrincipal;
