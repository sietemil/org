import { useState } from 'react';
import { v4 as uuid} from "uuid"
import Formulario from './componentes/Formulario/Formulario.js';
import Header from './componentes/Header/Header.js';
import './App.css';
import MiOrg from "./componentes/MiOrg/MiOrg.js"
import Equipo from './componentes/Equipo/Equipo.js';
import Footer from './componentes/Footer/Footer.jsx';


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{ id: uuid(), equipo: "Front End", foto: "https://github.com/harlandlohora.png", nombre: "Harland Lohora", puesto: "Instructor", fav: true  }, { id: uuid(), equipo: "Programación", foto: "https://github.com/genesysaluralatam.png", nombre: "Genesys Rondón", puesto: "Desarrolladora de software e instructora" , fav: true }, { id: uuid(), equipo: "UX y Diseño", foto: "https://github.com/JeanmarieAluraLatam.png", nombre: "Jeanmarie Quijada", puesto: "Instructora en Alura Latam" , fav: true }, { id: uuid(), equipo: "Programación", foto: "https://github.com/christianpva.png", nombre: "Christian Velasco", puesto: "Head de Alura e Instructor" , fav: true }, { id: uuid(), equipo: "Innovación y Gestión", foto: "https://github.com/JoseDarioGonzalezCha.png", nombre: "Jose Gonzalez", puesto: "Dev FullStack" , fav: true } ])
  const [equipos, actualizarEquipos] = useState([{id: uuid(),titulo:"Programación",colorPrimario: "#57C278",colorSecundario: "#D9F7E9"},{id: uuid(),titulo:"Front End",colorPrimario: "#82CFFA",colorSecundario: "#E8F8FF"},{id: uuid(),titulo:"Data Science",colorPrimario: "#A6D157",colorSecundario: "#F0F8E2"},{id: uuid(),titulo:"Devops",colorPrimario: "#E06B69",colorSecundario: "#FDE7E8"},{id: uuid(),titulo:"UX y Diseño",colorPrimario: "#DB6EBF",colorSecundario: "#FAE9F5"},{id: uuid(),titulo:"Movil",colorPrimario: "#FFBA05",colorSecundario: "#FFF5D9"},{id: uuid(),titulo:"Innovación y Gestión",colorPrimario: "#FF8A29",colorSecundario: "#FFEEDF"}])


  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }
  //Registrar Colaborador.

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colab", colaborador)
    //Spread operator.
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador.
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores);
  }


  const crearEquipo = (nuevoEquipo) => {
    console.log();
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid()}])
  }

  return (
    <div >
      <Header />
      
      {mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)} registrarColaborador={registrarColaborador} crearEquipo={crearEquipo}/>} 
    
      <MiOrg cambiarMostrar={cambiarMostrar} />
            
      {
        equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} eliminarColaborador={eliminarColaborador}/>)
      }

      <Footer />

    </div>
  );
}

export default App;
