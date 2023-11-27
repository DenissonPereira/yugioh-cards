import Logo from '../../images/logo.png'

import './Corpo.sass'

const Corpo = () => {
  return (
    <div className="corpo">
        <div className="img">
            <figure>
                <img src={Logo} alt="Logo" />
            </figure>
            <p>Acompanhe as últimas notícias</p>
        </div>
        <div className="noticias">
            <h1>Yu-Gi-Oh! Guia para Iniciantes</h1>
            <h2>Prepare-se para adquirir conhecimentos sobre como jogar o Yu-Gi-Oh! TRADING CARD GAME!</h2>
            <h3>Este material utiliza cenas exclusivas da renomada série televisiva para instruir e orientar você nos primeiros passos do aprendizado do jogo. Siga atentamente cada guia de "Como Jogar", que desmembrará as regras do jogo de maneira clara e acessível.</h3>
            <button className='botao'>Ler mais</button>
        </div>
    </div>
  )
}

export default Corpo