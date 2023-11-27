import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="home">
      <nav className="menu">
        <ul>
          <li><Link to='/yugioh-cards'>Home</Link></li>
          <li><Link to='/yugioh-cards/cards'>Cards</Link></li>
          <li><Link to='/yugioh-cards/about'>About</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Home