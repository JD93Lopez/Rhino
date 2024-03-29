import styles from "./FrameFullNameIDAddressEm.module.css";
import React, {useState, useContext, useEffect} from 'react';
import { DataContext, usuarios } from "../components/DataProvider.js";
const FrameFullNameIDAddressEm = () => {
  //DESDE ACÁ INICIA MAJO
  const dataContext = useContext(DataContext);
  console.log(usuarios);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  // Lógica para verificar el inicio de sesión y obtener el usuario actual
  useEffect(() => {
    // Ya funciona
    // inicio de sesión en true y se almacena cualquier usuario el usuario actual
      setLoggedIn(true);
      // Supongamos que obtienes el usuario actual de algún lugar, por ahora, seleccionamos el primer usuario de la lista para mostrar
      setCurrentUser(usuarios[2]);
  }, []);

  //ACA FINALIZA MAJO (LOS OTROS CAMBIOS FUERON SOLO EN LO QUE MUESTRA DE INFO)
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
                {currentUser.nombreUsuario}
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
            <div className={styles.botnEdiotarInformacinChild} />
            <b className={styles.editarInformacin}>EDITAR INFORMACIÓN</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameFullNameIDAddressEm;
