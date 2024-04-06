import React, { useState, useContext, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./VistaAdministradorMantenim.module.css";
import { DataContext } from "../components/DataProvider";
import TarjetaMantenimiento from "../components/TarjetaMantenimiento";
import orden from "../OrdenamientoSimilitud";

export const SearchContext = React.createContext();

const VistaMantenimProducto = () => {
  const dataContext = useContext(DataContext);
  let { Loaded, mantenimientos: mantenimientosContext, usuarios, selectedProducts } = dataContext;

  const navigate = useNavigate()
  if(!dataContext.Loaded || !dataContext.selectedProducts){
    useEffect(() => {
      navigate("/vista-administrador-productos");
    }, [navigate]);
  }

  if (!Loaded) {
    return <div>Cargando... Por favor espere.</div>;
  }

  let busqueda = '';
  const [mantenimientos, setMantenimientos] = useState(
    mantenimientosContext.filter(
      (mantenimiento)=>{
        return mantenimiento.identificacion == selectedProducts[0].identificacion
      }
    )
  );

  const buscar = () => {
    if (!mantenimientos) {
      return;
    }

    let nuevosMantenimientos = mantenimientos.map((mantenimiento) => {
      const similitud = orden.calcularSimilitud(busqueda, mantenimiento.fecha);
      return { mantenimiento: mantenimiento, similitud: similitud };
    }).sort((a, b) => b.similitud - a.similitud);
    nuevosMantenimientos = nuevosMantenimientos.map((mantenimientoSimilitud) => {
      return mantenimientoSimilitud.mantenimiento
    })

    setMantenimientos(nuevosMantenimientos);
  };

  let dibujarMantenimientos = ()=>{
    if(mantenimientos.length !== 0){
      let key = 0
      return mantenimientos.map(mantenimiento => {
        key++;
        return <TarjetaMantenimiento
          object={mantenimiento}
          nombreMaquinaria={mantenimiento.nombreMaquinaria}
          identificacion={mantenimiento.identificacion}
          fecha={mantenimiento.fecha}
          key={key}
        ></TarjetaMantenimiento>
      })
    }else{
      return [<p>NO HAY MANTENIMIENTOS PARA ESTE PRODUCTO</p>]
    }
  }

  return (
    <DataContext.Provider value={{ Loaded, mantenimientos: mantenimientosContext, usuarios }}>
      <SearchContext.Provider value={{ busqueda }}>
        <div className={styles.vistaAdministradorMantenim}>
          <div className={styles.vistaAdministradorMantenimChild} />
          <FrameComponent1 />
          <main className={styles.vistaAdministradorMantenimInner}>
            <section className={styles.mantenimientoParent}>
              <h1 className={styles.mantenimiento}>MANTENIMIENTOS DEL PRODUCTO</h1>
              <div className={styles.buscarUsuario}>
                <div className={styles.buscarUsuarioChild} />
                <img className={styles.lupa4Icon} alt="" src="/lupa-4@2x.png" />
                <input
                  className={styles.buscarMantenimiento}
                  placeholder="buscar fecha"
                  type="text"
                  onChange={(event) => {busqueda=event.target.value; buscar()}}
                  id="inputbuscarmantenimiento"
                  useref="inputbuscarmantenimiento"
                />
              </div>
              <div className={styles.projectDetails}>
                { dibujarMantenimientos().map(a=>{return a}) }
              </div>
            </section>
          </main>
        </div>
        <div className={styles.actualizarUsuarioParent}>
                <button
                  className={styles.eliminarUsuariosSeleccionados}>
                  <div calssName={styles.eliminarusuarioChild} />
                  <div className={styles.EliminarSeleccionados} >Agregar</div>
                </button>
              </div>
      </SearchContext.Provider>
    </DataContext.Provider>
  );
};

export default VistaMantenimProducto;