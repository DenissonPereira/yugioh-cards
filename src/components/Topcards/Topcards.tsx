import Mago from '../../images/magonegro.jpg'
import Dragao from '../../images/dragaobranco.jpg'
import Slifer from '../../images/slifer.png'
import { FaStar } from "react-icons/fa"

import './Topcards.sass'

const Topcards = () => {
  return (
    <div className='topcards'>
      <h1>Top cards</h1>
      <div className='principal'>
        <div className='container'>
          <h1>Mago Negro</h1>
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
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non harum doloremque dignissimos tenetur dolorum eum quisquam sunt tempora vero molestias sit accusamus consequatur ipsa fuga ducimus accusantium, architecto ex ratione.</p>
        </div>
        <div className='container'>
          <h1>Slifer</h1>
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
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non harum doloremque dignissimos tenetur dolorum eum quisquam sunt tempora vero molestias sit accusamus consequatur ipsa fuga ducimus accusantium, architecto ex ratione.</p>
        </div>
        <div className='container'>
          <h1>Dragao Branco</h1>
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
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non harum doloremque dignissimos tenetur dolorum eum quisquam sunt tempora vero molestias sit accusamus consequatur ipsa fuga ducimus accusantium, architecto ex ratione.</p>
        </div>
      </div>
    </div>
  )
}

export default Topcards