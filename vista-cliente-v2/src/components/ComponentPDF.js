import React, { useContext, useEffect } from "react";
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
import { DataContext } from "./DataProvider";
import { useNavigate } from "react-router-dom";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#F9F9F9",
    fontFamily: "Helvetica",
    padding: 20,
  },
  header: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  text: {
    fontSize: 14,
  },
  textSectionFinal: {
    fontSize: 14,
    flex: "end",
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
  sectionProductos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  section: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  sectionFinal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  sectionValores: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  item: {
    flex: 1,
    marginRight: 10,
  },
  logoTable: {
    width: 100,
    height: 100,
    position: "absolute",
  },
  logoIcon: {
    width: 25,
  },
  contanierFactura: {
    marginLeft: "370px",
  }
});

function ComponentPDF({ usuario, alquiler, productos }) {

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.logoTable}>
            <Image
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="/boton-logo-6@3x.png"
            />
          </View>
          <View style={styles.contanierFactura}>
            <Text style={styles.title}>FACTURA</Text>
            <Text style={styles.subtitle}>Nº DE FACTURA:{alquiler && alquiler.idalquileres}</Text>
            <Text style={styles.subtitle}>Fecha: {alquiler && alquiler.fecha.substring(0, 10)}</Text>
          </View>
        </View>
        <View style={styles.table}>
          <View style={styles.section}>
            <View>
              <Text style={styles.text}>Datos Cliente</Text>
              <Text style={styles.text}>{usuario && usuario.nombre_real}</Text>
              <Text style={styles.text}>{usuario && usuario.telefono}</Text>
              <Text style={styles.text}>{usuario && usuario.identificacion}</Text>
              <Text style={styles.text}>{usuario && usuario.direccion}</Text>
              <Text style={styles.text}>{usuario && usuario.correo}</Text>
            </View>
          </View>
        </View>
        <View style={styles.table}>

          <View style={styles.sectionFinal}>
            <View style={styles.sectionFinal}>
              <Text style={styles.text}>DESCRIPCIÓN</Text>
            </View>
            <View style={styles.sectionFinal}>
              <Text style={styles.text}>PRECIO</Text>
            </View>
          </View>
          {productos &&
            productos.map((producto) => {
              return (
                <View style={styles.sectionFinal}>
                  <View style={styles.sectionFinal}>
                    <Text style={styles.text}>{producto.nombre}</Text>
                  </View>
                  <View style={styles.sectionFinal}>
                    <Text style={styles.text}>{producto.precio_alquiler}</Text>
                  </View>
                </View>
              );
            })}
        </View>
        <View style={styles.table}>
          <View style={styles.sectionFinal}>
            <Text style={styles.text}>Subtotal:</Text>
            <Text style={styles.textSectionFinal}>{alquiler && alquiler.subtotal}</Text>
          </View>
          <View style={styles.sectionFinal}>
            <Text style={styles.text}>Total Descuento:</Text>
            <Text style={styles.textSectionFinal}>{alquiler && alquiler.total_descuento}</Text>
          </View>
          <View style={styles.sectionFinal}>
            <Text style={styles.text}>Total Impuestos:</Text>
            <Text style={styles.textSectionFinal}>{alquiler && alquiler.total_impuestos}</Text>
          </View>
          <View style={styles.sectionFinal}>
            <Text style={styles.text}>Gastos Adicionales:</Text>
            <Text style={styles.textSectionFinal}>{alquiler && alquiler.gastos_adicionales}</Text>
          </View>
          <View style={styles.sectionFinal}>
            <Text style={styles.text}>Total:</Text>
            <Text style={styles.textSectionFinal}>{alquiler && alquiler.total}</Text>
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

export default ComponentPDF;
