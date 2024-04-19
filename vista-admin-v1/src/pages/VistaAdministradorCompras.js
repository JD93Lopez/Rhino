import { useCallback } from "react";
import AddProductFrame from "../components/AddProductFrame";
import { TarjetaProductoAdministrador } from "../components/TarjetaProductoAdministrador";
import styles from "./VistaAdministradorCompras.module.css";

const VistaAdministradorCompras = () => {


    return (
        <div className={styles.vistaAdministradorCompras}>
            <AddProductFrame/>
            <button className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.agregarProducto}>
                        Agregar producto
                </div>
            </button>
            <div className={styles.formulariocompras}>
                <div className={styles.formulariocomprasChild} />
                <div className={styles.nitProveedor}>
                    <div className={styles.agregarProducto}>Nit Proveedor:</div>
                </div>
                <div className={styles.nombreresponsable}>
                    <div className={styles.agregarProducto}>Nombre del responsable:</div>
                </div>
                <div className={styles.porcentajedescuento}>
                    <div className={styles.agregarProducto}>Porcentaje de Descuento:</div>
                </div>
                <div className={styles.porcentajeimpuestos}>
                    <div className={styles.agregarProducto}>Porcentaje de Impuestos:</div>
                </div>
            </div>
            <input className={styles.inputnitproveedor} type='text'/>
            <input className={styles.inputporcentajedescuento} type='text'/>
            <input className={styles.inputporcentajeimpuesto} type='text'/>
            <input className={styles.inputnombreresponsable} type='text'/>
            <div className={styles.tituloCrearUsuario}>Productos</div>
            <div className={styles.excavadora}>
            <TarjetaProductoAdministrador/>
            </div>
        </div>
    );
};

export default VistaAdministradorCompras;
