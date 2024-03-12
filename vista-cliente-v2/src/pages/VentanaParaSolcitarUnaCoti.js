import FrameComponent6 from "../components/FrameComponent6";
import LogoButtonRectangle from "../components/LogoButtonRectangle";
import ContactFrame from "../components/ContactFrame";
import styles from "./VentanaParaSolcitarUnaCoti.module.css";

const VentanaParaSolcitarUnaCoti = () => {
  return (
    <div className={styles.ventanaParaSolcitarUnaCoti}>
      <FrameComponent6 />
      <section className={styles.ventanaParaSolcitarUnaCotiInner}>
        <div className={styles.solicitarUnaCotizacinParent}>
          <h3 className={styles.solicitarUnaCotizacin}>
            Solicitar Una Cotización
          </h3>
          <div className={styles.paraRecibirUnaContainer}>
            <p
              className={styles.paraRecibirUna}
            >{`Para recibir una cotización de su distribuidor local, complete el siguiente formulario. Un `}</p>
            <p className={styles.representanteSePondr}>
              representante se pondrá en contacto con usted para entregarlela
              información que solicitó.
            </p>
          </div>
        </div>
      </section>
      <LogoButtonRectangle />
      <ContactFrame />
    </div>
  );
};

export default VentanaParaSolcitarUnaCoti;
