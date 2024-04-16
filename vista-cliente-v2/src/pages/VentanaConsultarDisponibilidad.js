import FrameComponent3 from "../components/FrameComponent3";
import GroupComponent3 from "../components/GroupComponent3";
import GroupComponent2 from "../components/GroupComponent2";
import FrameComponent10 from "../components/FrameComponent10";
import styles from "./VentanaConsultarDisponibilidad.module.css";

const VentanaConsultarDisponibilidad = () => {
  return (
    <div className={styles.ventanaConsultarDisponibilid}>
      <FrameComponent3 />

      <b className={styles.LugarDestino}>Lugar de Destino</b>
          <input type="text" className = {styles.InputLugarDestino} placeholder=" Lugar..." />

      <b className={styles.LugarOrigen}>Lugar de Origen</b>
          <input type="text" className = {styles.InputLugarOrigen} placeholder=" Lugar..." />

<div className={styles.FechaInicio}>Fecha de Inicio</div>
      <input className={styles.inputFechaInicio} type="date" />

      <div className={styles.FechaFinal}>Fecha de Culminación</div>
      <input className={styles.inputFechaFinal} type="date" /*placeholder="Fecha Final"*/ />

      <section className={styles.ventanaConsultarDisponibilidInner}>
        <div className={styles.frameParent}>
          <GroupComponent3 />
          <GroupComponent2 /> 
        </div>
        
      </section>
      <FrameComponent10 />
    </div>
  );
};

export default VentanaConsultarDisponibilidad;

