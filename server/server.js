const express = require('express');
const cors = require('cors');
const connection = require('./connection.js');

const app = express();
const PORT = 3001; // Puerto del servidor

//Puertos e ips permitidas
app.use(cors({ origin: 'http://localhost:3000' }));

// Rutas
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

app.get('/api/ejemplo', (req, res) => {
    res.json({ mensaje: 'Esta es una API de ejemplo'});
});

app.get('/api/saludo/:nombre/:apellido', (req, res) => {
    const nombre = req.params.nombre;
    const apellido = req.params.apellido;
    res.json({ mensaje: `¡Hola, ${nombre} ${apellido}! Bienvenido a nuestra API.` });
});

// Iniciar
app.listen(PORT, () => {
    connection.obtenerUsuarios()
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});