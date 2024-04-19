import React, { useCallback } from "react";
import styles from "../components/Equipos.module.css";
import { useNavigate } from "react-router-dom";

const Equipos = () => {
  const navigate = useNavigate();
  const onBotonInfoMaqClick = useCallback(() => {
    navigate("/ventana-para-buscar-productos");
  }, [navigate]);
  const renderEquipo = (equipo) => {
    return (
      <div className={styles.equipo} key={equipo.nombre}>
        
        <img src={equipo.imagen} alt={equipo.nombre} />
        <h1>{equipo.nombre}</h1>
        <h2>{equipo.descripcion}</h2>
        <div className={styles.botonInfoMaq} onClick={onBotonInfoMaqClick} />
      </div>
      
    );
  };
  const equipos = [
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
  ];

  return (
    <section className={styles.equipos}>
      
      {equipos.map(renderEquipo)}

    </section>
  );
};

export default Equipos;