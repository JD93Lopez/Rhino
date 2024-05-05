import React, { useState } from 'react';
import styles from "./VistaAdministradorInformes.module.css";
import axios from '../axios';

// Definimos el componente ProductCard
const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <h2>Informe de Producto</h2>
      <div className={styles.productImage}>
        <img src={product.imagen} alt={product.name} />
      </div>
      <table className={styles.productTable}>
        <tbody>
          <tr>
            <th>Nombre del Producto:</th>
            <td>{product.nombre}</td>
          </tr>
          <tr>
            <th>ID del Producto:</th>
            <td>{product.idproductos}</td>
          </tr>
          <tr>
            <th>Descripción:</th>
            <td>{product.descripcion}</td>
          </tr>
          <tr>
            <th>Precio de Alquiler:</th>
            <td>${product.precio_alquiler}</td>
          </tr>
          <tr>
            <th>Modelo:</th>
            <td>{product.modelo || 'N/A'}</td>
          </tr>
          <tr>
            <th>Fabricante:</th>
            <td>{product.marca || 'N/A'}</td>
          </tr>
          <tr>
            <th>Tipo:</th>
            <td>{product.tipo_vehiculo || 'N/A'}</td>
          </tr>
          <tr>
            <th>Estado:</th>
            <td>{product.estado || 'N/A'}</td>
          </tr>
          <tr>
            <th>Fecha agregado:</th>
            <td>{product.fecha&&product.fecha.substring(0,10) || 'N/A'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  };

const VistaAdministradorInformes = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [products,setProducts] = useState()

  if(!products){
    axios.api(`obtener/productos`).then((res)=>{
      try {
        setProducts(res.data.Res)
      } catch (e) {}
    })
  }

  if(!products){
    return
  }

  // Filtro de productos según fechas (Asumiendo que cada producto tiene un campo 'rentalDate')
  const filteredProducts = products.filter((product) => {
    const rentalDate = new Date(product.fecha);
    const startDateObj = startDate ? new Date(startDate) : null;
    const endDateObj = endDate ? new Date(endDate) : null;

    if (!startDateObj && !endDateObj) {
      return true; // Si no se especificaron fechas, mostrar todos los productos
    } else if (startDateObj && endDateObj) {
      return rentalDate >= startDateObj && rentalDate <= endDateObj;
    } else if (startDateObj) {
      return rentalDate >= startDateObj;
    } else {
      return rentalDate <= endDateObj;
    }
  });

  return (
    <div className={styles.adminReports}>
      <div className={styles.productReport}>
        <label>Fecha de inicio:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </div>
      <div className={styles.productReport}>
        <label>Fecha final:</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>
      <div>
        {filteredProducts.map((product) => (
          <ProductCard key={product.idproductos} product={product} />
        ))}
      </div>
    </div>
  );
};

export default VistaAdministradorInformes;