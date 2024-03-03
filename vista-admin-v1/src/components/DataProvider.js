import React, { useState, useEffect, createContext } from "react";

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [data, setData] = useState([])

    useEffect(( ) => {
        //Obtener data
        const data1Obtenida = "linea 10 ./components/DataProvider.js"
        setData({
            data1: data1Obtenida
        })
    },[])

    const value = data
    
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}