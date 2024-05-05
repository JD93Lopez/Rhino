import { useNavigate } from "react-router-dom";
import AddProductFrame from "../components/AddProductFrame";
import { DataContext } from "../components/DataProvider";
import { TarjetaProductoCotizacion } from "../components/TarjetaProductoCotizacion";
import styles from "./VistaAdministradorVerCotizacion.module.css";
import { useCallback, useContext, useEffect, useState } from "react";
import axios from "../axios";

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
    const subtotal = document.getElementById("inputpreciocotizacion").value;
    const estado = document.getElementById("inputestadocotizacion").value;
    const valorconductor = document.getElementById("inputvalorconductorcotizacion").value;
    const gastoadicional = document.getElementById("inputgastoadicionalcotizacion").value;
    const justificacion_ga = document.getElementById("inputjustificaciongastoadicionalcotizacion").value;

    cotizacion.total = cotizacion.subtotal+cotizacion.total_impuestos+parseInt(valorconductor)+parseInt(gastoadicional)-cotizacion.total_descuento

    console.log(cotizacion)
    axios.api(`4/${cotizacion.idalquileres}
    /${cotizacion.subtotal}
    /${cotizacion.total}
    /${cotizacion.total_descuento}
    /${cotizacion.total_impuestos}
    /${valorconductor}
    /${gastoadicional}
    /${justificacion_ga}
    /${dataContext.usuarioIniciado.nombre_usuario}
    /${dataContext.usuarioIniciado.contrasena}`)

    navigate("/vista-administrador-cotizacion");

  };
  if(!dataContext.Loaded || !dataContext.cotizacionSeleccionada){ 
    navigate("/vista-administrador-cotizacion");
  }

  const [producto_agendas,setProducto_agendas] = useState()

  if(!producto_agendas&&dataContext.Loaded){
    axios.api(`obtener/producto_agendas/alquiler/${dataContext.usuarioIniciado.nombre_usuario}/${dataContext.usuarioIniciado.contrasena}/${cotizacion&&cotizacion.idalquileres}`).then((res)=>{
      try{
        setProducto_agendas(res.data.Res)
      }catch(e){}
    })
  }

  if(!cotizacion){
    navigate('/vista-administrador-cotizacion')
  }else{
    cotizacion.subtotal = 0
    cotizacion.total_descuento = 0
    cotizacion.total_impuestos = 0
    if(producto_agendas){
      for (const producto_agenda of producto_agendas){
        cotizacion.subtotal += producto_agenda.precio_alquiler
        cotizacion.total_descuento += producto_agenda.precio_alquiler*(producto_agenda.p_descuento/100)
        //TODO porcentaje impuestos
      }
      cotizacion.subtotal = cotizacion.subtotal - cotizacion.total_descuento
    }
  }

  return (
    <div className={styles.vistaAdministradorCotizaci}>
      <div className={styles.vistaAdministradorCotizaciChild} />
      <AddProductFrame />
      <main className={styles.mainContent}>
        <section className={styles.productAndQuotationArea}>
        &nbsp;
          <div className={styles.productsAndInfo}>
            <div className={styles.productDetails}>
              <div className={styles.productosAdquiridos}>
                Productos Adquiridos:
              </div>
            </div>
            {
              producto_agendas&&producto_agendas.map((producto_agenda)=>{
                return <TarjetaProductoCotizacion 
                  nombre= {producto_agenda.nombre}
                  identificacion= {producto_agenda.identificacion}
                  precio_alquiler= {producto_agenda.precio_alquiler}
                  fecha_inicio= {producto_agenda.fecha_inicio}
                  fecha_fin= {producto_agenda.fecha_fin}
                  object={producto_agenda}
                />
              })
            }
          </div>
          <div className={styles.quotationInfo}>
            <div className={styles.infoArea}>
              <div className={styles.quotationSummary}>
                <div className={styles.informationDetails}>
                  <div className={styles.informacinDeLa}>
                    {cotizacion&&cotizacion.estado=="ALQUILADO"?"Información del alquiler:":"Información de la cotización:"}
                  </div>
                  <div className={styles.infocotizacion}>
                    <div className={styles.infocotizacionChild} />
                    <div className={styles.contactInfoTitles}>
                      <div className={styles.nombre}>Nombre:</div>
                      <div className={styles.contactInputs}>
                        <input className={styles.camponombre} type='text' id="inputnombrecotizacion" useref="inputnombrecotizacion" value={cotizacion&&cotizacion.usuario.nombre_usuario} />
                      </div>
                    </div>
                    <div className={styles.contactInfoTitles1}>
                      <div className={styles.correo}>Correo:</div>
                      <div className={styles.campocorreoWrapper}>
                        <input className={styles.campocorreo} type="text" id="inputcorreocotizacion" useref="inputcorreocotizacion" value={cotizacion&&cotizacion.usuario.correo} />
                      </div>
                    </div>
                    <div className={styles.contactInfoTitles2}>
                      <div className={styles.telfono}>Teléfono:</div>
                      <div className={styles.campotelefonoWrapper}>
                        <input className={styles.campotelefono} type="text" id="inputtelefonocotizacion" useref="inputtelefonocotizacion" value={cotizacion&&cotizacion.usuario.telefono} />
                      </div>
                    </div>
                    <div className={styles.contactInfoTitles3}>
                      <div className={styles.precioDeProductos}>
                        Precio de Productos:
                      </div>
                      <div className={styles.campoprecioproductoWrapper}>
                        <input className={styles.campoprecioproducto} type="text" id="inputpreciocotizacion" useref="inputpreciocotizacion" value={cotizacion&&cotizacion.subtotal}/>
                      </div>
                    </div>
                    <div className={styles.contactInfoTitles3}>
                      <div className={styles.precioDeProductos}>
                        Estado:
                      </div>
                      <div className={styles.campoprecioproductoWrapper}>
                        <input className={styles.campoprecioproducto} type="text" id="inputestadocotizacion" useref="inputestadocotizacion" value={cotizacion&&cotizacion.estado}/>
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
                  <input className={styles.valorconductor} type="text" id="inputvalorconductorcotizacion" useref="inputvalorconductorcotizacion" defaultValue={cotizacion&&cotizacion.valor_conductores}>
                  </input>
                  <input className={styles.valorconductor} type="text" id="inputgastoadicionalcotizacion" useref="inputgastoadicionalcotizacion" defaultValue={cotizacion&&cotizacion.gastos_adicionales}>
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
                    defaultValue={cotizacion&&cotizacion.justificacion_ga}
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