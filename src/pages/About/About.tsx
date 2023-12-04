import Navbar from "../../components/layout/NavBar/NavScrollExample"
import Footer from "../../components/layout/Footer/Footer"
import Sobre from "../../components/Sobre/Sobre"
import Header from "../../components/layout/Header/Header"

import './About.sass'



const About = () => {
  return (
    <div id="about">
      <nav>
        <Navbar />
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