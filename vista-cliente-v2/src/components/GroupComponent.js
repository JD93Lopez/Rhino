import styles from "./GroupComponent.module.css";

const GroupComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <b className={styles.direccin}>Dirección:</b>
      <b className={styles.correo}>Correo:</b>
      <b className={styles.usuario}>Usuario:</b>
      <b className={styles.identificacin}>Identificación:</b>
      <b className={styles.telfono}>Teléfono:</b>
      <div className={styles.crearCuenta}>CREAR CUENTA</div>
      <b className={styles.nombre}>Nombre:</b>
      <b className={styles.apellido}>Apellido:</b>
      <b className={styles.contrasea}>Contraseña:</b>
      <div className={styles.inputUsuario} />
      <div className={styles.inputContrasenia} />
      <div className={styles.inputNombre} />
      <div className={styles.inputApellido} />
      <div className={styles.inputIdentificacion} />
      <div className={styles.inputTelefono} />
      <div className={styles.inputCorreo} />
      <div className={styles.infputAddress} />
      <div className={styles.logo} />
    </div>
  );
};

export default GroupComponent;
