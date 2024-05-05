import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProductFrame from "../components/AddProductFrame";
import TarjetaProveedores from "../components/TarjetaProveedores";
import styles from "./VistaAdministradorVerProveedores.module.css";
import { DataContext } from "../components/DataProvider";
import axios from "../axios";

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

  const [proveedores, setProveedores] = useState();

  if(!proveedores&&dataContext.usuarioIniciado){
    axios.api(`obtener/proveedores/${dataContext.usuarioIniciado.nombre_usuario}/${dataContext.usuarioIniciado.contrasena}`).then((res)=>{
      try {
        setProveedores(res.data.Res)
      } catch (e) {}
    })
  }

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
          {proveedores&&proveedores.map((proveedor)=>{
            return <TarjetaProveedores
              nombre = {proveedor.nombre}
              nit = {proveedor.nit}
              direccion = {proveedor.direccion}
              descripcion = {proveedor.descripcion}
              telefono = {proveedor.telefono}
              object = {proveedor}
            />
          })}
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
