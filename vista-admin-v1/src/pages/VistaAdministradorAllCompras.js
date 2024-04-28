import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProductFrame from "../components/AddProductFrame";
import styles from "./VistaAdministradorAllCompras.module.css";
import { DataContext } from "../components/DataProvider";
import TarjetaCompras from "../components/TarjetaCompras";

const VistaAdministradorAllCompras = () => {
    const navigate = useNavigate();
    const dataContext = useContext(DataContext);

    const onUSUARIOSTextClick = useCallback(() => {
        navigate("/vista-administrador-usuarios");
    }, [navigate]);

    const onPROYECTOSTextClick = useCallback(() => {
        navigate("/vista-administrador-proyectos");
    }, [navigate]);

    const onMANTENIMIENTOTextClick = useCallback(() => {
        navigate("/vista-administrador-mantenimiento");
    }, [navigate]);


    return (
        <div className={styles.vistaAdministradorCompras}>
            <div className={styles.vistaAdministradorComprasChild} />
            <AddProductFrame
                onUSUARIOSTextClick={onUSUARIOSTextClick}
                onPROYECTOSTextClick={onPROYECTOSTextClick}
                onMANTENIMIENTOTextClick={onMANTENIMIENTOTextClick}
            />
            <main className={styles.gRUATElescopicaBoomText}>
                <section className={styles.rectangleShape}>
                    <div>
                        <h1 className={styles.tituloCompras}>Compras</h1>
                        <div>
                                <TarjetaCompras />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default VistaAdministradorAllCompras;
