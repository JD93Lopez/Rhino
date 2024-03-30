import React, { useState, useContext, useEffect, useCallback } from 'react';
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./VistaAdministradorMantenim.module.css";
import { DataContext } from "../components/DataProvider";
import TarjetaMantenimiento from "../components/TarjetaMantenimiento";
import orden from "../OrdenamientoSimilitud";

export const SearchContext = React.createContext();

const VistaAdministradorMantenim = () => {
  const dataContext = useContext(DataContext);
  const { Loaded, mantenimientos: mantenimientosContext, usuarios } = dataContext;
  const [busqueda, setBusqueda] = useState('');
  const [mantenimientos, setMantenimientos] = useState([]);

  useEffect(() => {
    if (Loaded) {
      setMantenimientos(mantenimientosContext);
    }
  }, [Loaded, mantenimientosContext]);

  const buscar = useCallback(() => {
    if (!mantenimientosContext) {
      return;
    }
  
    let nuevosMantenimientos = mantenimientosContext.map((mantenimiento) => {
      const similitud = orden.calcularSimilitud(busqueda, mantenimiento.identificacion);
      return { mantenimiento: mantenimiento, similitud: similitud };
    }).sort((a, b) => b.similitud - a.similitud);
    nuevosMantenimientos = nuevosMantenimientos.map((mantenimientoSimilitud)=>{
      return mantenimientoSimilitud.mantenimiento
    })
    
  
    setMantenimientos(nuevosMantenimientos);
  }, [mantenimientosContext, busqueda]);

  useEffect(() => {
    buscar();
  }, [buscar, busqueda]);

  if (!Loaded) {
    return <div>Cargando... Por favor espere.</div>;
  }
  return (
    <DataContext.Provider value={{ Loaded, mantenimientos: mantenimientosContext, usuarios }}>
      <SearchContext.Provider value={{ busqueda, setBusqueda }}>
        <div className={styles.vistaAdministradorMantenim}>
          <div className={styles.vistaAdministradorMantenimChild} />
          <FrameComponent1 />
          <main className={styles.vistaAdministradorMantenimInner}>
            <section className={styles.mantenimientoParent}>
              <h1 className={styles.mantenimiento}>MANTENIMIENTO</h1>
            <input
              className={styles.buscarMantenimiento}
              placeholder="buscar mantenimiento"
              type="text"
              onChange={(event) => setBusqueda(event.target.value)}
              id = "inputbuscarmantenimiento"
              useref= "inputbuscarmantenimiento"
            />
              <div className={styles.projectDetails}>
                {mantenimientos.map(mantenimiento => {
                  return <TarjetaMantenimiento
                    object = {mantenimiento}
                    nombreMaquinaria = {mantenimiento.nombreMaquinaria}
                    identificacion = {mantenimiento.identificacion}
                    fecha = {mantenimiento.fecha}
                    key = {mantenimiento.identificacion}
                  ></TarjetaMantenimiento>
                })}
              </div>
            </section>
          </main>
        </div>
      </SearchContext.Provider>
    </DataContext.Provider>
  );
};

export default VistaAdministradorMantenim;