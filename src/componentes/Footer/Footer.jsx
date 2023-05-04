import "./Footer.css"
import { AiFillAccountBook, AiTwotoneFileAdd } from "react-icons/ai"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
            <AiFillAccountBook />
            <AiTwotoneFileAdd />
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Alura derechos reservados compartidos Hernan Romero. </strong>
    </footer>
}

export default Footer