import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import VistaAdministradorLogin from "./pages/VistaAdministradorLogin";
import VistaAdministradorUsuarios from "./pages/VistaAdministradorUsuarios";
import VistaAdministradorProyecto from "./pages/VistaAdministradorProyecto";
import VistaAdministradorMantenim from "./pages/VistaAdministradorMantenim";
import VistaAdministradorAgregar from "./pages/VistaAdministradorAgregar";
import VistaAdministradorActualizar from "./pages/VistaAdministradorActualizar";
import VistaAdministradorUsuarios1 from "./pages/VistaAdministradorUsuarios1";
import VistaActualizarUsuarios from "./pages/VistaActualizarUsuarios";
import VistaAdministradorProducto from "./pages/VistaAdministradorProducto";
import VistaAdministradorAgregarProyect from "./pages/VistaAdministradorAgregarProyect";
import VistaAdministradorAgregarMant from "./pages/VistaAdministradorAgregarMant";
import VistaAdministradorCotizacion from "./pages/VistaAdministradorCotizacion";
import VistaAdministradorVerCotizacion from "./pages/VistaAdministradorVerCotizacion";
import VistaAdministradorActualizarProyect from "./pages/VistaAdministradorActualizarProyect";
import VistaMantenimProducto from "./pages/VistaMantenimProducto";
import VistaAdministradorACtualizarMant from "./pages/VistaAdministradorActualizarMant";
import VistaAdministradorConductoresProductos from "./pages/VistaAdministradorConductoresProductos";
import VistaAdministradorCompras from "./pages/VistaAdministradorCompras";
import VistaAdministradorAllCompras from "./pages/VistaAdministradorAllCompras";
import VistaAdministradorProveedores from "./pages/VistaAdministradorProveedores";
import VistaAdministradorVerProveedores from "./pages/VistaAdministradorVerProveedores";
import VistaAdministradorInformes from "./pages/VistaAdministradorInformes";
import VistaAdministradorAgenda from "./pages/VistaAdministradorAgenda";
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
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/vista-administrador-usuarios":
        title = "";
        metaDescription = "";
        break;
      case "/vista-administrador-proyectos":
        title = "";
        metaDescription = "";
        break;
      case "/vista-administrador-agregar-proyect":
        title = "";
        metaDescription = "";
        break;
      case "/vista-administrador-mantenimiento":
        title = "";
        metaDescription = "";
        break;
      case "/vista-administrador-actualizar-mant":
        title = "";
        metaDescription = "";
        break;
      case "/vista-administrador-agregar-mantenimiento":
        title = "";
        metaDescription = "";
        break;
      case "/vista-administrador-agregar-productoeditar-producto":
        title = "";
        metaDescription = "";
        break;
      case "/vista-administrador-usuarios-crear-usuarioactualizar-usuario":
        title = "";
        metaDescription = "";
        break;
      case "/vista-administrador-productos":
        title = "";
        metaDescription = "";
        break;
      case "/vista-administrador-cotizacion":
        title = "";
        metaDescription = "";
        break;
      case "/vista-administrador-ver-cotizacion":
        title = "";
        metaDescription = "";
        break;
      case "/vista-administrador-cotizacion-producto":
        title = "";
        metaDescription = "";
        break;
      case "/vista-administrador-compras":
        title = "";
        metaDescription = "";
        break;
      case "/vista-administrador-all-compras":
        title = "";
        metaDescription = "";
        break;
      case "/vista-administrador-proveedores":
        title = "";
        metaDescription = "";
        break;
      case "/vista-administrador-ver-proveedores":
        title = "";
        metaDescription = "";
        break;
      case "/vista-administrador-informes":
        title = "";
        metaDescription = "";
        break;
        case "/vista-administrador-agenda":
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
        <Route path="/login" element={<VistaAdministradorLogin />} />
        <Route path="/" element={<VistaAdministradorLogin />} />
        <Route
          path="/vista-administrador-usuarios"
          element={<VistaAdministradorUsuarios />} />
        <Route
          path="/vista-administrador-proyectos"
          element={<VistaAdministradorProyecto />}
        />
        <Route
          path="/vista-administrador-agregar-proyect"
          element={<VistaAdministradorAgregarProyect />}
        />
        <Route
          path="/vista-administrador-mantenimiento"
          element={<VistaAdministradorMantenim />}
        />
        <Route
          path="/vista-administrador-agregar-mantenimiento"
          element={<VistaAdministradorAgregarMant />}
        />
        <Route
          path="/vista-administrador-agregar-productoeditar-producto"
          element={<VistaAdministradorAgregar />}
        />
        <Route
          path="/vista-administrador-productoeditar-producto"
          element={<VistaAdministradorActualizar />}
        />
        <Route
          path="/vista-administrador-usuarios-crear-usuarioactualizar-usuario"
          element={<VistaAdministradorUsuarios1 />}
        />
        <Route
          path="/vista-administrador-usuarios-actualizar-usuario"
          element={<VistaActualizarUsuarios />}
        />
        <Route
          path="/vista-administrador-productos"
          element={<VistaAdministradorProducto />}
        />
        <Route
          path="/vista-administrador-actualizar-proyect"
          element={<VistaAdministradorActualizarProyect />}
        />
        <Route
          path="/vista-mantenimiento-producto"
          element={<VistaMantenimProducto />}
        />
        <Route
          path="/vista-administrador-actualizar-mant"
          element={<VistaAdministradorACtualizarMant />}
        />
        <Route
          path="/vista-administrador-cotizacion"
          element={<VistaAdministradorCotizacion />}
        />
        <Route
          path="/vista-administrador-ver-cotizacion"
          element={<VistaAdministradorVerCotizacion />}
        />
        <Route
          path="/vista-administrador-conductor-producto"
          element={<VistaAdministradorConductoresProductos />}
        />
        <Route
          path="/vista-administrador-compras"
          element={<VistaAdministradorCompras />}
        />
        <Route
          path="/vista-administrador-all-compras"
          element={<VistaAdministradorAllCompras />}
        />
        <Route
          path="/vista-administrador-proveedores"
          element={<VistaAdministradorProveedores />}
        />
        <Route
          path="/vista-administrador-ver-proveedores"
          element={<VistaAdministradorVerProveedores />}
        />
        <Route
          path="/vista-administrador-informes"
          element={<VistaAdministradorInformes />}
        />
        <Route
          path="/vista-administrador-agenda"
          element={<VistaAdministradorAgenda />}
        />
      </Routes>
    </DataProvider>
  );
}
export default App;
