import { useContext, useState } from "react";
import AddProductFrame from "../components/AddProductFrame";
import { DataContext } from "../components/DataProvider";
import styles from "./VistaAdministradorCotizacionesProductos.module.css";
import axios from "../axios";
import { useNavigate } from "react-router-dom";

const VistaAdministradorConductoresProductos = () => {
    const dataContext = useContext(DataContext)
    const navigate = useNavigate()

    const [cedulaNoEncontrada,setCedulaNoEncontrada] = useState(false)

    const [conductores,setConductores] = useState()

    if(!conductores&&dataContext.idConductorAgenda&&dataContext.idConductorAgenda!=0){
        axios.api(`conductorPorIdconductores/${dataContext.idConductorAgenda}`).then((res)=>{
            try {
                setConductores(res.data.Res)
                setCedulaNoEncontrada(true)
            } catch (e) {}
        })
    }

    const agregar = () => {
        const cedula = document.getElementById("inputcedula").value
        if(cedulaNoEncontrada){
            const nombre = document.getElementById('inputnombre').value
            const telefono = document.getElementById('inputtelefono').value
            if(nombre&&telefono&&nombre!=""&&telefono!=""){
                axios.api(`3_53_51/${dataContext.producto_agendaSeleccionada&&dataContext.producto_agendaSeleccionada.idagenda}
                /${cedula}
                /${nombre}
                /${telefono}
                /${dataContext.usuarioIniciado&&dataContext.usuarioIniciado.nombre_usuario}
                /${dataContext.usuarioIniciado&&dataContext.usuarioIniciado.contrasena}`).then((res)=>{
                    try{
                        if(res.data.Res==0){
                            setCedulaNoEncontrada(true)
                        }else{
                            navigate('/vista-administrador-ver-cotizacion')
                        }
                    }catch(e){}
                })
            }
        }else{
            axios.api(`3_51/${dataContext.producto_agendaSeleccionada&&dataContext.producto_agendaSeleccionada.idagenda}
            /${cedula}
            /${dataContext.usuarioIniciado&&dataContext.usuarioIniciado.nombre_usuario}
            /${dataContext.usuarioIniciado&&dataContext.usuarioIniciado.contrasena}`).then((res)=>{
                try{
                    if(res.data.Res==0){
                        setCedulaNoEncontrada(true)
                    }else{
                        navigate('/vista-administrador-ver-cotizacion')
                    }
                }catch(e){}
            })
        }
    }    

    return (

        <div className={styles.vistaAdministradorCotizacion}>

            <div className={styles.vistaAdministradorCotizacionChild} />
            <AddProductFrame />
            <div className={styles.vistaAdministradorCotizacionItem} />
            {
                cedulaNoEncontrada&&<div>
                    <div className={styles.vistaAdministradorCotizacionInner} />
                    <div className={styles.nombre}>Nombre:</div>
                    <div className={styles.telfono}>Teléfono:</div>
                    <input className={styles.inputnombre} id="inputnombre" useref="inputnombre" value={conductores&&conductores[0]&&conductores[0].nombre}/>
                    <input className={styles.inputtelefono} id="inputtelefono" useref="inputtelefono" value={conductores&&conductores[0]&&conductores[0].telefono}/>
                </div>
            }
            <div>
                <div className={styles.cdula}>Cédula</div>
                {<input className={styles.inputcedula} id="inputcedula" useref="inputcedula" value={conductores&&conductores[0]&&conductores[0].cedula}/>}
            </div>
            <button className={styles.botonaprovar} onClick={agregar}>
                <div className={styles.botonaprobar} />
                <div className={styles.aprobar}>Agregar</div>
            </button>
            <div className={styles.agregarConductor}>Agregar Conductor</div>

        </div>
    );
};

export default VistaAdministradorConductoresProductos;
