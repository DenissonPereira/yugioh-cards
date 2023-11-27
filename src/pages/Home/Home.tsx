import Header from "../../components/Header/Header"
import Navbar from "../../components/NavBar/Navbar"
import Corpo from "../../components/Corpo/Corpo"
import Topcards from "../../components/Topcards/Topcards"

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
      <div id="corpo">
        <Corpo />
      </div>
      <div id="topcards">
        <Topcards />
      </div>
    </div>
  )
}

export default Home