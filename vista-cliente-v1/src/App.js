import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import VentanaPrincipal from "./pages/VentanaPrincipal";
import VentanaInicioDeSesin from "./pages/VentanaInicioDeSesin";
import VetanaDeRegistro from "./pages/VetanaDeRegistro";
import VentanaDeInformacinPersona from "./pages/VentanaDeInformacinPersona";
import VentanaDeContraseaYSeguri from "./pages/VentanaDeContraseaYSeguri";
import VentanaDeAyudaYAsistencia from "./pages/VentanaDeAyudaYAsistencia";
import InformacinDeCadaProducto from "./pages/InformacinDeCadaProducto";
import VentanaParaBuscarProductos from "./pages/VentanaParaBuscarProductos";
import VentanaDeEDITARInformacin from "./pages/VentanaDeEDITARInformacin";
import VentanaCarritoDeCompras from "./pages/VentanaCarritoDeCompras";
import VentanaSobreNosotros from "./pages/VentanaSobreNosotros";
import VentanaPrincipal1 from "./pages/VentanaPrincipal1";
import VentanaParaSolcitarUnaCoti from "./pages/VentanaParaSolcitarUnaCoti";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/ventana-inicio-de-sesin":
        title = "";
        metaDescription = "";
        break;
      case "/vetana-de-registro":
        title = "";
        metaDescription = "";
        break;
      case "/ventana-de-informacin-personal1":
        title = "";
        metaDescription = "";
        break;
      case "/ventana-de-contrasea-y-seguridad":
        title = "";
        metaDescription = "";
        break;
      case "/ventana-de-ayuda-y-asistencia":
        title = "";
        metaDescription = "";
        break;
      case "/informacin-de-cada-producto":
        title = "";
        metaDescription = "";
        break;
      case "/ventana-de-informacin-personal":
        title = "";
        metaDescription = "";
        break;
      case "/ventana-de-editar-informacin-personal":
        title = "";
        metaDescription = "";
        break;
      case "/ventana-carrito-de-compras":
        title = "";
        metaDescription = "";
        break;
      case "/ventana-sobre-nosotros":
        title = "";
        metaDescription = "";
        break;
      case "/ventana-principal-2":
        title = "";
        metaDescription = "";
        break;
      case "/ventana-para-solcitar-una-cotizacin":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<VentanaPrincipal />} />
      <Route
        path="/ventana-inicio-de-sesin"
        element={<VentanaInicioDeSesin />}
      />
      <Route path="/vetana-de-registro" element={<VetanaDeRegistro />} />
      <Route
        path="/ventana-de-informacin-personal1"
        element={<VentanaDeInformacinPersona />}
      />
      <Route
        path="/ventana-de-contrasea-y-seguridad"
        element={<VentanaDeContraseaYSeguri />}
      />
      <Route
        path="/ventana-de-ayuda-y-asistencia"
        element={<VentanaDeAyudaYAsistencia />}
      />
      <Route
        path="/informacin-de-cada-producto"
        element={<InformacinDeCadaProducto />}
      />
      <Route
        path="/ventana-de-informacin-personal"
        element={<VentanaParaBuscarProductos />}
      />
      <Route
        path="/ventana-de-editar-informacin-personal"
        element={<VentanaDeEDITARInformacin />}
      />
      <Route
        path="/ventana-carrito-de-compras"
        element={<VentanaCarritoDeCompras />}
      />
      <Route
        path="/ventana-sobre-nosotros"
        element={<VentanaSobreNosotros />}
      />
      <Route path="/ventana-principal-2" element={<VentanaPrincipal1 />} />
      <Route
        path="/ventana-para-solcitar-una-cotizacin"
        element={<VentanaParaSolcitarUnaCoti />}
      />
    </Routes>
  );
}
export default App;
