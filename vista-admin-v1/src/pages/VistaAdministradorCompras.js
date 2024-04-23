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
            <div style={{display:"flex",flexDirection:"row"}}>
                <div>
                    <br/><br/><br/>
                    <button style={{borderRadius:"10px",fontSize:"20px",backgroundColor:"orange",marginLeft:"50px"}}>
                        <div/>
                        <div>
                            <b>Realizar compra</b>
                        </div>
                    </button>
                </div>
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
