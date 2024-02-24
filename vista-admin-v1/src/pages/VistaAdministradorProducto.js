import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AddProductFrame from "../components/AddProductFrame";
import CargadoresFrontales2 from "../components/CargadoresFrontales2";
import CargadoresFrontales1 from "../components/CargadoresFrontales1";
import CamionPlataforma from "../components/CamionPlataforma";
import CargadoresFrontales from "../components/CargadoresFrontales";
import styles from "./VistaAdministradorProducto.module.css";

const VistaAdministradorProducto = () => {
  const navigate = useNavigate();

  const onUSUARIOSTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPROYECTOSTextClick = useCallback(() => {
    navigate("/vista-administrador-proyectos");
  }, [navigate]);

  const onMANTENIMIENTOTextClick = useCallback(() => {
    navigate("/vista-administrador-mantenimiento");
  }, [navigate]);

  const onBotonGuardarContainerClick = useCallback(() => {
    navigate("/vista-administrador-agregar-productoeditar-producto");
  }, [navigate]);

  return (
    <div className={styles.vistaAdministradorProducto}>
      <div className={styles.vistaAdministradorProductoChild} />
      <AddProductFrame
        maintananceTextPadding="var(--padding-8xs) 0px 0px"
        onUSUARIOSTextClick={onUSUARIOSTextClick}
        onPROYECTOSTextClick={onPROYECTOSTextClick}
        onMANTENIMIENTOTextClick={onMANTENIMIENTOTextClick}
      />
      <main className={styles.gRUATElescopicaBoomText}>
        <section className={styles.rectangleShape}>
          <div className={styles.actualizarProductoBoton}>
            <div className={styles.eliminarProductoBoton}>
              <h1 className={styles.tituloCrearUsuario}>Productos</h1>
              <div className={styles.buscarUsuario}>
                <div className={styles.buscarUsuarioChild} />
                <img className={styles.lupa4Icon} alt="" src="/lupa-4@2x.png" />
                <input
                  className={styles.buscarProducto}
                  placeholder="buscar producto"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className={styles.frontalLoaders}>
            <div className={styles.updateDeleteProduct}>
              <div className={styles.excavator}>
                <div className={styles.powerfulExcavator}>
                  <button className={styles.powerfulExcavator1}>
                    <div className={styles.powerfulExcavatorChild} />
                    <div className={styles.actualizarProducto}>
                      Actualizar Producto
                    </div>
                  </button>
                  <button className={styles.powerfulExcavator2}>
                    <div className={styles.powerfulExcavatorItem} />
                    <div className={styles.eliminarProducto}>
                      Eliminar Producto
                    </div>
                  </button>
                  <div
                    className={styles.botonGuardar}
                    onClick={onBotonGuardarContainerClick}
                  >
                    <button className={styles.rectangleParent}>
                      <div className={styles.frameChild} />
                      <div className={styles.agregarProducto}>
                        Agregar producto
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.excavadora}>
                <div className={styles.excavadoraChild} />
                <img
                  className={styles.image1Icon}
                  loading="eager"
                  alt=""
                  src="/image-1@2x.png"
                />
                <div className={styles.grabberCrane}>
                  <div className={styles.excavadora210gPotenciaContainer}>
                    <p className={styles.excavadora1}>EXCAVADORA</p>
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
            </div>
            <div className={styles.cargadoresFrontales}>
              <div className={styles.cargadoresFrontalesChild} />
              <img
                className={styles.image2Icon}
                loading="eager"
                alt=""
                src="/image-2@2x.png"
              />
              <div className={styles.cargadoresFrontalesWa3806Container}>
                <p className={styles.cargadoresFrontales1}>
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
            <CargadoresFrontales2
              image3="/image-3@2x.png"
              gRASSOBREORUGA="GRÚAS SOBRE ORUGA"
              gHC110="GHC110"
              pesoBrutoTotalDelVehculo="Peso bruto total del vehículo"
              prop="107,500"
              longitudDePlumaPrincipal="Longitud de pluma principal"
              m="46,8m"
              alturaMximaDeLaPunta="Altura máxima de la punta"
              m1="65m"
            />
            <CargadoresFrontales2
              image3="/image-4@2x.png"
              gRASSOBREORUGA="RETROEXCAVADORAS"
              gHC110="428F2 - CAT LIFT TRUCKS"
              pesoBrutoTotalDelVehculo="Potencia"
              prop="88 HP"
              longitudDePlumaPrincipal="Balde Cargador"
              m="1 – 1.15 m3"
              alturaMximaDeLaPunta="Profundidad de excavación"
              m1="4287 mm"
              propGap="38px"
              propHeight="393px"
              propWidth="524px"
              propPadding="0px 0px var(--padding-lg)"
              propLineHeight="unset"
            />
            <CargadoresFrontales1
              image5="/image-5@2x.png"
              bULLDOZERS="BULLDOZERS"
              kII="524K-II"
              cargadorConRuedas="Cargador con Ruedas"
              potenciaNetaDelMotor106KW="Potencia neta del motor: 106 kW (142 CV)"
              capacidadDelCucharn1921M="Capacidad del Cucharón:1,9-2,1 m³ (2,5-2,75 cu yd)"
              pesoOperativo12622Kg27827="Peso operativo:12 622 kg (27 827 lb)"
              fuerzaInicial9638Kg21248L="Fuerza Inicial:9638 kg (21 248 lb)"
            />
            <CargadoresFrontales1
              image5="/image-6@2x.png"
              bULLDOZERS="GRÚA TORRE"
              kII="Altura"
              cargadorConRuedas="60m"
              potenciaNetaDelMotor106KW="Max. Carga"
              capacidadDelCucharn1921M="16t"
              pesoOperativo12622Kg27827="Longitud de la pluma / Carga de la punta"
              fuerzaInicial9638Kg21248L="75m/3t"
              propPadding="var(--padding-2xl) var(--padding-13xl) var(--padding-7xl) 104px"
              propGap="60px"
              propHeight="375px"
              propWidth="453px"
              propLineHeight="unset"
              propMinWidth="432px"
            />
            <CargadoresFrontales1
              image5="/image-7@2x.png"
              bULLDOZERS="MANIPULADOR DE MATERIALES"
              kII="Potencia/Velocidad del motor"
              cargadorConRuedas="174kW"
              potenciaNetaDelMotor106KW="Peso total"
              capacidadDelCucharn1921M="36-46t"
              pesoOperativo12622Kg27827="Radio de giro"
              fuerzaInicial9638Kg21248L="3.3m"
              propPadding="var(--padding-23xl) var(--padding-13xl) var(--padding-17xl) var(--padding-40xl)"
              propGap="60px"
              propHeight="344px"
              propWidth="498px"
              propLineHeight="unset"
              propMinWidth="406px"
            />
            <CargadoresFrontales1
              image5="/image-8@2x.png"
              bULLDOZERS="CAMIÓN VOLQUETE"
              kII="Tipo de accionamiento"
              cargadorConRuedas="6×4"
              potenciaNetaDelMotor106KW="Masa total con carga de maquinaria complementaria (t)"
              capacidadDelCucharn1921M="18500"
              pesoOperativo12622Kg27827="Peso total de máquina (kg)"
              fuerzaInicial9638Kg21248L="48000"
              propPadding="var(--padding-smi) var(--padding-12xl) var(--padding-mid) var(--padding-7xl)"
              propGap="7px"
              propHeight="392px"
              propWidth="585px"
              propLineHeight="37.6px"
              propMinWidth="432px"
            />
            <div className={styles.cargadoresFrontales2}>
              <div className={styles.cargadoresFrontalesItem} />
              <div className={styles.montacargasCapacidadLbContainer}>
                <p className={styles.montacargas}>MONTACARGAS</p>
                <p className={styles.blankLine2}>&nbsp;</p>
                <p className={styles.capacidadLb}>Capacidad (lb) @ 24</p>
                <p className={styles.p}>2500</p>
                <p className={styles.motorDiesel}>Motor: Diesel</p>
                <p className={styles.alcanceM36}>Alcance (m): 3-6</p>
              </div>
              <img
                className={styles.image9Icon}
                loading="eager"
                alt=""
                src="/image-9@2x.png"
              />
            </div>
            <CamionPlataforma
              image10="/image-10@2x.png"
              cAMINPLATAFORMA="CAMIÓN PLATAFORMA"
              potenciaMximaHprpm="Potencia Máxima (hp/rpm)"
              prop="154,22 @ 2600"
              torqueKgMrpm="Torque (kg-m/rpm)"
              kGM12001900RPM="50,99 KG-M @ 1200-1900 RPM"
              capacidadDeCargaMxima="Capacidad de carga máxima"
              toneladas="6.5 toneladas"
            />
            <div className={styles.cargadoresFrontales3}>
              <div className={styles.cargadoresFrontalesInner} />
              <div className={styles.image11Wrapper}>
                <img
                  className={styles.image11Icon}
                  loading="eager"
                  alt=""
                  src="/image-11@2x.png"
                />
              </div>
              <div className={styles.caminFurgnConContainer}>
                <p className={styles.caminFurgnCon}>
                  CAMIÓN FURGÓN CON GRÚA ARTICULADA
                </p>
                <p className={styles.blankLine3}>&nbsp;</p>
                <p className={styles.controlRemoto}>Control remoto.</p>
                <p className={styles.extensionesJib}>Extensiones JIB.</p>
                <p className={styles.brocaPerforadora}>Broca perforadora.</p>
                <p className={styles.ganchoPortaEstibas}>
                  Gancho porta estibas (pallets).
                </p>
                <p className={styles.horquillaParaTubos}>
                  Horquilla para tubos.
                </p>
              </div>
            </div>
            <div className={styles.cargadoresFrontales4}>
              <div className={styles.rectangleDiv} />
              <img
                className={styles.image12Icon}
                loading="eager"
                alt=""
                src="/image-12@2x.png"
              />
              <div className={styles.camionMezcladorDeContainer}>
                <p className={styles.camionMezcladorDe}>
                  CAMION MEZCLADOR DE CONCRETO
                </p>
                <p className={styles.blankLine4}>&nbsp;</p>
                <p className={styles.volumenm14}>Volumen(m³): 14</p>
                <p className={styles.velocidadDeAlimentacin}>
                  Velocidad De Alimentación: ≥ 3m³/min
                </p>
                <p className={styles.velocidadDeDescarga}>
                  Velocidad de descarga: ≥ 2m³/min
                </p>
                <p className={styles.tipoDeSuministro}>
                  Tipo De Suministro De Agua
                </p>
                <p className={styles.suministroDeAgua}>
                  Suministro de agua a presión de aire
                </p>
              </div>
            </div>
            <CamionPlataforma
              image10="/image-13@2x.png"
              cAMINPLATAFORMA="MANIPULADOR TELESCOPICO"
              potenciaMximaHprpm="Capacidad máxima de levantamiento"
              prop="3628.74 kg / 8000 lb"
              torqueKgMrpm="Altura máxima de levantamiento"
              kGM12001900RPM="12.78 m / 41 ft 11 in."
              capacidadDeCargaMxima="Alcance máximo"
              toneladas="8.12 m / 26 ft 8 in."
              propPadding="var(--padding-19xl) var(--padding-13xl) var(--padding-19xl) 140px"
              propGap="122px"
              propHeight="346px"
              propWidth="355px"
              propPadding1="var(--padding-9xs) 0px 0px"
            />
            <CamionPlataforma
              image10="/image-14@2x.png"
              cAMINPLATAFORMA="APLANADORA"
              potenciaMximaHprpm="Potencia nominal"
              prop="81kw"
              torqueKgMrpm="Fuerza centrífuga"
              kGM12001900RPM="110/65kn"
              capacidadDeCargaMxima="Peso operativo"
              toneladas="10000kg"
              propPadding="0px var(--padding-13xl) var(--padding-16xl) var(--padding-63xl)"
              propGap="66px"
              propHeight="387px"
              propWidth="469px"
              propPadding1="0px 0px var(--padding-xs)"
            />
            <CamionPlataforma
              image10="/image-15@2x.png"
              cAMINPLATAFORMA="CAMIÓN CISTERNA"
              potenciaMximaHprpm="Capacidad carga bruta"
              prop="11.390 kg"
              torqueKgMrpm="Tracción"
              kGM12001900RPM="4x2"
              capacidadDeCargaMxima="Distancia entre ejes"
              toneladas="5.080 mm"
              propPadding="19px var(--padding-13xl) 0px var(--padding-23xl)"
              propGap="24px"
              propHeight="403px"
              propWidth="551px"
              propPadding1="var(--padding-4xl) 0px 0px"
            />
            <div className={styles.boomReach}>
              <div className={styles.graTelescpicaBoomContainer}>
                <p className={styles.graTelescpica}>GRÚA TELESCÓPICA</p>
                <p className={styles.blankLine5}>&nbsp;</p>
                <p className={styles.boom60Mts}>Boom. 60 mts</p>
                <p className={styles.extensibleHasta95}>
                  Extensible hasta. 95 mts
                </p>
                <p className={styles.capacidad130Tons}>Capacidad. 130 Tons</p>
              </div>
              <div className={styles.grabbingClaw}>
                <div className={styles.extensibleBoom} />
                <img
                  className={styles.image16Icon}
                  loading="eager"
                  alt=""
                  src="/image-16@2x.png"
                />
              </div>
            </div>
            <CargadoresFrontales
              image17="/image-17@2x.png"
              cAMINDETRANSPORTEDEVIDRIO="CAMIÓN DE TRANSPORTE DE VIDRIO"
              motorTurboDiselDe23Litros="Motor turbo diésel de 2,3 Litros y 16 válvulas"
              potenciaDe130HP3500rpm="Potencia de 130 HP @ 3500rpm"
              torqueDe317Kgfm1500Rpm="Torque de 31,7 Kgf.m @ 1500 rpm."
            />
            <CargadoresFrontales
              image17="/image-18@2x.png"
              cAMINDETRANSPORTEDEVIDRIO="FURGÓN SECO"
              motorTurboDiselDe23Litros="Peso: 7.500 Kg"
              potenciaDe130HP3500rpm="Largo carrozable: 4.302 mm"
              torqueDe317Kgfm1500Rpm="Capacidad de carga: 4.782 kg"
              propPadding="var(--padding-5xs) var(--padding-12xl) var(--padding-4xs) 0px"
              propGap="9px"
              propHeight="405px"
              propWidth="609px"
              propPadding1="0px 0px var(--padding-9xs)"
            />
            <div className={styles.cargadoresFrontales5}>
              <div className={styles.cargadoresFrontalesChild1} />
              <img
                className={styles.image13Icon}
                loading="eager"
                alt=""
                src="/image-13-1@2x.png"
              />
              <div className={styles.arrastradorConTenaza648lIiWrapper}>
                <div className={styles.arrastradorConTenazaContainer}>
                  <p className={styles.arrastradorConTenaza}>
                    ARRASTRADOR CON TENAZA
                  </p>
                  <p className={styles.blankLine6}>&nbsp;</p>
                  <p className={styles.lIi}>648L-II</p>
                  <p className={styles.potenciaBruta163}>
                    Potencia Bruta: 163 kW (218 CV)
                  </p>
                  <p className={styles.parMotorBruto}>
                    Par Motor Bruto: 979 Nm (722 pies–lb)
                  </p>
                  <p className={styles.pesoOperativo19}>
                    Peso operativo: 19 054 kg (42 159 lb)
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.cargadoresFrontales6}>
              <div className={styles.cargadoresFrontalesChild2} />
              <img
                className={styles.image19Icon}
                loading="eager"
                alt=""
                src="/image-19@2x.png"
              />
              <div className={styles.transportadorDeTroncosContainer}>
                <p className={styles.transportadorDeTroncos}>
                  TRANSPORTADOR DE TRONCOS
                </p>
                <p className={styles.blankLine7}>&nbsp;</p>
                <p className={styles.alcanceDeLa}>
                  Alcance de la Barra de Pulverización: 7,2 m (23,6 pies) / 8,5
                  m (27,9 pies) / 10 m (32,8 pies)
                </p>
                <p className={styles.esfuerzoDeTraccin}>
                  Esfuerzo de Tracción: 185 kN (41 588 lbf.)
                </p>
                <p className={styles.cargaNominal15}>
                  Carga nominal: 15 000 kg (33 069 lb.)
                </p>
                <p className={styles.potenciaDelMotor}>
                  Potencia del motor: 164 kW (220 CV) a 1700 – 1900 rpm
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VistaAdministradorProducto;
