import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SaveButtonFrame.module.css";

const SaveButtonFrame = () => {
  const navigate = useNavigate();

  const onBotonAtrsContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <footer className={styles.saveButtonFrame}>
      <div className={styles.previousStepButton}>
        <div className={styles.botonAtrs} onClick={onBotonAtrsContainerClick}>
          <button className={styles.backButtonLabel}>
            <div className={styles.backButtonLabelChild} />
            <div className={styles.atrs}>{`Atrás  `}</div>
          </button>
        </div>
        <button className={styles.adminProfileFrame}>
          <div className={styles.adminProfileFrameChild} />
          <div className={styles.guardar}>GUARDAR</div>
        </button>
      </div>
    </footer>
  );
};

export default SaveButtonFrame;
