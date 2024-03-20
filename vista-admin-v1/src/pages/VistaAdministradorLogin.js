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
      <div className="field">
        <input autoComplete="off" placeholder="Username" className="input-field" type="text" />
      </div>
      <div className="field">
        <input placeholder="Password" className="input-field" type="password" />
      </div>
      <div className="btn">
        <button type="submit" className="button1">Login</button>
        <button type="button" className="button2">Sign Up</button>
      </div>
      <button type="button" className="button3">Forgot Password</button>
      
    </form>
    
  );
};

export default VistaAdministradorLogin;
