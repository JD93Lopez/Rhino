import ProjectFrame from "../components/ProjectFrame";
import styles from "./VistaAdministradorAgregarProyect.module.css";
import Select from "react-select";
import axios from "../axios.js";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const VistaAdministradorAgregarProyect = () => {
  const navigate = useNavigate();

  const onBotonAtrsContainerClick = useCallback(() => {
    navigate("/vista-administrador-proyectos");
  }, [navigate]);

  const onSaveButtonClick = () => {
    // Obtener los valores de los campos utilizando useRef
    const nombre = document.getElementById("inputnombreusuario").value;
    const telefono = document.getElementById("inputtelefonousuario").value;
    const identificacion = document.getElementById(
      "inputidentificacionusuario"
    ).value;
    const estado = document.getElementById("inputtipoestado").value;
    const descripcion = document.getElementById("inputtipoidescripcion").value;
    const fecha = document.getElementById("inputtipofecha").value;
    const tipo_identificacion = document.getElementById(
      "inputtipoidentificacion"
    ).value;
    // Crear el objeto de usuario
    const usuarioInsertar = {
      nombre,
      telefono,
      identificacion,
      tipo_identificacion,
      estado,
      descripcion,
      fecha,
    };

    // Convertir el objeto de usuario a JSON
    const JsonUsuario = JSON.stringify(usuarioInsertar);

    console.log(JsonUsuario);
  };
  const drowpdownTipoidentificacion = [
    { label: "Cedula", value: "Cedula" },
    { label: "Nit", value: "Nit" },
  ];

  const drowpdownEstadoAvance = [
    { label: "Por Iniciar", value: "Por Iniciar" },
    { label: "Iniciado", value: "Iniciado" },
    { label: "Terminado", value: "Terminado" },
  ];

  function handleSelectChange(value) {
    console.log(value);
  }

  return (
    <div className={styles.vistaadminadd}>
      <div className={styles.vistaadminaddchild} />
      <ProjectFrame />
      <h1 className={styles.agregarproyecto}>Agregar Proyecto</h1>

      <div className={styles.Nombre}>Nombre</div>
      <input className={styles.inputNombre} type="text" />

      <div className={styles.Identificacion}>Identificación</div>
      <input className={styles.inputIdentificacion} type="text" />

      <div className=" dropdown-Tipo/identificacion ">
        <div className={styles.tipoidentificacion}>Tipo Identificación</div>
        <Select
          className={styles.dropdownidentificacion}
          options={drowpdownTipoidentificacion}
          onChange={handleSelectChange}
        />
      </div>

      <div className=" dropdown-Estado/Avance">
        <div className={styles.avance}>Estado</div>
        <Select
          className={styles.dropdownAvance}
          options={drowpdownEstadoAvance}
          onChange={handleSelectChange}
        />
      </div>

      <div className={styles.Telefono}>Teléfono</div>
      <input className={styles.inputTelefono} type="text" />

      <div className={styles.Descripcion}>Descripción</div>
      <textarea className={styles.inputDescripcion} type="text" />

      <div className={styles.Fecha}>Fecha</div>
      <input className={styles.inputFecha} type="date" />

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
            onClick={onSaveButtonClick}
          >
            <div className={styles.adminProfileFrameChild} />
            <div className={styles.guardar}>GUARDAR</div>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default VistaAdministradorAgregarProyect;
