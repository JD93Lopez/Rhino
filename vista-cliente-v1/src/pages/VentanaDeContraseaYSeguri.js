import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./VentanaDeContraseaYSeguri.module.css";

const VentanaDeContraseaYSeguri = () => {
  const navigate = useNavigate();

  const onBotonLogo4Click = useCallback(() => {
    navigate("/ventana-principal-2");
  }, [navigate]);

  const onBotonProductos4Click = useCallback(() => {
    navigate("/ventana-de-informacin-personal");
  }, [navigate]);

  const onBotonSobreNosotrosClick = useCallback(() => {
    navigate("/ventana-sobre-nosotros");
  }, [navigate]);

  const onCarritoDeCompras5ImageClick = useCallback(() => {
    navigate("/ventana-carrito-de-compras");
  }, [navigate]);

  return (
    <div className={styles.ventanaDeContraseaYSeguri}>
      <div className={styles.contraseaYSeguridad}>CONTRASEÑA Y SEGURIDAD</div>
      <div className={styles.ventanaDeContraseaYSeguriChild} />
      <b className={styles.nombreCompleto}>{`Nombre Completo: `}</b>
      <div className={styles.sebastianPicoAfanador}>
        Sebastian Pico Afanador
      </div>
      <div className={styles.picoafanadorgmailcom}>picoafanador@gmail.com</div>
      <div className={styles.div}>***************</div>
      <b className={styles.correo}>{`Correo: `}</b>
      <b className={styles.contrasea}>{`Contraseña: `}</b>
      <b className={styles.contraseaAntigua}>Contraseña Antigua:</b>
      <b className={styles.contraseaNueva}>Contraseña Nueva:</b>
      <b className={styles.repitaLaNueva}>Repita la nueva contraseña:</b>
      <div className={styles.ventanaDeContraseaYSeguriItem} />
      <button className={styles.botonCambiarContrasea}>
        <b className={styles.cambiarContrasea}>CAMBIAR CONTRASEÑA</b>
      </button>
      <input className={styles.ventanaDeContraseaYSeguriInner} type="text" />
      <input className={styles.rectangleInput} type="text" />
      <input className={styles.ventanaDeContraseaYSeguriChild1} type="text" />
      <header className={styles.headerConraYSegu}>
        <div className={styles.headerConraYSeguChild} />
        <div className={styles.headerConraYSeguItem} />
        <button className={styles.botonLogo4} onClick={onBotonLogo4Click} />
        <button
          className={styles.botonProductos4}
          onClick={onBotonProductos4Click}
        >
          PRODUCTOS
        </button>
        <button
          className={styles.botonSobreNosotros}
          onClick={onBotonSobreNosotrosClick}
        >
          SOBRE NOSOTROS
        </button>
        <button className={styles.botonLupa4} />
        <button className={styles.botonMiCuenta4}>
          <img className={styles.perfil1Icon} alt="" src="/perfil-1@2x.png" />
          <div className={styles.miCuenta}>MI CUENTA</div>
        </button>
        <img
          className={styles.carritoDeCompras5Icon}
          alt=""
          src="/carritodecompras-2@2x.png"
          onClick={onCarritoDeCompras5ImageClick}
        />
      </header>
    </div>
  );
};

export default VentanaDeContraseaYSeguri;
