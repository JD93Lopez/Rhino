import AddProductFrame from "../components/AddProductFrame.js";
import styles from "./VistaAdministradorAgregarMant.module.css";
import axios from "../axios.js";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const VistaAdministradorAgregarMant = () => {
  const navigate = useNavigate();

  const onBotonAtrsContainerClick = useCallback(() => {
    navigate("/vista-administrador-mantenimiento");
  }, [navigate]);

  const onSaveButtonClick = () => {
    // Obtener los valores de los campos utilizando useRef
    const nombre_producto = document.getElementById("inputnombreproducto").value;
    const identificacion = document.getElementById(
      "inputidentificacion"
    ).value;
    const descripcion = document.getElementById("inputtipoidescripcion").value;
    const fecha = document.getElementById("inputfecha").value;
    // Crear el objeto de usuario
    const usuarioInsertar = {
      nombre_producto,
      identificacion,
      descripcion,
      fecha,
    };

    // Convertir el objeto de usuario a JSON
    const JsonUsuario = JSON.stringify(usuarioInsertar);

    console.log(JsonUsuario);
  };

  return (
    <div className={styles.vistaadminadd}>
      <div className={styles.vistaadminaddchild} />
      <AddProductFrame/>
      <h1 className={styles.agregarmantenimiento}>Agregar Mantenimiento</h1>

      <div className={styles.Nombre}>Nombre</div>
      <input className={styles.inputNombre} type="text" />

      <div className={styles.Identificacion}>Identificación</div>
      <input className={styles.inputIdentificacion} type="text" />

      <div className={styles.Descripcion}>Descripción</div>
      <textarea className={styles.inputDescripcion} type="text" />

      <div className={styles.Fecha}>Fecha</div>
      <input className={styles.inputFecha} type="date" />

      <div className={styles.saveButtonFrame}>
        <div className={styles.previousStepButton}>
          <div className={styles.botonAtrs} onClick={onBotonAtrsContainerClick}>
            <button className={styles.backButtonLabel}>
              <div className={styles.backButtonLabelChild} />
              <div className={styles.atrs}>{`Atrás  `}</div>
            </button>
          </div>
          <button
            className={styles.adminProfileFrame}
            onClick={onSaveButtonClick}
          >
            <div className={styles.adminProfileFrameChild} />
            <div className={styles.guardar}>GUARDAR</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VistaAdministradorAgregarMant;
