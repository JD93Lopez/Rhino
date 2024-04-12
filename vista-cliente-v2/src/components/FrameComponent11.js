import { useCallback } from "react";
import FrameComponent1 from "./FrameComponent9";
import styles from "./FrameComponent11.module.css";

const FrameComponent11 = () => {
  const onBotonLogo6Click = useCallback(() => {
    // Please sync "Ventana Para Clientes" to the project
  }, []);

  const onBotonProductos6Click = useCallback(() => {
    // Please sync "Ventana para buscar productos" to the project
  }, []);

  const onBotonSobreNosotrosClick = useCallback(() => {
    // Please sync "Ventana sobre nosotros" to the project
  }, []);

  const onCarritoDeCompras3ImageClick = useCallback(() => {
    // Please sync "Ventana carrito de compras" to the project
  }, []);

  const onGroupButtonClick = useCallback(() => {
    // Please sync "Ventana Inicio de Sesión" to the project
  }, []);

  return (
    <section className={styles.frameParent}>
      <FrameComponent1
        rectangleDivPadding="unset"
        rectangleDivAlignSelf="unset"
        rectangleDivWidth="1728px"
        onBotonLogo6Click={onBotonLogo6Click}
        onBotonProductos6Click={onBotonProductos6Click}
        onBotonSobreNosotrosClick={onBotonSobreNosotrosClick}
        onCarritoDeCompras3ImageClick={onCarritoDeCompras3ImageClick}
        onGroupButtonClick={onGroupButtonClick}
      />
      <div className={styles.disponibilidadDelProductoWrapper}>
        <h1 className={styles.disponibilidadDelProducto}>
          DISPONIBILIDAD DEL PRODUCTO
        </h1>
      </div>
    </section>
  );
};

export default FrameComponent11;
