import styles from "./VistaAdministradorAgregarMant.module.css";
import axios from "../axios.js";
import { useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../components/DataProvider.js";
import AddProductFrame from "../components/AddProductFrame.js";

const VistaAdministradorActualizarMant = () => {
  const navigate = useNavigate();

  const onBotonAtrsContainerClick = useCallback(() => {
    navigate("/vista-administrador-mantenimiento");
  }, [navigate]);

  const onSaveButtonClick = () => {
    // Obtener los valores de los campos utilizando useRef
    const nombremaquinaria = document.getElementById("inputnombreproducto").value;
    const identificacion = document.getElementById("inputidentificacion").value;
    const fecha = document.getElementById("inputfecha").value;
    const descripcion = document.getElementById("inputdescripcion").value;
    // Crear el objeto de usuario
    const usuarioInsertar = {
      nombremaquinaria,
      identificacion,
      fecha,
      descripcion,
    };

    // Convertir el objeto de usuario a JSON
    const JsonUsuario = JSON.stringify(usuarioInsertar);

    console.log(JsonUsuario);
  };
  const dataContext = useContext(DataContext);
  console.log(dataContext)
  let mantenimiento
  if(dataContext.Loaded && dataContext.selectedMant){
    if(dataContext.selectedMant.length !== 0){
      mantenimiento = dataContext.selectedMant[0];
    }
  }else{
    useEffect(() => {
      navigate("/vista-administrador-mantenimiento");
    }, [navigate]);
  }
  
  useEffect(() => {
    const selectedMants= dataContext.selectedMant
    if (dataContext.Loaded) {
      document.getElementById("inputnombreproducto").value = selectedMants[0].nombremaquinaria;
      document.getElementById("inputidentificacion").value = selectedMants[0].identificacion;
      document.getElementById("inputfecha").value = selectedMants[0].fecha;
      document.getElementById("inputdescripcion").value = selectedMants[0].descripcion;
    }
  }, [dataContext.Loaded, dataContext]);

  return (
    <div className={styles.vistaadminadd}>
      <div className={styles.vistaadminaddchild} />
      <AddProductFrame />
      <h1 className={styles.agregarmantenimiento}>Agregar Mantenimiento</h1>

      <div className={styles.Nombre}>Nombre</div>
      <input className={styles.inputNombre} type="text" id="inputnombreproducto" useref= "inputnombreproducto"/>

      <div className={styles.Identificacion}>Identificación</div>
      <input className={styles.inputIdentificacion} type="text" id="inputidentificacion" useref= "inputidentificacion"/>

      <div className={styles.Descripcion}>Descripción</div>
      <textarea className={styles.inputDescripcion} type="text"id="inputdescripcion" useref= "inputdescripcion" />

      <div className={styles.Fecha}>Fecha</div>
      <input className={styles.inputFecha} type="date" id="inputfecha" useref= "inputfecha"/>

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

export default VistaAdministradorActualizarMant;
