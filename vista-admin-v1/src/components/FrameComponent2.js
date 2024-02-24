import SeleccionarArchivoText from "./SeleccionarArchivoText";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
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
            <input className={styles.productState} type="text" />
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
              <input className={styles.stateDropdown} type="text" />
            </div>
            <div className={styles.estadoDelProducto}>Estado del Producto</div>
          </div>
        </div>
        <div className={styles.labelFabricanteParent}>
          <div className={styles.labelFabricante}>
            <div className={styles.dropdownEstado}>
              <div className={styles.fabricante}>Fabricante</div>
              <input className={styles.dropdownEstadoChild} type="text" />
            </div>
          </div>
          <div className={styles.dropdownEstado1}>
            <div className={styles.seleccionarGroup}>
              <div className={styles.seleccionar1}>Seleccionar</div>
              <img className={styles.polygonIcon} alt="" src="/polygon-2.svg" />
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.disponibleWrapper}>
                <div className={styles.disponible}>Disponible</div>
              </div>
              <div className={styles.ocupadoWrapper}>
                <div className={styles.ocupado}>Ocupado</div>
              </div>
              <div className={styles.fueraDeServicioWrapper}>
                <div className={styles.fueraDeServicio}>Fuera de Servicio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.saveButtons}>
        <button className={styles.rectangleParent}>
          <div className={styles.rectangleDiv} />
          <div className={styles.guardar}>GUARDAR</div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent2;
