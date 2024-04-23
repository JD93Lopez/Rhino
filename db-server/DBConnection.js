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
  tipo_usuario
) => {
  const pool = new Pool(config);
  try {
    const texto =
      "insert into usuarios(nombre_usuario, contrasena, nombre_real, direccion, telefono, identificacion, correo, tipo_identificacion, tipo_usuario) values($1, $2, $3, $4, $5, $6, $7, $8, $9)";
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
    ];
    const DBRes = await pool.query(texto, values);
    return DBRes;
  } catch (error) {
    console.log("Error al insertar el usuario");
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
  tipo_usuario
) => {
  const pool = new Pool(config);
  try {
    const texto =
      "UPDATE USUARIOS SET nombre_usuario = $2, contrasena = $3, nombre_real = $4, direccion = $5, telefono = $6, identificacion = $7, correo = $8, tipo_identificacion = $9, tipo_usuario = $10 WHERE idUsuarios = $1";
    const values = [
      idUsuarios,
      nombre_usuario,
      contrasena,
      nombre_real,
      direccion,
      telefono,
      identificacion,
      correo,
      tipo_identificacion,
      tipo_usuario
    ];
    const DBRes = await pool.query(texto, values);
    return DBRes;
  } catch (error) {
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
    console.log(DBRes.rows);
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
  imagen
) => {
  const pool = new Pool(config);
  try {
    const texto =
      "INSERT INTO PRODUCTOS(nombre, descripcion, identificacion, precio_alquiler, precio_compra, marca, modelo, tipo_vehiculo, estado, imagen) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";
    const values = [
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
    const DBRes = await pool.query(texto, values);
    return DBRes;
  } catch (error) {
    console.log("Error al ingresar el producto");
  }
  pool.end();
};

const eliminarProducto = async (idProductos) => {
  const pool = new Pool(config);
  try {
    const texto = "DELETE FROM PRODUCTOS WHERE idProductos = $1";
    const values = [idProductos];
    const DBRes = await pool.query(texto, values);
    return DBRes;
  } catch (error) {
    console.log("Error al eliminar el producto");
  }
  pool.end();
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
  imagen
) => {
  const pool = new Pool(config);
  try {
    const texto =
      "UPDATE PRODUCTOS SET nombre = $2, descripcion = $3, identificacion = $4, precio_alquiler = $5, precio_compra = $6, marca = $7, modelo = $8, tipo_vehiculo = $9, estado = $10, imagen = $11 WHERE idProductos = $1";
    const values = [
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
      imagen
    ];
    const DBRes = await pool.query(texto, values);
    return DBRes;
  } catch (error) {
    console.log("Error  al actualizar el producto");
  }
  pool.end();
};

const obtenerProductos = async () => {
  const pool = new Pool(config);
  try {
    const DBRes = await pool.query("select * from productos");
    return DBRes;
  } catch (error) {
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
  const pool = new Pool(config);
  try {
    const DBRes = await pool.query("select * from proyectos");
    return DBRes;
  } catch (error) {
    console.log("Error al obtener los proyectos");
  }
  pool.end();
};

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
  obtenerUsuarios, insertarUsuario, 
  actualizarUsuario, eliminarUsuario, 

  obtenerProveedores, insertarProveedor,
  actualizarProveedor, eliminarProveedor,

  obtenerProductos, insertarProducto,
  actualizarProducto, eliminarProducto,

  obtenerProyectos, insertarProyecto,
  actualizarProyecto, eliminarProyecto,

  obtenerConductores, insertarConductor,
  actualizarConductor, eliminarConductor,

  insertarHistoricoAlquileres, obtenerHistoricoAlquileres,

  obtenerContrasenaUsuario,

  sqlQuery, sqlQueryValues,

  objetoFuncionesLogicaNegocioBD
};
