import { useContext, useEffect } from "react";
import { DataContext } from "./DataProvider";
import styles from "./Headerframe.module.css";
import { useNavigate } from "react-router-dom";

const Headerframe = () => {

  const dataContext = useContext(DataContext)
  const navigate = useNavigate()
  
  let product = {}
    
  product = dataContext.productoSeleccionadoParaDetalles

  if(!product){
    product={}
    useEffect(()=>{
      navigate("/ventana-para-buscar-productos")
    },[navigate])
  }

  return (
    <section className={styles.headerframe}>
      <div className={styles.detailspanel}>
        <div className={styles.generaldescription}>
          <div className={styles.specsframe}>
            <div className={styles.descripcinGeneral}>Descripción General</div>
            <div className={styles.contactinfogroup}>
              <div className={styles.productDetailsFrame} />
            </div>
          </div>
        </div>
        <div className={styles.elCatMh3050DestacaPorSuWrapper}>
          <div className={styles.elCatMh3050Container}>
            <p
              className={styles.elCatMh3050}
            >{product.descripcion}</p>
            <p className={styles.deMaterialesGarantizando}>
            </p>
            <p
              className={styles.queSeEspera}
            ></p>
          </div>
        </div>
        <br/><br/>
        <h2 className={styles.mayorProductividad}>LA MAYOR PRODUCTIVIDAD CON NUESTROS VEHÍCULOS</h2>
      </div>
    </section>
  );
};

export default Headerframe;
