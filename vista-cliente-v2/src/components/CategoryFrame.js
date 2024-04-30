import { useCallback, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CategoryFrame.module.css";
import { TarjetaProducto } from "./TarjetaProducto";
import orden from "../OrdenamientoSimilitudFiltros";
import { DataContext } from "./DataProvider";
import ListaDesplegable1 from "./ListaDesplegable1";
import axios from "../axios";

const CategoryFrame = () => {

  const navigate = useNavigate();
  const dataContext = useContext(DataContext)

  const onMaterialesSinFondo2Click = useCallback(() => {
    navigate("/informacin-de-cada-producto");
  }, [navigate]);

  const onBotonDetallesClick = useCallback(() => {
    navigate("/informacin-de-cada-producto");
  }, [navigate]);

  const onBotonDetalles1Click = useCallback(() => {
    navigate("/informacin-de-cada-producto");
  }, [navigate]);

  const onBotonDetalles2Click = useCallback(() => {
    navigate("/informacin-de-cada-producto");
  }, [navigate]);

  const onBotonDetalles3Click = useCallback(() => {
    navigate("/informacin-de-cada-producto");
  }, [navigate]);

  if(!dataContext.Loaded){
    return <p>Cargando...</p>
  }

  const [productos, setProductos] = useState()

  if(!productos){
    axios.api(`obtener/productosYCategorias`).then((res)=>{
      try{
        setProductos(res.data.Res)
      }catch(e){}
    })
  }
 
  const buscar = () => {
    if(!productos){
      return
    }
    if(document.getElementById("inputbuscarproductos")){
      const inputValue = document.getElementById("inputbuscarproductos").value;
      let nuevosUsuarios = productos.map((producto) => {
        const similitud = orden.calcularSimilitud2(inputValue, producto.nombre, producto, dataContext.selectedFilters1, dataContext.selectedFilters2);
        return { usuario: producto, similitud: similitud };
      }).sort((a, b) => b.similitud - a.similitud);
      nuevosUsuarios = nuevosUsuarios.map((usuarioSimilitud)=>{
        return usuarioSimilitud.usuario
      })
      setProductos(nuevosUsuarios);
    }
  }

  let dibujarProductos = () => {
    if(!productos){
      return
    }
    if(productos.length===1){
      return [
        <tr key={1}> 
          <td>
            <TarjetaProducto
              nombre={productos[0].nombre}
              imagen={productos[0].imagen}
              object={productos[0]}
            />
          </td>
        </tr> 
      ]
    }
    let productosTemp = []
    let oldP
    let i = 0
    for( i=0 ; i<productos.length ; i++ ){
      if( i%2 === 0 ){
        oldP = productos[i]
      }else{
        const p = productos[i]
        productosTemp.push( 
          <tr key={i/2}> 
            <td>
              <TarjetaProducto
                nombre={oldP.nombre}
                imagen={oldP.imagen}
                object={oldP}
              />
            </td>  
            <td>
              <TarjetaProducto
                nombre={p.nombre}
                imagen={p.imagen}
                object={p}
              />
            </td> 
          </tr> 
        )
        oldP = null
      }
    }
    if(oldP){
      productosTemp.push( 
        <tr key={i/2}> 
          <td>
            <TarjetaProducto
              nombre={oldP.nombre}
              imagen={oldP.imagen}
              object={oldP}
            />
          </td>
        </tr> 
      )
    }
    return productosTemp
  }

  let handleDesplegableMaquinarias = (e) => {
    
    dataContext.selectedFilters1 = []

    e.forEach(el => {
      dataContext.selectedFilters1.push(el.value)
      buscar()
    });
  }

  let handleDesplegableTransporte = (e) => {

    dataContext.selectedFilters2 = []

    e.forEach(el => {
      dataContext.selectedFilters2.push(el.value)
      buscar()
    });
  }

  function revisarBuscadoDeOtraPagina(){
    const buscado = dataContext.buscadoDesdeOtraPagina
    dataContext.buscadoDesdeOtraPagina = ""
    if(buscado!==""){
      setTimeout(()=>{
        buscar()
      },100)
    }
    return buscado
  }

  return (
    <div className={styles.categoryFrame}>
      <div className={styles.groupFrame}>
        <div className={styles.productItemFrame}>
          <input className={styles.machineNameFrame} id="inputbuscarproductos" useref="inputbuscarproductos" onChange={buscar} defaultValue={revisarBuscadoDeOtraPagina()}/>
          <div className={styles.vectorFrame}>
            {/* <div className={styles.machineryFrame}>
            </div> */}
            <ListaDesplegable1
              className={styles.maquinaria}
              titulo={"TIPOS DE MAQUINARIA"}
              onChange={handleDesplegableMaquinarias}
              opciones={
                [
                  {value: "Metales", label:"Metales"},
                  {value: "Vehiculo 2", label:"Vehiculo2"},
                  {value: "Vehiculo 3", label:"Vehiculo3"},
                  {value: "Vehiculo 4", label:"Vehiculo4"}
                ]
              }
            ></ListaDesplegable1>
            <div> {/*Estos br son pa dar espacio entre los desplegables que si no se solapan*/}
              <br></br> 
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>         
            <ListaDesplegable1
              className={styles.maquinaria}
              titulo={"TIPOS DE TRANSPORTE"}
              onChange={handleDesplegableTransporte}
              opciones={
                [
                  {value: "Transporte 1", label:"Transporte1"},
                  {value: "Transporte 2", label:"Transporte2"},
                  {value: "Transporte 3", label:"Transporte3"},
                  {value: "Transporte 4", label:"Transporte4"}
                ]
              }
            ></ListaDesplegable1>
            <div className={styles.wheelsFrame}>
            </div>
          </div>
        </div>
        < div >
          <table>
            <tbody>
              {productos&&dibujarProductos().map((tr)=>{
                return tr
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoryFrame;
