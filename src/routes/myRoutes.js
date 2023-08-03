import Abm from "../pages/dashboard/Abm";
import Header from "../components/header/Header";
import Home from "../pages/home/Home";
import Landing from "../pages/landingPage/Landing";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import { Route, Routes, useLocation } from "react-router-dom";
import UserProvider from "../context/UserContext";

const MyRoutes = () => {
  const redirect = useLocation();
  return (
    <>
    <UserProvider>
      {redirect.pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/abm" element={<Abm />} />
      </Routes>
    </UserProvider>
    </>
  );
};

export default MyRoutes;
