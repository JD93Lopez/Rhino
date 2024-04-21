import React, { useState, useEffect, createContext } from "react";
import axios from "../axios";

export const DataContext = createContext();

// Exporta el contexto y los arrays de datos
export const DataProvider = (props) => {

    // axios.api("ejemplo").then((res)=>{
    //     console.log(res.data)
    // })

    let productos = []

    axios.api(`obtener/productos`).then((res)=>{
        try{
            productos = res.data.Res
        }catch(e){}
    })
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
