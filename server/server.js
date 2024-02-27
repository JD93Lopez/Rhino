const express = require('express');
const cors = require('cors');
const FileReader = require('./FileReader.js');
const DBConnection = require('./DBConnection.js');

const config = FileReader.readServerConfig()

const server = express();
const PORT = config.port; // Puerto del servidor

//Puertos e ips permitidas
const corsLinks = config.corsLinks
corsLinks.forEach(link => {
    server.use(cors({ origin: link }));
});

// Rutas prueba
server.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});
server.get('/api/ejemplo', (req, res) => {
    res.json({ mensaje: 'Esta es una API de ejemplo'});
});
server.get('/api/saludo/:nombre/:apellido', (req, res) => {
    const nombre = req.params.nombre;
    const apellido = req.params.apellido;
    res.json({ mensaje: `¡Hola, ${nombre} ${apellido}! Bienvenido a nuestra API.` });
});

//Obtener usuarios
server.get('/api/get/usuarios/:usuario/:contrasena', async (req, res) => {
    try {
        const usuario = req.params.usuario;
        const contrasena = req.params.contrasena;
        //TODO comprobar usuario y contrasena
        res.json({ DBRes: await DBConnection.obtenerUsuarios() });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Insertar usuario
server.get('/api/insert/usuarios/:JSONUsuario/:usuario/:contrasena', async (req, res) => {
    try {
        const usuario = req.params.usuario;
        const contrasena = req.params.contrasena;
        //TODO comprobar usuario y contrasena
        const JSONUsuario = req.params.JSONUsuario;
        const usuarioInsertar = JSON.parse(JSONUsuario)
        DBConnection.insertarUsuario(usuarioInsertar.idusuarios, usuarioInsertar.nombre_usuario, usuarioInsertar.contrasena, usuarioInsertar.nombre_real, usuarioInsertar.direccion, usuarioInsertar.telefono, usuarioInsertar.identificacion, usuarioInsertar.correo, usuarioInsertar.tipo_identificacion, usuarioInsertar.tipo_usuario)
        res.json({ DBRes: "Insercion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Insertar proveedor
server.get('/api/insert/proveedores/:JSONProveedor/:usuario/:contrasena', async (req, res) => {
    try {
        const usuario = req.params.usuario;
        const contrasena = req.params.contrasena;
        //TODO comprobar usuario y contrasena
        const JSONProveedor = req.params.JSONProveedor;
        const proveedorInsertar = JSON.parse(JSONProveedor)
        DBConnection.insertarProveedor(proveedorInsertar.nombre, proveedorInsertar.nit, proveedorInsertar.direccion, proveedorInsertar.descripcion, proveedorInsertar.telefono)
        res.json({ DBRes: "Insercion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Insertar producto
server.get('/api/insert/productos/:JSONObject/:usuario/:contrasena', async (req, res) => {
    try {
        const usuario = req.params.usuario;
        const contrasena = req.params.contrasena;
        //TODO comprobar usuario y contrasena
        const JSONObject = req.params.JSONObject;
        const objetoAInsertar = JSON.parse(JSONObject)
        DBConnection.insertarProducto(objetoAInsertar.nombre, objetoAInsertar.descripcion, objetoAInsertar.identificacion, objetoAInsertar.precio_alquiler, objetoAInsertar.precio_compra, objetoAInsertar.marca, objetoAInsertar.modelo, objetoAInsertar.tipo_vehiculo)
        res.json({ DBRes: "Insercion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Insertar proyecto
server.get('/api/insert/proyectos/:JSONObject/:usuario/:contrasena', async (req, res) => {
    try {
        const usuario = req.params.usuario;
        const contrasena = req.params.contrasena;
        //TODO comprobar usuario y contrasena
        const JSONObject = req.params.JSONObject;
        const objetoAInsertar = JSON.parse(JSONObject)
        DBConnection.insertarProyecto(objetoAInsertar.nombre, objetoAInsertar.identificacion, objetoAInsertar.tipo_identificacion, objetoAInsertar.telefono, objetoAInsertar.descripcion, objetoAInsertar.fecha_entrega, objetoAInsertar.estado_avance)
        res.json({ DBRes: "Insercion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Insertar conductor
server.get('/api/insert/conductores/:JSONObject/:usuario/:contrasena', async (req, res) => {
    try {
        const usuario = req.params.usuario;
        const contrasena = req.params.contrasena;
        //TODO comprobar usuario y contrasena
        const JSONObject = req.params.JSONObject;
        const objetoAInsertar = JSON.parse(JSONObject)
        DBConnection.insertarConductor(objetoAInsertar.nombre, objetoAInsertar.cedula, objetoAInsertar.telefono)
        res.json({ DBRes: "Insercion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

// Iniciar
server.listen(PORT, () => {
    // DBConnection.obtenerUsuarios().then((result) => {
    //     console.log(result.rows)
    // })
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});