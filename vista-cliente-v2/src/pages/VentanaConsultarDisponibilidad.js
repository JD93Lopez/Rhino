import React, { useContext, useEffect, useState } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import TarjetaProductoDisponibilidad from "../components/TarjetaProductoDisponibilidad";
import GroupComponent2 from "../components/GroupComponent2";
import FrameComponent10 from "../components/FrameComponent10";
import styles from "./VentanaConsultarDisponibilidad.module.css";
import { DataContext } from "../components/DataProvider";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

const VentanaConsultarDisponibilidad = () => {

  const dataContext = useContext(DataContext);
  if (!dataContext.Loaded) {
    return <div>Cargando... Por favor espere.</div>;
  }
  const [lugarDestino, setLugarDestino] = useState("");
  const [lugarOrigen, setLugarOrigen] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");

  const navigate = useNavigate()
  
  let product = {}
  
  product = dataContext.productoSeleccionadoParaDetalles

  const [productos,setProductos] = useState()
  
  if(fechaInicio!=""&&fechaFinal!=""){
    if( fechaInicio!=dataContext.fechaInicio || fechaFinal!=dataContext.fechaFinal ){
      if(product){
        axios.api(`productosPorModelo/${product.modelo}/${fechaInicio}/${fechaFinal}`).then((res)=>{
          setProductos(res.data.Res)
        })
      }
      dataContext.fechaInicio = fechaInicio
      dataContext.fechaFinal = fechaFinal
    }
  }else{
/*     productos = [
      {
        nombre: "Gruaaa manipuladora de metales",
        identificacion: "MH5045",
        imagen: "/materiales-sin-fondo-2@2x.png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam justo sit amet ultricies vestibulum. Aenean quis sem finibus, laoreet sapien id, ullamcorper tellus. In hac habitasse platea dictumst. Donec a odio sit amet dolor tristique dictum quis mattis diam. In in ornare elit. Proin viverra fringilla vestibulum. Pellentesque ipsum ipsum, lacinia sed consequat a, interdum ac lorem. Morbi eu neque at sem convallis commodo. Proin lobortis vitae orci in consequat. Vestibulum et nunc tortor. Cras sed ante volutpat, efficitur magna non, commodo libero. Nulla porta quam quis tortor molestie molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        categorias: ["maquinaria1","maquinaria2"],
        precio_alquiler: "120.000",
        modelo: "modelo"
      }
    ] */

    if(!productos){
      if(product){
        axios.api(`productosPorModelo/${product.modelo}`).then((res)=>{
          setProductos(res.data.Res)
        })
      }
    }
    
  }

  if(!product){
    product={}
    useEffect(()=>{
      navigate("/ventana-para-buscar-productos")
    },[navigate])
  }

  return (
    <div style={{backgroundColor:"black"}}>
      <FrameComponent3 />
      <b className={styles.LugarDestino} style={{fontSize:"50px",zIndex:"3"}}>&nbsp;&nbsp;Consultar disponibilidad:</b>
      <div className={styles.ventanaConsultarDisponibilid}>

        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        
        <b className={styles.LugarDestino}>Lugar de Destino</b>
        <input
          type="text"
          className={styles.InputLugarDestino}
          placeholder=" Lugar..."
          value={lugarDestino}
          onChange={(e) => setLugarDestino(e.target.value)}
        />

        <b className={styles.LugarOrigen}>Lugar de Origen</b>
        <input
          type="text"
          className={styles.InputLugarOrigen}
          placeholder=" Lugar..."
          value={lugarOrigen}
          onChange={(e) => setLugarOrigen(e.target.value)}
        />

        <div className={styles.FechaInicio}>Fecha de Inicio</div>
        <input
          className={styles.inputFechaInicio}
          type="date"
          value={fechaInicio}
          onChange={(e) => {setFechaInicio(e.target.value)}}
        />

        <div className={styles.FechaFinal}>Fecha de Culminación</div>
        <input
          className={styles.inputFechaFinal}
          type="date"
          value={fechaFinal}
          onChange={(e) => {setFechaFinal(e.target.value)}}
        />

        <section className={styles.ventanaConsultarDisponibilidInner}>
          <div className={styles.frameParent}>
            {productos&&productos.map(producto=> {
              return<TarjetaProductoDisponibilidad 
                nombre = {producto.nombre}
                identificacion={producto.identificacion}
                precio_alquiler={producto.precio_alquiler}
                object = {producto}
              />
            })}
          </div>
        </section>
        <FrameComponent10 />
      </div>
    </div>
  );
};

export default VentanaConsultarDisponibilidad;
