import React, { useCallback, useContext } from 'react'
import styles from "./CategoryFrame.module.css";
import { useNavigate } from 'react-router-dom';
import { DataContext } from './DataProvider';

export const TarjetaProducto = ({nombre, imagen, object}) => {
    const navigate = useNavigate();

    const dataContext = useContext(DataContext)

    const onMaterialesSinFondo2Click = useCallback(() => {
      navigate("/informacin-de-cada-producto");
    }, [navigate]);
  
    const onBotonDetallesClick = useCallback(() => {
        dataContext.productoSeleccionadoParaDetalles = object
        navigate("/informacin-de-cada-producto");
    }, [navigate, object, dataContext]);
  
    const onBotonDetalles1Click = useCallback(() => {
      navigate("/informacin-de-cada-producto");
    }, [navigate]);
  
    const onBotonDetalles2Click = useCallback(() => {
      navigate("/informacin-de-cada-producto");
    }, [navigate]);
  
    const onBotonDetalles3Click = useCallback(() => {
      navigate("/informacin-de-cada-producto");
    }, [navigate]);

    return (
        <div style={{margin:"10px"}}>
            <div className={styles.materialesSinFondo2Parent}>
                <img
                    className={styles.materialesSinFondo2}
                    loading="lazy"
                    alt=""
                    src={imagen}
                    onClick={onMaterialesSinFondo2Click}
                />
                <div className={styles.frameChild} />
                <div className={styles.detailsButtonFrame}>
                <div className={styles.addToCartButtonFrame}>
                    <div className={styles.productBox}>
                    <div className={styles.detallesFrame}>
                        <div className={styles.nombreMaquina}>
                        <p className={styles.manipuladoraDe} style={{ color: "white", fontSize: " 30px " }}>{nombre} - {object.modelo}</p>
                        </div>
                    </div>
                    <button
                        className={styles.botonDetalles}
                        onClick={onBotonDetallesClick}
                    >
                        <b className={styles.detalles}>DETALLES</b>
                    </button>
                    </div>
                    <div className={styles.vectorElement}>
                    {/* <button className={styles.botonAgregarCarrito}>
                        <img
                            className={styles.anadirAlCarrito1Icon}
                            alt=""
                            src="/anadiralcarrito-1@2x.png"
                        />
                    </button> */}
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
