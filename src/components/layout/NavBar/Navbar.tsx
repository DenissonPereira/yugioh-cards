import { Link } from "react-router-dom"

import './Navbar.sass'
import './Navbar_responsivo.sass'

const Navbar = () => {
    return (
        <div>
            <nav className="menu" id="menu">
                <p>Yu-Gi-Oh! <span>Cards</span></p>
                <ul>
                    <li><Link to='/yugioh-cards'>Home</Link></li>
                    <li><Link to='/yugioh-cards/cards'>Cards</Link></li>
                    <li><Link to='/yugioh-cards/news'>News</Link></li>
                    <li><Link to='/yugioh-cards/about'>About</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar