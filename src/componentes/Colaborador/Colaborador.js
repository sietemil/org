import "./Colaborador.css"
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai"

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id, fav } = props.datos
    const { colorPrimario } = props
    const { eliminarColaborador } = props
    return <div className="colaborador" >
        <AiFillCloseCircle onClick={() => eliminarColaborador(id) } />
        <div className="encabezado" style={{ backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div >
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiOutlineHeart /> : <AiFillHeart color="blue" />}
        </div>
    </div>
}
export default Colaborador