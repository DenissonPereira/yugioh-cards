import Mago from '../../images/magonegro.jpg'
import Dragao from '../../images/dragaobranco.jpg'
import Slifer from '../../images/slifer.png'
import Maga from '../../images/maga.webp'
import Obelisk from '../../images/obelisco.png'
import Brain from '../../images/BrainControl.webp'
import Magic from '../../images/spell.webp'
import Dark from '../../images/Dark.webp'
import Luz from '../../images/Luz.png'
import { FaStar } from "react-icons/fa"
import './Cartas.sass'

const Cartas = () => {
    return (
        <div className='cartas'>
            <div className='box_cartas'>
                <div className='caixa'>
                    <div className='carta_nome'>
                        <h1 id='mago_negro'>Mago Negro</h1>
                        <img src={Dark} alt="Icone Dark" />
                    </div>
                    <div className='estrelas'>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                    </div>
                    <figure className='figura_carta'>
                        <img src={Mago} alt="Mago negro" />
                    </figure>
                    <p>[MAGO] <br />O mago definitivo em termos de ataque e defesa. <br /> <br /> <br /><hr />ATK/2500 DEF/2100</p>
                </div>
                <div className='caixa' id='slifer'>
                    <div className='carta_nome'>
                        <h1>Slifer, o Dragão Celeste</h1>
                        <img src={Luz} alt="Icone Luz" />
                    </div>
                    <div className='estrelas'>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                    </div>
                    <figure className='figura_carta'>
                        <img src={Slifer} alt="Slifer" />
                    </figure>
                    <p>[BESTA DIVINA] <br />Os céus se turvam e os trovôes rugem, anunciando a vinda desta criatura antiga, e a alvorada do verdadeiro poder. <br /> <br /> <hr />ATK/X000 DEF/X000</p>
                </div>
                <div className='caixa'>
                    <div className='carta_nome'>
                        <h1 id='nome_dragao'>Dragão Branco de Olhos Azuis</h1>
                        <img src={Luz} alt="Icone Luz" />
                    </div>
                    <div className='estrelas'>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                    </div>
                    <figure className='figura_carta'>
                        <img src={Dragao} alt="Dragao branco" />
                    </figure>
                    <p>[DRAGÃO/NORMAL] <br />Este dragão lendário é uma poderosa máquina de destruição. Praticamente invencível, muito poucos enfrentaram esta magnífica criatura e viveram para contar a história. <hr />ATK/3000 DEF/2500</p>
                </div>
            </div>
            <div className='box_cartas'>
                <div className='caixa maga_ilusao'>
                    <div className='carta_nome'>
                        <h1 id='maga'>Maga da Ilusão Aprendiz</h1>
                        <img src={Dark} alt="Icone Dark" />
                    </div>
                    <div className='estrelas' id='maga_estrelas'>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                    </div>
                    <figure className='figura_carta'>
                        <img src={Maga} alt="Maga da Ilusão Aprendiz" />
                    </figure>
                    <p className='maga_ilusao'>[MAGO] <br />Durante o cálculo de dano, se outro monstro Mago de TREVAS seu batalhar um monstro do oponente (Efeito Rápido): você pode enviar este card da sua mão ou do campo com a face para cima para o Cemitério; esse monstro que você controla ganha 2000 de ATK/DEF apenas durante esse cálculo de dano. <br /> <br /> <br /><hr />ATK/2000 DEF/1700</p>
                </div>
                <div className='caixa obelisk'>
                    <div className='carta_nome'>
                        <h1>Obelisco, o Atormentador</h1>
                        <img src={Luz} alt="Icone Luz" />
                    </div>
                    <div className='estrelas'>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                    </div>
                    <figure className='figura_carta'>
                        <img src={Obelisk} alt="Obelisk" />
                    </figure>
                    <p className='obelisk'>[BESTA DIVINA] <br />Requer 3 Tributos para ser Invocado por Invocação-Normal (não pode ser Baixado Normalmente). A Invocação-Normal deste card não pode ser negada. Quando Invocado por Invocação-Normal, cards e efeitos não podem ser ativados. Nenhum duelista pode escolher este card como alvo de efeitos de card. Uma vez por turno, durante a Fase Final, se este card foi Invocado por Invocação-Especial: envie-o para o Cemitério. Você pode oferecer 2 monstros como Tributo; destrua todos os monstros que seu oponente controla. Este card não pode declarar um ataque no turno em que este efeito for ativado.<br /> <br /> <hr />ATK/4000 DEF/4000</p>
                </div>
                <div className='caixa brain'>
                    <div className='carta_nome brain'>
                        <h1 id='nome_brain'>Brain Control</h1>
                        <img src={Magic} alt="Magia" />
                    </div>
                    <div className='nome_magia' id='brain_estrelas'>
                        [CARD DE MAGIA]
                    </div>
                    <figure className='figura_carta'>
                        <img src={Brain} alt="Dragao branco" />
                    </figure>
                    <p>Pague 800 PV e, depois, escolha 1 monstro com a face para cima que seu oponente controla e que possa ser Invocado por Invocação-Normal/Baixado; tome o controle do alvo até a Fase Final.</p>
                </div>
            </div>
            <div className='box_cartas'>
                <div className='caixa'>
                    <div className='carta_nome'>
                        <h1 id='mago_negro'>Mago Negro</h1>
                        <img src={Dark} alt="Icone Dark" />
                    </div>
                    <div className='estrelas'>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                    </div>
                    <figure className='figura_carta'>
                        <img src={Mago} alt="Mago negro" />
                    </figure>
                    <p>[MAGO] <br />O mago definitivo em termos de ataque e defesa. <br /> <br /> <br /><hr />ATK/2500 DEF/2100</p>
                </div>
                <div className='caixa' id='slifer'>
                    <div className='carta_nome'>
                        <h1>Slifer, o Dragão Celeste</h1>
                        <img src={Luz} alt="Icone Luz" />
                    </div>
                    <div className='estrelas'>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                    </div>
                    <figure className='figura_carta'>
                        <img src={Slifer} alt="Slifer" />
                    </figure>
                    <p>[BESTA DIVINA] <br />Os céus se turvam e os trovôes rugem, anunciando a vinda desta criatura antiga, e a alvorada do verdadeiro poder. <br /> <br /> <hr />ATK/X000 DEF/X000</p>
                </div>
                <div className='caixa'>
                    <div className='carta_nome'>
                        <h1 id='nome_dragao'>Dragão Branco de Olhos Azuis</h1>
                        <img src={Luz} alt="Icone Luz" />
                    </div>
                    <div className='estrelas'>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                        <div className='estrela'><FaStar /></div>
                    </div>
                    <figure className='figura_carta'>
                        <img src={Dragao} alt="Dragao branco" />
                    </figure>
                    <p>[DRAGÃO/NORMAL] <br />Este dragão lendário é uma poderosa máquina de destruição. Praticamente invencível, muito poucos enfrentaram esta magnífica criatura e viveram para contar a história. <hr />ATK/3000 DEF/2500</p>
                </div>
            </div>
        </div>
    )
}

export default Cartas