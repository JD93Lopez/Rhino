import { useCallback } from "react";
import styles from "./MotorTrailas.module.css";
import { useNavigate } from "react-router-dom";

const MotorTrailas = () => {
  const navigate = useNavigate()
  const verMasClick = useCallback(() => {
    navigate("/ventana-para-buscar-productos");
  }, [navigate]);
  return (
    <section className={styles.motorTrailas}>
        <div className={styles.frameTextoCelularTextotelef}>
          <button className={styles.verMsParent} onClick={verMasClick}>
            <b className={styles.verMs}>VER MÁS...</b>
            <div className={styles.frameChild} />
          </button>
        </div>
    </section>
  );
};

export default MotorTrailas;
