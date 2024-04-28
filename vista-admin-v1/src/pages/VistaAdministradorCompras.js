import { useCallback, useState } from "react";
import AddProductFrame from "../components/AddProductFrame";
import { TarjetaProductoCompras } from "../components/TarjetaProductoCompras";
import styles from "./VistaAdministradorCompras.module.css";
import axios from "../axios";

const VistaAdministradorCompras = () => {

    const [compra, setCompra] = useState({})
    const [productos, setProductos] = useState()

    if(!compra){
        setCompra({})//TODO verificar que no haya compras seleccionadas
    }

    const onRealizarCompraClick = () => {
        
        const nitproveedor = document.getElementById("inputnitproveedor").value;
        const responsable = document.getElementById("inputnombreresponsable").value;
        const p_descuento = document.getElementById("inputporcentajedescuento").value;
        const total_impuestos = document.getElementById("inputporcentajeimpuesto").value;
        
        const CompraInsertar = {
            nitproveedor,
            responsable,
            p_descuento,
            total_impuestos
        };
        
        axios.api(`8/${nitproveedor}/${responsable}/${p_descuento}/${total_impuestos}`).then((res)=>{
            try {
                if(res.data.Res&&res.data.Res!=0){
                    CompraInsertar.idcompras = res.data.Res
                    setCompra(CompraInsertar)
                }
            } catch (e) {}
        })
    };
    
    const onAgregarProductoClick = () => {
    
        const identificacion = document.getElementById("inputidproducto").value;
        const precio_compra = document.getElementById("inputprecioproducto").value;
        
        const ProductoInsertar = {
            identificacion,
            precio_compra,
        };
        
        axios.api(`8_59/${compra.idcompras}/${identificacion}/${precio_compra}`).then(()=>{
            axios.api(`obtener/productosPorIdcompras/${compra.idcompras}`).then((res)=>{
                try {
                    setProductos(res.data.Res)
                } catch (e) {}
            })
        })

    };

    if(!productos&&compra&&compra.idcompras){
        axios.api(`obtener/productosPorIdcompras/${compra.idcompras}`).then((res)=>{
            try {
                setProductos(res.data.Res)
            } catch (e) {}
        })
    }

    return (
        
        <div className={styles.vistaAdministradorCompras}>
            <AddProductFrame/>
            {compra&&compra.idcompras&&
                <button className={styles.rectangleParent}
                onClick={onAgregarProductoClick}>
                    <div className={styles.frameChild} />
                    <div className={styles.agregarProducto}>
                        Agregar producto
                    </div>
                </button>
            }
            <div style={{display:"flex",flexDirection:"row"}}>
                <div>
                    <br/><br/><br/>
                    {compra&&!compra.idcompras&&
                        <button style={{borderRadius:"10px",fontSize:"22px",backgroundColor:"orange",marginLeft:"50px",padding:"10px"}}
                        onClick={onRealizarCompraClick}>
                            <div/>
                            <div>
                                <b>Crear compra</b>
                            </div>
                        </button>
                    }
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
            {compra&&compra.idcompras&&
                <div style={{display:"flex",flexDirection:"row",marginTop:"249px",marginLeft:"650px"}}>
                    <input style={{fontSize:"20px"}} 
                    className={styles.inputproductid} type='text'placeholder="Identificacion producto"id="inputidproducto" useref="inputidproducto"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input style={{fontSize:"20px"}} 
                    className={styles.inputproductprice} type='text' placeholder="Precio compra producto" id="inputprecioproducto" useref="inputprecioproducto"/>
                </div>
            }
            <div className={styles.tituloCrearUsuario}>{compra&&compra.idcompras&&"Productos"}</div>
            <div className={styles.excavadora}>
            <div style={{overflowY:"scroll",height:"450px"}}>
                {compra&&compra.idcompras&&productos&&productos.map((producto)=>{
                    return <TarjetaProductoCompras
                    nombreProducto={producto.nombre}
                        descripcion={producto.descripcion}
                        imagen={producto.imagen}
                        object={producto}
                    />
                })}
            </div>
            </div>
        </div>
    );
};

export default VistaAdministradorCompras;
