import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import VentanaPrincipal from "./pages/VentanaPrincipal";
import InformacinDeCadaProducto from "./pages/InformacinDeCadaProducto";
import VentanaParaBuscarProductos from "./pages/VentanaParaBuscarProductos";
import VentanaCarritoDeCompras from "./pages/VentanaCarritoDeCompras";
import VentanaSobreNosotros from "./pages/VentanaSobreNosotros";
import VetanaDeRegistro from "./pages/VetanaDeRegistro";
import VentanaParaClientes from "./pages/VentanaParaClientes";
import VentanaInicioDeSesin from "./pages/VentanaInicioDeSesin";
import VentanaDeInformacinPersona from "./pages/VentanaDeInformacinPersona";
import VentanaParaSolcitarUnaCoti from "./pages/VentanaParaSolcitarUnaCoti";
import VentanaDeEDITARInformacin from "./pages/VentanaDeEDITARInformacin";
import VentanaDeContraseaYSeguri from "./pages/VentanaDeContraseaYSeguri";
import VentanaDeAyudaYAsistencia from "./pages/VentanaDeAyudaYAsistencia";
import { DataProvider } from "./components/DataProvider";


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
      case "/informacin-de-cada-producto":
        title = "";
        metaDescription = "";
        break;
      case "/ventana-para-buscar-productos":
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
      case "/vetana-de-registro":
        title = "";
        metaDescription = "";
        break;
      case "/ventana-principal-2":
        title = "";
        metaDescription = "";
        break;
      case "/ventana-inicio-de-sesin":
        title = "";
        metaDescription = "";
        break;
      case "/ventana-de-informacin-personal":
        title = "";
        metaDescription = "";
        break;
      case "/ventana-para-solcitar-una-cotizacin":
        title = "";
        metaDescription = "";
        break;
      case "/ventana-de-editar-informacin-personal":
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
    <DataProvider>
      <Routes>
        <Route path="/" element={<VentanaPrincipal />} />
        <Route
          path="/informacin-de-cada-producto"
          element={<InformacinDeCadaProducto />}
        />
        <Route
          path="/ventana-para-buscar-productos"
          element={<VentanaParaBuscarProductos />}
        />
        <Route
          path="/ventana-carrito-de-compras"
          element={<VentanaCarritoDeCompras />}
        />
        <Route
          path="/ventana-sobre-nosotros"
          element={<VentanaSobreNosotros />}
        />
        <Route path="/vetana-de-registro" element={<VetanaDeRegistro />} />
        <Route path="/ventana-principal-2" element={<VentanaPrincipal />} />
        <Route
          path="/ventana-inicio-de-sesin"
          element={<VentanaInicioDeSesin />}
        />
        <Route
          path="/ventana-de-informacin-personal"
          element={<VentanaDeInformacinPersona />}
        />
        <Route
          path="/ventana-para-solcitar-una-cotizacin"
          element={<VentanaParaSolcitarUnaCoti />}
        />
        <Route
          path="/ventana-de-editar-informacin-personal"
          element={<VentanaDeEDITARInformacin />}
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
          path="/ventana-inicio-sesion"
          element={<VentanaInicioDeSesin />}
        />
      </Routes>
    </DataProvider>
  );
}
export default App;
