import { useCallback, useState } from "react";
import GroupComponent from "../components/GroupComponent";
import { useNavigate } from "react-router-dom";
import styles from "./VetanaDeRegistro.module.css";
import axios from "../axios";

const VetanaDeRegistro = () => {
  const navigate = useNavigate();

  const [direccion, setDireccion] = useState("");
  const [correo, setCorreo] = useState("");
  const [nombre_usuario, setUsuario] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [contrasena, setContrasenia] = useState("");
 
  const onBotonRegistrarse2Click = useCallback(() => {
    const usuario = {
      direccion, 
      correo,
      nombre_usuario, 
      identificacion,
      telefono,
      contrasena,
      nombre_real:`${nombre} ${apellido}`,
    };

    //TODO registrar usuario
    axios.post(`registrar/usuario`,usuario).then(()=>{
      navigate("/ventana-inicio-sesion");
    })

  }, [direccion, correo, nombre_usuario, identificacion,telefono, nombre, apellido,contrasena, navigate]);

  return (

    <div className={styles.vetanaDeRegistro}>
      <h1 className={styles.bienvenido}>¡BIENVENIDO!</h1>
      <main className={styles.b8c39214f0aadd21f0e370d549a1d0Parent}>
      <GroupComponent onBotonRegistrarse2Click={onBotonRegistrarse2Click} 
        setDireccion={setDireccion}
        setCorreo={setCorreo}
        setUsuario ={setUsuario}
        setIdentificacion ={setIdentificacion}
        setTelefono={setTelefono}
        setNombre={setNombre}
        setApellido ={setApellido}
        setContrasenia={setContrasenia}
      />

        <img
          className={styles.b8c39214f0aadd21f0e370d549a1d0Icon}
          alt=""
          src="/0b8c39214f0aadd21f0e370d549a1d02-1@2x.png"
        />
        {/* <GroupComponent /> */}
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo@2x.png"
        />
      </main>
      <div className={styles.registerButton}>
      <button className={styles.botnRegistrarse} onClick={onBotonRegistrarse2Click}>
  <div className={styles.botnRegistrarseChild} />
  <div className={styles.registrarse}>REGISTRARSE</div>
</button>

      </div>
    </div>
  );
};

export default VetanaDeRegistro;
