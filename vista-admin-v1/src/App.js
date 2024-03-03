import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import VistaAdministradorUsuarios from "./pages/VistaAdministradorUsuarios";
import VistaAdministradorProyecto from "./pages/VistaAdministradorProyecto";
import VistaAdministradorMantenim from "./pages/VistaAdministradorMantenim";
import VistaAdministradorAgregar from "./pages/VistaAdministradorAgregar";
import VistaAdministradorUsuarios1 from "./pages/VistaAdministradorUsuarios1";
import VistaAdministradorProducto from "./pages/VistaAdministradorProducto";
import {DataProvider} from "./components/DataProvider";

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
      case "/vista-administrador-proyectos":
        title = "";
        metaDescription = "";
        break;
      case "/vista-administrador-mantenimiento":
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
        <Route path="/" element={<VistaAdministradorUsuarios />} />
        <Route
          path="/vista-administrador-proyectos"
          element={<VistaAdministradorProyecto />}
        />
        <Route
          path="/vista-administrador-mantenimiento"
          element={<VistaAdministradorMantenim />}
        />
        <Route
          path="/vista-administrador-agregar-productoeditar-producto"
          element={<VistaAdministradorAgregar />}
        />
        <Route
          path="/vista-administrador-usuarios-crear-usuarioactualizar-usuario"
          element={<VistaAdministradorUsuarios1 />}
        />
        <Route
          path="/vista-administrador-productos"
          element={<VistaAdministradorProducto />}
        />
      </Routes>
    </DataProvider>
  );
}
export default App;
