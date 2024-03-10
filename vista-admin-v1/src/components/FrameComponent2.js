// FrameComponent2.js
import React, { useState } from "react";
import SeleccionarArchivoText from "./SeleccionarArchivoText";
import styles from "./FrameComponent2.module.css";

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

  return (
    <div className={styles.frameParent}>
      <div className={styles.productDetailsParent}>
        <SeleccionarArchivoText
          cargarSOAT="Imagen"
          propPadding="0px var(--padding-12xs) 0px 0px"
          propPadding1="var(--padding-9xs) var(--padding-12xs) var(--padding-10xs) var(--padding-6xs)"
        />
        <div className={styles.imageUpload} />
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
          <div className={styles.dropdownTipo1}>
            <div className={styles.dropdownTipoChild} />
            <div className={styles.selectDropdown}>
              <div className={styles.seleccionarParent}>
                <div className={styles.seleccionar}>Seleccionar</div>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/polygon-2.svg"
                />
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.transporteWrapper}>
                  <div className={styles.transporte}>Transporte</div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.maquinariaPesadaWrapper}>
                  <div className={styles.maquinariaPesada}>
                    Maquinaria pesada
                  </div>
                </div>
              </div>
              <div className={styles.frameItem} />
              <div className={styles.frameInner} />
            </div>
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
          <select id="myDropdown" name="myDropdownName">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>

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
