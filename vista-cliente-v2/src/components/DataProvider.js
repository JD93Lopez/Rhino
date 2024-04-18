import React, { useState, useEffect, createContext } from "react";
import axios from "../axios";

export const DataContext = createContext();

// Exporta el contexto y los arrays de datos
export const DataProvider = (props) => {

    // axios.api("ejemplo").then((res)=>{
    //     console.log(res.data)
    // })

    let productos = [
        {
            nombre: "Grua manipuladora de metales",
            identificacion: "MH5045",
            imagen: "/materiales-sin-fondo-2@2x.png",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam justo sit amet ultricies vestibulum. Aenean quis sem finibus, laoreet sapien id, ullamcorper tellus. In hac habitasse platea dictumst. Donec a odio sit amet dolor tristique dictum quis mattis diam. In in ornare elit. Proin viverra fringilla vestibulum. Pellentesque ipsum ipsum, lacinia sed consequat a, interdum ac lorem. Morbi eu neque at sem convallis commodo. Proin lobortis vitae orci in consequat. Vestibulum et nunc tortor. Cras sed ante volutpat, efficitur magna non, commodo libero. Nulla porta quam quis tortor molestie molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            categorias: ["maquinaria1","maquinaria2"],
            precio_alquiler: "120.000",
            modelo: "MH3250"
        },
        {
            nombre: "Cargador de cadenas",
            identificacion: "RH5045",
            imagen: "/cargador-de-cadenas-sin-fonod-2@2x.png",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam justo sit amet ultricies vestibulum. Aenean quis sem finibus, laoreet sapien id, ullamcorper tellus. In hac habitasse platea dictumst. Donec a odio sit amet dolor tristique dictum quis mattis diam. In in ornare elit. Proin viverra fringilla vestibulum. Pellentesque ipsum ipsum, lacinia sed consequat a, interdum ac lorem. Morbi eu neque at sem convallis commodo. Proin lobortis vitae orci in consequat. Vestibulum et nunc tortor. Cras sed ante volutpat, efficitur magna non, commodo libero. Nulla porta quam quis tortor molestie molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            categorias: ["transporte1","transporte2"],
            precio_alquiler: "120.000",
            modelo: "MODELO"
        },
        {
            nombre: "Cargadora de Ruedas",
            identificacion: "RH5046",
            imagen: "/cargadora-de-ruedas-sin-fondo-1@2x.png",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam justo sit amet ultricies vestibulum. Aenean quis sem finibus, laoreet sapien id, ullamcorper tellus. In hac habitasse platea dictumst. Donec a odio sit amet dolor tristique dictum quis mattis diam. In in ornare elit. Proin viverra fringilla vestibulum. Pellentesque ipsum ipsum, lacinia sed consequat a, interdum ac lorem. Morbi eu neque at sem convallis commodo. Proin lobortis vitae orci in consequat. Vestibulum et nunc tortor. Cras sed ante volutpat, efficitur magna non, commodo libero. Nulla porta quam quis tortor molestie molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            categorias: ["maquinaria3","maquinaria4"],
            precio_alquiler: "120.000",
            modelo: "MODELO"
        },
        {
            nombre: "Compactadora",
            identificacion: "MH5045",
            imagen: "/compactadora-sin-fondo-1@2x.png",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam justo sit amet ultricies vestibulum. Aenean quis sem finibus, laoreet sapien id, ullamcorper tellus. In hac habitasse platea dictumst. Donec a odio sit amet dolor tristique dictum quis mattis diam. In in ornare elit. Proin viverra fringilla vestibulum. Pellentesque ipsum ipsum, lacinia sed consequat a, interdum ac lorem. Morbi eu neque at sem convallis commodo. Proin lobortis vitae orci in consequat. Vestibulum et nunc tortor. Cras sed ante volutpat, efficitur magna non, commodo libero. Nulla porta quam quis tortor molestie molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            categorias: ["transporte3","transporte4"],
            precio_alquiler: "120.000",
            modelo: "MODELO"
        },
        {
            nombre: "Grua manipuladora de metales",
            identificacion: "MH5045",
            imagen: "/materiales-sin-fondo-2@2x.png",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam justo sit amet ultricies vestibulum. Aenean quis sem finibus, laoreet sapien id, ullamcorper tellus. In hac habitasse platea dictumst. Donec a odio sit amet dolor tristique dictum quis mattis diam. In in ornare elit. Proin viverra fringilla vestibulum. Pellentesque ipsum ipsum, lacinia sed consequat a, interdum ac lorem. Morbi eu neque at sem convallis commodo. Proin lobortis vitae orci in consequat. Vestibulum et nunc tortor. Cras sed ante volutpat, efficitur magna non, commodo libero. Nulla porta quam quis tortor molestie molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            categorias: ["maquinaria5","maquinaria6"],
            precio_alquiler: "120.000",
            modelo: "MODELO"
        },
        {
            nombre: "Grua manipuladora de metales",
            identificacion: "MH5045",
            imagen: "/materiales-sin-fondo-2@2x.png",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam justo sit amet ultricies vestibulum. Aenean quis sem finibus, laoreet sapien id, ullamcorper tellus. In hac habitasse platea dictumst. Donec a odio sit amet dolor tristique dictum quis mattis diam. In in ornare elit. Proin viverra fringilla vestibulum. Pellentesque ipsum ipsum, lacinia sed consequat a, interdum ac lorem. Morbi eu neque at sem convallis commodo. Proin lobortis vitae orci in consequat. Vestibulum et nunc tortor. Cras sed ante volutpat, efficitur magna non, commodo libero. Nulla porta quam quis tortor molestie molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            categorias: ["transporte5","transporte6"],
            precio_alquiler: "120.000",
            modelo: "MODELO"
        },
        {
            nombre: "Grua manipuladora de metales MAJo",
            identificacion: "MH5045",
            imagen: "/materiales-sin-fondo-2@2x.png",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam justo sit amet ultricies vestibulum. Aenean quis sem finibus, laoreet sapien id, ullamcorper tellus. In hac habitasse platea dictumst. Donec a odio sit amet dolor tristique dictum quis mattis diam. In in ornare elit. Proin viverra fringilla vestibulum. Pellentesque ipsum ipsum, lacinia sed consequat a, interdum ac lorem. Morbi eu neque at sem convallis commodo. Proin lobortis vitae orci in consequat. Vestibulum et nunc tortor. Cras sed ante volutpat, efficitur magna non, commodo libero. Nulla porta quam quis tortor molestie molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            categorias: ["vehiculo1","maquinaria2"],
            precio_alquiler: "120.000",
            modelo: "MODELO"
        },
        {
            nombre: "Grua manipuladora de metales",
            identificacion: "MH5045",
            imagen: "/materiales-sin-fondo-2@2x.png",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam justo sit amet ultricies vestibulum. Aenean quis sem finibus, laoreet sapien id, ullamcorper tellus. In hac habitasse platea dictumst. Donec a odio sit amet dolor tristique dictum quis mattis diam. In in ornare elit. Proin viverra fringilla vestibulum. Pellentesque ipsum ipsum, lacinia sed consequat a, interdum ac lorem. Morbi eu neque at sem convallis commodo. Proin lobortis vitae orci in consequat. Vestibulum et nunc tortor. Cras sed ante volutpat, efficitur magna non, commodo libero. Nulla porta quam quis tortor molestie molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            categorias: ["maquinaria1","maquinaria2"],
            precio_alquiler: "120.000",
            modelo: "MODELO"
        }
    ]
//se modificaron los atributos porque faltaban algunos y se modificaron como esta en la DB
//CAMBIO REALIZADO POR MAJO
    let usuarioIniciado
    if(localStorage.getItem("usuarioIniciado")&&localStorage.getItem("usuarioIniciado")!=""){
        usuarioIniciado = JSON.parse(localStorage.getItem("usuarioIniciado"))
    }else{
        usuarioIniciado = {
            nombre_usuario: "NO INICIADO",
            iniciado: false,
            contrasena: "NO INICIADO",
            nombre_real:"NO INICIADO",
            direccion:"NO INICIADO",
            telefono:"NO INICIADO",
            identificacion: "NO INICIADO",
            correo: "NO INICIADO",
            estado:"NO INICIADO"
        }
    }
    

    const [data, setData] = useState({
        usuarioIniciado,
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
