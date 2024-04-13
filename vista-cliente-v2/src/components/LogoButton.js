import { useCallback, useContext, useState } from "react";
import { DataContext } from "./DataProvider";
import ListaDesplegable2 from "./ListaDesplegable2";
import styles from "./LogoButton.module.css";
import { useNavigate } from "react-router-dom";

const LogoButton = ({
  onBotonLogo6Click,
  onBotonProductos6Click,
  onBotonSobreNosotrosClick,
  onBotonMiCuentaClick,
}) => {

  const navigate = useNavigate()

  const onCarritoDeCompras3ImageClick = useCallback(() => {
    navigate("/ventana-carrito-de-compras");
  }, [navigate]);

  const dataContext = useContext(DataContext);

  if (!dataContext.Loaded) {
    return <p>Cargando</p>;
  }

  function dibujarBotonMiCuenta() {
    if (dataContext.usuarioIniciado.iniciado) {
      return [<ListaDesplegable2
        titulo={<div><img className={styles.perfil1Icon} alt="" src="/perfil-1@2x.png" />{dataContext.usuarioIniciado.nombre_usuario}</div>}
      ></ListaDesplegable2>]
    } else {
      return [<div className={styles.usernameInputField}>
        <button className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div style={{display:"flex", flexDirection:"row"}}>
            <img className={styles.perfil1Icon} alt="" src="/perfil-1@2x.png" />
            <div className={styles.oldPasswordFrame}>
              <div className={styles.miCuenta}>INICIAR SESION</div>
            </div>
          </div>
        </button>
      </div>]
    }
  }

  dataContext.buscadoDesdeOtraPagina = ""

  const [mouseInLupa, setMouseInLupa] = useState(false)

  function dibujarBarraBusqueda(){
    if(mouseInLupa !== true){
      return [<div className={styles.imageFrame} onMouseDown={mouseEnteredLupa}>
        <div className={styles.botonLupa6} />
      </div>]
    }else{
      return [<div className={styles.imageFrame}>
        <div style={{backgroundColor: "white",width:"500px",display:"flex", flexDirection:"row", borderRadius:"10px"}}>
          <div className={styles.botonLupa6} onMouseDown={mouseClickedBuscar}/>
          <input style={{width:"490px", borderRadius:"5px"}} id="barraBuscar" useref="barraBuscar"/>
        </div>
      </div>]
    }
  }

  function mouseEnteredLupa(){
    setMouseInLupa(true)
  }
  function mouseExitedLupa(){
    setMouseInLupa(false)
  }
  function mouseClickedBuscar(){
    const value = document.getElementById("barraBuscar").value
    if(value===""){
      setMouseInLupa(false)
    }else{
      dataContext.buscadoDesdeOtraPagina = value
      navigate("/ventana-para-buscar-productos");
    }
  }

  return (
    <div className={styles.logoButton}>
      <div className={styles.logoButtonChild} />
      <div className={styles.productsButton}>
        <div className={styles.botonLogo6} onClick={onBotonLogo6Click} />
      </div>
      <div className={styles.searchButton}>
        <div className={styles.profileFrame}>
          <div
            className={styles.botonProductos6}
            onClick={onBotonProductos6Click}
          >
            PRODUCTOS
          </div>
          <div
            className={styles.botonSobreNosotros}
            onClick={onBotonSobreNosotrosClick}
          >
            SOBRE NOSOTROS
          </div>
        </div>
      </div>
      {dibujarBarraBusqueda().map(a=>{return a})}
      {dataContext.usuarioIniciado.iniciado && <div className={styles.myAccountFrame}>
        <img
          className={styles.carritoDeCompras3Icon}
          loading="lazy"
          alt=""
          src="/carritodecompras-3@2x.png"
          onClick={onCarritoDeCompras3ImageClick}
        />
      </div>}
      <div className={styles.groupOne} onClick={onBotonMiCuentaClick}>
        {dibujarBotonMiCuenta().map((a) => { return a })}
        {/* <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img className={styles.perfil1Icon} alt="" src="/perfil-1@2x.png" />
          <div className={styles.myAccountText}>
            <div className={styles.miCuenta} >MI CUENTA</div>
          </div>
        </button> */}
      </div>
    </div>
  );
};

export default LogoButton;
