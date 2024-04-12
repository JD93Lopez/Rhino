import { useCallback } from "react";
import GroupComponent from "../components/GroupComponent";
import { useNavigate } from "react-router-dom";
import styles from "./VetanaDeRegistro.module.css";

const VetanaDeRegistro = () => {
  const navigate = useNavigate();
 
 /* const nombre=document.getElementById("inputNombre").value;
  const apellido=document.getElementById("inputApellido").value;
  const email=document.getElementById("inputEmail").value;
  const password=document.getElementById("inputPassword").value;
  const direccion=document.getElementById("inputDireccion").value;
  const identificacion=document.getElementById("inputIdentificacion").value;
  const telefono=document.getElementById("inputTelefono").value;*/
  const onBotonRegistrarse2Click = useCallback(() => {
    const usuario=document.getElementById("inputUsuario").value;
    /*const objUsuario = {
      usuario, 
      nombre,
      apellido,
      email,
      password,
      direccion, 
      identificacion,
      telefono
    };
    console.log(objUsuario);
*/
console.log(usuario)
    navigate("/ventana-inicio-de-sesin");
  }, [navigate, document]);

  return (

    <div className={styles.vetanaDeRegistro}>
      <h1 className={styles.bienvenido}>¡BIENVENIDO!</h1>
      <main className={styles.b8c39214f0aadd21f0e370d549a1d0Parent}>
      <GroupComponent onBotonRegistrarse2Click={onBotonRegistrarse2Click} />

        <img
          className={styles.b8c39214f0aadd21f0e370d549a1d0Icon}
          alt=""
          src="/0b8c39214f0aadd21f0e370d549a1d02-1@2x.png"
        />
        <GroupComponent />
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
