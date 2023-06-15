import Landing from '../components/landingPage/Landing';
import Home from '../components/home/Home';
import Abm from '../components/abmTable/Abm';
import {
  Route,
  Routes,
} from "react-router-dom";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Home />} />
      <Route path='/abm' element={<Abm />} />
    </Routes>
  );
}

export default MyRoutes;