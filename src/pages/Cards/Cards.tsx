import Navbar from "../../components/layout/NavBar/Navbar"
import Footer from "../../components/layout/Footer/Footer"
import Cartas from "../../components/Cartas/Cartas"

import './Cards.sass'


const Cards = () => {
  return (
    <div className="cards">
      <nav>
        <Navbar />
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