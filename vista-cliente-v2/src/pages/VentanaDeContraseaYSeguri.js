import MainFrame from "../components/MainFrame";
import InputContainer from "../components/InputContainer";
import styles from "./VentanaDeContraseaYSeguri.module.css";

const VentanaDeContraseaYSeguri = () => {
  return (
    <div className={styles.ventanaDeContraseaYSeguri}>
      <div className={styles.rectangleShape} />
      <MainFrame />
      <main className={styles.passwordVerificationFrame}>
        <InputContainer />
      </main>
    </div>
  );
};

export default VentanaDeContraseaYSeguri;
