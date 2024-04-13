import MainFrame from "../components/MainFrame";
import InputContainer from "../components/InputContainer";
import styles from "./VentanaDeContraseaYSeguri.module.css";
import FrameComponent3 from "../components/FrameComponent3";

const VentanaDeContraseaYSeguri = () => {
  return (
    <div className={styles.ventanaDeContraseaYSeguri}>
      <div className={styles.rectangleShape} />
      <FrameComponent3/>
      <main className={styles.passwordVerificationFrame}>
        <InputContainer />
      </main>
    </div>
  );
};

export default VentanaDeContraseaYSeguri;
