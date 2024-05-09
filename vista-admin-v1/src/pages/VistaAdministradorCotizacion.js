import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProductFrame from "../components/AddProductFrame";
import styles from "./VistaAdministradorCotizacion.module.css";
import TarjetaCotizaciones from "../components/TarjetaCotizaciones"; // Asegúrate de ajustar la ruta de importación
import { DataContext } from "../components/DataProvider";
import orden from "../OrdenamientoSimilitud";
import axios from "../axios";

const VistaAdministradorCotizacion = () => {
  const navigate = useNavigate();
  const dataContext = useContext(DataContext);
  const [cotizaciones, setCotizaciones] = useState(); // Asumiendo que 'productos' son cotizaciones

  if(!cotizaciones&&dataContext.Loaded){
    axios.api(`obtener/alquileres/${dataContext.usuarioIniciado.nombre_usuario}/${dataContext.usuarioIniciado.contrasena}`).then((res)=>{
      try{
        setCotizaciones(res.data.Res)
      }catch(e){}
    })
  }

  const onUSUARIOSTextClick = useCallback(() => {
    navigate("/vista-administrador-usuarios");
  }, [navigate]);

  const onPROYECTOSTextClick = useCallback(() => {
    navigate("/vista-administrador-proyectos");
  }, [navigate]);

  const onMANTENIMIENTOTextClick = useCallback(() => {
    navigate("/vista-administrador-mantenimiento");
  }, [navigate]);

  useEffect(() => {
    if (dataContext.Loaded) {
      setCotizaciones(cotizaciones); // Asumiendo que 'productos' son cotizaciones
    }
  }, [dataContext.Loaded, cotizaciones]);

  const buscar = () => {
    if (!cotizaciones) {
      return;
    }
    const inputValue = document.getElementById("inputbuscarcotizacion").value;
    let nuevasCotizaciones = cotizaciones.map((cotizacion) => {
      const idalquileresStr = String(cotizacion.idalquileres); 
      if (typeof inputValue === 'string' && typeof idalquileresStr === 'string') {
        const similitud = orden.calcularSimilitud(inputValue, idalquileresStr);
        return { cotizacion, similitud: similitud };
      } else {
        return { cotizacion, similitud: 0 };
      }
    }).sort((a, b) => b.similitud - a.similitud);
    nuevasCotizaciones = nuevasCotizaciones.map(({ cotizacion }) => cotizacion);

    setCotizaciones(nuevasCotizaciones);
  };
  return (
    <div className={styles.vistaAdministradorProducto}>
      <div className={styles.vistaAdministradorProductoChild} />
      <AddProductFrame
        onUSUARIOSTextClick={onUSUARIOSTextClick}
        onPROYECTOSTextClick={onPROYECTOSTextClick}
        onMANTENIMIENTOTextClick={onMANTENIMIENTOTextClick}
      />
      <main className={styles.gRUATElescopicaBoomText}>
        <section className={styles.rectangleShape}>
          <div className={styles.actualizarProductoBoton}>
            <div className={styles.eliminarProductoBoton}>
              <h1 className={styles.tituloCrearUsuario}>Cotizaciones</h1>
              <div className={styles.buscarUsuario}>
                <img className={styles.lupa4Icon} alt="" src="/lupa-4@2x.png" />
                <input
                  className={styles.buscarProducto}
                  placeholder="Buscar cotización"
                  type="text"
                  onChange={buscar}
                  id="inputbuscarcotizacion"
                  useref="inputbuscarcotizacion"
                />
              </div>
            </div>
          </div>
          <div className={styles.frontalLoaders}>
            {cotizaciones && cotizaciones.map((cotizacion) => (
              <TarjetaCotizaciones
                idalquileres = {cotizacion.idalquileres}
                nombre = {cotizacion.usuario.nombre_usuario}
                correo = {cotizacion.usuario.correo}
                telefono = {cotizacion.usuario.telefono}
                estado = {cotizacion.estado}
                fecha = {cotizacion.fecha.substring(0,10)}
                object = {cotizacion}
                key = {cotizacion.idalquileres}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default VistaAdministradorCotizacion;
