import Landing from '../components/landingPage/Landing';
import Home from '../components/home/Home';
import {
  Route,
  Routes,
} from "react-router-dom";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default MyRoutes;