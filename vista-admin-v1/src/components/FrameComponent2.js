// FrameComponent2.js
import React, { useContext, useState } from "react";
import SeleccionarArchivoText from "./SeleccionarArchivoText";
import styles from "./FrameComponent2.module.css";
import Select from 'react-select';
import ImageUpload from './ImageUpload';
import { DataContext, DataProvider } from "../components/DataProvider";
const FrameComponent2 = () => {

  const [showNotification, setShowNotification] = useState(false);
  const [notificationContent, setNotificationContent] = useState("");
  const dataContext = useContext(DataContext);
  const onSaveButtonClick = () => {
    const nombre=document.getElementById("inputNombreProducto").value;
    const descripcion =document.getElementById("inputdescripcionproducto").value;
    const identificacion =document.getElementById("inputIdProducto").value;
    const precio =document.getElementById("inputprecioproducto").value;
    const modelo =document.getElementById("inputmodeloproducto").value;
    const marca =document.getElementById("inputfabricanteproducto").value;
    const estado = dataContext.estadoProducto;
    const tipo_vehiculo = dataContext.tipoProducto;
    const imagen = dataContext.imagenProducto;
    const product = {
      nombre,
      descripcion,
      identificacion,
      precio,
      marca, 
      modelo,
      tipo_vehiculo,
      imagen,
      estado
    };
    // Convertir el objeto de producto a JSON
    console.log(product.imagen);
    const jsonProducto = JSON.stringify(product);
    
    //TODO conexion axios 
    console.log(jsonProducto);//TODO quitar console.log
 
    //TODO Cambiar el contenido de la notificación
    setNotificationContent("¡Guardadito exitoso!");

    setShowNotification(true);

    // Ocultar la notificación después de 2 segundos
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  const drowpdownTipo = [
    { label: 'Transporte', value: 'Transporte' },
    { label: 'Maquinaria Pesada', value: 'Maquinaria Pesada' },
  ]
  dataContext.drowpdownTipo = drowpdownTipo;

  const drowpdownEstado = [
    { label: 'Disponible', value: 'Disponible' },
    { label: 'Ocupado', value: 'Ocupado' },
    { label: 'Fuera de Servicio', value: 'Fuera de Servicio' },
  ]
  
  dataContext.drowpdownEstado = drowpdownEstado;

  function handleSelectChange(value) {
    dataContext.tipoProducto = value.value
  }
  function handleSelectChangeEstado(value){
    dataContext.estadoProducto = value.value
  }

  let defaultTipo = () => {
    if(dataContext.selectedProducts && dataContext.selectedProducts[0]){
      const product = dataContext.selectedProducts[0]
      return { label: product.tipo_vehiculo, value: product.tipo_vehiculo }
    }
    return 
  }

  let defaultEstado = () => {
    if(dataContext.selectedProducts && dataContext.selectedProducts[0]){
      const product = dataContext.selectedProducts[0]
      return { label: product.estado, value: product.estado }
    }
    return 
  }

  return (
    <div className={styles.frameParent}>
      <div className={styles.productDetailsParent}>

      <ImageUpload />
      </div>
      <div className={styles.priceType}>
        <div className={styles.productPricing}>
          <div className={styles.dropdownTipo}>
            <div className={styles.precio}>Precio Alquiler</div>
            <div className={styles.tipo}>Tipo</div>
          </div>
        </div>
        <div className={styles.productStatus}>
          <div className={styles.vendor}>
            <input className={styles.productState} type="text" id= "inputprecioproducto" useref={ "inputprecioproducto"} />
            <div className={styles.modelo}>Modelo</div>
          </div>

          <div className = " dropdown-Tipo ">
            <Select
              defaultValue={ defaultTipo }
              options = { drowpdownTipo }
              onChange = { handleSelectChange }
              id= "selectTipoProducto"
              useref= "selectTipoProducto"
            />
        </div>          
          
        </div>
        <div className={styles.frameProductInfo}>
          <div className={styles.saveButton}>
            <div className={styles.stateDropdownWrapper}>
              <input className={styles.stateDropdown} type="text" id= "inputmodeloproducto" useref={ "inputmodeloproducto"} />
            </div>
            <div className={styles.estadoDelProducto}>Estado del Producto</div>
          </div>
        </div>
        <div className={styles.labelFabricanteParent}>
          <div className={styles.labelFabricante}>
            <div className={styles.dropdownEstado}>
              <div className={styles.fabricante}>Fabricante</div>
              <input className={styles.dropdownEstadoChild} type="text" id= "inputfabricanteproducto" useref={ "inputfabricanteproducto"}/>
            </div>
          </div>
          <div>
            
          <div className = " dropdown-Estado ">
            <Select
              defaultValue={ defaultEstado }
              options = { drowpdownEstado }
              onChange = { handleSelectChangeEstado }
              id= "selectEstadoProducto"
              useref= "selectEstadoProducto"
            />
        </div>

          </div>
        </div>
      </div>
      <div className={styles.saveButtons}>
        <button className={styles.rectangleParent} onClick={onSaveButtonClick}>
          <div className={styles.rectangleDiv} />
          <div className={styles.guardar}>GUARDAR</div>
        </button>
      </div>
      {showNotification && (
        <div className={styles.notificationContainer}>
          <div className={styles.notification}>{notificationContent}</div>
        </div>
      )}
    </div>
  );
};

export default FrameComponent2;
