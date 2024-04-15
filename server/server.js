const express = require('express');
const cors = require('cors');
const FileReader = require('./FileReader.js');
const Fetch = require('./db-fetch.js');

const config = FileReader.readServerConfig()

let server = express();
const PORT = config.port; // Puerto del servidor

//Puertos e ips permitidas
const corsLinks = config.corsLinks
corsLinks.forEach(link => {
    server.use(cors({ origin: link }));
});


//INICIO FUNCIONES PRUEBA
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
//prueba
server.get('/api/prueba/:texto', async (req, res) => {
    try {

        //TODO comprobar permisos
        const texto = req.params.texto
        
        res.json({ Res: (await Fetch.fetchApi(`prueba/${texto}`)).DBRes });
    } catch (error) {
        res.json({ Res: error });
    }
});
//FIN FUNCIONES PRUEBA


//INICIO FUNCIONES LOGICA NEGOCIO

//1, 2, 3 Agregar Alquiler
server.get('/api/prueba/:texto', async (req, res) => {
    try {

        //TODO comprobar permisos
        const texto = req.params.texto
        
        res.json({ Res: (await Fetch.fetchApi(`prueba/${texto}`)).DBRes });
    } catch (error) {
        res.json({ Res: error });
    }
});

//FIN FUNCIONES LOGICA NEGOCIO


//INICIO FUNCIONES CRUD
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

        res.json({ Res: {usuario: dbRes.rows[0], bool} });
    } catch (error) {
        res.json({ Res: {error,bool} });
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
//FIN FUNCIONES CRUD


// Iniciar
server.listen(PORT, () => {

    //Fetch de prueba
/*     Fetch.fetchApi(`get/constrasenatipo/${"a"}`).then((Res)=>{
        console.log(Res.DBRes.rows)
    }) */
/*     comprobarPermisos("a","a","ADMINISTRADOR CLIENTE").then((Res)=>{
        console.log(Res)
    }) */
/*     Fetch.fetchApi(`sqlquery/${"SELECT * FROM usuarios/null"}`).then((Res)=>{
        console.log(Res.DBRes.rows)
    }) */


    //Fetch operaciones logica negocio
    //1 Fetch.fetchApi(`clienteAgregarAlquiler1/2`).then((res)=>{
    //     console.log(res.DBRes.rows[0].idalquileres)
    // })

    //2 Fetch.fetchApi(`clienteAgregarAgenda2/${"2024-04-10"}/${"2024-04-15"}/Origen/Destino`).then((res)=>{
    //     console.log(res.DBRes.rows[0].idagenda)
    // })clienteAgregarProductosHasAlquileres3/:PRODUCTOS_idProductos/:ALQUILERES_idAlquileres/:ALQUILERES_Usuarios_idUsuarios/:AGENDAS_idAgendas

    //3 Fetch.fetchApi(`clienteAgregarProductosHasAlquileres3/1/9/2/1`).then((res)=>{
    //     console.log(res.DBRes)
    // })

    //3.5 Fetch.fetchApi(`administradorAgregarConductor3_5/${"Patricio Estrella"}/700/370`).then((res)=>{
    //     console.log(res.DBRes.rows[0].idconductores)
    // })

    //3.51 Fetch.fetchApi(`administradorActualizarConductorDeAgenda3_51/1/1`).then((res)=>{
    //     console.log(res.DBRes)
    // })

    //4 Fetch.fetchApi(`administradorActualizarAlquiler4/9/100000/150000/20000/19000/50000/0/'0'`).then((res)=>{
    //     console.log(res.DBRes)
    // })

    //5 Fetch.fetchApi(`clienteActualizarAlquiler5/9`).then((res)=>{
    //     console.log(res.DBRes)
    // })

    //8 Fetch.fetchApi(`administradorAgregarCompras8/1/${"Paco Villas"}/450000000/500000000/20000/19000/10`).then((res)=>{
    //     console.log(res.DBRes)
    // })

    //9 Fetch.fetchApi(`administradorAgregarProductosHasCompras9/1/1/1`).then((res)=>{
    //     console.log(res.DBRes)
    // })

    //10 Fetch.fetchApi(`clienteAgregarBalance10/100000/${'Alquiler'}/9/0`).then((res)=>{
    //     console.log(res.DBRes)
    // })   

    //12 Fetch.fetchApi(`administradorAgregarMantenimiento12/${'Se realiza un mantenimiento rutinario al vehículo.'}/2024-04-13/50000/1`).then((res)=>{
    //     console.log(res.DBRes.rows[0].idhistorialmantenimientos)
    // })
    
    

    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
