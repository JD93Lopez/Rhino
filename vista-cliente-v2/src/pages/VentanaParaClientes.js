import React, { useContext, useEffect } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import ComponentPDF from "../components/ComponentPDF";
import { DataContext } from "../components/DataProvider";

function VentanaParaClientes() {
  const nombreArchivoPDF = `factura_${new Date().toLocaleDateString()}.pdf`;
  const dataContext = useContext(DataContext);

  let alquiler;
  let usuario;
  let productos;

  if (!alquiler) {
    alquiler = dataContext.alquilerPdf;
  }
  if (!usuario) {
    usuario = dataContext.usuarioPdf;
  }
  if (!productos) {
    productos = dataContext.productosPdf;
  }

  if (!alquiler || !usuario || !productos) {
    useEffect(() => {
      // navigate('/historial-cotizaciones')
    }, []);
  }
  return (
    <div>
      <PDFDownloadLink
        document={
          <ComponentPDF
            usuario={usuario}
            alquiler={alquiler}
            productos={productos}
          />
        }
        fileName={nombreArchivoPDF}
      >
        {({ loading, url, error, blob }) =>
          loading ? (
            <button>Cargando PDF...</button>
          ) : (
            <button>Descargar PDF</button>
          )
        }
      </PDFDownloadLink>
      <PDFViewer width={650} height={700}>
        <ComponentPDF
          usuario={usuario}
          alquiler={alquiler}
          productos={productos}
        />
      </PDFViewer>
    </div>
  );
}

export default VentanaParaClientes;
