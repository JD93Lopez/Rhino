import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./VentanaParaSolcitarUnaCoti.module.css";

const VentanaParaSolcitarUnaCoti = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/ventana-principal-2");
  }, [navigate]);

  const onPRODUCTOSClick = useCallback(() => {
    navigate("/ventana-de-informacin-personal");
  }, [navigate]);

  const onSOBRENOSOTROSClick = useCallback(() => {
    navigate("/ventana-sobre-nosotros");
  }, [navigate]);

  return (
    <div className={styles.ventanaParaSolcitarUnaCoti}>
      <header className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <button className={styles.logo} onClick={onLogoClick} />
        <button className={styles.productos} onClick={onPRODUCTOSClick}>
          PRODUCTOS
        </button>
        <button className={styles.sobreNosotros} onClick={onSOBRENOSOTROSClick}>
          SOBRE NOSOTROS
        </button>
        <button className={styles.lupa3} />
        <button className={styles.perfil1Parent}>
          <img className={styles.perfil1Icon} alt="" src="/perfil-1@2x.png" />
          <div className={styles.miCuenta}>MI CUENTA</div>
        </button>
      </header>
      <div className={styles.solicitarUnaCotizacin}>
        Solicitar Una Cotización
      </div>
      <div className={styles.paraRecibirUnaContainer}>
        <p
          className={styles.paraRecibirUna}
        >{`Para recibir una cotización de su distribuidor local, complete el siguiente formulario. Un `}</p>
        <p className={styles.paraRecibirUna}>
          representante se pondrá en contacto con usted para entregarlela
          información que solicitó.
        </p>
      </div>
      <div className={styles.nombre}>Nombre:</div>
      <div className={styles.apellido}>Apellido:</div>
      <div className={styles.telfono}>Teléfono:</div>
      <div className={styles.direccinDeLa}>Dirección de la empresa:</div>
      <div className={styles.correoElectrnico}>Correo electrónico:</div>
      <div className={styles.empresa}>Empresa:</div>
      <div className={styles.plazoDeCompra}>Plazo de compra:</div>
      <input className={styles.ventanaParaSolcitarUnaCotiChild} type="text" />
      <input className={styles.ventanaParaSolcitarUnaCotiItem} type="text" />
      <input className={styles.ventanaParaSolcitarUnaCotiInner} type="text" />
      <input className={styles.rectangleInput} type="text" />
      <input className={styles.ventanaParaSolcitarUnaCotiChild1} type="text" />
      <input className={styles.ventanaParaSolcitarUnaCotiChild2} type="text" />
      <input className={styles.frameInput} type="text" />
      <footer className={styles.footer2}>
        <div className={styles.footer2Inner}>
          <div className={styles.contactenosParent}>
            <div className={styles.contactenos}>CONTACTENOS</div>
            <div className={styles.frameInner} />
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
    </div>
  );
};

export default VentanaParaSolcitarUnaCoti;
