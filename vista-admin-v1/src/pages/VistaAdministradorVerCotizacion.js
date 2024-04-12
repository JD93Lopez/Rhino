import AddProductFrame from "../components/AddProductFrame";
import styles from "./VistaAdministradorVerCotizacion.module.css";

const VistaAdministradorVerCotizacion = () => {
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
              <div className={styles.productos}>
                <div className={styles.productosChild} />
                <div className={styles.excavadora210gPotenciaContainer}>
                  <p className={styles.excavadora}>EXCAVADORA</p>
                  <p className={styles.blankLine}>&nbsp;</p>
                  <p className={styles.g}>210G</p>
                  <p className={styles.potenciaNetaDel}>
                    Potencia neta del motor
                  </p>
                  <p className={styles.kw159Cv}>119 kW (159 CV) a 1900 rpm</p>
                  <p className={styles.profundidadMxDe}>
                    Profundidad máx. de excavación
                  </p>
                  <p className={styles.m21Ft}>6,68 m (21 ft 11 in)</p>
                  <p className={styles.pesoOperativo}>Peso operativo</p>
                  <p className={styles.kg48312}>21 914 kg (48 312 lb.)</p>
                </div>
              </div>
            </div>
            <div className={styles.productos1}>
              <div className={styles.productosItem} />
              <div className={styles.cargadoresFrontalesWa3806Container}>
                <p className={styles.cargadoresFrontales}>
                  CARGADORES FRONTALES
                </p>
                <p className={styles.blankLine1}>&nbsp;</p>
                <p className={styles.wa3806}>WA380-6</p>
                <p className={styles.pesoOperativo1}>Peso operativo</p>
                <p className={styles.kg38800Lb}>17.600 kg (38.800 lb)</p>
                <p className={styles.potenciaNetaAl}>
                  Potencia neta al volante (SAE)
                </p>
                <p className={styles.hp142Kw}>
                  191 hp (142 kW) @ 2.100 r. p. m.
                </p>
                <p className={styles.capacidadDelBalde}>
                  Capacidad del balde (SAE)
                </p>
                <p className={styles.m41Yd}>3,3 m³ (4,1 yd³) @ 1,6 t/m³</p>
              </div>
            </div>
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
                        <input className={styles.camponombre} type='text' />
                      </div>
                    </div>
                    <div className={styles.contactInfoTitles1}>
                      <div className={styles.correo}>Correo:</div>
                      <div className={styles.campocorreoWrapper}>
                        <input className={styles.campocorreo} type="text" />
                      </div>
                    </div>
                    <div className={styles.contactInfoTitles2}>
                      <div className={styles.telfono}>Teléfono:</div>
                      <div className={styles.campotelefonoWrapper}>
                        <input className={styles.campotelefono} type="text" />
                      </div>
                    </div>
                    <div className={styles.contactInfoTitles3}>
                      <div className={styles.precioDeProductos}>
                        Precio de Productos:
                      </div>
                      <div className={styles.campoprecioproductoWrapper}>
                        <input
                          className={styles.campoprecioproducto}
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.driversAndExpenses}>
                <div className={styles.driverAndExpenseInfo}>
                  <div className={styles.valoresDeLos}>
                    Valores de los Conductores:
                  </div>
                  <div className={styles.gastosAdicionales}>
                    Gastos Adicionales:
                  </div>
                </div>
                <div className={styles.driverValueDetails}>
                  <textarea
                    className={styles.valorconductor}
                    rows={6}
                    cols={16}
                  />
                  <textarea
                    className={styles.valorconductor1}
                    rows={6}
                    cols={16}
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
                <button className={styles.botonaprovar}>
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