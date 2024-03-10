const fs = require('fs');

// Lee el archivos JSON
const readFile = (rutaJSON) => {
    return fs.readFileSync(rutaJSON, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }
    })
}

// Ruta server config
const rutaServerConfig = './server-config.json';
const readServerConfig = () => {
    return JSON.parse(readFile(rutaServerConfig))
}
// Ruta db config
const rutaDBConfig = './db-config.json';
const readDBConfig = () => {
    return JSON.parse(readFile(rutaDBConfig))
}

module.exports = {readServerConfig,readDBConfig}