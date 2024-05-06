import React, {useContext} from 'react';
import './VistaAdministradorLogin.css'; 
import { useNavigate } from 'react-router-dom';
import { DataContext } from "../components/DataProvider";
import axios from '../axios';

const VistaAdministradorLogin = () => {
  
  const dataContext = useContext(DataContext)

  if(!dataContext.Loaded){
    return <p>Cargando...</p>
  }

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.api(`signin/${dataContext.usuarios.usuarioIniciado.nombre_usuario}
    /${dataContext.usuarios.usuarioIniciado.contrasena}`).then((res)=>{
      try {
        if(res.data.Res&&res.data.Res.bool){
          navigate('/vista-administrador-usuarios');
        }
      } catch (e) {}
    })
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
