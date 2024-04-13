import styles from "./VistaAdministradorAgregarProyect.module.css";
import Select from "react-select";
import axios from "../axios.js";
import { useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext, DataProvider } from "../components/DataProvider.js";
import AddProductFrame from "../components/AddProductFrame.js";

const VistaAdministradorActualizarProyect = () => {
  const navigate = useNavigate();
  const onBotonAtrsContainerClick = useCallback(() => {
    navigate("/vista-administrador-proyectos");
  }, [navigate]);

  const onSaveButtonClick = () => {
    // Obtener los valores de los campos utilizando useRef
    const nombre = document.getElementById("inputnombreusuario").value;
    const telefono = document.getElementById("inputtelefonousuario").value;
    const identificacion = document.getElementById("inputidentificacionusuario").value;
    const estado_avance = dataContext.estadoProyecto;
    const descripcion = document.getElementById("inputtipoidescripcion").value;
    const fecha_entrega = document.getElementById("inputtipofecha").value;
    const tipo_identificacion = dataContext.tipoId;
    // Crear el objeto de usuario
    const usuarioInsertar = {
      nombre,
      identificacion,
      tipo_identificacion,
      telefono,
      descripcion,
      fecha_entrega,
      estado_avance
    };

    // Convertir el objeto de usuario a JSON
    const JsonUsuario = JSON.stringify(usuarioInsertar);
  };

  const dataContext = useContext(DataContext);
  let proyect
  if(dataContext.Loaded && dataContext.selectedProyects){
    if(dataContext.selectedProyects.length !== 0){
      proyect = dataContext.selectedProyects[0];
    }
  }else{
    useEffect(() => {
      navigate("/vista-administrador-actualizar-proyect");
    }, [navigate]);
  }
  
  useEffect(() => {
    const selectedProyects= dataContext.selectedProyects
    if (dataContext.Loaded) {
      document.getElementById("inputnombreusuario").value = selectedProyects[0].nombre;
      document.getElementById("inputidentificacionusuario").value = selectedProyects[0].identificacion;
      document.getElementById("inputtipoidescripcion").value = selectedProyects[0].descripcion;
      document.getElementById("inputtelefonousuario").value = selectedProyects[0].telefono;
      document.getElementById("inputtipoidescripcion").value = selectedProyects[0].descripcion;
      document.getElementById("inputtipofecha").value = selectedProyects[0].fecha_entrega;
    }
  }, [dataContext.Loaded, dataContext]);


  const drowpdownTipoidentificacion = [
    { label: 'Cedula', value: 'Cedula' },
    { label: 'Nit', value: 'Nit' },
  ];
  dataContext.drowpdownTipoidentificacion = drowpdownTipoidentificacion;

  const drowpdownEstadoAvance = [
    { label: 'Por Iniciar', value: 'Por Iniciar' },
    { label: 'Iniciado', value: 'Iniciado' },
    { label: 'Terminado', value: 'Terminado' },
  ];
  dataContext.drowpdownEstadoAvance = drowpdownEstadoAvance;

  function handleSelectChangeEstado(value){
    dataContext.estadoProyecto = value.value
  }

  function handleSelectChangeId(value) {
    dataContext.tipoId = value.value
  }


  let defaultEstado = () => {
    if(dataContext.selectedProyects && dataContext.selectedProyects[0]){
      const proyect = dataContext.selectedProyects[0]
      return { label: proyect.estado_avance, value: proyect.estado_avance }
    }
    return 
  }
  let defaultTipo = () => {
    if(dataContext.selectedProyects && dataContext.selectedProyects[0]){
      const proyect = dataContext.selectedProyects[0]
      return { label: proyect.tipo_identificacion, value: proyect.tipo_identificacion }
    }
    return 
  }

  return (
    
    <div className={styles.vistaadminadd}>
      <div className={styles.vistaadminaddchild} />
      <AddProductFrame />
      <h1 className={styles.agregarproyecto}>Agregar Proyecto</h1>

      <div className={styles.Nombre}>Nombre</div>
      <input className={styles.inputNombre} type="text" id = "inputnombreusuario" useref = "inputnombreusuario"/>

      <div className={styles.Identificacion}>Identificación</div>
      <input className={styles.inputIdentificacion} type="text" id = "inputidentificacionusuario" useref = "inputidentificacionusuario"/>

      <div className=" dropdown-Tipo/identificacion ">
        <div className={styles.tipoidentificacion}>Tipo Identificación</div>
        <Select
          className={styles.dropdownidentificacion}
          defaultValue={ defaultTipo }
          options={drowpdownTipoidentificacion}
          onChange={handleSelectChangeId}
          id = "inputtipoidentificacion"
          useref = "inputtipoidentificacion"
        />
      </div>
      

      <div className=" dropdown-Estado/Avance">
        <div className={styles.avance}>Estado</div>
        <Select
          className={styles.dropdownAvance}
          defaultValue={ defaultEstado }
          options={drowpdownEstadoAvance}
          onChange={handleSelectChangeEstado}
          id = "inputtipoestado"  
          useref = "inputtipoestado"
        />
      </div>

      <div className={styles.Telefono}>Teléfono</div>
      <input className={styles.inputTelefono} type="text" id = "inputtelefonousuario" useref = "inputtelefonousuario"/>

      <div className={styles.Descripcion}>Descripción</div>
      <textarea className={styles.inputDescripcion} type="text"id = "inputtipoidescripcion" useref = "inputtipoidescripcion" />

      <div className={styles.Fecha}>Fecha</div>
      <input className={styles.inputFecha} type="date" id = "inputtipofecha" useref = "inputtipofecha"/>
      

      <footer className={styles.saveButtonFrame}>
        <div className={styles.previousStepButton}>
          <div className={styles.botonAtrs} onClick={onBotonAtrsContainerClick}>
            <button className={styles.backButtonLabel}>
              <div className={styles.backButtonLabelChild} />
              <div className={styles.atrs}>{`Atrás  `}</div>
            </button>
          </div>
          <button
            className={styles.adminProfileFrame}
            onClick={onSaveButtonClick}>
            <div className={styles.adminProfileFrameChild} />
            <div className={styles.guardar}>GUARDAR</div>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default VistaAdministradorActualizarProyect;
