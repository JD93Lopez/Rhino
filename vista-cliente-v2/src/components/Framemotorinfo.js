import { useCallback, useContext, useEffect } from "react";
import { DataContext } from "./DataProvider";
import styles from "./Framemotorinfo.module.css";
import { useNavigate } from "react-router-dom";

const Framemotorinfo = () => {

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

  const consultarDisponibilidad = useCallback(() => {
    navigate("/consultar-disponibilidad");
  }, [navigate]);

  return (
    <section className={styles.framemotorinfo}>
      <img
        className={styles.manipuladorafondo1Icon}
        loading="lazy"
        alt=""
        src={product.imagen}
      />
      <div className={styles.mHbackground}>
        <div className={styles.materialsslide}>
          <div className={styles.wheelstext}>
            <h2 className={styles.manipuladoraDeMaterialesContainer}>
              <p className={styles.manipuladoraDe}>{product.nombre}</p>
            </h2>
            <div className={styles.specstab}>
              <div className={styles.mh3050}>{product.modelo}</div>
            </div>
          </div>
          <b className={styles.especificacionesPrincipales}>
            CATEGORIAS 
          </b>
          <div className={styles.modeloDelMotorContainer}>
            <p className={styles.modeloDelMotor}>
              <b>Maquinaria Pesada</b>
            </p>
            <p className={styles.blankLine}>
              <b>&nbsp;</b>
            </p>
            <p className={styles.pesoEnOrdenDeTrabajoMxim}>
              <b>Carga de máxima 50.000kg</b>
            </p>
            <p className={styles.blankLine1}>
              <b>&nbsp;</b>
            </p>
            <p className={styles.alcanceMximo}>
              <b>Alcance máximo 18000 mts</b>
            </p>
          </div>
        </div>
        <div className={styles.addcartgroup}>
          <button className={styles.rectangleParent} onClick={consultarDisponibilidad}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <b className={styles.agregarAlCarrito}>CONSULTAR DISPONIBILIDAD</b>
            </div>
          </button>
          {/* <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <b className={styles.consultarPrecio}>CONSULTAR PRECIO</b>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Framemotorinfo;
