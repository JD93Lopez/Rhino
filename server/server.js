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
        //TODO comprobar usuario y contrasena
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

const comprobarPermisos = async (usuario,contrasena,tipoUsuarioPermitido) => {
    let res = false

    const dbRes = (await Fetch.fetchApi(`get/constrasenatipo/${usuario}`)).DBRes
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
/*     Fetch.fetchApi(`get/constrasenatipo/${"a"}`).then((Res)=>{
        console.log(Res.DBRes.rows)
    }) */
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

