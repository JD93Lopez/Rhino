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
            imagen: "/materiales-sin-fondo-2@2x.png",
            categorias: ["maquinaria1","maquinaria2"]
        },
        {
            nombre: "Cargador de cadenas",
            imagen: "/cargador-de-cadenas-sin-fonod-2@2x.png",
            categorias: ["transporte1","transporte2"]
        },
        {
            nombre: "Cargadora de Ruedas",
            imagen: "/cargadora-de-ruedas-sin-fondo-1@2x.png",
            categorias: ["maquinaria3","maquinaria4"]
        },
        {
            nombre: "Compactadora",
            imagen: "/compactadora-sin-fondo-1@2x.png",
            categorias: ["transporte3","transporte4"]
        },
        {
            nombre: "Grua manipuladora de metales",
            imagen: "/materiales-sin-fondo-2@2x.png",
            categorias: ["maquinaria5","maquinaria6"]
        },
        {
            nombre: "Grua manipuladora de metales",
            imagen: "/materiales-sin-fondo-2@2x.png",
            categorias: ["transporte5","transporte6"]
        },
        {
            nombre: "Grua manipuladora de metales MAJo",
            imagen: "/materiales-sin-fondo-2@2x.png",
            categorias: ["vehiculo1","maquinaria2"]
        },
        {
            nombre: "Grua manipuladora de metales",
            imagen: "/materiales-sin-fondo-2@2x.png",
            categorias: ["maquinaria1","maquinaria2"]
        }
    ]
//se modificaron los atributos porque faltaban algunos y se modificaron como esta en la DB
//CAMBIO REALIZADO POR MAJO
    const usuarioIniciado = {
        nombre_usuario: "Iniciar Sesión",
        iniciado: false,
        nombre_real:"NO INICIADO",
        direccion:"NO INICIADO",
        telefono:"NO INICIADO",
        identificacion: "NO INICIADO",
        correo: "NO INICIADO",
        estado:"NO INICIADO"
    }

    const [data, setData] = useState({
        usuarioIniciado,
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
