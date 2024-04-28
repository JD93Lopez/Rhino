import styles from "./compras.module.css"; // Asegúrate de tener el archivo de estilos correspondiente
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./DataProvider";

const TarjetaCompras = ({ nombreCompleto, cantidadProducto }) => {
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  const dataContext = useContext(DataContext);

  // Manejador de clic en la tarjeta
  const handleCardClick = () => {
    // Aquí podrías agregar lógica adicional si deseas manejar algún evento al hacer clic en la tarjeta
  };

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
          <span>Nombre Completo: </span>
          <span>{nombreCompleto}</span>
        </div>
        <div className={styles.infoItem}>
          <span>Cantidad del Producto: </span>
          <span>{cantidadProducto}</span>
        </div>
      </div>
    </div>
  );
};

export default TarjetaCompras;
