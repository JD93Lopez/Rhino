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

// Exporta el contexto y los arrays de datos
export const DataProvider = (props) => {

    let productos = [
        {
            nombre: "Grua manipuladora de metales",
            imagen: "/materiales-sin-fondo-2@2x.png"
        },
        {
            nombre: "Cargador de cadenas",
            imagen: "/cargador-de-cadenas-sin-fonod-2@2x.png"
        },
        {
            nombre: "Cargadora de Ruedas",
            imagen: "/cargadora-de-ruedas-sin-fondo-1@2x.png"
        },
        {
            nombre: "Compactadora",
            imagen: "/compactadora-sin-fondo-1@2x.png"
        },
        {
            nombre: "Grua manipuladora de metales",
            imagen: "/materiales-sin-fondo-2@2x.png"
        },
        {
            nombre: "Grua manipuladora de metales",
            imagen: "/materiales-sin-fondo-2@2x.png"
        },
        {
            nombre: "Grua manipuladora de metales MAJo",
            imagen: "/materiales-sin-fondo-2@2x.png"
        },
        {
            nombre: "Grua manipuladora de metales",
            imagen: "/materiales-sin-fondo-2@2x.png"
        }
    ]

    const [data, setData] = useState({
        usuarios,
        productos,
        Loaded: true
    });

    const value = data;
    
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    );
};
