import React, {useContext} from 'react';
import './VistaAdministradorLogin.css'; 
import { useNavigate } from 'react-router-dom';
import { DataContext } from "../components/DataProvider";

const VistaAdministradorLogin = () => {
  
  const dataContext = useContext(DataContext)

  if(!dataContext.Loaded){
    return <p>Cargando...</p>
  }

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario

    //TODO iniciar sesion AXIOS

    navigate('/vista-administrador-usuarios'); //TODO solo cambia pantalla si se inicia sesion
  };

  let nombreChange = (e)=>{
    dataContext.usuarios.usuarioIniciado.nombre_usuario = e.target.value
  }

  let constrasenaChange = (e)=>{
    dataContext.usuarios.usuarioIniciado.contrasena = e.target.value
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p id="heading">Inicio de Sesion Administrador</p>
      <img src="/logofinalremovebgpreview-1@2x.png" alt="Logo" className="logo" />
      <div className="field">
        <input autoComplete="off" placeholder="Usuario" className="input-field" type="text" id='campoNombre' useref='campoNombre' onChange={nombreChange}/>
      </div>
      <div className="field">
        <input placeholder="Contraseña" className="input-field" type="password" id='campoContrasena' useref='campoContrasena' onChange={constrasenaChange}/>
      </div>
      <div className="btn">
        <button type="submit" className="button1">Iniciar Sesion</button>
      </div>     
    </form>
    
  );
};

export default VistaAdministradorLogin;
