import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LogoButton from "./LogoButton";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
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

  return (
    <header className={styles.innerFrameOneParent}>
      <div className={styles.innerFrameOne} />
      <LogoButton
        onBotonLogo6Click={onBotonLogo6Click}
        onBotonProductos6Click={onBotonProductos6Click}
        onBotonSobreNosotrosClick={onBotonSobreNosotrosClick}
      />
    </header>
  );
};

export default FrameComponent2;
