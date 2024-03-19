const express = require('express');
const cors = require('cors');
const FileReader = require('./FileReader.js');
const Fetch = require('./db-fetch.js');

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
    res.send('¡Hola, mundo! (SERVER)');
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

        //Comprobar usuario y contrasena
        const dbRes = (await Fetch.fetchApi(`get/constrasenatipo/${usuario}`)).DBRes
        if(dbRes && dbRes.rows && dbRes.rows[0]){
            const contrasenaReal = dbRes.rows[0].contrasena
    
            if(contrasenaReal){
                bool = (contrasena === contrasenaReal)
            }
        }

        res.json({ Res: bool });
    } catch (error) {
        res.json({ Res: bool, error });
    }
});

//Verificar permisos de un usuario
server.get('/api/permiso/:usuario/:contrasena/:tipoUsuario', async (req, res) => {
    try {
        
        const usuario = req.params.usuario
        const contrasena = req.params.contrasena
        const tipoUsuario = req.params.tipoUsuario

        res.json({ Res: await comprobarPermisos(usuario,contrasena,tipoUsuario) });

    } catch (error) {
        res.json({ Res: error });
    }
});

const comprobarPermisos = async (usuario,contrasena,tiposUsuarioPermitido) => {
    let res = false

    const dbRes = (await Fetch.fetchApi(`get/constrasenatipo/${usuario}`)).DBRes
    if(dbRes && dbRes.rows && dbRes.rows[0]){
        if(dbRes.rows[0].contrasena === contrasena){
            if( tiposUsuarioPermitido.includes(dbRes.rows[0].tipo_usuario) ){
                res = true
            }
        }
    }

    return res
}

//Agregar usuario
server.get('/api/agregar/usuario/:JSONObject/:usuario/:contrasena', async (req, res) => {
    try {

        const JSONObject = req.params.JSONObject;
        //TODO comprobar permisos
        await Fetch.fetchApi(`insert/usuarios/${JSONObject}`)
        
        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Agregar proveedor
server.get('/api/agregar/proveedor/:JSONObject/:usuario/:contrasena', async (req, res) => {
    try {

        const JSONObject = req.params.JSONObject;
        //TODO comprobar permisos
        await Fetch.fetchApi(`insert/proveedores/${JSONObject}`)
        
        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Agregar producto
server.get('/api/agregar/producto/:JSONObject/:usuario/:contrasena', async (req, res) => {
    try {

        const JSONObject = req.params.JSONObject;
        //TODO comprobar permisos
        await Fetch.fetchApi(`insert/productos/${JSONObject}`)
        
        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Agregar proyecto
server.get('/api/agregar/proyecto/:JSONObject/:usuario/:contrasena', async (req, res) => {
    try {

        const JSONObject = req.params.JSONObject;
        //TODO comprobar permisos
        await Fetch.fetchApi(`insert/proyectos/${JSONObject}`)
        
        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Agregar conductor
server.get('/api/agregar/conductor/:JSONObject/:usuario/:contrasena', async (req, res) => {
    try {

        const JSONObject = req.params.JSONObject;
        //TODO comprobar permisos
        await Fetch.fetchApi(`insert/conductores/${JSONObject}`)
        
        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Obtener usuarios
server.get('/api/obtener/usuarios/:usuario/:contrasena', async (req, res) => {
    try {

        //TODO comprobar permisos
        
        res.json({ Res: (await Fetch.fetchApi(`get/usuarios`)).DBRes.rows });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Obtener proveedores
server.get('/api/obtener/proveedores/:usuario/:contrasena', async (req, res) => {
    try {

        //TODO comprobar permisos
        
        res.json({ Res: (await Fetch.fetchApi(`get/proveedores`)).DBRes.rows });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Obtener productos
server.get('/api/obtener/productos/:usuario/:contrasena', async (req, res) => {
    try {

        //TODO comprobar permisos
        
        res.json({ Res: (await Fetch.fetchApi(`get/productos`)).DBRes.rows });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Obtener proyectos
server.get('/api/obtener/proyectos/:usuario/:contrasena', async (req, res) => {
    try {

        //TODO comprobar permisos
        
        res.json({ Res: (await Fetch.fetchApi(`get/proyectos`)).DBRes.rows });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Obtener conductores
server.get('/api/obtener/conductores/:usuario/:contrasena', async (req, res) => {
    try {

        //TODO comprobar permisos
        
        res.json({ Res: (await Fetch.fetchApi(`get/conductores`)).DBRes.rows });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Obtener conductores
server.get('/api/obtener/conductores/:usuario/:contrasena', async (req, res) => {
    try {

        //TODO comprobar permisos
        
        res.json({ Res: (await Fetch.fetchApi(`get/conductores`)).DBRes.rows });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Actualizar usuario
server.get('/api/actualizar/usuario/:JSONActualizar/:usuario/:contrasena', async (req, res) => {
    try {

        //TODO comprobar permisos
        
        const JSONActualizar = req.params.JSONActualizar;

        Fetch.fetchApi(`update/usuarios/${JSONActualizar}`)

        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Actualizar proveedor
server.get('/api/actualizar/proveedor/:JSONActualizar/:usuario/:contrasena', async (req, res) => {
    try {

        //TODO comprobar permisos
        
        const JSONActualizar = req.params.JSONActualizar;

        Fetch.fetchApi(`update/proveedores/${JSONActualizar}`)

        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Actualizar producto
server.get('/api/actualizar/producto/:JSONActualizar/:usuario/:contrasena', async (req, res) => {
    try {

        //TODO comprobar permisos
        
        const JSONActualizar = req.params.JSONActualizar;

        Fetch.fetchApi(`update/productos/${JSONActualizar}`)

        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Actualizar proyecto
server.get('/api/actualizar/proyecto/:JSONActualizar/:usuario/:contrasena', async (req, res) => {
    try {

        //TODO comprobar permisos
        
        const JSONActualizar = req.params.JSONActualizar;

        Fetch.fetchApi(`update/proyectos/${JSONActualizar}`)

        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Actualizar conductor
server.get('/api/actualizar/conductor/:JSONActualizar/:usuario/:contrasena', async (req, res) => {
    try {

        //TODO comprobar permisos
        
        const JSONActualizar = req.params.JSONActualizar;

        Fetch.fetchApi(`update/conductores/${JSONActualizar}`)

        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Eliminar usuario
server.get('/api/eliminar/usuario/:id/:usuario/:contrasena', async (req, res) => {
    try {
        
        //TODO comprobar permisos

        const id = req.params.id;
        await Fetch.fetchApi(`delete/usuarios/${id}`)

        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Eliminar proveedor
server.get('/api/eliminar/proveedor/:id/:usuario/:contrasena', async (req, res) => {
    try {
        
        //TODO comprobar permisos

        const id = req.params.id;
        await Fetch.fetchApi(`delete/proveedores/${id}`)

        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Eliminar producto
server.get('/api/eliminar/producto/:id/:usuario/:contrasena', async (req, res) => {
    try {
        
        //TODO comprobar permisos

        const id = req.params.id;
        await Fetch.fetchApi(`delete/productos/${id}`)

        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Eliminar proyecto
server.get('/api/eliminar/proyecto/:id/:usuario/:contrasena', async (req, res) => {
    try {
        
        //TODO comprobar permisos

        const id = req.params.id;
        await Fetch.fetchApi(`delete/proyectos/${id}`)

        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Eliminar conductor
server.get('/api/eliminar/conductor/:id/:usuario/:contrasena', async (req, res) => {
    try {
        
        //TODO comprobar permisos

        const id = req.params.id;
        await Fetch.fetchApi(`delete/conductores/${id}`)

        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Eliminar conductor
server.get('/api/eliminar/conductor/:id/:usuario/:contrasena', async (req, res) => {
    try {
        
        //TODO comprobar permisos

        const id = req.params.id;
        await Fetch.fetchApi(`delete/conductores/${id}`)

        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});

// Iniciar
server.listen(PORT, () => {
/*     Fetch.fetchApi(`get/constrasenatipo/${"a"}`).then((Res)=>{
        console.log(Res.DBRes.rows)
    }) */
/*     comprobarPermisos("a","a","ADMINISTRADOR CLIENTE").then((Res)=>{
        console.log(Res)
    }) */
/*     Fetch.fetchApi(`sqlquery/${"SELECT * FROM usuarios/null"}`).then((Res)=>{
        console.log(Res.DBRes.rows)
    }) */
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

