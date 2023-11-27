import Empresa from '../../images/empresas.png'
import { FaFacebookSquare } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"
import { FaInstagramSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

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
                    <h1>Card Title</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloremque quaerat veritatis dolore recusandae obcaecati. Ipsum minima reiciendis itaque laboriosam animi cum veritatis maiores officiis laudantium perferendis. Alias, placeat cum?</p>
                    <button>Conhecer</button>
                </div>
                <div className='caixa_footer'>
                    <img src={Empresa} alt="Empresa 2" />
                    <h1>Card Title</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloremque quaerat veritatis dolore recusandae obcaecati. Ipsum minima reiciendis itaque laboriosam animi cum veritatis maiores officiis laudantium perferendis. Alias, placeat cum?</p>
                    <button>Conhecer</button>
                </div>
                <div className='caixa_footer'>
                    <img src={Empresa} alt="Empresa 3" />
                    <h1>Card Title</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloremque quaerat veritatis dolore recusandae obcaecati. Ipsum minima reiciendis itaque laboriosam animi cum veritatis maiores officiis laudantium perferendis. Alias, placeat cum?</p>
                    <button>Conhecer</button>
                </div>
            </div>
        </div>
        <div className='footer_2'>
            <div className='sobre_roda_pe'>
                <h1><span>&raquo;</span> Yugioh! Cards <span>&laquo;</span></h1>
                <p><strong>Yu-Gi-Oh!</strong> Cards é um projeto sem fins lucrativos com o objetivo exclusivo de proporcionar experiências educativas. Este projeto não visa gerar receitas financeiras, mas sim servir como uma ferramenta didática para os entusiastas interessados no universo do Yu-Gi-Oh! Trading Card Game. </p>
                <div className='botoes'>
                    <button>Home</button>
                    <button>Cards</button>
                    <button>News</button>
                    <button>About</button>
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