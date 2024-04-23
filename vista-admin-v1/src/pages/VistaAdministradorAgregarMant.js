import AddProductFrame from "../components/AddProductFrame.js";
import styles from "./VistaAdministradorAgregarMant.module.css";
import axios from "../axios.js";
import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../components/DataProvider.js";

const VistaAdministradorAgregarMant = () => {
  const dataContext = useContext(DataContext)

  const navigate = useNavigate();

  const onBotonAtrsContainerClick = useCallback(() => {
    navigate("/vista-administrador-mantenimiento");
  }, [navigate]);
  
  const onSaveButtonClick = () => {
    // Obtener los valores de los campos utilizando useRef
    const nombremaquinaria = document.getElementById("inputnombreproducto").value;
    const productos_idproductos = document.getElementById("inputidentificacion").value;
    const fechamantenimiento = document.getElementById("inputfecha").value;
    const descripcion = document.getElementById("inputdescripcion").value;
    // Crear el objeto de usuario
    const mantenimientoInsertar = {
      nombremaquinaria,
      fechamantenimiento,
      fecharegistro: fechamantenimiento,
      descripcion,
      precio:0 // TODO agregar precio front
    };

    if(dataContext.selectedMant&&dataContext.selectedMant.length!=0){
      mantenimientoInsertar.idhistorialmantenimientos = dataContext.selectedMant[0].idhistorialmantenimientos
      mantenimientoInsertar.productos_idproductos = dataContext.selectedMant[0].producto.idproductos
      axios.post(`actualizar/mantenimiento/${dataContext.usuarioIniciado.nombre_usuario}/${dataContext.usuarioIniciado.contrasena}`,mantenimientoInsertar)
    }else{
      mantenimientoInsertar.productos_idproductos = productos_idproductos
      axios.post(`agregar/mantenimiento/${dataContext.usuarioIniciado.nombre_usuario}/${dataContext.usuarioIniciado.contrasena}`,mantenimientoInsertar)
    }

  };

  return (
    <div className={styles.vistaadminadd}>
      <div className={styles.vistaadminaddchild} />
      <AddProductFrame/>
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

export default VistaAdministradorAgregarMant;
