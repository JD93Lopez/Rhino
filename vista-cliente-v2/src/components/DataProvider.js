import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [usuarios, setUsuarios] = useState([
        {
            nombreUsuario: "Usuario1",
            nombreCompleto: "Nombre usuario 1",
            email: "1",
            telefono: "1",
            estado: "1"
        },
        {
            nombreUsuario: "Usuario2",
            nombreCompleto: "2",
            email: "2",
            telefono: "2",
            estado: "2"
        },
        {
            nombreUsuario: "Usuario3",
            nombreCompleto: "Nombre Completo",
            email: "email.usuario3@gmail.com",
            telefono: "3003333333",
            estado: "ACTIVADO"
        }
    ]);

    const agregarUsuario = (usuarioNuevo) => {
        setUsuarios([...usuarios, usuarioNuevo]);
    };

    const value = {
        usuarios,
        agregarUsuario
    };
    
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    );
};
