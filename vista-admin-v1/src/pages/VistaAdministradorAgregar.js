// VistaAdministradorAgregar.js
import { useCallback, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AddProductFrame from "../components/AddProductFrame";
import SeleccionarArchivoText from "../components/SeleccionarArchivoText";
import FrameComponent2 from "../components/FrameComponent2";
import ListaDesplegable1 from "../components/ListaDesplegable1";
import styles from "./VistaAdministradorAgregar.module.css";
import axios from "../axios";
import { DataContext } from "../components/DataProvider";

const VistaAdministradorAgregar = () => {
  const dataContext = useContext(DataContext);

  const navigate = useNavigate();

  const onUSUARIOSTextClick = useCallback(() => {
    navigate("/vista-administrador-usuarios");
  }, [navigate]);

  const onPROYECTOSTextClick = useCallback(() => {
    navigate("/vista-administrador-proyectos");
  }, [navigate]);

  const onPRODUCTOSTextClick = useCallback(() => {
    navigate("/vista-administrador-productos");
  }, [navigate]);

  const onMANTENIMIENTOTextClick = useCallback(() => {
    navigate("/vista-administrador-mantenimiento");
  }, [navigate]);

  const [opciones, setOpciones] = useState();

  if (!opciones) {
    axios.api(`obtener/categorias`).then((res) => {
      try {
        let categorias = res.data.Res;
        let opciones = [];
        for (const categoria of categorias) {
          opciones.push({
            label: categoria.nombre_categoria,
            value: categoria.idcategorias,
          });
        }
        setOpciones(opciones);
      } catch (e) {}
    });
  }

  const seleccionCategorias = (e) => {
    dataContext.categoriasSeleccionadas = e;
  };

  return (
    <div className={styles.vistaAdministradorAgregar}>
      <div className={styles.vistaAdministradorAgregarChild} />
      <AddProductFrame
        onUSUARIOSTextClick={onUSUARIOSTextClick}
        onPROYECTOSTextClick={onPROYECTOSTextClick}
        onPRODUCTOSTextClick={onPRODUCTOSTextClick}
        onMANTENIMIENTOTextClick={onMANTENIMIENTOTextClick}
      />
      <div className={styles.createUserFrame}>
        <h1 className={styles.tituloCrearUsuario}>Agregar Producto</h1>
      </div>
      <main className={styles.productIDRectangle}>
        <section className={styles.descriptionFrame}>
          <div className={styles.productInputFrame}>
            <div className={styles.nombreProductoFrame}>
              <div className={styles.iDProductoFrame}>
                <div className={styles.rectangleProductInfo}>
                  <div className={styles.nombreIDFrame}>
                    <div className={styles.nombreDelProducto}>
                      Nombre del Producto
                    </div>
                    <input
                      className={styles.frame}
                      type="text"
                      id="inputNombreProducto"
                      useref={"inputNombreProducto"}
                    />
                  </div>
                  <div className={styles.nombreIDFrame1}>
                    <div className={styles.idDelProducto}>
                      Identificador del Producto
                    </div>
                    <input
                      className={styles.nombreIDFrame1}
                      type="text"
                      id="inputIdProducto"
                      useref={"inputIdProducto"}
                    />
                  </div>
                  <div className={styles.pRODUCTOS}>
                    <div className={styles.descripcin}>Descripción</div>
                    <textarea
                      className={styles.mantenimientoText}
                      placeholder="Escribe"
                      rows={18}
                      cols={28}
                      style={{ color: "black" }}
                      id="inputdescripcionproducto"
                      useref={"inputdescripcionproducto"}
                    />
                  </div>
                  <div className={styles.tituloCrearUsuarioFrame}>
                    <div className={styles.frameCargarSOAT}>
                      <div className={styles.descargarSOAT}>
                      </div>
                    </div>
                  </div>
                  <ListaDesplegable1
                    className={null}
                    titulo={"Seleccione las categorías"}
                    opciones={opciones ? opciones : []}
                    onChange={(e) => {
                      seleccionCategorias(e);
                    }}
                  />
                </div>
              </div>
              <div className={styles.frameParent}></div>
            </div>
          </div>
          <FrameComponent2 />
        </section>
      </main>
    </div>
  );
};

export default VistaAdministradorAgregar;
