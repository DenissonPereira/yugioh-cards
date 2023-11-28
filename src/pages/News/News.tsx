import Navbar from "../../components/NavBar/Navbar"
import Footer from "../../components/Footer/Footer"

import './News.sass'

const News = () => {
  return (
    <div className="news">
      <nav>
        <Navbar />
      </nav>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default News