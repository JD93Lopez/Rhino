import FrameComponent1 from "../components/FrameComponent1";
import Proyecto1 from "../components/Proyecto1";
import styles from "./VistaAdministradorMantenim.module.css";

const VistaAdministradorMantenim = () => {
  return (
    <div className={styles.vistaAdministradorMantenim}>
      <div className={styles.vistaAdministradorMantenimChild} />
      <FrameComponent1 />
      <main className={styles.vistaAdministradorMantenimInner}>
        <section className={styles.mantenimientoParent}>
          <h1 className={styles.mantenimiento}>MANTENIMIENTO</h1>
          <div className={styles.projectDetails}>
            <Proyecto1
              excavadora="Excavadora"
              prop="49845"
              prop1="23/03/2024"
            />
            <Proyecto1
              excavadora="Montacargas"
              prop="125678"
              prop1="15/04/2024"
            />
            <Proyecto1
              excavadora="Excavadora"
              prop="49845"
              prop1="23/03/2024"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default VistaAdministradorMantenim;
