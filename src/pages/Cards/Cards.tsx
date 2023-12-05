import NavScrollExample from "../../components/layout/NavBar/NavScrollExample"
import Footer from "../../components/layout/Footer/Footer"
import Cartas from "../../components/Cartas/Cartas"
import { useState } from "react"
import { WiMoonAltFirstQuarter } from "react-icons/wi"

import './Cards.sass'


const Cards = () => {
  const [backgroundColor, setBack] = useState('#FFF')

  const mudarCor = () => {
    if (backgroundColor == '#FFF') {
      setBack('#A5A5A5');
    } else {
      setBack('#FFF');
    }
  }
  return (
    <div className="cards" style={{ backgroundColor }}>
      <nav>
        <NavScrollExample />
        <button onClick={mudarCor} id="btn"><WiMoonAltFirstQuarter /></button>
      </nav>
      <section className="as_cartas">
        <Cartas />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Cards