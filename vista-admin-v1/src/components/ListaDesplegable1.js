import Select from 'react-select'
import makeAnimate from 'react-select/animated'

const animatedComponents = makeAnimate()

function ListaDesplegable1({className, titulo, opciones, onChange, defaultValue}){
    return(
        <div style={{width: "100%"}}>
            <Select 
                placeholder={titulo}
                isMulti
                className={className}
                closeMenuOnSelect={false}
                options={opciones}
                defaultValue={defaultValue}
                components={animatedComponents}
                onChange={(e)=>{onChange(e)}}
                />
        </div>
    )
}
export default ListaDesplegable1