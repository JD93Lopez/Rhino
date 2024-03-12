import { useCallback } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import { useNavigate } from "react-router-dom";
import ChainLoaders from "../components/ChainLoaders";
import MotorTrailas from "../components/MotorTrailas";
import ContainerBox from "../components/ContainerBox";
import Framebuttonssocial from "../components/Framebuttonssocial";
import styles from "./VentanaPrincipal.module.css";

const VentanaPrincipal = () => {
  const navigate = useNavigate();

  const onMaterialesSinFondo1Click = useCallback(() => {
    navigate("/informacin-de-cada-producto");
  }, [navigate]);

  return (
    <div className={styles.ventanaPrincipal}>
      <FrameComponent3 />
      <section className={styles.customerService}>
        <div className={styles.socialMediaIcons}>
          <div className={styles.mobileInfo}>
            <h1 className={styles.empieceAConstruir}>EMPIECE A CONSTRUIR</h1>
            <div className={styles.productAndAboutUs}>
              <div className={styles.searchFrame} />
            </div>
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
      <div className={styles.backgroundItems}>
        <img
          className={styles.materialesSinFondo1}
          loading="lazy"
          alt=""
          src="/materiales-sin-fondo-1@2x.png"
          onClick={onMaterialesSinFondo1Click}
        />
        <div className={styles.noFundMaterials}>
          <div className={styles.productHighlights}>
            <h1
              className={styles.productosDestacados}
            >{`PRODUCTOS DESTACADOS `}</h1>
            <div className={styles.compactadoraFrame}>
              <div className={styles.buildWithUsFrame} />
            </div>
          </div>
        </div>
      </div>
      <ChainLoaders />
      <MotorTrailas />
      <ContainerBox />
      <section className={styles.moreInfoFrame}>
        <div className={styles.infoBoxFrame}>
          <div className={styles.possibilitiesFrame}>
            <div className={styles.alquilaMaquinariaFrame}>
              <h1 className={styles.haciendoPosibleLo}>
                HACIENDO POSIBLE LO IMPOSIBLE.
              </h1>
              <div className={styles.grandezaFrame} />
            </div>
          </div>
          <h1 className={styles.alquilaMaquinariaDesata}>
            !ALQUILA MAQUINARIA, DESATA TU GRANDEZA¡
          </h1>
        </div>
      </section>
      <section className={styles.footerFrame}>
        <h1 className={styles.contactenos}>CONTACTENOS</h1>
        <div className={styles.framechildren}>
          <div className={styles.rectanglecontactus} />
        </div>
      </section>
      <section className={styles.attentiontoclient}>
        <div className={styles.atencionalclienterhinocom}>
          atencionAlCliente@rhino.com
        </div>
      </section>
      <Framebuttonssocial />
    </div>
  );
};

export default VentanaPrincipal;
