import styles from "./CallToAction.module.css";

const CallToAction = () => {
  return (
    <div className={styles.callToAction}>
      <h1 className={styles.contactenos}>CONTACTENOS</h1>
      <div className={styles.callToActionInner}>
        <div className={styles.frameChild} />
      </div>
    </div>
  );
};

export default CallToAction;
