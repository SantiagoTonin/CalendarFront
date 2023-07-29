import Abm from "../components/abmTable/Abm";
import Header from "../components/header/Header";
import Home from "../components/home/Home";
import Landing from "../components/landingPage/Landing";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import { Route, Routes, useLocation } from "react-router-dom";

const MyRoutes = () => {
  const redirect = useLocation();
  return (
    <>
      {redirect.pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/abm" element={<Abm />} />
      </Routes>
    </>
  );
};

export default MyRoutes;
