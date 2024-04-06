import { useCallback, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CategoryFrame.module.css";
import { TarjetaProducto } from "./TarjetaProducto";
import orden from "../OrdenamientoSimilitud";
import { DataContext } from "./DataProvider";

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

  const [productos, setProductos] = useState(dataContext.productos)
 
  const buscar = () => {
    const inputValue = document.getElementById("inputbuscarproductos").value;
    let nuevosUsuarios = productos.map((user) => {
      const similitud = orden.calcularSimilitud(inputValue, user.nombre);
      return { usuario: user, similitud: similitud };
    }).sort((a, b) => b.similitud - a.similitud);
    nuevosUsuarios = nuevosUsuarios.map((usuarioSimilitud)=>{
      return usuarioSimilitud.usuario
    })
    setProductos(nuevosUsuarios);
  }

  let dibujarProductos = () => {
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
              />
            </td>  
            <td>
              <TarjetaProducto
                nombre={p.nombre}
                imagen={p.imagen}
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
            />
          </td>
        </tr> 
      )
    }
    return productosTemp
  }

  return (
    <div className={styles.categoryFrame}>
      <div className={styles.groupFrame}>
        <div className={styles.productItemFrame}>
          <input className={styles.machineNameFrame} id="inputbuscarproductos" useref="inputbuscarproductos"/>

          <div className={styles.vectorFrame}>
            <div className={styles.machineryFrame}>
              <div className={styles.machineryFrameChild} />
              <b className={styles.maquinaria}>MAQUINARIA</b>
              <div className={styles.vectorFrame1}>
                <img
                  className={styles.cartButtonFrame}
                  alt=""
                  src="/cart-button-frame.svg"
                />
              </div>
            </div>
            <div className={styles.wheelsFrame}>
              <div className={styles.machineNameFrame1}>
                <div className={styles.machineNameFrameChild} />
                <b className={styles.vehculos}>VEHÍCULOS</b>
                <div className={styles.vectorFrame2}>
                  <img
                    className={styles.groupFrameIcon}
                    alt=""
                    src="/cart-button-frame.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        < div >
          <table>
            <tbody>
              {dibujarProductos().map((tr)=>{
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
