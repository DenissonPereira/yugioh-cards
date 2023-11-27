import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Cards from '../pages/Cards/Cards';
import About from '../pages/About/About';


function RoutesApp() {
    return ( 
        <Routes >
            <Route path='/yugioh-cards' element={<Home />} />
            <Route path='/yugioh-cards/cards' element={<Cards />} />
            <Route path='/yugioh-cards/about' element={<About />} />
        </Routes>
     );
}

export default RoutesApp;