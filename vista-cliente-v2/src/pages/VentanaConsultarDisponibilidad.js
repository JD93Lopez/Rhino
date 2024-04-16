import React, { useContext, useState } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import GroupComponent3 from "../components/TarjetaProductoDisponibilidad";
import GroupComponent2 from "../components/GroupComponent2";
import FrameComponent10 from "../components/FrameComponent10";
import styles from "./VentanaConsultarDisponibilidad.module.css";
import { DataContext } from "../components/DataProvider";

const VentanaConsultarDisponibilidad = () => {
  const dataContext = useContext(DataContext);
  const { Loaded, productos: productosContext} = dataContext;
  if (!Loaded) {
    return <div>Cargando... Por favor espere.</div>;
  }
  const [lugarDestino, setLugarDestino] = useState("");
  const [lugarOrigen, setLugarOrigen] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");

  const [productos, setProductos] = useState([]);

    console.log("Lugar de Destino:", lugarDestino);
    console.log("Lugar de Origen:", lugarOrigen);
    console.log("Fecha de Inicio:", fechaInicio);
    console.log("Fecha de Culminación:", fechaFinal);

  return (
    <div className={styles.ventanaConsultarDisponibilid}>
      <FrameComponent3 />

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
        onChange={(e) => setFechaInicio(e.target.value)}
      />

      <div className={styles.FechaFinal}>Fecha de Culminación</div>
      <input
        className={styles.inputFechaFinal}
        type="date"
        value={fechaFinal}
        onChange={(e) => setFechaFinal(e.target.value)}
      />

      <section className={styles.ventanaConsultarDisponibilidInner}>
        <div className={styles.frameParent}>
          {productosContext.map(producto=> {
            return<GroupComponent3 
          nombre = {producto.nombre}
          identificacion={producto.identificacion}
          precio_alquiler={producto.precio_alquiler}
          />
          })}
        </div>
      </section>
      <FrameComponent10 />
    </div>
  );
};

export default VentanaConsultarDisponibilidad;
