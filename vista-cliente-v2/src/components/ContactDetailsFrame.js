import FrameComponent from "./FrameComponent";
import styles from "./ContactDetailsFrame.module.css";

const ContactDetailsFrame = () => {
  return (
    <section className={styles.contactDetailsFrame}>
      <div className={styles.contactInfo}>
        <input
          className={styles.contactenos}
          placeholder="CONTACTENOS"
          type="text"
        />
        <div className={styles.contactUs}>
          <div className={styles.attentionText} />
        </div>
      </div>
      <input
        className={styles.customerService}
        placeholder="atencionAlCliente@rhino.com"
        type="text"
      />
      <FrameComponent />
    </section>
  );
};

export default ContactDetailsFrame;
