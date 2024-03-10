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

//Inicio de sesion
server.get('/api/signin/:usuario/:contrasena', async (req, res) => {
    let bool = false
    try {
        const usuario = req.params.usuario;
        const contrasena = req.params.contrasena;
        //TODO comprobar usuario y contrasena
        const dbRes = await DBConnection.obtenerContrasenaUsuario(usuario)
        if(dbRes && dbRes.rows && dbRes.rows[0]){
            const contrasenaReal = dbRes.rows[0].contrasena
    
            if(contrasenaReal){
                bool = (contrasena === contrasenaReal)
            }
        }

        res.json({ DBRes: bool });
    } catch (error) {
        res.json({ DBRes: bool, error });
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
        DBConnection.insertarUsuario(usuarioInsertar.nombre_usuario, usuarioInsertar.contrasena, usuarioInsertar.nombre_real, usuarioInsertar.direccion, usuarioInsertar.telefono, usuarioInsertar.identificacion, usuarioInsertar.correo, usuarioInsertar.tipo_identificacion, usuarioInsertar.tipo_usuario)
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

//Obtener proveedores
server.get('/api/get/proveedores/:usuario/:contrasena', async (req, res) => {
    try {
        const usuario = req.params.usuario;
        const contrasena = req.params.contrasena;
        //TODO comprobar usuario y contrasena
        res.json({ DBRes: await DBConnection.obtenerProveedores() });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Obtener productos
server.get('/api/get/productos/:usuario/:contrasena', async (req, res) => {
    try {
        const usuario = req.params.usuario;
        const contrasena = req.params.contrasena;
        //TODO comprobar usuario y contrasena
        res.json({ DBRes: await DBConnection.obtenerProductos() });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Obtener proyectos
server.get('/api/get/proyectos/:usuario/:contrasena', async (req, res) => {
    try {
        const usuario = req.params.usuario;
        const contrasena = req.params.contrasena;
        //TODO comprobar usuario y contrasena
        res.json({ DBRes: await DBConnection.obtenerProyectos() });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Obtener conductores
server.get('/api/get/conductores/:usuario/:contrasena', async (req, res) => {
    try {
        const usuario = req.params.usuario;
        const contrasena = req.params.contrasena;
        //TODO comprobar usuario y contrasena
        res.json({ DBRes: await DBConnection.obtenerConductores() });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Actualizar usuario
server.get('/api/update/usuarios/:JSONUsuario/:usuario/:contrasena', async (req, res) => {
    try {
        const usuario = req.params.usuario;
        const contrasena = req.params.contrasena;
        //TODO comprobar usuario y contrasena
        const JSONUsuario = req.params.JSONUsuario;
        const usuarioInsertar = JSON.parse(JSONUsuario)
        DBConnection.actualizarUsuario(usuarioInsertar.idusuarios, usuarioInsertar.nombre_usuario, usuarioInsertar.contrasena, usuarioInsertar.nombre_real, usuarioInsertar.direccion, usuarioInsertar.telefono, usuarioInsertar.identificacion, usuarioInsertar.correo, usuarioInsertar.tipo_identificacion, usuarioInsertar.tipo_usuario)
        res.json({ DBRes: "Actualizacion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Actualizar proveedor
server.get('/api/update/proveedores/:JSONProveedor/:usuario/:contrasena', async (req, res) => {
    try {
        const usuario = req.params.usuario;
        const contrasena = req.params.contrasena;
        //TODO comprobar usuario y contrasena
        const JSONProveedor = req.params.JSONProveedor;
        const proveedorInsertar = JSON.parse(JSONProveedor)
        DBConnection.actualizarProveedor(proveedorInsertar.idProveedores, proveedorInsertar.nombre, proveedorInsertar.nit, proveedorInsertar.direccion, proveedorInsertar.descripcion, proveedorInsertar.telefono)
        res.json({ DBRes: "Actualizacion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Actualizar producto
server.get('/api/update/productos/:JSONObject/:usuario/:contrasena', async (req, res) => {
    try {
        const usuario = req.params.usuario;
        const contrasena = req.params.contrasena;
        //TODO comprobar usuario y contrasena
        const JSONObject = req.params.JSONObject;
        const objetoAInsertar = JSON.parse(JSONObject)
        DBConnection.actualizarProducto(objetoAInsertar.idProductos, objetoAInsertar.nombre, objetoAInsertar.descripcion, objetoAInsertar.identificacion, objetoAInsertar.precio_alquiler, objetoAInsertar.precio_compra, objetoAInsertar.marca, objetoAInsertar.modelo, objetoAInsertar.tipo_vehiculo)
        res.json({ DBRes: "Actualizacion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Actualizar proyecto
server.get('/api/update/proyectos/:JSONObject/:usuario/:contrasena', async (req, res) => {
    try {
        const usuario = req.params.usuario;
        const contrasena = req.params.contrasena;
        //TODO comprobar usuario y contrasena
        const JSONObject = req.params.JSONObject;
        const objetoAInsertar = JSON.parse(JSONObject)
        DBConnection.actualizarProyecto(objetoAInsertar.idProyectos, objetoAInsertar.nombre, objetoAInsertar.identificacion, objetoAInsertar.tipo_identificacion, objetoAInsertar.telefono, objetoAInsertar.descripcion, objetoAInsertar.fecha_entrega, objetoAInsertar.estado_avance)
        res.json({ DBRes: "Actualizacion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Actualizar conductor
server.get('/api/update/conductores/:JSONObject/:usuario/:contrasena', async (req, res) => {
    try {
        const usuario = req.params.usuario;
        const contrasena = req.params.contrasena;
        //TODO comprobar usuario y contrasena
        const JSONObject = req.params.JSONObject;
        const objetoAInsertar = JSON.parse(JSONObject)
        DBConnection.actualizarConductor(objetoAInsertar.idConductores, objetoAInsertar.nombre, objetoAInsertar.cedula, objetoAInsertar.telefono)
        res.json({ DBRes: "Actualizacion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Eliminar usuario
server.get('/api/delete/usuarios/:id/:usuario/:contrasena', async (req, res) => {
    try {
        const usuario = req.params.usuario;
        const contrasena = req.params.contrasena;
        //TODO comprobar usuario y contrasena
        const id = req.params.id;
        const usuarioInsertar = JSON.parse(JSONUsuario)
        DBConnection.eliminarUsuario(id)
        res.json({ DBRes: "Eliminacion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Eliminar proveedores
server.get('/api/delete/proveedores/:id/:usuario/:contrasena', async (req, res) => {
    try {
        const usuario = req.params.usuario;
        const contrasena = req.params.contrasena;
        //TODO comprobar usuario y contrasena
        const id = req.params.id;
        const usuarioInsertar = JSON.parse(JSONUsuario)
        DBConnection.eliminarProveedor(id)
        res.json({ DBRes: "Eliminacion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Eliminar productos
server.get('/api/delete/productos/:id/:usuario/:contrasena', async (req, res) => {
    try {
        const usuario = req.params.usuario;
        const contrasena = req.params.contrasena;
        //TODO comprobar usuario y contrasena
        const id = req.params.id;
        const usuarioInsertar = JSON.parse(JSONUsuario)
        DBConnection.eliminarProducto(id)
        res.json({ DBRes: "Eliminacion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Eliminar proyectos
server.get('/api/delete/proyectos/:id/:usuario/:contrasena', async (req, res) => {
    try {
        const usuario = req.params.usuario;
        const contrasena = req.params.contrasena;
        //TODO comprobar usuario y contrasena
        const id = req.params.id;
        const usuarioInsertar = JSON.parse(JSONUsuario)
        DBConnection.eliminarProyecto(id)
        res.json({ DBRes: "Eliminacion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Eliminar conductores
server.get('/api/delete/conductores/:id/:usuario/:contrasena', async (req, res) => {
    try {
        const usuario = req.params.usuario;
        const contrasena = req.params.contrasena;
        //TODO comprobar usuario y contrasena
        const id = req.params.id;
        const usuarioInsertar = JSON.parse(JSONUsuario)
        DBConnection.eliminarConductor(id)
        res.json({ DBRes: "Eliminacion Finalizada" });
    } catch (error) {
        res.json({ DBRes: error });
    }
});

//Consulta personalizada
server.get('/api/sqlquery/:sqlQuery/:JSONValues/:usuario/:contrasena', async (req, res) => {
    let bool = false
    try {
        
        const usuario = req.params.usuario
        const contrasena = req.params.contrasena
        const sqlQuery = req.params.sqlQuery
        const JSONValues = req.params.JSONValues
        //TODO comprobar usuario y contrasena

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

server.get('/api/permiso/:usuario/:contrasena/:tipoUsuario', async (req, res) => {
    try {
        
        const usuario = req.params.usuario
        const contrasena = req.params.contrasena
        const tipoUsuario = req.params.tipoUsuario

        res.json({ DBRes: await comprobarPermisos(usuario,contrasena,tipoUsuario) });

    } catch (error) {
        res.json({ DBRes: error });
    }
});

const comprobarPermisos = async (usuario,contrasena,tipoUsuarioPermitido) => {
    let res = false

    const dbRes = await DBConnection.obtenerContrasenaUsuario(usuario)
    if(dbRes && dbRes.rows && dbRes.rows[0]){
        if(dbRes.rows[0].contrasena === contrasena){
            if(dbRes.rows[0].tipo_usuario === tipoUsuarioPermitido){
                res = true
            }
        }
    }

    return res
}

// Iniciar
server.listen(PORT, () => {
    // DBConnection.obtenerUsuarios().then((result) => {
    //     console.log(result.rows)
    // })
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});