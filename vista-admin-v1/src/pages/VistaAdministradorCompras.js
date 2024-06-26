import { useCallback, useState, useContext } from "react";
import AddProductFrame from "../components/AddProductFrame";
import { TarjetaProductoCompras } from "../components/TarjetaProductoCompras";
import styles from "./VistaAdministradorCompras.module.css";
import axios from "../axios";
import { DataContext } from "../components/DataProvider";
import { useNavigate } from "react-router-dom";

const VistaAdministradorCompras = () => {

    const dataContext = useContext(DataContext)
    const navigate = useNavigate()

    const [compra, setCompra] = useState()
    const [productos, setProductos] = useState()
    if(!compra&&dataContext.compraSeleccionada){
        setCompra(dataContext.compraSeleccionada)//TODO verificar que no haya compras seleccionadas
    }else{
        if(!compra){
            setCompra({})
        }
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
        
        if (
            nitproveedor!=""&&responsable!=""&&p_descuento!=""&&total_impuestos!=""
        ) {
            axios.api(`8/${nitproveedor}/${responsable}/${p_descuento}/${total_impuestos}`).then((res)=>{
                try {
                    if(res.data.Res&&res.data.Res!=0){
                        CompraInsertar.idcompras = res.data.Res
                        setCompra(CompraInsertar)
                    }
                } catch (e) {}
            })
        }
    };

    const onEliminarCompraClick = useCallback(() => {
        if (compra && compra.idcompras) {
          axios.api(`eliminar/compra/${compra.idcompras}/${dataContext.usuarioIniciado.nombre_usuario}/${dataContext.usuarioIniciado.contrasena}`)
            .then(() => {
              setCompra(null);
              setProductos(null);
              navigate('/vista-administrador-all-compras')
            })
            .catch((error) => {
              console.error("Error al eliminar la compra", error);
            });
        }
      }, [dataContext, setCompra, setProductos, compra]);
    
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
                    {compra&&compra.idcompras&&
                        <button style={{borderRadius:"10px",fontSize:"22px",backgroundColor:"orange",marginLeft:"50px",padding:"10px"}}
                        onClick={onEliminarCompraClick}>
                            <div/>
                            <div>
                                <b>Eliminar compra</b>
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
            <input className={styles.inputnitproveedor} type='text'id="inputnitproveedor" useref="inputnitproveedor" defaultValue={compra&&compra.nit?compra.nit:""}/>
            <input className={styles.inputporcentajedescuento} type='text'id="inputporcentajedescuento" useref="inputporcentajedescuento" defaultValue={compra&&compra.p_descuento?compra.p_descuento:""}/>
            <input className={styles.inputporcentajeimpuesto} type='text'id="inputporcentajeimpuesto" useref="inputporcentajeimpuesto" defaultValue={compra&&compra.p_impuestos?compra.p_impuestos:""}/>
            <input className={styles.inputnombreresponsable} type='text'id="inputnombreresponsable" useref="inputnombreresponsable" defaultValue={compra&&compra.responsable?compra.responsable:""}/>
            {compra&&compra.idcompras&&
                <div style={{display:"flex",flexDirection:"row",marginTop:"199px",marginLeft:"650px"}}>
                    <input style={{fontSize:"20px"}} 
                    className={styles.inputproductid} type='text'placeholder="Identificacion producto"id="inputidproducto" useref="inputidproducto"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input style={{fontSize:"20px"}} 
                    className={styles.inputproductprice} type='text' placeholder="Precio compra producto" id="inputprecioproducto" useref="inputprecioproducto"/>
                </div>
            }
            <div className={styles.tituloCrearUsuario}>{compra&&compra.idcompras&&"Productos"}</div>
            <div className={styles.excavadora}>
            <div style={{overflowY:"scroll",maxHeight:"450px"}}>
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
