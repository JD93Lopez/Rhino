import InputUserForm from "../components/InputUserForm";
import SaveButtonFrame from "../components/SaveButtonFrame";
import styles from "./VistaAdministradorUsuarios1.module.css";
import AddProductFrame from "../components/AddProductFrame";

const VistaActualizarUsuarios = () => {
  return (
    <div className={styles.vistaAdministradorUsuarios}>
      <div className={styles.vistaAdministradorUsuariosChild} />
      <AddProductFrame />
      <section className={styles.formTitle}>
        <h1 className={styles.tituloCrearUsuario}>Actualizar Usuario</h1>
      </section>
      <InputUserForm />
      <SaveButtonFrame />
    </div>
  );
};

export default VistaActualizarUsuarios;
