import Avatar from '../../../images/exodia.png'
import Logo from '../../../images/logo.png'

import './Header.sass'
import './Header_responsivo.sass'

const Header = () => {
  return (
    <div className="figura" id='exodia_fig'>
        <img src={Avatar} alt="Exodia" />
        <div className='logo'>
            <img src={Logo} alt="Logo" />
        </div>
    </div>
  )
}

export default Header