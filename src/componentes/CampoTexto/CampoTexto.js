//import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {
    
    const placeholderModificado = `${props.placeholder}...`

    const { type = "text"} = props
    const manejarCambio = (event) => {
        
        props.actualizarValor(event.target.value)
    }

    return <div className={ `campo campo-${type}` }>
        <label>{props.title}</label>
        <input 
         placeholder={placeholderModificado}
         required={props.required}
         value={props.valor} 
         onChange={manejarCambio}
         type={type}/>
         
    </div>
}
export default CampoTexto