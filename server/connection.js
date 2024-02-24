const {Pool} = require ('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'rhinodb',
    password: 'password',
    port: 5432,
};
const pool = new Pool(config);
const obtenerUsuarios = async () => {
  const res = await pool.query('select * from usuarios')
  console.log(res.rows);
  pool.end();
}
const insertarUsuario = async (idusuarios, nombre_usuario, contrasena, nombre_real, direccion, telefono, identificacion, correo, tipo_identificacion, tipo_usuario) => {
  const texto = 'insert into usuarios(idusuarios, nombre_usuario, contrasena, nombre_real, direccion, telefono, identificacion, correo, tipo_identificacion, tipo_usuario) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)'

  const values = [idusuarios, nombre_usuario, contrasena, nombre_real, direccion, telefono, identificacion, correo, tipo_identificacion, tipo_usuario]
  // [1,"juan", "1234", "Juan D Lopez", "Calle # Carrera", "300", "109", "juandavid.jdlea@gmail.com", "CEDULA", "ADMINISTRADOR"]

  const consulta = await pool.query(texto, values);
  console.log(consulta);
  pool.end();
}

module.exports = {obtenerUsuarios};

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