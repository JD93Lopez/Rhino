import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LogoButton from "./LogoButton";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = () => {
  const navigate = useNavigate();

  const onBotonLogo6Click = useCallback(() => {
    navigate("/ventana-principal-2");
  }, [navigate]);

  const onBotonProductos6Click = useCallback(() => {
    navigate("/ventana-para-buscar-productos");
  }, [navigate]);

  const onBotonSobreNosotrosClick = useCallback(() => {
    navigate("/ventana-sobre-nosotros");
  }, [navigate]);

  const onBotonMiCuentaClick = useCallback(() => {
    navigate("/ventana-inicio-sesion");
  }, [navigate]);
  return (
    <header className={styles.logoFrameParent}>
      <img
        className={styles.logoFrameIcon}
        loading="lazy"
        alt=""
        src="/rectangle-4@2x.png"
      />
      <div className={styles.logoButton}>
        <div className={styles.logoButtonChild} />
        <LogoButton
          onBotonLogo6Click={onBotonLogo6Click}
          onBotonProductos6Click={onBotonProductos6Click}
          onBotonSobreNosotrosClick={onBotonSobreNosotrosClick}
          onBotonMiCuentaClick={onBotonMiCuentaClick}
        />
      </div>
    </header>
  );
};

export default FrameComponent3;
