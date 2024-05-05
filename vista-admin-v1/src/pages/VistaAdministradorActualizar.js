// VistaAdministradorAgregar.js
import { useCallback, useContext, useEffect, useState } from "react";
import { DataContext } from "../components/DataProvider";
import { useNavigate } from "react-router-dom";
import AddProductFrame from "../components/AddProductFrame";
import SeleccionarArchivoText from "../components/SeleccionarArchivoText";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./VistaAdministradorAgregar.module.css";
import ListaDesplegable1 from "../components/ListaDesplegable1";
import axios from "../axios";


const VistaAdministradorActualizar = () => {
  const navigate = useNavigate();

  const onUSUARIOSTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPROYECTOSTextClick = useCallback(() => {
    navigate("/vista-administrador-proyectos");
  }, [navigate]);

  const onPRODUCTOSTextClick = useCallback(() => {
    navigate("/vista-administrador-productos");
  }, [navigate]);

  const onMantenimientoTextClick = useCallback(() => {
    navigate("/vista-administrador-mantenimiento");
  }, [navigate]);

  const mantenimientos = useCallback(() => {
    navigate("/vista-mantenimiento-producto");
  }, [navigate]);

  const dataContext = useContext(DataContext);
  let product
  if(dataContext.Loaded && dataContext.selectedProducts){
    if(dataContext.selectedProducts.length !== 0){
      product = dataContext.selectedProducts[0];
    }
  }else{
    useEffect(() => {
      navigate("/vista-administrador-productos");
    }, [navigate]);
  }
  
  useEffect(() => {
    const selectedProducts= dataContext.selectedProducts
    if (dataContext.Loaded) {
      document.getElementById("inputNombreProducto").value = selectedProducts[0].nombre;
      document.getElementById("inputdescripcionproducto").value = selectedProducts[0].descripcion;
      document.getElementById("inputIdProducto").value = selectedProducts[0].identificacion;
      document.getElementById("inputprecioproducto").value = selectedProducts[0].precio_alquiler;
      document.getElementById("inputmodeloproducto").value = selectedProducts[0].modelo ;
      document.getElementById("inputfabricanteproducto").value = selectedProducts[0].marca;
      dataContext.estadoProducto = selectedProducts[0].estado
      dataContext.tipoProducto = selectedProducts[0].tipo_vehiculo
      if(selectedProducts[0].imagen!=null){
        dataContext.imagenProducto = selectedProducts[0].imagen
        document.getElementById("imagenProducto").src = selectedProducts[0].imagen;
      }

    }
  }, [dataContext.Loaded, dataContext]);

  const [opciones,setOpciones] = useState()
  const [categoriasProducto,setCategoriasProducto] = useState()

  if(!opciones){
    axios.api(`obtener/categorias`).then((res)=>{
      try {
        let categorias = res.data.Res
        let opciones = []
        for (const categoria of categorias){
          opciones.push({label:categoria.nombre_categoria,value:categoria.idcategorias})
        }
        console.log(opciones)
        setOpciones(opciones)
      } catch (e) {}
    })
  }

  if(!categoriasProducto&&dataContext.Loaded){
    axios.api(`obtener/categoriasPorIdproductos/${dataContext.selectedProducts[0].idproductos}`).then((res)=>{
      try {
        let categorias = res.data.Res
        let opciones = []
        for (const categoria of categorias){
          opciones.push({label:categoria.nombre_categoria,value:categoria.idcategorias})
        }
        console.log(opciones)
        setCategoriasProducto(opciones)
      } catch (e) {}
    })
  }

  const seleccionCategorias = (e) => {
    console.log(e)
    dataContext.categoriasSeleccionadas = e
  }

  const obtenerCategoriasProducto = () => {
    if(!categoriasProducto){
      return []
    }else{
      console.log(categoriasProducto)
      let arr = []

      for (const categoria of categoriasProducto){
        console.log(categoria)
        arr.push(categoria)
      }

      return arr
    }
  }

  const onveragendaClick = useCallback(() => {
    navigate("/vista-administrador-agenda");
  }, [navigate]);

  return (
    <div className={styles.vistaAdministradorAgregar}>
      <div className={styles.vistaAdministradorAgregarChild} />
      <AddProductFrame
        onUSUARIOSTextClick={onUSUARIOSTextClick}
        onPROYECTOSTextClick={onPROYECTOSTextClick}
        onPRODUCTOSTextClick={onPRODUCTOSTextClick}
        onMantenimientoTextClick={onMantenimientoTextClick}
      />
      <div className={styles.createUserFrame}>
        <h1 className={styles.tituloCrearUsuario}>Actualizar Producto</h1>
      </div>
      <main className={styles.productIDRectangle}>
        <section className={styles.descriptionFrame}>
          <div className={styles.productInputFrame}>
            <div className={styles.nombreProductoFrame}>
              <div className={styles.iDProductoFrame}>
                <div className={styles.rectangleProductInfo}>
                  <div className={styles.nombreIDFrame}>
                    <div className={styles.nombreDelProducto}>
                      Nombre del Producto
                    </div>
                    <input className={styles.frame} type="text" id ="inputNombreProducto" useref={ "inputNombreProducto"} />
                  </div>
                  <div className={styles.nombreIDFrame1}>
                    <div className={styles.idDelProducto}>Identificador del Producto</div>
                    <input className={styles.nombreIDFrame1} type="text" id ="inputIdProducto" useref={ "inputIdProducto"} />
                  </div>
                  <div className={styles.pRODUCTOS}>
                    <div className={styles.descripcin}>Descripción</div>
                    <textarea
                      className={styles.mantenimientoText}
                      placeholder="Escribe"
                      rows={18}
                      cols={28}
                      style={{color:"black"}}
                      id ="inputdescripcionproducto" useref={ "inputdescripcionproducto"}
                    />
                     
                  </div>
                  <div className={styles.tituloCrearUsuarioFrame}>
                    <div className={styles.frameCargarSOAT}>
                      <SeleccionarArchivoText cargarSOAT="Cargar S.O.A.T " />
                      <div className={styles.descargarSOAT}>
                        <div
                          className={styles.cargarTcnicoMecnica}
                        >{`Cargar Técnico Mecánica `}</div>
                        <div className={styles.imagenFrame}>
                          <div className={styles.precioTipoFrame}>
                          <input type='file' id ="inputImagenProducto" useref={ "inputImagenProducto"}/> 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.descargarSoatWrapper}>
                  <div
                    className={styles.descargarSoat}
                  >{`Descargar S.O.A.T `}</div>
                  <button>Descargar</button>
                </div>
                <div
                  className={styles.descargarTcnicoMecnica}
                >
                  {`Descargar Técnico Mecánica `}
                  <button>Descargar</button>
                </div>
              </div>
              <div style={{width:"635px"}}>
                {/* lista desplegable con opciones de categorias label categoria y value el id*/}
                {console.log(categoriasProducto)}
                {categoriasProducto&&<ListaDesplegable1
                  className={null}
                  titulo={'Seleccione las categorías'}
                  opciones={opciones?opciones:[]}
                  defaultValue={categoriasProducto}
                  /* defaultValue={[{label:"Metales",value:1},{label:"Vidrios",value:3}]} */
                  onChange={(e)=>{seleccionCategorias(e)}}
                />}
              </div>
              <div>
                <button onClick={mantenimientos} style={{fontSize: "25px", backgroundColor: "orange"}}>
                  Historial de Mantenimientos
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button style={{fontSize: "25px", backgroundColor: "orange"}} onClick={onveragendaClick}>
                  Ver Agendas
                </button>
              </div>
            </div>
          </div>
          <FrameComponent2 />
        </section>
      </main>
    </div>
  );
};

export default VistaAdministradorActualizar;
