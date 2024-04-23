import { useContext, useState } from "react";
import { DataContext } from "./DataProvider";
import styles from "./Proyecto1.module.css";

const TarjetaMantenimiento = ({ object, nombreMaquinaria, identificacion, fecha, id }) => {

  const dataContext = useContext(DataContext)

  if(!dataContext.Loaded){
    return <p>Cargando...</p>
  }

  const [selected, setSelected] = useState(false)

  const seleccionar = () => {

    if(!dataContext.selectedMant){
      dataContext.selectedMant = []
    }

    if(selected){
      setSelected(false)
      dataContext.selectedMant.forEach(mant => {
        if(mant.idMantenimiento === id){
          dataContext.selectedMant = dataContext.selectedMant.filter(mantF => { return mant !== mantF })
        }
      });
    }else{
      setSelected(true)
      dataContext.selectedMant.push(
        object
      )
      console.log(dataContext.selectedMant)
    }

  }

  const estiloSeleccionado = selected
    ? { backgroundColor: "rgb(255,220,84)" }
    : {};

  return (
    <div className={styles.proyecto1} onClick={seleccionar} style={estiloSeleccionado}>
      <div className={styles.proyecto1Child} />
      <div className={styles.proyecto1Inner}>
        <div className={styles.frameParent}>
          <div className={styles.nombreDelProductoExcavadorWrapper}>
            <div className={styles.nombreDelProductoContainer}>
              <span>{`Nombre del Producto: `}</span>
              <span className={styles.excavadora}>{object.producto.nombre}</span>
            </div>
          </div>
          <div className={styles.identificacin49845Wrapper}>
            <div className={styles.identificacin49845}>
              <span>{`Identificación: `}</span>
              <span className={styles.span}>{identificacion}</span>
            </div>
          </div>
          <div className={styles.fecha23032024}>
            <span>{`Fecha: `}</span>
            <span className={styles.span1}>{fecha}</span>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <textarea
            className={`${styles.descripcin} ${styles.textArea}`} // Agregar una nueva clase para el textarea
            placeholder="Descripción..."
            type="text"
            defaultValue={object.descripcion}
          />
        </div>
      </div>
    </div>
  );
};

export default TarjetaMantenimiento;
