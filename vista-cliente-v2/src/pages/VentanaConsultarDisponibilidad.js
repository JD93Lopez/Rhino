import FrameComponent3 from "../components/FrameComponent11";
import GroupComponent1 from "../components/GroupComponent9";
import GroupComponent from "../components/GroupComponent8";
import FrameComponent2 from "../components/FrameComponent10";
import styles from "./VentanaConsultarDisponibilid.module.css";

const VentanaConsultarDisponibilid = () => {
  return (
    <div className={styles.ventanaConsultarDisponibilid}>
      <FrameComponent11 />
      <section className={styles.ventanaConsultarDisponibilidInner}>
        <div className={styles.frameParent}>
          <GroupComponent9 />
          <GroupComponent8 />
          <input type="text" placeholder="Input 1" />
          <input type="text" placeholder="Input 2" />
        </div>
        <div className={styles.Fecha}>Fecha</div>
      <input className={styles.inputFecha} type="date" />
      </section>
      <FrameComponent10 />
    </div>
  );
};

export default VentanaConsultarDisponibilid;
