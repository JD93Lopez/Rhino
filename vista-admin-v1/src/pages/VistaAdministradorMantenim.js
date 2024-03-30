import { useContext } from "react";
import { DataContext } from "../components/DataProvider";
import FrameComponent1 from "../components/FrameComponent1";
import TarjetaMantenimiento from "../components/TarjetaMantenimiento";
import styles from "./VistaAdministradorMantenim.module.css";

const VistaAdministradorMantenim = () => {

  const dataContext = useContext(DataContext);
  
  if (!dataContext.Loaded) {
    return <div>Cargando... Por favor espere.</div>;
  }

  const mantenimientos = dataContext.mantenimientos

  return (
    <div className={styles.vistaAdministradorMantenim}>
      <div className={styles.vistaAdministradorMantenimChild} />
      <FrameComponent1 />
      <main className={styles.vistaAdministradorMantenimInner}>
        <section className={styles.mantenimientoParent}>
          <h1 className={styles.mantenimiento}>MANTENIMIENTO</h1>
          <div className={styles.projectDetails}>
            {mantenimientos.map(mantenimiento => (
              <TarjetaMantenimiento
                nombreMaquinaria={mantenimiento.nombreMaquinaria}
                identificacion={mantenimiento.identificacion}
                fecha={mantenimiento.fecha}
                key={mantenimiento.identificacion}
              />
            ))}
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
                <div calssName={styles.eliminarusuarioChild} />
                <div className={styles.EliminarSeleccionados} >Eliminar</div>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VistaAdministradorMantenim;
