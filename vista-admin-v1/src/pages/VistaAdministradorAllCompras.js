import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProductFrame from "../components/AddProductFrame";
import styles from "./VistaAdministradorAllCompras.module.css";
import { DataContext } from "../components/DataProvider";
import TarjetaCompras from "../components/TarjetaCompras";
import axios from "../axios";

const VistaAdministradorAllCompras = () => {
    const navigate = useNavigate();
    const dataContext = useContext(DataContext);

    const onUSUARIOSTextClick = useCallback(() => {
        navigate("/vista-administrador-usuarios");
    }, [navigate]);

    const onPROYECTOSTextClick = useCallback(() => {
        navigate("/vista-administrador-proyectos");
    }, [navigate]);

    const onMANTENIMIENTOTextClick = useCallback(() => {
        navigate("/vista-administrador-mantenimiento");
    }, [navigate]);

    const [compras,setCompras] = useState()

    if(!compras){
        axios.api(`consultarComprasConProveedor`).then((res)=>{
            setCompras(res.data.Res)
        })
    }

    const agregarCompra = () => {
        dataContext.compraSeleccionada = undefined
        navigate("/vista-administrador-compras")
    }

    return (
        <div className={styles.vistaAdministradorCompras}>
            <div className={styles.vistaAdministradorComprasChild} />
            <AddProductFrame
                onUSUARIOSTextClick={onUSUARIOSTextClick}
                onPROYECTOSTextClick={onPROYECTOSTextClick}
                onMANTENIMIENTOTextClick={onMANTENIMIENTOTextClick}
            />
            <main className={styles.gRUATElescopicaBoomText}>
                <section className={styles.rectangleShape}>
                    <div>
                        <div style={{display:"flex",flexDirection:"row"}}>
                            <h1 className={styles.tituloCompras}>Compras</h1>
                            <button 
                            style={{
                                backgroundColor:"orange",
                                height:"50px",
                                borderWidth:"1px",
                                marginTop:"50px",
                                fontSize:"25px",
                                fontWeight:"bolder",
                                marginLeft:"995px"
                            }} 
                            onClick={agregarCompra}
                            >
                                Agregar compra
                            </button>
                        </div>
                        <div style={{maxHeight:"800px", overflowY:"scroll", marginLeft:"200px", width:"1300px"}}>
                            {compras&&compras.map((compra)=>{
                                return <div>
                                    <TarjetaCompras 
                                        responsable={compra.responsable}
                                        empresa={compra.nombre}
                                        total={compra.total}
                                        fecha={compra.fecha.substring(0,10)}
                                        object={compra}
                                    />
                                    <br/>
                                </div>
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default VistaAdministradorAllCompras;
