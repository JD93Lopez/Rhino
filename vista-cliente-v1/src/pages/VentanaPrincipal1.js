import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./VentanaPrincipal1.module.css";

const VentanaPrincipal1 = () => {
  const navigate = useNavigate();

  const onMaterialesSinFondo1Click = useCallback(() => {
    navigate("/informacin-de-cada-producto");
  }, [navigate]);

  const onSignoMasEnUnCirculoBlancoClick = useCallback(() => {
    navigate("/informacin-de-cada-producto");
  }, [navigate]);

  const onVerMsClick = useCallback(() => {
    navigate("/ventana-de-informacin-personal");
  }, [navigate]);

  const onBotonLogo7Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBotonProductos7Click = useCallback(() => {
    navigate("/ventana-de-informacin-personal");
  }, [navigate]);

  const onBotonSobreNosotrosClick = useCallback(() => {
    navigate("/ventana-sobre-nosotros");
  }, [navigate]);

  const onCarritoDeCompras4ImageClick = useCallback(() => {
    navigate("/ventana-carrito-de-compras");
  }, [navigate]);

  const onBotonInformacinPersonalClick = useCallback(() => {
    navigate("/ventana-de-informacin-personal1");
  }, [navigate]);

  const onBotonContraYSeguClick = useCallback(() => {
    navigate("/ventana-de-contrasea-y-seguridad");
  }, [navigate]);

  const onBotonAyudaClick = useCallback(() => {
    navigate("/ventana-de-ayuda-y-asistencia");
  }, [navigate]);

  const onBotonCerrarSesionClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.ventanaPrincipal2}>
      <img
        className={styles.ventanaPrincipal2Child}
        alt=""
        src="/rectangle-28@2x.png"
      />
      <img
        className={styles.ventanaPrincipal2Item}
        alt=""
        src="/rectangle-4@2x.png"
        data-scroll-to="rectangleImage"
      />
      <h1 className={styles.empieceAConstruir}>EMPIECE A CONSTRUIR</h1>
      <h1 className={styles.rentalos}>RENTALOS</h1>
      <div className={styles.ventanaPrincipal2Inner} />
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
      <button
        className={styles.signoMasEnUnCirculoBlanco}
        onClick={onSignoMasEnUnCirculoBlancoClick}
      />
      <button className={styles.signoMasEnUnCirculoBlanco1} />
      <button className={styles.signoMasEnUnCirculoBlanco2} />
      <button className={styles.signoMasEnUnCirculoBlanco3} />
      <button className={styles.signoMasEnUnCirculoBlanco4} />
      <button className={styles.signoMasEnUnCirculoBlanco5} />
      <button className={styles.verMs} onClick={onVerMsClick}>
        <b className={styles.maquinariaPesada}>VER MÁS...</b>
      </button>
      <b className={styles.manipuladorDeMetales}>MANIPULADOR DE METALES</b>
      <b className={styles.precio}>precio</b>
      <b className={styles.precio1}>precio</b>
      <b className={styles.caminDeObras}>CAMIÓN DE OBRAS</b>
      <b className={styles.precio2}>precio</b>
      <b className={styles.precio3}>precio</b>
      <b className={styles.aplanadora}>APLANADORA</b>
      <b className={styles.precio4}>precio</b>
      <b className={styles.precio5}>precio</b>
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
        <b className={styles.maquinariaPesada}>MAQUINARIA PESADA</b>
      </button>
      <button className={styles.botonMarcas}>
        <b className={styles.maquinariaPesada}>MARCAS</b>
      </button>
      <button className={styles.botonVehiculos}>
        <b className={styles.maquinariaPesada}>VEHÍCULOS</b>
      </button>
      <div className={styles.rectangleDiv} />
      <footer className={styles.footer2}>
        <div className={styles.footer2Inner}>
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
      <header className={styles.headerVentanaPrincipal2}>
        <div className={styles.headerVentanaPrincipal2Child} />
        <div className={styles.headerVentanaPrincipal2Item} />
        <button className={styles.botonLogo7} onClick={onBotonLogo7Click} />
        <button
          className={styles.botonProductos7}
          onClick={onBotonProductos7Click}
        >
          PRODUCTOS
        </button>
        <button
          className={styles.botonSobreNosotros}
          onClick={onBotonSobreNosotrosClick}
        >
          SOBRE NOSOTROS
        </button>
        <button className={styles.botonLupa7} />
        <button className={styles.botonMiCuenta7}>
          <img className={styles.perfil1Icon} alt="" src="/perfil-1@2x.png" />
          <div className={styles.miCuenta}>MI CUENTA</div>
        </button>
        <img
          className={styles.carritoDeCompras4Icon}
          alt=""
          src="/carritodecompras-2@2x.png"
          onClick={onCarritoDeCompras4ImageClick}
        />
      </header>
      <div className={styles.menDeOpciones}>
        <button
          className={styles.botonInformacinPersonal}
          onClick={onBotonInformacinPersonalClick}
        >
          <img
            className={styles.contrasena1Icon}
            alt=""
            src="/controldepasaportes-1-1@2x.png"
          />
          <div className={styles.informacinPersonal}>Información Personal</div>
        </button>
        <button
          className={styles.botonContraYSegu}
          onClick={onBotonContraYSeguClick}
        >
          <img
            className={styles.contrasena1Icon}
            alt=""
            src="/contrasena-1@2x.png"
          />
          <div className={styles.informacinPersonal}>
            Contraseña y Seguridad
          </div>
        </button>
        <button className={styles.botonAyuda} onClick={onBotonAyudaClick}>
          <img
            className={styles.contrasena1Icon}
            alt=""
            src="/apretondemanos-1@2x.png"
          />
          <div className={styles.informacinPersonal}>Ayuda y Asistencia</div>
        </button>
        <button className={styles.botonHistorial}>
          <img
            className={styles.contrasena1Icon}
            alt=""
            src="/expediente-1@2x.png"
          />
          <div className={styles.informacinPersonal}>Historial</div>
        </button>
        <button
          className={styles.botonCerrarSesion}
          onClick={onBotonCerrarSesionClick}
        >
          <img
            className={styles.contrasena1Icon}
            alt=""
            src="/cerrarsesion-1-1@2x.png"
          />
          <div className={styles.informacinPersonal}>Cerrar Sesión</div>
        </button>
      </div>
    </div>
  );
};

export default VentanaPrincipal1;
