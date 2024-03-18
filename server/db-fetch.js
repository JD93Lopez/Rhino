const FileReader = require('./FileReader.js');
const config = FileReader.readFetchConfig()

// Función para obtener los datos JSON
async function fetchApi(apiRoute) {
  try {
    const apiUrl = (`http://${config.ip}:${config.port}/dbapi/`+apiRoute)

    // Realizar la petición GET a la API
    const response = await fetch(apiUrl);

    // Verificar si la respuesta es exitosa (código 200)
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }

    // Convertir la respuesta a JSON
    const data = await response.json();

    // Mostrar los datos en la consola
    return data;
  } catch (error) {
    return JSON.stringify({DBRes: error});
  }
}

// Exportar método
module.exports = { fetchApi }
