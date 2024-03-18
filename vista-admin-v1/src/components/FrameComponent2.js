// FrameComponent2.js
import React, { useState } from "react";
import SeleccionarArchivoText from "./SeleccionarArchivoText";
import styles from "./FrameComponent2.module.css";
import Select from 'react-select';
import ImageUpload from './ImageUpload';

const FrameComponent2 = () => {

  const [showNotification, setShowNotification] = useState(false);
  const [notificationContent, setNotificationContent] = useState("");

  const onSaveButtonClick = () => {
    const nombre=document.getElementById("inputNombreProducto").value;
    const descripcion =document.getElementById("inputdescripcionproducto").value;
    const id =document.getElementById("inputIdProducto").value;
    const precio =document.getElementById("inputprecioproducto").value;
    const modelo =document.getElementById("inputmodeloproducto").value;
    const fabricante =document.getElementById("inputfabricanteproducto").value;
    const product = {
      id,
      nombre,
      descripcion,
      precio,
      tipo: "",
      modelo,
      estado: "",
      fabricante
    };
    // Convertir el objeto de producto a JSON
    const jsonProducto = JSON.stringify(product);
    
    //TODO conexion axios 
    console.log(jsonProducto);//TODO quitar console.log
 
    // Cambiar el contenido de la notificación
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

  const drowpdownEstado = [
    { label: 'Disponible', value: 'Disponible' },
    { label: 'Ocupado', value: 'Ocupado' },
    { label: 'Fuera de Servicio', value: 'Fuera de Servicio' },
  ]

    function handleSelectChange(value) {
      console.log(value);
    }

  return (
    <div className={styles.frameParent}>
      <div className={styles.productDetailsParent}>

      <ImageUpload />
      </div>
      <div className={styles.priceType}>
        <div className={styles.productPricing}>
          <div className={styles.dropdownTipo}>
            <div className={styles.precio}>Precio</div>
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
                options = { drowpdownTipo }
                onChange = { handleSelectChange }
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
                options = { drowpdownEstado }
                onChange = { handleSelectChange }
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
