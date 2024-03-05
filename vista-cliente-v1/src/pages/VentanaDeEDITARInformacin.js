import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./VentanaDeEDITARInformacin.module.css";

const VentanaDeEDITARInformacin = () => {
  const navigate = useNavigate();

  const onBotonGuardarInformacionClick = useCallback(() => {
    navigate("/ventana-de-informacin-personal1");
  }, [navigate]);

  const onBotonLogo6Click = useCallback(() => {
    navigate("/ventana-principal-2");
  }, [navigate]);

  const onBotonProductos6Click = useCallback(() => {
    navigate("/ventana-de-informacin-personal");
  }, [navigate]);

  const onBotonSobreNosotrosClick = useCallback(() => {
    navigate("/ventana-sobre-nosotros");
  }, [navigate]);

  const onCarritoDeCompras3ImageClick = useCallback(() => {
    navigate("/ventana-carrito-de-compras");
  }, [navigate]);

  return (
    <div className={styles.ventanaDeEditarInformacin}>
      <div className={styles.informacinPersonal}> INFORMACIÓN PERSONAL</div>
      <div className={styles.ventanaDeEditarInformacinChild} />
      <b className={styles.nombreCompleto}>{`Nombre Completo: `}</b>
      <b className={styles.identificacin}>{`Identificación: `}</b>
      <b className={styles.correo}>{`Correo: `}</b>
      <b className={styles.telfono}>{`Teléfono: `}</b>
      <b className={styles.direccin}>{`Dirección: `}</b>
      <div className={styles.ventanaDeEditarInformacinItem} />
      <button
        className={styles.botonGuardarInformacion}
        onClick={onBotonGuardarInformacionClick}
      >
        <b className={styles.guardarInformacin}>GUARDAR INFORMACIÓN</b>
      </button>
      <input className={styles.inputNombreCompleto} type="text" />
      <input className={styles.inputIdentificacin2} type="text" />
      <input className={styles.inputCorreo2} type="text" />
      <input className={styles.inputTelefono2} type="text" />
      <input className={styles.inputAddress2} type="text" />
      <header className={styles.headerEditarInfoPersonal}>
        <div className={styles.headerEditarInfoPersonalChild} />
        <div className={styles.headerEditarInfoPersonalItem} />
        <button className={styles.botonLogo6} onClick={onBotonLogo6Click} />
        <button
          className={styles.botonProductos6}
          onClick={onBotonProductos6Click}
        >
          PRODUCTOS
        </button>
        <button
          className={styles.botonSobreNosotros}
          onClick={onBotonSobreNosotrosClick}
        >
          SOBRE NOSOTROS
        </button>
        <button className={styles.botonLupa6} />
        <button className={styles.botonMiCuenta6}>
          <img className={styles.perfil1Icon} alt="" src="/perfil-1@2x.png" />
          <div className={styles.miCuenta}>MI CUENTA</div>
        </button>
        <img
          className={styles.carritoDeCompras3Icon}
          alt=""
          src="/carritodecompras-2@2x.png"
          onClick={onCarritoDeCompras3ImageClick}
        />
      </header>
    </div>
  );
};

export default VentanaDeEDITARInformacin;
