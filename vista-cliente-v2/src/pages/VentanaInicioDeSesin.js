import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Framebutton from "../components/Framebutton";
import styles from "./VentanaInicioDeSesin.module.css";

const VentanaInicioDeSesin = () => {
  const navigate = useNavigate();

  const onLogoISContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.ventanaInicioDeSesin}>
      <main className={styles.framelogo}>
        <section className={styles.fondoInicioDeSesin1} />
        <div className={styles.mainFrame}>
          <div className={styles.logoIs} onClick={onLogoISContainerClick}>
            <div className={styles.labelwelcome}>
              <div className={styles.userIcon} />
              <img
                className={styles.logoIcon}
                loading="lazy"
                alt=""
                src="/boton-logo-6@3x.png"
              />
            </div>
          </div>
          <Framebutton />
        </div>
      </main>
    </div>
  );
};

export default VentanaInicioDeSesin;
