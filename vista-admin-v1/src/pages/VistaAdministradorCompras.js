import { useCallback } from "react";
import AddProductFrame from "../components/AddProductFrame";
import { TarjetaProductoAdministrador } from "../components/TarjetaProductoAdministrador";
import styles from "./VistaAdministradorCompras.module.css";

const VistaAdministradorCompras = () => {
    const onRealizarCompraClick = () => {
        
        const nitproveedor = document.getElementById("inputnitproveedor").value;
        const nombre = document.getElementById("inputnombreresponsable").value;
        const descuento = document.getElementById("inputporcentajedescuento").value;
        const impuestos = document.getElementById("inputporcentajeimpuesto").value;
        
        const CompraInsertar = {
            nitproveedor,
            nombre,
            descuento,
            impuestos
        };
        console.log(CompraInsertar);
    };
    
      const onAgregarProductoClick = () => {
        
        const idproducto = document.getElementById("inputidproducto").value;
        const precioproducto = document.getElementById("inputprecioproducto").value;
       
        const ProductoInsertar = {
         idproducto,
         precioproducto,
        };
        console.log(ProductoInsertar);
    };
    return (
        
        <div className={styles.vistaAdministradorCompras}>
            <AddProductFrame/>
            <button className={styles.rectangleParent}
            onClick={onAgregarProductoClick}>
                <div className={styles.frameChild} />
                <div className={styles.agregarProducto}>
                        Agregar producto
                </div>
            </button>
            <div style={{display:"flex",flexDirection:"row"}}>
                <div>
                    <br/><br/><br/>
                    <button style={{borderRadius:"10px",fontSize:"20px",backgroundColor:"orange",marginLeft:"50px"}}
                    onClick={onRealizarCompraClick}>
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
            <input className={styles.inputnitproveedor} type='text'id="inputnitproveedor" useref="inputnitproveedor"/>
            <input className={styles.inputporcentajedescuento} type='text'id="inputporcentajedescuento" useref="inputporcentajedescuento"/>
            <input className={styles.inputporcentajeimpuesto} type='text'id="inputporcentajeimpuesto" useref="inputporcentajeimpuesto"/>
            <input className={styles.inputnombreresponsable} type='text'id="inputnombreresponsable" useref="inputnombreresponsable"/>
            <input style={{marginLeft:"720px", marginTop:"150px", fontSize:"20px"}} 
            className={styles.inputproductid} type='text'placeholder="Id del producto"id="inputidproducto" useref="inputidproducto"/>
            <input style={{marginLeft:"719px", marginTop:"0px",fontSize:"20px"}} 
            className={styles.inputproductprice} type='text' placeholder="Precio del producto" id="inputprecioproducto" useref="inputprecioproducto"/>
            <div className={styles.tituloCrearUsuario}>Productos</div>
            <div className={styles.excavadora}>
            <TarjetaProductoAdministrador/>
            </div>
        </div>
    );
};

export default VistaAdministradorCompras;
