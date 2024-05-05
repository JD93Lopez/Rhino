import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProductFrame from "../components/AddProductFrame";
import styles from "./VistaAdministradorProveedores.module.css";
import { DataContext } from "../components/DataProvider";
import axios from "../axios";

const VistaAdministradorProveedores = () => {
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

  const [nombre, setNombre] = useState("");
  const [nit, setNit] = useState("");
  const [direccion, setDireccion] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [telefono, setTelefono] = useState("");

  const [hayProveedor,setHayProveedor] = useState(true);
  if(dataContext.proveedorSeleccionado){
    const proveedor = dataContext.proveedorSeleccionado
    setNombre(proveedor.nombre)
    setNit(proveedor.nit)
    setDireccion(proveedor.direccion)
    setDescripcion(proveedor.descripcion)
    setTelefono(proveedor.telefono)
    dataContext.proveedorSeleccionado = undefined
    setHayProveedor(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const proveedor = {
      nombre,
      nit,
      direccion,
      descripcion,
      telefono,
    };

    axios.post(`agregar/proveedor/${dataContext.usuarioIniciado.nombre_usuario}/${dataContext.usuarioIniciado.contrasena}`,proveedor)

    // Restablecer los valores del formulario
    setNombre("");
    setNit("");
    setDireccion("");
    setDescripcion("");
    setTelefono("");
  };

  return (
    <div className={styles.vistaAdministradorProveedores}>
      <div className={styles.vistaAdministradorProveedoresChild} />
      <AddProductFrame
        onUSUARIOSTextClick={onUSUARIOSTextClick}
        onPROYECTOSTextClick={onPROYECTOSTextClick}
        onMANTENIMIENTOTextClick={onMANTENIMIENTOTextClick}
      />
          <h1 className={styles.tituloProveedores}>AGREGAR PROVEEDORES</h1>
      <main>
        <section>
          <div>
            <form
              onSubmit={handleSubmit}
              className={styles.form}
            >
              <div className={styles.formField1}>
                <label className={styles.label} htmlFor="nombre">Nombre:</label>
                <input
                  className={styles.input}
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={nombre}
                  onChange={(event) => setNombre(event.target.value)}
                  required
                />
              </div>

              <div className={styles.formField1}>
                <label className={styles.label} htmlFor="nit">NIT:</label>
                <input
                  className={styles.input}
                  type="text"
                  id="nit"
                  name="nit"
                  value={nit}
                  onChange={(event) => setNit(event.target.value)}
                  required
                />
              </div>

              <div className={styles.formField1}>
                <label className={styles.label} htmlFor="direccion">Dirección:</label>
                <input
                  className={styles.input}
                  type="text"
                  id="direccion"
                  name="direccion"
                  value={direccion}
                  onChange={(event) => setDireccion(event.target.value)}
                  required
                />
              </div>

              <div className={styles.formField2}>
                <label className={styles.label} htmlFor="descripcion">Descripción:</label>
                <textarea
                  className={styles.input1}
                  id="descripcion"
                  name="descripcion"
                  value={descripcion}
                  onChange={(event) => setDescripcion(event.target.value)}
                  required
                />
              </div>

              <div className={styles.formField3}>
                <label className={styles.label} htmlFor="telefono">Teléfono:</label>
                <input
                  className={styles.input}
                  type="text"
                  id="telefono"
                  name="telefono"
                  value={telefono}
                  onChange={(event) => setTelefono(event.target.value)}
                  required
                />
              </div>
              {hayProveedor&&<button className={styles.button} type="submit">
                Agregar
              </button>}
            </form>

          </div>
        </section>
      </main>
    </div>
  );
};

export default VistaAdministradorProveedores;
