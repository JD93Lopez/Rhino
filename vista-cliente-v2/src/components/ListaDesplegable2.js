import Select from 'react-select'
import makeAnimate from 'react-select/animated'
import { useNavigate } from "react-router-dom";
import { DataContext } from './DataProvider';
import { useContext } from 'react';

const opciones = [
    {value: "Informacion Personal", label:"Informacion Personal"},
    {value: "Contraseña y Seguridad", label:"Contraseña y Seguridad"},
    {value: "Ayuda y Asistencia", label:"Ayuda y Asistencia"},
    {value: "Cerrar Sesion", label:"Cerrar Sesion"}
]

const animatedComponents= makeAnimate()

function ListaDesplegable2({titulo}){
    const navigate = useNavigate()
    const dataContext = useContext(DataContext)
    console.log(dataContext.usuarioIniciado)
    let handleSeleccion = (e) => {
        e.value

        switch(e.value){
            case "Informacion Personal": 
                navigate("/ventana-de-informacin-personal")
            break;
            case "Contraseña y Seguridad":
                navigate("/ventana-de-contrasea-y-seguridad")
            break;
            case "Ayuda y Asistencia":
                navigate("/ventana-de-ayuda-y-asistencia")
            break;
            case "Cerrar Sesion":
                dataContext.usuarioIniciado.iniciado = false;
                navigate("/ventana-principal-2")
            break;
            default:
                ;
        }
        
    } 

    return(
        <div style={{width: "120%"}}>
            <Select
                styles={{control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? 'rgb(100,100,255,0.5)' : 'black',
                    backgroundColor: "var(--color-sandybrown-100)",
                    borderWidth: "2px",
                  })}}
                placeholder={titulo}
                closeMenuOnSelect={false}
                options={opciones}
                components={animatedComponents}
                onChange={(e)=>handleSeleccion(e)}
            />
        </div>
    )
}
export default ListaDesplegable2