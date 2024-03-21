import React from 'react';
import './VistaAdministradorLogin.css'; 
import { useNavigate } from 'react-router-dom';

const VistaAdministradorLogin = () => {
const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    console.log("Formulario enviado");
    navigate('/vista-administrador-usuarios'); 
  };


  return (
    <form className="form" onSubmit={handleSubmit}>
      <p id="heading">Inicio de Sesion Administrador</p>
      <img src="/logofinalremovebgpreview-1@2x.png" alt="Logo" className="logo" />
      <div className="field">
        <input autoComplete="off" placeholder="Usuario" className="input-field" type="text" />
      </div>
      <div className="field">
        <input placeholder="Contraseña" className="input-field" type="password" />
      </div>
      <div className="btn">
        <button type="submit" className="button1">Iniciar Sesion</button>
      </div>     
    </form>
    
  );
};

export default VistaAdministradorLogin;
