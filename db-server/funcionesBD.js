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
  funciones.administradorAgregarCompras8  = async ( Proveedores_idProveedores, responsable, p_descuento, p_impuestos ) => {
    const pool = new Pool(config);
    try {
      await pool.query("INSERT INTO compras( proveedores_idproveedores, responsable, p_descuento, p_impuestos, fecha ) VALUES ( $1, $2, $3, $4, NOW() )", 
      [Proveedores_idProveedores, responsable, p_descuento, p_impuestos]);
      const DBRes = await pool.query("SELECT idcompras FROM COMPRAS ORDER BY idcompras DESC LIMIT 1", []);
      return DBRes;
    } catch (error) {
      console.log(error)
      console.log("Error en la operacion 8");
    }
    pool.end();
  }

  //8.5 administrador actualizar compras 
  funciones.administradorActualizarCompras8_5  = async ( idcompras, total, subtotal, total_descuento, total_impuestos ) => {
    const pool = new Pool(config);
    try {
      const DBRes = await pool.query("UPDATE compras SET total = $2, subtotal = $3, total_descuento = $4, total_impuestos = $5 WHERE idcompras = $1", 
      [idcompras, total, subtotal, total_descuento, total_impuestos]);
      return DBRes;
    } catch (error) {
      console.log(error)
      console.log("Error en la operacion 8.5");
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
  
  

  //Traer productos y agendas de un alquiler
  funciones.productosYAgendasDeAlquiler  = async ( idalquileres ) => {
    const pool = new Pool(config);
    try {
      const DBRes = await pool.query("SELECT p.*, a.* FROM productos p, agendas a, productos_has_alquileres pha WHERE pha.alquileres_idalquileres = $1 AND pha.productos_idproductos = p.idproductos AND pha.agendas_idagenda = a.idagenda", 
      [idalquileres]);
      return DBRes;
    } catch (error) {
      console.log(error)
      console.log("Error en la operacion");
    }
    pool.end();
  }
  //Consultar conductor por cedula
  funciones.conductorPorCedula  = async ( cedula ) => {
    const pool = new Pool(config);
    try {
      const DBRes = await pool.query("SELECT * FROM CONDUCTORES c WHERE c.cedula = $1", 
      [cedula]);
      return DBRes;
    } catch (error) {
      console.log(error)
      console.log("Error en la operacion");
    }
    pool.end();
  }
  //Consultar productos por modelo
  funciones.productosPorModelo  = async ( modelo ) => {
    const pool = new Pool(config);
    try {
      const DBRes = await pool.query("SELECT * FROM PRODUCTOS p WHERE p.modelo = $1", 
      [modelo]);
      return DBRes;
    } catch (error) {
      console.log(error)
      console.log("Error en la operacion");
    }
    pool.end();
  }
  //Consultar productos por identificacion
  funciones.productosPorIdentificacion  = async ( identificacion ) => {
    const pool = new Pool(config);
    try {
      const DBRes = await pool.query("SELECT * FROM PRODUCTOS p WHERE p.identificacion = $1", 
      [identificacion]);
      return DBRes;
    } catch (error) {
      console.log(error)
      console.log("Error en la operacion");
    }
    pool.end();
  }
  //Consultar agendas con el id de un producto
  funciones.agendasPorProducto  = async ( idproductos ) => {
    const pool = new Pool(config);
    try {
      const DBRes = await pool.query("SELECT a.* FROM AGENDAS a, PRODUCTOS_has_ALQUILERES pha WHERE pha.PRODUCTOS_idproductos = $1 AND pha.AGENDAS_idagenda = a.idagenda", 
      [idproductos]);
      return DBRes;
    } catch (error) {
      console.log(error)
      console.log("Error en la operacion");
    }
    pool.end();
  }
  //Consultar alquileres por usuario
  funciones.alquileresPorUsuario = async ( idusuarios ) => {
    const pool = new Pool(config);
    try {
      const DBRes = await pool.query("SELECT * FROM ALQUILERES a WHERE a.USUARIOS_idusuarios = $1 ORDER BY a.idalquileres DESC", 
      [idusuarios]);
      return DBRes;
    } catch (error) {
      console.log(error)
      console.log("Error en la operacion");
    }
    pool.end();
  }
  //obtener mantenimientos
  funciones.obtenerMantenimientos = async () => {
    const pool = new Pool(config);
    try {
      const DBRes = await pool.query("select * from historial_mantenimientos");

      const arrayMants = DBRes.rows

      for await (const mant of arrayMants){
        mant.producto = (await pool.query(`select * from productos where idproductos = ${mant.productos_idproductos}`)).rows[0];
      }

      return DBRes;
    } catch (error) {
      console.log("Error al obtener los mantenimientos");
    }
    pool.end();
  };
  //obtener alquileres
  funciones.obtenerAlquileres = async () => {
    const pool = new Pool(config);
    try {
      const DBRes = await pool.query(`SELECT *
      FROM alquileres a
      ORDER BY CASE 
      WHEN a.estado = 'EN_ESPERA' AND a.usuarios_idusuarios = (SELECT idusuarios FROM USUARIOS WHERE nombre_usuario = 'Alianza') THEN 0
      WHEN a.estado = 'EN_ESPERA' THEN 1
      ELSE 2
      END, a.idalquileres ASC;
      `);

      return DBRes;
    } catch (error) {
      console.log("Error al obtener los mantenimientos");
    }
    pool.end();
  };
  //Consultar usuario por idusuarios
  funciones.usuarioPorID = async ( idusuarios ) => {
    const pool = new Pool(config);
    try {
      const DBRes = await pool.query("SELECT * FROM USUARIOS u WHERE u.idusuarios = $1", 
      [idusuarios]);
      return DBRes;
    } catch (error) {
      console.log(error)
      console.log("Error en la operacion");
    }
    pool.end();
  }
  //Consultar proveedor por nit
  funciones.proveedorPorNit = async ( nit ) => {
    const pool = new Pool(config);
    try {
      const DBRes = await pool.query("SELECT * FROM PROVEEDORES p WHERE p.nit = $1", 
      [nit]);
      return DBRes;
    } catch (error) {
      console.log(error)
      console.log("Error en la operacion");
    }
    pool.end();
  }
  //Actualizar precio_compra de producto
  funciones.actualizarPreciocompraProducto  = async ( idproductos, precio_compra ) => {
    const pool = new Pool(config);
    try {
      const DBRes = await pool.query("UPDATE productos SET precio_compra = $2 WHERE idproductos = $1", 
      [idproductos, precio_compra]);
      return DBRes;
    } catch (error) {
      console.log(error)
      console.log("Error en la operacion actualizarPreciocompraProducto");
    }
    pool.end();
  }  
  //Consultar compra por idcompras
  funciones.compraPorIdcompras  = async ( idcompras ) => {
    const pool = new Pool(config);
    try {
      const DBRes = await pool.query(`SELECT *
      FROM COMPRAS WHERE idcompras = $1`, 
      [idcompras]);
      return DBRes;
    } catch (error) {
      console.log(error)
      console.log("Error en la operacion compraPorIdcompras");
    }
    pool.end();
  }
  //Consultar productos por idcompras
  funciones.productosPorIdcompras = async ( idcompras ) => {
    const pool = new Pool(config);
    try {
      const DBRes = await pool.query("SELECT p.* FROM productos p, PRODUCTOS_has_COMPRAS phc WHERE phc.COMPRAS_idcompras = $1 AND phc.PRODUCTOS_idproductos = p.idproductos", 
      [idcompras]);
      return DBRes;
    } catch (error) {
      console.log(error)
      console.log("Error en la operacion ");
    }
    pool.end();
  }
  //Consultar compras y proveedor de la compra
  funciones.consultarComprasConProveedor = async () => {
    const pool = new Pool(config);
    try {
      const DBRes = await pool.query("SELECT * FROM compras c, proveedores p WHERE c.proveedores_idproveedores = p.idproveedores ORDER BY c.idcompras DESC", 
      []);
      return DBRes;
    } catch (error) {
      console.log(error)
      console.log("Error en la operacion ");
    }
    pool.end();
  }
  //Consultar 6 productos con mayor descuento
  funciones.consultarProductosDescuento = async () => {
    const pool = new Pool(config);
    try {
      const DBRes = await pool.query("SELECT * FROM productos ORDER BY COALESCE(p_descuento, 0) DESC LIMIT 6", 
      []);
      return DBRes;
    } catch (error) {
      console.log(error)
      console.log("Error en la operacion ");
    }
    pool.end();
  }
  
  return funciones
}

module.exports = funcionesLogicaNegocioBD