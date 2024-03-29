import React, { useState, useEffect, createContext } from "react";

export const DataContext = createContext();

// Define los arrays de datos
export const usuarios = [
    {
        nombreUsuario:"Usuario1",
        nombreCompleto:"Nombre usuario 1",
        email:"1",
        telefono:"1",
        estado:"1"
    },
    {
        nombreUsuario:"Usuario2",
        nombreCompleto:"2",
        email:"2",
        telefono:"2",
        estado:"2"
    },
    {
        nombreUsuario:"Usuario3",
        nombreCompleto:"Nombre Completo",
        email:"email.usuario3@gmail.com",
        telefono:"3003333333",
        estado:"ACTIVAO"
    }
];

export const proyectos = [
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
];

export const productos = [
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
];

export const mantenimientos = [
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
        identificacion: "49845",
        fecha: "23/03/2024"
    }
];

// Exporta el contexto y los arrays de datos
export const DataProvider = (props) => {
    const [data, setData] = useState({
        usuarios,
        proyectos,
        productos,
        mantenimientos,
        selectedUsers: [],
        selectedProyects: [],
        selectedProducts: [],
        Loaded: true
    });

    const value = data;
    
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    );
};
