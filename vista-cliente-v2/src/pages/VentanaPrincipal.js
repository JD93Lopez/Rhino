import { useCallback } from "react";
import FrameComponentP from "../components/FrameComponentP";
import { ScrollRestoration, useNavigate } from "react-router-dom";
import ChainLoaders from "../components/ChainLoaders";
import MotorTrailas from "../components/MotorTrailas";
import ContainerBox from "../components/ContainerBox";
import styles from "./VentanaPrincipal.module.css";
import ContactInfoFrame from "../components/ContactInfoFrame";
const VentanaPrincipal = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.ventanaPrincipal}>
      <FrameComponentP />
      <section className={styles.customerService}>
        <div className={styles.socialMediaIcons}>
          <h1 className={styles.empieceAConstruir}>EMPIECE A CONSTRUIR</h1>
          <div className={styles.productAndAboutUs}>
            <div className={styles.searchFrame} />
          </div>

          <b className={styles.potenciaTusProyectosContainer}>
            <p
              className={styles.potenciaTusProyectos}
            >{`¡Potencia tus proyectos con nuestra amplia variedad de maquinaria pesada `}</p>
            <p
              className={styles.enAlquilerEn}
            >{`en alquiler! En RHINO, hacemos que tu trabajo sea más fácil proporcionándote `}</p>
            <p
              className={styles.accesoAEquipos}
            >{`acceso a equipos de alta calidad para construcción, excavación, y mucho más.  `}</p>
          </b>
        </div>
      </section>

      <ChainLoaders />
      <MotorTrailas />
      <ContainerBox />
      <section className={styles.moreInfoFrame}>
        <div className={styles.alquilaMaquinariaFrame}>
          <h1 className={styles.haciendoPosibleLo}>
            HACIENDO POSIBLE LO IMPOSIBLE.
          </h1>
          <h1 className={styles.alquilaMaquinariaDesata}>
            !ALQUILA MAQUINARIA, DESATA TU GRANDEZA¡
          </h1>
          
        </div>
      </section>
      <ContactInfoFrame />
    </div>
  );
};

export default VentanaPrincipal;
