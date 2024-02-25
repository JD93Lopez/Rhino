const {Pool} = require ('pg');
const FileReader = require ('./FileReader.js');

const config = FileReader.readDBConfig()
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

module.exports = {obtenerUsuarios, insertarUsuario};

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