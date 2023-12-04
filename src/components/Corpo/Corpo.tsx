import Logo from '../../images/logo.png'
import { Link } from "react-router-dom"

import './Corpo.sass'
import './Corpo_responsivo.sass'

const Corpo = () => {
  return (
    <div className="corpo">
        <div className="img">
            <p>Acompanhe as últimas notícias</p>
            <figure>
                <img src={Logo} alt="Logo" />
            </figure>
            
        </div>
        <div className="noticias">
            <h1> <span>&raquo;</span>Yu-Gi-Oh! Guia para Iniciantes <span>&laquo;</span></h1>
            <h2>Prepare-se para adquirir conhecimentos sobre como jogar o Yu-Gi-Oh! TRADING CARD GAME!</h2>
            <h3>Este material utiliza cenas exclusivas da renomada série televisiva para instruir e orientar você nos primeiros passos do aprendizado do jogo. Siga atentamente cada guia de "Como Jogar", que desmembrará as regras do jogo de maneira clara e acessível.</h3>
            <Link to='/yugioh-cards/news'><button className='botao'>Ler mais</button></Link>
        </div>
    </div>
  )
}

export default Corpo