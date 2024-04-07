import React, { useState, useContext, useEffect, useCallback } from 'react';
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./VistaAdministradorMantenim.module.css";
import { DataContext } from "../components/DataProvider";
import TarjetaMantenimiento from "../components/TarjetaMantenimiento";
import orden from "../OrdenamientoSimilitud";

const VistaAdministradorMantenim = () => {
  const dataContext = useContext(DataContext);
  const { Loaded, mantenimientos: mantenimientosContext, usuarios } = dataContext;
  const [mantenimientos, setMantenimientos] = useState([]);

  useEffect(() => {
    if (Loaded) {
      setMantenimientos(mantenimientosContext);
    }
  }, [Loaded, mantenimientosContext]);

  const buscar = (buscado) => {
    if (!mantenimientosContext) {
      return;
    }

    let nuevosMantenimientos = mantenimientosContext.map((mantenimiento) => {
      const similitud = orden.calcularSimilitud(buscado, mantenimiento.identificacion);
      return { mantenimiento: mantenimiento, similitud: similitud };
    }).sort((a, b) => b.similitud - a.similitud);
    nuevosMantenimientos = nuevosMantenimientos.map((mantenimientoSimilitud) => {
      return mantenimientoSimilitud.mantenimiento
    })


    setMantenimientos(nuevosMantenimientos);
  };

  return (
    <DataContext.Provider value={{ Loaded, mantenimientos: mantenimientosContext, usuarios }}>
        <div className={styles.vistaAdministradorMantenim}>
          <div className={styles.vistaAdministradorMantenimChild} />
          <FrameComponent1 />
          <main className={styles.vistaAdministradorMantenimInner}>
            <section className={styles.mantenimientoParent}>
              <h1 className={styles.mantenimiento}>MANTENIMIENTO</h1>
              <div className={styles.buscarUsuario}>
                <div className={styles.buscarUsuarioChild} />
                <img className={styles.lupa4Icon} alt="" src="/lupa-4@2x.png" />
                <input
                  className={styles.buscarMantenimiento}
                  placeholder="buscar mantenimiento"
                  type="text"
                  onChange={(event) => {buscar(event.target.value)}}
                  id="inputbuscarmantenimiento"
                  useref="inputbuscarmantenimiento"
                />
              </div>
              <div className={styles.projectDetails}>
                {mantenimientos.map(mantenimiento => {
                  return <TarjetaMantenimiento
                    object={mantenimiento}
                    nombreMaquinaria={mantenimiento.nombreMaquinaria}
                    identificacion={mantenimiento.identificacion}
                    fecha={mantenimiento.fecha}
                    key={mantenimiento.idMantenimiento}
                  ></TarjetaMantenimiento>
                })}
              </div>
              <div className={styles.actualizarUsuarioParent}>
                <button
                  className={styles.actualizarUsuario}
                >
                  <div className={styles.actualizarUsuarioChild} />
                  <div className={styles.actualizarUsuario1}>
                    Agregar Mantenimiento
                  </div>
                </button>
                <button
                  className={styles.crearUsuario}
                >
                  <div className={styles.crearUsuarioChild} />
                  <div className={styles.crearNuevo}>Actualizar</div>
                </button>
                <button
                  className={styles.eliminarUsuariosSeleccionados}>
                  <div className={styles.eliminarusuarioChild} />
                  <div className={styles.EliminarSeleccionados} >Eliminar</div>
                </button>
              </div>
            </section>
          </main>
        </div>
    </DataContext.Provider>
  );
};

export default VistaAdministradorMantenim;