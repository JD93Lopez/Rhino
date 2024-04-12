import React, { useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
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

  return (
    <header className={styles.addProductFrame}>
      <div className={styles.editProductFrame}>
        <div className={styles.vistaBackground}>
          <div className={styles.vistaBackgroundChild} />
          <img className={styles.logofinalRemovebgPreview1Icon} loading="eager" alt="" src="/logofinalremovebgpreview-1@2x.png" />
          <div className={styles.userProjecsFrame} style={userProjecsFrameStyle}>
            <nav className={styles.productsFrame}>
              <div className={styles.maintananceText}>
                <div className={styles.usuarios} onClick={onUSUARIOSTextClick}>
                  USUARIOS
                </div>
              </div>
              <div className={styles.maintananceText1}>
                <div className={styles.proyectos} onClick={onPROYECTOSTextClick}>
                  PROYECTOS
                </div>
              </div>
              <div className={styles.createUserTitle}>
                <div className={styles.productos} onClick={onPRODUCTOSTextClick}>
                  PRODUCTOS
                </div>
              </div>
              <div className={styles.mantenimiento} onClick={onMANTENIMIENTOTextClick}>
                MANTENIMIENTO
              </div>
              <div className={styles.cotizacion} onClick={onCOTIZACIONTextClick}>
                COTIZACIÓN
              </div>
            </nav>
          </div>
          <div className={styles.adminProfilePicture}>
            <button className={styles.perfilAdmin}>
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
