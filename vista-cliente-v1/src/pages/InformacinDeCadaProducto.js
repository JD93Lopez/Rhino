import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InformacinDeCadaProducto.module.css";

const InformacinDeCadaProducto = () => {
  const navigate = useNavigate();

  const onBotonConsultarPrecioClick = useCallback(() => {
    navigate("/ventana-para-solcitar-una-cotizacin");
  }, [navigate]);

  const onBotonLogo10Click = useCallback(() => {
    navigate("/ventana-principal-2");
  }, [navigate]);

  const onBotonProductos10Click = useCallback(() => {
    navigate("/ventana-de-informacin-personal");
  }, [navigate]);

  const onBotonSobreNosotrosClick = useCallback(() => {
    navigate("/ventana-sobre-nosotros");
  }, [navigate]);

  const onCarritoDeCompras1ImageClick = useCallback(() => {
    navigate("/ventana-carrito-de-compras");
  }, [navigate]);

  return (
    <div className={styles.informacinDeCadaProducto}>
      <div className={styles.detallesDelProducto}>DETALLES DEL PRODUCTO</div>
      <div className={styles.informacinDeCadaProductoChild} />
      <div className={styles.manipuladoraDeMaterialesContainer}>
        <p className={styles.manipuladoraDe}>Manipuladora de</p>
        <p className={styles.manipuladoraDe}>materiales de ruedas</p>
      </div>
      <div className={styles.descripcinGeneral}>Descripción General</div>
      <div className={styles.productosSimilaresWrapper}>
        <div className={styles.productosSimilares}>PRODUCTOS SIMILARES</div>
      </div>
      <div className={styles.informacinDeCadaProductoItem} />
      <div className={styles.mh3050}>MH3050</div>
      <button
        className={styles.botonConsultarPrecio}
        onClick={onBotonConsultarPrecioClick}
      >
        <b className={styles.consultarPrecio}>CONSULTAR PRECIO</b>
      </button>
      <button className={styles.botonAgregarAlCarrito}>
        <b className={styles.consultarPrecio}>AGREGAR AL CARRITO</b>
      </button>
      <img
        className={styles.manipuladorafondo1Icon}
        alt=""
        src="/manipuladorafondo-1@2x.png"
      />
      <b className={styles.especificacionesPrincipales}>
        ESPECIFICACIONES PRINCIPALES
      </b>
      <div className={styles.modeloDelMotorContainer}>
        <p className={styles.manipuladoraDe}>
          <b>Modelo del motor</b>
        </p>
        <p className={styles.manipuladoraDe}>C9.3B Cat®</p>
        <p className={styles.manipuladoraDe}>
          <b>&nbsp;</b>
        </p>
        <p className={styles.manipuladoraDe}>
          <b>Peso en orden de trabajo máximo</b>
        </p>
        <p className={styles.manipuladoraDe}>50.000 kg</p>
        <p className={styles.manipuladoraDe}>
          <b>&nbsp;</b>
        </p>
        <p className={styles.manipuladoraDe}>
          <b>Alcance máximo</b>
        </p>
        <p className={styles.manipuladoraDe}>18060 mm</p>
      </div>
      <div className={styles.mayorProductividad}>MAYOR PRODUCTIVIDAD</div>
      <div className={styles.informacinDeCadaProductoInner} />
      <div className={styles.especificacionesDelProductoParent}>
        <div className={styles.especificacionesDelProducto}>
          ESPECIFICACIONES DEL PRODUCTO
        </div>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
      </div>
      <div className={styles.elCatMh3050Container}>
        <p
          className={styles.manipuladoraDe}
        >{`El Cat® MH3050 destaca por su rendimiento excepcional en la categoría de `}</p>
        <p
          className={styles.manipuladoraDe}
        >{`dimensiones a la que pertenece. Gracias a su estabilizador y tren de rodaje `}</p>
        <p
          className={styles.manipuladoraDe}
        >{`amplio, se asegura de mantenerse estable en su posición, mientras que las `}</p>
        <p
          className={styles.manipuladoraDe}
        >{`opciones de pluma y brazo se sincronizan para lograr un alcance impresionante `}</p>
        <p
          className={styles.manipuladoraDe}
        >{`de hasta 18 metros (59' 1"). Este equipo fusiona componentes de última generación `}</p>
        <p
          className={styles.manipuladoraDe}
        >{`provenientes de las excavadoras Cat con la cabina diseñada para manipulación `}</p>
        <p className={styles.manipuladoraDe}>
          de materiales, garantizando así la máxima eficiencia, mayor confort y
          la confiabilidad
        </p>
        <p
          className={styles.manipuladoraDe}
        >{`que se espera de este tipo de maquinaria. `}</p>
      </div>
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-143@2x.png"
      />
      <img
        className={styles.informacinDeCadaProductoChild1}
        alt=""
        src="/rectangle-144@2x.png"
      />
      <img
        className={styles.informacinDeCadaProductoChild2}
        alt=""
        src="/rectangle-145@2x.png"
      />
      <div className={styles.rectangleDiv} />
      <div className={styles.informacinDeCadaProductoChild3} />
      <div className={styles.informacionGeneralDelProduc}>
        <div className={styles.motorParent}>
          <div className={styles.motor}>Motor</div>
          <div className={styles.frameInner} />
        </div>
        <div className={styles.modeloDelMotorParent}>
          <div className={styles.productosSimilares}>Modelo del motor</div>
          <div className={styles.productosSimilares}>Cat C9.3</div>
        </div>
        <div className={styles.calibreParent}>
          <div className={styles.productosSimilares}>{`Calibre `}</div>
          <div className={styles.productosSimilares}>115 mm</div>
        </div>
        <div className={styles.potenciaNetaIso14396Parent}>
          <div
            className={styles.productosSimilares}
          >{`Potencia neta: ISO 14396 `}</div>
          <div className={styles.productosSimilares}>252 kW</div>
        </div>
        <div className={styles.velocidadAParMximoDelMotParent}>
          <div className={styles.productosSimilares}>
            Velocidad a par máximo del motor
          </div>
          <div className={styles.productosSimilares}>1200 rpm</div>
        </div>
        <div className={styles.motorParent}>
          <div className={styles.motor}>Pesos</div>
          <div className={styles.frameChild1} />
        </div>
        <div className={styles.cargaTilNominalParent}>
          <div className={styles.productosSimilares}>Carga útil nominal</div>
          <div className={styles.productosSimilares}>24 t</div>
        </div>
        <div className={styles.motorParent}>
          <div className={styles.motor}>Transmisión</div>
          <div className={styles.frameChild2} />
        </div>
        <div className={styles.avance1Parent}>
          <div className={styles.productosSimilares}>Avance - 1</div>
          <div className={styles.productosSimilares}>8.1 km/h</div>
        </div>
        <div className={styles.avance2Parent}>
          <div className={styles.productosSimilares}>{`Avance - 2 `}</div>
          <div className={styles.productosSimilares}>15.2 km/h</div>
        </div>
        <div className={styles.avance3Parent}>
          <div className={styles.productosSimilares}>{`Avance - 3 `}</div>
          <div className={styles.productosSimilares}>23.2 km/h</div>
        </div>
        <div className={styles.avance4Parent}>
          <div className={styles.productosSimilares}>Avance - 4</div>
          <div className={styles.productosSimilares}>35.5 km/h</div>
        </div>
        <div className={styles.avance5Parent}>
          <div className={styles.productosSimilares}>Avance - 5</div>
          <div className={styles.productosSimilares}>49.4 km/h</div>
        </div>
        <div className={styles.avance6Parent}>
          <div className={styles.productosSimilares}>{`Avance - 6 `}</div>
          <div className={styles.productosSimilares}>58.4 km/h</div>
        </div>
        <div className={styles.retroceso1Parent}>
          <div className={styles.productosSimilares}>{`Retroceso - 1 `}</div>
          <div className={styles.productosSimilares}>8.9 km/h</div>
        </div>
        <div className={styles.placaDeLaCajaParent}>
          <div className={styles.productosSimilares}>Placa de la caja</div>
          <div className={styles.frameChild3} />
        </div>
        <div className={styles.tipoParent}>
          <div className={styles.tipo}>Tipo</div>
          <div className={styles.aceroResistenteAlContainer}>
            <p
              className={styles.manipuladoraDe}
            >{`Acero resistente al desgaste `}</p>
            <p
              className={styles.manipuladoraDe}
            >{`de alta resistencia Brinell `}</p>
            <p className={styles.manipuladoraDe}>HB450</p>
          </div>
        </div>
        <div className={styles.motorParent}>
          <div className={styles.motor}>
            Dispositivo del levantamiento de cajas
          </div>
          <div className={styles.frameChild4} />
        </div>
        <div className={styles.tiempoDeLevantamientoParent}>
          <div className={styles.productosSimilares}>
            Tiempo de levantamiento
          </div>
          <div className={styles.productosSimilares}>10 s</div>
        </div>
        <div className={styles.tiempoDeBajadaParent}>
          <div className={styles.tiempoDeBajada}>{`Tiempo de bajada  `}</div>
          <div className={styles.productosSimilares}>8 s</div>
        </div>
        <div className={styles.motorParent}>
          <div className={styles.motor}>Normas</div>
          <div className={styles.frameChild5} />
        </div>
        <div className={styles.frenosParent}>
          <div className={styles.productosSimilares}>Frenos</div>
          <div className={styles.productosSimilares}>ISO 3450 - 2011</div>
        </div>
        <div className={styles.cabinaFopsParent}>
          <div className={styles.productosSimilares}>{`Cabina: FOPS `}</div>
          <div className={styles.productosSimilares}>
            ISO 3499 Nivel II - 2008
          </div>
        </div>
        <div className={styles.cabinaRopsParent}>
          <div className={styles.productosSimilares}>{`Cabina: ROPS `}</div>
          <div className={styles.productosSimilares}>ISO 3471 - 2008</div>
        </div>
        <div className={styles.direccinParent}>
          <div className={styles.productosSimilares}>Dirección</div>
          <div className={styles.productosSimilares}>iso 5010 - 2007</div>
        </div>
        <div className={styles.motorParent}>
          <div className={styles.motor}>Pesos de orden de trabajo</div>
          <div className={styles.frameChild6} />
        </div>
        <div className={styles.totalCargadoParent}>
          <div className={styles.productosSimilares}>Total: Cargado</div>
          <div className={styles.productosSimilares}>47122 kg</div>
        </div>
        <div className={styles.ejeTraseroCargaNominalParent}>
          <div
            className={styles.productosSimilares}
          >{`Eje trasero: Carga nominal `}</div>
          <div className={styles.productosSimilares}>10750 kg</div>
        </div>
        <div className={styles.totalVacoParent}>
          <div className={styles.productosSimilares}>{`Total: Vacío `}</div>
          <div className={styles.productosSimilares}>23122 kg</div>
        </div>
        <div className={styles.totalCargaNominalParent}>
          <div className={styles.productosSimilares}>Total: Carga nominal</div>
          <div className={styles.productosSimilares}>24000 kg</div>
        </div>
        <div className={styles.ejeCentralCargadoParent}>
          <div className={styles.productosSimilares}>Eje central: Cargado</div>
          <div className={styles.productosSimilares}>15397 kg</div>
        </div>
        <div className={styles.ejeDelanteroCargaNominalParent}>
          <div
            className={styles.productosSimilares}
          >{`Eje delantero: Carga nominal `}</div>
          <div className={styles.productosSimilares}>2500 kg</div>
        </div>
        <div className={styles.ejeCentralCargaNominalParent}>
          <div
            className={styles.productosSimilares}
          >{`Eje central: Carga nominal `}</div>
          <div className={styles.productosSimilares}>10750 kg</div>
        </div>
        <div className={styles.ejeCentralVacoParent}>
          <div className={styles.productosSimilares}>Eje central: Vacío</div>
          <div className={styles.productosSimilares}>4646 kg</div>
        </div>
        <div className={styles.ejeTraseroConCargaParent}>
          <div className={styles.productosSimilares}>
            Eje trasero: Con carga
          </div>
          <div className={styles.productosSimilares}>15716 kg</div>
        </div>
        <div className={styles.ejeDelanteroConCargaParent}>
          <div
            className={styles.productosSimilares}
          >{`Eje delantero: Con carga `}</div>
          <div className={styles.productosSimilares}>16549 kg</div>
        </div>
        <div className={styles.ejeTraseroSinCargaParent}>
          <div
            className={styles.productosSimilares}
          >{`Eje trasero: Sin carga `}</div>
          <div className={styles.productosSimilares}>4426 kg</div>
        </div>
        <div className={styles.ejeDelanteroSinCargaParent}>
          <div className={styles.productosSimilares}>
            Eje delantero: Sin carga
          </div>
          <div className={styles.productosSimilares}>14050 kg</div>
        </div>
      </div>
      <footer className={styles.footer5}>
        <div className={styles.footer5Inner}>
          <div className={styles.contactenosParent}>
            <div className={styles.motor}>CONTACTENOS</div>
            <div className={styles.frameChild7} />
          </div>
        </div>
        <div className={styles.atencionalclienterhinocomWrapper}>
          <h1 className={styles.atencionalclienterhinocom}>
            atencionAlCliente@rhino.com
          </h1>
        </div>
        <div className={styles.textoCelularParent}>
          <h1 className={styles.textoCelular}>
            <ul className={styles.ul}>
              <li>301(849)837</li>
            </ul>
          </h1>
          <h1 className={styles.textoTelefono}>
            <ul className={styles.ul}>
              <li>6891254</li>
            </ul>
          </h1>
          <div className={styles.contactenosParent}>
            <div className={styles.botonXChild} />
            <img className={styles.gorjeo1Icon} alt="" src="/gorjeo-1@2x.png" />
          </div>
          <img className={styles.botonYtIcon} alt="" src="/boton-yt@2x.png" />
          <img
            className={styles.botonYtIcon}
            alt=""
            src="/boton-insta@2x.png"
          />
          <img
            className={styles.botonYtIcon}
            alt=""
            src="/boton-facebook@2x.png"
          />
        </div>
      </footer>
      <header className={styles.headerInformacionDeProducto}>
        <div className={styles.headerInformacionDeProductoChild} />
        <div className={styles.headerInformacionDeProductoItem} />
        <img
          className={styles.botonLogo10}
          alt=""
          src="/logo@3x.png"
          onClick={onBotonLogo10Click}
        />
        <div
          className={styles.botonProductos10}
          onClick={onBotonProductos10Click}
        >
          PRODUCTOS
        </div>
        <div
          className={styles.botonSobreNosotros}
          onClick={onBotonSobreNosotrosClick}
        >
          SOBRE NOSOTROS
        </div>
        <img
          className={styles.botonLupa10}
          alt=""
          src="/boton-de-buscar@3x.png"
        />
        <div className={styles.botonMiCuenta10}>
          <img className={styles.perfil1Icon} alt="" src="/perfil-1@2x.png" />
          <div className={styles.productosSimilares}>MI CUENTA</div>
        </div>
        <img
          className={styles.carritoDeCompras1Icon}
          alt=""
          src="/carritodecompras-2@2x.png"
          onClick={onCarritoDeCompras1ImageClick}
        />
      </header>
    </div>
  );
};

export default InformacinDeCadaProducto;
