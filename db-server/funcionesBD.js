const { Pool } = require("pg");

const funcionesLogicaNegocioBD = (config) => {
  
  let funciones = {}

  funciones.personalizada = async ( sqlQuery, values ) => {
    const pool = new Pool(config);
    try {
      const DBRes = await pool.query(sqlQuery, values);
      return DBRes;
    } catch (error) {
      console.log("Error en la operacion");
    }
    pool.end();
  }

  //1 Crear Alquiler
  funciones.clienteAgregarAlquiler1 = async ( Usuarios_idUsuarios ) => {
    const pool = new Pool(config);
    try {
      await pool.query("INSERT INTO ALQUILERES(fecha, estado, Usuarios_idUsuarios) VALUES (NOW(),'EN_ESPERA',$1)", 
      [Usuarios_idUsuarios]);
      const DBRes = await pool.query("SELECT idAlquileres FROM ALQUILERES ORDER BY idAlquileres DESC LIMIT 1", []);
      return DBRes;
    } catch (error) {
      console.log(error)
      console.log("Error en la operacion 1");
    }
    pool.end();
  }
  //2 Crear Agenda
  funciones.clienteAgregarAgenda2 = async ( fecha_inicio, fecha_fin, lugar_origen, lugar_destino ) => {
    const pool = new Pool(config);
    try {
      await pool.query("INSERT INTO AGENDAS(fecha_inicio, fecha_fin, lugar_origen, lugar_destino) VALUES ($1, $2, $3, $4)", 
      [fecha_inicio, fecha_fin, lugar_origen, lugar_destino]);
      const DBRes = await pool.query("SELECT idAgenda FROM AGENDAS ORDER BY idAgenda DESC LIMIT 1", []);
      return DBRes;
    } catch (error) {
      console.log(error)
      console.log("Error en la operacion 2");
    }
    pool.end();
  }

  //3 cliente agregar en tabla productos has alquileres 
  funciones.clienteAgregarProductosHasAlquileres3 = async ( PRODUCTOS_idProductos, ALQUILERES_idAlquileres, ALQUILERES_Usuarios_idUsuarios, AGENDAS_idAgenda ) => {
    const pool = new Pool(config);
    try {
      const DBRes = await pool.query("INSERT INTO productos_has_alquileres(PRODUCTOS_idProductos, ALQUILERES_idAlquileres, ALQUILERES_Usuarios_idUsuarios, AGENDAS_idAgenda) VALUES ($1, $2, $3, $4)", 
      [PRODUCTOS_idProductos, ALQUILERES_idAlquileres, ALQUILERES_Usuarios_idUsuarios, AGENDAS_idAgenda]);
      return DBRes;
    } catch (error) {
      console.log(error)
      console.log("Error en la operacion 3");
    }
    pool.end();
  }

  //3.5 administrador agregar conductor
  funciones.administradorAgregarConductor3_5 = async ( nombre, cedula, telefono ) => {
    const pool = new Pool(config);
    try {
      await pool.query("INSERT INTO conductores(nombre, cedula, telefono) VALUES ($1, $2, $3)", 
      [nombre, cedula, telefono]);
      const DBRes = await pool.query("SELECT idConductores FROM CONDUCTORES ORDER BY idConductores DESC LIMIT 1", []);
      return DBRes;
    } catch (error) {
      console.log(error)
      console.log("Error en la operacion 3.5");
    }
    pool.end();
  }

  //3.51 administrador actualizar idConductores para tabla agenda
  funciones.administradorActualizarConductorDeAgenda3_51 = async ( idAgenda, idConductores ) => {
    const pool = new Pool(config);
    try {
      const DBRes = await pool.query("UPDATE agendas SET conductores_idconductores = $2 WHERE idagenda = $1", 
      [idAgenda, idConductores]);
      return DBRes;
    } catch (error) {
      console.log(error)
      console.log("Error en la operacion 3.51");
    }
    pool.end();
  }

  //4 administrador actualizar alquiler tras rellenar campos restantes
  funciones.administradorActualizarAlquiler4 = async ( idAlquileres, subtotal, total, total_descuento, total_impuestos, valor_conductores, gastos_adicionales, justificacion_ga ) => {
    const pool = new Pool(config);
    try {
      const DBRes = await pool.query("UPDATE alquileres SET fecha=NOW(), subtotal=$2, total=$3, total_descuento=$4, total_impuestos=$5, estado='COTIZADO', valor_conductores=$6, gastos_adicionales=$7, justificacion_ga=$8 WHERE idalquileres=$1", 
      [idAlquileres, subtotal, total, total_descuento, total_impuestos, valor_conductores, gastos_adicionales, justificacion_ga]);
      return DBRes;
    } catch (error) {
      console.log(error)
      console.log("Error en la operacion 4");
    }
    pool.end();
  }

  //5 cliente actualizar alquiler al pagar cotizacion
  funciones.clienteActualizarAlquiler5 = async ( idAlquileres ) => {
    const pool = new Pool(config);
    try {
      const DBRes = await pool.query("UPDATE alquileres SET fecha=NOW(), estado='ALQUILADO' WHERE idalquileres=$1", 
      [idAlquileres]);
      return DBRes;
    } catch (error) {
      console.log(error)
      console.log("Error en la operacion 5");
    }
    pool.end();
  }

  //TODO 6 y 7

  //8 administrador agregar compras 
  funciones.administradorAgregarCompras8  = async ( Proveedores_idProveedores, responsable, subtotal, total, total_descuento, total_impuestos, p_descuento ) => {
    const pool = new Pool(config);
    try {
      await pool.query("INSERT INTO compras( proveedores_idproveedores, responsable, fecha, subtotal, total, total_descuento, total_impuestos, p_descuento ) VALUES ( $1, $2, NOW(), $3, $4, $5, $6, $7 )", 
      [Proveedores_idProveedores, responsable, subtotal, total, total_descuento, total_impuestos, p_descuento]);
      const DBRes = await pool.query("SELECT idcompras FROM COMPRAS ORDER BY idcompras DESC LIMIT 1", []);
      return DBRes;
    } catch (error) {
      console.log(error)
      console.log("Error en la operacion 8");
    }
    pool.end();
  }

  //9 administrador agregar en la tabla productos has compras
  funciones.administradorAgregarProductosHasCompras9  = async ( PRODUCTOS_idProductos, COMPRAS_idCompras, COMPRAS_Proveedores_idProveedores ) => {
    const pool = new Pool(config);
    try {
      const DBRes = await pool.query("INSERT INTO productos_has_compras( productos_idproductos, compras_idcompras, compras_proveedores_idproveedores ) VALUES ($1, $2, $3)", 
      [PRODUCTOS_idProductos, COMPRAS_idCompras, COMPRAS_Proveedores_idProveedores]);
      return DBRes;
    } catch (error) {
      console.log(error)
      console.log("Error en la operacion 9");
    }
    pool.end();
  }

  //10 cliente agregar balance 
  funciones.clienteAgregarBalance10  = async ( valor, descripcion, ALQUILERES_idAlquileres, usuarios_idusuarios ) => {
    const pool = new Pool(config);
    try {
      let DBRes
      if(ALQUILERES_idAlquileres!=0){
        DBRes = await pool.query("INSERT INTO balance(valor, fecha, descripcion, alquileres_idalquileres) VALUES ($1, NOW(), $2, $3);", 
        [valor, descripcion, ALQUILERES_idAlquileres]);
      }else{
        if(usuarios_idusuarios!=0){
          DBRes = await pool.query("INSERT INTO balance(valor, fecha, descripcion, usuarios_idusuarios) VALUES ($1, NOW(), $2, $3);", 
          [valor, descripcion, usuarios_idusuarios]);
        }
      }
      return DBRes;
    } catch (error) {
      console.log(error)
      console.log("Error en la operacion 10");
    }
    pool.end();
  }

  //TODO 11

  //12 administrador agregar en historial mantenimientos
  funciones.administradorAgregarMantenimiento12  = async ( descripcion, fechamantenimiento, precio, productos_idproductos ) => {
    const pool = new Pool(config);
    try {
      await pool.query("INSERT INTO historial_mantenimientos( descripcion, fecharegistro, fechamantenimiento, precio, productos_idproductos ) VALUES ($1, NOW(), $2, $3, $4);", 
      [descripcion, fechamantenimiento, precio, productos_idproductos]);
      const DBRes = await pool.query("SELECT idhistorialmantenimientos FROM historial_mantenimientos ORDER BY idhistorialmantenimientos DESC LIMIT 1", []);
      return DBRes;
    } catch (error) {
      console.log(error)
      console.log("Error en la operacion 12");
    }
    pool.end();
  }

  return funciones
}

module.exports = funcionesLogicaNegocioBD