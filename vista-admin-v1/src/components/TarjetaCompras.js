import styles from "./compras.module.css"; // Asegúrate de tener el archivo de estilos correspondiente
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./DataProvider";
import axios from "../axios";

const TarjetaCompras = ({ responsable, empresa, total, fecha, object }) => {
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  const dataContext = useContext(DataContext);

  // Manejador de clic en la tarjeta
  const handleCardClick = () => {
    dataContext.compraSeleccionada = object
    navigate('/vista-administrador-compras')
    // Aquí podrías agregar lógica adicional si deseas manejar algún evento al hacer clic en la tarjeta
  };

  const [cantidadProductos,setCantidadProductos] = useState()

  if(!cantidadProductos){
    axios.api(`obtener/productosPorIdcompras/${object.idcompras}`).then((res)=>{
      try {
        setCantidadProductos(res.data.Res.length)
      } catch (e) {}
    })
  }

  return (
    <div
      className={`${styles.tarjetaCompra} ${
        isSelected ? styles.selected : ""
      }`}
      onClick={handleCardClick}
      onMouseEnter={(e) => e.currentTarget.classList.add(styles.hover)}
      onMouseLeave={(e) => e.currentTarget.classList.remove(styles.hover)}
    >
      <div className={styles.info}>
        <div className={styles.infoItem}>
          <span>Empresa: </span>
          <span style={{fontWeight:"lighter"}}>&nbsp;{empresa}</span>
        </div>
        <div className={styles.infoItem}>
          <span>Nombre responsable: </span>
          <span style={{fontWeight:"lighter"}}>&nbsp;{responsable}</span>
        </div>
        <div className={styles.infoItem}>
          <span>Número de productos: </span>
          <span style={{fontWeight:"lighter"}}>&nbsp;{cantidadProductos}</span>
        </div>
        <div className={styles.infoItem}>
          <span>Fecha: </span>
          <span style={{fontWeight:"lighter"}}>&nbsp;{fecha}</span>
        </div>
        <div className={styles.infoItem}>
          <span>Total: </span>
          <span style={{fontWeight:"lighter"}}>&nbsp;{total?total:"0"}</span>
        </div>
      </div>
    </div>
  );
};

export default TarjetaCompras;
