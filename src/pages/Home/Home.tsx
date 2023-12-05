import Header from "../../components/layout/Header/Header"
import Corpo from "../../components/Corpo/Corpo"
import Topcards from "../../components/Topcards/Topcards"
import Conheca from "../../components/Conheca/Conheca"
import Footer from "../../components/layout/Footer/Footer"
import NavScrollExample from "../../components/layout/NavBar/NavScrollExample"
import { WiMoonAltFirstQuarter } from "react-icons/wi"

import './Home.sass'
import { useState } from "react"


const Home = () => {
  const [backgroundColor, setBack] = useState('#FFF')
  const [color, setColor] = useState('#202022')

  const mudarCor = () => {
    if (backgroundColor == '#FFF') {
      setBack('#A5A5A5');
      setColor('#3E3E3E');
    } else {
      setBack('#FFF');
      setColor('#202022');
    }
  }

  return (
    <div className="home" id="home" style={{backgroundColor}}>
      <nav>
        <NavScrollExample />
        <button onClick={mudarCor} id="btn"><WiMoonAltFirstQuarter /></button>
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
      <div id="roda_pe" style={{color}}>
        <Footer />
      </div>
    </div>
  )
}

export default Home