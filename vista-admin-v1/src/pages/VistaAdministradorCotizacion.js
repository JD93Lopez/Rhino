import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProductFrame from "../components/AddProductFrame";
import styles from "./VistaAdministradorCotizacion.module.css";
import TarjetaCotizaciones from "../components/TarjetaCotizaciones"; // Asegúrate de ajustar la ruta de importación
import { DataContext } from "../components/DataProvider";
import orden from "../OrdenamientoSimilitud";

const VistaAdministradorCotizacion = () => {
  const navigate = useNavigate();
  const dataContext = useContext(DataContext);
  const [cotizaciones, setCotizaciones] = useState(dataContext.cotizaciones); // Asumiendo que 'productos' son cotizaciones

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
      setCotizaciones(dataContext.cotizaciones); // Asumiendo que 'productos' son cotizaciones
    }
  }, [dataContext.Loaded, dataContext.cotizaciones]);

  const buscar = () => {
    if (!dataContext.cotizaciones) {
      return;
    }
    const inputValue = document.getElementById("inputbuscarproducto").value;
    let nuevasCotizaciones = dataContext.cotizaciones.map((cotizacion) => {
      const similitud = orden.calcularSimilitud(inputValue, cotizacion.nombre); // Ajusta según el dato relevante
      return { cotizacion, similitud: similitud };
    }).sort((a, b) => b.similitud - a.similitud);
    nuevasCotizaciones = nuevasCotizaciones.map(({ cotizacion })=> cotizacion);

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
                  id="inputbuscarproducto"
                  useref="inputbuscarproducto"
                />
              </div>
            </div>
          </div>
          <div className={styles.frontalLoaders}>
            {cotizaciones && cotizaciones.map((cotizacion) => (
              <TarjetaCotizaciones
                idAlquileres = {cotizacion.idAlquileres}
                nombre = {cotizacion.nombre_usuario}
                correo = {cotizacion.correo}
                telefono = {cotizacion.telefono}
                estado = {cotizacion.estado}
                fecha = {cotizacion.fecha}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default VistaAdministradorCotizacion;
