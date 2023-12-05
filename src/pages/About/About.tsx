import Navbar from "../../components/layout/NavBar/NavScrollExample"
import Footer from "../../components/layout/Footer/Footer"
import Sobre from "../../components/Sobre/Sobre"
import Header from "../../components/layout/Header/Header"
import { WiMoonAltFirstQuarter } from "react-icons/wi"
import { useState } from "react"

import './About.sass'



const About = () => {
  const [backgroundColor, setBack] = useState('#FFF')

  const mudarCor = () => {
    if (backgroundColor == '#FFF') {
      setBack('#A5A5A5');
    } else {
      setBack('#FFF');
    }
  }
  return (
    <div id="about" style={{backgroundColor}}>
      <nav>
        <Navbar />
        <button onClick={mudarCor} id="btn"><WiMoonAltFirstQuarter /></button>
      </nav>
      <section>
        <Header />
      </section>
      <section className="sobre">
        <Sobre />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default About