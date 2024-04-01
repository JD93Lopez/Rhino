import VistaAdminFrame from "../components/VistaAdminFrame";
import InputUserForm from "../components/InputUserForm";
import SaveButtonFrame from "../components/SaveButtonFrame";
import styles from "./VistaAdministradorUsuarios1.module.css";

const VistaActualizarUsuarios = () => {
  return (
    <div className={styles.vistaAdministradorUsuarios}>
      <div className={styles.vistaAdministradorUsuariosChild} />
      <VistaAdminFrame />
      <section className={styles.formTitle}>
        <h1 className={styles.tituloCrearUsuario}>Actualizar Usuario</h1>
      </section>
      <InputUserForm />
      <SaveButtonFrame />
    </div>
  );
};

export default VistaActualizarUsuarios;
