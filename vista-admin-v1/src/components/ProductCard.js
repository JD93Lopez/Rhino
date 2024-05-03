import React from 'react';

// Componente ProductCard que acepta un objeto product como prop
const ProductCard = ({ product }) => {
    return (
      <div className="productCard">
        <h2>Informe de Producto</h2>
        <div className="productImage">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <table className="productTable">
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
              <th>Fecha de Alquiler:</th>
              <td>{product.rentalDate || 'N/A'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

export default ProductCard;