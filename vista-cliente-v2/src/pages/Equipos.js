import React, { useCallback, useContext, useState } from "react";
import styles from "../components/Equipos.module.css";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import { DataContext } from "../components/DataProvider";

const Equipos = () => {

  const dataContext = useContext(DataContext)

  const navigate = useNavigate();
  const onBotonInfoMaqClick = useCallback((object) => {
    dataContext.productoSeleccionadoParaDetalles = object
    navigate("/informacin-de-cada-producto");
  }, [navigate]);
  const renderEquipo = (equipo) => {
    return (
      <div className={styles.equipo} key={equipo.nombre}>
        
        <img src={equipo.imagen&&equipo.imagen!=""?equipo.imagen:"boton-logo-6@3x.png"} alt={equipo.nombre} />
        <h1>{equipo.nombre}</h1>
        {equipo.p_descuento&&<h2>Descuento: {equipo.p_descuento}%</h2>}
        <h2>{equipo.descripcion}</h2>
        <div className={styles.botonInfoMaq} onClick={()=>onBotonInfoMaqClick(equipo)} />
      </div>
      
    );
  };
  /* const equipos = [
    {
      nombre: "Bulldozer",
      imagen: "/compactadora-sin-fondo-1@2x.png",
      descripcion: "Maquina para remover tierras y obstáculos."
    },
    {
      nombre: "Excavador",
      imagen: "/cargador-de-cadenas-sin-fonod-2@2x.png",
      descripcion: "Maquina para excavar y trasladar suelos."
    },
    {
      nombre: "Crane",
      imagen: "/camionobras-sin-fondo-3@2x.png",
      descripcion: "Maquina para levantar y manipular objetos."
    },
    {
      nombre: "Bulldozer",
      imagen: "/compactadora-sin-fondo-1@2x.png",
      descripcion: "Maquina para remover tierras y obstáculos."
    },
    {
      nombre: "Excavador",
      imagen: "/cargador-de-cadenas-sin-fonod-2@2x.png",
      descripcion: "Maquina para excavar y trasladar suelos."
    },
    {
      nombre: "Crane",
      imagen: "/camionobras-sin-fondo-3@2x.png",
      descripcion: "Maquina para levantar y manipular objetos."
    }
  ]; */

  const [equipos,setEquipos] = useState()

  if(!equipos){
    axios.api(`consultarProductosDescuento`).then((res)=>{
      try {
        setEquipos(res.data.Res)
      } catch (e) {}
    })
  }

  return (
    <section className={styles.equipos}>
      
      {equipos&&equipos.map(renderEquipo)}

    </section>
  );
};

export default Equipos;