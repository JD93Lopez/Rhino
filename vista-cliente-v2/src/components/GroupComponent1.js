import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GroupComponent1.module.css";

const GroupComponent1 = () => {
  const navigate = useNavigate();

  const onBotonInformacinPersonalClick = useCallback(() => {
    navigate("/ventana-de-informacin-personal");
  }, [navigate]);

  const onBotonContraYSeguClick = useCallback(() => {
    navigate("/ventana-de-contrasea-y-seguridad");
  }, [navigate]);

  const onBotonAyudaContainerClick = useCallback(() => {
    navigate("/ventana-de-ayuda-y-asistencia");
  }, [navigate]);

  const onBotonCerrarSesionClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div
        className={styles.botonInformacinPersonal}
        onClick={onBotonInformacinPersonalClick}
      >
        <img
          className={styles.controlDePasaportes11}
          loading="lazy"
          alt=""
          src="/controldepasaportes-1-1@2x.png"
        />
        <div className={styles.informacinPersonalWrapper}>
          <div className={styles.informacinPersonal}>Información Personal</div>
        </div>
      </div>
      <div
        className={styles.botonContraYSegu}
        onClick={onBotonContraYSeguClick}
      >
        <img
          className={styles.contrasena1Icon}
          loading="lazy"
          alt=""
          src="/contrasena-1@2x.png"
        />
        <div className={styles.contraseaYSeguridadWrapper}>
          <div className={styles.contraseaYSeguridad}>
            Contraseña y Seguridad
          </div>
        </div>
      </div>
      <div className={styles.botonAyuda} onClick={onBotonAyudaContainerClick}>
        <img
          className={styles.apretonDeManos1Icon}
          loading="lazy"
          alt=""
          src="/apretondemanos-1@2x.png"
        />
        <div className={styles.ayudaYAsistenciaWrapper}>
          <div className={styles.ayudaYAsistencia}>Ayuda y Asistencia</div>
        </div>
      </div>
      <div className={styles.botonHistorial}>
        <img
          className={styles.expediente1Icon}
          loading="lazy"
          alt=""
          src="/expediente-1@2x.png"
        />
        <div className={styles.historialWrapper}>
          <div className={styles.historial}>Historial</div>
        </div>
      </div>
      <div
        className={styles.botonCerrarSesion}
        onClick={onBotonCerrarSesionClick}
      >
        <img
          className={styles.cerrarSesion11}
          loading="lazy"
          alt=""
          src="/cerrarsesion-1-1@2x.png"
        />
        <div className={styles.cerrarSesinWrapper}>
          <div className={styles.cerrarSesin}>Cerrar Sesión</div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
