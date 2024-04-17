const express = require('express');
const cors = require('cors');
const FileReader = require('./FileReader.js');
const DBConnection = require('./DBConnection.js');

const config = FileReader.readServerConfig()

let server = express();
const PORT = config.port; // Puerto del servidor
const IP = config.ip; // Ip del servidor

//Puertos e ips permitidas 
const corsLinks = config.corsLinks
corsLinks.forEach(link => {
    server.use(cors({ origin: link }));
});


//INICIO FUNCIONES PRUEBA
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
//prueba
server.get('/dbapi/prueba/:texto', async (req, res) => {
    try {

        //TODO comprobar permisos
        const texto = req.params.texto

        res.json({ DBRes: texto });
    } catch (error) {
        res.json({ DBRes: error });
    }
});
//FIN FUNCIONES PRUEBA


//INICIO FUNCIONES LOGICA NEGOCIO

let funcionesBD = DBConnection.objetoFuncionesLogicaNegocioBD

//1 Crear Alquiler
server.get('/dbapi/clienteAgregarAlquiler1/:Usuarios_idUsuarios', async (req, res) => {
    try {
    
        const Usuarios_idUsuarios = req.params.Usuarios_idUsuarios

        res.json({ DBRes: (await funcionesBD.clienteAgregarAlquiler1(Usuarios_idUsuarios)).rows[0].idalquileres });
    } catch (error) {
        res.json({ DBRes: error });
    }
});
//2 Crear Agenda
server.get('/dbapi/clienteAgregarAgenda2/:fecha_inicio/:fecha_fin/:lugar_origen/:lugar_destino', async (req, res) => {
    try {
    
        const fecha_inicio = req.params.fecha_inicio
        const fecha_fin = req.params.fecha_fin
        const lugar_origen = req.params.lugar_origen
        const lugar_destino = req.params.lugar_destino

        res.json({ DBRes: (await funcionesBD.clienteAgregarAgenda2( fecha_inicio, fecha_fin, lugar_origen, lugar_destino )).rows[0].idagenda });
    } catch (error) {
        res.json({ DBRes: error });
    }
});
//3 cliente agregar en tabla productos has alquileres 
server.get('/dbapi/clienteAgregarProductosHasAlquileres3/:PRODUCTOS_idProductos/:ALQUILERES_idAlquileres/:ALQUILERES_Usuarios_idUsuarios/:AGENDAS_idAgenda', async (req, res) => {
    try {
    
        const PRODUCTOS_idProductos = req.params.PRODUCTOS_idProductos
        const ALQUILERES_idAlquileres = req.params.ALQUILERES_idAlquileres
        const ALQUILERES_Usuarios_idUsuarios = req.params.ALQUILERES_Usuarios_idUsuarios
        const AGENDAS_idAgenda = req.params.AGENDAS_idAgenda

        res.json({ DBRes: await funcionesBD.clienteAgregarProductosHasAlquileres3( PRODUCTOS_idProductos, ALQUILERES_idAlquileres, ALQUILERES_Usuarios_idUsuarios, AGENDAS_idAgenda ) });
    } catch (error) {
        res.json({ DBRes: error });
    }
});
//3.5 administrador agregar conductor
server.get('/dbapi/administradorAgregarConductor3_5/:nombre/:cedula/:telefono', async (req, res) => {
    try {
    
        const nombre = req.params.nombre
        const cedula = req.params.cedula
        const telefono = req.params.telefono

        res.json({ DBRes: (await funcionesBD.administradorAgregarConductor3_5(nombre, cedula, telefono)).rows[0].idconductores });
    } catch (error) {
        res.json({ DBRes: error });
    }
});
//3.51 administrador actualizar idConductores para tabla agenda
server.get('/dbapi/administradorActualizarConductorDeAgenda3_51/:idAgenda/:idConductores', async (req, res) => {
    try {
    
        const idAgenda = req.params.idAgenda
        const idConductores = req.params.idConductores

        res.json({ DBRes: await funcionesBD.administradorActualizarConductorDeAgenda3_51( idAgenda, idConductores ) });
    } catch (error) {
        res.json({ DBRes: error });
    }
});
//4 administrador actualizar alquiler tras rellenar campos restantes
server.get('/dbapi/administradorActualizarAlquiler4/:idAlquileres/:subtotal/:total/:total_descuento/:total_impuestos/:valor_conductores/:gastos_adicionales/:justificacion_ga', async (req, res) => {
    try {
    
        const idAlquileres = req.params.idAlquileres
        const subtotal = req.params.subtotal
        const total = req.params.total
        const total_descuento = req.params.total_descuento
        const total_impuestos = req.params.total_impuestos
        const valor_conductores = req.params.valor_conductores
        const gastos_adicionales = req.params.gastos_adicionales
        const justificacion_ga = req.params.justificacion_ga

        res.json({ DBRes: await funcionesBD.administradorActualizarAlquiler4( idAlquileres, subtotal, total, total_descuento, total_impuestos, valor_conductores, gastos_adicionales, justificacion_ga ) });
    } catch (error) {
        res.json({ DBRes: error });
    }
});
//5 cliente actualizar alquiler al pagar cotizacion
server.get('/dbapi/clienteActualizarAlquiler5/:idAlquileres', async (req, res) => {
    try {
    
        const idAlquileres = req.params.idAlquileres

        res.json({ DBRes: await funcionesBD.clienteActualizarAlquiler5( idAlquileres ) });
    } catch (error) {
        res.json({ DBRes: error });
    }
});
//TODO 6 y 7
//8 administrador agregar compras 
server.get('/dbapi/administradorAgregarCompras8/:Proveedores_idProveedores/:responsable/:subtotal/:total/:total_descuento/:total_impuestos/:p_descuento', async (req, res) => {
    try {
    
        const Proveedores_idProveedores = req.params.Proveedores_idProveedores
        const responsable = req.params.responsable
        const subtotal = req.params.subtotal
        const total = req.params.total
        const total_descuento = req.params.total_descuento
        const total_impuestos = req.params.total_impuestos
        const p_descuento = req.params.p_descuento

        res.json({ DBRes: await funcionesBD.administradorAgregarCompras8( Proveedores_idProveedores, responsable, subtotal, total, total_descuento, total_impuestos, p_descuento ) });
    } catch (error) {
        res.json({ DBRes: error });
    }
});
//9 administrador agregar en la tabla productos has compras 
server.get('/dbapi/administradorAgregarProductosHasCompras9/:PRODUCTOS_idProductos/:COMPRAS_idCompras/:COMPRAS_Proveedores_idProveedores', async (req, res) => {
    try {
    
        const PRODUCTOS_idProductos = req.params.PRODUCTOS_idProductos
        const COMPRAS_idCompras = req.params.COMPRAS_idCompras
        const COMPRAS_Proveedores_idProveedores = req.params.COMPRAS_Proveedores_idProveedores

        res.json({ DBRes: await funcionesBD.administradorAgregarProductosHasCompras9( PRODUCTOS_idProductos, COMPRAS_idCompras, COMPRAS_Proveedores_idProveedores ) });
    } catch (error) {
        res.json({ DBRes: error });
    }
});
//10 cliente agregar balance
server.get('/dbapi/clienteAgregarBalance10/:valor/:descripcion/:ALQUILERES_idAlquileres/:usuarios_idusuarios', async (req, res) => {
    try {

        const valor = req.params.valor
        const descripcion = req.params.descripcion
        const ALQUILERES_idAlquileres = req.params.ALQUILERES_idAlquileres
        const usuarios_idusuarios = req.params.usuarios_idusuarios

        res.json({ DBRes: await funcionesBD.clienteAgregarBalance10( valor, descripcion, ALQUILERES_idAlquileres, usuarios_idusuarios ) });
    } catch (error) {
        res.json({ DBRes: error });
    }
});
//TODO 11
//12 administrador agregar en historial mantenimientos
server.get('/dbapi/administradorAgregarMantenimiento12/:descripcion/:fechamantenimiento/:precio/:productos_idproductos', async (req, res) => {
    try {

        const descripcion = req.params.descripcion
        const fechamantenimiento = req.params.fechamantenimiento
        const precio = req.params.precio
        const productos_idproductos = req.params.productos_idproductos

        res.json({ DBRes: (await funcionesBD.administradorAgregarMantenimiento12( descripcion, fechamantenimiento, precio, productos_idproductos )).rows[0].idhistorialmantenimientos });
    } catch (error) {
        res.json({ DBRes: error });
    }
});



//Traer productos y agendas de un alquiler
server.get('/dbapi/productosYAgendasDeAlquiler/:idAlquileres', async (req, res) => {
    try {

        const idAlquileres = req.params.idAlquileres

        res.json({ DBRes: await funcionesBD.productosYAgendasDeAlquiler( idAlquileres ) });
    } catch (error) {
        res.json({ DBRes: error });
    }
});
//Consultar conductor por cedula
server.get('/dbapi/conductorPorCedula/:cedula', async (req, res) => {
    try {

        const cedula = req.params.cedula

        res.json({ DBRes: await funcionesBD.conductorPorCedula( cedula ) });
    } catch (error) {
        res.json({ DBRes: error });
    }
});
//Consultar productos por modelo
server.get('/dbapi/productosPorModelo/:modelo', async (req, res) => {
    try {

        const modelo = req.params.modelo

        res.json({ DBRes: (await funcionesBD.productosPorModelo( modelo )).rows });
    } catch (error) {
        res.json({ DBRes: error });
    }
});
//Consultar agendas de un producto
server.get('/dbapi/agendasPorProducto/:idproductos', async (req, res) => {
    try {

        const idproductos = req.params.idproductos

        res.json({ DBRes: (await funcionesBD.agendasPorProducto( idproductos )).rows });
    } catch (error) {
        res.json({ DBRes: error });
    }
});



//FIN FUNCIONES LOGICA NEGOCIO


//INICIO FUNCIONES CRUD

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
        DBConnection.insertarProducto(objetoAInsertar.nombre, objetoAInsertar.descripcion, objetoAInsertar.identificacion, objetoAInsertar.precio_alquiler, objetoAInsertar.precio_compra, objetoAInsertar.marca, objetoAInsertar.modelo, objetoAInsertar.tipo_vehiculo, objetoAInsertar.estado, objetoAInsertar.imagen)
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
        DBConnection.actualizarProducto(objetoAInsertar.idProductos, objetoAInsertar.nombre, objetoAInsertar.descripcion, objetoAInsertar.identificacion, objetoAInsertar.precio_alquiler, objetoAInsertar.precio_compra, objetoAInsertar.marca, objetoAInsertar.modelo, objetoAInsertar.tipo_vehiculo, objetoAInsertar.estado, objetoAInsertar.imagen)
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
        
        const values = JSON.parse(JSONValues)
        res.json({ DBRes: await DBConnection.sqlQueryValues(sqlQuery, values) });

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
//FIN FUNCIONES CRUD


// Iniciar
server.listen(PORT, IP, () => {
/*     DBConnection.obtenerUsuarios().then((result) => {
        console.log(result.rows)
    }) */
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});