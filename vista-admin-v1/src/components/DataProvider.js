import React, { useState, useEffect, createContext } from "react";

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [data, setData] = useState([])

    useEffect(( ) => {

        //usuarios de ejemplo TODO bajar usuarios de API
        const usuarios = [
            {
                nombre_usuario: "Usuario Completo",
                direccion: "Carrera #2",
                contrasena: "********",
                nombre_real: "Nombre Real",
                telefono: "300",
                identificacion: "110",
                correo: "user1@example.com",
                tipo_identificacion: "CEDULA",
                tipo_usuario: "ADMINISTRADOR",
                estado: "ACTIVAO"
            },
            {
                nombre_usuario: "Usuario Completo2",
                direccion: "Carrera #22",
                contrasena: "********",
                nombre_real: "Nombre Real2",
                telefono: "3002",
                identificacion: "1102",
                correo: "user1@example.com2",
                tipo_identificacion: "CEDULA2",
                tipo_usuario: "ADMINISTRADOR2",
                estado: "ACTIVAO2"
            },
            {
                nombre_usuario: "Usuario Completo3",
                direccion: "Carrera #23",
                contrasena: "********",
                nombre_real: "Nombre Real3",
                telefono: "3003",
                identificacion: "1103",
                correo: "user1@example.com3",
                tipo_identificacion: "CEDULA3",
                tipo_usuario: "ADMINISTRADOR3",
                estado: "ACTIVAO3"
            },
        ]

        //proyectos ejemplo TODO bajar proyectos API
        const proyectos = [
            {
                nombre: "Proyecto 1",
                identificacion: "Cedula 1",
                tipo_identificacion: "Cedula",
                telefono: "Telefono 1",
                descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                fecha_entrega: "2024-04-13",
                estado_avance: "Terminado"
            },
            {
                nombre: "Proyecto 2",
                identificacion: "Cedula 2",
                tipo_identificacion: "Cedula",
                telefono: "Telefono 2",
                descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                fecha_entrega: "2024-05-13",
                estado_avance: "Iniciado"
            },
            {
                nombre: "Proyecto 3",
                identificacion: "Nit 1",
                tipo_identificacion: "Nit",
                telefono: "Telefono 3",
                descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                fecha_entrega: "2024-05-13",
                estado_avance: "Por iniciar"
            }
        ]

        //Productos de ejemplo TODO bajar productos de API
        const productos = [  //TODO ESTADO DEL PRODUCTO, TECNOMECANICA, SOAT en back
            {
                idproductos: "1",
                nombre:"EXCAVADORA DE PRUEBA" ,
                descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                identificacion: "1",
                precio_alquiler: "10.000",
                precio_compra: "1.000.000",
                marca: "cat",
                modelo: "2020",
                tipo_vehiculo: "Transporte",
                imagen: "/image-1@2x.png",
                estado: "Disponible"

            },
            {
                idproductos: "2",
                nombre:"CARGADOR FRONTAL DE PRUEBA" ,
                descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                identificacion: "2",
                precio_alquiler: "20.000",
                precio_compra: "2.000.000",
                marca: "cat",
                modelo: "2020",
                tipo_vehiculo: "Transporte",
                imagen: "/image-2@2x.png",
                estado: "Ocupado"
            },
            {
                idproductos: "3",
                nombre:"CARGADOR FRONTAL DE PRUEBita" ,
                descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                identificacion: "3",
                precio_alquiler: "20.000",
                precio_compra: "2.000.000",
                marca: "cat",
                modelo: "2020",
                tipo_vehiculo: "Maquinaria Pesada",
                imagen: null,
                estado: "Fuera de Servicio"
            }
        ]

        //Mantenimientos de ejemplo TODO bajar mantenimientos de API
        const mantenimientos = [
            {
                nombremaquinaria: "Excavadora",
                identificacion: "1",
                fecha: "2024-04-13",
                descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                idmantenimiento: 1
            },
            {
                nombremaquinaria: "Montacargas",
                identificacion: "2",
                fecha: "2024-04-13",
                descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                idmantenimiento: 2
            },
            {
                nombremaquinaria: "Excavadora",
                identificacion: "1",
                fecha: "2024-04-13",
                descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                idmantenimiento: 3
            }
        ]

        const cotizaciones = [
            {
                idalquileres: "1",
                nombre_usuario: "Pepito Perez",
                correo: "example@example.com",
                telefono: "500",
                estado: "EN_ESPERA",
                fecha: "2024-04-13"
            },{
                idalquileres: "2",
                nombre_usuario: "Pepito Perez",
                correo: "example@example.com",
                telefono: "500",
                estado: "EN_ESPERA",
                fecha: "2024-04-13"
            },{
                idalquileres: "3",
                nombre_usuario: "Pepito Perez",
                correo: "example@example.com",
                telefono: "500",
                estado: "ALQUILADO",
                fecha: "2024-04-13"
            },
        ]

        const selectedUsers = []

        const selectedProyects = []

        const selectedProducts = []

        const usuarioIniciado = {
            nombre_usuario: "No Iniciado",
            direccion: "Carrera #2",
            contrasena: "********",
            nombre_real: "Nombre Real",
            telefono: "300",
            identificacion: "119",
            correo: "user1@example.com",
            tipo_identificacion: "CEDULA",
            tipo_usuario: "ADMINISTRADOR",
            estado: "ACTIVAO"
        }

        usuarios.usuarioIniciado = usuarioIniciado

        setData({
            usuarios,
            proyectos,
            productos,
            mantenimientos,
            cotizaciones,
            selectedUsers,
            selectedProyects,
            selectedProducts,
            Loaded: true
        })
    },[])

    const value = data
    
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}