import Header from "../../components/Header/Header"
import Navbar from "../../components/NavBar/Navbar"

import './Home.sass'

const Home = () => {
  return (
    <div className="home">
      <nav>
        <Navbar />
      </nav>
      <figure>
        <Header />
      </figure>
    </div>
  )
}

export default Home