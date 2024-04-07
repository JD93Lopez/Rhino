import Select from 'react-select'
import makeAnimate from 'react-select/animated'

const opciones = [
    {value: "Vehiculo 1", label:"Vehiculo1"},
    {value: "Vehiculo 2", label:"Vehiculo2"},
    {value: "Vehiculo 3", label:"Vehiculo3"},
    {value: "Vehiculo 4", label:"Vehiculo4"}
]

const animatedComponents= makeAnimate()

function ListaDesplegable1(){
    return(
        <div style={{width: "27%"}}>

            <Select 
            isMulti
            closeMenuOnSelect={false}
            options={opciones}
            components={animatedComponents}
            />
        </div>
    )
}
export default ListaDesplegable1