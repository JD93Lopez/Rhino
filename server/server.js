const express = require('express');
const cors = require('cors');
const FileReader = require('./FileReader.js');
const Fetch = require('./db-fetch.js');
const bodyParser = require('body-parser');
const axios = require('./axios.js');

const config = FileReader.readServerConfig()

let server = express();
const PORT = config.port; // Puerto del servidor
const IP = config.ip; // Ip del servidor

//Puertos e ips permitidas
const corsLinks = config.corsLinks
server.use(cors({ origin: "*" }))
corsLinks.forEach(link => {
    server.use(cors({ origin: link }));
});

server.use(bodyParser.urlencoded({ extended: true, limit: '200mb' }));
server.use(bodyParser.json({ limit: '200mb' }));

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
server.get('/api/saludo/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.json({ mensaje: `¡Hola, ${nombre}! Bienvenido a nuestra API.2` });
});
//prueba
server.get('/api/prueba/:texto', async (req, res) => { 
    try {

        //TODO comprobar permisos
        const texto = req.params.texto
        
        res.json({ Res: (await axios.api(`prueba/${texto}`)).data.DBRes });
    } catch (error) {
        res.json({ Res: error });
    }
});
//FIN FUNCIONES PRUEBA

//INICIO FUNCIONES LOGICA NEGOCIO
//Inicio de sesion
server.get('/api/signin/:nUsuario/:contrasena', async (req, res) => {
    let bool = false
    try {
        const nUsuario = req.params.nUsuario;
        const contrasena = req.params.contrasena;

        res.json({ Res: await iniciarSesion(nUsuario,contrasena) });
    } catch (error) {
        res.json({ Res: {error,bool} });
    }
});
const iniciarSesion = async (nUsuario,contrasena) => {
    let bool = false
    //Comprobar usuario y contrasena
    const dbRes = (await axios.api(`get/constrasenatipo/${nUsuario}`)).data.DBRes
    if(dbRes && dbRes.rows && dbRes.rows[0]){
        const contrasenaReal = dbRes.rows[0].contrasena
        const estado = dbRes.rows[0].estado
        dbRes.rows[0].contrasena = ''
        if(contrasenaReal&&estado!="FUERA_DE_SERVICIO"){
            bool = (contrasena === contrasenaReal)
        }
    }

    if(!bool){
        dbRes.rows[0] = {}
    }

    return {usuario: dbRes.rows[0], bool}
}

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

    const dbRes = (await axios.api(`get/constrasenatipo/${usuario}`)).data.DBRes
    if(dbRes && dbRes.rows && dbRes.rows[0]){
        if(dbRes.rows[0].contrasena === contrasena){
            if( tiposUsuarioPermitido.includes(dbRes.rows[0].tipo_usuario) ){
                res = true
            }
        }
    }

    return res
}
//1, 2, 3 Agregar Alquiler
server.post('/api/123/:nUsuario/:contrasena', async (req, res) => {

    let bool = false
    try {
        //TODO comprobar permisos
        const nUsuario = req.params.nUsuario
        const contrasena = req.params.contrasena
        let alquiler = req.body
    
        const ResIniciarSesion = await iniciarSesion(nUsuario,contrasena)
        if(ResIniciarSesion&&ResIniciarSesion.usuario&&ResIniciarSesion.usuario.idusuarios){

            const idusuarios = ResIniciarSesion.usuario.idusuarios

            const idalquileres = (await axios.api(`clienteAgregarAlquiler1/${idusuarios}`)).data.DBRes

            if(alquiler&&alquiler.producto_agendas){
                
                const producto_agendas = alquiler.producto_agendas

                for await ( let producto_agenda of producto_agendas ){

                    const idproductos = producto_agenda.idproductos
                    const idagenda = (await axios.api(`clienteAgregarAgenda2/${producto_agenda.fecha_inicio}/${producto_agenda.fecha_fin}/${producto_agenda.lugar_origen}/${producto_agenda.lugar_destino}`)).data.DBRes

                    await axios.api(`clienteAgregarProductosHasAlquileres3/${idproductos}/${idalquileres}/${idusuarios}/${idagenda}`)

                }
                
                bool = true
            }
        }
        
        res.json({ Res: bool });
    } catch (error) {
        res.json({ Res: error });
    }
});
//1, 2, 3 Alianza
server.post('/api/pedido/alianza/:nUsuario/:contrasena', async (req, res) => {

    let bool = false
    try {
        //TODO comprobar permisos
        const nUsuario = req.params.nUsuario
        const contrasena = req.params.contrasena
        let arrayProductoAgendas = req.body
    
        const ResIniciarSesion = await iniciarSesion(nUsuario,contrasena)
        if(ResIniciarSesion&&ResIniciarSesion.usuario&&ResIniciarSesion.usuario.idusuarios){

            const idusuarios = ResIniciarSesion.usuario.idusuarios

            const idalquileres = (await axios.api(`clienteAgregarAlquiler1/${idusuarios}`)).data.DBRes

            if(arrayProductoAgendas){
                
                const producto_agendas = arrayProductoAgendas

                for await ( let producto_agenda of producto_agendas ){

                    const idproductos = producto_agenda.idproductos
                    const idagenda = (await axios.api(`clienteAgregarAgenda2/${producto_agenda.fecha_inicio}/${producto_agenda.fecha_fin}/${producto_agenda.lugar_origen}/${producto_agenda.lugar_destino}`)).data.DBRes

                    await axios.api(`clienteAgregarProductosHasAlquileres3/${idproductos}/${idalquileres}/${idusuarios}/${idagenda}`)

                }
                
                bool = true
            }
        }
        
        res.json({ Res: bool });
    } catch (error) {
        res.json({ Res: error });
    }
});
//3.51 Agregar conductor a agenda (Solo cedula)
server.get('/api/3_51/:idagenda/:cedula/:nUsuario/:contrasena', async (req, res) => {
    let idconductores = 0
    try {
        //TODO comprobar permisos
        const idagenda = req.params.idagenda
        const cedula = req.params.cedula

        const ResConductor = (await axios.api(`conductorPorCedula/${cedula}`)).data
        if(ResConductor&&ResConductor.DBRes&&ResConductor.DBRes.rows&&ResConductor.DBRes.rows[0]&&ResConductor.DBRes.rows[0].idconductores){
            idconductores = ResConductor.DBRes.rows[0].idconductores
            await axios.api(`administradorActualizarConductorDeAgenda3_51/${idagenda}/${idconductores}`)
        }
        
        res.json({ Res: idconductores });
    } catch (error) {
        res.json({ Res: error });
    }
});
//3.5 3.51 Agregar conductor a agenda (Incluyendo conductor)
server.get('/api/3_53_51/:idagenda/:cedula/:nombre/:telefono/:nUsuario/:contrasena', async (req, res) => {
    let idconductores = 0
    try {
        //TODO comprobar permisos
        const idagenda = req.params.idagenda
        const cedula = req.params.cedula
        const nombre = req.params.nombre
        const telefono = req.params.telefono

        const ResConductor = (await axios.api(`conductorPorCedula/${cedula}`)).data
        if(ResConductor&&ResConductor.DBRes&&ResConductor.DBRes.rows&&ResConductor.DBRes.rows[0]&&ResConductor.DBRes.rows[0].idconductores){
            idconductores = ResConductor.DBRes.rows[0].idconductores
            await axios.api(`administradorActualizarConductorDeAgenda3_51/${idagenda}/${idconductores}`)
        }else{
            idconductores = (await axios.api(`administradorAgregarConductor3_5/${nombre}/${cedula}/${telefono}`)).data.DBRes
            await axios.api(`administradorActualizarConductorDeAgenda3_51/${idagenda}/${idconductores}`)
        }
        
        res.json({ Res: idconductores });
    } catch (error) {
        res.json({ Res: error });
    }
});
//4 administrador actualizar alquiler tras rellenar campos restantes
server.get('/api/4/:idAlquileres/:subtotal/:total/:total_descuento/:total_impuestos/:valor_conductores/:gastos_adicionales/:justificacion_ga/:nUsuario/:contrasena', async (req, res) => {
    let bool = false
    try {
        //TODO comprobar permisos
        const idAlquileres = req.params.idAlquileres
        const subtotal = req.params.subtotal
        const total = req.params.total
        const total_descuento = req.params.total_descuento
        const total_impuestos = req.params.total_impuestos
        const valor_conductores = req.params.valor_conductores
        const gastos_adicionales = req.params.gastos_adicionales
        const justificacion_ga = req.params.justificacion_ga

        await axios.api(`administradorActualizarAlquiler4/${idAlquileres}/${subtotal}/${total}/${total_descuento}/${total_impuestos}/${valor_conductores}/${gastos_adicionales}/${justificacion_ga}`)

        bool = true

        res.json({ Res: bool });
    } catch (error) {
        res.json({ Res: error });
    }
});
//5 cliente actualizar alquiler al pagar cotizacion
server.get('/api/5/:idAlquileres/:nUsuario/:contrasena', async (req, res) => {
    let bool = false
    try {
        //TODO comprobar permisos
        const idAlquileres = req.params.idAlquileres

        await axios.api(`clienteActualizarAlquiler5/${idAlquileres}`)

        bool = true

        res.json({ Res: bool });
    } catch (error) {
        res.json({ Res: error });
    }
});
//8 administrador agregar compras
server.get('/api/8/:nit/:responsable/:p_descuento/:p_impuestos', async (req, res) => {
    try {
        //TODO comprobar permisos
        const nit = req.params.nit
        const responsable = req.params.responsable
        const p_descuento = req.params.p_descuento
        const p_impuestos = req.params.p_impuestos
    
        const proveedores = (await axios.api(`proveedoresPorNit/${nit}`)).data.DBRes

        let idcompras = 0
        if(proveedores&&proveedores[0]&&proveedores[0].idproveedores){

            const proveedores_idproveedores = proveedores[0].idproveedores

            idcompras = (await axios.api(`administradorAgregarCompras8/${proveedores_idproveedores}/${responsable}/${p_descuento}/${p_impuestos}`)).data.DBRes.rows[0].idcompras
        }

        res.json({ Res: idcompras });
    } catch (error) {
        res.json({ Res: error });
    }
});
//8_5 9 administrador actualizar compras y agregar productos has compras
server.get('/api/8_59/:idcompras/:identificacion/:precio_compra', async (req, res) => {
    bool = false
    try {
        //TODO comprobar permisos
        const idcompras = req.params.idcompras
        const identificacion = req.params.identificacion
        const precio_compra = parseInt(req.params.precio_compra)
        
        const productos = (await axios.api(`productosPorIdentificacion/${identificacion}`)).data.DBRes
        if(productos&&productos[0]&&productos[0].idproductos){
            const idproductos = productos[0].idproductos;
            (await axios.api(`actualizarPreciocompraProducto/${idproductos}/${precio_compra}`));
            
            const compras = (await axios.api(`compraPorIdcompras/${idcompras}`)).data.DBRes
            if(compras&&compras[0]&&compras[0].proveedores_idproveedores){
                //subtotal, total_descuento, total_impuestos, p_descuento, p_impuestos
                const compra = compras[0]
                
                let subtotal = parseInt(compra.subtotal)
                let total_descuento = parseInt(compra.total_descuento)
                let total_impuestos = parseInt(compra.total_impuestos)
                const p_descuento = parseInt(compra.p_descuento)
                const p_impuestos = parseInt(compra.p_impuestos)
                
                if(!subtotal){ subtotal=0 }
                if(!total_descuento){ total_descuento=0 }
                if(!total_impuestos){ total_impuestos=0 }
                
                subtotal += precio_compra
                const descuentoProducto = (precio_compra*(p_descuento/100))
                total_descuento += descuentoProducto
                total_impuestos += (precio_compra*(p_impuestos/100))
                
                /* if(productos[0].p_descuento&&productos[0].p_descuento!=0){
                    total_descuento += ((precio_compra-descuentoProducto)*(productos[0].p_descuento/100))
                } */
                
                const total = subtotal + total_impuestos - total_descuento;
                (await axios.api(`administradorActualizarCompras8_5/${idcompras}/${total}/${subtotal}/${total_descuento}/${total_impuestos}`));
                
                const idproveedores = compra.proveedores_idproveedores;
                (await axios.api(`administradorAgregarProductosHasCompras9/${idproductos}/${idcompras}/${idproveedores}`));

                bool = true
            }
            
        }

        res.json({ Res: bool });
    } catch (error) {
        console.log(error)
        res.json({ Res: error });
    }
});
//cargar SOAT
server.post('/api/cargarSoat', async (req, res) => {
    try {
        const producto = req.body

        res.json({ Res: await axios.post(`cargarSoat`,producto) });
    } catch (error) {
        res.json({ Res: {error} });
    }
});
//cargar Tecnico Macanica
server.post('/api/cargarTM', async (req, res) => {
    try {
        const producto = req.body

        res.json({ Res: await axios.post(`cargarTM`,producto) });
    } catch (error) {
        res.json({ Res: {error} });
    }
});



//FIN FUNCIONES LOGICA NEGOCIO

//INICIO FUNCIONES OBTENER

//Consultar todos los productos que coincidan con el modelo seleccionado
server.get('/api/productosPorModelo/:modelo', async (req, res) => {
    try {
        //TODO comprobar permisos
        const modelo = req.params.modelo

        res.json({ Res: (await axios.api(`productosPorModelo/${modelo}`)).data.DBRes });
    } catch (error) {
        res.json({ Res: error });
    }
});
//Verificar disponibilidad antes de devolver los productos del modelo consultado
server.get('/api/productosPorModelo/:modelo/:fecha_inicio/:fecha_fin', async (req, res) => {
    try {
        //TODO comprobar permisos
        const modelo = req.params.modelo

        let productosDisponibles = []

        let productos = (await axios.api(`productosPorModelo/${modelo}`)).data.DBRes
        for await (let producto of productos){
            let disponible = true
            const agendas = (await axios.api(`agendasPorProducto/${producto.idproductos}`)).data.DBRes
            for (let agenda of agendas){
                if(!DisponibilidadProducto(agenda,req.params)){
                    disponible = false
                }
            }
            if(disponible){
                productosDisponibles.push(producto)
            }
        }

        //TODO filtrar con fechas de disponibilidad recibidas contra las fechas de las agendas del producto

        res.json({ Res: productosDisponibles });
    } catch (error) {
        res.json({ Res: error });
    }
});
function DisponibilidadProducto(intervalo01, intervalo02) {
    const inicio = new Date(intervalo01.fecha_inicio);
    const fin = new Date(intervalo01.fecha_fin);
    const inicioBusqueda = new Date(intervalo02.fecha_inicio);
    const finBusqueda = new Date(intervalo02.fecha_fin);

    inicio.setHours(-5, 0, 0, 0)
    fin.setHours(-5, 0, 0, 0)

    // Verificar si los intervalos se solapan
    const seSolapan =
        (inicioBusqueda <= fin && fin <= finBusqueda) ||
        (inicioBusqueda <= inicio && inicio <= finBusqueda) ||
        (inicio <= inicioBusqueda && fin >= finBusqueda);

    return !seSolapan;
}
//Consultar alquileres por usuario
server.get('/api/alquileresPorUsuario/:nUsuario/:contrasena', async (req, res) => {
    try {
        //TODO comprobar permisos
        const nUsuario = req.params.nUsuario
        const contrasena = req.params.contrasena

        let alquileres = {}

        const ResIniciarSesion = await iniciarSesion(nUsuario,contrasena)
        if (ResIniciarSesion&&ResIniciarSesion.usuario&&ResIniciarSesion.usuario.idusuarios){

            const idusuarios = ResIniciarSesion.usuario.idusuarios

            alquileres = (await axios.api(`alquileresPorUsuario/${idusuarios}`)).data.DBRes

            for await (let alquiler of alquileres){
                let res = (await axios.api(`productosYAgendasDeAlquiler/${alquiler.idalquileres}`)).data.DBRes
                alquiler.producto_agendas = res
            }

        }

        res.json({ Res: alquileres });
    } catch (error) {
        res.json({ Res: error });
    }
});
//Consultar alquileres y cotizaciones
server.get('/api/obtener/alquileres/:nUsuario/:contrasena', async (req, res) => {
    try {
        //TODO comprobar permisos
        const nUsuario = req.params.nUsuario
        const contrasena = req.params.contrasena

        let alquileres

        alquileres = (await axios.api(`get/alquileres`)).data.DBRes.rows

        for await (let alquiler of alquileres){
            // let res = (await Fetch.fetchApi(`productosYAgendasDeAlquiler/${alquiler.idalquileres}`)).DBRes
            // alquiler.producto_agendas = res
            const res = (await axios.api(`get/usuarioporid/${alquiler.usuarios_idusuarios}`)).data.DBRes.rows[0]
            alquiler.usuario = res
        }


        res.json({ Res: alquileres });
    } catch (error) {
        res.json({ Res: error });
    }
});
//Consultar producto_agendas de alquiler
server.get('/api/obtener/producto_agendas/alquiler/:nUsuario/:contrasena/:idalquileres', async (req, res) => {
    try {
        //TODO comprobar permisos
        const nUsuario = req.params.nUsuario
        const contrasena = req.params.contrasena
        const idalquileres = req.params.idalquileres

        res.json({ Res: (await axios.api(`productosYAgendasDeAlquiler/${idalquileres}`)).data.DBRes });
    } catch (error) {
        res.json({ Res: error });
    }
});
//Consultar productos por idcompras
server.get('/api/obtener/productosPorIdcompras/:idcompras', async (req, res) => {
    try {
        //TODO comprobar permisos
        const idcompras = req.params.idcompras

        res.json({ Res: (await axios.api(`productosPorIdcompras/${idcompras}`)).data.DBRes });
    } catch (error) {
        res.json({ Res: error });
    }
});
//Consultar productos por idcompras
server.get('/api/consultarComprasConProveedor', async (req, res) => {
    try {
        //TODO comprobar permisos

        res.json({ Res: (await axios.api(`consultarComprasConProveedor`)).data.DBRes });
    } catch (error) {
        res.json({ Res: error });
    }
});
//consultar 6 productos con más descuento
server.get('/api/consultarProductosDescuento', async (req, res) => {
    try {
        //TODO comprobar permisos

        res.json({ Res: (await axios.api(`consultarProductosDescuento`)).data.DBRes });
    } catch (error) {
        res.json({ Res: error });
    }
});
//consultar conductores por idconductores
server.get('/api/conductorPorIdconductores/:idconductores', async (req, res) => {
    try {
        //TODO comprobar permisos
        const idconductores = req.params.idconductores

        res.json({ Res: (await axios.api(`conductorPorIdconductores/${idconductores}`)).data.DBRes.rows });
    } catch (error) {
        res.json({ Res: error });
    }
});
//obtenerMantenimientosConIdproductos
server.get('/api/obtenerMantenimientosConIdproductos/:idproductos', async (req, res) => {
    try {
        //TODO comprobar permisos
        const idproductos = req.params.idproductos

        res.json({ Res: (await axios.api(`obtenerMantenimientosConIdproductos/${idproductos}`)).data.DBRes.rows });
    } catch (error) {
        res.json({ Res: error });
    }
});
//TODO obtener productos en la fecha
server.get('/api/obtener/productosEnUnaFecha/:fechaInicial/:fechaFinal', async (req, res) => {
    try {

        const fechaInicial = req.params.fechaInicial
        const fechaFinal = req.params.fechaFinal
        
        let productos = (await axios.api(`get/productos`)).data.DBRes.rows

        productos = productos.filter((producto)=>{
            verificarFecha(producto.fecha,fechaInicial,fechaFinal)
        })
        
        res.json({ Res: productos });
    } catch (error) {
        res.json({ Res: error });
    }
});
function verificarFecha(fechaBuscada, fechaInicial, fechaFinal) {
    // Convertir las cadenas de fecha en objetos Date
    const fechaBuscadaObj = new Date(fechaBuscada);
    const fechaInicialObj = new Date(fechaInicial);
    const fechaFinalObj = new Date(fechaFinal);
  
    // Verificar si la fecha buscada está entre la fecha inicial y final
    return fechaBuscadaObj >= fechaInicialObj && fechaBuscadaObj <= fechaFinalObj;
}
//consultar agendas por idproductos
server.get('/api/agendasPorIdproductos/:idproductos', async (req, res) => {
    try {
        //TODO comprobar permisos
        const idproductos = req.params.idproductos

        const agendas = (await axios.api(`agendasPorProducto/${idproductos}`)).data.DBRes
        for await(const agenda of agendas){
            agenda.conductor = (await axios.api(`conductorPorIdconductores/${agenda.conductores_idconductores}`)).data.DBRes.rows[0]
        }

        res.json({ Res: agendas });
    } catch (error) {
        res.json({ Res: error });
    }
});

//FIN FUNCIONES OBTENER

//INICIO FUNCIONES CRUD

//Agregar usuario
server.post('/api/agregar/usuario/:usuario/:contrasena', async (req, res) => {
    try {

        const Object = req.body;
        //TODO comprobar permisos
        await axios.post(`insert/usuarios`,Object)
        
        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Agregar proveedor
server.post('/api/agregar/proveedor/:usuario/:contrasena', async (req, res) => {
    try {

        const object = req.body;
        //TODO comprobar permisos
        await axios.post(`insert/proveedores`,object)
        
        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Agregar producto
server.post('/api/agregar/producto/:usuario/:contrasena', async (req, res) => {
    try {

        const JSONObject = req.body;
        //TODO comprobar permisos
        await axios.post(`insert/productos`,JSONObject)
        
        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Agregar proyecto
server.post('/api/agregar/proyecto/:usuario/:contrasena', async (req, res) => {
    try {

        const Object = req.body;
        //TODO comprobar permisos
        await axios.post(`insert/proyectos`,Object)
        
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
        await axios.api(`insert/conductores/${JSONObject}`)
        
        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Agregar mantenimiento
server.post('/api/agregar/mantenimiento/:usuario/:contrasena', async (req, res) => {
    try {

        const JSONObject = req.body;
        //TODO comprobar permisos
        await axios.post(`insert/mantenimientos`,JSONObject)
        
        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Actualizar mantenimiento
server.post('/api/actualizar/mantenimiento/:usuario/:contrasena', async (req, res) => {
    try {

        const JSONObject = req.body;
        //TODO comprobar permisos
        await axios.post(`update/mantenimientos`,JSONObject)
        
        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Obtener usuarios
server.get('/api/obtener/usuarios/:usuario/:contrasena', async (req, res) => {
    try {

        //TODO comprobar permisos
        
        res.json({ Res: (await axios.api(`get/usuarios`)).data.DBRes.rows });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Obtener proveedores
server.get('/api/obtener/proveedores/:usuario/:contrasena', async (req, res) => {
    try {

        //TODO comprobar permisos
        
        res.json({ Res: (await axios.api(`get/proveedores`)).data.DBRes.rows });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Obtener productos
server.get('/api/obtener/productos', async (req, res) => {
    try {

        //TODO comprobar permisos
        
        res.json({ Res: (await axios.api(`get/productos`)).data.DBRes.rows });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Obtener productos con categorias
server.get('/api/obtener/productosYCategorias', async (req, res) => {
    try {

        //TODO comprobar permisos
        const productos = (await axios.api(`get/productos`)).data.DBRes.rows

        for await(const producto of productos){
            producto.categorias = []

            const categorias = (await axios.api(`consultarCategoriasDeProducto/${producto.idproductos}`)).data.DBRes.rows
            for (const categoria of categorias){
                producto.categorias.push(categoria.nombre_categoria)
            }

        }
        
        res.json({ Res: productos });
    } catch (error) {
        console.log(error)
        res.json({ Res: error });
    }
});

//Obtener productos con categorias y diferentes modelos
server.get('/api/obtener/productosYCategoriasDifModelo', async (req, res) => {
    try {

        //TODO comprobar permisos
        const productos = (await axios.api(`get/productosDifModelo`)).data.DBRes.rows

        for await(const producto of productos){
            producto.categorias = []

            const categorias = (await axios.api(`consultarCategoriasDeProducto/${producto.idproductos}`)).data.DBRes.rows
            for (const categoria of categorias){
                producto.categorias.push(categoria.nombre_categoria)
            }

        }
        
        res.json({ Res: productos });
    } catch (error) {
        console.log(error)
        res.json({ Res: error });
    }
});

//consultar Categorias De Producto con idproductos
server.get('/api/obtener/categoriasPorIdproductos/:idproductos', async (req, res) => {
    try {

        const idproductos = req.params.idproductos
        //TODO comprobar permisos
        const categorias = (await axios.api(`consultarCategoriasDeProducto/${idproductos}`)).data.DBRes.rows
        
        res.json({ Res: categorias });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Obtener categorias transporte
server.get('/api/obtener/categorias/transporte', async (req, res) => {
    try {

        //TODO comprobar permisos
        const categorias = (await axios.api(`get/categorias/transporte`)).data.DBRes.rows
        
        res.json({ Res: categorias });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Obtener categorias maquinaria
server.get('/api/obtener/categorias/maquinaria', async (req, res) => {
    try {

        //TODO comprobar permisos
        const categorias = (await axios.api(`get/categorias/maquinaria`)).data.DBRes.rows
        
        res.json({ Res: categorias });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Obtener categorias
server.get('/api/obtener/categorias', async (req, res) => {
    try {

        //TODO comprobar permisos
        const categorias = (await axios.api(`get/categorias`)).data.DBRes.rows
        
        res.json({ Res: categorias });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Obtener productos alianza
server.get('/api/obtener/productos/alianza', async (req, res) => {
    try {

        const productos = []
        //TODO comprobar permisos
        let productosBD = (await axios.api(`get/productos`)).data.DBRes.rows
        for (const producto of productosBD){
            const productoAlianza = {}

            productoAlianza.id_producto = producto.idproductos
            productoAlianza.nombre = producto.nombre
            productoAlianza.descripcion = producto.descripcion
            productoAlianza.unidad = "unidad"
            productoAlianza.costo = producto.precio_alquiler

            productos.push(productoAlianza)
        }
        
        res.json({ productos });
    } catch (error) {
        res.json({ error });
    }
});

//Obtener proyectos
server.get('/api/obtener/proyectos/:usuario/:contrasena', async (req, res) => {
    try {

        //TODO comprobar permisos
        
        res.json({ Res: (await axios.api(`get/proyectos`)).data.DBRes.rows });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Obtener conductores
server.get('/api/obtener/conductores/:usuario/:contrasena', async (req, res) => {
    try {

        //TODO comprobar permisos
        
        res.json({ Res: (await axios.api(`get/conductores`)).data.DBRes.rows });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Obtener conductores
server.get('/api/obtener/conductores/:usuario/:contrasena', async (req, res) => {
    try {

        //TODO comprobar permisos
        
        res.json({ Res: (await axios.api(`get/conductores`)).data.DBRes.rows });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Obtener mantenimientos
server.get('/api/obtener/mantenimientos/:usuario/:contrasena', async (req, res) => {
    try {

        //TODO comprobar permisos
        
        res.json({ Res: (await axios.api(`get/mantenimientos`)).data.DBRes.rows });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Actualizar usuario
server.post('/api/actualizar/usuario/:usuario/:contrasena', async (req, res) => {
    try {

        //TODO comprobar permisos
        
        const JSONActualizar = req.body;

        axios.post(`update/usuarios`,JSONActualizar)

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

        axios.api(`update/proveedores/${JSONActualizar}`)

        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Actualizar producto
server.post('/api/actualizar/producto/:usuario/:contrasena', async (req, res) => {
    try {

        //TODO comprobar permisos
        
        const Object = req.body;

        axios.post(`update/productos`,Object)

        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Actualizar proyecto
server.post('/api/actualizar/proyecto/:usuario/:contrasena', async (req, res) => {
    try {

        //TODO comprobar permisos
        
        const Object = req.body;

        axios.post(`update/proyectos`,Object)

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

        axios.api(`update/conductores/${JSONActualizar}`)

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
        await axios.api(`delete/usuarios/${id}`)

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
        await axios.api(`delete/proveedores/${id}`)

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
        await axios.api(`delete/productos/${id}`)

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
        await axios.api(`delete/proyectos/${id}`)

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
        await axios.api(`delete/conductores/${id}`)

        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Eliminar compra
server.get('/api/eliminar/compra/:id/:usuario/:contrasena', async (req, res) => {
    try {
        
        //TODO comprobar permisos

        const id = req.params.id;
        await axios.api(`delete/compras/${id}`)

        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});

//Eliminar mantenimiento
server.get('/api/eliminar/mantenimiento/:id/:usuario/:contrasena', async (req, res) => {
    try {
        
        //TODO comprobar permisos

        const id = req.params.id;
        await axios.api(`delete/mantenimientos/${id}`)

        res.json({ Res: true });
    } catch (error) {
        res.json({ Res: error });
    }
});
//FIN FUNCIONES CRUD


// Iniciar
server.listen(PORT, IP, () => {

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
    //     console.log(res.DBRes)
    // })

    //2 Fetch.fetchApi(`clienteAgregarAgenda2/${"2024-04-10"}/${"2024-04-15"}/Origen/Destino`).then((res)=>{
    //     console.log(res.DBRes)
    // })clienteAgregarProductosHasAlquileres3/:PRODUCTOS_idProductos/:ALQUILERES_idAlquileres/:ALQUILERES_Usuarios_idUsuarios/:AGENDAS_idAgendas

    //3 Fetch.fetchApi(`clienteAgregarProductosHasAlquileres3/1/9/2/1`).then((res)=>{
    //     console.log(res.DBRes)
    // })

    //3.5 Fetch.fetchApi(`administradorAgregarConductor3_5/${"Patricio Estrella"}/700/370`).then((res)=>{
    //     console.log(res.DBRes)
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
    //     console.log(res.DBRes)
    // })

    //traer productos y agendas de alquiler Fetch.fetchApi(`productosYAgendasDeAlquiler/9`).then((Res)=>{
    //     console.log(Res.DBRes.rows)
    // })



    console.log(`Servidor corriendo en http://${IP}:${PORT}`);
});
