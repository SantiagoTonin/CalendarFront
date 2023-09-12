import Abm from "../pages/dashboard/Abm";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/Home";
import Landing from "../pages/landingPage/Landing";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PassRecovery from "../pages/passrecovery/PassRecovery";
import ChangePasswordPage from "../pages/passrecovery/ChangePasswordPage";
import UserProfile from "../pages/userProfile/UserProfile";
import { Route, Routes, useLocation } from "react-router-dom";
import ErrorPage from "../pages/error404/Error404";

const MyRoutes = () => {
  const redirect = useLocation();
  return (
    <>
      {redirect.pathname !== "/" && redirect.pathname !== "/error404" && (
        <Header />
      )}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/abm" element={<Abm />} />
        <Route path="/passwordRecovery" element={<PassRecovery />} />
        <Route path="/changePassword" element={<ChangePasswordPage />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/error404" element={<ErrorPage />} />
      </Routes>
      {redirect.pathname !== "/error404" && <Footer />}
    </>
  );
};

export default MyRoutes;
