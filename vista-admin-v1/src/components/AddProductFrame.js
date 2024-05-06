import React, { useContext, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Importa useNavigate
import styles from './AddProductFrame.module.css';
import { DataContext } from "./DataProvider";

const AddProductFrame = ({ maintananceTextPadding }) => {
  const navigate = useNavigate();

  // Definir funciones de navegación dentro del componente
  const onUSUARIOSTextClick = () => navigate('/vista-administrador-usuarios');
  const onPROYECTOSTextClick = () => navigate('/vista-administrador-proyectos');
  const onPRODUCTOSTextClick = () => navigate('/vista-administrador-productos'); 
  const onMANTENIMIENTOTextClick = () => navigate('/vista-administrador-mantenimiento');
  const onCOTIZACIONTextClick = () => navigate('/vista-administrador-cotizacion'); 
  const onCOMPRASTextClick = () => navigate('/vista-administrador-all-compras');
  const onPROVEEDORESTextClick = () => navigate('/vista-administrador-ver-proveedores');
  const onINFORMESTextClick = () => navigate('/vista-administrador-informes');

  const userProjecsFrameStyle = useMemo(() => ({
    padding: maintananceTextPadding,
  }), [maintananceTextPadding]);

  const dataContext = useContext(DataContext);

  let nombre_usuario

  if (!dataContext.Loaded) {
    return <div>Cargando... Por favor espere.</div>;
  }else{
    nombre_usuario = dataContext.usuarios.usuarioIniciado.nombre_usuario
  }

  function subrayado ( option ) {

    const pathname = useLocation().pathname

    switch(option){
      case 1:
        if(
          pathname==="/vista-administrador-usuarios"||
          pathname==="/vista-administrador-usuarios-crear-usuarioactualizar-usuario"||
          pathname==="/vista-administrador-usuarios-actualizar-usuario"
        ){
          return {textDecoration: "underline"}
        }
        break;
      case 2:
        if(
          pathname==="/vista-administrador-proyectos"||
          pathname==="/vista-administrador-agregar-proyect"||
          pathname==="/vista-administrador-actualizar-proyect"
        ){
          return {textDecoration: "underline"}
        }
        break;
      case 3:
        if(
          pathname==="/vista-administrador-productos"||
          pathname==="/vista-administrador-productoeditar-producto"||
          pathname==="/vista-administrador-agregar-productoeditar-producto"||
          pathname==="/vista-mantenimiento-producto"
        ){
          return {textDecoration: "underline"}
        }
        break;
      case 4:
        if(
          pathname==="/vista-administrador-mantenimiento"||
          pathname==="/vista-administrador-agregar-mantenimiento"||
          pathname==="/vista-administrador-actualizar-mant"
        ){
          return {textDecoration: "underline"}
        }
        break;
      case 5:
        if(
          pathname==="/vista-administrador-cotizacion"||
          pathname==="/vista-administrador-ver-cotizacion"||
          pathname==="/vista-administrador-cotizacion-producto"
        ){
          return {textDecoration: "underline"}
        }
        break;
      case 6:
        if(
          pathname==="/vista-administrador-compras"||
          pathname==="/vista-administrador-all-compras"
        ){
          return {textDecoration: "underline"}
        }
        break;
      case 7:
        if(
          pathname==="/vista-administrador-proveedores" ||
          pathname==="/vista-administrador-ver-proveedores"
        ){
          return {textDecoration: "underline"}
        }
        break;
      case 8:
        if(
          pathname==="/vista-administrador-informes" 
        ){
          return {textDecoration: "underline"}
        }
        break;
      default:
    }
    return {}
  }

  const iniciarSesion = () => {
    navigate(`/`)
  }

  return (
    <header className={styles.addProductFrame}>
      <div className={styles.editProductFrame}>
        <div className={styles.vistaBackground}>
          <div className={styles.vistaBackgroundChild} />
          <img className={styles.logofinalRemovebgPreview1Icon} loading="eager" alt="" src="/logofinalremovebgpreview-1@2x.png" />
          <div className={styles.userProjecsFrame} style={userProjecsFrameStyle}>
            <nav className={styles.productsFrame}>
              <div className={styles.maintananceText}>
                <div className={styles.usuarios} onClick={onUSUARIOSTextClick} style={subrayado(1)}>
                  USUARIOS
                </div>
              </div>
              <div className={styles.maintananceText1}>
                <div className={styles.proyectos} onClick={onPROYECTOSTextClick} style={subrayado(2)}>
                  PROYECTOS
                </div>
              </div>
              <div className={styles.createUserTitle}>
                <div className={styles.productos} onClick={onPRODUCTOSTextClick} style={subrayado(3)}>
                  PRODUCTOS
                </div>
              </div>
              <div className={styles.mantenimiento} onClick={onMANTENIMIENTOTextClick} style={subrayado(4)}>
                MANTENIMIENTO
              </div>
              <div className={styles.cotizacion} onClick={onCOTIZACIONTextClick} style={subrayado(5)}>
                COTIZACIÓN
              </div>
              <div className={styles.compras} onClick={onCOMPRASTextClick} style={subrayado(6)}>
                COMPRAS
              </div>
              <div className={styles.proveedores} onClick={onPROVEEDORESTextClick} style={subrayado(7)}>
                PROVEEDORES
              </div>
              <div className={styles.informes} onClick={onINFORMESTextClick} style={subrayado(8)}>
                INFORME ACTIVOS
              </div>
            </nav>
          </div>
          <div className={styles.adminProfilePicture}>
            <button className={styles.perfilAdmin} onClick={iniciarSesion}>
              <img className={styles.usuario1Icon} alt="" src="/usuario-1@2x.png" />
              <div className={styles.perfilAdminChild} />
              <div className={styles.administrador}>{nombre_usuario}</div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AddProductFrame;
