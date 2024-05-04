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
      return [
        <ListaDesplegable2
          titulo={<div style={{color:"black", display:"flex", flexDirection:"row"}}><img className={styles.perfil1Icon} alt="" src="/perfil-1@2x.png" />{dataContext.usuarioIniciado.nombre_usuario}</div>}
        ></ListaDesplegable2>
      ]
    } else {
      return [
        <div className={styles.usernameInputField} onClick={onBotonMiCuentaClick}>
          <button className={styles.rectangleGroup} style={{borderRadius:"10px"}}>
            <div className={styles.frameItem} />
            <div style={{display:"flex", flexDirection:"row"}}>
              <img className={styles.perfil1Icon} alt="" src="/perfil-1@2x.png" />
              <div className={styles.oldPasswordFrame}>
                <div className={styles.miCuenta}>INICIAR SESION</div>
              </div>
            </div>
          </button>
        </div>
      ]
    }
  }

  const [mouseInLupa, setMouseInLupa] = useState(false)

  function dibujarBarraBusqueda(){
    if(mouseInLupa !== true){
      return [<div className={styles.imageFrame} onClick={mouseEnteredLupa}>
        <div className={styles.botonLupa6} />
      </div>]
    }else{
      return [<div className={styles.imageFrame}>
        <div style={{backgroundColor: "white",width:"500px",display:"flex", flexDirection:"row", borderRadius:"10px"}}>
          <div className={styles.botonLupa6} onClick={mouseClickedBuscar}/>
          <input style={{width:"490px", borderRadius:"5px"}} id="barraBuscar" useref="barraBuscar"/>
        </div>
      </div>]
    }
  }

  function mouseEnteredLupa(){
    setMouseInLupa(true)
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

  let productosCarrito
  if(localStorage.getItem("productosCarrito")&&localStorage.getItem("productosCarrito")!=""){
    productosCarrito = JSON.parse(localStorage.getItem("productosCarrito"))
  }
  if(!productosCarrito){
    productosCarrito = []
  }

  const [cantidadProductos, setCatidadProductos] = useState(productosCarrito.length)

  dataContext.catidadProductosCarrito = cantidadProductos
  dataContext.setCatidadProductosCarrito = setCatidadProductos

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
        {cantidadProductos!=0&&<div style={{
          position:"absolute",borderRadius:"30px",
          /* border:"2px solid black", */height:"30px",
          width:"30px",backgroundColor:"rgba(255,255,255,0.5)",
          zIndex:"3",marginTop:"35px",marginLeft:"52px",
          fontSize:"22px",textAlign:"center",justifyContent:"center",alignItems:"center"
        }}><b>{cantidadProductos}</b></div>}
        <img
          className={styles.carritoDeCompras3Icon}
          loading="lazy"
          alt=""
          src="/carritodecompras-3@2x.png"
          onClick={onCarritoDeCompras3ImageClick}
        />
      </div>}
      <div className={styles.groupOne}>
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
