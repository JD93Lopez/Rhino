import { useCallback } from "react";
import GroupComponent1 from "../components/GroupComponent1";
import MARCAS from "../components/MARCAS";
import { useNavigate } from "react-router-dom";
import CellularAndTelephone from "../components/CellularAndTelephone";
import FrameComponent4 from "../components/FrameComponent4";
import ContainerMoreInfo from "../components/ContainerMoreInfo";
import MediaSocialButtons from "../components/MediaSocialButtons";
import styles from "./VentanaParaClientes.module.css";

const VentanaParaClientes = () => {
  const navigate = useNavigate();

  const onMaterialesSinFondo1Click = useCallback(() => {
    navigate("/informacin-de-cada-producto");
  }, [navigate]);

  return (
    <div className={styles.ventanaParaClientes}>
      <div className={styles.containerGroup} />
      <section className={styles.rectangle}>
        <h1 className={styles.empieceAConstruir}>EMPIECE A CONSTRUIR</h1>
        <div className={styles.group} />
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
        <div className={styles.frameParent}>
          <img className={styles.frameIcon} alt="" src="/rectangle-4@2x.png" />
          <GroupComponent1 />
        </div>
        <MARCAS />
      </section>
      <div className={styles.rectangleShape}>
        <img
          className={styles.materialesSinFondo1}
          loading="lazy"
          alt=""
          src="/materiales-sin-fondo-1@2x.png"
          onClick={onMaterialesSinFondo1Click}
        />
        <div className={styles.groupingMarksVehicles}>
          <div className={styles.heavyMachineryLabel}>
            <h1
              className={styles.productosDestacados}
            >{`PRODUCTOS DESTACADOS `}</h1>
            <div className={styles.quiltRentalService}>
              <div className={styles.contactInfoFrame} />
            </div>
          </div>
        </div>
      </div>
      <CellularAndTelephone />
      <FrameComponent4 />
      <ContainerMoreInfo />
      <section className={styles.containerMoreRentals}>
        <div className={styles.rectangle1}>
          <div className={styles.text}>
            <div className={styles.haciendoPosibleLoImposibleParent}>
              <h1 className={styles.haciendoPosibleLo}>
                HACIENDO POSIBLE LO IMPOSIBLE.
              </h1>
              <div className={styles.potenciaRender} />
            </div>
          </div>
          <h1 className={styles.alquilaMaquinariaDesata}>
            !ALQUILA MAQUINARIA, DESATA TU GRANDEZA¡
          </h1>
        </div>
      </section>
      <section className={styles.quilAlquilaMaqui}>
        <h1 className={styles.contactenos}>CONTACTENOS</h1>
        <div className={styles.atencionClienteWrapper}>
          <div className={styles.atencionCliente} />
        </div>
      </section>
      <section className={styles.atencionalclienterhinocomWrapper}>
        <div className={styles.atencionalclienterhinocom}>
          atencionAlCliente@rhino.com
        </div>
      </section>
      <MediaSocialButtons />
    </div>
  );
};

export default VentanaParaClientes;
