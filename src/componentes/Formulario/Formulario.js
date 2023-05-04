import { useState  } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto.js"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario = (props) => {
    const [nombre, actualizarNombre] = useState ("")
    const [puesto, actualizarPuesto] = useState ("")
    const [foto, actualizarFoto] = useState("")
    const [equipo,actualizarEquipo] = useState("")
    const { registrarColaborador, crearEquipo } = props

    const [titulo, actualizarTitulo] = useState ("")
    const [color, actualizarColor] = useState ("")

    const manejarEnvio = (event) => {
        event.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {nombre,puesto,foto,equipo}        
        props.registrarColaborador(datosAEnviar)
        
    }
    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color});
    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto title="Nombre" placeholder='Ingresar nombre' required valor={nombre} actualizarValor={actualizarNombre} />
            <CampoTexto title="Puesto" placeholder='Ingresar puesto' required valor={puesto} actualizarValor={actualizarPuesto} />
            <CampoTexto title="Foto" placeholder='Ingresar enlace foto' required valor={foto} actualizarValor={actualizarFoto} />
            <ListaOpciones valor={equipo} 
            actualizarEquipo={actualizarEquipo} 
            equipos={props.equipos}/>
            <Boton texto="Crear colaborador propio." />
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <CampoTexto title="Titulo" placeholder='Ingresar titulo' required valor={titulo} actualizarValor={actualizarTitulo} />
            <CampoTexto title="Color" placeholder='Ingresar color ' required valor={color} actualizarValor={actualizarColor} type="color" />
            <Boton texto="Registrar equipo." />
        </ form>
    </section>
}

export default Formulario
