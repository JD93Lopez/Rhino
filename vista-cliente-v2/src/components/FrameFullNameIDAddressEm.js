import styles from "./FrameFullNameIDAddressEm.module.css";
import React, {useState, useContext, useEffect, useCallback} from 'react';
import { useNavigate } from "react-router-dom";
import { DataContext } from "../components/DataProvider.js";
const FrameFullNameIDAddressEm = () => {

  const navigate = useNavigate();
  const dataContext = useContext(DataContext);

  if(!dataContext.Loaded){
    return <p>Cargando...</p>
  }

  const [currentUser, setCurrentUser] = useState(dataContext.usuarioIniciado);

  const onBotonEditarInformacionClick = useCallback(() => {
    navigate("/ventana-de-editar-informacin-personal");
  }, [navigate]);


  return (
    <div className={styles.frameFullNameIDAddressEm}>
      <div className={styles.rectangleEditInfo}>
        <h1 className={styles.informacinPersonal}> INFORMACIÓN PERSONAL</h1>
      </div>
      <div className={styles.fullnameframe}>
        <div className={styles.fullnameframeChild} />
        <div className={styles.emailframe}>
          <div className={styles.addressframe}>
            <div className={styles.identificationframe}>
              <div className={styles.correo}>
                <div className={styles.nombrecompletoframe}>
                  <b className={styles.nombreCompleto}>{`Nombre Completo: `}</b>
                </div>
                <div className={styles.nombrecompletoframe1}>
                  <b className={styles.identificacin}>{`Identificación: `}</b>
                </div>
                <div className={styles.nombrecompletoframe2}>
                  <b className={styles.correo1}>{`Correo: `}</b>
                </div>
                <b className={styles.telfono}>{`Teléfono: `}</b>
                <div className={styles.nombrecompletoframe3}>
                  <b className={styles.direccin}>{`Dirección: `}</b>
                </div>
              </div>
              <div className={styles.accountinfoframe}>
                <div className={styles.sebastianPicoAfanador}>
                {currentUser.nombreCompleto}
                </div>
                <div className={styles.editinfobutton}>
                {currentUser.nombre_usuario}
                </div>
                <div className={styles.picoafanadorgmailcom}>
                {currentUser.email}
                </div>
                <div className={styles.editinfobutton1}>
                {currentUser.telefono}
                </div>
                <div className={styles.cll18}>
                {currentUser.estado}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.editarinformacinframe} />
        </div>
        <div className={styles.profilepictureframe}>
          <div className={styles.botnEdiotarInformacin}>
            <button className={styles.botnEdiotarInformacinChild} />
            <b className={styles.editarInformacin}onClick={onBotonEditarInformacionClick}>EDITAR INFORMACIÓN</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameFullNameIDAddressEm;
