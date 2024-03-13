import React, { useState } from 'react';
import styles from './FrameComponent2.module.css'; // Asegúrate de importar el archivo de estilos correspondiente

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
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
        />
      )}
    </div>
  );
};

export default ImageUpload;
