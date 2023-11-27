import Mago from '../../images/magonegro.jpg'
import Dragao from '../../images/dragaobranco.jpg'
import Slifer from '../../images/slifer.png'
import Dark from '../../images/Dark.webp'
import Luz from '../../images/Luz.png'
import { FaStar } from "react-icons/fa"

import './Topcards.sass'

const Topcards = () => {
  return (
    <div className='topcards'>
      <h1 id='nome_top'>Top cards</h1>
      <div className='principal'>
        <div className='container'>
          <div className='nome_carta'>
            <h1 id='nome_mago'>Mago Negro</h1>
            <img src={Dark} alt="Icone Dark" />
          </div>
          <div className='stars'>
            <div className='star'><FaStar  /></div>
            <div className='star'><FaStar  /></div>
            <div className='star'><FaStar  /></div>
            <div className='star'><FaStar  /></div>
            <div className='star'><FaStar  /></div>
            <div className='star'><FaStar  /></div>
            <div className='star'><FaStar  /></div>
          </div>
          <figure>
              <img src={Mago} alt="Mago negro" />
          </figure>
          <p>[MAGO] <br />O mago definitivo em termos de ataque e defesa. <br /> <br /> <br /><hr />ATK/2500 DEF/2100</p>
        </div>
        <div className='container' id='slifer'>
          <div className='nome_carta'>
            <h1>Slifer, o Dragão Celeste</h1>
            <img src={Luz} alt="Icone Luz" />
          </div>
          <div className='stars'>
            <div className='star'><FaStar  /></div>
            <div className='star'><FaStar  /></div>
            <div className='star'><FaStar  /></div>
            <div className='star'><FaStar  /></div>
            <div className='star'><FaStar  /></div>
            <div className='star'><FaStar  /></div>
            <div className='star'><FaStar  /></div>
            <div className='star'><FaStar  /></div>
            <div className='star'><FaStar  /></div>
            <div className='star'><FaStar  /></div>
          </div>
          <figure>
              <img src={Slifer} alt="Slifer" />
          </figure>
          <p>[BESTA DIVINA] <br />Os céus se turvam e os trovôes rugem, anunciando a vinda desta criatura antiga, e a alvorada do verdadeiro poder. <br /> <br /> <hr />ATK/X000 DEF/X000</p>
        </div>
        <div className='container'>
          <div className='nome_carta'>
            <h1 id='nome_dragao'>Dragão Branco de Olhos Azuis</h1>
            <img src={Luz} alt="Icone Luz" />
          </div>
          <div className='stars'>
            <div className='star'><FaStar  /></div>
            <div className='star'><FaStar  /></div>
            <div className='star'><FaStar  /></div>
            <div className='star'><FaStar  /></div>
            <div className='star'><FaStar  /></div>
            <div className='star'><FaStar  /></div>
            <div className='star'><FaStar  /></div>
            <div className='star'><FaStar  /></div>
          </div>
          <figure>
              <img src={Dragao} alt="Dragao branco" />
          </figure>
          <p>[DRAGÃO/NORMAL] <br />Este dragão lendário é uma poderosa máquina de destruição. Praticamente invencível, muito poucos enfrentaram esta magnífica criatura e viveram para contar a história. <hr />ATK/3000 DEF/2500</p>
        </div>
      </div>
      <div className='mais'>
        <button>Mais</button>
      </div>
    </div>
  )
}

export default Topcards