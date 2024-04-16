import { useCallback, useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddressFrame.module.css";
import { DataContext } from "../components/DataProvider.js";

const AddressFrame = () => {
  const navigate = useNavigate();
  const dataContext = useContext(DataContext);

  const [nombre_real, setNombreCompleto] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");

  const onBotonGuardarInformacionClick = useCallback(() => {
    const usuario = {
      nombreCompleto: nombre_real,
      identificacion,
      correo,
      telefono,
      direccion
    };
    console.log(usuario);

    navigate("/ventana-de-informacin-personal");
  }, [nombre_real, identificacion, correo, telefono, direccion, navigate]);

  return (
    <div className={styles.addressFrame}>
      <div className={styles.nameAndIDContainer}>
        <h1 className={styles.informacinPersonal}> INFORMACIÓN PERSONAL</h1>
      </div>
      <div className={styles.infoTextFrame}>
        <div className={styles.infoTextFrameChild} />
        <div className={styles.identificationFrame}>
          <div className={styles.nameInputFrame}>
            <div className={styles.identificationInputFrame}>
              <b className={styles.nombreCompleto}>{`Nombre Completo: `}</b>
              <div className={styles.telefonoInputFrame}>
                <input className={styles.inputNombreCompleto} value={nombre_real} onChange={(e) => setNombreCompleto(e.target.value)} />
              </div>
            </div>
            <div className={styles.identificationInputFrame1}>
              <b className={styles.identificacin}>{`Identificación: `}</b>
              <div className={styles.inputIdentificacin2Wrapper}>
                <input className={styles.inputIdentificacin2} value={identificacion} onChange={(e) => setIdentificacion(e.target.value)} />
              </div>
            </div>
            <div className={styles.identificationInputFrame2}>
              <b className={styles.correo}>{`Correo: `}</b>
              <div className={styles.inputCorreo2Wrapper}>
                <input className={styles.inputCorreo2} value={correo} onChange={(e) => setCorreo(e.target.value)} />
              </div>
            </div>
            <div className={styles.identificationInputFrame3}>
              <b className={styles.telfono}>{`Teléfono: `}</b>
              <div className={styles.inputTelefono2Wrapper}>
                <input className={styles.inputTelefono2} value={telefono} onChange={(e) => setTelefono(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.addressInputFrame}>
          <div className={styles.editInfoFrame}>
            <div className={styles.directionTextFrame}>
              <b className={styles.direccin}>{`Dirección: `}</b>
              <div className={styles.inputAddress2Wrapper}>
                <input className={styles.inputAddress2} value={direccion} onChange={(e) => setDireccion(e.target.value)} />
              </div>
            </div>
          </div>
          <div className={styles.addressInputFrameChild} />
        </div>
        <div className={styles.editBtnFrame}>
          <div className={styles.botnEdiotarInformacin}>
            <div className={styles.botnEdiotarInformacinChild} />
            <button className={styles.guardarInformacin} onClick={onBotonGuardarInformacionClick}>GUARDAR INFORMACIÓN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressFrame;
