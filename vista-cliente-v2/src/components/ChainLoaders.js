import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ChainLoaders.module.css";
import Productos from "../pages/VentanaParaClientes";
const ChainLoaders = () => {
  const navigate = useNavigate();

  return (
    
    <section className={styles.chainLoaders}>
      
      <div>
      <div className={styles.productHighlights}>
        <h1 className={styles.productosDestacados}>{`PRODUCTOS DESTACADOS`}</h1>
      </div>
        <Productos/>
      </div>
      
      <div className={styles.wheeledLoader}>
      <h1 className={styles.rentalos}>RENTALOS</h1>
       {/*} <div className={styles.motorGrade}>
          
          
          
            
            <img
            className={styles.compactadoraSinFondo1}
            loading="lazy"
            alt=""
            src="/compactadora-sin-fondo-1@2x.png"
          />
          <img
            className={styles.cargadorDeCadenasSinFonod}
            loading="lazy"
            alt=""
            src="/cargador-de-cadenas-sin-fonod-2@2x.png"
          />
          <img
            className={styles.maquinaSinFondo2}
            loading="lazy"
            alt=""
            src="/maquina-sin-fondo-2@2x.png"
          />
          <img
            className={styles.cargadoraDeRuedasSinFondo}
            loading="lazy"
            alt=""
            src="/cargadora-de-ruedas-sin-fondo-1@2x.png"
          />
          <img
            className={styles.camionobrasSinFondo1}
            loading="lazy"
            alt=""
            src="/camionobras-sin-fondo-3@2x.png"
          />
  
          
  </div>*/}
        
      </div>
    </section>
  );
};

export default ChainLoaders;
