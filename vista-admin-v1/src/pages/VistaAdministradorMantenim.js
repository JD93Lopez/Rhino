import React, { useState, useContext, useEffect, useCallback } from 'react';
import AddProductFrame from "../components/AddProductFrame";
import { useNavigate } from 'react-router-dom';
import styles from "./VistaAdministradorMantenim.module.css";
import { DataContext } from "../components/DataProvider";
import TarjetaMantenimiento from "../components/TarjetaMantenimiento";
import orden from "../OrdenamientoSimilitud";
import axios from '../axios';

const VistaAdministradorMantenim = () => {
  const dataContext = useContext(DataContext);
  const { Loaded, mantenimientos: mantenimientosContext, usuarios, selectedMant } = dataContext;
  const [mantenimientos, setMantenimientos] = useState();

  const navigate = useNavigate();
  const onAgregarMantenimientoClick = useCallback(() => {
    navigate("/vista-administrador-agregar-mantenimiento");
  }, [navigate]);

  const onActualizarMantenimientoClick = useCallback(() => {
    console.log(dataContext.selectedMant);
    if (dataContext.selectedMant.length === 1)
    navigate("/vista-administrador-actualizar-mant");
  
  }, [navigate, dataContext]);

  dataContext.selectedMant = []

  if(!mantenimientos){
    try{
      axios.api(`obtener/mantenimientos/${dataContext.usuarioIniciado.nombre_usuario}/${dataContext.usuarioIniciado.contrasena}`).then((res)=>{
        try{
          setMantenimientos(res.data.Res)
        }catch(e){}
      })
    }catch(e){}
  }

/*   useEffect(() => {
    if (Loaded) {
      setMantenimientos(mantenimientos);
    }
  }, [Loaded, mantenimientos]); */

  const buscar = (buscado) => {
    if (!mantenimientos) {
      return;
    }

    let nuevosMantenimientos = mantenimientos.map((mantenimiento) => {
      const similitud = orden.calcularSimilitud(buscado, mantenimiento.identificacion);
      return { mantenimiento: mantenimiento, similitud: similitud };
    }).sort((a, b) => b.similitud - a.similitud);
    nuevosMantenimientos = nuevosMantenimientos.map((mantenimientoSimilitud) => {
      return mantenimientoSimilitud.mantenimiento
    })


    setMantenimientos(nuevosMantenimientos);
  };

  return (
        <div className={styles.vistaAdministradorMantenim}>
          <div className={styles.vistaAdministradorMantenimChild} />
          <AddProductFrame/>
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
                {mantenimientos&&mantenimientos.map(mantenimiento => {
                  return <TarjetaMantenimiento
                    object={mantenimiento}
                    nombreMaquinaria={mantenimiento.nombreMaquinaria}
                    fecha={mantenimiento.fechamantenimiento}
                    id={mantenimiento.idmantenimiento}
                    key={mantenimiento.idmantenimiento}
                  ></TarjetaMantenimiento>
                })}
              </div>
              <div className={styles.actualizarUsuarioParent}>
                  <button
                    className={styles.actualizarUsuario}
                    onClick={onAgregarMantenimientoClick}>
                    <div className={styles.actualizarUsuarioChild} />
                    <div className={styles.actualizarUsuario1}>
                      Agregar Mantenimiento
                    </div>
                  </button>
                  <button
                    className={styles.crearUsuario}
                  >
                    <div className={styles.crearUsuarioChild} />
                    <div className={styles.crearNuevo}
                    onClick={onActualizarMantenimientoClick}
                    >Actualizar</div>
                  </button>
                  <button 
                    className={styles.eliminarUsuariosSeleccionados}>
                    <div calssName={styles.eliminarusuarioChild} />
                    <div className={styles.EliminarSeleccionados} >Eliminar</div>
                  </button>
                </div>
            </section>
          </main>
        </div>
  );
};

export default VistaAdministradorMantenim;