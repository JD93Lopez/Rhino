import React from 'react'
import styles from "../pages/HistorialDeCotizaciones.module.css";
import { TarjetaProductoCotizacion } from './TarjetaProductoCotizacion';

export const TarjetaDespliegueCotizacion = ({object}) => {

    const producto_agendas = object.producto_agendas

    return (
        <div className={styles.rectangleGroup}>
            <div className={styles.frameInner} />
            <div className={styles.frameDiv}>
                <div className={styles.textoInfoWrapper}>
                    <b className={styles.textoInfo}>PRECIO</b>
                </div>
                <br/>
                {
                    producto_agendas.map((pa)=>{
                        return <TarjetaProductoCotizacion
                            object={pa}
                        />
                    })
                }
                {            
                    object.valor_conductores&&<div className={styles.frameParent1}>
                        <div className={styles.frameParent2}>
                            <div className={styles.imagenMaquinaCarritoParent}>
                            </div>
                            <div style={{display:"flex",flexDirection:"row"}}>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <div style={{display:"flex",flexDirection:"column"}}>
                                    <b>CONDUCTORES:</b>
                                </div>
                            </div>
                        </div>
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <b>{object.valor_conductores}</b>
                        </div>
                    </div>
                }
                {            
                    object.gastos_adicionales&&<div className={styles.frameParent1}>
                        <div className={styles.frameParent2}>
                            <div className={styles.imagenMaquinaCarritoParent}>
                            </div>
                            <div style={{display:"flex",flexDirection:"row"}}>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <div style={{display:"flex",flexDirection:"column"}}>
                                    <br/>
                                    <div style={{display:"flex",flexDirection:"row"}}>
                                        <b>OTROS GASTOS: &nbsp;</b>
                                        <p>
                                            <b>
                                                {object.justificacion_ga}
                                            </b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <b>{object.gastos_adicionales}</b>
                            <br/>
                        </div>
                    </div>
                }

            </div>
            <footer className={styles.frameFooter}>
                <div className={styles.lineParent}>
                    <div className={styles.lineDiv} />
                    <div className={styles.historicInfo}>
                        <div className={styles.cotizacionLabel}>
                            <b className={styles.textoInfo5}>VALOR TOTAL:</b>
                            <b className={styles.textoInfo6}>{object.total?object.total:object.subtotal}</b>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
