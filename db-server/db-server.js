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
    res.send('¡Hola, mundo! (DB SERVER)');
});
server.get('/dbapi/ejemplo', (req, res) => {
    res.json({ mensaje: 'Esta es una API de ejemplo'});
});
server.get('/dbapi/saludo/:nombre/:apellido', (req, res) => {
    const nombre = req.params.nombre;
    const apellido = req.params.apellido;
    res.json({ mensaje: `¡Hola, ${nombre} ${apellido}! Bienvenido a nuestra API.` });
});

//Insertar usuario
server.get('/dbapi/insert/usuarios/:JSONUsuario', async (req, res) => {
    try {

        const JSONUsuario = req.params.JSONUsuario;
        const usuarioInsertar = JSON.parse(JSONUsuario)
        DBConnection.insertarUsuario(usuarioInsertar.nombre_usuario, usuarioInsertar.contrasena, usuarioInsertar.nombre_real, usuarioInsertar.direccion, usuarioInsertar.telefono, usuarioInsertar.identificacion, usuarioInsertar.correo, usuarioInsertar.tipo_identificacion, usuarioInsertar.tipo_usuario)
        res.json({ DBRes: "Insercion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Insertar proveedor
server.get('/dbapi/insert/proveedores/:JSONProveedor', async (req, res) => {
    try {
        
        const JSONProveedor = req.params.JSONProveedor;
        const proveedorInsertar = JSON.parse(JSONProveedor)
        DBConnection.insertarProveedor(proveedorInsertar.nombre, proveedorInsertar.nit, proveedorInsertar.direccion, proveedorInsertar.descripcion, proveedorInsertar.telefono)
        res.json({ DBRes: "Insercion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Insertar producto
server.get('/dbapi/insert/productos/:JSONObject', async (req, res) => {
    try {
        
        const JSONObject = req.params.JSONObject;
        const objetoAInsertar = JSON.parse(JSONObject)
        DBConnection.insertarProducto(objetoAInsertar.nombre, objetoAInsertar.descripcion, objetoAInsertar.identificacion, objetoAInsertar.precio_alquiler, objetoAInsertar.precio_compra, objetoAInsertar.marca, objetoAInsertar.modelo, objetoAInsertar.tipo_vehiculo, objetoAInsertar.estado)
        res.json({ DBRes: "Insercion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Insertar proyecto
server.get('/dbapi/insert/proyectos/:JSONObject', async (req, res) => {
    try {
        
        const JSONObject = req.params.JSONObject;
        const objetoAInsertar = JSON.parse(JSONObject)
        DBConnection.insertarProyecto(objetoAInsertar.nombre, objetoAInsertar.identificacion, objetoAInsertar.tipo_identificacion, objetoAInsertar.telefono, objetoAInsertar.descripcion, objetoAInsertar.fecha_entrega, objetoAInsertar.estado_avance)
        res.json({ DBRes: "Insercion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Insertar conductor
server.get('/dbapi/insert/conductores/:JSONObject', async (req, res) => {
    try {
        
        const JSONObject = req.params.JSONObject;
        const objetoAInsertar = JSON.parse(JSONObject)
        DBConnection.insertarConductor(objetoAInsertar.nombre, objetoAInsertar.cedula, objetoAInsertar.telefono)
        res.json({ DBRes: "Insercion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Obtener contraseña y tipo con nombre de usuario.
server.get('/dbapi/get/constrasenatipo/:nUsuario', async (req, res) => {
    try {

        const nUsuario = req.params.nUsuario;
        res.json({ DBRes: await DBConnection.obtenerContrasenaUsuario(nUsuario) });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Obtener usuarios
server.get('/dbapi/get/usuarios', async (req, res) => {
    try {
        
        res.json({ DBRes: await DBConnection.obtenerUsuarios() });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Obtener proveedores
server.get('/dbapi/get/proveedores', async (req, res) => {
    try {
        
        res.json({ DBRes: await DBConnection.obtenerProveedores() });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Obtener productos
server.get('/dbapi/get/productos', async (req, res) => {
    try {
        
        res.json({ DBRes: await DBConnection.obtenerProductos() });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Obtener proyectos
server.get('/dbapi/get/proyectos', async (req, res) => {
    try {
        
        res.json({ DBRes: await DBConnection.obtenerProyectos() });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Obtener conductores
server.get('/dbapi/get/conductores', async (req, res) => {
    try {
        
        res.json({ DBRes: await DBConnection.obtenerConductores() });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Actualizar usuario
server.get('/dbapi/update/usuarios/:JSONUsuario', async (req, res) => {
    try {
        
        const JSONUsuario = req.params.JSONUsuario;
        const usuarioInsertar = JSON.parse(JSONUsuario)
        DBConnection.actualizarUsuario(usuarioInsertar.idusuarios, usuarioInsertar.nombre_usuario, usuarioInsertar.contrasena, usuarioInsertar.nombre_real, usuarioInsertar.direccion, usuarioInsertar.telefono, usuarioInsertar.identificacion, usuarioInsertar.correo, usuarioInsertar.tipo_identificacion, usuarioInsertar.tipo_usuario)
        res.json({ DBRes: "Actualizacion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Actualizar proveedor
server.get('/dbapi/update/proveedores/:JSONProveedor', async (req, res) => {
    try {
        
        const JSONProveedor = req.params.JSONProveedor;
        const proveedorInsertar = JSON.parse(JSONProveedor)
        DBConnection.actualizarProveedor(proveedorInsertar.idProveedores, proveedorInsertar.nombre, proveedorInsertar.nit, proveedorInsertar.direccion, proveedorInsertar.descripcion, proveedorInsertar.telefono)
        res.json({ DBRes: "Actualizacion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Actualizar producto
server.get('/dbapi/update/productos/:JSONObject', async (req, res) => {
    try {
        
        const JSONObject = req.params.JSONObject;
        const objetoAInsertar = JSON.parse(JSONObject)
        DBConnection.actualizarProducto(objetoAInsertar.idProductos, objetoAInsertar.nombre, objetoAInsertar.descripcion, objetoAInsertar.identificacion, objetoAInsertar.precio_alquiler, objetoAInsertar.precio_compra, objetoAInsertar.marca, objetoAInsertar.modelo, objetoAInsertar.tipo_vehiculo, objetoAInsertar.estado)
        res.json({ DBRes: "Actualizacion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Actualizar proyecto
server.get('/dbapi/update/proyectos/:JSONObject', async (req, res) => {
    try {
        
        const JSONObject = req.params.JSONObject;
        const objetoAInsertar = JSON.parse(JSONObject)
        DBConnection.actualizarProyecto(objetoAInsertar.idProyectos, objetoAInsertar.nombre, objetoAInsertar.identificacion, objetoAInsertar.tipo_identificacion, objetoAInsertar.telefono, objetoAInsertar.descripcion, objetoAInsertar.fecha_entrega, objetoAInsertar.estado_avance)
        res.json({ DBRes: "Actualizacion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Actualizar conductor
server.get('/dbapi/update/conductores/:JSONObject', async (req, res) => {
    try {
        
        const JSONObject = req.params.JSONObject;
        const objetoAInsertar = JSON.parse(JSONObject)
        DBConnection.actualizarConductor(objetoAInsertar.idConductores, objetoAInsertar.nombre, objetoAInsertar.cedula, objetoAInsertar.telefono)
        res.json({ DBRes: "Actualizacion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Eliminar usuario
server.get('/dbapi/delete/usuarios/:id', async (req, res) => {
    try {
        
        const id = req.params.id;
        const usuarioInsertar = JSON.parse(JSONUsuario)
        DBConnection.eliminarUsuario(id)
        res.json({ DBRes: "Eliminacion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Eliminar proveedores
server.get('/dbapi/delete/proveedores/:id', async (req, res) => {
    try {
        
        const id = req.params.id;
        const usuarioInsertar = JSON.parse(JSONUsuario)
        DBConnection.eliminarProveedor(id)
        res.json({ DBRes: "Eliminacion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Eliminar productos
server.get('/dbapi/delete/productos/:id', async (req, res) => {
    try {
        
        const id = req.params.id;
        const usuarioInsertar = JSON.parse(JSONUsuario)
        DBConnection.eliminarProducto(id)
        res.json({ DBRes: "Eliminacion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Eliminar proyectos
server.get('/dbapi/delete/proyectos/:id', async (req, res) => {
    try {
        
        const id = req.params.id;
        const usuarioInsertar = JSON.parse(JSONUsuario)
        DBConnection.eliminarProyecto(id)
        res.json({ DBRes: "Eliminacion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Eliminar conductores
server.get('/dbapi/delete/conductores/:id', async (req, res) => {
    try {
        
        const id = req.params.id;
        const usuarioInsertar = JSON.parse(JSONUsuario)
        DBConnection.eliminarConductor(id)
        res.json({ DBRes: "Eliminacion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Consulta personalizada
server.get('/dbapi/sqlquery/:sqlQuery/:JSONValues', async (req, res) => {
    let bool = false
    try {
        
        const sqlQuery = req.params.sqlQuery
        const JSONValues = req.params.JSONValues
        

        if(JSONValues){
            const values = JSON.parse(JSONValues)
            res.json({ DBRes: await DBConnection.sqlQueryValues(sqlQuery, values) });
        }else{
            res.json({ DBRes: await DBConnection.sqlQuery(sqlQuery) });
        }

    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Consulta personalizada
server.get('/dbapi/sqlquery/:sqlQuery', async (req, res) => {
    let bool = false
    try {
        
        const sqlQuery = req.params.sqlQuery
        
        res.json({ DBRes: await DBConnection.sqlQuery(sqlQuery) });

    } catch (error) {
        res.json({ DBRes: error });
    }
});

// Iniciar
server.listen(PORT, () => {
/*     DBConnection.obtenerUsuarios().then((result) => {
        console.log(result.rows)
    }) */
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});