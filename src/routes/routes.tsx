import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Cards from '../pages/Cards';


function RoutesApp() {
    return ( 
        <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/yugioh-cards' element={<Cards />} />
        </Routes>
     );
}

export default RoutesApp;