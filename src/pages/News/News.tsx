import Navbar from "../../components/layout/NavBar/NavScrollExample"
import Footer from "../../components/layout/Footer/Footer"
import Header from "../../components/layout/Header/Header"
import { useState } from "react"
import { WiMoonAltFirstQuarter } from "react-icons/wi"
import Avo from "../../images/img/avo.jpg"
import Deuses from '../../images/img/deuses.webp'
import Mago from '../../images/img/mago_negro.jpg'

import './News.sass'
import './News_responsivo.sass'


const News = () => {
  const [backgroundColor, setBack] = useState('#FFF')

  const mudarCor = () => {
    if (backgroundColor == '#FFF') {
      setBack('#A5A5A5');
    } else {
      setBack('#FFF');
    }
  }
  return (
    <div className="news" style={{backgroundColor}}>
      <nav>
        <Navbar />
        <button onClick={mudarCor} id="btn"><WiMoonAltFirstQuarter /></button>
      </nav>
      <section className="exodia_img">
        <Header />
      </section>
      <section className="caixa_news">
        <h1><span>&raquo; </span>Notícias <span>&laquo;</span></h1>
        <div className="caixa_noticias">
          <div className="noticia_menor">
            <div className="news_inicio">
              <h1><span>&raquo; </span>Conhecendo um pouco mais sobre Yugi Moto e sua história <span>&laquo;</span></h1>
              <h2>Yugi Moto é o protagonista de Yu-Gi-Oh!, um anime e mangá. Sua história gira em torno de desafios em jogos de cartas, especialmente o Duelo de Monstros, enquanto ele descobre o poder de um antigo quebra-cabeça do milênio que altera seu destino.</h2>
            </div>
            <div className="linha_news">
              <div className="noticia1">
                <figure>
                  <img src={Avo} alt="Avo de Yugi" />
                </figure>
                <h1><strong>Conheça mais sobre o deck do avô de Yugi</strong></h1>
                <h2>O avô de Yugi em Yu-Gi-Oh! é Solomon Muto, um experiente jogador de jogos de tabuleiro e dono da loja de jogos "Kame Game"...</h2>
                <button>LER MAIS</button>
              </div>
              <div className="noticia2">
                <figure>
                  <img src={Deuses} alt="Deuses" />
                </figure>
                <h1><strong>Conheça as cartas dos deuses egípcios</strong></h1>
                <h2>
                  As cartas dos deuses egípcios são elementos fundamentais do jogo de cartas Yu-Gi-Oh!, originário do Japão. Cada carta representa um deus ou ser mitológico do Antigo Egito, conferindo habilidades únicas aos jogadores durante as partidas...</h2>
                <button>LER MAIS</button>
              </div>
            </div>
          </div>
          <div className="noticia_maior">
            <figure>
              <img src={Mago} alt="Yugi e Mago Negro" />
            </figure>
            <div className="noticia_fig_maior">
              <h1>O faraó egípcio, mago negro e Yugi formam uma conexão intrigante, desencadeando desafios épicos em Yu-Gi-Oh!</h1>
              <h2>O Mago Negro é uma icônica carta no jogo de cartas Yu-Gi-Oh!, representando um feiticeiro poderoso vestido de negro. Conhecido por sua presença imponente e habilidades mágicas, o Mago Negro é frequentemente associado ao protagonista Yugi na série...</h2>
              <button>LER MAIS</button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default News