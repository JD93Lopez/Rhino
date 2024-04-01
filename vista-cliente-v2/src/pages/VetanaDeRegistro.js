import { useCallback } from "react";
import GroupComponent from "../components/GroupComponent";
import { useNavigate } from "react-router-dom";
import styles from "./VetanaDeRegistro.module.css";

const VetanaDeRegistro = () => {
  const navigate = useNavigate();

  const onBotonRegistrarse2Click = useCallback(() => {
    navigate("/ventana-de-informacin-personal");
  }, [navigate]);

  return (
    <div className={styles.vetanaDeRegistro}>
      <h1 className={styles.bienvenido}>¡BIENVENIDO!</h1>
      <main className={styles.b8c39214f0aadd21f0e370d549a1d0Parent}>
        <img
          className={styles.b8c39214f0aadd21f0e370d549a1d0Icon}
          alt=""
          src="/0b8c39214f0aadd21f0e370d549a1d02-1@2x.png"
        />
        <GroupComponent />
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo@2x.png"
        />
      </main>
      <div className={styles.registerButton}>
        <button className={styles.botnRegistrarse}>
          <div className={styles.botnRegistrarseChild} />
          <div
            className={styles.botonRegistrarse2}
            onClick={onBotonRegistrarse2Click}
          >
            <div className={styles.registrarse}>REGISTRARSE</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default VetanaDeRegistro;
