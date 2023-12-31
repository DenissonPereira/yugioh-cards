import Empresa from '../../../images/empresas.png'
import { FaFacebookSquare } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"
import { FaInstagramSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"

import './Footer.sass'
import './Footer_responsivo.sass'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_1'>
            <h1><span>&raquo;</span> CONHEÇA NOSSOS PARCEIROS <span>&laquo;</span></h1>
            <div className='caixa_footer_1'>
                <div className='caixa_footer'>
                    <img src={Empresa} alt="Empresa 1" />
                    <h1>EMPRESA 1</h1>
                    <p>Somos a <strong>Empresa 1</strong>, líder na área de tecnologia gamer. Convidamos você a descobrir nossos produtos exclusivos e aproveitar ofertas especiais desenvolvidas especialmente para os usuários deste site. Explore o universo da melhor tecnologia para gamers conosco!</p>
                    <button>Conhecer</button>
                </div>
                <div className='caixa_footer'>
                    <img src={Empresa} alt="Empresa 2" />
                    <h1>EMPRESA 2</h1>
                    <p>Seja bem-vindo à <strong>Empresa 2</strong>, líder em suporte para aparelhos eletrônicos. Descubra nossos serviços especializados e aproveite ofertas exclusivas, especialmente criadas para os usuários deste site. Conte conosco para uma experiência de suporte incomparável!</p>
                    <button>Conhecer</button>
                </div>
                <div className='caixa_footer'>
                    <img src={Empresa} alt="Empresa 3" />
                    <h1>EMPRESA 3</h1>
                    <p>Explore a excelência na coleção de cards conosco, na <strong>Empresa 3</strong> - sua loja líder nesse universo fascinante. Descubra nossa variedade única e aproveite ofertas exclusivas preparadas especialmente para os apaixonados por cards. Sua jornada no mundo dos colecionáveis começa aqui!</p>
                    <button>Conhecer</button>
                </div>
            </div>
        </div>
        <div className='footer_2'>
            <div className='sobre_roda_pe'>
                <h1><span>&raquo;</span> Yugioh! Cards <span>&laquo;</span></h1>
                <p><strong>Yu-Gi-Oh!</strong> Cards é um projeto sem fins lucrativos com o objetivo exclusivo de proporcionar experiências educativas. Este projeto não visa gerar receitas financeiras, mas sim servir como uma ferramenta didática para os entusiastas interessados no universo do Yu-Gi-Oh! Trading Card Game. </p>
                <div className='botoes'>
                    <Link to='/yugioh-cards#navbar'><button>Home</button></Link>
                    <Link to='/yugioh-cards/cards'><button>Cards</button></Link>
                    <Link to='/yugioh-cards/news'><button>News</button></Link>
                    <Link to='/yugioh-cards/about'><button>About</button></Link>

                </div>
            </div>
            <div className='noticias_roda_pe'>
                <h1><span>&raquo;</span> Últimas Notícias <span>&laquo;</span></h1>
                <p>&diams; Novo conjunto de cartas Yu-Gi-Oh! revela monstros poderosos e estratégias inovadoras;</p>
                <p>&diams; Campeonato Mundial de Yu-Gi-Oh! reúne duelistas talentosos de todo o mundo;</p>
                <p>&diams; Lançamento de edição limitada comemora o aniversário de 25 anos do Yu-Gi-Oh! Trading Card Game.</p>
            </div>
            <div className='redes_roda_pe'>
                <h1><span>&raquo;</span> Siga-nos: <span>&laquo;</span></h1>
                <div className='redes'>
                    <div className='facebook' title='Facebook'>
                        <FaFacebookSquare size={40}  />
                    </div>
                    <div className='github' title='GitHub'>
                        <FaGithub size={40} />
                    </div>
                    <div className='instagram' title='Instagram'>
                        <FaInstagramSquare size={40} />
                    </div>
                    <div className='link' title='LinkedIn'>
                        <FaLinkedin size={40} />
                    </div>
                </div>
            </div>
        </div>
        <div className='footer_3'>
        <p>Este site é uma criação para fins de aprendizado. Não representa uma entidade real.</p> <br />
        <p>	&copy; 2023. <span>Denisson Pereira</span>.</p>
        </div>
    </div>

  )
}

export default Footer