import AddProductFrame from "../components/AddProductFrame";
import styles from "./VistaAdministradorCotizacionesProductos.module.css";

const VistaAdministradorCotizacionesProductos = () => {
    return (

        <div className={styles.vistaAdministradorCotizacion}>
            
            <div className={styles.vistaAdministradorCotizacionChild} />
            <AddProductFrame/>
            <div className={styles.vistaAdministradorCotizacionItem} />
            <input className={styles.inputcedula} />
            <div className={styles.vistaAdministradorCotizacionInner} />
            <div className={styles.nombre}>Nombre:</div>
            <div className={styles.telfono}>Teléfono:</div>
            <input className={styles.inputnombre} />
            <input className={styles.inputtelefono} />
            <div className={styles.cdula}>Cédula</div>
            <button className={styles.botonaprovar}>
                <div className={styles.botonaprobar} />
                <div className={styles.aprobar}>Aprobar</div>
            </button>
            <div className={styles.agregarConductor}>Agregar Conductor</div>

        </div>
    );
};

export default VistaAdministradorCotizacionesProductos;
