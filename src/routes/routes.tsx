import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Cards from '../pages/Cards/Cards';


function RoutesApp() {
    return ( 
        <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/yugioh-cards' element={<Cards />} />
        </Routes>
     );
}

export default RoutesApp;