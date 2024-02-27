const {Pool} = require ('pg');
const FileReader = require ('./FileReader.js');

const config = FileReader.readDBConfig()
/*const config = {
  user: 'postgres',
  host: 'localhost',
  database: 'rhinodb',
  password: 'password',
  port: 5432,
};*/
const pool = new Pool(config);

const obtenerUsuarios = async () => {
  const pool = new Pool(config);
  const DBRes = await pool.query('select * from usuarios')
  // console.log(DBRes.rows);
  pool.end();
  return DBRes
}
const insertarUsuario = async (idusuarios, nombre_usuario, contrasena, nombre_real, direccion, telefono, identificacion, correo, tipo_identificacion, tipo_usuario) => {
  const pool = new Pool(config);
  const texto = 'insert into usuarios(idusuarios, nombre_usuario, contrasena, nombre_real, direccion, telefono, identificacion, correo, tipo_identificacion, tipo_usuario) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)'

  const values = [idusuarios, nombre_usuario, contrasena, nombre_real, direccion, telefono, identificacion, correo, tipo_identificacion, tipo_usuario]
  // [1,"juan", "1234", "Juan D Lopez", "Calle # Carrera", "300", "109", "juandavid.jdlea@gmail.com", "CEDULA", "ADMINISTRADOR"]

  const DBRes = await pool.query(texto, values);
  // console.log(DBRes);
  pool.end();
  return DBRes
}


const insertarProveedor = async (nombre, nit, direccion, descripcion, telefono) => {
  const pool = new Pool(config);
  const texto = 'INSERT INTO PROVEEDORES(nombre, nit, direccion, descripcion, telefono) VALUES($1, $2, $3, $4, $5)';
  const values = [nombre, nit, direccion, descripcion, telefono];
  const DBRes = await pool.query(texto, values);
  pool.end();
  return DBRes;
};


const insertarProducto = async (nombre, descripcion, identificacion, precio_alquiler, precio_compra, marca, modelo, tipo_vehiculo) => {
  const pool = new Pool(config);
  const texto = 'INSERT INTO PRODUCTOS(nombre, descripcion, identificacion, precio_alquiler, precio_compra, marca, modelo, tipo_vehiculo) VALUES($1, $2, $3, $4, $5, $6, $7, $8)';
  const values = [nombre, descripcion, identificacion, precio_alquiler, precio_compra, marca, modelo, tipo_vehiculo];
  const DBRes = await pool.query(texto, values);
  pool.end();
  return DBRes;
};

const insertarProyecto = async (nombre, identificacion, tipo_identificacion, telefono, descripcion, fecha_entrega, estado_avance) => {
  const pool = new Pool(config);
  const texto = 'INSERT INTO PROYECTOS(nombre, identificacion, tipo_identificacion, telefono, descripcion, fecha_entrega, estado_avance) VALUES($1, $2, $3, $4, $5, $6, $7)';
  const values = [nombre, identificacion, tipo_identificacion, telefono, descripcion, fecha_entrega, estado_avance];
  const DBRes = await pool.query(texto, values);
  pool.end();
  return DBRes;
};

const insertarConductor = async (nombre, cedula, telefono) => {
  const pool = new Pool(config);
  const texto = 'INSERT INTO CONDUCTORES(nombre, cedula, telefono) VALUES($1, $2, $3)';
  const values = [nombre, cedula, telefono];
  const DBRes = await pool.query(texto, values);
  pool.end();
  return DBRes;
};

const eliminarUsuario = async (idUsuarios) => {
  const pool = new Pool(config);
  const texto = 'DELETE FROM USUARIOS WHERE idUsuarios = $1';
  const values = [idUsuarios];
  const DBRes = await pool.query(texto, values);
  pool.end();
  return DBRes;
};

const actualizarUsuario = async (idUsuarios, nombre_usuario, contrasena, nombre_real, direccion, telefono, identificacion, correo, tipo_identificacion, tipo_usuario) => {
  const pool = new Pool(config);
  const texto = 'UPDATE USUARIOS SET nombre_usuario = $2, contrasena = $3, nombre_real = $4, direccion = $5, telefono = $6, identificacion = $7, correo = $8, tipo_identificacion = $9, tipo_usuario = $10 WHERE idUsuarios = $1';
  const values = [idUsuarios, nombre_usuario, contrasena, nombre_real, direccion, telefono, identificacion, correo, tipo_identificacion, tipo_usuario];
  const DBRes = await pool.query(texto, values);
  pool.end();
  return DBRes;
};

const eliminarProveedor = async (idProveedores) => {
  const pool = new Pool(config);
  const texto = 'DELETE FROM PROVEEDORES WHERE idProveedores = $1';
  const values = [idProveedores];
  const DBRes = await pool.query(texto, values);
  pool.end();
  return DBRes;
};

const actualizarProveedor = async (idProveedores, nombre, nit, direccion, descripcion, telefono) => {
  const pool = new Pool(config);
  const texto = 'UPDATE PROVEEDORES SET nombre = $2, nit = $3, direccion = $4, descripcion = $5, telefono = $6 WHERE idProveedores = $1';
  const values = [idProveedores, nombre, nit, direccion, descripcion, telefono];
  const DBRes = await pool.query(texto, values);
  pool.end();
  return DBRes;
};

const eliminarProducto = async (idProductos) => {
  const pool = new Pool(config);
  const texto = 'DELETE FROM PRODUCTOS WHERE idProductos = $1';
  const values = [idProductos];
  const DBRes = await pool.query(texto, values);
  pool.end();
  return DBRes;
};

const actualizarProducto = async (idProductos, nombre, descripcion, identificacion, precio_alquiler, precio_compra, marca, modelo, tipo_vehiculo) => {
  const pool = new Pool(config);
  const texto = 'UPDATE PRODUCTOS SET nombre = $2, descripcion = $3, identificacion = $4, precio_alquiler = $5, precio_compra = $6, marca = $7, modelo = $8, tipo_vehiculo = $9 WHERE idProductos = $1';
  const values = [idProductos, nombre, descripcion, identificacion, precio_alquiler, precio_compra, marca, modelo, tipo_vehiculo];
  const DBRes = await pool.query(texto, values);
  pool.end();
  return DBRes;
};

const eliminarProyecto = async (idProyectos) => {
  const pool = new Pool(config);
  const texto = 'DELETE FROM PROYECTOS WHERE idProyectos = $1';
  const values = [idProyectos];
  const DBRes = await pool.query(texto, values);
  pool.end();
  return DBRes;
};

const actualizarProyecto = async (idProyectos, nombre, identificacion, tipo_identificacion, telefono, descripcion, fecha_entrega, estado_avance) => {
  const pool = new Pool(config);
  const texto = 'UPDATE PROYECTOS SET nombre = $2, identificacion = $3, tipo_identificacion = $4, telefono = $5, descripcion = $6, fecha_entrega = $7, estado_avance = $8 WHERE idProyectos = $1';
  const values = [idProyectos, nombre, identificacion, tipo_identificacion, telefono, descripcion, fecha_entrega, estado_avance];
  const DBRes = await pool.query(texto, values);
  pool.end();
  return DBRes;
};

const eliminarConductor = async (idConductores) => {
  const pool = new Pool(config);
  const texto = 'DELETE FROM CONDUCTORES WHERE idConductores = $1';
  const values = [idConductores];
  const DBRes = await pool.query(texto, values);
  pool.end();
  return DBRes;
};

const actualizarConductor = async (idConductores, nombre, cedula, telefono) => {
  const pool = new Pool(config);
  const texto = 'UPDATE CONDUCTORES SET nombre = $2, cedula = $3, telefono = $4 WHERE idConductores = $1';
  const values = [idConductores, nombre, cedula, telefono];
  const DBRes = await pool.query(texto, values);
  pool.end();
  return DBRes;
};


//insertarUsuario(2,"juan", "1234", "Juan D Lopez", "Calle # Carrera", "300", "109", "juandavid.jdlea@gmail.com", "CEDULA", "ADMINISTRADOR");
//eliminarUsuario(2);

module.exports = {obtenerUsuarios, insertarUsuario, insertarProveedor, insertarProducto, insertarProyecto, insertarConductor};

// insertarUsuario();
/* 
obtenerDependencias().then((result) => {
  console.log(result);
}); */

/*
const obtenerDependencias = async () => {
  const client = new Client(config);
  await client.connect();
  const res = await client.query("select * from usuarios");
  const result = res.rows;
  await client.end();
  return result;
};*/