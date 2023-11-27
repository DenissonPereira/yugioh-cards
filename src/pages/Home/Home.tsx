import Header from "../../components/Header/Header"
import Navbar from "../../components/NavBar/Navbar"
import Corpo from "../../components/Corpo/Corpo"
import Topcards from "../../components/Topcards/Topcards"
import Conheca from "../../components/Conheca/Conheca"
import Footer from "../../components/Footer/Footer"

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
      <div id="conheca">
        <Conheca />
      </div>
      <div id="roda_pe">
        <Footer />
      </div>
    </div>
  )
}

export default Home