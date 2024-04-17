import { useNavigate } from "react-router-dom";
import AddProductFrame from "../components/AddProductFrame";
import { DataContext } from "../components/DataProvider";
import { TarjetaProductoCotizacion } from "../components/TarjetaProductoCotizacion";
import styles from "./VistaAdministradorVerCotizacion.module.css";
import { useCallback, useContext, useEffect, useState } from "react";

const VistaAdministradorVerCotizacion = () => {
  const navigate= useNavigate()
  //cargar del datacontext cotizacion
  const dataContext = useContext(DataContext);
  const [cotizacion,setCotizacion] = useState(dataContext.cotizacionSeleccionada)
  const onSaveButtonClick = () => {
    // Obtener los valores de los campos utilizando useRef
    const nombre_usuario = document.getElementById("inputnombrecotizacion").value;
    const correo = document.getElementById("inputcorreocotizacion").value;
    const telefono = document.getElementById("inputtelefonocotizacion").value;
    const precioproductos = document.getElementById("inputpreciocotizacion").value;
    const estado = document.getElementById("inputestadocotizacion").value;
    const valorconductor = document.getElementById("inputvalorconductorcotizacion").value;
    const gastoadicional = document.getElementById("inputgastoadicionalcotizacion").value;
    const justificacion_gastosadicionales = document.getElementById("inputjustificaciongastoadicionalcotizacion").value;
    // Crear el objeto de usuario
    const cotizacionInsertar = {
      nombre_usuario,
      correo,
      telefono,
      precioproductos,
      estado,
      valorconductor,
      gastoadicional,
      justificacion_gastosadicionales
    };

    // Convertir el objeto de usuario a JSON
    const JsonUsuario = JSON.stringify(cotizacionInsertar);
    console.log(JsonUsuario);
  };
  if(!dataContext.Loaded || !dataContext.cotizacionSeleccionada){ 
    navigate("/vista-administrador-cotizacion");
  }
  return (
    <div className={styles.vistaAdministradorCotizaci}>
      <div className={styles.vistaAdministradorCotizaciChild} />
      <AddProductFrame />
      <main className={styles.mainContent}>
        <section className={styles.productAndQuotationArea}>
          <div className={styles.productsAndInfo}>
            <div className={styles.productDetails}>
              <div className={styles.productosAdquiridos}>
                Productos Adquiridos:
              </div>
            </div>
            <TarjetaProductoCotizacion 
              nombre= "CARGADORA"
              identificacion= "WHA723"
              precio_alquiler= "100000"
              fecha_inicio= "2024-04-10"
              fecha_fin= "2024-04-20"
            />
            <TarjetaProductoCotizacion 
              nombre= "CARGADORA"
              identificacion= "WHA723"
              precio_alquiler= "100000"
              fecha_inicio= "2024-04-10"
              fecha_fin= "2024-04-20"
            />
            <TarjetaProductoCotizacion 
              nombre= "CARGADORA"
              identificacion= "WHA723"
              precio_alquiler= "100000"
              fecha_inicio= "2024-04-10"
              fecha_fin= "2024-04-20"
            />
          </div>
          <div className={styles.quotationInfo}>
            <div className={styles.infoArea}>
              <div className={styles.quotationSummary}>
                <div className={styles.informationDetails}>
                  <div className={styles.informacinDeLa}>
                    Información de la cotización:
                  </div>
                  <div className={styles.infocotizacion}>
                    <div className={styles.infocotizacionChild} />
                    <div className={styles.contactInfoTitles}>
                      <div className={styles.nombre}>Nombre:</div>
                      <div className={styles.contactInputs}>
                        <input className={styles.camponombre} type='text' id="inputnombrecotizacion" useref="inputnombrecotizacion" value={cotizacion.nombre_usuario} />
                      </div>
                    </div>
                    <div className={styles.contactInfoTitles1}>
                      <div className={styles.correo}>Correo:</div>
                      <div className={styles.campocorreoWrapper}>
                        <input className={styles.campocorreo} type="text" id="inputcorreocotizacion" useref="inputcorreocotizacion" value={cotizacion.correo} />
                      </div>
                    </div>
                    <div className={styles.contactInfoTitles2}>
                      <div className={styles.telfono}>Teléfono:</div>
                      <div className={styles.campotelefonoWrapper}>
                        <input className={styles.campotelefono} type="text" id="inputtelefonocotizacion" useref="inputtelefonocotizacion" value={cotizacion.telefono} />
                      </div>
                    </div>
                    <div className={styles.contactInfoTitles3}>
                      <div className={styles.precioDeProductos}>
                        Precio de Productos:
                      </div>
                      <div className={styles.campoprecioproductoWrapper}>
                        <input className={styles.campoprecioproducto} type="text" id="inputpreciocotizacion" useref="inputpreciocotizacion" value={cotizacion.precioproductos}/>
                      </div>
                    </div>
                    <div className={styles.contactInfoTitles3}>
                      <div className={styles.precioDeProductos}>
                        Estado:
                      </div>
                      <div className={styles.campoprecioproductoWrapper}>
                        <input className={styles.campoprecioproducto} type="text" id="inputestadocotizacion" useref="inputestadocotizacion" value={cotizacion.estado}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.driversAndExpenses}>
                <div className={styles.driverAndExpenseInfo}>
                  <div className={styles.valoresDeLos}>
                    Valor de los Conductores:
                  </div>
                  <div className={styles.gastosAdicionales}>
                    Gastos Adicionales:
                  </div>
                </div>
                <div className={styles.driverValueDetails}>
                  <input className={styles.valorconductor} type="text" id="inputvalorconductorcotizacion" useref="inputvalorconductorcotizacion">
                  </input>
                  <input className={styles.valorconductor} type="text" id="inputgastoadicionalcotizacion" useref="inputgastoadicionalcotizacion">
                  </input>
                </div>
              </div>
              <div className={styles.driversAndExpenses}>
                <div className={styles.driverAndExpenseInfo}>
                  <div className={styles.valoresDeLos}>
                    Justificacion Gastos Adicionales:
                  </div>
                </div>
                <div className={styles.driverValueDetails}>
                  <textarea
                    className={styles.valorconductor2}
                    rows={6}
                    cols={16}
                    type="text"
                    id="inputjustificaciongastoadicionalcotizacion" 
                    useref="inputjustificaciongastoadicionalcotizacion"
                  />
                </div>
              </div>
            </div>
            <div className={styles.actionButtons}>
              <div className={styles.approvalOptions}>
                <button className={styles.botonaprovar}>
                  <div className={styles.botonaprobar} />
                  <div className={styles.aprobar}>Rechazar</div>
                </button>
                <button className={styles.botonaprovar}
                onClick={onSaveButtonClick}>
                  <div className={styles.botonaprobar} />
                  <div className={styles.aprobar}>Aprobar</div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VistaAdministradorVerCotizacion;