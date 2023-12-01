import Navbar from "../../components/layout/NavBar/Navbar"
import Footer from "../../components/layout/Footer/Footer"
import Header from "../../components/layout/Header/Header"

import Avo from "../../images/img/avo.jpg"

import './News.sass'


const News = () => {
  return (
    <div className="news">
      <nav>
        <Navbar />
      </nav>
      <section className="exodia_img">
        <Header />
      </section>
      <section className="caixa_news">
        <div>
          <div className="noticia_menor">
            <h1>Conhecendo um pouco mais sobre Yugi Moto e sua história</h1>
            <h2>Yugi Moto é o protagonista de Yu-Gi-Oh!, um anime e mangá. Sua história gira em torno de desafios em jogos de cartas, especialmente o Duelo de Monstros, enquanto ele descobre o poder de um antigo quebra-cabeça do milênio que altera seu destino.</h2>
            <div className="noticia1">
              <figure>
                <img src={Avo} alt="Avo de Yugi" />
              </figure>
              <h1><strong>Conheça mais sobre o deck do avô de Yugi</strong></h1>
              <h2>O avô de Yugi em Yu-Gi-Oh! é Solomon Muto, um experiente jogador de jogos de tabuleiro e dono da loja de jogos "Kame Game"</h2>
            </div>
            <div className="noticia2">

            </div>
          </div>
          <div className="noticia_maior">

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