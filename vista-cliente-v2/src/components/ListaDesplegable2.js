import Select from 'react-select'
import makeAnimate from 'react-select/animated'

const opciones = [
    {value: "Informacion Personal", label:"Informacion Personal"},
    {value: "Contraseña y Seguridad", label:"Contraseña y Seguridad"},
    {value: "Ayuda y Asistencia", label:"Ayuda y Asistencia"},
    {value: "Cerrar Sesion", label:"Cerrar Sesion"}
]

const animatedComponents= makeAnimate()

function ListaDesplegable1(){
    return(
        <div style={{width: "27%"}}>

            <Select
            closeMenuOnSelect={false}
            options={opciones}
            components={animatedComponents}
            />
        </div>
    )
}
export default ListaDesplegable2