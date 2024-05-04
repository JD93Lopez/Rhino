import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProductFrame from "../components/AddProductFrame";
import TarjetaProveedores from "../components/TarjetaProveedores";
import styles from "./VistaAdministradorVerProveedores.module.css";
import { DataContext } from "../components/DataProvider";

const VistaAdministradorVerProveedores = () => {
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

  const onAgregarClick = useCallback(() => {
    navigate("/vista-administrador-proveedores");
  }, [navigate]);

  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    // Lógica para obtener los proveedores desde la API o base de datos
  }, []);

  return (
    <div className={styles.vistaAdministradorProveedores}>
      <div className={styles.vistaAdministradorProveedoresChild} />
      <AddProductFrame
        onUSUARIOSTextClick={onUSUARIOSTextClick}
        onPROYECTOSTextClick={onPROYECTOSTextClick}
        onMANTENIMIENTOTextClick={onMANTENIMIENTOTextClick}
      />
      <h1 className={styles.tituloProveedores}>PROVEEDORES</h1>
      <main>
        <section>
          <div className={styles.tarjetaproveedor}>
          <TarjetaProveedores/>
          </div>
            
            <button className={styles.button} onClick={onAgregarClick} type="submit">
                Agregar Proveedor
              </button>
        </section>
      </main>
    </div>
  );
};

export default VistaAdministradorVerProveedores;
