import UserNicknameFrame1 from "./UserNicknameFrame1";
import UserNicknameFrame2 from "./UserNicknameFrame2";
import UserNicknameFrame3 from "./UserNicknameFrame3";
import UserNicknameFrame from "./UserNicknameFrame";
import styles from "./InputUserForm.module.css";
import { useContext, useEffect } from "react";
import { DataContext } from "./DataProvider";
import { useLocation, useNavigate } from "react-router-dom";

const InputUserForm = () => {
  const dataContext = useContext(DataContext)
  const { Loaded, selectedUsers } = dataContext;
  if (!Loaded) {
    return <div>Cargando... Por favor espere.</div>;
  }
  
  const navigate = useNavigate()
  const pathname = useLocation().pathname
  if(dataContext.Loaded && dataContext.selectedUsers && dataContext.selectedUsers[0]){
  }else if(pathname==="/vista-administrador-usuarios-actualizar-usuario"){
    useEffect(() => {
      navigate("/vista-administrador-usuarios");
    }, [navigate, pathname]);
  }

  useEffect(() => {
    if(selectedUsers.length !== 0){
      document.getElementById("inputnombreusuario").value = selectedUsers[0].nombre_usuario
      document.getElementById("inputdireccionusuario").value = selectedUsers[0].direccion
      document.getElementById("inputnombrerealusuario").value = selectedUsers[0].nombre_real
      document.getElementById("inputtelefonousuario").value = selectedUsers[0].telefono
      document.getElementById("inputidentificacionusuario").value = selectedUsers[0].identificacion
      document.getElementById("inputcorreousuario").value = selectedUsers[0].correo
      document.getElementById("inputtipoidentificacion").value = selectedUsers[0].tipo_identificacion
      document.getElementById("inputtipodeusuario").value = selectedUsers[0].tipo_usuario
      document.getElementById("inputestadodeusuario").value = selectedUsers[0].estado
    }
  }, [ selectedUsers]);
  return (
    <section className={styles.inputUserForm}>
      <div className={styles.casillasDeCreacionDeUsuari}>
        <UserNicknameFrame1
          nombreDeUsuario="Nombre de usuario"
          direccin="Dirección"
        />
        <UserNicknameFrame2
          nombreDeUsuario="Nombre Completo "
          direccin="Tipo de identificación"
        />
        <UserNicknameFrame
          correoElectrnico="Correo electrónico"
          identificacin="identificación"
        />
        <UserNicknameFrame3
          correoElectrnico="Teléfono"
          identificacin="Tipo de Usuario"
          propPadding="0px 0px var(--padding-50xl)"
        />
      </div>
    </section>
  );
};

export default InputUserForm;
