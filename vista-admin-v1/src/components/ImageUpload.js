import React, { useContext, useState } from 'react';
import styles from './FrameComponent2.module.css'; // Asegúrate de importar el archivo de estilos correspondiente
import { DataContext } from "../components/DataProvider";


const ImageUpload = () => {
  const dataContext = useContext(DataContext);
  const [image, setImage] = useState("/logofinalremovebgpreview-1@2x.png");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      dataContext.imagenProducto = reader.result
    };

    if (file) {
      reader.readAsDataURL(file);
    }
    
  };

  return (
    <div className={styles.imagen}>
      <p>Imagen</p>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {image && (
        <img
          src={image}
          alt="Uploaded"
          className={styles.imageUpload}
          id= "imagenProducto"
          useref="imagenProducto"
          style={{objectFit:"contain"}}
        />
      )}
    </div>
  );
};

export default ImageUpload;
