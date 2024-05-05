import React, { useState } from 'react';
import styles from "./VistaAdministradorInformes.module.css";

// Definimos el componente ProductCard
const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <h2>Informe de Producto</h2>
      <div className={styles.productImage}>
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <table className={styles.productTable}>
        <tbody>
          <tr>
            <th>Nombre del Producto:</th>
            <td>{product.name}</td>
          </tr>
          <tr>
            <th>ID del Producto:</th>
            <td>{product.id}</td>
          </tr>
          <tr>
            <th>Descripción:</th>
            <td>{product.description}</td>
          </tr>
          <tr>
            <th>Precio de Alquiler:</th>
            <td>${product.price}</td>
          </tr>
          <tr>
            <th>Modelo:</th>
            <td>{product.model || 'N/A'}</td>
          </tr>
          <tr>
            <th>Fabricante:</th>
            <td>{product.manufacturer || 'N/A'}</td>
          </tr>
          <tr>
            <th>Tipo:</th>
            <td>{product.type || 'N/A'}</td>
          </tr>
          <tr>
            <th>Estado:</th>
            <td>{product.status || 'N/A'}</td>
          </tr>
          <tr>
            <th>Fecha:</th>
            <td>{product.rentalDate || 'N/A'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  };

  const VistaAdministradorInformes = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const products = [
    { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', price: 100, model: 'Modelo 1', manufacturer: 'Fabricante 1', type: 'Transporte', status: 'Disponible', imageUrl: 'https://via.placeholder.com/300x200', rentalDate: '2023-05-01' },
    { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', price: 200, model: 'Modelo 2', manufacturer: 'Fabricante 2', type: 'Maquinaria Pesada', status: 'Ocupado', imageUrl: 'https://via.placeholder.com/300x200', rentalDate: '2023-04-15' },
    { id: 3, name: 'Producto 3', description: 'Descripción del producto 3', price: 300, model: 'Modelo 3', manufacturer: 'Fabricante 3', type: 'Transporte', status: 'Fuera de Servicio', imageUrl: 'https://via.placeholder.com/300x200', rentalDate: '2023-03-01' },
  ];

  // Filtro de productos según fechas (Asumiendo que cada producto tiene un campo 'rentalDate')
  const filteredProducts = products.filter((product) => {
    const rentalDate = new Date(product.rentalDate);
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
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default VistaAdministradorInformes;