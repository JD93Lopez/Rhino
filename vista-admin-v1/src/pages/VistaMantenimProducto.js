import React, { useState, useContext, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import styles from "./VistaAdministradorMantenim.module.css";
import { DataContext } from "../components/DataProvider";
import TarjetaMantenimiento from "../components/TarjetaMantenimiento";
import orden from "../OrdenamientoSimilitud";
import AddProductFrame from '../components/AddProductFrame';
import axios from '../axios';

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
  const [mantenimientos, setMantenimientos] = useState();

  if(!mantenimientos){
    axios.api(`obtenerMantenimientosConIdproductos/${selectedProducts[0].idproductos}`).then((res)=>{
      setMantenimientos(res.data.Res)
    })
  }

  const buscar = () => {
    if (!mantenimientos) {
      return;
    }

    let nuevosMantenimientos = mantenimientos.map((mantenimiento) => {
      const similitud = orden.calcularSimilitud(busqueda, mantenimiento.fechamantenimiento);
      return { mantenimiento: mantenimiento, similitud: similitud };
    }).sort((a, b) => b.similitud - a.similitud);
    nuevosMantenimientos = nuevosMantenimientos.map((mantenimientoSimilitud) => {
      return mantenimientoSimilitud.mantenimiento
    })

    setMantenimientos(nuevosMantenimientos);
  };

  let dibujarMantenimientos = ()=>{
    if(mantenimientos&&mantenimientos.length !== 0){
      let key = 0
      return mantenimientos.map(mantenimiento => {
        key++;
        mantenimiento.producto = selectedProducts[0]
        console.log(mantenimiento)
        return <TarjetaMantenimiento
          object={mantenimiento}
          nombreMaquinaria={mantenimiento.nombreMaquinaria}
          identificacion={mantenimiento.identificacion}
          fecha={mantenimiento.fechamantenimiento}
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
          <AddProductFrame />
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
              </div>
      </SearchContext.Provider>
    </DataContext.Provider>
  );
};

export default VistaMantenimProducto;