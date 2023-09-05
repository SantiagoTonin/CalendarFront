import Abm from "../pages/dashboard/Abm";
import Header from "../components/header/Header";
import Home from "../pages/home/Home";
import Landing from "../pages/landingPage/Landing";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PassRecovery from "../pages/passrecovery/PassRecovery";
import ChangePasswordPage from "../pages/passrecovery/ChangePasswordPage";
import UserProfile from "../pages/userProfile/UserProfile";
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
        <Route path="/passwordRecovery" element={<PassRecovery />} />
        <Route path="/changePassword" element={<ChangePasswordPage />} />
        <Route path="/userProfile" element={<UserProfile />} />
      </Routes>
    </>
  );
};

export default MyRoutes;
