import FrameComponent3 from "../components/FrameComponent3";
import GroupComponent3 from "../components/GroupComponent3";
import GroupComponent2 from "../components/GroupComponent2";
import FrameComponent10 from "../components/FrameComponent10";
import styles from "./VentanaConsultarDisponibilidad.module.css";

const VentanaConsultarDisponibilidad = () => {
  return (
    <div className={styles.ventanaConsultarDisponibilid}>
      <FrameComponent3 />
      <section className={styles.ventanaConsultarDisponibilidInner}>
        <div className={styles.frameParent}>
          <GroupComponent3 />
          <GroupComponent2 />
          <b className={styles.LugarOrigen}>Lugar de Origen</b>
          <input type="text" placeholder="Input 1" />
          <b className={styles.LugarDestino}>Lugar de DEstino</b>
          <input type="text" placeholder="Input 2" />
        </div>
        <div className={styles.Fecha}>Fecha</div>
      <input className={styles.inputFecha} type="date" />
      </section>
      <FrameComponent10 />
    </div>
  );
};

export default VentanaConsultarDisponibilidad;
