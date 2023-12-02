import Header from "../../components/layout/Header/Header"
import Corpo from "../../components/Corpo/Corpo"
import Topcards from "../../components/Topcards/Topcards"
import Conheca from "../../components/Conheca/Conheca"
import Footer from "../../components/layout/Footer/Footer"
import NavScrollExample from "../../components/layout/NavBar/NavScrollExample"

import './Home.sass'


const Home = () => {
  return (
    <div className="home" id="home">
      <nav>
        <NavScrollExample />
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