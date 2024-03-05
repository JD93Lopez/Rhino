import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./VentanaDeInformacinPersona.module.css";

const VentanaDeInformacinPersona = () => {
  const navigate = useNavigate();

  const onBotonEditarInformacionClick = useCallback(() => {
    navigate("/ventana-de-editar-informacin-personal");
  }, [navigate]);

  const onBotonLogo3Click = useCallback(() => {
    navigate("/ventana-principal-2");
  }, [navigate]);

  const onBotonProductos3Click = useCallback(() => {
    navigate("/ventana-de-informacin-personal");
  }, [navigate]);

  const onBotonSobreNosotrosClick = useCallback(() => {
    navigate("/ventana-sobre-nosotros");
  }, [navigate]);

  const onCarritoDeCompras2ImageClick = useCallback(() => {
    navigate("/ventana-carrito-de-compras");
  }, [navigate]);

  return (
    <div className={styles.ventanaDeInformacinPersona}>
      <div className={styles.informacinPersonal}> INFORMACIÓN PERSONAL</div>
      <div className={styles.ventanaDeInformacinPersonaChild} />
      <b className={styles.nombreCompleto}>{`Nombre Completo: `}</b>
      <div className={styles.sebastianPicoAfanador}>
        Sebastian Pico Afanador
      </div>
      <div className={styles.div}>1005296655</div>
      <div className={styles.picoafanadorgmailcom}>picoafanador@gmail.com</div>
      <div className={styles.div1}>3017781251</div>
      <div className={styles.cll18}>cll 18 # 21-62</div>
      <b className={styles.identificacin}>{`Identificación: `}</b>
      <b className={styles.correo}>{`Correo: `}</b>
      <b className={styles.telfono}>{`Teléfono: `}</b>
      <b className={styles.direccin}>{`Dirección: `}</b>
      <div className={styles.ventanaDeInformacinPersonaItem} />
      <button
        className={styles.botonEditarInformacion}
        onClick={onBotonEditarInformacionClick}
      >
        <b className={styles.editarInformacin}>EDITAR INFORMACIÓN</b>
      </button>
      <div className={styles.headerInformacionPersonal}>
        <header className={styles.headerInformacionPersonal1}>
          <div className={styles.headerInformacionPersonalChild} />
          <div className={styles.headerInformacionPersonalItem} />
          <button className={styles.botonLogo3} onClick={onBotonLogo3Click} />
          <button
            className={styles.botonProductos3}
            onClick={onBotonProductos3Click}
          >
            PRODUCTOS
          </button>
          <button
            className={styles.botonSobreNosotros}
            onClick={onBotonSobreNosotrosClick}
          >
            SOBRE NOSOTROS
          </button>
          <button className={styles.botonLupa3} />
          <button className={styles.botonMiCuenta3}>
            <img className={styles.perfil1Icon} alt="" src="/perfil-1@2x.png" />
            <div className={styles.miCuenta}>MI CUENTA</div>
          </button>
          <img
            className={styles.carritoDeCompras2Icon}
            alt=""
            src="/carritodecompras-2@2x.png"
            onClick={onCarritoDeCompras2ImageClick}
          />
        </header>
        <div className={styles.headerInformacionPersonalInner} />
      </div>
    </div>
  );
};

export default VentanaDeInformacinPersona;
