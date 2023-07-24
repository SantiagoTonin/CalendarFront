import Landing from "../components/landingPage/Landing";
import Header from "../components/header/Header";
import Home from "../components/home/Home";
import Abm from "../components/abmTable/Abm";
import { Route, Routes, useLocation } from "react-router-dom";

const MyRoutes = () => {
  const redirect = useLocation();
  return (
    <>
      {redirect.pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/abm" element={<Abm />} />
      </Routes>
    </>
  );
};

export default MyRoutes;
