import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LogoButton from "./LogoButton";
import styles from "./FrameComponent3.module.css";
import { DataContext } from "./DataProvider";

const FrameComponent3 = () => {

  const dataContext = useContext(DataContext)

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
    if(!dataContext.usuarioIniciado.iniciado){
      navigate("/ventana-inicio-sesion");
    }
  }, [navigate, dataContext]);
  return (
    <header className={styles.logoFrameParent}>
      <div className={styles.logoButton}>
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
