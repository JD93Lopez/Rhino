import React from "react";
import {
  Document,
  Page,
  Text,
  Image,
  View,
  StyleSheet,
  PDFDownloadLink,
  PDFViewer,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#F9F9F9",
    fontFamily: "Helvetica",
    padding: 20,
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#444",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#444",
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    color: "#444",
  },
  table: {
    display: "table",
    width: "100%",
    border: "1px solid #ccc",
    borderCollapse: "collapse",
  },
  tableRow: {
    display: "table-row",
    borderBottom: "1px solid #ccc",
  },
  tableCell: {
    display: "table-cell",
    padding: 5,
    borderRight: "1px solid #ccc",
  },
  totalRow: {
    display: "table-row",
    borderBottom: "1px solid #ccc",
    backgroundColor: "#eee",
  },
  totalCell: {
    display: "table-cell",
    padding: 5,
    borderRight: "1px solid #ccc",
    fontWeight: "bold",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  sectionFinal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 15,
  },
  item: {
    flex: 1,
    marginRight: 10,
  },
});

function PDF() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>FACTURA</Text>
          <Text style={styles.subtitle}>Nº DE FACTURA:001</Text>
          <Text style={styles.subtitle}>Fecha: 04/2024</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.section}>
            <View>
              <Text style={styles.text}>Datos Cliente</Text>
              <Text style={styles.text}>Nombre del Cliente</Text>
              <Text style={styles.text}>3167836748</Text>
              <Text style={styles.text}>Cedula</Text>
              <Text style={styles.text}>Direccion</Text>
              <Text style={styles.text}>maria.romero.2022@upb.edu.co</Text>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.item}>
              <Text style={styles.text}>Descripción:</Text>
              <Text style={styles.text}>Producto</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.text}>Cantidad:</Text>
              <Text style={styles.text}>1</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.text}>Precio:</Text>
              <Text style={styles.text}>575</Text>
            </View>
          </View>
          <View style={styles.sectionFinal}>
            <Text style={styles.text}>Subtotal:</Text>
            <Text style={styles.text}>575</Text>

          </View>
          <View style={styles.sectionFinal}>
          <Text style={styles.text}>Total Descuento:</Text>
            <Text style={styles.text}>0</Text>
          </View>
          <View style={styles.sectionFinal}>
            <Text style={styles.text}>Total Impuestos:</Text>
            <Text style={styles.text}>213</Text>
          </View>
          <View style={styles.sectionFinal}>
          <Text style={styles.text}>Gastos Adicionales:</Text>
            <Text style={styles.text}>0</Text>
          </View>
          <View style={styles.sectionFinal}>
            <Text style={styles.text}>Total:</Text>
            <Text style={styles.text}>1000</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
/*
codigo en clase donde se implementará descargar y mostrar PDF: 
import React from 'react';
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDF from "../PDF"; 

function VentanaParaClientes() {
  const nombreArchivoPDF = `factura_${new Date().toLocaleDateString()}.pdf`;

  return (
    <div>
      <PDFDownloadLink document={<PDF />} fileName={nombreArchivoPDF}>
        {({ loading, url, error, blob }) =>
          loading ? (
            <button>Cargando PDF...</button>
          ) : (
            <button>Descargar PDF</button>
          )
        }
      </PDFDownloadLink>

      <PDFViewer>
        <PDF />
      </PDFViewer>
    </div>
  );
}

export default VentanaParaClientes;

*/

export default PDF;
