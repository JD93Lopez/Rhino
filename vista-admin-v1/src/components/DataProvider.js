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
                nombreProyecto: "Proyecto 1", 
                telefono: "Telefono 1", 
                cedula: "Cedula 1",
                descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                nombreProyecto: "Proyecto 2", 
                telefono: "Telefono 2", 
                cedula: "Cedula 2",
                descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                nombreProyecto: "Proyecto 3", 
                telefono: "Telefono 3", 
                cedula: "Cedula 3",
                descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ]

        //Productos de ejemplo TODO bajar productos de API
        const productos = [
            {
                nombreProducto: "EXCAVADORA DE PRUEBA", 
                descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
                imagen: "/image-1@2x.png"
            },
            {
                nombreProducto: "CARGADOR FRONTAL DE PRUEBA", 
                descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
                imagen: "/image-2@2x.png"
            }
        ]

        //Mantenimientos de ejemplo TODO bajar mantenimientos de API
        const mantenimientos = [
            {
                nombreMaquinaria: "Excavadora",
                identificacion: "49845",
                fecha: "23/03/2024"
            },
            {
                nombreMaquinaria: "Montacargas",
                identificacion: "125678",
                fecha: "15/04/2024"
            },
            {
                nombreMaquinaria: "Excavadora",
                identificacion: "498456",
                fecha: "23/03/2024"
            }
        ]

        const selectedUsers = []

        const selectedProyects = []

        const selectedProducts = []

        setData({
            usuarios,
            proyectos,
            productos,
            mantenimientos,
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