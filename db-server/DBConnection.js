const { Pool } = require("pg");
const FileReader = require ('./FileReader.js');
const funcionesLogicaNegocioBD = require("./funcionesBD.js");
const config = FileReader.readDBConfig();

// const config = {
//   user: "postgres",
//   host: "localhost",
//   database: "rhinodb",
//   password: "password",
//   port: 5432,
// };
const pool = new Pool(config);

//INICIO FUNCIONES CRUD DBCONECTION
const insertarUsuario = async (
  nombre_usuario,
  contrasena,
  nombre_real,
  direccion,
  telefono,
  identificacion,
  correo,
  tipo_identificacion,
  tipo_usuario,
  estado
) => {
  const pool = new Pool(config);
  try {
    const texto =
      "insert into usuarios(nombre_usuario, contrasena, nombre_real, direccion, telefono, identificacion, correo, tipo_identificacion, tipo_usuario, estado) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";
    const values = [
      nombre_usuario,
      contrasena,
      nombre_real,
      direccion,
      telefono,
      identificacion,
      correo,
      tipo_identificacion,
      tipo_usuario,
      estado
    ];
    const DBRes = await pool.query(texto, values);
    return DBRes;
  } catch (error) {
    console.log("Error al insertar el usuario");
  }
  pool.end();
};

const registrarUsuario = async (
  direccion,
  correo,
  nombre_usuario,
  identificacion,
  telefono,
  contrasena,
  nombre_real
) => {
  const pool = new Pool(config);
  try {
    const texto =
      "insert into usuarios(nombre_usuario, contrasena, nombre_real, direccion, telefono, identificacion, correo, tipo_identificacion, tipo_usuario, estado) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";
    const values = [
      nombre_usuario,
      contrasena,
      nombre_real,
      direccion,
      telefono,
      identificacion,
      correo,
      "CEDULA",
      "CLIENTE",
      "ACTIVO"
    ];
    const DBRes = await pool.query(texto, values);
    return DBRes;
  } catch (error) {
    console.log(error)
    console.log("Error al registrar el usuario");
  }
  pool.end();
};

const actualizarUsuario = async (
  idUsuarios,
  nombre_usuario,
  contrasena,
  nombre_real,
  direccion,
  telefono,
  identificacion,
  correo,
  tipo_identificacion,
  tipo_usuario,
  estado
) => {
  const pool = new Pool(config);
  try {
    let texto
    let values
    if(contrasena&&contrasena!=""){
      texto =
        "UPDATE USUARIOS SET nombre_usuario = $2, contrasena = $3, nombre_real = $4, direccion = $5, telefono = $6, identificacion = $7, correo = $8, tipo_identificacion = $9, tipo_usuario = $10, estado = $11 WHERE idUsuarios = $1";
      values = [
        idUsuarios,
        nombre_usuario,
        contrasena,
        nombre_real,
        direccion,
        telefono,
        identificacion,
        correo,
        tipo_identificacion,
        tipo_usuario,
        estado
      ];
    }else{
      texto =
        "UPDATE USUARIOS SET nombre_usuario = $2, nombre_real = $3, direccion = $4, telefono = $5, identificacion = $6, correo = $7, tipo_identificacion = $8, tipo_usuario = $9, estado = $10 WHERE idUsuarios = $1";
      values = [
        idUsuarios,
        nombre_usuario,
        nombre_real,
        direccion,
        telefono,
        identificacion,
        correo,
        tipo_identificacion,
        tipo_usuario,
        estado
      ];
    }
    const DBRes = await pool.query(texto, values);
    return DBRes;
  } catch (error) {
    console.log(error)
    console.log("Error al actualizar el usuario");
  }
  pool.end();
};

const eliminarUsuario = async (idUsuarios) => {
  const pool = new Pool(config);
  try {
    const texto = "DELETE FROM USUARIOS WHERE idUsuarios = $1";
    const values = [idUsuarios];
    const DBRes = await pool.query(texto, values);
    return DBRes;
  } catch (error) {
    console.log("Error al eliminar el usuario");
  }
  pool.end();
};

const obtenerUsuarios = async () => {
  const pool = new Pool(config);
  try {
    const DBRes = await pool.query("select * from usuarios");
    // console.log(DBRes.rows);
    return DBRes;
  } catch (error) {
    console.log(error)
    console.log("Error al obtener los usuarios");
  }
  pool.end();
};

const insertarProveedor = async (
  nombre,
  nit,
  direccion,
  descripcion,
  telefono
) => {
  const pool = new Pool(config);
  try {
    const texto =
      "INSERT INTO PROVEEDORES(nombre, nit, direccion, descripcion, telefono) VALUES($1, $2, $3, $4, $5)";
    const values = [nombre, nit, direccion, descripcion, telefono];
    const DBRes = await pool.query(texto, values);
    return DBRes;
  } catch (error) {
    console.log("Error al ingresar el proveedor");
  }
  pool.end();
};

const eliminarProveedor = async (idProveedores) => {
  const pool = new Pool(config);
  try {
    const texto = "DELETE FROM PROVEEDORES WHERE idProveedores = $1";
    const values = [idProveedores];
    const DBRes = await pool.query(texto, values);
    return DBRes;
  } catch (error) {
    console.log("Error al eliminar el proveedor");
  }
  pool.end();
};

const actualizarProveedor = async (
  idProveedores,
  nombre,
  nit,
  direccion,
  descripcion,
  telefono
) => {
  const pool = new Pool(config);
  try {
    const texto =
      "UPDATE PROVEEDORES SET nombre = $2, nit = $3, direccion = $4, descripcion = $5, telefono = $6 WHERE idProveedores = $1";
    const values = [
      idProveedores,
      nombre,
      nit,
      direccion,
      descripcion,
      telefono,
    ];
    const DBRes = await pool.query(texto, values);
    return DBRes;
  } catch (error) {
    console.log("Error al actualizar proveedor");
  }
  pool.end();
};

const obtenerProveedores = async () => {
  const pool = new Pool(config);
  try {
    const DBRes = await pool.query("select * from proveedores");
    return DBRes;
  } catch (error) {
    console.log("Error al obtener los proveedores");
  }
  pool.end();
};

const insertarProducto = async (
  nombre,
  descripcion,
  identificacion,
  precio_alquiler,
  precio_compra,
  marca,
  modelo,
  tipo_vehiculo,
  estado,
  imagen,
  categorias
) => {
  let pool = new Pool(config);
  try {
    let texto =
      "INSERT INTO PRODUCTOS(nombre, descripcion, identificacion, precio_alquiler, precio_compra, marca, modelo, tipo_vehiculo, estado, fecha, imagen) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW(), $10)";
    let values = [
      nombre,
      descripcion,
      identificacion,
      precio_alquiler,
      precio_compra,
      marca,
      modelo,
      tipo_vehiculo,
      estado,
      imagen
    ];
    let DBRes = await pool.query(texto, values);
    pool.end();
    //TERMINA POOL
    pool = new Pool(config)

    texto = `SELECT * FROM productos ORDER BY idproductos DESC LIMIT 1`;
    values = [];
    DBRes = await pool.query(texto, values);
    const idproductos = DBRes.rows[0].idproductos

    pool.end()
    //TERMINA POOL
    pool = new Pool(config)

    texto = `DELETE FROM productos_has_categorias WHERE productos_idproductos = ${idproductos}`;
    values = [];
    DBRes = await pool.query(texto, values);

    pool.end()
    //TERMINA POOL
    pool = new Pool(config)

    for await (const categoria of categorias){
      texto = `INSERT INTO productos_has_categorias VALUES (${idproductos},${categoria.value})`;
      values = [];
      DBRes = await pool.query(texto, values);
    }

    pool.end()
    //TERMINA POOL
    return DBRes;
  } catch (error) {
    console.log(error)
    console.log("Error al ingresar el producto");
  }
};

const eliminarProducto = async (idproductos) => {
  let pool
  try {
    pool = new Pool(config)

    let texto = `DELETE FROM productos_has_categorias WHERE productos_idproductos = ${idproductos}`;
    let values = [];
    await pool.query(texto, values);

    pool.end()
    pool = new Pool(config);

    texto = "DELETE FROM PRODUCTOS WHERE idProductos = $1";
    values = [idproductos];
    const DBRes = await pool.query(texto, values);
    pool.end();
    return DBRes;
  } catch (error) {
    console.log(error)
    console.log("Error al eliminar el producto");
  }
};

const eliminarCompra = async (idcompras) => {
  let pool
  try {
    pool = new Pool(config)

    let texto = `DELETE FROM productos_has_compras WHERE compras_idcompras = ${idcompras}`;
    let values = [];
    await pool.query(texto, values);

    pool.end()
    pool = new Pool(config);

    texto = "DELETE FROM COMPRAS WHERE idcompras = $1";
    values = [idcompras];
    const DBRes = await pool.query(texto, values);
    pool.end();
    return DBRes;
  } catch (error) {
    console.log(error)
    console.log("Error al eliminar la compra");
  }
};

const actualizarProducto = async (
  idProductos,
  nombre,
  descripcion,
  identificacion,
  precio_alquiler,
  precio_compra,
  marca,
  modelo,
  tipo_vehiculo,
  estado,
  imagen,
  categorias
) => {
  let pool = new Pool(config);
  try {
    let texto =
      "UPDATE PRODUCTOS SET nombre = $2, descripcion = $3, identificacion = $4, precio_alquiler = $5, marca = $6, modelo = $7, tipo_vehiculo = $8, estado = $9, imagen = $10 WHERE idProductos = $1";
    let values = [
      idProductos,
      nombre,
      descripcion,
      identificacion,
      precio_alquiler,
      marca,
      modelo,
      tipo_vehiculo,
      estado,
      imagen
    ];
    let DBRes = await pool.query(texto, values);
    pool.end();
    //TERMINA POOL
    pool = new Pool(config)

    texto = `DELETE FROM productos_has_categorias WHERE productos_idproductos = ${idProductos}`;
    values = [];
    DBRes = await pool.query(texto, values);

    pool.end()
    //TERMINA POOL
    
    pool = new Pool(config)
    for await (const categoria of categorias){
      texto = `INSERT INTO productos_has_categorias VALUES (${idProductos},${categoria.value})`;
      values = [];
      DBRes = await pool.query(texto, values);
      //TERMINA POOL
    }
    pool.end()


    return DBRes;
  } catch (error) {
    console.log(error)
    console.log("Error  al actualizar el producto");
  }
};

const obtenerProductos = async () => {
  const pool = new Pool(config);
  try {
    const DBRes = await pool.query("select * from productos order by idproductos desc");
    return DBRes;
  } catch (error) {
    console.log("Error al obtener los productos");
  }
  pool.end();
};

const obtenerProductosDistintoModelo = async () => {
  const pool = new Pool(config);
  try {
    const DBRes = await pool.query(`
      SELECT *
      FROM productos
      WHERE idproductos IN (
        SELECT MAX(idproductos)
        FROM productos
        GROUP BY modelo
      )
      ORDER BY idproductos DESC;    
    `);
    return DBRes;
  } catch (error) {
    console.log(error)
    console.log("Error al obtener los productos");
  }
  pool.end();
};

const insertarProyecto = async (
  nombre,
  identificacion,
  tipo_identificacion,
  telefono,
  descripcion,
  fecha_entrega,
  estado_avance
) => {
  const pool = new Pool(config);
  try {
    const texto =
      "INSERT INTO PROYECTOS(nombre, identificacion, tipo_identificacion, telefono, descripcion, fecha_entrega, estado_avance) VALUES($1, $2, $3, $4, $5, $6, $7)";
    const values = [
      nombre,
      identificacion,
      tipo_identificacion,
      telefono,
      descripcion,
      fecha_entrega,
      estado_avance,
    ];
    const DBRes = await pool.query(texto, values);
    return DBRes;
  } catch (error) {
    console.log("Error al insertar el proyecto");
  }
  pool.end();
};

const eliminarProyecto = async (idProyectos) => {
  const pool = new Pool(config);
  try {
    const texto = "DELETE FROM PROYECTOS WHERE idProyectos = $1";
    const values = [idProyectos];
    const DBRes = await pool.query(texto, values);
    return DBRes;
  } catch (error) {
    console.log("Error al eliminar proyecto");
  }
  pool.end();
};

const actualizarProyecto = async (
  idProyectos,
  nombre,
  identificacion,
  tipo_identificacion,
  telefono,
  descripcion,
  fecha_entrega,
  estado_avance
) => {
  const pool = new Pool(config);
  try {
    const texto =
      "UPDATE PROYECTOS SET nombre = $2, identificacion = $3, tipo_identificacion = $4, telefono = $5, descripcion = $6, fecha_entrega = $7, estado_avance = $8 WHERE idProyectos = $1";
    const values = [
      idProyectos,
      nombre,
      identificacion,
      tipo_identificacion,
      telefono,
      descripcion,
      fecha_entrega,
      estado_avance,
    ];
    const DBRes = await pool.query(texto, values);
    return DBRes;
  } catch (error) {
    console.log(error)
    console.log("Error al actualizar el proyecto");
  }

  pool.end();
};

const obtenerProyectos = async () => {
  let pool = new Pool(config);
  try {
    const DBRes = await pool.query("select * from proyectos");
    pool.end();

    for (const proyecto of DBRes.rows){
      if(proyecto.estado_avance!="FINALIZADO"&&!isDateValid(proyecto.fecha_entrega.toString().substring(0,10))){
        pool = new Pool(config);
        await pool.query(`UPDATE proyectos SET estado_avance = 'FINALIZADO' WHERE idproyectos = ${proyecto.idproyectos}`);
        pool.end();
        proyecto.estado_avance = 'FINALIZADO'
      }
    }

    return DBRes;
  } catch (error) {
    console.log(error)
    console.log("Error al obtener los proyectos");
  }
};

function isDateValid(dateString) {
  // Obtener la fecha actual
  const currentDate = new Date();

  // Obtener la fecha proporcionada como argumento
  const providedDate = new Date(dateString);

  // Comparar las fechas
  return providedDate >= currentDate;
}

const insertarConductor = async (nombre, cedula, telefono) => {
  const pool = new Pool(config);
  try {
    const texto =
      "INSERT INTO CONDUCTORES(nombre, cedula, telefono) VALUES($1, $2, $3)";
    const values = [nombre, cedula, telefono];
    const DBRes = await pool.query(texto, values);
    return DBRes;
  } catch (error) {
    console.log("Error al insertar conductor");
  }
  pool.end();
};

const eliminarConductor = async (idConductores) => {
  const pool = new Pool(config);
  try {
    const texto = "DELETE FROM CONDUCTORES WHERE idConductores = $1";
    const values = [idConductores];
    const DBRes = await pool.query(texto, values);
    return DBRes;
  } catch (error) {
    console.log("Error al eliminar el conductor");
  }
  pool.end();
};

const actualizarConductor = async (idConductores, nombre, cedula, telefono) => {
  const pool = new Pool(config);
  try {
    const texto =
      "UPDATE CONDUCTORES SET nombre = $2, cedula = $3, telefono = $4 WHERE idConductores = $1";
    const values = [idConductores, nombre, cedula, telefono];
    const DBRes = await pool.query(texto, values);
    return DBRes;
  } catch (error) {
    console.log("Error al actualizar conductor");
  }
  pool.end();
};

const actualizarMantenimientos = async (idhistorialmantenimientos,fecharegistro, fechamantenimiento, precio, productos_idproductos, descripcion) => {
  const pool = new Pool(config);
  try {
    const texto =
      "UPDATE historial_mantenimientos SET fecharegistro = $2, fechamantenimiento = $3, precio = $4, productos_idproductos = $5, descripcion = $6 WHERE idhistorialmantenimientos = $1";
    const values = [idhistorialmantenimientos,fecharegistro, fechamantenimiento, precio, productos_idproductos, descripcion];
    const DBRes = await pool.query(texto, values);
    return DBRes;
  } catch (error) {
    console.log("Error al actualizar mantenimiento");
  }
  pool.end();
};

const eliminarMantenimientos = async (idhistorialmantenimientos) => {
  const pool = new Pool(config);
  try {
    const texto = "DELETE FROM HISTORIAL_MANTENIMIENTOS WHERE idhistorialmantenimientos = $1";
    const values = [idhistorialmantenimientos];
    const DBRes = await pool.query(texto, values);
    return DBRes;
  } catch (error) {
    console.log("Error al eliminar el usuario");
  }
  pool.end();
};


const obtenerConductores = async () => {
  const pool = new Pool(config);
  try {
    const DBRes = await pool.query("select * from conductores");
    console.log(DBRes.rows);
    return DBRes;
  } catch (error) {
    console.log("Error al obtener los conductores");
  }
  pool.end();
};

const insertarHistoricoAlquileres = async (
  PRODUCTOS_idProductos,
  fecha,
  ingreso
) => {
  const pool = new Pool(config);
  try {
    const texto =
      "INSERT INTO HISTORICO_ALQUILERES(PRODUCTOS_idProductos, fecha, ingreso) VALUES($1, $2, $3)";
    const values = [PRODUCTOS_idProductos, fecha, ingreso];
    const DBRes = await pool.query(texto, values);
    return DBRes;
  } catch (error) {
    console.log("Error al insertar conductor");
  }
  pool.end();
};

const insertarMantenimientos = async (
  fecharegistro, fechamantenimiento, precio, productos_idproductos, descripcion
) => {
  const pool = new Pool(config);
  try {
    const texto =
      "INSERT INTO historial_mantenimientos(fecharegistro, fechamantenimiento, precio, productos_idproductos, descripcion) VALUES($1, $2, $3, $4, $5)";
    const values = [fecharegistro, fechamantenimiento, precio, productos_idproductos, descripcion];
    const DBRes = await pool.query(texto, values);
    return DBRes;
  } catch (error) {
    console.log(error)
    console.log("Error al insertar mantenimiento");
  }
  pool.end();
};

const idProductoPorIdentificacion = async (
  identificacion
) => {
  const pool = new Pool(config);
  try {
    const texto =
      "SELECT idproductos FROM PRODUCTOS p WHERE p.identificacion = $1";
    const values = [identificacion];
    const DBRes = await pool.query(texto, values);
    return DBRes;
  } catch (error) {
    console.log(error)
    console.log("Error idProductoPorIdentificacion");
  }
  pool.end();
};

const obtenerHistoricoAlquileres = async () => {
  const pool = new Pool(config);
  try {
    const DBRes = await pool.query("select * from HISTORICO_ALQUILERES");
    console.log(DBRes.rows);
    return DBRes;
  } catch (error) {
    console.log("Error al obtener los historicos de alquileres");
  }
  pool.end();
};

const obtenerContrasenaUsuario = async (nombre_usuario) => {
  const pool = new Pool(config);
  try {
    const texto = "SELECT * FROM usuarios WHERE nombre_usuario = $1";
    const values = [nombre_usuario];
    const DBRes = await pool.query(texto, values);
    return DBRes;
  } catch (error) {
    console.log("Error al obtener los usuarios");
  }
  pool.end();
};

const sqlQuery = async (sqlQuery) => {
  const pool = new Pool(config);
  try {
    const DBRes = await pool.query(sqlQuery);
    return DBRes;
  } catch (error) {
    console.log("Error al obtener los usuarios");
  }
  pool.end();
};

const sqlQueryValues = async (sqlQuery, values) => {
  const pool = new Pool(config);
  try {
    const DBRes = await pool.query(sqlQuery, values);
    return DBRes;
  } catch (error) {
    console.log("Error al obtener los usuarios");
  }
  pool.end();
};


//FIN FUNCIONES CRUD DBCONECTION

const objetoFuncionesLogicaNegocioBD = funcionesLogicaNegocioBD(config)

module.exports = {
  obtenerUsuarios, insertarUsuario, registrarUsuario,
  actualizarUsuario, eliminarUsuario, 

  obtenerProveedores, insertarProveedor,
  actualizarProveedor, eliminarProveedor,

  obtenerProductos, insertarProducto,
  actualizarProducto, eliminarProducto,
  obtenerProductosDistintoModelo,

  obtenerProyectos, insertarProyecto,
  actualizarProyecto, eliminarProyecto,

  obtenerConductores, insertarConductor,
  actualizarConductor, eliminarConductor,

  insertarHistoricoAlquileres, obtenerHistoricoAlquileres,

  obtenerContrasenaUsuario, 
  
  insertarMantenimientos,actualizarMantenimientos,
  eliminarMantenimientos,
  idProductoPorIdentificacion,

  sqlQuery, sqlQueryValues,

  eliminarCompra,

  objetoFuncionesLogicaNegocioBD
};
