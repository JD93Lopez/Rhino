import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CategoryFrame.module.css";
import { TarjetaProducto } from "./TarjetaProducto";

const CategoryFrame = () => {
  const navigate = useNavigate();

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

  let productos = [
    {
      nombre: "Grua manipuladora de metales",
      imagen: "/materiales-sin-fondo-2@2x.png"
    },
    {
      nombre: "Grua manipuladora de metales",
      imagen: "/materiales-sin-fondo-2@2x.png"
    },
    {
      nombre: "Grua manipuladora de metales",
      imagen: "/materiales-sin-fondo-2@2x.png"
    },
    {
      nombre: "Grua manipuladora de metales",
      imagen: "/materiales-sin-fondo-2@2x.png"
    },
    {
      nombre: "Grua manipuladora de metales",
      imagen: "/materiales-sin-fondo-2@2x.png"
    },
    {
      nombre: "Grua manipuladora de metales",
      imagen: "/materiales-sin-fondo-2@2x.png"
    },
    {
      nombre: "Grua manipuladora de metales",
      imagen: "/materiales-sin-fondo-2@2x.png"
    },
    {
      nombre: "Grua manipuladora de metales",
      imagen: "/materiales-sin-fondo-2@2x.png"
    }
  ]

  let dibujarProductos = () => {
    let productosTemp = []
    let oldP
    for( let i=0 ; i<productos.length ; i++ ){
      if( i%2 === 0 ){
        oldP = productos[i]
      }else{
        const p = productos[i]
        productosTemp.push( 
          <tr> 
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
        <tr> 
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
          <input className={styles.machineNameFrame} />

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
            {dibujarProductos().map((tr)=>{
              return tr
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoryFrame;
