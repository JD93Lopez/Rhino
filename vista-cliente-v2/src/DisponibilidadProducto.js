function DisponibilidadProducto(intervalo01, intervalo02) {
  const inicio = new Date(intervalo01.fecha_inicio);
  const fin = new Date(intervalo01.fecha_fin);
  const inicioBusqueda = new Date(intervalo02.fecha_inicio);
  const finBusqueda = new Date(intervalo02.fecha_fin);
  for (
    let date = inicioBusqueda;
    date <= finBusqueda;
    date.setDate(date.getDate() + 1)
  ) {
    if (date >= inicio && date <= fin) {
      return false;
    }
  }
  return true;
}
const intervalo01 = {
  fecha_inicio: "2024-04-01",
  fecha_fin: "2024-04-06",
};
const intervalo02 = {
  fecha_inicio: "2024-04-07",
  fecha_fin: "2024-04-10",
};
if (DisponibilidadProducto(intervalo01, intervalo02)) {
  console.log(
    "El producto está disponible en el rango de fechas especificado."
  );
} else {
  console.log(
    "El producto no está disponible en el rango de fechas especificado."
  );
}
